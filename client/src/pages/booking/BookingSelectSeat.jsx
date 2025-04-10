import React, { useState } from 'react';
import { IoIosAirplane } from "react-icons/io";
import { IoPerson } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import BookingStep from '../../component/booking/BookingStep.jsx';
import BookingSeatDesc from '../../component/booking/BookingSeatDesc.jsx';
import Modal from 'react-modal';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';


export default function BookingSelectSeat() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const seatGrade = [
        {
            color: "#7e0049",
            name: "지니스트레치",
            charge: 10000
        },
        {
            color: "#dc383b",
            name: "비상구열",
            charge: 10000
        },
        {
            color: "#dfa93e",
            name: "비상구열(등받이 고정)",
            charge: 10000
        },
        {
            color: "#077fac",
            name: "지니프론트",
            charge: 10000
        },
        {
            color: "#c2d832",
            name: "지니스탠다드A",
            charge: 10000
        },
        {
            color: "#6d7348",
            name: "지니스탠다드B",
            charge: 10000
        },
        {
            color: "#9e9e9e",
            name: "선택불가"
        },
    ];

    /* 모달창 스타일 */
    const customModalStyles = {
        overlay: {
            backgroundColor: " rgba(0, 0, 0, 0.4)",
            width: "100%",
            height: "100vh",
            zIndex: "10",
            position: "fixed",
            top: "0",
            left: "0",
        },
        content: {
            width: "500px",
            height: "450px",
            zIndex: "150",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            borderRadius: "10px",
            boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
            backgroundColor: "white",
            justifyContent: "center",
            overflow: "auto",
            padding: "0"
        }
    };

    return (
        <div className='booking-selectSeat-wrap'>
            <BookingStep text={'selectSeat'} /> {/* 항공권 예약 ~ 결제 페이지 상단탭 */}

            <div className='booking-selectSeat-contents'>
                <p className='booking-page-title'>3. 부가서비스 (사전좌석)</p>
                <div className='booking-selectSeat-section'>
                    <span>구간1</span>
                    <div>
                        <span>서울/김포 <span className='thin'>GMP</span></span>
                        <span><IoIosAirplane /></span>
                        <span>제주 <span className='thin'>CJU</span></span>
                    </div>
                    <div>|</div>
                    <div>
                        <span>2025.04.08(화)</span>
                        <span>19:10</span>
                        <span>~</span>
                        <span>2025.04.08(화)</span>
                        <span>20:25</span>
                    </div>
                </div>
                <div className='booking-selectSeat-detail'>
                    <div className='booking-selectSeat-detail-top'>
                        <div>
                            <span>탑승객</span>
                            <span className='thin'>
                                <span>*</span>
                                좌석 지정 시 유의사항
                                <span className='booking-selectSeat-alert'
                                    data-tooltip-id='my-tooltip'
                                    data-tooltip-content='* 동물 알레르기 및 민감 승객께서는 공항 수속 직원에게 문의하여 주시기 바랍니다. 단, 상황에 따라 좌석 조정이 어려울 수 있습니다.'
                                >
                                    !
                                </span>
                                <Tooltip 
                                    id='my-tooltip' 
                                    place='top'
                                    className='thin'
                                    style={{backgroundColor: "#192547"}}
                                />
                            </span>
                        </div>
                        <span className='thin'>(통화 : KRW)</span>
                    </div>
                    <div className='booking-selectSeat-detail-bottom'>
                        <div className='selectSeat-detail-bottom-left'>
                            <div className='selectSeat-detail-passenger-info'>
                                <div className='selectSeat-passenger-info-num'>1</div>
                                <div className='selectSeat-passenger-info-icon'><IoPerson /></div>
                                <div className='selectSeat-passenger-info-name'>
                                    <span>홍</span>
                                    <span>길동</span>
                                </div>
                            </div>
                            <div className='selectSeat-select-info'>
                                <div>
                                    <span>28A</span>
                                    <span>KRW 10,000</span>
                                </div>
                                <div><IoIosClose /></div>
                            </div>
                        </div>
                        <div className='selectSeat-detail-bottom-right'>
                            <ul className='selectSeact-seat-info'>
                                { seatGrade.map((item) => 
                                    <li>
                                        <div style={{border: `2px solid ${item.color}`, borderRadius: "2px", width: "12px", height: "12px"}}></div>
                                        <span style={{color: item.color}}>{item.name} {item.charge}</span>
                                    </li>
                                ) }
                            </ul>
                            <div onClick={() => setModalIsOpen(true)}>
                                <span><MdArrowOutward /></span>
                                <span>좌석안내</span>
                            </div>
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={() => setModalIsOpen(false)}
                                style={customModalStyles}
                                ariaHideApp={false}
                                contentLabel="Booking Seat Deac Modal"
                            >
                                <BookingSeatDesc setModalIsOpen={setModalIsOpen} />
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
            <div className='booking-selectSeat-buttons'>
                <button>나중에 선택</button>
                <button>신청하기</button>
            </div>
        </div>
    );
}