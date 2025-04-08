import React from 'react';

export default function Airplane() {
    return (
        <div>
            <p>출도착조회를 선택하셨습니다! 조회하실 방법을 선택해주세요!</p>
            <button>편명으로 조회</button>
            <button>출도착지로 조회</button>
            //편명으로 조회 클릭시
            <div>
                <p>진에어 항공편의 출도착 조회를 도와드릴게요~</p>
                <p>편명과 날짜를 입력해주세요!</p>
                <div>
                    <span>편명</span>
                    <input type="text" placeholder='LJ001 형식으로 입력해주세요' />
                </div>
                <div>
                    <span>가는날</span>
                    캘린더
                </div>
            </div>
            //출도착지로 조회 선택시
            <div>
                <p>진에어 항공편의 스케줄 조회를 도와드릴게요~</p>
                <p>출발지, 도착지와 가는날을 선택해주세요!</p>
                <div>
                    <span>출발/도착</span>
                    <select name="" id="">
                        <option value="">
                        </option>
                    </select>
                    <select name="" id="">
                        <option value="">
                        </option>
                    </select>
                </div>
                <div>
                    <span>가는날</span>
                    캘린더
                </div>
                <button>확인</button>                
            </div>
            //확인 클릭시 
            <div>
                [출발일:2025-04-12, 출발지:ICN, 도착지:BKK] 스케줄 정보를 조회 중입니다.
                잠시만 기다려 주세요~!!
            </div>
            <div>
                <h5>비행기번호?</h5>
                <div>
                    <ul>
                        <li>출발지<span>출발시간</span></li>
                        <li>비행기아이콘<span>비행시간</span></li>
                        <li>도착지<span>도착시간</span></li>
                    </ul>
                    <p>*화면에 표시되는 시각은 현지 시각 기준입니다.</p>
                </div>
                <button>출도착지 바꾸기</button>
                // 출도착지 변경은 걍 두개 변경해주면댐
            </div>
        </div>
    );
}

