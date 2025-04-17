import React, { useRef, useEffect } from 'react';
import { TbArrowsExchange } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import { getModalOpen, getCalendar3, getStartDate, getType, getDeparture, getArrive} from '../../service/searchApi.js';
import MainSearchCountryModal from '../main/search/MainSearchCountryModal.jsx';
import OnewaySearchCalendar from '../main/search/OnewaySearchCalendar.jsx';
import {useNavigate} from 'react-router-dom';
import '../../scss/haon.scss';

export default function AdminFlightAdd() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const departure = useSelector(state => state.search.departure);
  const arrive = useSelector(state => state.search.arrive);
  const startDate = useSelector(state => state.search.startDate);
  const modalOpen = useSelector(state => state.search.modalOpen);
  const calendar3 = useSelector(state => state.search.calendar3);  // 편도
  const type = useSelector(state => state.search.type);
  const depart = useRef(null);
  const arr = useRef(null);
  const date = useRef(null);
  const mom = (item) => {
    type === 'y' && dispatch(getDeparture(item));
    type === 'n' && dispatch(getArrive(item));
  };
  const exchangeCountry = () => {
      dispatch(getDeparture(arrive));
      dispatch(getArrive(departure));
  }

  const startCalendar = (data) => {
      dispatch(getStartDate(data));
  }

   useEffect(() => {
      departure !== '' && depart.current.style.setProperty('border', 'none');
      departure !== '' && depart.current.style.setProperty('border-bottom', '1px solid var(--color-153)');
      arrive !== '' && arr.current.style.setProperty('border', 'none');
      arrive !== '' && arr.current.style.setProperty('border-bottom', '1px solid var(--color-153)');
      startDate !== '' && date.current.style.setProperty('border', 'none');
      startDate !== '' && date.current.style.setProperty('border-bottom', '1px solid var(--color-153)');
  }, [departure, arrive, startDate])

  const handleChange = (e) =>{
    // (e.target.value !== 'default')
  };
  
  const handleSubmit = () =>{

  };

  return (
    <div className='admin-airlist-content'>
      <form onSubmit={handleSubmit}>
        <div className='admin-airlist-top'>
          <div className='admin-airlist-title'>
            항공권 등록
          </div>
        </div>
        <div className='admin-add-air'>
          {modalOpen && (<MainSearchCountryModal mom={mom} departure={departure}/> )}
          {calendar3 && <OnewaySearchCalendar startCalendar={startCalendar} />}
          <div className='main-top-search-bottom-main-middle2 add-contry contry-check'>
              <div onClick={() => { dispatch(getModalOpen(true)); dispatch(getType('y')) }} ref={depart}>
                  <h5>출발지 선택</h5>
                  <div>
                      {departure === '' ? <h3>출발</h3>
                          : <h3 className='active-departure-country'>{departure}</h3>}
                      <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                  </div>
              </div>
              <TbArrowsExchange className='main-top-search-bottom-main-middle-icon2'
                  onClick={exchangeCountry} />&nbsp;&nbsp;
              <div onClick={() => { dispatch(getModalOpen(true)); dispatch(getType('n')) }} ref={arr}>
                  <h5>도착지 선택</h5>
                  <div>
                      {arrive === '' ? <h3>도착</h3>
                          : <h3 className='active-arrive-country'>{arrive}</h3>}
                      <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                  </div>
              </div>
            </div>
            <div className='main-top-search-bottom-main-middle2 add-contry check-time'>              
              <div ref={date}>
                <h5>출발 일정 선택</h5>
                <div onClick={() => { dispatch(getCalendar3(true))}}>
                    <span>
                        <FaCalendarCheck />
                        {startDate !== '' ? <h3 className='active-calendar-date'>{startDate}</h3>
                            : <h3>출발일자</h3>}
                    </span>
                    <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                </div>
              </div>
              <div ref={date}>
                <h5>시간 선택</h5>
                <div onClick={() => { dispatch(getCalendar3(true))}}>
                    <span>
                      <IoTimeSharp />
                        {startDate !== '' ? <h3 className='active-calendar-date'>{startDate}</h3>
                            : <h3>출발시간</h3>}
                    </span>
                    <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                </div>
              </div>  
              <div ref={date}>
                <h5>도착 일정 선택</h5>
                <div onClick={() => { dispatch(getCalendar3(true))}}>
                    <span>
                        <FaCalendarCheck />
                        {startDate !== '' ? <h3 className='active-calendar-date'>{startDate}</h3>
                            : <h3>도착일자</h3>}
                    </span>
                    <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
                </div>
            </div>
            <div ref={date}>
              <h5>시간 선택</h5>
              <div onClick={() => { dispatch(getCalendar3(true))}}>
                  <span>
                    <IoTimeSharp />
                      {startDate !== '' ? <h3 className='active-calendar-date'>{startDate}</h3>
                          : <h3>도착시간</h3>}
                  </span>
                  <IoIosArrowDown className='main-top-search-bottom-main-middle-icon' />
              </div>
            </div>  
          </div>
          
          <div className='add-flight-info'>
            <div className='add-info'>
              <div className='add-input-wrapper'>
                <span className="prefix-label">비행 번호</span>
                <input type="text" className='add-fnum' readOnly placeholder='fnum'/>
              </div>
              <div className='add-input-wrapper'>
                <span className="prefix-label">비행기번호</span>
                <select className='add-fnum' onChange={handleChange}>
                  <option value="default">선택</option>
                  <option value="B737-800">B737-800</option>
                  <option value="B737-900">B737-900</option>
                </select>
              </div>
            </div>
            
            <div className='add-info1'>
              <div className='add-input-wrapper'>
                <span className="prefix-label">토탈승객</span>
                <input type="text" className='add-fnum1' readOnly placeholder='188 좌석'/>
              </div>
              <div className='add-input-wrapper'>
                <span className="prefix-label">Basic Seat</span>
                <input type="text" className='add-fnum1' readOnly placeholder='180 좌석'/>
              </div>
              <div className='add-input-wrapper'>
                <span className="prefix-label prem">Premium Seat</span>
                <input type="text" className='add-fnum1' readOnly placeholder='8 좌석'/>
              </div>
            </div>
          
            <div className='add-info2'>
              <div className='add-input-wrapper'>
                <span className="prefix-label">Basic Price</span>
                <input type="text" className='add-fnum'  placeholder='ex )_22000'/>
              </div>
              <div className='add-input-wrapper'>
                <span className="prefix-label prem">Premium Price</span>
                <input type="text" className='add-fnum'  placeholder='ex )__22000'/>
              </div>
            </div>
          </div>  
        </div>  

        <div className='admin-air-addbtn'>
          <div className='admin-back-btn'>
            <button type='button' onClick={()=>navigate('/admin/flight')}>목록</button>
          </div>
          <div className='admin-insert-btn'>
            <button type='submit'>등록</button>
          </div>
        </div>                
      </form>  
    </div>
  );
}
// 출발지 / 도착지 / 출발날짜&시간 / 도착날짜&시간 
// 비행 번호 / 비행기종류 -> 토탈 승객 / 베이직 자리 / 프리미엄 자리 
// 
// 기본 가격 / 프리미엄 가격
