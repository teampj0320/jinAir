import React, { useRef, useState,useEffect } from 'react';
import { IoAirplane } from "react-icons/io5";

export default function Schedule() {
    const [click, setClick] = useState(false);
    const [scheduleExist, setScheduleExist] = useState(false);
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [date, setDate] = useState('');
    const resultRef = useRef(null); // 👈 결과 영역 참조용
    useEffect(() => {
        if (click && resultRef.current) {
            resultRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [click]);

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
    
    const changeCountry = () =>{
        setStart(end);
        setEnd(start);
    }
    const handleDate = (e) => {
        setDate(e.target.value);        
    }
    const validate = () => {
        if(start === ''){
            startRef.current.focus();
            return false;
        }else if(end === ''){
            endRef.current.focus();
            return false;
        }else if(date === ''){
            dateRef.current.focus();
            return false;
        }
        return true;
    }

    const ScheduleCheck = () => {
        if(validate()){
            setClick(true); 
        }
    }

    return (
        <>
            <div className='schedule-all-box' ref={resultRef}>
                <div className='schedule-top-box'>
                    <p>진에어 항공편의 스케줄 조회를 도와드릴게요~</p>
                    <p>출발지, 도착지와 가는날을 선택해주세요!</p>
                </div>
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
                <div className='schedule-button-box'>
                    <button onClick={() => { ScheduleCheck()}}>확인</button>
                </div>
            </div>
            <div className='schedule-all-box'>
                {click && // 스케줄정보 있을때
                    <>
                        <div className='schedule-exist-box'>
                            <p>[출발일:{date}, 출발지:ICN, 도착지:BKK] <br />스케줄 정보를 조회하였습니다.</p>
                            <table>
                                <tr>
                                    <td>{start}</td>
                                    <td><IoAirplane className='schedule-exist-top-icon' /></td>
                                    <td>{end}</td>
                                </tr>
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
                                <button onClick={changeCountry}>출도착지 바꾸기</button>
                            </div>
            {/* 여기서 예약하기 누르면 그냥 메인페이지로 넘어감 ( 이거 좀 바꿀필요가잇다고 생각)
                    */}
                        </div>
                    </>
                }
            </div>
            <div className='schedule-all-box'>
                {!scheduleExist && !click &&
                    <div className='schedule-none-exist-box'>
                        <p>[출발일:2025-04-13, 출발지:ICN, 도착지:BKK] <br/>일치하는 스케줄 정보가 없습니다.</p>
                    </div>
                }
            </div>
        </>
    );
}

