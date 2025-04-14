import React, { useState,useRef, useEffect } from 'react';
import { IoAirplane } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { getCountry } from '../../../service/searchApi.js';
export default function Airplane() {
    const [country, setCountry] = useState(false);
    const [countryClick, setCountryClick] = useState(false);
    const [airNum, setAirNum] = useState(false);
    const [airNumClick, setAirNumClick] = useState(false);
    const [airNumber, setAirNumber] = useState('');
    const [airNumStartDate, setAirNumStartDate] = useState('');
    const [startCountry, setStartCountry] = useState('');
    const [endCountry, setEndCountry] = useState('');
    const [countryDate, setCountryDate] = useState('');
    const airnumRef = useRef(null);
    const airnumDateRef = useRef(null);
    const startRef = useRef(null);
    const endRef = useRef(null);
    const countryRef = useRef(null);
    const dispatch = useDispatch();
    const countryList = useSelector(state => state.search.countryList);

    useEffect(() => {
        dispatch(getCountry());
    }, []);
    const processedList = countryList.map(item => item.city.split('(')[0]);

    const handleAirnumber = (e) => {
        setAirNumber(e.target.value);
        
    }
    const handleAirnumDate = (e) => {
        setAirNumStartDate(e.target.value);        
    }
    const handleStartCountry = () => {
        setStartCountry(startRef.current.value);
    }
    const handleEndCountry = () => {
        setEndCountry(endRef.current.value);
    }
    const handleCountryDate = (e) => {
        setCountryDate(e.target.value); 
    }

    const validateAirnum = () => {
        if(airNumber === ''){
            airnumRef.current.focus();
            return false;
        }else if(airNumStartDate === ''){
            airnumDateRef.current.focus();
            return false;
        }
        return true;
    }
    const validateCountry = () => {
        if(startCountry === ''){
            startRef.current.focus();
            return false;
        }else if(endCountry === ''){
            endRef.current.focus();
            return false;
        }else if(countryDate === ''){
            countryRef.current.focus();
            return false;
        }
        return true;
    }

    const handleAirNum = () => {
        if(validateAirnum()){
                setAirNumClick(true);
            }
        }

    const handleCountry = () => {
        if(validateCountry()){
            setCountryClick(true);
        }
    }
    const exchangeCountry = () => {
        setStartCountry(endCountry);
        setEndCountry(startCountry);
    }

    return (
        <div className='airplane-all-box'>
            <div className='schedule-all-box'>
                <p>출도착조회를 선택하셨습니다. 조회하실 방법을 선택해주세요.</p>
                <div>
                    <button onClick={()=>{setAirNum(true)}}>편명으로 조회</button>
                    <button onClick={() => { setCountry(true) }}>출도착지로 조회</button>
                </div>
            </div>
            {airNum &&
                <div className='schedule-all-box'>
                    <div>
                        <p>진에어 항공편의 출도착 조회를 도와드릴게요~</p>
                        <p>편명과 날짜를 입력해주세요!</p>
                    </div>
                    <div className='schedule-calendar-check-box'>
                        <span>편명</span>
                        <input type="text" placeholder='LJ001 형식으로 입력해주세요' 
                           onChange={handleAirnumber} ref={airnumRef}/>
                    </div>
                    <div className='schedule-calendar-check-box'>
                        <span>가는날</span>
                        <input type="date" onChange={handleAirnumDate} ref={airnumDateRef}/>
                    </div>
                    <div>
                        <button onClick={() => { handleAirNum() }}>확인</button>
                    </div>
                </div>
            }
            {airNumClick &&
                <div className='airplane-airNumClick'>
                    <div className='schedule-all-box'>
                        <p>[출발일:{airNumStartDate}, 편명:{airNumber}] <br />출도착 정보를 조회하였습니다.</p>
                        <table>
                            <tr>
                                <td>서울/인천(ICN)</td>
                                <td><IoAirplane className='schedule-exist-top-icon' /></td>
                                <td>서울/인천(ICN)</td>
                            </tr>
                            <tr>
                                <td>스케줄 10:30</td>
                                <td></td>
                                <td>스케줄 10:30</td>
                            </tr>
                            <tr>
                                <td>예상 시각 11:30</td>
                                <td></td>
                                <td>예상 시각 11:30</td>
                            </tr>
                        </table>
                        <div>
                            <button>출도착지 바꾸기</button>
                        </div>
                    </div>
                </div>
            }
            {country &&
                <div className='schedule-all-box'>
                    <div className='schedule-top-box'>
                        <p>진에어 항공편의 스케줄 조회를 도와드릴게요~</p>
                        <p>출발지, 도착지와 가는날을 선택해주세요!</p>
                    </div>
                    <div className='schedule-country-check-box'>
                        <span>출발/도착</span>
                        <select name="" onChange={handleStartCountry} ref={startRef}>
                        <option value='default'>선택</option>
                            {processedList.map((data) => (
                                <option value={data}>{data}</option>
                            ))}
                        </select>
                        <select name="" onChange={handleEndCountry} ref={endRef}>
                        <option value='default'>선택</option>
                            {processedList.map((data) => (
                                <option value={data}>{data}</option>
                            ))}
                        </select>
                    </div>
                    <div className='schedule-calendar-check-box'>
                        <span>가는날</span>
                        <input type="date" ref={countryRef} onChange={handleCountryDate}/>
                    </div>
                    <div className='schedule-button-box'>
                        <button onClick={() => { handleCountry() }}>확인</button>
                    </div>
                </div>
            }
            {countryClick &&
                <>
                    <div className='schedule-all-box'>
                        <div className='schedule-exist-box'>
                            <p>[출발일:{countryDate}, 출발지:ICN, 도착지:nod] <br />스케줄 정보를 조회하였습니다.</p>
                            <table className='airplane-country-table'>
                                <tr>
                                    <td>{startCountry}(icd)</td>
                                    <td><IoAirplane className='schedule-exist-top-icon' /></td>
                                    <td>{endCountry}(icd)</td>
                                </tr>
                                <tr>
                                    <td>편명</td>
                                    <td>출발</td>
                                    <td>도착</td>
                                </tr>
                                <tr>
                                    <td>LJ231</td>
                                    <td>01:20</td>
                                    <td>02:20</td>
                                </tr>
                            </table>
                            <div>화면에 표시되는 시각은 현지 시각 기준입니다.</div>
                            <div>
                                <button>예약하기</button>
                                <button onClick={()=>{exchangeCountry()}}>출도착지 바꾸기</button>
                            </div>
                            {/* 여기서 예약하기 누르면 그냥 메인페이지로 넘어감 ( 이거 좀 바꿀필요가잇다고 생각)
                                        // 출도착지 변경은 걍 두개 변경해주면댐*/}
                        </div>
                    </div>
                    <div className='schedule-all-box'>
                        {!countryClick &&
                            <div className='schedule-none-exist-box'>
                                <p>[출발일:{countryDate}, 출발지:ICN, 도착지:BKK] <br />일치하는 스케줄 정보가 없습니다.</p>
                            </div>
                        }
                    </div>
                </>}
        </div>
    );
}

