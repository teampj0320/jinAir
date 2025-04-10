import React, { useState } from 'react';
import { IoAirplane } from "react-icons/io5";

export default function Airplane() {
    const [country, setCountry] = useState(false);
    const [countryClick, setCountryClick] = useState(false);
    const [airNum, setAirNum] = useState(false);
    const [airNumClick, setAirNumClick] = useState(false);

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

    return (
        <div className='airplane-all-box'>
            <div className='schedule-all-box'>
                <p>출도착조회를 선택하셨습니다. 조회하실 방법을 선택해주세요.</p>
                <div>
                    <button onClick={() => { setAirNum(true) }}>편명으로 조회</button>
                    <button onClick={() => { setCountry(true) }}>출도착지로 조회</button>
                </div>
            </div>
            {airNum &&
                <div className='schedule-all-box'>
                    <div>
                        <p>진에어 항공편의 출도착 조회를 도와드릴게요~</p>
                        <p>편명과 날짜를 입력해주세요!</p>
                    </div>
                    <div className='schedule-calendar-check-box'>
                        <span>편명</span>
                        <input type="text" placeholder='LJ001 형식으로 입력해주세요' />
                    </div>
                    <div className='schedule-calendar-check-box'>
                        <span>가는날</span>
                        <input type="date" />
                    </div>
                    <div>
                        <button onClick={() => { setAirNumClick(true) }}>확인</button>
                    </div>
                </div>
            }
            {airNumClick &&
                <div className='airplane-airNumClick'>
                    <div className='schedule-all-box'>
                        <p>[출발일:2025-04-10, 편명:LLJ231] <br />출도착 정보를 조회하였습니다.</p>
                        <div className='schedule-exist-top'>
                            <span>서울/인천(ICN)</span>
                            <IoAirplane className='schedule-exist-top-icon' />
                            <span>서울/인천(ICN)</span>
                        </div>
                        <table>
                            <tr>
                                <td>스케줄 10:30</td>
                                <td>예상 시각 11:30</td>
                            </tr>
                            <tr>
                                <td>스케줄 10:30</td>
                                <td>예상 시각 11:30</td>
                            </tr>
                        </table>
                        <div>
                            <button>출도착지 바꾸기</button>
                        </div>
                    </div>
                </div>
            }
            {country &&
                <div className='schedule-all-box'>
                    <div className='schedule-top-box'>
                        <p>진에어 항공편의 스케줄 조회를 도와드릴게요~</p>
                        <p>출발지, 도착지와 가는날을 선택해주세요!</p>
                    </div>
                    <div className='schedule-country-check-box'>
                        <span>출발/도착</span>
                        <select name="" id="">
                            {processedList.map((data) => (
                                <option value="">{data}</option>
                            ))}
                        </select>
                        <select name="" id="">
                            {processedList.map((data) => (
                                <option value="">{data}</option>
                            ))}
                        </select>
                    </div>
                    <div className='schedule-calendar-check-box'>
                        <span>가는날</span>
                        <input type="date" />
                    </div>
                    <div className='schedule-button-box'>
                        <button onClick={() => { setCountryClick(true) }}>확인</button>
                    </div>
                </div>
            }
            {countryClick &&
                <>
                    <div className='schedule-all-box'>
                        <div className='schedule-exist-box'>
                            <p>[출발일:2025-04-12, 출발지:ICN, 도착지:BKK] <br />스케줄 정보를 조회하였습니다.</p>
                            <div className='schedule-exist-top'>
                                <span>서울/인천(icd)</span>
                                <IoAirplane className='schedule-exist-top-icon' />
                                <span>오사카(icd)</span>
                            </div>
                            <table>
                                <tr>
                                    <td>편명</td>
                                    <td>출발</td>
                                    <td>도착</td>
                                </tr>
                                <tr>
                                    <td>LJ231</td>
                                    <td>01:20</td>
                                    <td>02:20</td>
                                </tr>
                            </table>
                            <div>화면에 표시되는 시각은 현지 시각 기준입니다.</div>
                            <div>
                                <button>예약하기</button>
                                <button>출도착지 바꾸기</button>
                            </div>
                            {/* 여기서 예약하기 누르면 그냥 메인페이지로 넘어감 ( 이거 좀 바꿀필요가잇다고 생각)
                                        // 출도착지 변경은 걍 두개 변경해주면댐*/}
                        </div>
                    </div>
                    <div className='schedule-all-box'>
                        {!countryClick &&
                            <div className='schedule-none-exist-box'>
                                <p>[출발일:2025-04-13, 출발지:ICN, 도착지:BKK] <br />일치하는 스케줄 정보가 없습니다.</p>
                            </div>
                        }
                    </div>
                </>}
        </div>
    );
}

