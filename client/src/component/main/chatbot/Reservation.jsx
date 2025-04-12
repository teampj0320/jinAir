import React, { useState } from 'react';

export default function Reservation() {
    const [iknow, setIknow] = useState(false);
    const [idknow, setIdknow] = useState(false);

    return (
        <div className='reservation-all-box'>
            <div className='schedule-all-box'>
                <p>예약번호를 알고 계신가요?</p>
                <div className='reservation-button-box'>
                    <button onClick={() => { setIknow(true) }}>알고 있어요</button>
                    <button onClick={() => { setIdknow(true) }}>아뇨, 몰라요</button>
                </div>
            </div>
            {iknow && //알고있어요 클릭시
                <>
                    <p>챗봇: 예약번호를 입력해 주세요! :)</p>
                    <p>나 : ~~</p>
                    <p>챗봇 : 홈페이지 아이디를 입력해 주세요! :)</p>
                    <p>나: ~`</p>
                    <p>챗봇 : 입력하신 예약번호로는 예약 내역을 찾을수가 없습니다
                        <br />
                        혹시 여행사를 통하여 항공권을 구매하셨다면,<br />
                        진에어 홈페이지에서 확인이 안되오니 고객서비스센터(1600-6200)로 전화 주시거나<br />
                        예약하신 여행사로 문의해 주시기 바랍니다!
                    </p>
                </>
            }
            {idknow && //몰라요 클릭시
                <div className='schedule-all-box'>
                    <div className='reservation-button2-box'>
                        <p>
                        홈페이지 로그인 후 확인이 가능합니다.<br />
                        상세 예약내역을 조회 하시려면 아래 버튼을 클릭해주세요.
                        </p>
                        // 온클릭시 로그인 페이지로 넘어가게
                        <button>예약조회 하러가기</button>
                    </div>
                </div>}
        </div>
    );
}

