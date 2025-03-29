import React from 'react';
import { useState, useRef } from 'react';
import { IoPersonSharp } from "react-icons/io5";
import { BsQuestionCircleFill } from "react-icons/bs";
import { IoAirplane } from "react-icons/io5";
import { TbArrowsExchange } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import MainSearchCountryModal from './MainSearchCountryModal.jsx';
import MainSearchPeopleModal from './MainSearchPeopleModal.jsx';
import MainSearchCalendar from './MainSearchCalendar.jsx';

export default function MainSearchReservation() {
    const [searchTab, setSearchTab] = useState('roundTrip');
    const [modalOpen, setModalOpen] = useState(false); // 얘 전역에서 관리해야함
    const [type, setType] = useState('n');
    const [peopleModal, setPeopleModal] = useState(false);
    const [calendar, setCalendar] = useState(false);

    return (
        <div className='main-top-search-bottom1'>
            {modalOpen && <MainSearchCountryModal type = {type}/>}
            {peopleModal && <MainSearchPeopleModal />}
            {calendar && <MainSearchCalendar/>}
            <div className='main-top-search-bottom-main-top'>
                <ul>
                    <li onClick={() => { setSearchTab('roundTrip') }}
                        className={searchTab === 'roundTrip' ? 'main-top-search-bottom-tab-active' : 'main-top-search-bottom-tab-none'}>
                        왕복</li>
                    <li onClick={() => { setSearchTab('oneWay') }}
                        className={searchTab === 'oneWay' ? 'main-top-search-bottom-tab-active' : 'main-top-search-bottom-tab-none'}>
                        편도</li>
                    <li onClick={() => { setSearchTab('multiCity') }}
                        className={searchTab === 'multiCity' ? 'main-top-search-bottom-tab-active' : 'main-top-search-bottom-tab-none'}>
                        다구간</li>
                </ul>
                <div>
                    <input type="text" placeholder='프로모션 코드를 입력해주세요.' />
                    <BsQuestionCircleFill />
                </div>
            </div>
            {searchTab === 'roundTrip' &&
                <>
                    <div className='main-top-search-bottom-main-middle'>
                        <div onClick={() => {setModalOpen(true); setType('y')}}>                                
                            <h5>출발지 선택</h5>
                            <div>
                                <h3>출발</h3>
                                <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                            </div>
                        </div>
                        <TbArrowsExchange className='main-top-search-bottom-main-middle-icon2' />
                        <div onClick={() => {setModalOpen(true); setType('n')}}>
                            <h5>도착지 선택</h5>
                            <div>
                                <h3>도착</h3>
                                <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                            </div>
                        </div>
                        <div>
                            <h5>여행 기간</h5>
                            <div  onClick={()=>{setCalendar(true)}}>
                                <span>
                                    <FaCalendarCheck />
                                    <h3>가는날 ~ 오는날</h3>
                                </span>
                                <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                            </div>
                        </div>
                    </div>
                    <div className='main-top-search-bottom-main-bottom'>
                        <div onClick={()=>{setPeopleModal(true)}}>
                            <h5>탑승 승객 인원</h5>
                            <div>
                                <span>
                                    <IoPersonSharp />
                                    <h3>성인 1</h3>
                                </span>
                                <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                            </div>
                        </div>
                        <button>항공권 조회</button>
                    </div>
                </>
            }
            {searchTab === 'oneWay' &&
                <>
                    <div className='main-top-search-bottom-main-middle2'>
                        <div onClick={() => {setModalOpen(true); setType('y')}}>
                            <h5>출발지 선택</h5>
                            <div>
                                <h3>출발</h3>
                                <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                            </div>
                        </div>
                        <TbArrowsExchange className='main-top-search-bottom-main-middle-icon2' />
                        <div onClick={() => {setModalOpen(true); setType('n')}}>
                            <h5>도착지 선택</h5>
                            <div>
                                <h3>도착</h3>
                                <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                            </div>
                        </div>
                        <div>
                            <h5>일정 선택</h5>
                            <div onClick={()=>{setCalendar(true)}}>
                                <span>
                                    <FaCalendarCheck />
                                    <h3>가는날</h3>
                                </span>
                                <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                            </div>
                        </div>
                        <div onClick={()=>{setPeopleModal(true)}}>
                            <h5>탑승 승객 인원</h5>
                            <div>
                                <span>
                                    <IoPersonSharp />
                                    <h3>성인 1</h3>
                                </span>
                                <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                            </div>
                        </div>
                    </div>
                    <div className='main-top-search-bottom-main-bottom2'>
                        <button>항공권 조회</button>
                    </div>
                </>
            }
            {searchTab === 'multiCity' &&
                <>
                    <div className='main-top-search-bottom-main-middle3'>
                        <div onClick={() => {setModalOpen(true); setType('y')}}>
                            <h5>출발지 선택</h5>
                            <div>
                                <h3>출발</h3>
                                <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                            </div>
                        </div>
                        <IoAirplane className='main-top-search-bottom-main-middle-icon2' />
                        <div onClick={() => {setModalOpen(true); setType('n')}}>
                            <h5>도착지 선택</h5>
                            <div>
                                <h3>도착</h3>
                                <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                            </div>
                        </div>
                        <div>
                            <h5>일정 선택</h5>
                            <div onClick={()=>{setCalendar(true)}}>
                                <span>
                                    <FaCalendarCheck />
                                    <h3>가는날</h3>
                                </span>
                                <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                            </div>
                        </div>
                    </div>
                    <div className='main-top-search-bottom-main-middle2'>
                        <div onClick={() => {setModalOpen(true); setType('y')}}>
                            <h5>출발지 선택</h5>
                            <div>
                                <h3>출발</h3>
                                <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                            </div>
                        </div>
                        <IoAirplane className='main-top-search-bottom-main-middle-icon2' />
                        <div onClick={() => {setModalOpen(true); setType('n')}}>
                            <h5>도착지 선택</h5>
                            <div>
                                <h3>도착</h3>
                                <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                            </div>
                        </div>
                        <div>
                            <h5>일정 선택</h5>
                            <div onClick={()=>{setCalendar(true)}}>
                                <span>
                                    <FaCalendarCheck />
                                    <h3>가는날</h3>
                                </span>
                                <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                            </div>
                        </div>
                        <div onClick={()=>{setPeopleModal(true)}}>
                            <h5>탑승 승객 인원</h5>
                            <div>
                                <span>
                                    <IoPersonSharp />
                                    <h3>성인 1</h3>
                                </span>
                                <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                            </div>
                        </div>
                    </div>
                    <div className='main-top-search-bottom-main-bottom2'>
                        <button>항공권 조회</button>
                    </div>
                </>
            }
        </div>
    );
}

