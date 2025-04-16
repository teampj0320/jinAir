import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
// import { getOnewayList } from '../../service/bookingApi.js';
import BookingStep from '../../component/booking/BookingStep.jsx';
import BookingDates from '../../component/booking/BookingDates.jsx';
import BookingTicketList from '../../component/booking/BookingTicketList.jsx';
import { IoIosAirplane } from 'react-icons/io';
import { RxDividerVertical } from "react-icons/rx";
import '../../scss/yuna.scss';

export default function BookingOneWay() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const departure = useSelector(state => state.search.departure); // 출발지
    const arrive = useSelector(state => state.search.arrive); // 도착지
    const startDate = useSelector(state => state.search.startDate); // 출발일
    const onewayList = useSelector(state => state.booking.onewayList); // 예약 가능 항공권 리스트
    const dcode = useSelector(state => state.booking.dcode);
    const acode = useSelector(state => state.booking.acode);

    const [seatSelect, setSeatSelect] = useState('');
    const [sortSelect, setSortSelect] = useState('early');

    // useEffect(() => {
    //     dispatch(getOnewayList(departure, arrive, startDate));
    // }, []);

    /* 탑승객 정보 입력 버튼 클릭 이벤트 */
    const clickNextBtn = () => {
        seatSelect !== '' ? navigate("/booking/passenger") : alert("좌석을 선택해주세요.");
    }

    // console.log("출발 공항코드 확인 --> ", dcode);
    // console.log("도착 공항코드 확인 --> ", acode);

    return (
        <div className='booking-avaliability-wrap'>
            <BookingStep text={'avaliability'} /> {/* 항공권 예약 ~ 결제 페이지 상단탭 */}

            <div className='booking-avaliability-contents'>
                <p className='booking-page-title'>1. 항공편 선택</p>
                <div className='booking-date'>
                    <div className='booking-location'>
                        <span>구간 1</span>
                        <div>
                            <span>{departure} <span>{onewayList.length > 0 && onewayList[0].A_acode}</span></span>
                            <span><IoIosAirplane /></span>
                            <span>{arrive} <span>{onewayList.length > 0 && onewayList[0].D_acode}</span></span>
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