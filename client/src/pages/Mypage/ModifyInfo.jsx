import React, { useState } from 'react';
import MypageNavigation from '../../component/mypage/MypageNavigation.jsx';
import '../../scss/ryeong.scss';

export default function ModifyInfo() {



    return (
        <div className='r-common mp-container'>
            <div className='mp-content'>
                <MypageNavigation />
                <div className='small-wrap'>
                    <h2 className='f32 w700'>회원정보수정</h2>
                    <p className='sub-desc w300'>
                        회원정보는 개인정보취급방침에 따라 안전하게 보호되며<br />
                        회원님의 명백한 동의 없이 공개 또는 제 3자에게 제공되지 않습니다.
                    </p>
                <div className='profile-wrap'>
                    <b>프로필 사진</b>
                    <div className='profile-img'>
                        <img src="../images/ddung.jpg" alt="" />
                        <div></div>
                    </div>
                </div>
                </div>
            </div> {/* 해당 컴포넌트 가운데 정렬*/}
        </div> /* 백그라운드 컬러 설정 */
    );
}

