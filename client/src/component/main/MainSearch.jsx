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

export default function MainSearch() {
    const [tab, setTab] = useState('main');

    return (
        <div className='main-top-box'>
            <div className='main-top-bg-img'>
                {/* <h3>4월 3일, 이시가키지마 단독 신규 취항 </h3>
                <h5>꽃길만 날게 해줄게요</h5> */}
                <img src="" alt="벚꽃이미지" />
            </div>
            {/* <div className='가운데조회부분'>
                <div>
                    <button onClick={()=>{setTab('main')}}><ImAirplane /><span>예약</span></button>
                    <button onClick={()=>{setTab('checkIn')}}><IoTicketSharp /><span>체크인</span></button>
                    <button onClick={()=>{setTab('reservationCheck')}}><IoSearchOutline /><span>예약조회</span></button>
                </div>
                {tab === 'main' &&
                <div className='예약일때'>
                    <div className='상단'>
                        <ul>
                            <li>왕복</li>
                            <li>편도</li>
                            <li>다구간</li>
                        </ul>
                        <input type="text" />
                    </div>
                    <div className='출발지 도착지 선택'>
                        <div className='출발지선택'>
                            <h5>출발지 선택</h5>
                            <div>
                                <h3>출발</h3>
                                <IoIosArrowDown />
                            </div>
                        </div>
                        <TbArrowsExchange />
                        <div className='도착지선택'>
                            <h5>도착지 선택</h5>
                            <div>
                                <h3>도착</h3>
                                <IoIosArrowDown />
                            </div>
                        </div>
                        <div className='여행기간'>
                            <h5>여행 기간</h5>
                            <div>
                                <span>
                                    <FaCalendarCheck />
                                    <h3>가는날 ~ 오는날</h3>
                                </span>
                                <IoIosArrowDown />
                            </div>
                        </div>
                    </div>
                    <div className='하단'>
                        <div className=''>
                            <h5>탑승 승객 인원</h5>
                            <div>
                                <span>
                                    <IoPersonSharp />
                                    <h3>성인 1</h3>
                                </span>
                                <IoIosArrowDown />
                            </div>
                        </div>
                        <button>항공권 조회</button>
                    </div>
                </div>}
                {tab === 'checkIn' &&
                    <div className='체크인일때'>
                    <ul>
                        <li>
                            <label htmlFor="">진에어 예약번호</label>
                            <input type="text" placeholder='숫자와 영문으로 조합된 6자리'/>
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
                    <div className='예약조회일때'>
                <ul>
                        <li>
                            <label htmlFor="">진에어 예약번호</label>
                            <input type="text" placeholder='숫자와 영문으로 조합된 6자리'/>
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
                            <span>달력나오게</span>
                            <FaCalendarCheck />
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
            </div> */}
            <div className='main-bottom-depart-check'>
                <div className='main-bottom-depart-check-middle'>
                    <div>
                        <h4>출발 전 체크!</h4>
                        <h5>여행 가기 전 확인 필수</h5>
                    </div>
                    <ul>
                        <li>
                            <FaGift />
                            <span>묶음할인</span>
                            <BiSolidRightArrow />
                        </li>
                        <li>
                            <GiCarSeat />
                            <span>사전좌석</span>
                            <BiSolidRightArrow />
                        </li>
                        <li>
                            <GiForkKnifeSpoon />
                            <span>기내식</span>
                            <BiSolidRightArrow />
                        </li>
                        <li>
                            <BsFillSuitcase2Fill />
                            <span>수하물</span>
                            <BiSolidRightArrow />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}



