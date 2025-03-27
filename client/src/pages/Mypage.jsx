import React from 'react';
import '../scss/ryeong.scss';

export default function Mypage() {
    return (
        <div className='r-common mp-container'>
            <div className='mp-content'>
                <section className='mypage-subtitle box-style'>
                    <p className='f30'>마이페이지</p>
                </section>
                <div className='mypage-index'>
                    <section className='mp-left box-style'>
                        <article className='user-info'>
                            <span>
                                <img src="/images/ddung.jpg" alt="" />
                            </span>
                            <div>
                                <p className='f30'><b>홍길동</b>님</p>
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

                            </div>
                        </article>
                    </section>
                    <section className='mp-center'></section>
                    <section className='mp-right'></section>
                </div>

            </div>
        </div>
    );
}

