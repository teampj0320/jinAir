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
                        <span className='mp-common-title'>1:1문의</span>
                        <div className='flex gap5'>
                            <button className='g-btn'>문의 등록(Q&A)</button>
                            <button className='g-btn'>자주묻는질문(FAQ)</button>
                        </div>
                    </div>
                    <div className='mp-table-wrap'>
                        <div className='res-list-none'>
                            <span></span>
                            <p>문의내역이 없습니다.</p>
                        </div>
                    </div>
                </section>
            </div> {/* 해당 컴포넌트 가운데 정렬*/}
        </div> /* 백그라운드 컬러 설정 */
    );
}

