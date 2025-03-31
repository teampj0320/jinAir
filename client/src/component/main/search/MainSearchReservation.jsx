import React from 'react';
import { useState } from 'react';
import { BsQuestionCircleFill } from "react-icons/bs";
import MainSearchCountryModal from './MainSearchCountryModal.jsx';
import MainSearchPeopleModal from './MainSearchPeopleModal.jsx';
import MainSearchCalendar from './MainSearchCalendar.jsx';
import RoundTrip from './RoundTrip.jsx';
import OneWay from './OneWay.jsx';
import MultiCity from './MultiCity.jsx';

export default function MainSearchReservation() {
    const [modalOpen, setModalOpen] = useState(false);
    const [peopleModal, setPeopleModal] = useState(false);
    const [calendar, setCalendar] = useState(false);
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

    
    const mom = (item) => {
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
    const list = [
        {   'tabNm':'roundTrip','Nm':'왕복'}   ,      
        {   'tabNm':'oneWay','Nm':'편도'}   ,      
        {   'tabNm':'multiCity','Nm':'다구간'}          
    ];

    return (
        <div className='main-top-search-bottom1'>
            {modalOpen && <MainSearchCountryModal mom2={mom2} mom={mom} type={type} setModalOpen={setModalOpen} departure={departure} />}
            {peopleModal && <MainSearchPeopleModal setPeopleModal={setPeopleModal} setAdultNum={setAdultNum} setPediatricNum={setPediatricNum} setBabyNum={setBabyNum} setTotal={setTotal}
            adultNum={adultNum} pediatricNum={pediatricNum} babyNum={babyNum} total={total}
            />}
            {calendar && <MainSearchCalendar setCalendar={setCalendar} />}
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
                <RoundTrip setModalOpen={setModalOpen} departure={departure} arrive={arrive}
                setType={setType} exchangeCountry={exchangeCountry} setCalendar={setCalendar}
                setPeopleModal={setPeopleModal} adultNum ={adultNum} pediatricNum={pediatricNum}babyNum={babyNum}/>
            }
            {searchTab === 'oneWay' &&
                <OneWay setModalOpen={setModalOpen} departure={departure} arrive={arrive}
                setType={setType} exchangeCountry={exchangeCountry} setCalendar={setCalendar}
                setPeopleModal={setPeopleModal}
                adultNum ={adultNum} pediatricNum={pediatricNum}babyNum={babyNum}/>
            }
            {searchTab === 'multiCity' &&
                <MultiCity setModalOpen={setModalOpen} departure={departure} arrive={arrive}
                setType={setType} exchangeCountry={exchangeCountry} setCalendar={setCalendar}
                setPeopleModal={setPeopleModal} multiDepart={multiDepart} multiArr={multiArr}
                adultNum ={adultNum} pediatricNum={pediatricNum}babyNum={babyNum}/>
            }
        </div>
    );
}

