import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import BookingStep from '../../component/booking/BookingStep.jsx';
import BookingRuleModal from './BookingRuleModal.jsx';
import { IoIosAirplane } from 'react-icons/io';
import { RxDividerVertical } from "react-icons/rx";
import 'swiper/css';
import 'swiper/css/pagination';
import '../../scss/yuna.scss';

export default function BookingAvailabilityList() {
    const navigate = useNavigate();
    const [seatSelect, setSeatSelect] = useState(null);
    const [sortSelect, setSortSelect] = useState('early');
    const [modalOpen, setModalOpen] = useState(false);

    /* 운임규정 안내창 모달 스타일 */
    const customModalStyles = {
        overlay: {
            backgroundColor: " rgba(0, 0, 0, 0.4)",
            width: "100%",
            height: "100vh",
            zIndex: "10",
            position: "fixed",
            top: "0",
            left: "0",
        },
        content: {
            width: "700px",
            height: "180px",
            zIndex: "150",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "10px",
            boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
            backgroundColor: "white",
            justifyContent: "center",
            overflow: "auto",
        },
    };

    /* 좌석 선택 이벤트 */
    const clickSelectSeat = (type) => {
        if (type === 'basic') {
            seatSelect === null ? setSeatSelect('basic') : setSeatSelect(null);
        } else {
            seatSelect === null ? setSeatSelect('premium') : setSeatSelect(null);
        }
    }

    /* 탑승객 정보 입력 버튼 클릭 이벤트 */
    const clickNextBtn = () => {
        // alert("!!");
        seatSelect !== null ? navigate("/booking/passenger") : alert("좌석을 선택해주세요.");
    }

    return (
        <div className='booking-avaliability-wrap'>
            <BookingStep text={'avaliability'} /> {/* 항공권 예약 ~ 결제 페이지 상단탭 */}

            <div className='booking-avaliability-contents'>
                <p className='booking-page-title'>1. 항공편 선택</p>
                <div className='booking-date'>
                    <div className='booking-location'>
                        <span>구간 1</span>
                        <div>
                            <span>서울/김포 <span>GMP</span></span>
                            <span><IoIosAirplane /></span>
                            <span>제주 <span>CJU</span></span>
                        </div>
                    </div>
                    {/* 추후 스와이퍼 적용 필요 */}
                    <ul className='booking-list'>
                        <li>
                            <p>2025-04-01 (화)</p>
                            <p>KRW <b>96,900</b></p>
                        </li>
                        <li>
                            <p>2025-04-02 (수)</p>
                            <p>KRW <b>55,900</b></p>
                        </li>
                        <li>
                            <p>2025-04-03 (목)</p>
                            <p>KRW <b>49,900</b></p>
                        </li>
                        <li>
                            <p>2025-04-04 (금)</p>
                            <p>KRW <b>31,900</b></p>
                        </li>
                        <li>
                            <p>2025-04-05 (토)</p>
                            <p>KRW <b>26,900</b></p>
                        </li>
                        <li>
                            <p>2025-04-06 (일)</p>
                            <p>KRW <b>33,900</b></p>
                        </li>
                        <li>
                            <p>2025-04-07 (월)</p>
                            <p>KRW <b>52,900</b></p>
                        </li>
                    </ul>
                </div>

                <div className='booking-select-flight'>
                    <ul className='booking-select-flight-sort'>
                        <li onClick={() => setSortSelect('lowCharge')}
                            className={sortSelect === 'lowCharge' ? 'flight-selected-sort' : 'flight-sort'}
                        >
                            요금 낮은순
                        </li>
                        <li><RxDividerVertical /></li>
                        <li onClick={() => setSortSelect('early')}
                            className={sortSelect === 'early' ? 'flight-selected-sort' : 'flight-sort'}
                        >
                            출발 빠른순
                        </li>
                        <li><RxDividerVertical /></li>
                        <li>
                            <label>예약마감 제외</label>
                            <input type="checkbox" />
                        </li>
                    </ul>
                    <div className='booking-select-flight-list'>
                        {/* 순회 부분 */}
                        <div className='booking-select-flight-section'
                            style={{backgroundColor: seatSelect !== null ?  "rgb(211, 233, 46)" : "rgb(242, 242, 242)"}}
                        >
                            <div className='booking-select-info'>
                                <div className='booking-select-flight-info'>
                                    <p>LJ517</p>
                                    <p className='thin'>B737-800</p>
                                </div>
                                <div className='booking-select-time-info'>
                                    <div className='booking-select-time-block'>
                                        <p>06:00</p>
                                        <p>GMP</p>
                                    </div>
                                    <div>
                                        <p>01h 15m</p>
                                        <p><IoIosAirplane /></p>
                                        <div></div>
                                    </div>
                                    <div className='booking-select-time-block'>
                                        <p>07:15</p>
                                        <p>CJU</p>
                                    </div>
                                </div>
                                <button onClick={() => {setModalOpen(true)}} className='booking-select-button'>운임규정</button>
                                <Modal
                                    isOpen={modalOpen}
                                    onRequestClose={() => setModalOpen(false)}
                                    style={customModalStyles}
                                    ariaHideApp={false}
                                    contentLabel="Pop up Message"
                                    shouldCloseOnOverlayClick={true}
                                >
                                    <BookingRuleModal />
                                </Modal>
                            </div>
                            <div className='booking-flight-buttons'>
                                <button onClick={() => clickSelectSeat('basic')}
                                    className={seatSelect === 'basic' ? 'booking-flight-selected-seat' : "booking-flight-seat"}>
                                    <p>일반석</p>
                                    <span>KRW <b>49,000</b></span>
                                    <p>잔여 5석!</p>
                                </button>
                                <button onClick={() => clickSelectSeat('premium')}
                                    className={seatSelect === 'premium' ? 'booking-flight-selected-seat' : "booking-flight-seat"}>
                                    <p>프리미엄석</p>
                                    <span>KRW <b>147,000</b></span>
                                    <p>잔여 8석!</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='booking-avaliability-bottom'>
                <button style={{
                                    backgroundColor: seatSelect !== null ? "#192547" : "rgb(242, 242, 242)",
                                    color: seatSelect !== null && "#fff"
                                }}
                        onClick={clickNextBtn}
                        className='booking-avaliability-bottom-button'
                >
                    탑승객 정보 입력
                </button>
            </div>
        </div>
    );
}