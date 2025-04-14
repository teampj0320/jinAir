import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function BookingDates() {
    const [selectedDate, setSelectedDate] = useState(3);

    // 임시 데이터
    const dateList = [
        {date: '2025-04-01', week: '화', price: 96900},
        {date: '2025-04-02', week: '수', price: 55900},
        {date: '2025-04-03', week: '목', price: 49900},
        {date: '2025-04-04', week: '금', price: 31900},
        {date: '2025-04-05', week: '토', price: 26900},
        {date: '2025-04-06', week: '일', price: 33900},
        {date: '2025-04-07', week: '월', price: 52900}
    ];

    // 화살표 버튼 클릭 이벤트
    // 클릭시 선택한 날짜를 기준으로 일주일씩 이동해야 함
    const clickArrowBtn = (type) => {
        console.log(type);
    }

    // 날짜 목록 클릭 이벤트
    const handleDate = (i) => {
        setSelectedDate(i);
    }

    return (
        <div className='booking-list-container'>
            <button className='booking-list-prev'
                onClick={() => clickArrowBtn("prev")}
            >
                <IoIosArrowBack />
            </button>
            <ul className='booking-list'>
                { dateList && dateList.map((list, i) => 
                    <li className={selectedDate === i && 'selected-booking-date'}
                        id={i}
                        onClick={() => handleDate(i)}
                    >
                        <p>{list.date} ({list.week})</p>
                        <p>KRW <b>{list.price.toLocaleString()}</b></p>
                    </li>
                ) }
            </ul>
            <button className='booking-list-next'
                onClick={() => clickArrowBtn("next")}
            >
                <IoIosArrowForward />
            </button>
        </div>
    );
}