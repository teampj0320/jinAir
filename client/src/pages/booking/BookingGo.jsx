import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getOnewayList, setGoFlightInfo } from '../../service/bookingApi.js';
import BookingStep from '../../component/booking/BookingStep.jsx';
import BookingDates from '../../component/booking/BookingDates.jsx';
import BookingTicketList from '../../component/booking/BookingTicketList.jsx';
import { IoIosAirplane } from 'react-icons/io';
import { RxDividerVertical } from "react-icons/rx";

export default function BookingGo() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const ticketList = useSelector(state => state.booking.ticketList); // 예약 가능 항공권 리스트
    const departure = useSelector(state => state.search.departure); // 출발지
    const arrive = useSelector(state => state.search.arrive); // 도착지
    const startDate = useSelector(state => state.search.startDate); // 출발일

    // const [seatSelect, setSeatSelect] = useState('');
    const [flightNum, setFlightNum] = useState(''); // 비행편
    const [seatSelect, setSeatSelect] = useState(''); // 좌석 타입
    const [seatPrice, setSeatPrice] = useState(0); // 선택 좌석 가격
    const [sortSelect, setSortSelect] = useState('early');

    useEffect(() => {
        dispatch(getOnewayList(departure, arrive, startDate));
    }, []);

    /* 오는 편 선택 버튼 클릭 이벤트 */
    const clickNextBtn = () => {
        if (seatSelect !== '') {
            dispatch(setGoFlightInfo('roundTrip', flightNum, seatSelect, seatPrice));
            navigate('/booking/availabilityList/back');
        } else {
            alert('좌석을 선택해주세요.');
        }
    }
    
    // 확인
    // console.log("출발 비행편 --> ", flightNum);
    // console.log("출발 좌석타입 --> ", seatSelect);
    // console.log("출발 티켓가격 --> ", seatPrice);
    
    return (
        <div className='booking-avaliability-wrap'>
            <BookingStep text={'avaliability'} type={'roundTrip'} /> {/* 항공권 예약 ~ 결제 페이지 상단탭 */}

            <div className='booking-avaliability-contents'>
                <p className='booking-page-title'>1. 항공편 선택</p>
                <div className='booking-date'>
                    <div className='booking-location'>
                        <span>구간 1</span>
                        <div>
                            <span>{departure} <span>{ticketList.length > 0 && ticketList[0].A_acode}</span></span>
                            <span><IoIosAirplane /></span>
                            <span>{arrive} <span>{ticketList.length > 0 && ticketList[0].D_acode}</span></span>
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
                    오는 편 선택
                </button>
            </div>
        </div>
    );
}