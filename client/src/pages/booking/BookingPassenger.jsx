import React from 'react';
import BookingStep from '../../component/booking/BookingStep';
import { MdArrowOutward } from "react-icons/md";
import '../../scss/yuna.scss';
import { useNavigate } from 'react-router-dom';

export default function BookingPassenger() {
    const navigate = useNavigate();

    const clickNextBtn = () => {
        navigate('/booking/selectSeat');
    }

    return (
        <div className='booking-passenger-wrap'>
            <BookingStep text={'passenger'} /> {/* 항공권 예약 ~ 결제 페이지 상단탭 */}

            <div className='booking-passenger-contents'>
                <p className='booking-page-title'>2. 탑승객 정보</p>

                <div className='booking-passenger-form'>
                    <div className='booking-passenger-form-top'>
                        <span>성인 1(인원수)</span>
                        <div> {/* 삭제 고민해볼 것 */}
                            <input type="checkbox" />
                            <span>직접 입력</span>
                        </div>
                    </div>
                    <div className='booking-passenger-info'>
                        <ul className='booking-passenger-info-left'>
                            <li>
                                <label>이름<span>*</span></label>
                                <div>
                                    <input type="text" defaultValue="홍" />
                                    <input type="text" defaultValue="길동" />
                                </div>
                            </li>
                            <li>
                                <label>생년월일<span>*</span></label>
                                <input type="text" defaultValue="19890704" />
                            </li>
                            <li>
                                <label>회원아이디</label>
                                <input type="text" defaultValue="GILDONG" />
                            </li>
                        </ul>
                        <ul className='booking-passenger-info-right'>
                            <li>
                                <label>성별<span>*</span></label>
                                <div>
                                    <div>남자</div>
                                    <div>여자</div>
                                </div>
                            </li>
                            <li>
                                <label>국적<span>*</span></label>
                                <select name="country" id="">
                                    <option value="default">한국(REPUBLIC OF KOREA)</option>
                                </select>
                            </li>
                            <li> {/* 삭제 고민해볼 것 */}
                                <label>추가할인</label>
                                <select name="discount" id="">
                                    <option value="default">선택</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='booking-passenger-info-desc'>
                    <div>
                        <p>&#60;탑승객 정보&#62;</p>
                        <ul>
                            <li>신분증 이름과 동일하게 입력해야 하며, 결제 후 이름 변경은 불가 합니다. 정보 오입력 시 탑승이 제한될 수 있습니다. 단, 동일 발음(동일인)에 한하여 철자 변경이 가능하나 수수료가 부과됩니다.</li>
                            <li>중간이름(Middle Name)이 있는 경우 띄어쓰기 없이 이름(First Name)+중간이름(Middle Name)을 입력하시기 바랍니다.</li>
                            <li>회원아이디를 인증하시면 탑승 완료 후 나비포인트가 자동 적립됩니다. (탑승 완료 후 익일)</li>
                        </ul>
                    </div>
                    <div>
                        <p>&#60;할인 및 증빙 정보&#62;</p>
                        <ul>
                            <li>유/소아 동반 고객 및 추가할인 대상은 탑승 수속 시에 해당 증빙 서류를 지참하시기 바랍니다.</li>
                            <li>중간이름(Middle Name)이 있는 경우 띄어쓰기 없이 이름(First Name)+중간이름(Middle Name)을 입력하시기 바랍니다.</li>
                            <li>회원아이디를 인증하시면 탑승 완료 후 나비포인트가 자동 적립됩니다. (탑승 완료 후 익일)</li>
                        </ul>
                        <button>할인조건 및 증빙서류<span><MdArrowOutward /></span></button>
                    </div>
                </div>
                <div className='booking-passenger-reservant'>
                    <p>예매자 정보</p>
                    <ul className='passenger-reservant-form'>
                        <li>
                            <label>이메일<span>*</span></label>
                            <input type="text" defaultValue="gildong@gmail.com" />
                        </li>
                        <li>
                            <label>휴대전화번호<span>*</span></label>
                            <select name="country-num" id="">
                                <option value="default">한국 (+82)</option>
                            </select>
                            <input type="text" defaultValue="01012345678" />
                        </li>
                    </ul>
                    <ul className='passenger-reservant-desc'>
                        <li>국가번호 선택한 후 휴대 전화 번호 전체를 입력해 주세요. (예. 한국의 경우, 01012345678)</li>
                        <li>항공기 운항정보(스케줄 변경, 결항 등) 및 구매정보가 알림톡 또는 SMS 로 발송되며, 이메일로 e-티켓이 발송됩니다.</li>
                    </ul>
                </div>
            </div>
            <div className='booking-passenger-next-btn'>
                <button onClick={clickNextBtn}>다음 단계</button>
            </div>
        </div>
    );
}