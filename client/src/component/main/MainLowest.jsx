import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoMdPin } from "react-icons/io";
import { IoStatsChart } from "react-icons/io5";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import BarChart from '../BarChart';

export default function Mainlowests() {
    const navigate = useNavigate();
    const [lowest, setlowest] = useState([]);
    const [lowsetChart, setLowsetChart] = useState([]);  // lowestChart 데이터 상태 추가
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [selectedOption, setSelectedOption] = useState("anytime");

    useEffect(() => {
        axios.get('/data/mainBanner.json')
            .then((res) => {
                setlowest(res.data.lowest);
                setLowsetChart(res.data.lowestChart);  // lowestChart 데이터 설정
            })
            .catch((error) => console.error("error:", error));
    }, []);

    return (
        <>
            <div className='main_home_lowest_warp'>
                <div className='main_home_lowest' style={{ marginTop: "30px" }}>
                    <div className='main_home_lowest_title'>
                        <div className='main_home_lowest_title_1'>
                            <span className='main_home_lowest_before'>최저가로 떠나는 여행</span>
                        </div>
                    </div>

                    <div className='main_home_lowest_sub'>
                        <span>편도</span><span>총액</span>
                    </div>
                </div>
                <div className='main_home_lowest_buttons'>
                    <div
                        className={`lowest_button button_anytime ${selectedOption === "anytime" ? "active" : ""}`}
                        onClick={() => setSelectedOption("anytime")}
                    >
                        <span>언제든 AnyTime</span>
                    </div>
                    <div
                        className={`lowest_button button_anywhere ${selectedOption === "anywhere" ? "active" : ""}`}
                        onClick={() => setSelectedOption("anywhere")}
                    >
                        <span>어디든 AnyWhere</span>
                    </div>
                </div>

                {selectedOption === "anytime" && (
                    <div className='lowest_anytime_warp'>
                        <div className='lowset_pin'>
                            <p><IoMdPin /> </p>
                            <span>다카마쓰</span>
                        </div>
                        <div className='lowest_anytime'>
                        <BarChart />
                        </div>
                    </div>
                )}
                
                {selectedOption === "anywhere" && (
                    <div className="swiper-lowest-container">
                        <button ref={prevRef} className="custom-prev">
                            <GrFormPrevious size={20} />
                        </button>

                        <Swiper
                            observer={true}
                            observeParents={true}
                            slidesPerView={4}
                            slidesPerGroup={4}
                            loop={true}
                            pagination={{ clickable: true }}
                            modules={[Navigation, Pagination, Autoplay]}
                            navigation={{
                                prevEl: prevRef.current,
                                nextEl: nextRef.current,
                            }}
                            onSwiper={(swiper) => {
                                if (swiper && prevRef.current && nextRef.current) {
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    swiper.params.navigation.nextEl = nextRef.current;
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }
                            }}
                        >
                            {lowest.map((item, i) => (
                                <SwiperSlide key={i}>
                                    <div className='lowest_slider'>
                                        <div className='main_lowest_img'>
                                            <img src={item.img} alt={`Banner ${i + 1}`} className='main_lowest'
                                                style={{ height: "285px" }} />
                                        </div>
                                        <div className='main_lowest_text'>
                                            <p>{item.acont}</p>
                                            <p>{item.dcont}</p>
                                            <p>{item.price}</p>
                                            <p>{item.date}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <button ref={nextRef} className="custom-next">
                            <GrFormNext size={20} />
                        </button>
                    </div>
                )}
                <div className='main_lowest_more_warp'>
                    <div className='main_lowest_more'>
                        <span><IoStatsChart /> 최저가 항공권 더보기</span>
                    </div>
                </div>
                <div> 
                </div>
            </div>
        </>
    );
}
