import React, { useEffect, useState } from 'react';
import MypageNavigation from '../../component/mypage/MypageNavigation.jsx';
import '../../scss/ryeong.scss';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import BoardingPassEmail from '../../component/mypage/BordingPassEmail.jsx';


export default function CheckIn() {
    dayjs.locale('ko');  // 날짜 포맷
    const [resData, setResData] = useState(null);
    const [sendTarget, setSendTarget] = useState(null); // 탑승권 발송 정보
    const isLoggedIn = useSelector(state => state.login.isLoggedIn);

    // 예약정보 불러오기
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
                    <div className='mp-common-top'>
                        <span className='mp-common-title w700'>체크인 가능 여정</span>
                    </div>
                    <div className='mp-table-wrap'>
                        <ul className='myRes-thead'>
                            <li style={{ flex: '2' }}>예약번호</li>
                            <li style={{ flex: '7' }}>탑승구간</li>
                            <li style={{ flex: '2' }}>예약일</li>
                            <li style={{ flex: '1' }}>편명</li>
                            <li style={{ flex: '1' }}>탑승객수</li>
                            <li style={{ flex: '2' }}>체크인상태</li>
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
                                                        {/* <span className='w600'>{item.fnum}</span> */}
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
                                    <div>
                                        {dayjs(itemGroup[0].res_date).format('YYYY.MM.DD (ddd) HH:mm')}
                                    </div>
                                    <div>{itemGroup[0].fnum}</div>
                                    <div> {itemGroup[0].passenger_name ? itemGroup[0].passenger_name.length : 0}명</div>
                                    {/* 여정 출발일 기준 디데이 계산 */}
                                    <div className='gap10'>
                                        {dayjs(itemGroup[0].departure_date).isSame(dayjs(), 'day') ? (
                                            <>
                                                가능
                                                <button className='w-btn' onClick={() => setSendTarget(itemGroup[0])}>탑승권 발행</button>
                                            </>
                                        ) : (
                                            <>불가능
                                                <p className='f12 w300 text-center'>당일 체크인 가능</p>
                                                
                                            </>
                                        )}
                                    </div>
                                </section>

                            )) : (

                                <div className='res-list-none'>
                                    <span></span>
                                    <p>예약된 내역이 없습니다.</p>
                                </div>
                            )
                        }
                        {/* 탑승권 전송 */}
                        {sendTarget && <BoardingPassEmail segment={sendTarget} onSent={() => setSendTarget(null)} />}
                    </div>
                </section>
            </div> {/* 해당 컴포넌트 가운데 정렬*/}
        </div> /* 백그라운드 컬러 설정 */
    );
}

