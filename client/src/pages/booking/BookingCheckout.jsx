import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BookingStep from "../../component/booking/BookingStep.jsx";
import { FaEquals, FaMinus } from "react-icons/fa6";
import axios from "axios";
import { CheckoutPage } from "../../component/payments/Checkout.jsx";

export default function BookingCheckout() {
  const nav = useNavigate();
  const [radio, setRadio] = useState("coupon");
  const [selectedDiscount, setSelectedDiscount] = useState("default");
  const [appliedDiscount, setAppliedDiscount] = useState("default");
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const userInfo = useSelector((state) => state.booking.userInfo);
  const hasCheckedLogin = useRef(false);
  const couponList = useSelector((state) => state.myinfo.mycoupon);
  const totalPaymentPrice = useSelector(
    (state) => state.payment.total_payment_price
  ); //할인 반영 전 예상 가격
  const backFlightNum = useSelector((state) => state.booking.backFlightNum);
  const goFlightNum = useSelector((state) => state.booking.goFlightNum);

  // 승객 정보 가져오기
  const passengers = useSelector((state) => state.booking.passengers);

  // 승객 이름을 공백 없이 배열로 변환
  const passenger_names =
    passengers && passengers.length > 0
      ? passengers.map(
          (passenger) => `${passenger.kname_first}${passenger.kname_last}`
        )
      : []; // 공백 없이 첫 이름과 마지막 이름 결합

  useEffect(() => {
    if (hasCheckedLogin.current) return;
    hasCheckedLogin.current = true;

    if (!isLoggedIn) {
      const select = window.confirm(
        "로그인 서비스가 필요합니다. \n로그인 하시겠습니까?"
      );
      select ? nav("/login") : nav("/");
    }
  }, [isLoggedIn]);

  // 할인 정보 시작
  const applyDiscount = () => {
    setAppliedDiscount(selectedDiscount);
  };

  const getDiscountAmount = () => {
    if (!appliedDiscount || appliedDiscount === "default") return 0;

    if (appliedDiscount.endsWith("%")) {
      const percent = parseFloat(appliedDiscount.replace("%", ""));
      const discount = (totalPaymentPrice * percent) / 100;
      return Math.min(discount, totalPaymentPrice);
    }

    const discount = parseInt(appliedDiscount, 10);
    return Math.min(discount, totalPaymentPrice);
  };

  const discountAmount = getDiscountAmount();
  const finalAmount = totalPaymentPrice - discountAmount;
  // 할인 정보 끝

  const handlePayment = () => {
    const id = userInfo.id;

    // passenger_names 배열을 그대로 전달
    axios
      .post("http://localhost:9000/payment/res", {
        id,
        passenger_names, // 승객 이름을 배열로 전달
        fnum: [goFlightNum, backFlightNum],
      })
      .then((res) => {
        const success = res.data?.success;
        const affected = res.data?.data?.[0]?.affectedRows >= 1;
        alert(success && affected ? "예약이 완료되었습니다." : "예약 실패");
      })
      .catch(() => alert("예약 중 오류 발생"));
  };

  return (
    <div className="booking-payment">
      <div className="booking-payment-wrap">
        <BookingStep text="payment" />
      </div>

      <div className="booking-passenger-contents">
        <p className="booking-page-title">4. 결제</p>

        {/* 할인 영역 */}
        <section className="noneExtras">
          <h3>
            <span>쿠폰/카드 제휴 할인</span>
          </h3>
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
                    value={selectedDiscount}
                    onChange={(e) => setSelectedDiscount(e.target.value)}
                  >
                    <option value="default">선택</option>
                    {couponList &&
                      couponList.map((coupon) => (
                        <option
                          key={coupon.coupon_code}
                          value={coupon.discount_price}
                        >
                          {coupon.coupon_name} (₩
                          {Number(coupon.discount_price).toLocaleString()})
                        </option>
                      ))}
                  </select>
                  <div>
                    <button className="sale-button" onClick={applyDiscount}>
                      선택
                    </button>
                  </div>
                </div>
                <ul>
                  <li>- 쿠폰 금액이 항공운임보다 크면 잔액 소멸</li>
                  <li>- 유효기간, 사용 조건 확인 필요</li>
                  <li>- 중복 할인 불가</li>
                  <li>- 비정상 사용 시 예약 취소</li>
                </ul>
              </div>
            )}

            {radio === "card" && (
              <div className="check-out-card">
                <div className="select-warpper">
                  <select
                    value={selectedDiscount}
                    onChange={(e) => setSelectedDiscount(e.target.value)}
                  >
                    <option value="default">선택</option>
                    <option value="5%">5% 카카오페이 할인쿠폰</option>
                    <option value="15%">15% 토스페이 할인쿠폰</option>
                  </select>
                  <div>
                    <button className="sale-button" onClick={applyDiscount}>
                      선택
                    </button>
                  </div>
                </div>
                <ul>
                  <li>- 부분 취소 불가</li>
                  <li>- 혜택 카드로 결제 필요</li>
                  <li>- 카드사 검증 실패 시 예약 초기화</li>
                  <li>- KB국민카드 홈페이지 참고</li>
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* 결제 정보 */}
        <section className="checkout-totalprice">
          <h3>
            <span>결제정보</span>
          </h3>
          <div className="calc-warp">
            <div className="calc-item">
              <span>총 운임</span>
              <strong>
                KRW <span>{totalPaymentPrice.toLocaleString()}</span>
              </strong>
            </div>
            <div className="operation">
              <FaMinus />
            </div>
            <div className="calc-item">
              <span>총 할인 금액</span>
              <strong>
                KRW <span>{discountAmount.toLocaleString()}</span>
              </strong>
            </div>
            <div className="operation">
              <FaEquals />
            </div>
            <div className="calc-item">
              <span>최종 결제 금액</span>
              <strong>
                KRW <span>{finalAmount.toLocaleString()}</span>
              </strong>
            </div>
          </div>

          <div className="pay-wrapper">
            <CheckoutPage finalAmount={finalAmount} />
          </div>
        </section>

        <div className="order-button-warp">
          <button onClick={handlePayment}>결제</button>
        </div>
      </div>
    </div>
  );
}
