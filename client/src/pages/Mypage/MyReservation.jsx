import React, { useState } from 'react';
import MypageNavigation from '../../component/mypage/MypageNavigation.jsx';
import '../../scss/ryeong.scss';

export default function MyReservation() {



    const [filterBtn, setFilterBtn] = useState('예약내역');

    return (
        <div className='r-common mp-container'>
            <div className='mp-content'>
                <MypageNavigation />
                <section className='mp-common-content'>
                    <span className='mp-common-title w700'>나의 예약</span>
                    <div className='myRes-top'>
                        <ul className='res-filter-btn'>
                            <li><button aria-selected={filterBtn === '예약내역'}
                                onClick={() => setFilterBtn('예약내역')}
                            >예약내역</button></li>
                            <li><button aria-selected={filterBtn === '지난예약'}
                                onClick={() => setFilterBtn('지난예약')}>지난예약</button></li>
                        </ul>
                        <select className="sort">
                            <option>출발일순</option>
                            <option>예약일순</option>
                        </select>
                    </div>
                    <div className='mp-table-wrap'>
                        <ul className='myRes-thead'>
                            <li style={{ flex: '2' }}>예약번호</li>
                            <li style={{ flex: '7' }}>여정</li>
                            <li style={{ flex: '2' }}>예약일</li>
                            <li style={{ flex: '1' }}>구분</li>
                            <li style={{ flex: '1' }}>탑승객수</li>
                            <li style={{ flex: '2' }}>예약상태</li>
                        </ul>
                        <div className='res-list-none'>
                            <span></span>
                            <p>예약된 내역이 없습니다.</p>
                        </div>
                    </div>
                </section>
            </div> {/* 해당 컴포넌트 가운데 정렬*/}
        </div> /* 백그라운드 컬러 설정 */
    );
}

