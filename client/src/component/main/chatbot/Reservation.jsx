import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Reservation({message1,message3}) {
    const [iknow, setIknow] = useState(false);
    const [iknow1, setIknow1] = useState(false);
    const [idknow, setIdknow] = useState(false);
    const btnRef = useRef(null);
    const navigate = useNavigate();

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
                        </div>}
                    <div>
                        <span>{message1}</span>
                    </div>
                    {message1 !=='' ?
                    <div>
                        <span>홈페이지 아이디를 입력해 주세요!</span>
                    </div> : ''}
                    {message3 !== '' ?
                    <div>
                        <span>{message3}</span>
                    </div>: ''}
                    <div className='조회놉'>
                        <p>입력하신 예약번호로는 예약 내역을 찾을수가 없습니다.
                            <br />
                            혹시 여행사를 통하여 항공권을 구매하셨다면,<br />
                            진에어 홈페이지에서 확인이 안되오니<br /> 고객서비스센터(1600-6200)로 전화 주시거나<br />
                            예약하신 여행사로 문의해 주시기 바랍니다!
                        </p>
                    </div> 
                    <div className='조회성공시'>
                        <p>해당하는 조회 내역을 출력</p>
                        <div>
                            출발지 도착지 출발날짜 인원수 이런거 띄우면 될듯
                        </div>
                    </div>
                   
                </div>
            }
            {idknow && //몰라요 클릭시
                <div className='schedule-all-box'>
                    <div className='reservation-button2-box'>
                        <p>
                            홈페이지 로그인 후 확인이 가능합니다.<br />
                            상세 예약내역을 조회 하시려면 아래 버튼을 클릭해주세요.
                        </p>
                        // 온클릭시 로그인 페이지로 넘어가게
                        <button onClick={() => { navigate('/login') }}>예약조회 하러가기</button>
                    </div>
                </div>}
        </div>
    );
}

