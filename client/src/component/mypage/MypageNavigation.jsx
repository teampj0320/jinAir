import React, { useState } from 'react';


export default function MypageNavigation() {

    const [menuOpen, setMenuOpen] = useState(false);
    // const [menuType, setMenuType] = useState('default')

    return (
        <div>
            <section className='mypage-subtitle'>
                <p className='f32'>마이페이지</p>
                <div className='menu-btn-wrap'>
                    <button className='menu-btn w300'
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}>메뉴 바로가기</button>

                    {
                        menuOpen && (
                    <ul className='mp-menu-drop-down'>
                        <li>마이페이지 홈</li>
                        <li>나의 예약</li>
                        <li>체크인 / 탑승권</li>
                        <li>나비포인트</li>
                        <li>할인쿠폰</li>
                        <li>관심 지역/테마</li>
                        <li>고객문의</li>
                        <li>회원정보 수정</li>
                    </ul>

                        )
                    }
                </div>
            </section>
        </div>
    );
}

