import React, { useState } from "react";
import BookingStep from "../../component/booking/BookingStep.jsx";
import { FaEquals, FaMinus } from "react-icons/fa6";

export default function BookingPayment() {
  const [radio, setRadio] = useState("coupon");

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

              {/*  쿠폰 선택 시 표시 */}
              {radio === "coupon" && (
                <div className="check-out-coupon">
                  <div className="select-warpper">
                    <select>
                      <option value="default">선택</option>
                    </select>
                    <div>
                      <button className="sale-button">선택</button>
                    </div>
                  </div>
                  <ul>
                    <li>- 유류할증료 및 세금은 할인 대상에서 제외됩니다.</li>
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

              {/*  카드 선택 시 표시 */}
              {radio === "card" && (
                <div className="check-out-card">
                  <div className="select-warpper">
                    <select>
                      <option value="default">선택</option>
                      <option value="kb">
                        KB국민 Easy Fly 티타늄카드 부가서비스 할인
                      </option>
                      <option value="air">
                        Air Money/TOP Point/유니마일 사용
                      </option>
                      <option value="bc">BC 법인 카드 할인</option>
                    </select>
                    <div>
                      <button className="sale-button">선택</button>
                    </div>
                  </div>
                  <ul>
                    <li>
                      - KB카드 즉시 할인은 부가서비스에만 적용되며 보험 제외
                    </li>
                    <li>- 1만원 초과 결제 시, 건당 1만원 즉시 할인</li>
                    <li>
                      - 할인 적용된 부가서비스는 부분 취소 불가, 전체 취소 필요
                    </li>
                    <li>- KB카드로 결제 시에만 적용</li>
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
                  KRW
                  <span>121,950</span>
                </strong>
              </div>
              <div className="operation">
                <FaMinus />
              </div>
              <div className="calc-item">
                <span>총 할인 금액</span>
                <strong>
                  KRW
                  <span>0</span>
                </strong>
              </div>
              <div className="operation">
                <FaEquals />
              </div>
              <div className="calc-item">
                <span>총 예상 결제 금액</span>
                <strong>
                  KRW
                  <span>121,950</span>
                </strong>
              </div>
            </div>
            <div className="pay-wrapper">페이페이페이</div>
          </section>

          <div className="order-button-warp">
            <button>결제</button>
          </div>
        </div>
      </div>
    </div>
  );
}
