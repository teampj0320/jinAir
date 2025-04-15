import React, { useState } from "react";
import BookingStep from "../../component/booking/BookingStep.jsx";
import { useNavigate } from "react-router-dom";
import {
  FaArrowRightArrowLeft,
  FaEquals,
  FaAngleUp,
  FaAngleDown,
  FaRegSquareCheck,
  FaSquareCheck,
  FaArrowRightLong
} from "react-icons/fa6";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { BiSolidPlaneTakeOff } from "react-icons/bi";

export default function BookingPayment() {
  const nav = useNavigate();
  const [openStates, setOpenStates] = useState({
    segment1: true,
    segment2: true,
    more1: false,
    more2: true,
    more3: false,
    additionall: false,
    addition1: false,
    addition2: false,
    addition3: false,
    addition4: false,
  });

  const toggleList = (segmentKey) => {
    setOpenStates((prev) => ({
      ...prev,
      [segmentKey]: !prev[segmentKey],
    }));
  };

  // 전체선택
  const handleCheckAll = () => {
    const newValue = !openStates.additionall;
    setOpenStates((prev) => ({
      ...prev,
      additionall: newValue,
      addition1: newValue,
      addition2: newValue,
      addition3: newValue,
      addition4: newValue,
    }));
  };

  // 주문하기 버튼
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

        {/* 여행 정보 - 왕복 */}
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

        {/* 여행 정보 - 편도 */} 
          <article className="payment-agreement-top">
            <h3>
              <p>여행정보</p>
            </h3>
            <div className="noneExtras-warp">
              <div className="noneExtras-icon">
                <p>
                  <FaArrowRightLong />
                </p>
                <p>편도</p>
              </div>
              <div className="noneExtras-way-warp">
                <div className="noneExtras-way1">
                  <div className="noneExtras-way-title">구간1</div>
                  <div>서울/김포GMP</div>
                  <BiSolidPlaneTakeOff />
                  <div>제주CJU</div>
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
              <div className="payment-addition-warp">
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

              <div className="payment-addition-warp">
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
        <section className="booking-payment-section payment-bottom">
          <div className="payment-bottom-agree">
            <div className="agree1">
              <h3>예약 규정 및 기타 사항 확인(필수)</h3>
            </div>
            <div className="agree2">
              <span className="check-icon-warp">
                <label onClick={handleCheckAll} className="check-icon">
                  {openStates.additionall ? (
                    <FaSquareCheck size="28" className="check-icon" />
                  ) : (
                    <FaRegSquareCheck size="25" className="check-icon" />
                  )}
                </label>
                <label className="all">전체 선택</label>
              </span>
            </div>
          </div>
          <ul>
            <li className="bottom-agree-title">
              <div>
                <strong>항공권 운임 규정</strong>
                <span className="agree-toggleB">
                  <span className="check-icon-warp">
                    <label onClick={() => toggleList("addition1")}>
                      {openStates.addition1 ? (
                        <FaSquareCheck size="25" className="check-icon" />
                      ) : (
                        <FaRegSquareCheck size="25" className="check-icon" />
                      )}
                    </label>
                    <label>동의 하기</label>
                  </span>
                </span>
              </div>
            </li>
            <li className="bottom-agree-title">
              <div>
                <strong>부가서비스별 유의사항</strong>
                <span className="check-icon-warp">
                  <label onClick={() => toggleList("addition2")}>
                    {openStates.addition2 ? (
                      <FaSquareCheck size="25" className="check-icon" />
                    ) : (
                      <FaRegSquareCheck size="25" className="check-icon" />
                    )}
                  </label>
                  <label>동의 하기</label>
                  <button
                    className="agree-toggleA"
                    onClick={() => toggleList("more1")}
                  >
                    {openStates.more1 ? <FaAngleDown /> : <FaAngleUp />}
                  </button>
                </span>
              </div>
              <div
                className={
                  openStates.more1 ? "agree-notic-block" : "agree-notic-hide"
                }
              >
                <ul className="bottom-agree-notic-list">
                  <li>
                    <ul>
                      <li>
                        항공권 구매 이후에도, [예약상세]–[부가서비스 관리] 에서
                        부가서비스 구매 가능합니다.
                      </li>
                      <li>
                        부가서비스 구매 후 변경은 불가하며, 취소 후 재구매 해야
                        합니다.
                      </li>
                      <li>
                        부가서비스별 구매/취소 가능 기한
                        <ul className="agree-notic-inside">
                          <li>
                            <span>✓</span>
                            항공기 출발 24시간 전까지 : [마이페이지]-
                            [부가서비스 구매/취소]
                          </li>
                          <li>
                            <span>✓</span>
                            항공기 출발 24시간 이후 ~ 항공기 출발 1시간 전까지 :
                            [마이페이지]- [여행보험 취소] 클릭
                          </li>
                          <li>
                            <span>✓</span>
                            항공기 출발 1시간 전부터 ~ 항공기 출발 이후 :
                            Chubb여행보험 (1666-5075) 문의 후 진에어
                            고객서비스센터측에 항공권 환불 문의 (1600-6200)
                            (평일 업무시간: 09:00~18:00 / 주말, 공휴일 제외)
                          </li>
                        </ul>
                      </li>
                      <li>
                        각 부가서비스별 유의 사항은 부가서비스 안내 페이지에서
                        반드시 확인 바랍니다.
                      </li>
                      <li>
                        항공기 기종과 스케줄은 사전예고 없이 변경될 수 있으며,
                        이 경우 사전 구매하신 좌석이 변경 또는 취소될 수
                        있습니다.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li className="bottom-agree-title">
              <div>
                <button>
                  국내선 여객운송 약관
                  <BsArrowUpRightCircleFill />
                </button>
              </div>
            </li>
            <li className="bottom-agree-title">
              <div>
                <strong>항공기 위험물 안내</strong>
                <span className="check-icon-warp">
                  <label onClick={() => toggleList("addition3")}>
                    {openStates.addition3 ? (
                      <FaSquareCheck size="25" className="check-icon" />
                    ) : (
                      <FaRegSquareCheck size="25" className="check-icon" />
                    )}
                  </label>
                  <label>동의 하기</label>
                  <button
                    className="agree-toggleA"
                    onClick={() => toggleList("more2")}
                  >
                    {openStates.more2 ? <FaAngleDown /> : <FaAngleUp />}
                  </button>
                </span>
              </div>
              <div
                className={
                  openStates.more2 ? "agree-notic-block" : "agree-notic-hide"
                }
              >
                <div>
                  <ul>
                    <li>
                      국제민간항공기구(ICAO) 및 국제항공운송협회(IATA)에서
                      지정한 항공위험물은 수하물로 운송될 수 없습니다.
                    </li>
                    <li>
                      항공기 및 개인 또는 타인의 재산에 위험을 가져올 수 있는
                      항공위험물 안내
                    </li>
                    <li>
                      100Wh 초과 - 160Wh 이하의 보조배터리를 반입할 경우
                      항공사의 승인이 필요하오니 카운터로 방문해 주시기
                      바랍니다.(승객당 2개 제한)
                    </li>
                    <li>
                      보조배터리는 단락(합선) 방지를 위해 반드시 개별
                      포장(비닐백, 보호캡 또는 절연테이프 부착 등)해야 합니다.
                    </li>
                    <li>
                      보조배터리 및 전자담배를 충전하거나 기내 선반에 보관은
                      엄격히 금지되어 있으니 개인이 직접 휴대하거나 좌석 앞
                      주머니에 보관해주시기 바랍니다.
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <div className="bottom-more">
              <button>
                자세히 보기
                <BsArrowUpRightCircleFill />
              </button>
            </div>
            <div
              className={
                openStates.more2 ? "bottom-more-goods" : "agree-notic-hide"
              }
            >
              <div>
                <strong>폭발물</strong>
                <ul>
                  <li>
                    <img
                      src="https://images.jinair.com/newHom/images/web/reservation/dangerous/ammunition.png"
                      alt=""
                    />
                    <p>
                      탄약 <br /> Ammunition
                    </p>
                  </li>
                  <li>
                    <img
                      src="https://images.jinair.com/newHom/images/web/reservation/dangerous/fireworks.png"
                      alt=""
                    />
                    <p>
                      폭죽 <br /> Fireworks
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <strong>가스류</strong>
                <ul>
                  <li>
                    <img
                      src="https://images.jinair.com/newHom/images/web/reservation/dangerous/aerosols.png"
                      alt=""
                    />
                    <p>
                      에어로졸 <br /> Aerosols
                    </p>
                  </li>
                  <li>
                    <img
                      src="https://images.jinair.com/newHom/images/web/reservation/dangerous/butane-gas.png"
                      alt=""
                    />
                    <p>
                      부탄가스 <br /> Butane Gas
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <strong>인화성 액체</strong>
                <ul>
                  <li>
                    <img
                      src="https://images.jinair.com/newHom/images/web/reservation/dangerous/paint.png"
                      alt=""
                    />
                    <p>
                      페인트 <br /> Paint
                    </p>
                  </li>
                  <li>
                    <img
                      src="https://images.jinair.com/newHom/images/web/reservation/dangerous/alcohol.png"
                      alt=""
                    />
                    <p>
                      알코올 <br /> Alcohol
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <strong>인화성 고체</strong>
                <ul>
                  <li>
                    <img
                      src="https://images.jinair.com/newHom/images/web/reservation/dangerous/solid-fuel.png"
                      alt=""
                    />
                    <p>
                      고체연료 <br /> Solid Fuel
                    </p>
                  </li>
                  <li>
                    <img
                      src="https://images.jinair.com/newHom/images/web/reservation/dangerous/ignition-coal.png"
                      alt=""
                    />
                    <p>
                      번개탄 <br /> Ignition Coal
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <strong>산화성 물질</strong>
                <ul>
                  <li>
                    <img
                      src="https://images.jinair.com/newHom/images/web/reservation/dangerous/crorox.png"
                      alt=""
                    />
                    <p>
                      락스 <br /> Crorox
                    </p>
                  </li>
                  <li>
                    <img
                      src="https://images.jinair.com/newHom/images/web/reservation/dangerous/bleaching-poxer.png"
                      alt=""
                    />
                    <p>
                      표백제 <br /> Bleaching Poxer
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <strong>독성 및 전염성 물질</strong>
                <ul>
                  <li>
                    <img
                      src="https://images.jinair.com/newHom/images/web/reservation/dangerous/herbcide.png"
                      alt=""
                    />
                    <p>
                      제초제 <br /> Herbcide
                    </p>
                  </li>
                  <li>
                    <img
                      src="https://images.jinair.com/newHom/images/web/reservation/dangerous/pesticide.png"
                      alt=""
                    />
                    <p>
                      살충제 <br /> Pesticide
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <strong>방사성 물질</strong>
                <ul>
                  <li>
                    <img
                      src="https://images.jinair.com/newHom/images/web/reservation/dangerous/radioisotope.png"
                      alt=""
                    />
                    <p>
                      방사성 동위원소 <br /> Radioisotope
                    </p>
                  </li>
                  <li>
                    <img
                      src="https://images.jinair.com/newHom/images/web/reservation/dangerous/radiographic-test-equipmenr.png"
                      alt=""
                    />
                    <p>
                      방사선 투과검사 장비 <br /> Radiographic Test Equipmenr
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <strong>부식성 물질</strong>
                <ul>
                  <li>
                    <img
                      src="https://images.jinair.com/newHom/images/web/reservation/dangerous/wet-battery.png"
                      alt=""
                    />
                    <p>
                      습식 배터리 <br /> Wet Battery
                    </p>
                  </li>
                  <li>
                    <img
                      src="https://images.jinair.com/newHom/images/web/reservation/dangerous/mercury-thermometer.png"
                      alt=""
                    />
                    <p>
                      수은 온도계 <br /> Mercury Thermometer
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <strong>기타 위험 물질</strong>
                <ul>
                  <li>
                    <img
                      src="https://images.jinair.com/newHom/images/web/reservation/dangerous/spare-liion-batteries.png"
                      alt=""
                    />
                    <p>
                      여분의 리튬 <br /> Spare Li-ion Batteries
                    </p>
                  </li>
                  <li>
                    <img
                      src="https://images.jinair.com/newHom/images/web/reservation/dangerous/dry-ice.png"
                      alt=""
                    />
                    <p>
                      드라이아이스 <br /> Dry Ice
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </ul>
          <ul>
            <li className="bottom-agree-title">
              <div>
                <strong>기타 유의사항</strong>
                <span className="check-icon-warp">
                  <label onClick={() => toggleList("addition4")}>
                    {openStates.addition4 ? (
                      <FaSquareCheck size="25" className="check-icon" />
                    ) : (
                      <FaRegSquareCheck size="25" className="check-icon" />
                    )}
                  </label>
                  <label>동의 하기</label>
                  <button
                    className="agree-toggleA"
                    onClick={() => toggleList("more3")}
                  >
                    {openStates.more3 ? <FaAngleDown /> : <FaAngleUp />}
                  </button>
                </span>
              </div>
              <div
                className={
                  openStates.more3 ? "agree-notic-block" : "agree-notic-hide"
                }
              >
                <div style={{ display: "block" }}>
                  <p>
                    B737-800 항공기 내 좌석 등급은 일반석만 운영하며 B737-900
                    항공기 내 좌석 등급은 지니 비즈 좌석과 일반석을 운영합니다.
                  </p>

                  <p>
                    B777 항공기 내 좌석등급은 지니플러스시트와 일반석을
                    운영합니다.
                  </p>

                  <p>
                    항공권 예매는 국내선 항공권의 경우 예매시점 30분 이후
                    출발편부터 국제선 항공권의 경우 예매시점 3시간 이후
                    출발편부터 361일 이내 출발편까지 가능합니다.
                  </p>

                  <p>
                    인터넷 예약은 1회 9명까지 가능합니다. 항공권 구입 시에는
                    예약과 동시 구매하셔야 하며 미 구매된 예약은 자동
                    취소됩니다.
                  </p>

                  <p>
                    승객의 나이는 탑승일 기준이며 국내선은 만 5세 이상 ~ 만 13세
                    미만의 소아 승객은 반드시 만 13세 이상의 동반 탑승자가
                    필요하고 국내선 만 5세 미만¸ 국제선 만 12세 미만의 소아
                    승객은 부모 또는 만 18세 이상의 보호자와 동반 시에만 여행이
                    가능합니다.
                  </p>

                  <p>소아 단독 예약은 소아 로그인 후 이용 가능합니다.</p>

                  <p>
                    국제선 소아 단독 예약은 모바일 APP과 고객서비스센터를
                    이용하여 주시기 바랍니다.
                  </p>

                  <p>
                    국제선 구간 여행을 위해 유효기간이 최소 6개월 이상 남은
                    여권과 필요한 경우 출입국을 위한 해당 국가의 비자를
                    준비하셔야 합니다.
                  </p>

                  <p>
                    훼손된 여권의 경우 해당 국가의 입국이 거절 될 수 있으니
                    유의하여 주시기 바랍니다.
                  </p>

                  <p>
                    복수 목적지 여정의 예약을 원하실 경우 [다구간 여정] 을
                    선택하여 주시기 바랍니다.
                  </p>

                  <p>
                    해외발행 카드 사용의 경우 진에어 해외사이트에서 결제하실 수
                    있습니다.
                  </p>

                  <p>
                    반려동물과 함께 여행하시는 고객께서는 번들 구매 등을 통해
                    사전좌석지정을 신청하는 경우라도 공항 수속 시 좌석이 변경될
                    수 있으며 일부 좌석 배정이 제한되오니 이점 양해하여 주시기
                    바랍니다.
                  </p>

                  <p>
                    무료수하물을 초과하는 경우 추가요금이 발생할 수 있습니다.
                  </p>

                  <p>
                    환불 신청 기한은 항공권 유효기간 만료일로부터 30일 이내 이며
                    그 이후에 요청하실 경우 환불이 거절될 수 있습니다.
                  </p>

                  <p>
                    항공권의 유효기간은 전체 미사용 항공권의 경우 발행일로부터
                    1년, 여행 개시 후에는 최초 출발일로부터 1년입니다.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>
        {/* 결제하기  */}
        <div className="order-button" onClick={orderClick}>
          <button>결제진행</button>
        </div>
      </div>
    </div>
  );
}


import React, { useRef, useState } from "react";
import BookingStep from "../../component/booking/BookingStep.jsx";
import { FaEquals, FaMinus } from "react-icons/fa6";
import axios from 'axios';

export default function BookingPayment() {


  const [radio, setRadio] = useState("coupon");
  const [discountValue, setDiscountValue] = useState("default");
  const totalFare = 121950;

  const noRef = useRef();
  const idRef = useRef();
  const way1Ref = useRef();
  const way2Ref = useRef();

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

  const handlePayment = () => {
    const no = noRef.current.textContent.trim();
    const id = idRef.current.textContent.trim();
    const way1 = way1Ref.current.textContent.trim();

    axios.post('http://localhost:9000/payment/add', {
      no,
      id,
      fnum: way1
    })
      .then(response => {
        console.log(response);
        if (response.data?.success === true && response.data.data[0]?.affectedRows === 1) {
          alert("예약이 완료되었습니다.");
        } else {
          alert("예약 실패");
        }
      })
      .catch(err => {
        console.log(err);
        alert("예약 중 오류 발생");
      });
  };

  return (
    <div className="booking-payment">
      <div className="booking-payment-wrap">
        <BookingStep text={"payment"} />
      </div>
      <div>
        <div className="booking-passenger-contents">
          <p className="booking-page-title">4. 결제</p>

          {/**테스트용 임시 정보 */}
          <div>
            <span>NO:</span>
            <span ref={noRef}>2</span>
            <span>ID:</span>
            <span ref={idRef}>test1</span>
            <span>plite-way1:</span>
            <span ref={way1Ref}>LJ100</span>
            <span>plite-way2:</span>
            <span ref={way2Ref}>LJ190</span>
          </div>

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
            <button onClick={handlePayment}>결제</button>
          </div>
        </div>
      </div>
    </div>
  );
}
