import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { getOnewayList } from '../../service/bookingApi.js';
import { IoIosAirplane } from 'react-icons/io';

export default function BookingTicketList({seatSelect, setSeatSelect}) {
    const onewayList = useSelector(state => state.booking.onewayList); // 예약 가능 항공권 리스트
    // const [seatSelect, setSeatSelect] = useState('');

    

    /* 좌석 선택(일반석/프리미엄석) 클릭 이벤트 */
    const clickSelectSeat = (type) => {
        seatSelect === type ? setSeatSelect('') : setSeatSelect(type);
    }

    console.log("항공권 목록 -->" , onewayList);

    return (
        <div className='booking-select-flight-list'>
            { onewayList && onewayList.length > 0
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
                                </button>
                                <button onClick={() => clickSelectSeat('premium')}
                                    className={seatSelect === 'premium' ? 'booking-flight-selected-seat' : "booking-flight-seat"}>
                                    <p>프리미엄석</p>
                                    <span>KRW <b>{list.premium_price.toLocaleString()}</b></span>
                                </button>
                            </div>
                        </div>
                    )
                )
                : <div>항공권이 존재하지 않습니다.</div> }
        </div>
    );
}