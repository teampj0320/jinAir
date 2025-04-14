import React, { useState } from "react";
import BookingStep from "../../component/booking/BookingStep.jsx";
import { FaEquals, FaMinus } from "react-icons/fa6";

export default function BookingPayment() {
  const [radio, setRadio] = useState("coupon");
  const [discountValue, setDiscountValue] = useState("default");
  const totalFare = 121950;

  const getDiscountAmount = () => {
    if (!discountValue || discountValue === "default") return 0;

    if (discountValue.endsWith("%")) {
      const percent = parseFloat(discountValue.replace("%", ""));
      const discount = (totalFare * percent) / 100;
      return Math.min(discount, totalFare); // 할인금액이 총 운임을 초과하지 않도록 제한
    }

    const discount = parseInt(discountValue, 10);
    return Math.min(discount, totalFare); // 할인금액이 총 운임을 초과하지 않도록 제한
  };

  const discountAmount = getDiscountAmount();
  const finalAmount = totalFare - discountAmount;

  const finalOrder = () => {
    console.log(finalAmount);
  };

  return (
    <div className="booking-payment">
      <div className="booking-payment-wrap">
        <BookingStep text={"payment"} />
      </div>
      <div>
        <div className="booking-passenger-contents">
          <p className="booking-page-title">4. 결제</p>

          {/* 쿠폰 / 카드 할인 영역 */}
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

              {/* 쿠폰 선택 시 표시 */}
              {radio === "coupon" && (
                <div className="check-out-coupon">
                  <div className="select-warpper">
                    <select
                      value={discountValue}
                      onChange={(e) => setDiscountValue(e.target.value)}
                    >
                      <option value="default">선택</option>
                      <option value="1000">깜짝 천원 할인쿠폰</option>
                      <option value="10000">깜짝 만원 할인쿠폰</option>
                      <option value="100000">선착순 십만원 할인쿠폰</option>
                    </select>
                    <div>
                      <button className="sale-button">선택</button>
                    </div>
                  </div>
                  <ul>
                    <li>
                      - 쿠폰 금액이 항공운임 혹은 부가서비스 결제금액보다 크면
                      잔액은 자동 소멸됩니다.
                    </li>
                    <li>
                      - 발급 시 사용 조건을 확인해주세요. (유효기간,
                      사용가능노선 등)
                    </li>
                    <li>- 기타 제휴 할인과 중복 적용 불가합니다.</li>
                    <li>
                      - 비정상적인 쿠폰 사용 시 예약 건 취소될 수 있습니다.
                    </li>
                  </ul>
                </div>
              )}

              {/* 카드 선택 시 표시 */}
              {radio === "card" && (
                <div className="check-out-card">
                  <div className="select-warpper">
                    <select
                      value={discountValue}
                      onChange={(e) => setDiscountValue(e.target.value)}
                    >
                      <option value="default">선택</option>
                      <option value="5%">5% 카카오페이 할인쿠폰</option>
                      <option value="15%">15% 토스페이 할인쿠폰</option>
                    </select>
                    <div>
                      <button className="sale-button">선택</button>
                    </div>
                  </div>
                  <ul>
                    <li>
                      - 할인 적용된 부가서비스는 부분 취소 불가, 전체 취소 필요
                    </li>
                    <li>- 혜택 카드로 결제 시에만 적용</li>
                    <li>- 결제 시 카드사 검증 실패 시 예약 초기화될 수 있음</li>
                    <li>- 항공권 청구할인 서비스와 중복 제공</li>
                    <li>- 자세한 내용은 KB국민카드 홈페이지 참고</li>
                  </ul>
                </div>
              )}
            </div>
          </section>

          {/* 결제정보 영역 */}
          <section className="checkout-totalprice">
            <h3>
              <span>결제정보</span>
            </h3>
            <div className="calc-warp">
              <div className="calc-item">
                <span>총 운임</span>
                <strong>
                  KRW <span>{totalFare.toLocaleString()}</span>
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
                <span>총 예상 결제 금액</span>
                <strong>
                  KRW <span>{finalAmount.toLocaleString()}</span>
                </strong>
              </div>
            </div>
            <div className="pay-wrapper">페이페이페이</div>
          </section>

          <div className="order-button-warp">
            <button onClick={finalOrder}>결제</button>
          </div>
        </div>
      </div>
    </div>
  );
}
