import React, { useState, useRef, useEffect } from 'react';
import { IoAirplane } from "react-icons/io5";

export default function Cheap() {
    const [dateSelect, setDateSelect] = useState(false);
    const [period, setPeriod] = useState(false);
    const [oneway, setOneway] = useState(false);
    const [roundtrip, setRoundtrip] = useState(false);
    const [onewayClick, setOnewayClick] = useState(false);
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [date, setDate] = useState('');
    const [peopleClick, setPeopleClick] = useState(false);
    const [onewayScheduleClick, setOneWayScheduleClick] = useState();

    const data = [
        '서울/인천(ICN)',
        '서울/김포(GMP)',
        '부산(PUS)',
        '제주(CJU)',
        '광주(KWJ)',
        '군산(KUV)',
        '대구(TAE)',
        '무안(MWX)',
        '사천(HIN)',
        '울산(USN)',
        '원주(WJU)',
        '여수(RSU)',
        '청주(CJJ)',
        '포항/경주(KPO)',
        '도쿄/나리타(NRT)',
        '오사카/간사이(KIX)',
        '후쿠오카(FUK)',
        '기타큐슈(KKJ)',
        '나고야(NGO)',
        '다카마쓰(TAK)',
        '미야코지마/시모지시마(SHI)',
        '이시가키지마(ISG)',
        '삿포로(CTS)',
        '오키나와(OKA)',
        '상하이/푸둥(PVG)',
        '시안(XIY)',
        '정저우(CGO)',
        '홍콩(HKG)',
        '마카오(MFM)',
        '타이베이/타오위안(TPE)',
        '타이중(RMQ)',
        '방콕(BKK)',
        '푸껫(HKT)',
        '치앙마이(CNX)',
        '세부(CEB)',
        '클락(CRK)',
        '보홀(TAG)',
        '다낭(DAD)',
        '나트랑(CXR)',
        '푸꾸옥(PQC)',
        '비엔티안(VTE)',
        '코타키나발루(BKI)',
        '괌(GUM)',
        '울란바토르(UBN)'
    ];
    const processedList = data.map(item => item.split("(")[0]);
    const startRef = useRef(null);
    const endRef = useRef(null);
    const dateRef = useRef(null);

    const handleStart = () => {
        setStart(startRef.current.value);
    }
    const handleEnd = () => {
        setEnd(endRef.current.value);
    }
    const handleDate = (e) => {
        setDate(e.target.value);
    }
    const validate = () => {
        if (start === '') {
            startRef.current.focus();
            return false;
        } else if (end === '') {
            endRef.current.focus();
            return false;
        } else if (date === '') {
            dateRef.current.focus();
            return false;
        }
        return true;
    }

    const ScheduleCheck = () => {
        if (validate()) {
            setOnewayClick(true);
        }
    }
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <div className='cheap-all-box'>
            <div>
                <p>최저가조회를 선택하셨습니다!<br />아래에서 검색방법을 선택해 주세요!</p>
                <div className='schedule-button-box'>
                    <button onClick={() => { setDateSelect(true) }}>날짜지정조회</button>
                    <button onClick={() => { setPeriod(true) }}>기간지정조회</button>
                </div>
            </div>
            {period &&
                <div className='schedule-all-box'>
                    <p>항공권 구매를 선택하셨습니다!<br />아래에서 ‘편도’, '왕복’중 여정을 선택해주세요 ^^</p>
                    <div>
                        <button onClick={() => { setOneway(true) }}>편도</button>
                        <button onClick={() => { setRoundtrip(true) }}>왕복</button>
                    </div>
                </div>
            }
            {dateSelect && //날짜지정조회 클릭시
                <>
                    <div>
                        <p>항공권 구매를 선택하셨습니다!<br />아래에서 여정을 선택해주세요 ^^</p>
                        <div className='cheap-button-box'>
                            <button onClick={() => { setOneway(true) }}>편도</button>
                            <button onClick={() => { setRoundtrip(true) }}>왕복</button>
                        </div>
                    </div>
                    {roundtrip &&  //왕복클릭시
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
                                <div className='schedule-country-check-box'>
                                    <span>출발/도착</span>
                                    <select ref={startRef} name="" id="" onChange={handleStart}>
                                        <option value='default'>선택</option>
                                        {processedList.map((data) => (
                                            <option value={data}>{data}</option>
                                        ))}
                                    </select>
                                    <select ref={endRef} name="" id="" onChange={handleEnd}>
                                        <option value='default'>선택</option>
                                        {processedList.map((data) => (
                                            <option value={data}>{data}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className='schedule-calendar-check-box'>
                                    <span>가는날</span>
                                    <input ref={dateRef} type="date" onChange={handleDate} />
                                </div>
                                <div className='cheap-button-box'>
                                    <button onClick={() => { ScheduleCheck() }}>확인</button>
                                </div>
                            </div>
                            {onewayClick && //확인클릭시
                                <div className='schedule-all-box'>
                                    <p>예약 인원을 선택해 주세요</p>
                                    <ul>
                                        <li>
                                            <label htmlFor="">성인</label>
                                            <select name="" id="">
                                                <option value="">선택</option>
                                                {list.map((num) => (
                                                    <option value="">{num}</option>
                                                ))}
                                            </select>
                                        </li>
                                        <li>
                                            <label htmlFor="">어린이</label>
                                            <select name="" id="">
                                                <option value="">선택</option>
                                                {list.map((num) => (
                                                    <option value="">{num}</option>
                                                ))}
                                            </select>
                                        </li>
                                        <li>
                                            <label htmlFor="">유아</label>
                                            <select name="" id="">
                                                <option value="">선택</option>
                                                {list.map((num) => (
                                                    <option value="">{num}</option>
                                                ))}
                                            </select>
                                        </li>
                                    </ul>
                                    <div className='cheap-button-box'>
                                        <button onClick={() => { setPeopleClick(true) }}>확인</button>
                                    </div>
                                </div>}
                            {peopleClick &&//확인 클릭시
                                <div className='schedule-all-box'>
                                    <ul>
                                        <li>▣가는 항공편</li>
                                        <li>◈경로 : {start} => {end}</li>
                                        <li>◈출발일 : {date}</li>
                                        <li>▣탑승인원</li>
                                        <li>⊙성인 : 1명</li>
                                        <li>⊙소아 : 0명</li>
                                        <li>⊙유아 : 0명</li>
                                    </ul>
                                    <p>입력하신 정보가 맞는지 확인 해주세요~
                                        <br />잘못 입력하셨다면 처음으로 돌아갑니다.
                                    </p>
                                    <div className='cheap-button-box'>
                                        <button onClick={() => { setOneWayScheduleClick(true) }}>예</button>
                                        <button onClick={() => { setOneWayScheduleClick(false) }}>아니오</button>
                                        <button>출도착지 바꾸기</button>
                                    </div>
                                </div>}
                            {onewayScheduleClick && //예 클릭시
                                <div className='schedule-all-box'>
                                    <div>
                                        <span>출발일 : <span>{date}</span></span>
                                    </div>
                                    <div>
                                        <span>{start}ddd</span>
                                        <IoAirplane className='cheap-icon' />
                                        <span>{end}ddd</span>
                                    </div>
                                    <div>성인 1명, 소아0명, 유아0명</div>
                                    <div className='cheap-reservation'>
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
                                            //여기도 예약하기 누르면 걍 메인화면으로 넘어감 
                                            <button>예약하기</button>
                                        </div>
                                    </div>
                                    <p>*상기 운임은 참고사항으로, 공항 사정이나 일정에 따라 수시로 변동 될 수 있습니다.</p>
                                    <div className='cheap-cheap-month'>
                                        <h5>4월 최저가</h5>
                                        <div className='cheap-cheap-month-middle'>
                                            <div>
                                                <ul>
                                                    <li>4월 16일</li>
                                                    <li>성인 1명 기준</li>
                                                    <li>144.333원</li>
                                                    <li>(항공운임, 유류할증료, 세금 포함 금액)</li>
                                                </ul>
                                            </div>
                                            //여기도 예약하기 누르면 걍 메인화면으로 넘어감 
                                            <div><button>예약하기</button></div>
                                        </div>
                                    </div>
                                    <div>
                                        <p>월별 최저가 운임은 성인 1인 기준으로, 여러 좌석 예매를 진행 하실 경우
                                            <br/> 남은 좌석에 따라 운임이 변동 될 수 있습니다. 또한 동일한 운임이 있을 경우
                                            <br/> 가장 가까운 날짜를 알려드립니다.</p>
                                    </div>
                                </div>}
                        </>}
                </>}
        </div>
    );
}

