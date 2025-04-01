import React, { useState } from 'react';
import MypageNavigation from '../../component/mypage/MypageNavigation.jsx';
import '../../scss/ryeong.scss';

export default function CheckIn() {



    return (
        <div className='r-common mp-container'>
            <div className='mp-content'>
                <MypageNavigation />
                <section className='mp-common-content'>
                    <div className='mp-common-top'>
                        <span className='mp-common-title w700'>체크인 가능 여정</span>
                    </div>
                    <div className='mp-table-wrap'>
                        <div className='res-list-none'>
                            <span></span>
                            <p>체크인 가능 여정이 없습니다.</p>
                        </div>
                    </div>
                </section>
            </div> {/* 해당 컴포넌트 가운데 정렬*/}
        </div> /* 백그라운드 컬러 설정 */
    );
}

