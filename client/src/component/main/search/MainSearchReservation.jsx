import React from 'react';
import { useState,useEffect } from 'react';
import { BsQuestionCircleFill } from "react-icons/bs";
import MainSearchCountryModal from './MainSearchCountryModal.jsx';
import MainSearchPeopleModal from './MainSearchPeopleModal.jsx';
import MainSearchCalendar from './MainSearchCalendar.jsx';
import MultiSearchCalendar from './MultiSearchCalendar.jsx';
import RoundTrip from './RoundTrip.jsx';
import OneWay from './OneWay.jsx';
import MultiCity from './MultiCity.jsx';
import {useSelector, useDispatch} from 'react-redux';

export default function MainSearchReservation() {
    const modalOpen = useSelector(state => state.search.modalOpen);
    const peopleModal = useSelector(state => state.search.peopleModal);
    const calendar = useSelector(state => state.search.calendar);
    const calendar2 = useSelector(state => state.search.calendar2);
    const [searchTab, setSearchTab] = useState('roundTrip');

    const [type, setType] = useState('n');
    const [departure, setDeparture] = useState(''); //출발지
    const [arrive, setArrive] = useState(''); //도착지
    const [multiDepart,setMultiDepart] = useState('');
    const [multiArr, setMultiArr] = useState('');
    const [adultNum ,setAdultNum] = useState(1); //💥전역관리 
    const [pediatricNum ,setPediatricNum] = useState(0);  //소아//💥전역관리 
    const [babyNum ,setBabyNum] = useState(0); //유아//💥전역관리 
    const [total , setTotal] = useState(0);//💥전역관리 
    const [startDate, setStartDate] = useState('');
    const [startDate2, setStartDate2] = useState('');  // 다구간용
    const [endDate, setEndDate] = useState('');
    

    const mom = (item) => {  // 얘네를 api 에 넣어야대나?
        type === 'y' && setDeparture(item);
        type === 'n' && setArrive(item);        
    }
    const mom2 = (item) => {
        type === 'o' && setMultiDepart(item);
        type === 'x' && setMultiArr(item);        
    }
    const exchangeCountry = () => {
        setDeparture(arrive);
        setArrive(departure);
    }    
    const startCalendar2= (data) => {
        setStartDate2(data);
    }

    const startCalendar = (data) => {
        setStartDate(data);
    }
    const endCalendar = (data) => {
        setEndDate(data);
    } // 얘네를 api 에 넣어야대나?
    

    const list = [
        {   'tabNm':'roundTrip','Nm':'왕복'}   ,      
        {   'tabNm':'oneWay','Nm':'편도'}   ,      
        {   'tabNm':'multiCity','Nm':'다구간'}          
    ];
    return (
        <div className='main-top-search-bottom1'>
            {modalOpen && <MainSearchCountryModal mom2={mom2} mom={mom} type={type}             
             departure={departure} />}
            {peopleModal && <MainSearchPeopleModal setAdultNum={setAdultNum} setPediatricNum={setPediatricNum} 
                setBabyNum={setBabyNum} setTotal={setTotal}
            adultNum={adultNum} pediatricNum={pediatricNum} babyNum={babyNum} total={total}
            />}
            {calendar && <MainSearchCalendar  startCalendar={startCalendar} 
                endCalendar={endCalendar}/>}
            {calendar2 && <MultiSearchCalendar  startCalendar2={startCalendar2}/>}
            <div className='main-top-search-bottom-main-top'>
                <ul>
                    {
                        list&& list.map((item)=>(
                            <li onClick={() => { 
                                setSearchTab(item.tabNm); setDeparture(''); setArrive(''); setMultiDepart('');setMultiArr('');
                            }}
                                className = {searchTab === item.tabNm ? 'main-top-search-bottom-tab-active' : 'main-top-search-bottom-tab-none'} >
                            {item.Nm}
                            </li>
                        ))
                    }              
                </ul>
                <div>
                    <input type="text" placeholder='프로모션 코드를 입력해주세요.' />
                    <BsQuestionCircleFill />
                </div>
            </div>
            {searchTab === 'roundTrip' &&
                <RoundTrip 
                departure={departure} arrive={arrive}
                setType={setType} exchangeCountry={exchangeCountry}
                 adultNum ={adultNum} pediatricNum={pediatricNum}babyNum={babyNum}
                startDate={startDate} endDate={endDate}
                />
            }
            {searchTab === 'oneWay' &&
                <OneWay departure={departure} arrive={arrive}
                setType={setType} exchangeCountry={exchangeCountry}               
                adultNum ={adultNum} pediatricNum={pediatricNum}babyNum={babyNum} startDate={startDate}/>
            }
            {searchTab === 'multiCity' &&
                <MultiCity  departure={departure} arrive={arrive}
                setType={setType} exchangeCountry={exchangeCountry}
                 multiDepart={multiDepart} multiArr={multiArr}
                adultNum ={adultNum} pediatricNum={pediatricNum}babyNum={babyNum} startDate={startDate}
                startDate2={startDate2}/>
            }
        </div>
    );
}

