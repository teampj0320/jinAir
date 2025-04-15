import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { IoIosAirplane } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import '../../scss/yuna.scss';

export default function BookingStep({text}) {
    const navigate = useNavigate();
    const departure = useSelector(state => state.search.departure); // 출발지
    const arrive = useSelector(state => state.search.arrive); // 도착지
    const startDate = useSelector(state => state.search.startDate); // 출발일
    const endDate = useSelector(state => state.search.startDate); // 도착일

    const adultNum = useSelector(state => state.search.adultNum); // 성인 수
    const pediatricNum = useSelector(state => state.search.pediatricNum); // 소아 수
    const babyNum = useSelector(state => state.search.babyNum); // 유아 수

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
                            <span>{departure} <span className='thin'>GMP</span></span>
                            <span><IoIosAirplane /></span>
                            <span>{arrive} <span className='thin'>CJU</span></span>
                        </div>
                        <span>{startDate} ~ {endDate}</span>
                    </div>
                    <div>
                        <span>{adultNum >=1 && `성인 ${adultNum}`} {pediatricNum >=1 && `소아 ${pediatricNum}`} {babyNum >=1 && `유아 ${babyNum}`}</span>
                        {/* { text === "avaliability" && <button>수정하기</button> } */}
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
                        <li>3. 좌석 선택</li>
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