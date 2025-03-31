import React, { useState } from 'react';
import MypageNavigation from '../../component/mypage/MypageNavigation.jsx';
import '../../scss/ryeong.scss';

export default function MyReservation() {


    return (
        <div className='r-common mp-container'>
            <div className='mp-content'>
                <MypageNavigation />
                <section className='mp-common-content'>
                    <div className='mp-common-top'>
                        <span className='mp-common-title w700'>관심지역/테마</span>
                    </div>
                    <p className='my-interest-desc'>관심지역/테마를 선택하고 내게 맞는 맞춤형 정보와 다양한 혜택을 누려보세요.</p>
                    <div className='go-to-fit-air-btn'>
                        <p>
                            관심지역/테마를 선택 후 내게 맞는 맞춤항공권을 확인하세요.
                        </p>
                        <span>
                            맞춤항공권 바로가기
                        </span>
                    </div>
                    <div className='tag-select'>
                        <div className='tag-header'>
                            <div className='tag-header-left'>
                                <b className='mp-common-title'>#1</b>
                                <p className='f18 w600'>관심지역을 선택해주세요</p>
                            </div>
                            <div className='f13'>최대 3개까지 선택이 가능합니다.</div>
                        </div>
                        <ul className='interest-tag'>
                            <li>국내</li>
                            <li>일본</li>
                            <li>중국</li>
                            <li>홍콩</li>
                            <li>마카오</li>
                            <li>대만</li>
                            <li>베트남</li>
                            <li>말레이시아</li>
                            <li>필리핀</li>
                            <li>라오스</li>
                            <li>미국(괌)</li>
                        </ul>
                    </div> {/* end of tagselect */}
                    <div className='tag-select'>
                        <div className='tag-header'>
                            <div className='tag-header-left'>
                                <b className='mp-common-title'>#2</b>
                                <p className='f18 w600'>관심테마 선택해주세요</p>
                            </div>
                            <div className='f13'>최대 3개까지 선택이 가능합니다.</div>
                        </div>
                        <ul className='interest-tag'>
                            <li>해변</li>
                            <li>도시</li>
                            <li>쇼핑</li>
                            <li>미식</li>
                            <li>유소아동반</li>
                            <li>친구</li>
                        </ul>
                    </div> {/* end of tagselect */}
                    <div className='align-center mt-top40 '>
                    <button className='navy-btn'>저장</button>

                    </div>
                </section>
            </div> {/* 해당 컴포넌트 가운데 정렬*/}
        </div> /* 백그라운드 컬러 설정 */
    );
}

