import React from 'react';
import { FaCalendarCheck } from "react-icons/fa";

export default function MainSearchReservationCheck() {
    return (
        <div className='main-top-search-bottom3'>
            <ul>
                <li>
                    <label htmlFor="">진에어 예약번호</label>
                    <input type="text" placeholder='숫자와 영문으로 조합된 6자리' />
                </li>
                <li>
                    <label htmlFor="">성(LAST NAME)</label>
                    <input type="text" />
                </li>
                <li>
                    <label htmlFor="">이름(FIRST NAME)</label>
                    <input type="text" />
                </li>
                <li>
                    <label htmlFor="">출발일</label>
                    <div>
                        <FaCalendarCheck className='main-top-search-bottom3-icon' />
                    </div>
                </li>
            </ul>
            <div>
                <ul>
                    <li>* 예약 시 입력한 승객명을 입력해주세요. (국내선 국문 예약은 국문 성/이름, 국제선은 영문 성/이름)</li>
                    <li>* 공동운항 승객께서는 여기를 클릭하여 주세요.</li>
                </ul>
                <button>조회</button>
            </div>
        </div>
    );
}

