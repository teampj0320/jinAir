import React, { useState } from "react";
import BookingStep from "../../component/booking/BookingStep.jsx";
import { useNavigate } from "react-router-dom";
import {
  FaArrowRightArrowLeft,
  FaEquals,
  FaAngleUp,
  FaAngleDown} from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { BiSolidPlaneTakeOff } from "react-icons/bi";
import BoolingPaymentAgree from "./BoolingPaymentAgree.jsx";

export default function BookingPayment() {
  const nav = useNavigate();
  const [openStates, setOpenStates] = useState({
    segment1: true,
    segment2: true
  });

  const toggleList = (segmentKey) => {
    setOpenStates((prev) => ({
      ...prev,
      [segmentKey]: !prev[segmentKey],
    }));
  };
  const orderClick = () => {
    if (Object.values(openStates).slice(-4).includes(false)) {
      alert("이용약관을 모두 동의해주셔야 결제가 가능합니다.");
    } else {
      nav("/booking/afterPayment");
    }
  };

  return (
    <div className="booking-payment">
      <div className="booking-payment-wrap">
        <BookingStep text={"payment"} />
      </div>

      <div className="booking-passenger-contents">
        <p className="booking-page-title">4. 결제 (항공운임/부가서비스 확인)</p>

        {/* 여행 정보 */}
        <section className="booking-payment-section">
          <article className="payment-agreement-top">
            <h3>
              <p>여행정보</p>
            </h3>
            <div className="noneExtras-warp">
              <div className="noneExtras-icon">
                <p>
                  <FaArrowRightArrowLeft />
                </p>
                <p>왕복</p>
              </div>
              <div className="noneExtras-way-warp">
                <div className="noneExtras-way1">
                  <div className="noneExtras-way-title">구간1</div>
                  <div>서울/김포GMP</div>
                  <BiSolidPlaneTakeOff />
                  <div>제주CJU</div>
                  <div>2025.04.04(수) 06:15 ~ 2025.04.04(수) 07:30</div>
                </div>
                <div className="noneExtras-way2">
                  <div className="noneExtras-way-title">구간2</div>
                  <div>제주CJU</div>
                  <BiSolidPlaneTakeOff />
                  <div>서울/김포GMP</div>
                  <div>2025.04.04(수) 06:15 ~ 2025.04.04(수) 07:30</div>
                </div>
              </div>
            </div>
          </article>

          {/* 탑승객 정보 */}
          <article className="payment-agreement-bottom">
            <div className="noneExtras-warp2">
              <h3>
                <p>탑승객 정보</p>
              </h3>
            </div>
            <table className="paymentPassenger-info">
              <colgroup>
                <col style={{ width: "200px" }} />
                <col style={{ width: "180px" }} />
                <col style={{ width: "180px" }} />
                <col style={{ width: "250px" }} />
                <col style={{ width: "400px" }} />
              </colgroup>
              <thead>
                <tr>
                  <th>성명</th>
                  <th>구분</th>
                  <th>성별</th>
                  <th>생년월일</th>
                  <th>국적</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>홍길동</td>
                  <td>성인</td>
                  <td>남자</td>
                  <td>1661.13.32</td>
                  <td>한국(REPUBLIC OF KOREA)</td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>

        {/* 항공운임 정보 */}
        <section className="booking-payment-section">
          <article className="payment-tax-warp">
            <h3>
              <p>항공운임 정보</p>
            </h3>
            <div className="payment-table-head">
              <span>구분</span>
              <span>항공운임</span>
              <span>유류할증료</span>
              <span>세금</span>
              <span>합계</span>
            </div>

            <ul>
              <li>
                <button
                  type="button"
                  className="payment-table-button"
                  onClick={() => toggleList("segment1")}
                >
                  <span>구간1</span>
                  <span>krw 39,900</span>
                  <span>krw 7,700</span>
                  <span>krw 4,000</span>
                  <span>
                    krw 51,600
                    {openStates.segment1 ? <FaAngleDown /> : <FaAngleUp />}
                  </span>
                </button>
                <ul>
                  <li
                    className={
                      openStates.segment1
                        ? "payment-table-text"
                        : "payment-table-hide"
                    }
                  >
                    <span>구간1</span>
                    <span>krw 39,900</span>
                    <span>krw 7,700</span>
                    <span>krw 4,000</span>
                    <span>krw 51,600</span>
                  </li>
                </ul>
              </li>
            </ul>

            {/* 구간2 */}
            <ul>
              <li>
                <button
                  type="button"
                  className="payment-table-button"
                  onClick={() => toggleList("segment2")}
                >
                  <span>구간2</span>
                  <span>krw 27,900</span>
                  <span>krw 7,700</span>
                  <span>krw 4,000</span>
                  <span>
                    krw 39,600
                    {openStates.segment2 ? <FaAngleDown /> : <FaAngleUp />}
                  </span>
                </button>
                <ul>
                  <li
                    className={
                      openStates.segment2
                        ? "payment-table-text"
                        : "payment-table-hide"
                    }
                  >
                    <span>구간2</span>
                    <span>krw 27,900</span>
                    <span>krw 7,700</span>
                    <span>krw 4,000</span>
                    <span>krw 39,600</span>
                  </li>
                  <li className="payment-table-total">
                    <div>
                      <strong>항공요금 합계</strong>
                    </div>
                    <span>KRW 91,200</span>
                  </li>
                </ul>
              </li>
            </ul>
          </article>
        </section>

        {/* 부가서비스 정보 */}
        <section className="booking-payment-section">
          <article>
            <h3>부가서비스 정보</h3>
            <div className="payment-addition-info">
              <div className="addition-table-head">
                <span>구분</span>
                <span>내역</span>
                <span>합계</span>
              </div>

              {/* 구간1 추가 서비스 */} 
              <div className="payment-addition-warp" >
                <table className="payment-addition-table">
                  <colgroup>
                    <col style={{ width: "100%" }} />
                    <col />
                    <col />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>성명</th>
                      <th>내역</th>
                      <th>합계</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="td-wrap">
                        <div>
                          <span>부가서비스 신청내역이 없습니다</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>


              <div className="payment-addition-warp" >
                <div className="payment-addition-total">
                  <div>
                    <strong>항공요금 합계</strong>
                  </div>
                  <span>KRW 0</span>
                </div>
              </div>
            </div>
          </article>
        </section>

        {/* 결제 가격 안내 */}
        <section className="payment-information">
          <h3>결제정보</h3>
          <article>
            <div className="calc-warp calc-item">
              <span>항공운임</span>
              <strong>KRW 232,300</strong>
            </div>
            <strong className="operation">
              <FaPlus />
            </strong>
            <div className="calc-warp calc-item">
              <span>부가서비스</span>
              <strong>KRW 0</strong>
            </div>
            <strong className="operation">
              <FaEquals />
            </strong>
            <div className="calc-warp calc-result">
              <span>총 예상 결제 금액</span>
              <strong>KRW 258,150</strong>
            </div>
          </article>
        </section>

        {/* 이용약관 규정 */}
        <BoolingPaymentAgree />
        <div className="order-button" onClick={orderClick}>
          <button>결제진행</button>
        </div>
      </div>
    </div>
  );
}
