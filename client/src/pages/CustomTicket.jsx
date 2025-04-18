import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import '../scss/ryeong.scss';
import { getMyInfo, getInterest } from '../service/myinfoApi.js';
import { useNavigate } from 'react-router-dom';
import { areaList } from '../component/mypage/interestList.js';
import { toggleInterestItem } from '../features/myinfo/myinfoSlice.js';
import axios from 'axios';

export default function CustomTicket() {


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isLoggedIn = useSelector(state => state.login.isLoggedIn); // 로그인 정보
    const myinfo = useSelector((state) => state.myinfo.myinfo); // 나의 정보 
    const selectedAreas = useSelector(state => state.myinfo.myinterest); // 내가 선택한 관심지역

    useEffect(() => {
        if (isLoggedIn) {
            console.log("선택된 관심지역", selectedAreas);
            dispatch(getMyInfo()) // 유저 정보
            dispatch(getInterest()); // 나의 관심 지역 

        }
        // else {
        //     const select = window.confirm("로그인 서비스가 필요합니다. \n로그인 하시겠습니까?");
        //     select ? navigate('/login') : navigate('/');
        // }
    }, [])


    const [filterTheme, setFilterTheme] = useState([])

    useEffect(()=>{
        axios('/data/customticket.json')
            .then((res)=> {
                    console.log(res.data);
                    setFilterTheme(res.data)
                    
                    })
            .catch(err => console.log(err))
    },[])


    return (
        <div className='r-common mp-container'>
            <div className='mp-content'>
                <section className='customticket-subtitle'>
                    <p className='f30'>맞춤항공권</p>
                </section>
                <article className='user-info-row'>
                    <span>
                        {myinfo.profile_img?.[0] ? (
                            <img src={`http://localhost:9000${myinfo.profile_img[0]}`} />
                        ) : (
                            <div className="default-profile-img" />
                        )}
                    </span>
                    <div className='customticket-user-name'>
                        <span>
                            <p className='f30'><b>{myinfo.kname_first}{myinfo.kname_last}</b>님</p>
                        </span>
                        <p>관심 지역에 딱 맞는 맞춤항공권으로, <br /> 즐거운 여행을 시작해보세요.</p>
                    </div>
                    <div className='customticket-user-interest-wrap'>
                        <div className='theme-wrap' >
                            <b>원하시는 지역을 선택해보세요.</b>
                            <ul className='checkd-interest'>
                              <li>HOT</li>
                              <li>쇼핑</li>
                              <li>도시</li>
                              <li>해변</li>
                              <li>⭐ 관심지역</li>
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}

