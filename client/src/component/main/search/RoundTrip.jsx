import React from 'react';
import { TbArrowsExchange } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";


export default function RoundTrip({
    adultNum, pediatricNum,babyNum, setModalOpen,departure,arrive,setType,exchangeCountry,setCalendar,setPeopleModal,
    startDate,endDate }) {
    
        
    
        return (
        <>
            <div className='main-top-search-bottom-main-middle'>
                <div onClick={() => { setModalOpen(true); setType('y') }}>
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
                <div onClick={() => { setModalOpen(true); setType('n') }}>
                    <h5>도착지 선택</h5>
                    <div>
                        {arrive === '' ? <h3>도착</h3>
                            : <h3 className='active-arrive-country'>{arrive}</h3>}
                        <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                    </div>
                </div>
                <div>
                    <h5>여행 기간</h5>
                    <div onClick={() => { setCalendar(true) }}>
                        <span>
                            <FaCalendarCheck />
                            {startDate !=='' && endDate !=='' ?<h3 className='active-calendar-date'>{startDate} ~ {endDate}</h3> 
                            : <h3>가는날 ~ 오는날</h3> }
                        </span>
                        <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                    </div>
                </div>
            </div>
            <div className='main-top-search-bottom-main-bottom'>
                <div onClick={() => { setPeopleModal(true) }}>
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
                <button>항공권 조회</button>
            </div>
        </>
    );
}

