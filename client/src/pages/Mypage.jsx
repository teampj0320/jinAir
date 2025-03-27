import React from 'react';
import '../scss/ryeong.scss';

export default function Mypage() {
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
                                <img src="/images/ddung.jpg" alt="" />
                            </span>
                            <div>
                                <p className='f30'><b>진에어</b>님</p>
                                <ul>
                                    <li className='thin300'>2999.01.01</li>
                                    <li className='thin300'>jinair@google.com</li>
                                    <li className='thin300'>010.0000.0000</li>
                                </ul>
                                <span className='f12 thin300 modify-info'>회원정보수정</span>
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
                            <div className='interest-btn'>
                                관심 지역 테마 수정하기
                            </div>

                        </article>
                    </section>
                    <section className='mp-center'>
                        <article className='mp-center-top'>
                            <div>
                                <b>나의 예약</b>
                                <p className='w300'>예약하신 항공권을<br/>
                                확인해보세요.</p>
                            </div>
                            <div>
                            <b>탑승권</b>
                                <p className='w300'>미리 온라인 체크인하고 <br/>
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
                        <article className='mp-right-col-center'></article>
                        <article className='mp-right-bottom'></article>
                    </section>
                </div>

            </div>
        </div>
    );
}

