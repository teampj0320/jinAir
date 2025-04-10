import React from 'react';
import { IoIosAirplane } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import '../../scss/yuna.scss';
import { useNavigate } from 'react-router-dom';

export default function BookingStep({text}) {
    const navigate = useNavigate();

    /* 이전단계 클릭 이벤트 */
    const clickBackBtn = () => {
        if (text === 'selectSeat') {
            navigate('/booking/passenger');
        }
    }

    return (
        <div className='booking-step-wrap'>
            <div>
                <div className='booking-step-top'>
                    <div>
                        <span>왕복</span>
                        <div>
                            <span>서울/김포 <span className='thin'>GMP</span></span>
                            <span><IoIosAirplane /></span>
                            <span>제주 <span className='thin'>CJU</span></span>
                        </div>
                        <span>2025.04.21(월) ~ 2025.04.23(수)</span>
                    </div>
                    <div>
                        <span>성인 2</span>
                        { text === "avaliability" && <button>수정하기</button> }
                    </div>
                </div>
                <div className={`booking-step-${text}-bottom`}>
                    {
                        text === 'selectSeat' &&
                        <div className='booking-step-back-btn'
                            onClick={clickBackBtn}
                        >
                            <span><IoIosArrowBack /></span>
                            <span>이전단계</span>
                        </div>
                    }
                    <ul className='booking-step-menu'>
                        <li>1. 항공편 선택</li>
                        <li>2. 탑승객 정보</li>
                        <li>3. 부가서비스</li>
                        <li>4. 결제</li>
                    </ul>
                    <div className='booking-step-total'>
                        <div>
                            <p className='thin'>예상 결제 총액</p>
                            <span className='thin'>KRW <b>0</b></span>
                        </div>
                        <button><IoIosArrowBack /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}