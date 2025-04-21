import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOnewayList, setBackFlightInfo } from '../../service/bookingApi.js';
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
    const dispatch = useDispatch();

    const ticketList = useSelector(state => state.booking.ticketList); // 예약 가능 항공권 리스트
    const departure = useSelector(state => state.search.departure); // 출발지
    const arrive = useSelector(state => state.search.arrive); // 도착지
    const startDate = useSelector(state => state.search.startDate); // 출발일
    const endDate = useSelector(state => state.search.endDate); // 도착일
    const goTicketPrice = useSelector(state => state.booking.goTicketPrice); // 가는 티켓값
    
    const [flightNum, setFlightNum] = useState(''); // 비행편
    const [seatSelect, setSeatSelect] = useState(''); // 좌석 타입
    const [seatPrice, setSeatPrice] = useState(0); // 선택 좌석 가격
    const [sortSelect, setSortSelect] = useState('early');

    const totalPrice = goTicketPrice + seatPrice;
    
    useEffect(() => {
        dispatch(getOnewayList(arrive, departure, endDate));
    }, []);

    /* 구간1 다시 선택 버튼 클릭 이벤트 */
    const clickReSelect = () => {
        const select = window.confirm("구간 1 항공편을 다시 선택하시겠습니까?");
        select && navigate('/booking/availabilityList/go');
    }

    const clickNextBtn = () => {
        if (seatSelect !== '') {
            dispatch(setBackFlightInfo('roundTrip', flightNum, seatSelect, seatPrice));
            navigate("/booking/passenger");
        } else {
            alert('좌석을 선택해주세요.');
        }
    }

    return (
        <div className='booking-avaliability-wrap'>
            <BookingStep text={'avaliability'} seatPrice={totalPrice} /> {/* 항공권 예약 ~ 결제 페이지 상단탭 */}

            <div className='booking-avaliability-contents'>
                <p className='booking-page-title'>1. 항공편 선택</p>
                <div className='booking-section1-container'>
                    <div className='booking-section1-left'>
                        <span>구간 1</span>
                        <div>
                            <span>{departure} <span>{ticketList.length > 0 && ticketList[0].A_acode}</span></span>
                            <span><IoIosAirplane /></span>
                            <span>{arrive} <span>{ticketList.length > 0 && ticketList[0].D_acode}</span></span>
                        </div>
                        <div>
                            <span>{startDate}</span>
                            <span>19:10</span>
                            <span>~</span>
                            <span>{startDate}</span>
                            <span>20:25</span>
                        </div>
                        <div>
                            <span className='thin'>KRW </span>
                            <span>{goTicketPrice.toLocaleString()}</span>
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
                            <span>{arrive} <span>{ticketList.length > 0 && ticketList[0].D_acode}</span></span>
                            <span><IoIosAirplane /></span>
                            <span>{departure} <span>{ticketList.length > 0 && ticketList[0].A_acode}</span></span>
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
                        setFlightNum = {setFlightNum}
                        setSeatPrice = {setSeatPrice}
                    /> {/* 예약 가능 항공권 리스트 */}

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