import React, { useState } from 'react';
import { FaGift } from "react-icons/fa6";
import { GiCarSeat } from "react-icons/gi";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { BsFillSuitcase2Fill } from "react-icons/bs";
import { BiSolidRightArrow } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import { ImAirplane } from "react-icons/im";
import { IoTicketSharp } from "react-icons/io5";
import { TbArrowsExchange } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { BsQuestionCircleFill } from "react-icons/bs";
import '../../scss/haon.scss';

export default function MainSearch() {
    const [tab, setTab] = useState('main');
    const [searchTab, setSearchTab] = useState('roundTrip');

    return (
        <div style={{width: "1500px"}}>
        <div className='main-top-box'>
            <div className='main-top-img'>
                <img src="/images/main.jpg" alt="벚꽃이미지" />
            </div>
            <div className='main-top-search-all'>
                <div className='main-top-search-btns'>
                    <button
                        onClick={() => { setTab('main') }}
                        className={tab === 'main' ? 'main-top-search-btns-active' : 'main-top-search-btns-none'}>
                        <ImAirplane className='main-top-search-icons1' /><span>예약</span>
                    </button>
                    <button
                        onClick={() => { setTab('checkIn') }}
                        className={tab === 'checkIn' ? 'main-top-search-btns-active' : 'main-top-search-btns-none'}>
                        <IoTicketSharp className='main-top-search-icons2' /><span>체크인</span>
                    </button>
                    <button
                        onClick={() => { setTab('reservationCheck') }}
                        className={tab === 'reservationCheck' ? 'main-top-search-btns-active' : 'main-top-search-btns-none'}>
                        <IoSearchOutline className='main-top-search-icons3' /><span>예약조회</span>
                    </button>
                </div>
                {tab === 'main' &&
                    <div className='main-top-search-bottom1'>
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
                       { searchTab === 'roundTrip' &&
                       <>
                        <div className='main-top-search-bottom-main-middle'>
                            <div>
                                <h5>출발지 선택</h5>
                                <div>
                                    <h3>출발</h3>
                                    <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                                </div>
                            </div>
                            <TbArrowsExchange className='main-top-search-bottom-main-middle-icon2' />
                            <div>
                                <h5>도착지 선택</h5>
                                <div>
                                    <h3>도착</h3>
                                    <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                                </div>
                            </div>
                            <div>
                                <h5>여행 기간</h5>
                                <div>
                                    <span>
                                        <FaCalendarCheck />
                                        <h3>가는날 ~ 오는날</h3>
                                    </span>
                                    <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                                </div>
                            </div>
                        </div>
                        <div className='main-top-search-bottom-main-bottom'>
                            <div>
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
                         { searchTab === 'oneWay' &&
                       <>
                        <div className='main-top-search-bottom-main-middle2'>
                            <div>
                                <h5>출발지 선택</h5>
                                <div>
                                    <h3>출발</h3>
                                    <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                                </div>
                            </div>
                            <TbArrowsExchange className='main-top-search-bottom-main-middle-icon2' />
                            <div>
                                <h5>도착지 선택</h5>
                                <div>
                                    <h3>도착</h3>
                                    <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                                </div>
                            </div>
                            <div>
                                <h5>일정 선택</h5>
                                <div>
                                    <span>
                                        <FaCalendarCheck />
                                        <h3>가는날</h3>
                                    </span>
                                    <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                                </div>
                            </div>
                            <div>
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
                    </div>}
                {tab === 'checkIn' &&
                    <div className='main-top-search-bottom2'>
                        <ul>
                            <li>
                                <label htmlFor="">진에어 예약번호</label>
                                <input type="text" placeholder='숫자와 영문으로 조합된 6자리' />
                            </li>
                            <li>
                                <label htmlFor="">성(LAST NAME)</label>
                                <input type="text" />
                            </li>
                            <li>
                                <label htmlFor="">이름(FIRST NAME)</label>
                                <input type="text" />
                            </li>
                            <li>
                                <label htmlFor="">출발일</label>
                                <select name="" id="">
                                    <option value="">선택</option>
                                    <option value="">당일날짜</option>
                                    <option value="">내일</option>
                                    <option value="">모레</option>
                                </select>
                            </li>
                        </ul>
                        <div>
                            <ul>
                                <li>* 예약 시 입력한 승객명을 입력해주세요. (국내선 국문 예약은 국문 성/이름, 국제선은 영문 성/이름)</li>
                                <li>* 공동운항 승객께서는 여기를 클릭하여 주세요.</li>
                            </ul>
                            <button>조회</button>
                        </div>
                    </div>}
                {tab === 'reservationCheck' &&
                    <div className='main-top-search-bottom3'>
                        <ul>
                            <li>
                                <label htmlFor="">진에어 예약번호</label>
                                <input type="text" placeholder='숫자와 영문으로 조합된 6자리' />
                            </li>
                            <li>
                                <label htmlFor="">성(LAST NAME)</label>
                                <input type="text" />
                            </li>
                            <li>
                                <label htmlFor="">이름(FIRST NAME)</label>
                                <input type="text" />
                            </li>
                            <li>
                                <label htmlFor="">출발일</label>
                                <div>
                                    <FaCalendarCheck className='main-top-search-bottom3-icon'/>
                                </div>
                            </li>
                        </ul>
                        <div>
                            <ul>
                                <li>* 예약 시 입력한 승객명을 입력해주세요. (국내선 국문 예약은 국문 성/이름, 국제선은 영문 성/이름)</li>
                                <li>* 공동운항 승객께서는 여기를 클릭하여 주세요.</li>
                            </ul>
                            <button>조회</button>
                        </div>
                    </div>}
                <div className='main-bottom-depart-check-middle'>
                    <div>
                        <h4>출발 전 체크!</h4>
                        <h5>여행 가기 전 확인 필수</h5>
                    </div>
                    <ul>
                        <li>
                            <span>
                                <FaGift />
                                <span>묶음할인</span>
                            </span>
                            <BiSolidRightArrow />
                        </li>
                        <li>
                            <span>
                                <GiCarSeat />
                                <span>사전좌석</span>
                            </span>
                            <BiSolidRightArrow />
                        </li>
                        <li>
                            <span>
                                <GiForkKnifeSpoon />
                                <span>기내식</span>
                            </span>
                            <BiSolidRightArrow />
                        </li>
                        <li>
                            <span>
                                <BsFillSuitcase2Fill />
                                <span>수하물</span>
                            </span>
                            <BiSolidRightArrow />
                        </li>
                    </ul>
                </div>
            </div>
            <div className='main-bottom-depart-check'>
            </div>
        </div>

        </div>
    );
}



