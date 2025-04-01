import React, { useRef, useState } from 'react';

export default function MainSearchCheckIn() {
    const [err, setErr] = useState({});

    const refs = {
        rnumRef: useRef(null),
        lastNmRef: useRef(null),
        firstNmRef: useRef(null),
        departDayRef: useRef(null),
    }
    const validate = () => {
        if (refs.rnumRef.current.value === '') {
            setErr({ ...err, rnum: '예약번호를 입력해주세요.' })
            refs.rnumRef.current.focus();
            return false;
        } 
        // else if(refs.rnumRef.current.value !== ''){
        //     setErr({ ...err, rnum: '' })
        //     refs.lastNmRef.current.focus();
        //     return false;
        // }
        else if (refs.lastNmRef.current.value === '') {
            setErr({ ...err, lastNm: '예약 시 입력한 승객명을 입력해주세요.' })
            refs.lastNmRef.current.focus();
            return false;
        } else if (refs.firstNmRef.current.value === '') {
            setErr({ ...err, firstNm: '예약 시 입력한 승객명을 입력해주세요.' })
            refs.firstNmRef.current.focus();
            return false;
        } else if (refs.departDayRef.current.value === 'default') {
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
            <div className='main-top-search-bottom2'>
                <ul>
                    <li>
                        <label htmlFor="">진에어 예약번호</label>
                        <input type="text" name='rnum' ref={refs.rnumRef} placeholder='숫자와 영문으로 조합된 6자리' />
                    </li>
                    <li>
                        <label htmlFor="">성(LAST NAME)</label>
                        <input type="text" name='lastNm' ref={refs.lastNmRef} />
                    </li>
                    <li>
                        <label htmlFor="">이름(FIRST NAME)</label>
                        <input type="text" name='firstNm' ref={refs.firstNmRef} />
                    </li>
                    <li>
                        <label htmlFor="">출발일</label>
                        <select name="departDay" ref={refs.departDayRef}>
                            <option value="default">선택</option>
                            <option value="">당일날짜</option>
                            <option value="">내일</option>
                            <option value="">모레</option>
                        </select>
                    </li>
                </ul>
                <div>
                    <p>{err.rnum}</p>
                    <p>{err.lastNm}</p>
                    <p>{err.firstNm}</p>
                    <p>{err.departDay}</p>
                </div>
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

