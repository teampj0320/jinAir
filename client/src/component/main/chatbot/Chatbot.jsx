import React, { useState,useRef, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import Schedule from './Schedule.jsx';
import Reservation from './Reservation.jsx';
import Airplane from './Airplane.jsx';
import Cheap from './Cheap.jsx';
import Question from './Question.jsx';
import Ticket from './Ticket.jsx';
import Check from './Check.jsx';
import BuyTicket from './BuyTicket.jsx';
import { useNavigate } from 'react-router-dom';


export default function Chatbot({ setTab }) {
    const [chatTab, setChatTab] = useState('');
    const [buyAirTicket, setBuyAirTicket] = useState(false);
    const list = [
        { tab: 'schedule', img: "/images/chatbot/icon_01_de.png" },
        { tab: 'airplane', img: "/images/chatbot/icon_02_de.png" },
        { tab: 'reservation', img: "/images/chatbot/icon_03_de.png" },
        { tab: 'food', img: "/images/chatbot/icon_04_de.png" },
        { tab: 'cheap', img: "/images/chatbot/icon_05_de.png" },
        { tab: 'question', img: "/images/chatbot/icon_06_de.png" },
        { tab: 'ticket', img: "/images/chatbot/icon_07_de.jpg" },
        { tab: 'check', img: "/images/chatbot/icon_08_de.jpg" },
        { tab: 'notice', img: "/images/chatbot/icon_09_de.jpg" }
    ];
    const componentRef = useRef(null);
    const goFood = () => {
        window.location.href = 'https://www.jinair.com/addService/preordermeal/all';
    };
    const goNotice = () => {
        window.location.href = 'https://www.jinair.com/company/announce/announceList';
    };
    useEffect(() => {
        if (chatTab && componentRef.current) {
            componentRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [chatTab]);
    const handleResetHome = () => {
        setChatTab('');
        setBuyAirTicket(false);
    }
    const handleQna = () => {
        // 로그인 아닐때
        // navigate('/login');
        // 로그인 일때
        // qna 페이지로 이동됨
    }
    return (
        <div className='chat-modal-content'>
            <div className='chat-country-all'>
                <div className='chatbot-top'>
                    <span>제이드(Jaid)</span>
                    <IoMdClose onClick={() => setTab(false)} className='main-search-country-icon2' />
                </div>
                <div className='chatbot-main'>
                    <div className='chatbot-main-top-box'>
                        <div className='chatbot-main-top-box-icon'>
                            <img src="images/chatbot/jaid_icon.png" alt="" />
                        </div>
                        <h5>Fly, Better fly!</h5>
                        <h4>안녕하세요. 제이드(Jaid) 입니다!</h4>
                        <h4>무엇을 도와드릴까요?</h4>
                        <ul>
                            {
                                list.map((item) => (
                                    <li onClick={() => setChatTab(item.tab)}>
                                        <img src={item.img} alt="챗봇아이콘" />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div ref={componentRef}>                        
                        {chatTab === 'schedule' && <Schedule />}
                        {chatTab === 'airplane' && <Airplane />}
                        {chatTab === 'reservation' && <Reservation />}
                        {chatTab === 'food' && goFood()}
                        {chatTab === 'cheap' && <Cheap />}
                        {chatTab === 'question' && <Question />}
                        {chatTab === 'ticket' && <Ticket />}
                        {chatTab === 'check' && <Check />}
                        {chatTab === 'notice' && goNotice()}
                        {buyAirTicket && <BuyTicket/>}
                    </div>
                </div>
                <div className='chatbot-main-bottom-box'>
                    <ul>
                        <li>
                            <img src="/images/chatbot/small_icon_01.png" alt="챗봇스몰아이콘" />
                            <span onClick={handleResetHome}>처음으로</span>
                        </li>
                        <li>
                            <img src="/images/chatbot/small_icon_02.png" alt="챗봇스몰아이콘" />
                            <span onClick={()=>{setBuyAirTicket(true)}}>항공권구매</span>
                        </li>
                        <li>
                            <img src="/images/chatbot/small_icon_03.png" alt="챗봇스몰아이콘" />
                            <span onClick={handleQna}>고객의말씀(Q&A)</span>
                        </li>
                    </ul>
                </div>
                <div className='chatbot-bottom-box'>
                    <input type="text" placeholder='궁금하신 사항을 입력해 주세요~' />
                </div>
            </div >
        </div>
    );
}

