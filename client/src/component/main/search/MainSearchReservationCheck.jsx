import React, { useState, useRef } from 'react';
import { FaCalendarCheck } from "react-icons/fa";
import MainSearchCalendar from './MainSearchCalendar.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { getCalendar } from '../../../service/searchApi.js';

export default function MainSearchReservationCheck() {
    const dispatch = useDispatch();
    const calendar = useSelector(state => state.search.calendar);

    const [startDate, setStartDate] = useState('');
    const [err, setErr] = useState({});

    const startCalendar = (data) => {
        setStartDate(data);
    }
    const endCalendar = (data) => {
        // setEndDate(data);
    }
    const refs = {
        rnumRef: useRef(null),
        lastNmRef: useRef(null),
        firstNmRef: useRef(null),
        departDayRef: useRef(null),
    }
    const rnumErr = useRef(null);
    const lastErr = useRef(null);
    const firstErr = useRef(null);
    const departErr = useRef(null);

    const validate = () => {
        if (refs.rnumRef.current.value === '') {
            setErr({ ...err, rnum: '예약번호를 입력해주세요.' });
            refs.rnumRef.current.focus();
            return false;
        }
        else if (refs.lastNmRef.current.value === '') {
            setErr({ ...err, lastNm: '예약 시 입력한 승객명을 입력해주세요.' })
            refs.lastNmRef.current.focus();
            return false;
        } else if (refs.firstNmRef.current.value === '') {
            setErr({ ...err, firstNm: '예약 시 입력한 승객명을 입력해주세요.' })
            refs.firstNmRef.current.focus();
            return false;
        } else if (refs.departDayRef.current.value === '') {
            setErr({ ...err, departDay: '출발일을 선택해주세요.' })
            refs.departDayRef.current.focus();
            return false;
        }
        return true;
    }

    const handleCheckIn = (e) => {
        e.preventDefault();
        if (validate()) {
            setErr('');
            alert('서버로 보내서 조회하기');
        }
    }
    return (
        <form onSubmit={handleCheckIn}>
            {calendar && <MainSearchCalendar startCalendar={startCalendar} endCalendar={endCalendar} />}
            <div className='main-top-search-bottom3'>
                <ul>
                    <li>
                        <label htmlFor="">진에어 예약번호</label>
                        <input type="text" name='rnum' ref={refs.rnumRef} placeholder='숫자와 영문으로 조합된 6자리' />
                        {err.rnum ? <p style={{ color: 'red' }} ref={rnumErr}>{err.rnum}</p> : <p>흠</p>}
                    </li>
                    <li>
                        <label htmlFor="">성(LAST NAME)</label>
                        <input type="text" name='lastNm' ref={refs.lastNmRef} />
                        {err.lastNm ? <p style={{ color: 'red' }} ref={lastErr}>{err.lastNm}</p> : <p>흠</p>}
                    </li>
                    <li>
                        <label htmlFor="">이름(FIRST NAME)</label>
                        <input type="text" name='firstNm' ref={refs.firstNmRef} />
                        {err.firstNm ? <p style={{ color: 'red' }} ref={firstErr}>{err.firstNm}</p> : <p>흠</p>}
                    </li>
                    <li>
                        <label htmlFor="">출발일</label>
                        <div>
                            <input type='textonly' name="departDay" ref={refs.departDayRef}
                                className='active-calendar-input' value={startDate} />
                            <FaCalendarCheck onClick={() => { dispatch(getCalendar(true)) }}
                                className='main-top-search-bottom3-icon' />
                        </div>
                        {err.departDay ? <p style={{ color: 'red' }} ref={departErr}>{err.departDay}</p> : <p>흠</p>}
                    </li>
                </ul>
                <div>
                    <ul>
                        <li>* 예약 시 입력한 승객명을 입력해주세요. (국내선 국문 예약은 국문 성/이름, 국제선은 영문 성/이름)</li>
                        <li>* 공동운항 승객께서는 여기를 클릭하여 주세요.</li>
                    </ul>
                    <button type='submit'>조회</button>
                </div>
            </div>
        </form>
    );
}

