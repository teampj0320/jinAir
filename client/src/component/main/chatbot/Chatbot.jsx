import React from 'react';
import { IoMdClose } from "react-icons/io";
import { BsRobot } from "react-icons/bs";

export default function Chatbot({ setTab }) {
    return (
        <div className='chat-modal-content'>
            <div className='chat-country-all'>
                <div className='chatbot-top'>
                    <span>제이드(Jaid)</span>
                    <IoMdClose onClick={() => setTab(false)} className='main-search-country-icon2' />
                </div>
                <div className='기본 하얀부분'>
                    <div>
                        <div>
                            <button onClick={() => { setTab(true) }}>
                                <BsRobot className='chatbot-icon' />
                                <span>JAID</span>
                            </button>
                        </div>
                    </div>
                    <h5>Fly, Better fly!</h5>
                    <h4>안녕하세요. 제이드(Jaid) 입니다!</h4>
                    <h4>무엇을 도와드릴까요?</h4>
                    <ul>
                        <li>
                            <img src="/images/chatbot/icon_01_de.png" alt="챗봇아이콘" />
                            <span></span>
                        </li>
                        <li>
                            <img src="/images/chatbot/icon_02_de.png" alt="챗봇아이콘" />
                            <span></span>
                        </li>
                        <li>
                            <img src="/images/chatbot/icon_03_de.png" alt="챗봇아이콘" />
                            <span></span>
                        </li>
                        <li>
                            <img src="/images/chatbot/icon_04_de.png" alt="챗봇아이콘" />
                            <span></span>
                        </li>
                        <li>
                            <img src="/images/chatbot/icon_05_de.png" alt="챗봇아이콘" />
                            <span></span>
                        </li>
                        <li>
                            <img src="/images/chatbot/icon_06_de.png" alt="챗봇아이콘" />
                            <span></span>
                        </li>
                        <li>
                            <img src="/images/chatbot/icon_07_de.jpg" alt="챗봇아이콘" />
                            <span></span>
                        </li>
                        <li>
                            <img src="/images/chatbot/icon_08_de.jpg" alt="챗봇아이콘" />
                            <span></span>
                        </li>
                        <li>
                            <img src="/images/chatbot/icon_09_de.jpg" alt="챗봇아이콘" />
                            <span></span>
                        </li>
                    </ul>
                    <div>
                        <ul>
                            <li>
                                <img src="/images/chatbot/small_icon_01.png" alt="챗봇스몰아이콘" />
                                <span>처음으로</span>
                            </li>
                            <li>
                                <img src="/images/chatbot/small_icon_02.png" alt="챗봇스몰아이콘" />
                                <span>항공권구매</span>
                            </li>
                            <li>
                                <img src="/images/chatbot/small_icon_03.png" alt="챗봇스몰아이콘" />
                                <span>고객의말씀(Q&A)</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='문의했을때 답변이나 뭐 나오는 보더'>

                </div>
                <div className='맨밑직접채팅'>
                    <input type="text" />
                </div>
            </div >
        </div>
    );
}

