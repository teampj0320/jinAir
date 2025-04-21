import React, { useState } from "react";
import {
    FaAngleUp,
    FaAngleDown,
    FaRegSquareCheck,
    FaSquareCheck,
} from "react-icons/fa6";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

export default function BookingPaymentAgree() {
    const [openStates, setOpenStates] = useState({
        more1: false,
        more2: true,
        more3: false,
        additionall: false,
        addition1: false,
        addition2: false,
        addition3: false,
        addition4: false,
    });

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

    const updateAllCheckStatus = (updatedStates) => {
        const allChecked =
            updatedStates.addition1 &&
            updatedStates.addition2 &&
            updatedStates.addition3 &&
            updatedStates.addition4;

        setOpenStates((prev) => ({
            ...prev,
            ...updatedStates,
            additionall: allChecked,
        }));
    };

    const toggleList = (key) => {
        const newValue = !openStates[key];
        const updatedStates = {
            ...openStates,
            [key]: newValue,
        };

        updateAllCheckStatus(updatedStates);
    };


    return (
        <section className="booking-payment-section payment-bottom">
            <div className="payment-bottom-agree">
                <div className="agree1">
                    <h3>예약 규정 및 기타 사항 확인(필수)</h3>
                </div>
                <div className="agree2">
                    <span className="check-icon-warp">
                        <label onClick={handleCheckAll} className="check-icon">
                            {openStates.additionall ? (
                                <FaSquareCheck size="28" />
                            ) : (
                                <FaRegSquareCheck size="28" />
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
                                        <FaSquareCheck size="25" />
                                    ) : (
                                        <FaRegSquareCheck size="25" />
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
                                    <FaSquareCheck size="25" />
                                ) : (
                                    <FaRegSquareCheck size="25" />
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
                                        항공권 구매 이후에도, [예약상세]–[부가서비스 관리] 에서 부가서비스
                                        구매 가능합니다.
                                    </li>
                                    <li>
                                        부가서비스 구매 후 변경은 불가하며, 취소 후 재구매 해야 합니다.
                                    </li>
                                    <li>
                                        부가서비스별 구매/취소 가능 기한
                                        <ul className="agree-notic-inside">
                                            <li>
                                                <span>✓</span>
                                                항공기 출발 24시간 전까지 : [마이페이지]- [부가서비스 구매/취소]
                                            </li>
                                            <li>
                                                <span>✓</span>
                                                항공기 출발 24시간 이후 ~ 항공기 출발 1시간 전까지 : [마이페이지]-
                                                [여행보험 취소] 클릭
                                            </li>
                                            <li>
                                                <span>✓</span>
                                                항공기 출발 1시간 전부터 ~ 항공기 출발 이후 : Chubb여행보험
                                                (1666-5075) 문의 후 진에어 고객서비스센터 (1600-6200)로 항공권
                                                환불 문의 (평일 업무시간: 09:00~18:00 / 주말, 공휴일 제외)
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        각 부가서비스별 유의 사항은 부가서비스 안내 페이지에서 반드시 확인 바랍니다.
                                    </li>
                                    <li>
                                        항공기 기종과 스케줄은 사전예고 없이 변경될 수 있으며, 이 경우 사전
                                        구매하신 좌석이 변경 또는 취소될 수 있습니다.
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
                                    <FaSquareCheck size="25" />
                                ) : (
                                    <FaRegSquareCheck size="25" />
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
                        <ul>
                            <li>
                                국제민간항공기구(ICAO) 및 국제항공운송협회(IATA)에서 지정한 항공위험물은
                                수하물로 운송될 수 없습니다.
                            </li>
                            <li>
                                100Wh 초과 ~ 160Wh 이하 보조배터리는 항공사 승인이 필요합니다. (승객당 2개)
                            </li>
                            <li>
                                보조배터리는 단락 방지를 위해 반드시 개별 포장(비닐, 보호캡, 절연테이프 등)이 필요합니다.
                            </li>
                            <li>
                                보조배터리 및 전자담배는 기내에서 충전하거나 선반 보관이 금지됩니다. 개인이 직접 휴대하거나 좌석 앞 주머니에 보관 바랍니다.
                            </li>
                        </ul>
                    </div>
                </li>

                {openStates.more2 && (
                    <div className="bottom-more-goods">
                        {/* 위험물 이미지 블럭 전체 출력 */}
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
                )}

                <li className="bottom-agree-title">
                    <div>
                        <strong>기타 유의사항</strong>
                        <span className="check-icon-warp">
                            <label onClick={() => toggleList("addition4")}>
                                {openStates.addition4 ? (
                                    <FaSquareCheck size="25" />
                                ) : (
                                    <FaRegSquareCheck size="25" />
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
                        <p>B737-800은 일반석만 운영하며, B737-900은 지니 비즈 좌석과 일반석을 운영합니다.</p>
                        <p>B777은 지니플러스시트와 일반석을 운영합니다.</p>
                        <p>항공권 예매는 국내선: 예매 시점 30분 이후 출발편부터 / 국제선: 3시간 이후 출발편부터 361일 이내까지 가능합니다.</p>
                        <p>인터넷 예약은 최대 9명까지 가능하며, 예약과 동시 구매하지 않으면 자동 취소됩니다.</p>
                        <p>유효기간 6개월 이상 여권, 필요한 비자 지참 필수입니다.</p>
                        <p>훼손된 여권은 입국 거절 가능성 있습니다.</p>
                        <p>환불 신청은 항공권 유효기간 만료일 기준 30일 이내 가능합니다.</p>
                    </div>
                </li>
            </ul>
        </section>
    );
}
