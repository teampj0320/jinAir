import React from 'react';
import { useState, useEffect } from 'react';
import { BsQuestionCircleFill } from "react-icons/bs";
import MainSearchCountryModal from './MainSearchCountryModal.jsx';
import MainSearchPeopleModal from './MainSearchPeopleModal.jsx';
import MainSearchCalendar from './MainSearchCalendar.jsx';
import MultiSearchCalendar from './MultiSearchCalendar.jsx';
import RoundTrip from './RoundTrip.jsx';
import OneWay from './OneWay.jsx';
import MultiCity from './MultiCity.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { getAdultNum,getPediatricNum,getBabyNum,getArrive ,getDeparture} from '../../../service/searchApi.js';


export default function MainSearchReservation() {
    const dispatch = useDispatch();
    const modalOpen = useSelector(state => state.search.modalOpen);
    const peopleModal = useSelector(state => state.search.peopleModal);
    const calendar = useSelector(state => state.search.calendar);
    const calendar2 = useSelector(state => state.search.calendar2);
    const [searchTab, setSearchTab] = useState('roundTrip');
    const type = useSelector(state => state.search.type);
    const departure = useSelector(state => state.search.departure);
    const arrive = useSelector(state => state.search.arrive);


    const [multiDepart, setMultiDepart] = useState('');
    const [multiArr, setMultiArr] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startDate2, setStartDate2] = useState('');  // 다구간용
    const [endDate, setEndDate] = useState('');


    const mom = (item) => {  
        type === 'y' && dispatch(getDeparture(item));
        type === 'n' && dispatch(getArrive(item));
    }
    const mom2 = (item) => {
        type === 'o' && setMultiDepart(item);
        type === 'x' && setMultiArr(item);
    }
    const exchangeCountry = () => {
        dispatch(getDeparture(arrive));
        dispatch(getArrive(departure));
    }
    const startCalendar2 = (data) => {
        setStartDate2(data);
    }

    const startCalendar = (data) => {
        setStartDate(data);
    }
    const endCalendar = (data) => {
        setEndDate(data);
    } 


    const list = [
        { 'tabNm': 'roundTrip', 'Nm': '왕복' },
        { 'tabNm': 'oneWay', 'Nm': '편도' },
        { 'tabNm': 'multiCity', 'Nm': '다구간' }
    ];
    return (
        <div className='main-top-search-bottom1'>
            {modalOpen && <MainSearchCountryModal mom2={mom2} mom={mom}
               />}
            {peopleModal && <MainSearchPeopleModal />}
            {calendar && <MainSearchCalendar startCalendar={startCalendar}
                endCalendar={endCalendar} />}
            {calendar2 && <MultiSearchCalendar startCalendar2={startCalendar2} />}
            <div className='main-top-search-bottom-main-top'>
                <ul>
                    {
                        list && list.map((item) => (
                            <li onClick={() => {
                                setSearchTab(item.tabNm); dispatch(getDeparture('')); dispatch(getArrive('')); 
                                setMultiDepart(''); setMultiArr('');
                                dispatch(getAdultNum(1)); dispatch(getPediatricNum(0)); dispatch(getBabyNum(0));
                            }}
                                className={searchTab === item.tabNm ? 'main-top-search-bottom-tab-active' : 'main-top-search-bottom-tab-none'} >
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
                    exchangeCountry={exchangeCountry}                    
                    startDate={startDate} endDate={endDate}
                />
            }
            {searchTab === 'oneWay' &&
                <OneWay exchangeCountry={exchangeCountry}
                 startDate={startDate} />
            }
            {searchTab === 'multiCity' &&
                <MultiCity exchangeCountry={exchangeCountry}
                    multiDepart={multiDepart} multiArr={multiArr}
                 startDate={startDate}
                    startDate2={startDate2} />
            }
        </div>
    );
}

