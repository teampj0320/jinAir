import React from 'react';
import { IoMdClose } from "react-icons/io";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import MultiCalendar from './MultiCalendar.jsx';

export default function MultiSearchCalendar({setCalendar2,startCalendar2}) {

    const startMom = (data) => {
        startCalendar2(data);
        
    }
     return (
            <div className='main-search-modal-content'>
                <div className='main-search-calendar-all'>
                    <div>
                        <div>
                            <span>일정 선택</span>
                            <IoMdClose onClick={() => {setCalendar2(false) }}/>
                        </div>
                        <span><AiOutlineExclamationCircle className='main-search-calendar-icon'/>
                        <span>유류할증료, 세금 포함한 편도 총액운임이며, 조회 시점에 따라 요금은 상이 할 수 있습니다.</span>
                        </span>
                    </div>
                    <div>
                        <MultiCalendar mom ={startMom}/>
                    </div>
                    <span>통화 :KRW</span>
                </div>
            </div>
        );
}

