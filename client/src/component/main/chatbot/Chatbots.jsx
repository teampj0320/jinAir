import React, { useState, useRef, useEffect } from 'react';
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
import { useSelector, useDispatch } from 'react-redux';
import { getChatbotModalOpen } from '../../../service/searchApi.js';
import config from "./config.js";
import MessageParser from "./MessageParser.jsx";
import ActionProvider from "./ActionProvider.jsx";
import Chatbot from "react-chatbot-kit";
import 'react-chatbot-kit/build/main.css';

export default function Chatbots() {
    const dispatch = useDispatch();
    const [chatTab, setChatTab] = useState('');
    const [buyAirTicket, setBuyAirTicket] = useState(false);
    const [message, setMessage] = useState('');
    const [message1, setMessage1] = useState('');  // reservation 으로 넘길값
    const [message2, setMessage2] = useState('');
    const [message3, setMessage3] = useState('');// reservation 으로 넘길값
    const [msg1, setMsg1] = useState(true);
    const [msg2, setMsg2] = useState(false);

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
    const handleMessage = (e) => {
        // const { name, value } = e.target;
        setMessage(e.target.value);
        setMessage1(e.target.value);
    }
    const activeEnter = (e) => {
        if (e.key === "Enter") {
            handleMessage(e);
            setMessage('');
            setMsg1(false);
            setMsg2(true);
        }
    }
    const handleMessage2 = (e) => {
        // const { name, value } = e.target;
        setMessage2(e.target.value);
        setMessage3(e.target.value);
    }
    const activeEnter2 = (e) => {
        if (e.key === "Enter") {
            handleMessage2(e);
            setMessage2('');
            setMsg1(false);
            setMsg2(false);
        }
    }


    return (
        <div className='chat-modal-content'>
            <div className='chat-country-all'>
                <div className='chatbot-top'>
                    <span>제이드(Jaid)</span>
                    <IoMdClose onClick={() => dispatch(getChatbotModalOpen(false))} className='main-search-country-icon2' />
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
                        {chatTab === 'reservation' && <Reservation message1={message1} message3={message3}/>}
                        {chatTab === 'food' && goFood()}
                        {chatTab === 'cheap' && <Cheap />}
                        {chatTab === 'question' && <Question />}
                        {chatTab === 'ticket' && <Ticket />}
                        {chatTab === 'check' && <Check />}
                        {chatTab === 'notice' && goNotice()}
                        {buyAirTicket && <BuyTicket />}
                    </div>
                    {/* <div className='real-chatbot-box'>
                    <Chatbot
                        config={config}
                        messageParser={MessageParser}
                        actionProvider={ActionProvider}
                    />
                </div> */}
                </div>
                <div className='chatbot-main-bottom-box'>
                    <ul>
                        <li>
                            <img src="/images/chatbot/small_icon_01.png" alt="챗봇스몰아이콘" />
                            <span onClick={handleResetHome}>처음으로</span>
                        </li>
                        <li>
                            <img src="/images/chatbot/small_icon_02.png" alt="챗봇스몰아이콘" />
                            <span onClick={() => { setBuyAirTicket(true) }}>항공권구매</span>
                        </li>
                        <li>
                            <img src="/images/chatbot/small_icon_03.png" alt="챗봇스몰아이콘" />
                            <span onClick={handleQna}>고객의말씀(Q&A)</span>
                        </li>
                    </ul>
                </div>
                {msg1 &&
                    <div className='chatbot-bottom-box'>
                        <input name='myMessage' type="text" placeholder='궁금하신 사항을 입력해 주세요~'
                            value={message}
                            onKeyDown={activeEnter} onChange={handleMessage} />
                    </div>
                }
                {msg2 &&
                    <div className='chatbot-bottom-box'>
                        <input name='myMessage' type="text" placeholder='궁금하신 사항을 입력해 주세요~'
                            value={message2}
                            onKeyDown={activeEnter2} onChange={handleMessage2} />
                    </div>
                }
            </div >
        </div>
    );
}

