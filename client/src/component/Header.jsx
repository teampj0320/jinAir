import React from 'react';
import { FaEarthAmericas, FaCalendarCheck } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { HiOutlineBars3 } from "react-icons/hi2"; import { IoMdAirplane, IoIosPricetags, IoIosGift } from "react-icons/io";
import { MdAirplaneTicket, MdOutlinePets } from "react-icons/md";
import { RiDiscountPercentFill } from "react-icons/ri";
import { PiCalendarStarFill, PiSeatFill, PiAirplaneInFlightFill } from "react-icons/pi";
import { FaUtensils } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import { BsSuitcase2Fill } from "react-icons/bs";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { LuPackagePlus, LuHeartHandshake } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getLogout } from '../service/authApi.js';

export default function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    
    const handleLoginToggle = ()=>{
        if(isLoggedIn){
            const select = window.confirm('정말로 로그아웃 하시겠습니까?');
            if(select){
                dispatch(getLogout());
                navigate('/');
            }
        }else{
            navigate('/login');
        }
    };

    const handleNav = (path) => {
        navigate(path);
    }
    return (
        <>
            <div className='header_outline'>
                <div className='header'>
                    <div className='header_content'>
                        <div className='header_top'>
                            <div className='header_top_menu'>
                                <button onClick={handleLoginToggle}>
                                    <span>{isLoggedIn ? "로그아웃" : "로그인·회원가입"}</span>
                                </button>
                                <button><span>고객센터</span></button>
                                <button><span><FaEarthAmericas /></span><span style={{ paddingLeft: "5px" }}>한국(한국어)/KRW</span></button>
                            </div>
                            <div className='header_top_menu'>
                                <div className='home_main_logo'
                                    onClick={() => handleNav('/')}>
                                    <img src="https://images.jinair.com/newHom/images/web/common/logo.svg" alt="jinair-logo" />
                                </div>
                                <div className='menu_list'>
                                    <ul>
                                        <li>예약</li>
                                        <li>프로모션/제휴</li>
                                        <li>부가서비스</li>
                                        <li>운항정보</li>
                                        <li><HiOutlineBars3 /> 전체메뉴</li>
                                    </ul>
                                </div>
                                <div onClick={() => handleNav('/mypage/index')} style={{ display: "flex", cursor: "pointer", justifyContent: "center" }}><CiUser /></div>
                            </div>
                        </div>
                    </div>

                <div className='header_bottom'>
                    <div className='header_bottom_menu'>
                        <ul>
                            <li>
                                <span><IoMdAirplane /> 예약안내</span>
                                <ul>
                                    <li>항공권 예약</li>
                                    <li>예약/결제안내</li>
                                    <li>예약변경/취소/환불</li>
                                </ul>
                            </li>
                            <li>
                                <span><MdAirplaneTicket /> 추천 항공권</span>
                                <ul>
                                    <li>최저가항공권</li>
                                    <li>맞춤항공권</li>
                                </ul>
                            </li>
                            <li>
                                <span><IoIosPricetags /> 운임 및 수수료</span>
                                <ul>
                                    <li>국내선</li>
                                    <li>국제선</li>
                                </ul>
                            </li>
                            <li>
                                <span><RiDiscountPercentFill /> 할인</span>
                                <ul>
                                    <li>할인코드</li>
                                    <li>프로모션코드</li>
                                    <li>신분할인제도</li>
                                    <li>상용우대 프로그램</li>
                                </ul>
                            </li>
                            <li>
                                <span><PiCalendarStarFill /> 이벤트</span>
                                <ul>
                                    <li>진행중</li>
                                    <li>종료</li>
                                    <li>당첨자 발표</li>
                                </ul>
                            </li>
                            <li>
                                <span><LuHeartHandshake /> 제휴</span>
                                <ul>
                                    <li>차량</li>
                                    <li>호텔</li>
                                    <li>여행보험</li>
                                    <li>현지투어/통신</li>
                                    <li>카드/환전</li>
                                    <li>지니 보딩패스</li>
                                </ul>
                            </li>
                            <li>
                                <span><LuPackagePlus /> 부가서비스 안내</span>
                                <ul>
                                    <li><IoIosGift /> 묶음 할인</li>
                                    <li><PiSeatFill /> 좌석</li>
                                    <li><BsSuitcase2Fill /> 수하물</li>
                                    <li><FaUtensils /> 기내식</li>
                                    <li><AiFillSafetyCertificate /> 여행보험</li>
                                    <li><MdOutlinePets /> JINI PET</li>
                                </ul>
                            </li>
                            <li>
                                <span><PiAirplaneInFlightFill /> 출도착 안내</span>
                                <ul>
                                    <li>구간 조회</li>
                                    <li>편명 조회</li>
                                </ul>
                            </li>
                            <li>
                                <span><FaCalendarCheck /> 스케줄 조회</span>
                                <ul>
                                    <li>왕복</li>
                                    <li>편도</li>
                                </ul>
                            </li>
                            <li>
                                <span><FaEarthAsia /> 취항 노선 안내</span>
                                <ul>
                                    <li>국내선</li>
                                    <li>국제선</li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
                </div>
            </div>
        </>
    );
}