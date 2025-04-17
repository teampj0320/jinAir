import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

export default function Reservation() {
    const [iknow, setIknow] = useState(false);
    const [iknow1, setIknow1] = useState(false);
    const [idknow, setIdknow] = useState(false);
    const [reservationExist, setReservationExist] = useState(false);
    const [reservationNo, setReservationNo] = useState(false);
    const btnRef = useRef(null);
    const navigate = useNavigate();
    const reserMessage = useSelector(state => state.search.reserMessage);
    const reserMessage1 = useSelector(state => state.search.reserMessage1);
    const [msgCheck, setMsgCheck] = useState(false);

    useEffect(() => {
        if (reserMessage !== '' && reserMessage1 !== '') {
            setMsgCheck(true);
    
            // 상태 초기화
            setReservationExist(false);
            setReservationNo(false);
    
            axios.post('http://localhost:9000/chatbot/searchReservation', {
                reserMessage1,
                reserMessage,
            })
                .then(res => {
                    console.log('dd', res.data.result);
    
                    if (res.data.result === 1) {
                        setReservationExist(true);
                    } else {
                        setReservationNo(true);
                    }
                })
                .catch(error => console.log(error));
        }
    }, [reserMessage, reserMessage1]);

    useEffect(() => {
        if (iknow && btnRef.current) {
            btnRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (idknow && btnRef.current) {
            btnRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [iknow, idknow]
    )
    return (
        <div className='reservation-all-box'>
            <div className='schedule-all-box'>
                <p>예약번호를 알고 계신가요?</p>
                <div ref={btnRef} className='reservation-button-box'>
                    <button onClick={() => { setIknow(true); setIdknow(false); setIknow1(true) }}>알고 있어요</button>
                    <button onClick={() => { setIdknow(true); setIknow(false); }}>아뇨, 몰라요</button>
                </div>
            </div>
            {iknow && //알고있어요 클릭시
                <div>
                    {iknow1 &&
                        <div>
                            <span>예약번호를 입력해 주세요!</span>
                        </div>
                    }
                    {reserMessage !== '' ?
                        <>
                            <div>
                                <span>{reserMessage}</span>
                            </div>
                            <div>
                                <span>홈페이지 아이디를 입력해 주세요!</span>
                            </div>
                        </> : ''
                    }
                    {reserMessage1 !== '' ?
                        <div>
                            <span>{reserMessage1}</span>
                        </div> : ''}
                    {reservationNo && reservationExist &&
                        <div className='조회놉'>
                            <p>입력하신 예약번호로는 예약 내역을 찾을수가 없습니다.
                                <br />
                                혹시 여행사를 통하여 항공권을 구매하셨다면,<br />
                                진에어 홈페이지에서 확인이 안되오니<br /> 고객서비스센터(1600-6200)로 전화 주시거나<br />
                                예약하신 여행사로 문의해 주시기 바랍니다!
                            </p>
                        </div>
                    }
                    {reservationExist &&
                        <div className='조회성공시'>
                            <div>
                                <li>
                                    <span>예약번호</span>
                                    <span></span>
                                </li>
                                <li>
                                    <span>성</span>
                                    <span></span>
                                </li>
                                <li>
                                    <span>이름</span>
                                    <span></span>
                                </li>
                                <li>
                                    <span>출발일</span>
                                    <span></span>
                                </li>
                            </div>
                        </div>
                    }

                </div>
            }
            {idknow && //몰라요 클릭시
                <div className='schedule-all-box'>
                    <p>
                        홈페이지 로그인 후 확인이 가능합니다.<br />
                        상세 예약내역을 조회 하시려면 아래 버튼을 클릭해주세요.
                    </p>
                    <div className='cheap-button-box'>
                        <button onClick={() => { navigate('/login') }}>예약조회 하러가기</button>
                    </div>
                </div>}
        </div>
    );
}

