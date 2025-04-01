import React, { useEffect } from 'react';
import { TbArrowsExchange } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getModalOpen,getPeopleModal,getCalendar } from '../../../service/searchApi.js';

export default function RoundTrip({ adultNum, pediatricNum, babyNum, departure,
    arrive, setType, exchangeCountry, startDate, endDate }) {
    const dispatch = useDispatch();
    

    const depart = useRef(null);
    const arr = useRef(null);
    const date = useRef(null);

    useEffect(() => {
        departure !== '' && depart.current.style.setProperty('border', 'none');
        departure !== '' && depart.current.style.setProperty('border-bottom', '1px solid var(--color-153)');
        arrive !== '' && arr.current.style.setProperty('border', 'none');
        arrive !== '' && arr.current.style.setProperty('border-bottom', '1px solid var(--color-153)');
        startDate !== '' && date.current.style.setProperty('border', 'none');
        startDate !== '' && date.current.style.setProperty('border-bottom', '1px solid var(--color-153)');
    }, [departure, arrive, startDate])

    const handleCheck = (e) => {
        e.preventDefault();
        let isValid = true;

        if (departure === '') {
            depart.current.style.setProperty('border', '2px solid red');
            isValid = false;
        }
        else if (arrive === '') {
            arr.current.style.setProperty('border', '2px solid red');
            isValid = false;
        }
        else if (startDate === '') {
            date.current.style.setProperty('border', '2px solid red');
            isValid = false;
        }
        return isValid;
    }

    return (
        <form onSubmit={handleCheck}>
            <div className='main-top-search-bottom-main-middle'>
                <div onClick={() => { dispatch(getModalOpen(true)); setType('y') }} ref={depart}>
                    <h5>출발지 선택</h5>
                    <div>
                        {departure === '' ? <h3>출발</h3>
                            : <h3 className='active-departure-country'>{departure}</h3>}
                        <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                    </div>
                </div>
                <TbArrowsExchange
                    onClick={exchangeCountry}
                    className='main-top-search-bottom-main-middle-icon2' />
                <div onClick={() => { dispatch(getModalOpen(true)); setType('n') }} ref={arr}>
                    <h5>도착지 선택</h5>
                    <div>
                        {arrive === '' ? <h3>도착</h3>
                            : <h3 className='active-arrive-country'>{arrive}</h3>}
                        <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                    </div>
                </div>
                <div ref={date}>
                    <h5>여행 기간</h5>
                    <div onClick={() => { dispatch(getCalendar(true)) }} >
                        <span>
                            <FaCalendarCheck />
                            {startDate !== '' && endDate !== '' ? <h3 className='active-calendar-date'>{startDate} ~ {endDate}</h3>
                                : <h3>가는날 ~ 오는날</h3>}
                        </span>
                        <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                    </div>
                </div>
            </div>
            <div className='main-top-search-bottom-main-bottom'>
                <div onClick={() => { dispatch(getPeopleModal(true)) }}>
                    <h5>탑승 승객 인원</h5>
                    <div>
                        <span>
                            <IoPersonSharp />
                            {adultNum && pediatricNum !== 0 && babyNum !== 0 &&
                                <h3>성인{adultNum}, 소아{pediatricNum}, 유아{babyNum}</h3>}
                            {adultNum && pediatricNum !== 0 && babyNum === 0 &&
                                <h3>성인{adultNum}, 소아{pediatricNum}</h3>}
                            {adultNum && pediatricNum === 0 && babyNum === 0 &&
                                <h3>성인{adultNum}</h3>}
                        </span>
                        <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                    </div>
                </div>
                <button type='submit'>항공권 조회</button>
            </div>
        </form>
    );
}

