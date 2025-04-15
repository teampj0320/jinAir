import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getOnewayList } from '../../service/bookingApi.js';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function BookingDates() {
    const dispatch = useDispatch();
    const startDate = useSelector(state => state.search.startDate); // 출발일
    const departure = useSelector(state => state.search.departure); // 출발지
    const arrive = useSelector(state => state.search.arrive); // 도착지
    const formatStartDate = startDate.replace(/\(.*\)/g, '').trim().replace(/\./g, '-');
    const [selectedDate, setSelectedDate] = useState(formatStartDate);

    // useEffect(() => {
    //     dispatch(getOnewayList(departure, arrive, selectedDate));
    // }, [selectedDate]);
    
    /* 현재 선택 날짜 기준으로 날짜 목록 생성 함수 */
    const getDateRange = (date) => {
        const selectedDate = new Date(date);
        const dateList = [];
        
        for (let i = -3; i < 4; i++) {
            const date = new Date(selectedDate);
            date.setDate(date.getDate() + i);
            
            const formatDate = date.toISOString().split('T')[0];
            dateList.push(formatDate);
        }
        
        return dateList;
    }

    /* selectedDate가 바뀔 때마다 dateList를 업데이트 */
    const [dateList, setDateList] = useState(getDateRange(selectedDate));

    /* 화살표 이전(<) 버튼 클릭 이벤트 - 클릭 시 선택 날짜 기준으로 일주일 전으로 이동 */
    const clickPrev = () => {
        const minDate = new Date('2025-04-08');
        const newDate = new Date(selectedDate);
        
        if (newDate < minDate) {
            alert("운항 정보가 없습니다.");
        } else {
            newDate.setDate(newDate.getDate() - 7);
            const formateDate = newDate.toISOString().split('T')[0];
            setSelectedDate(formateDate);
            setDateList(getDateRange(formateDate));
            // dispatch(getOnewayList(departure, arrive, selectedDate));
        }
    }
    
    /* 화살표 다음(>) 버튼 클릭 이벤트 - 클릭 시 선택 날짜 기준으로 일주일 후로 이동 */
    const clickNext = () => {
        console.log("다음");
        const newDate = new Date(selectedDate);
        newDate.setDate(newDate.getDate() + 7);
        const formateDate = newDate.toISOString().split('T')[0];
        setSelectedDate(formateDate);
        setDateList(getDateRange(formateDate));
        // dispatch(getOnewayList(departure, arrive, selectedDate));
    }

    /* 날짜 목록 클릭 이벤트 :: 현재 편도 기준으로 작업중 */
    const handleDate = (list) => {
        if (list.substring(5, 7) === '03') {
            alert("운항 정보가 없습니다");
            setSelectedDate(formatStartDate);
        } else {
            setSelectedDate(list);
            dispatch(getOnewayList(departure, arrive, list));
        }
    }

    return (
        <div className='booking-list-container'>
            <button className='booking-list-prev'
                onClick={clickPrev}
            >
                <IoIosArrowBack />
            </button>
            <ul className='booking-list'>
                { dateList && dateList.map((list) => 
                    <li className={selectedDate === list && 'selected-booking-date'}
                        onClick={() => {
                            handleDate(list);
                        }}
                    >
                        <p>{list}</p>
                        <p>{list.substring(5, 7) === '03' && '운항 없음'}</p>
                    </li>
                ) }
            </ul>
            <button className='booking-list-next'
                onClick={clickNext}
            >
                <IoIosArrowForward />
            </button>
        </div>
    );
}