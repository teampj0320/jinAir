import React from 'react';
import { useState } from 'react';

export default function MyReservation() {


    const [menuOpen, setMenuOpen] = useState(false);
    const [filterBtn, setFilterBtn] = useState('예약내역');

    return (
        <div className='r-common mp-container'>
            <div className='mp-content'>
                <section className='mypage-subtitle'>
                    <p className='f32'>마이페이지</p>
                    <div className='menu-btn-wrap'>
                        <button className='menu-btn w300'
                            aria-expanded={menuOpen}
                            onClick={() => setMenuOpen(!menuOpen)}>메뉴 바로가기</button>
                        <ul style={{ display: "none" }}>
                            <li>마이페이지 홈</li>
                            <li>나의 예약</li>
                            <li>체크인 / 탑승권</li>
                            {/* <li>나비포인트</li> */}
                            <li>할인쿠폰</li>
                            <li>관심 지역/테마</li>
                            <li>고객문의</li>
                            <li>회원정보 수정</li>
                        </ul>
                    </div>
                </section>
                <section className='myRes-content'>
                    <span className='myRes-title w700'>나의 예약</span>
                    <div className='flex space-between'>
                        <ul className='res-filter-btn'>
                            <li><button aria-selected={filterBtn === '예약내역'}
                            onClick={()=> setFilterBtn('예약내역')}
                            >예약내역</button></li>
                            <li><button aria-selected={filterBtn === '지난예약'}
                            onClick={()=> setFilterBtn('지난예약')}>지난예약</button></li>
                        </ul>
                        <select name="sort">
                            <option>출발일순</option>
                            <option>예약일순</option>
                        </select>
                    </div>
                </section>


            </div> {/* 해당 컴포넌트 가운데 정렬*/}
        </div> /* 백그라운드 컬러 설정 */
    );
}

