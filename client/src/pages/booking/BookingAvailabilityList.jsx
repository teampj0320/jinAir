import React from 'react';
import BookingStep from '../../component/booking/BookingStep.jsx';
import { IoIosAirplane } from "react-icons/io";

export default function BookingAvailabilityList() {
    return (
        <div className='booking-avaliability-wrap'>
            <BookingStep text={'avaliability'} /> {/* 항공권 예약 ~ 결제 페이지 상단탭 */}
            
            <p className='booking-page-title'>1. 항공편 선택</p>
            <div className='booking-location'>
                <span>구간</span>
                <span>서울/김포 GMP <IoIosAirplane /> 제주 CJU</span>
            </div>

            <div className='booking-date'>
                <ul>
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
                    <li>요금 낮은순</li>
                    <li>출발 빠른순</li>
                    <li>
                        <label>예약마감 제외</label>
                        <input type="checkbox" />
                    </li>
                </ul>
                <div className='booking-select-flight-list'>
                    <div className='booking-select-flight-section'>
                        <div className='booking-select-info'>
                            <div className='booking-select-flight-info'>
                                <p>LJ517</p>
                                <p>B737-800</p>
                            </div>
                            <div className='booking-select-time-info'>
                                <div>
                                    <p>06:00</p>
                                    <p>GMP</p>
                                </div>
                                <div>
                                    <p>01h 15m</p>
                                    <p><IoIosAirplane /></p>
                                </div>
                                <div>
                                    <p>07:15</p>
                                    <p>CJU</p>
                                </div>
                            </div>
                            <button className='booking-select-button'>운임규정</button>
                        </div>
                        <div className='booking-flight-buttons'>
                            <button className='booking-flight-bassic'>
                                <p>일반석</p>
                                <span>KRW <b>49,000</b></span>
                                <p>잔여 5석!</p>
                            </button>
                            <button className='booking-flight-premiun'>
                                <p>프리미엄석</p>
                                <span>KRW <b>147,000</b></span>
                                <p>잔여 8석!</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}