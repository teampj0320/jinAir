import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import '../scss/ryeong.scss';
import { getMyInfo, customTheme, customArea } from '../service/myinfoApi.js';
import { useNavigate } from 'react-router-dom';

import dayjs from 'dayjs';
import 'dayjs/locale/ko'

export default function CustomTicket() {
    dayjs.locale('ko');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLoggedIn = useSelector(state => state.login.isLoggedIn); // 로그인 정보
    const myinfo = useSelector((state) => state.myinfo.myinfo); // 나의 정보 
    const selectedAreas = useSelector(state => state.myinfo.myinterest); // 내가 선택한 관심지역

    const [themeFlightList, setThemeFlightList] = useState([]); // 선택한 테마 항공권 정보 정보
    const [areaFlightList, setAreaFlightList] = useState([]);   // 맞춤 지역 설정한 항공권 정보
    const [selectedCategory, setSelectedCategory] = useState(null); // 카테고리 클릭시 상태
    const [selectedArea, setSelectedArea] = useState(null);   // 관심지역 클릭시 상태

    // 정보 불러오기
    useEffect(() => {
        handleCategoryClick('hot'); // 
        isLoggedIn && dispatch(getMyInfo()) 
    }, []);
    
    



    const handleCategoryClick = async (category) => {
        setSelectedCategory(category);
        setSelectedArea(null);    // 관심지역 비활성화
        setAreaFlightList([]);     // 관심지역 리스트 비우기
      
        const result = await customTheme(category);
        if (!result?.length) return;
      
        const today = new Date();
        const filtered = result
          .filter(f => new Date(f.Departure_date) >= today)
          .sort((a, b) => new Date(a.Departure_date) - new Date(b.Departure_date))
          .slice(0, 20);
      
        setThemeFlightList(filtered);
      };
      

      const handleInterestArea = async () => {
        if (!isLoggedIn) {
          const select = window.confirm("로그인 서비스가 필요합니다. \n로그인 하시겠습니까?");
          select ? navigate('../login') : navigate('/');
          return;
        }
      
        const result = await customArea();
        setSelectedCategory(null);     // 테마 선택 해제
        setSelectedArea('interest');   // 관심지역 active 표시
        setThemeFlightList([]);        // 테마 항공권 비우기
      
        if (result?.length) {
          setAreaFlightList(result);
        } else {
          setAreaFlightList([]);
        }
      };
      

    return (
        <div className='r-common mp-container'>
            <div className='mp-content'>
                <section className='customticket-subtitle'>
                    <p className='f30'>맞춤항공권</p>
                </section>
                <article className='user-info-row'>
                    <div className='user-info-detail' >
                        <div>
                            {myinfo.profile_img?.[0] ? (
                                <img src={`http://localhost:9000${myinfo.profile_img[0]}`} />
                            ) : (
                                <div className="default-profile-img" />
                            )}
                        </div>
                        <div className='customticket-user-name'>
                            <span>
                                <p className='f30'><b>{myinfo.kname_first}{myinfo.kname_last || '고객'}</b>님</p>
                            </span>
                            <p>관심 지역/테마에 딱 맞는 맞춤항공권으로, <br /> 즐거운 여행을 시작해보세요.</p>
                        </div>
                    </div>
                    <div className='customticket-user-interest-wrap'>
                        <div className='theme-wrap' >
                            <b>원하시는 지역/테마를 선택해보세요.</b>
                            <ul className='checkd-interest-category'>
                                {['beach', 'city', 'shopping', 'hot'].map((category) => (
                                    <li
                                        key={category}
                                        className={selectedCategory === category ? 'active' : ''}
                                        onClick={() => handleCategoryClick(category)}
                                    >
                                        {category === 'hot' ? '🔥HOT' :
                                            category === 'beach' ? '해변' :
                                                category === 'city' ? '도시' :
                                                    category === 'shopping' ? '쇼핑' : category}
                                    </li>
                                ))}
                                <li className={selectedArea === 'interest' ? 'active' : ''}
                                    onClick={handleInterestArea}>⭐관심지역</li>
                            </ul>

                        </div>
                    </div>
                </article>

                <div class="go-to-fit-air-btn"><p>관심 지역/테마를 등록하고, 맞춤형 정보와 다양한 혜택을 받아보세요.</p><span onClick={() => { navigate('../mypage/myInterest') }}>등록/수정하기</span></div>
                <section className="customticket-list-wrap">
                    <div className='customticket-list-title'>
                        <p><b>{myinfo.kname_first}{myinfo.kname_last || '고객'}</b>님에게 딱 맞는 맞춤항공권이 총 <b>{themeFlightList.length}건</b>이 있습니다. </p>
                    </div>
                    <ul className='customticket-list'>
                        {themeFlightList.map((flight) => (
                            <li>
                                <img src={flight.images} alt="" />
                                <div className='card-text'>

                                    <p className='f16 w300'>{flight.Departure_location}({flight.D_acode})</p>
                                    <p className='f20 w600'>{flight.Arrive_location}({flight.A_acode})</p>
                                    <div>
                                        <span className='f14 w600'>KRW</span>
                                        <span className='f20 w600'>{flight.basic_price.toLocaleString()}원</span>
                                    </div>
                                    <p className='w300'>{dayjs(flight.Departure_date).format('YYYY.MM.DD (ddd)')}</p>
                                </div>
                            </li>
                        ))}
                        {areaFlightList.map((flight, idx) => (
                            <li key={idx}>
                                <img src={flight.images} alt="" />
                                <div className='card-text'>
                                    <p className='f16 w300'>{flight.Departure_location}({flight.D_acode})</p>
                                    <p className='f20 w600'>{flight.Arrive_location}({flight.A_acode})</p>
                                    <div>
                                        <span className='f14 w600'>KRW</span>
                                        <span className='f20 w600'>{flight.basic_price.toLocaleString()}원</span>
                                    </div>
                                    <p className='w300'>{dayjs(flight.Departure_date).format('YYYY.MM.DD (ddd)')}</p>
                                </div>
                            </li>
                        ))}
                    </ul>


                </section>




            </div>
        </div>
    );
}

