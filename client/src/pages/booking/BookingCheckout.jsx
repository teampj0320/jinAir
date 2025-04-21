import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMyCoupon, applyCoupon } from '../../service/myinfoApi.js';
import { FaEquals, FaMinus } from "react-icons/fa6";
import { CheckoutPage } from "../../component/payments/Checkout.jsx";

export default function BookingCheckout() {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [radio, setRadio] = useState("coupon");
  const [selectedCouponCode, setSelectedCouponCode] = useState("default");
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const myCouponList = useSelector((state) => state.myinfo.mycoupon);
  const totalPaymentPrice = useSelector((state) => state.payment.total_payment_price);

  useEffect(() => {
    if (!isLoggedIn) {
      const select = window.confirm("로그인 서비스가 필요합니다. \n로그인 하시겠습니까?");
      select ? nav("/login") : nav("/");
    }
  }, [isLoggedIn]);

  // 사용 가능한 쿠폰 불러오기
  useEffect(() => {
    dispatch(getMyCoupon());
  }, []);

  const handleUseCoupon = (couponCode) => {
    const coupon = myCouponList.find((c) => c.coupon_code === couponCode);
    if (!coupon) return;

    dispatch(applyCoupon(couponCode));
    setAppliedCoupon(coupon); // 실제 쿠폰 객체 저장
  };

  const getDiscountAmount = () => {
    if (!appliedCoupon) return 0;
    const discount = parseInt(appliedCoupon.discount_price, 10);
    return Math.min(discount, totalPaymentPrice);
  };

  const discountAmount = getDiscountAmount();
  const finalAmount = totalPaymentPrice - discountAmount;

  return (
    <div className="booking-payment">
      <div className="booking-payment-wrap">
        {/* 기타 내용 */}
      </div>

      <div className="booking-passenger-contents">
        <p className="booking-page-title">4. 결제</p>

        {/* 할인 영역 */}
        <section className="noneExtras">
          <h3><span>쿠폰/카드 제휴 할인</span></h3>
          <div className="check-out-page">
            <div className="radio-wrapper">
              <span>
                <input
                  type="radio"
                  name="discount"
                  value="coupon"
                  checked={radio === "coupon"}
                  onChange={(e) => setRadio(e.target.value)}
                />
                <label>쿠폰할인</label>
              </span>
              <span>
                <input
                  type="radio"
                  name="discount"
                  value="card"
                  checked={radio === "card"}
                  onChange={(e) => setRadio(e.target.value)}
                />
                <label>카드 제휴 할인</label>
              </span>
            </div>

            {radio === "coupon" && (
              <div className="check-out-coupon">
                <div className="select-warpper">
                  <select
                    value={selectedCouponCode}
                    onChange={(e) => setSelectedCouponCode(e.target.value)}
                  >
                    <option value="default">선택</option>
                    {myCouponList &&
                      myCouponList
                        .filter(coupon => coupon.used === 0)
                        .map((coupon) => (
                          <option key={coupon.coupon_code} value={coupon.coupon_code}>
                            {coupon.coupon_name} (₩{Number(coupon.discount_price).toLocaleString()})
                          </option>
                        ))}
                  </select>
                  <div>
                    <button
                      className="sale-button"
                      onClick={() => handleUseCoupon(selectedCouponCode)}
                      disabled={selectedCouponCode === "default"}
                    >
                      선택
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 결제 정보 */}
        <section className="checkout-totalprice">
          <h3><span>결제정보</span></h3>
          <div className="calc-warp">
            <div className="calc-item">
              <span>총 운임</span>
              <strong>KRW <span>{totalPaymentPrice.toLocaleString()}</span></strong>
            </div>
            <div className="operation"><FaMinus /></div>
            <div className="calc-item">
              <span>총 할인 금액</span>
              <strong>KRW <span>{discountAmount.toLocaleString()}</span></strong>
            </div>
            <div className="operation"><FaEquals /></div>
            <div className="calc-item">
              <span>최종 결제 금액</span>
              <strong>KRW <span>{finalAmount.toLocaleString()}</span></strong>
            </div>
          </div>

          <div className="pay-wrapper">
            <CheckoutPage finalAmount={finalAmount} />
          </div>
        </section>
      </div>
    </div>
  );
}
