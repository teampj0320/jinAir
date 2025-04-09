import React, { useState } from 'react';

export default function Cheap() {
    const [dateSelect, setDateSelect] = useState(false);
    const [period, setPeriod] = useState(false);
    const [oneway, setOneway] = useState(false);
    const [roundtrip,setRoundtrip] = useState(false);
    return (
        <div>
            <div className='schedule-all-box'>
                <p>최저가조회를 선택하셨습니다!<br />아래에서 검색방법을 선택해 주세요!</p>
                <div>
                    <button onClick={()=>{setDateSelect(true)}}>날짜지정조회</button>
                    <button onClick={()=>{setPeriod(true)}}>기간지정조회</button>
                </div>
            </div>
            {period&&
                <div className='schedule-all-box'>
                <p>항공권 구매를 선택하셨습니다!<br />아래에서 ‘편도’, '왕복’중 여정을 선택해주세요 ^^</p>
                <div>
                    <button onClick={()=>{setOneway(true)}}>편도</button>
                    <button onClick={()=>{setRoundtrip(true)}}>왕복</button>
                </div>
            </div>
            }
            {dateSelect && //날짜지정조회 클릭시
            <>
            <div className='schedule-all-box'>
                <p>항공권 구매를 선택하셨습니다!<br />아래에서 ‘편도’, '왕복’중 여정을 선택해주세요 ^^</p>
                <div>
                    <button onClick={()=>{setOneway(true)}}>편도</button>
                    <button onClick={()=>{setRoundtrip(true)}}>왕복</button>
                </div>
            </div>
             { roundtrip &&  //왕복클릭시
             <>
            <div className='schedule-all-box'>
                <p>츨/도착지와 날짜를 선택해주세요!</p>
                <div>
                    <span>출발/도착</span>
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </div>
                <div>
                    <span>가는날</span>
                    <input type="date" />
                </div>
                <div>
                    <span>오는날</span>
                    <input type="date" />
                </div>
                <div>
                    <button>확인</button>
                </div>
            </div>
                    //확인클릭시
            <div>
                <p>예약 인원을 선택해 주세요</p>
                <ul>
                    <li>
                        <label htmlFor="">성인</label>
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                    </li>
                    <li>
                        <label htmlFor="">어린이</label>
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                    </li>
                    <li>
                        <label htmlFor="">유아</label>
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                    </li>
                </ul>
                <div>
                    <button>확인</button>
                </div>
            </div>
                        //확인 클릭시
            <div className='schedule-all-box'>
                <ul>
                    <li>▣가는 항공편</li>
                    <li>◈경로 : 서울/인천(ICN) => 후쿠오카(FUK)</li>
                    <li>◈출발일 : 2025-04-13</li>
                    <li>▣오는 항공편</li>
                    <li>◈경로 : 후쿠오카(FUK) => 서울/인천(ICN)</li>
                    <li>◈출발일 : 2025-04-17</li>
                    <li>▣탑승인원</li>
                    <li>⊙성인 : 1명</li>
                    <li>⊙소아 : 0명</li>
                    <li>⊙유아 : 0명</li>
                </ul>
                <p>입력하신 정보가 맞는지 확인 해주세요~
                    <br />잘못 입력하셨다면 처음으로 돌아갑니다.
                </p>
                <div>
                    <button>예</button>
                    <button>아니오</button>
                    <button>출도착지 바꾸기</button>
                </div>
            </div>
                            //예 클릭시
            <div className='schedule-all-box'>
                <div>
                    <span>가는날 : 2025년 4월 13일</span>
                    <span>오는날 : 2025년 4월 17일</span>
                </div>
                <div>
                    <span>서울/인천(ICN)</span>
                    <span>뱅기아이콘</span>
                    <span>서울/인천(ICN)</span>
                </div>
                <div>성인 1명, 소아0명, 유아0명</div>
                <div>
                    <div>
                        <ul>
                            <li>
                                <span>항공운임</span>
                                <span>65,500 원</span>
                            </li>
                            <li>
                                <span>유류할증료 + 세금</span>
                                <span>65,500 원</span>
                            </li>
                            <li>
                                <span>총 금액</span>
                                <span>65,500 원</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button>예약하기</button>
                    </div>
                </div>
                <p>*상기 운임은 참고사항으로, 공항 사정이나 일정에 따라 수시로 변동 될 수 있습니다.</p>
                <div>
                    <h5>4월 최저가</h5>
                    <div>
                        <div>
                            <ul>
                                <li>4월 16일 ~ 4월 23일</li>
                                <li>성인 1명 기준</li>
                                <li>144.333원</li>
                                <li>(항공운임, 유류할증료, 세금 포함 금액)</li>
                            </ul>
                        </div>
                        <div><button>예약하기</button></div>
                        <div>
                            <p>월별 최저가 운임은 성인 1인 기준으로, 여러 좌석 예매를 진행 하실 경우 남은 좌석에 따라 운임이 변동 될 수 있습니다. 또한 동일한 운임이 있을 경우 가장 가까운 날짜를 알려드립니다.</p>
                        </div>
                    </div>
                </div>
            </div>
                            //아니오 클릭시
            //출도착지 바꾸기 클릭시
            </>
            }
            {oneway &&//편도클릭시
            <>
            <div className='schedule-all-box'>
                <p>츨/도착지와 날짜를 선택해주세요!</p>
                <div>
                    <span>출발/도착</span>
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                </div>
                <div>
                    <span>가는날</span>
                    <input type="date" />
                </div>
                <div>
                    <button>확인</button>
                </div>
            </div>
                //확인클릭시
            <div>
                <p>예약 인원을 선택해 주세요</p>
                <ul>
                    <li>
                        <label htmlFor="">성인</label>
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                    </li>
                    <li>
                        <label htmlFor="">어린이</label>
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                    </li>
                    <li>
                        <label htmlFor="">유아</label>
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                    </li>
                </ul>
                <div>
                    <button>확인</button>
                </div>
            </div>
                //확인 클릭시
            <div className='schedule-all-box'>
                <ul>
                    <li>▣가는 항공편</li>
                    <li>◈경로 : 서울/인천(ICN) => 후쿠오카(FUK)</li>
                    <li>◈출발일 : 2025-04-13</li>
                    <li>▣탑승인원</li>
                    <li>⊙성인 : 1명</li>
                    <li>⊙소아 : 0명</li>
                    <li>⊙유아 : 0명</li>
                </ul>
                <p>입력하신 정보가 맞는지 확인 해주세요~
                    <br />잘못 입력하셨다면 처음으로 돌아갑니다.
                </p>
                <div>
                    <button>예</button>
                    <button>아니오</button>
                    <button>출도착지 바꾸기</button>
                </div>
            </div>
                //예 클릭시
                <div className='schedule-all-box'>
                    <div>
                        <span>출발일 : 2025년 4월 13일</span>
                    </div>
                    <div>
                        <span>서울/인천(ICN)</span>
                        <span>뱅기아이콘</span>
                        <span>서울/인천(ICN)</span>
                    </div>
                    <div>성인 1명, 소아0명, 유아0명</div>
                    <div>
                        <div>
                            <ul>
                                <li>
                                    <span>항공운임</span>
                                    <span>65,500 원</span>
                                </li>
                                <li>
                                    <span>유류할증료 + 세금</span>
                                    <span>65,500 원</span>
                                </li>
                                <li>
                                    <span>총 금액</span>
                                    <span>65,500 원</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button>예약하기</button>
                        </div>
                    </div>
                    <p>*상기 운임은 참고사항으로, 공항 사정이나 일정에 따라 수시로 변동 될 수 있습니다.</p>
                    <div>
                        <h5>4월 최저가</h5>
                        <div>
                            <div>
                                <ul>
                                    <li>4월 16일 ~ 4월 23일</li>
                                    <li>성인 1명 기준</li>
                                    <li>144.333원</li>
                                    <li>(항공운임, 유류할증료, 세금 포함 금액)</li>
                                </ul>
                            </div>
                            <div><button>예약하기</button></div>
                            <div>
                                <p>월별 최저가 운임은 성인 1인 기준으로, 여러 좌석 예매를 진행 하실 경우 남은 좌석에 따라 운임이 변동 될 수 있습니다. 또한 동일한 운임이 있을 경우 가장 가까운 날짜를 알려드립니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
                </>}
                </>}
        </div>
    );
}

