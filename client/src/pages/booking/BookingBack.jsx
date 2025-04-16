import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingStep from '../../component/booking/BookingStep.jsx';
import BookingDates from '../../component/booking/BookingDates.jsx';
import BookingTicketList from '../../component/booking/BookingTicketList.jsx';
import { IoIosAirplane } from 'react-icons/io';
import { RxDividerVertical } from "react-icons/rx";
import 'swiper/css';
import 'swiper/css/pagination';
import '../../scss/yuna.scss';

export default function BookingBack() {
    const navigate = useNavigate();
    const [seatSelect, setSeatSelect] = useState('');
    const [sortSelect, setSortSelect] = useState('early');

    /* 탑승객 정보 입력 버튼 클릭 이벤트 */
    const clickNextBtn = () => {
        seatSelect !== '' ? navigate("/booking/passenger") : alert("좌석을 선택해주세요.");
    }

    /* 구간1 다시 선택 버튼 클릭 이벤트 */
    const clickReSelect = () => {
        // alert("!!!");
        const select = window.confirm("구간 1 항공편을 다시 선택하시겠습니까?");
        select && navigate('/booking/availabilityList/go');
    }
    
    return (
        <div className='booking-avaliability-wrap'>
            <BookingStep text={'avaliability'} /> {/* 항공권 예약 ~ 결제 페이지 상단탭 */}

            <div className='booking-avaliability-contents'>
                <p className='booking-page-title'>1. 항공편 선택</p>
                <div className='booking-section1-container'>
                    <div className='booking-section1-left'>
                        <span>구간 1</span>
                        <div>
                            <span>서울/김포 <span className='thin'>GMP</span></span>
                            <span><IoIosAirplane /></span>
                            <span>제주 <span className='thin'>CJU</span></span>
                        </div>
                        <div>
                            <span>2025.04.04(화)</span>
                            <span>19:10</span>
                            <span>~</span>
                            <span>2025.04.04(화)</span>
                            <span>20:25</span>
                        </div>
                        <div>
                            <span className='thin'>KRW </span>
                            <span>31,900</span>
                        </div>
                    </div>
                    <div className='booking-section1-right'
                        onClick={clickReSelect}
                    >
                        다시 선택
                    </div>
                </div>
                <div className='booking-date'>
                    <div className='booking-location'>
                        <span>구간 2 </span>
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

                    <BookingTicketList
                        seatSelect = {seatSelect}
                        setSeatSelect = {setSeatSelect}
                    /> {/* 예약 가능 항공권 리스트 */}
                    
                    {/* <div className='booking-select-flight-list'>
                        {onewayList && onewayList.map}
                        {
                            onewayList.length > 0
                                ? (
                                    onewayList.map((list) =>
                                        <div className='booking-select-flight-section'
                                            style={{ backgroundColor: seatSelect !== '' ? "rgb(211, 233, 46)" : "rgb(242, 242, 242)" }}
                                        >
                                            <div className='booking-select-info'>
                                                <div className='booking-select-flight-info'>
                                                    <p>{list.fNUM}</p>
                                                    <p className='thin'>{list.pnum}</p>
                                                </div>
                                                <div className='booking-select-time-info'>
                                                    <div className='booking-select-time-block'>
                                                        <p>{list.Arrive_time.substring(0, 5)}</p>
                                                        <p>{list.A_acode}</p>
                                                    </div>
                                                    <div>
                                                        <p>01h 15m</p>
                                                        <p><IoIosAirplane /></p>
                                                        <div></div>
                                                    </div>
                                                    <div className='booking-select-time-block'>
                                                        <p>{list.Departure_time.substring(0, 5)}</p>
                                                        <p>{list.D_acode}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='booking-flight-buttons'>
                                                <button onClick={() => clickSelectSeat('basic')}
                                                    className={seatSelect === 'basic' ? 'booking-flight-selected-seat' : "booking-flight-seat"}>
                                                    <p>일반석</p>
                                                    <span>KRW <b>{list.basic_price.toLocaleString()}</b></span>
                                                    <p>잔여 5석!</p>
                                                </button>
                                                <button onClick={() => clickSelectSeat('premium')}
                                                    className={seatSelect === 'premium' ? 'booking-flight-selected-seat' : "booking-flight-seat"}>
                                                    <p>프리미엄석</p>
                                                    <span>KRW <b>{list.premium_price.toLocaleString()}</b></span>
                                                    <p>잔여 8석!</p>
                                                </button>
                                            </div>
                                        </div>
                                    )
                                )
                                : <div>항공권이 존재하지 않습니다.</div>
                        }
                    </div> */}

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