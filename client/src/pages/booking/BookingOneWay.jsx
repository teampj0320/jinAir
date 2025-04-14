import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingStep from '../../component/booking/BookingStep.jsx';
import BookingDates from '../../component/booking/BookingDates.jsx';
import { IoIosAirplane } from 'react-icons/io';
import { RxDividerVertical } from "react-icons/rx";
import '../../scss/yuna.scss';

export default function BookingOneWay() {
    const navigate = useNavigate();
    const [seatSelect, setSeatSelect] = useState('');
    const [sortSelect, setSortSelect] = useState('early');

    /* 좌석 선택(일반석/프리미엄석) 클릭 이벤트 */
    const clickSelectSeat = (type) => {
        seatSelect === type ? setSeatSelect('') : setSeatSelect(type);
    }

    /* 탑승객 정보 입력 버튼 클릭 이벤트 */
    const clickNextBtn = () => {
        seatSelect !== '' ? navigate("/booking/passenger") : alert("좌석을 선택해주세요.");
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
                    <BookingDates /> {/* 날짜 리스트 */}
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
                        {/* 순회 부분 - 분리? */}
                        <div className='booking-select-flight-section'
                            style={{backgroundColor: seatSelect !== '' ?  "rgb(211, 233, 46)" : "rgb(242, 242, 242)"}}
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
                                    backgroundColor: seatSelect !== '' ? "#192547" : "rgb(242, 242, 242)",
                                    color: seatSelect !== '' && "#fff"
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