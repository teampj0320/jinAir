import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import MypageNavigation from '../../component/mypage/MypageNavigation.jsx';
import { useDispatch, useSelector } from "react-redux";
import '../../scss/ryeong.scss';
import { getMyInfo } from '../../service/myinfoApi.js';


export default function ModifyInfo() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const isLoggedIn = useSelector(state => state.login.isLoggedIn); 
    // 로그인한 유저의 정보 가져오기
    const myinfo = useSelector((state) => state.myinfo.myinfo);

    console.log('불러온 회원 정보:', myinfo);

    // 🔸 useRef로 참조 객체 생성
    const emailRef = useRef();
    const addressRef = useRef();
    const detailAddressRef = useRef();
    const marketingEmailRef = useRef();
    const marketingSmsRef = useRef();
    const marketingPushRef = useRef();

    /* 회원 정보 불러오기 */
    useEffect(() => {
        // if(isLoggedIn){
        dispatch(getMyInfo())
        // } else {
        //     const select = window.confirm("로그인 서비스가 필요합니다. \n로그인 하시겠습니까?");
        //     select ?  navigate('/login') :  navigate('/');
        //     dispatch(clearCartList())
        // }
    }, [])

    const [countries, setCountries] = useState([]);


    useEffect(() => {
        fetch('/data/countryInfo.json')
            .then((res) => res.json())
            .then((data) => setCountries(data));
    }, []);


    return (
        <div className='r-common mp-container'>
            <div className='mp-content'>
                <MypageNavigation />
                <div className='small-wrap'>
                    {/* 회원정보 수정 상단 */}
                    <h2 className='f32 w700 align-center'>회원정보수정</h2>
                    <p className='sub-desc w300 align-center'>
                        회원정보는 개인정보취급방침에 따라 안전하게 보호되며<br />
                        회원님의 명백한 동의 없이 공개 또는 제 3자에게 제공되지 않습니다.
                    </p>
                    {/* 프로필 사진 */}
                    <div className='profile-wrap'>
                        <b>프로필 사진</b>
                        <div className='profile-img'>
                            <img src="../images/ddung.jpg" alt="" />
                            <div className='profile-img-desc'>
                                <strong className='w300'><b>'{myinfo.kname_first}{myinfo.kname_last}'</b> 님 반갑습니다.</strong>
                                <p className='w300'>사진 변경/등록 시 5Mb 이하의 파일 등록만 가능하며 자동으로 리사이징 처리 됩니다. 등록 가능한 확장자는  jpg, jpeg, gif, png, heic 파일입니다.</p>
                                <span className='w300'>※사진 등록 시 선정적인 사진은 삭제처리 되거나 제재를 받을 수 있습니다.</span>
                            </div>
                        </div>
                        <div className='profile-button'>
                            <button>변경</button>
                            <button>삭제</button>
                        </div>
                    </div>
                    {/* 기본정보 */}
                    <div className='info-wrap'>
                        <div className='info-title'>
                            <p className='f22 w600 '>기본정보</p>
                            <span className='w300 f12'><b className='input-required-label'>*</b> 필수입력사항</span>
                        </div>
                        <div className='info-content'>
                            <div className='field-wrapper info-user-id'>
                                <label>아이디<span className='input-required-label W300'> *</span></label>
                                <input className='w300' type="text" disabled value={myinfo.id} />
                            </div>
                            <div className='field-wrapper info-user-pwd'>
                                <label>비밀번호 <span className='input-required-label W300'> *</span></label>
                                <button>비밀번호 변경</button>
                            </div>
                            <div className='field-wrapper info-user-name-full'>
                                <label>이름<span className='input-required-label W300'> *</span></label>
                                <input className='w300' type="text" disabled value={myinfo.kname_first + myinfo.kname_last} />
                            </div>
                            <div className='field-row info-user-name-kor'>
                                <div className='field-group'>
                                    <label>성(한글)<span className='input-required-label W300'> *</span></label>
                                    <input className='w300' type="text" disabled value={myinfo.kname_first} />
                                </div>
                                <div className='field-group'>
                                    <label>이름(한글)<span className='input-required-label W300'> *</span></label>
                                    <input className='w300' type="text" disabled value={myinfo.kname_last} />
                                </div>
                            </div>
                            <div className='field-row info-user-name-eng'>
                                <div className='field-group'>
                                    <label>성(영문)<span className='input-required-label W300'> *</span></label>
                                    <input className='w300' type="text" disabled value={myinfo.ename_firtst} />
                                </div>
                                <div className='field-group'>
                                    <label>이름(영문)<span className='input-required-label W300'> *</span></label>
                                    <input className='w300' type="text" disabled value={myinfo.ename_last} />
                                </div>

                            </div>
                            <div className='field-wrapper info-user-birthday'>
                                <label>생년월일<span className='input-required-label W300'> *</span></label>
                                <input className='w300' type="text" disabled value={myinfo.birth} />
                            </div>
                            <div className='field-wrapper info-user-birthday'>
                                <label>연락처<span className='input-required-label W300'> *</span></label>
                                <select name="" className='info-select-box w300'>
                                    {
                                        countries.map((country) =>  (
                                            <option value="">{`${country.ko_name} (${country.dial_code})`}</option>
                                        ))
                                        
                                    }
                                </select>
                                <div className='flex gap10'>
                                    <input className='w300' type="text" disabled value={"010-1234-5678"} />
                                    <button className='info-navy-btn'>변경/인증</button>
                                </div>
                            </div>
                            <div className='field-wrapper info-user-email'>
                                <label>이메일<span className='input-required-label W300'> *</span></label>
                                <input className='w300' type="email" value={myinfo.email} />
                            </div>
                            <div className='field-wrapper info-user-email'>
                                <label>국적(여권)<span className='input-required-label W300'> *</span></label>
                                <select name="" className='info-select-box w300'>

                                    {/* json에서 선택된 값이 db로 가야함 */}

                                    {
                                        countries.map((country) =>  (
                                            <option value="">{`${country.ko_name} (${country.en_name})`}</option>
                                        ))
                                        
                                    }
                                </select>
                            </div>
                            <div className='field-wrapper info-user-email'>

                            {/* json에서 선택된 값이 db로 가야함 */}

                                <label>거주국가</label>
                                <select name="" className='info-select-box w300'>
                                    {
                                        countries.map((country) => (
                                            <option value="">{`${country.ko_name} (${country.en_name})`}</option>
                                        ))
                                        
                                    }
                                </select>
                            </div>
                            <div className='field-wrapper info-user-address'>
                                <label>주소</label>
                                <div className='flex gap10'>
                                    <input className='w300' type="text" disabled value={myinfo.zipcode} />
                                    <button className='info-navy-btn'>우편번호 검색</button>
                                </div>
                                <input className='w300' type="text" disabled value={myinfo.adderss} />
                                <input className='w300' type="text" value={myinfo.detail_adderss} />
                            </div>
                            <div className='field-wrapper info-user-confirm'>
                                <label>마케팅 광고 활용 수신 동의</label>
                                <div className='flex gap10'>
                                    <div className='checkbox-wrap'>
                                        <input type="checkbox" />
                                        <label htmlFor="" className='f14 w300'>이메일</label>
                                    </div>
                                    <div className='checkbox-wrap'>
                                        <input type="checkbox" />
                                        <label htmlFor="" className='f14 w300'>SMS</label>
                                    </div>
                                    <div className='checkbox-wrap'>
                                        <input type="checkbox" />
                                        <label htmlFor="" className='f14 w300'>App푸시</label>
                                    </div>
                                </div>
                            </div>
                            {/* SNS 계정연동 */}
                            <div className='field-wrapper'>
                                <b className='f16'>SNS 계정연동</b>
                                <p className='f14 w300'>- SNS 계정을 통해서 간편하게 로그인 하세요.</p>
                                <div className='sns-btn-wrap'>
                                    <button>
                                        <img src="/images/icon_kakao2.webp" alt="" />
                                        카카오 로그인 연동하기</button>
                                    <button>
                                        <img src="/images/icon_naver.webp" alt="" />
                                        네이버 로그인 연동하기</button>
                                </div>
                            </div>
                            <div className='field-wrapper' >
                                <b className='f16'>회원탈퇴</b>
                                <p className='f14 w300'>탈퇴 후 14일 이내에 가입이 불가능합니다.</p>
                                <button className='withdraw-btn'>회원 탈퇴하기</button>
                            </div>





                        </div>
                    </div>

                </div> {/* end of small wrap  */}
            </div> {/* 해당 컴포넌트 가운데 정렬*/}
        </div> /* 백그라운드 컬러 설정 */
    );
}

