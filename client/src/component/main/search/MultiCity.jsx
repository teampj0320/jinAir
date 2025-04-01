import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { IoAirplane } from "react-icons/io5";


export default function MultiCity({setCalendar2,startDate2, startDate,adultNum, pediatricNum,babyNum,multiArr,setModalOpen, departure, arrive, setType, multiDepart, setCalendar, setPeopleModal }) {
    return (
        <>
            <div className='main-top-search-bottom-main-middle3'>
                <div onClick={() => { setModalOpen(true); setType('y') }}>
                    <h5>출발지 선택</h5>
                    <div>
                        {departure === '' ? <h3>출발</h3>
                            : <h3 className='active-departure-country'>{departure}</h3>}
                        <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                    </div>
                </div>
                <IoAirplane className='main-top-search-bottom-main-middle-icon2' />
                <div onClick={() => { setModalOpen(true); setType('n') }}>
                    <h5>도착지 선택</h5>
                    <div>
                        {arrive === '' ? <h3>도착</h3>
                            : <h3 className='active-arrive-country'>{arrive}</h3>}
                        <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                    </div>
                </div>
                <div>
                    <h5>일정 선택</h5>
                    <div onClick={() => { setCalendar(true) }}>
                        <span>
                            <FaCalendarCheck />
                            {startDate !=='' ? <h3 className='active-calendar-date'>{startDate}</h3> 
                            : <h3>가는날</h3> }
                        </span>
                        <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                    </div>
                </div>
            </div>

            <div className='main-top-search-bottom-main-middle2'>
                <div onClick={() => { setModalOpen(true); setType('o'); }}>
                    <h5>출발지 선택</h5>
                    <div>
                        {multiDepart === '' ? <h3>출발</h3>
                            : <h3 className='active-arrive-country'>{multiDepart}</h3>}
                        <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                    </div>
                </div>
                <IoAirplane className='main-top-search-bottom-main-middle-icon2' />
                <div onClick={() => { setModalOpen(true); setType('x'); }}>
                    <h5>도착지 선택</h5>
                    <div>
                        {multiArr === '' ? <h3>도착</h3>
                            : <h3 className='active-arrive-country'>{multiArr}</h3>}
                        <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                    </div>
                </div>
                <div>
                    <h5>일정 선택</h5>
                    <div onClick={() => { setCalendar2(true) }}>
                        <span>
                            <FaCalendarCheck />
                            {startDate2 !=='' ? <h3 className='active-calendar-date'>{startDate2}</h3> 
                            : <h3>가는날</h3> }
                        </span>
                        <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                    </div>
                </div>
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
            </div>
            <div className='main-top-search-bottom-main-bottom2'>
                <button>항공권 조회</button>
            </div>
        </>
    );
}

