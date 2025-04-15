import React, { useEffect, useState } from 'react';
import MypageNavigation from '../../component/mypage/MypageNavigation.jsx';
import '../../scss/ryeong.scss';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

export default function MyReservation() {

    // 예약내역, 지난예역 전환 
    const [filterBtn, setFilterBtn] = useState('예약내역');
    const [resData, setResData] = useState(null);
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);
    dayjs.locale('ko');  // 날짜 포맷

    // view_my_reservation 불러오기
    useEffect(() => {

        if (isLoggedIn) {
            const id = localStorage.getItem('user_id');

            axios.post('http://localhost:9000/mypage/getMyRes', { id })
                .then((res) => {
                    console.log('서버 응답 데이터:', res.data);
                    setResData(res.data);

                })
                .catch((err) => console.log(err))
        }
    }, [])







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
                        {
                            resData ? resData.map((itemGroup, i) => (
                                <section className='myRes-tbody' key={i}>
                                    <div className='w300'>
                                        {itemGroup[0].res_num}
                                    </div>
                                    <div className='itinerary'>
                                        <ul>
                                        {itemGroup.map((item, idx) => (
                                            <li>
                                                <div className='empty'>
                                                </div>
                                                <div className='flight-segment'>
                                                    <b className='f12'>{`구간${idx + 1}`}</b>
                                                    <span className='w600'>{item.fnum}</span>
                                                </div>

                                                <div className='flight-segment-type'>
                                                    <span className='f20 w600'>
                                                        {item.departure_location}
                                                        <label className='f14 w300'>{item.d_acode}</label>
                                                    </span>
                                                    <p className='f12 w300'>
                                                        {dayjs(item.departure_date).add(9, 'hour').format('YYYY.MM.DD (ddd) HH:mm')}</p>
                                                </div>
                                                <span className='air-port-svg'></span>
                                                <div className='flight-segment-type' >
                                                    <span className='f20 w600'>
                                                        {item.arrive_location}
                                                        <label className='f14 w300'>{item.a_acode}</label>
                                                    </span>
                                                    <p className='f12 w300'>{dayjs(item.arrive_date).add(9, 'hour').format('YYYY.MM.DD (ddd) HH:mm')}</p>
                                                </div>

                                            </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>{dayjs(itemGroup[0].res_date).format('YYYY.MM.DD (ddd)')}</div>
                                    <div>왕복</div>
                                    <div> {itemGroup[0].passenger_name ? JSON.parse(itemGroup[0].passenger_name).length : 0}명</div>
                                    {/* 여정 출발일 기준 디데이 계산 */}
                                    <div>확약
                                        <p>(D-{dayjs(itemGroup[0].departure_date).diff(dayjs(), 'day')})</p>
                                    </div>
                                </section>

                            )) : (

                                <div className='res-list-none'>
                                    <span></span>
                                    <p>예약된 내역이 없습니다.</p>
                                </div>
                            )
                        }
                    </div>
                </section>
            </div> {/* 해당 컴포넌트 가운데 정렬*/}
        </div> /* 백그라운드 컬러 설정 */
    );
}

