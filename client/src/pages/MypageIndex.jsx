import React, { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import '../scss/ryeong.scss';
import { useNavigate } from 'react-router-dom';
import { getMyInfo } from '../service/myinfoApi.js';


export default function Mypage() {


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.login.isLoggedIn); 
    const myinfo = useSelector((state) => state.myinfo.myinfo); // 로그인 유저 정보

    
    
    /* 회원 정보 불러오기 */
    useEffect(() => {
        console.log('불러온 회원 정보:', myinfo);
        if(isLoggedIn){
        dispatch(getMyInfo())
        } else {
            const select = window.confirm("로그인 서비스가 필요합니다. \n로그인 하시겠습니까?");
            select ?  navigate('/login') :  navigate('/');
        }
    }, [])



    return (
        <div className='r-common mp-container'>
            <div className='mp-content'>
                <section className='mypage-subtitle'>
                    <p className='f30'>마이페이지</p>
                </section>
                <div className='mypage-index'>
                    <section className='mp-left box-style'>
                        <article className='user-info'>
                            <span>
                            {myinfo.profile_img?.[0] ? (
  <img src={`http://localhost:9000${myinfo.profile_img[0]}`} />
) : (
  <div className="default-profile-img" />
)}
                            </span>
                            <div>
                                <p className='f30'><b>{myinfo.kname_first}{myinfo.kname_last}</b>님</p>
                                <ul>
                                    <li className='thin300'>{myinfo.birth}</li>
                                    <li className='thin300'>{myinfo.email}</li>
                                    <li className='thin300'>{myinfo.phone}</li>
                                </ul>
                                <span className='f12 thin300 modify-info' onClick={()=>{navigate('../mypage/modifyInfo')}}>회원정보수정</span>
                            </div>
                        </article>
                        <article className='user-interest'>
                            <div>
                                <p className='f20 w600'>관심 지역/테마</p>
                                <ul>
                                    <li>#도시</li>
                                    <li>#국내</li>
                                    <li>#일본</li>
                                </ul>
                            </div>
                            <div className='interest-btn'  onClick={()=>{navigate('../mypage/myInterest')}}>
                                관심 지역 테마 수정하기
                            </div>

                        </article>
                    </section>
                    <section className='mp-center'>
                        <article className='mp-center-top'>
                            <div onClick={()=>{navigate('../mypage/getReservation')}}>
                                <b>나의 예약</b>
                                <p className='w300'>예약하신 항공권을<br />
                                    확인해보세요.</p>
                            </div>
                            <div onClick={()=>{navigate('../mypage/checkIn')}}>
                                <b>탑승권</b>
                                <p className='w300'>미리 온라인 체크인하고 <br />
                                    편하게 여행하세요.</p>
                            </div>
                        </article>
                        <article className='mp-center-bottom'>
                            <div className='mp-coupon-point-wrap'>
                                <div>
                                    <b>0P</b>
                                    <span className='w300'>나비포인트</span>
                                </div>
                                <div>
                                    <b>0개</b>
                                    <span className='w300'>할인쿠폰</span>
                                </div>
                            </div>
                            <div className='mp-friend'>
                                <p className='f20 w600 block'>여행친구</p>
                                <div>
                                    <span>친구</span>
                                </div>
                                <div>
                                    <span>그룹</span>
                                </div>
                                <div>
                                    <span>지니펫</span>
                                </div>
                            </div>
                        </article>
                    </section>
                    <section className='mp-right'>
                        <article className='mp-right-top'>
                            <p className='f20 w600 mp-title'>진에어페이</p>
                            <button>
                                <b className='f16'>진에어페이</b>
                                <p className='f12 w300'>진에어페이 등록하고 빠르게 결제하세요!</p>
                            </button>
                            <div className='jinair-pay-info f14 w300'>
                                <p>지금 간편 결제 등록하고</p>
                                <p>빠르게 예약하세요!</p>


                            </div>
                        </article>
                        <article className='mp-right-col-center'>
                            <div className='mp-company-content'>
                                <b className='f20'>상용 우대<br />기업 인증</b>
                                    <ul>
                                        <li>기업인증</li>
                                    </ul>
                            </div>
                        </article>
                        <article className='mp-right-bottom'>
                            <div className='mp-company-content'>
                                <b className='f20'>고객 문의</b>
                                <ul>
                                        <li onClick={()=>{navigate('../mypage/myQna')}}>나의 문의 확인</li>
                                        <li>고객의 말씀(Q&A)</li>
                                        <li>자주 묻는 질문(FAQ)</li>
                                    </ul>
                            </div>
                        </article>
                    </section>
                </div>

            </div>
        </div>
    );
}

