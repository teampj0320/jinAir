import React, { useRef, useEffect } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { IoAirplane } from "react-icons/io5";


export default function MultiCity({ setCalendar2, startDate2, startDate, adultNum, pediatricNum, babyNum, multiArr,
     setModalOpen, departure, arrive, setType, multiDepart, setCalendar, setPeopleModal }) {

    const depart = useRef(null);
    const arr = useRef(null);
    const date = useRef(null);
    const depart2 = useRef(null);
    const arr2 = useRef(null);
    const date2 = useRef(null);

    useEffect(() => {
        departure !== '' && depart.current.style.setProperty('border', 'none');
        departure !== '' && depart.current.style.setProperty('border-bottom', '1px solid var(--color-153)');
        arrive !== '' && arr.current.style.setProperty('border', 'none');
        arrive !== '' && arr.current.style.setProperty('border-bottom', '1px solid var(--color-153)');
        startDate !== '' && date.current.style.setProperty('border', 'none');
        startDate !== '' && date.current.style.setProperty('border-bottom', '1px solid var(--color-153)');

        multiDepart !== '' && depart2.current.style.setProperty('border', 'none');
        multiDepart !== '' && depart2.current.style.setProperty('border-bottom', '1px solid var(--color-153)');
        multiArr !== '' && arr2.current.style.setProperty('border', 'none');
        multiArr !== '' && arr2.current.style.setProperty('border-bottom', '1px solid var(--color-153)');
        startDate2 !== '' && date2.current.style.setProperty('border', 'none');
        startDate2 !== '' && date2.current.style.setProperty('border-bottom', '1px solid var(--color-153)');
    }, [departure, arrive, startDate,multiDepart,multiArr,startDate2])

    const validate = () => {
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
        else if (multiDepart === '') {
            depart2.current.style.setProperty('border', '2px solid red');
            isValid = false;
        }
        else if (multiArr === '') {
            arr2.current.style.setProperty('border', '2px solid red');
            isValid = false;
        }
        else if (startDate2 === '') {
            date2.current.style.setProperty('border', '2px solid red');
            isValid = false;
        }
        return isValid;
    }
    const handleCheck = () => {
        if(validate()){
            alert('조회하기');
        }
    }

    return (
        <>
            <div className='main-top-search-bottom-main-middle3'>
                <div onClick={() => { setModalOpen(true); setType('y') }} ref={depart}>
                    <h5>출발지 선택</h5>
                    <div>
                        {departure === '' ? <h3>출발</h3>
                            : <h3 className='active-departure-country'>{departure}</h3>}
                        <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                    </div>
                </div>
                <IoAirplane className='main-top-search-bottom-main-middle-icon2' />
                <div onClick={() => { setModalOpen(true); setType('n') }} ref={arr}>
                    <h5>도착지 선택</h5>
                    <div>
                        {arrive === '' ? <h3>도착</h3>
                            : <h3 className='active-arrive-country'>{arrive}</h3>}
                        <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                    </div>
                </div>
                <div ref={date}>
                    <h5>일정 선택</h5>
                    <div onClick={() => { setCalendar(true) }}>
                        <span>
                            <FaCalendarCheck />
                            {startDate !== '' ? <h3 className='active-calendar-date'>{startDate}</h3>
                                : <h3>가는날</h3>}
                        </span>
                        <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                    </div>
                </div>
            </div>

            <div className='main-top-search-bottom-main-middle2'>
                <div onClick={() => { setModalOpen(true); setType('o'); }} ref={depart2}>
                    <h5>출발지 선택</h5>
                    <div>
                        {multiDepart === '' ? <h3>출발</h3>
                            : <h3 className='active-arrive-country'>{multiDepart}</h3>}
                        <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                    </div>
                </div>
                <IoAirplane className='main-top-search-bottom-main-middle-icon2' />
                <div onClick={() => { setModalOpen(true); setType('x'); }} ref={arr2}>
                    <h5>도착지 선택</h5>
                    <div>
                        {multiArr === '' ? <h3>도착</h3>
                            : <h3 className='active-arrive-country'>{multiArr}</h3>}
                        <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                    </div>
                </div>
                <div ref={date2}>
                    <h5>일정 선택</h5>
                    <div onClick={() => { setCalendar2(true) }}>
                        <span>
                            <FaCalendarCheck />
                            {startDate2 !== '' ? <h3 className='active-calendar-date'>{startDate2}</h3>
                                : <h3>가는날</h3>}
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
                <button onClick={handleCheck}>항공권 조회</button>
            </div>
        </>
    );
}

