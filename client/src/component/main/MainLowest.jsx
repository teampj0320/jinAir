import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import axios from 'axios';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { IoMdPin } from "react-icons/io";

export default function MainLowest() {
    const [lowest, setlowest] = useState([]);
    const [selectedOption, setSelectedOption] = useState("anytime"); // 현재 선택된 옵션 상태
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        axios.get('/data/mainBanner.json')
            .then((res) => {
                setlowest(res.data.lowest);
            })
            .catch((error) => console.error("error:", error));
    }, []);

    return (
        <div className='main_home_lowest_warp'>
            <div className='main_home_lowest' style={{ marginTop: "30px" }}>
                <div className='main_home_lowest_title'>
                    <span className='main_home_lowest_before'>최저가로 떠나는 여행</span>
                    <div className='main_home_lowest_sub'>
                        <span>편도</span><span>총액</span>
                    </div>
                </div>
                <div className='main_home_lowest_buttons'>
                    <button 
                        className={`lowest_button ${selectedOption === "anytime" ? "active" : ""}`}
                        onClick={() => setSelectedOption("anytime")}
                    >
                        <span>언제든 AnyTime</span>
                    </button>
                    <button 
                        className={`lowest_button ${selectedOption === "anywhere" ? "active" : ""}`}
                        onClick={() => setSelectedOption("anywhere")}
                    >
                        <span>어디든 AnyWhere</span>
                    </button>
                </div>

                {selectedOption === "anytime" && (
                    <div className='lowest_anytime'>
                        <div>
                            <p><IoMdPin />다카마쓰</p>
                        </div>
                        <div>
                            <div>
                                <div>그래프</div>
                                <span>날짜</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {selectedOption === "anywhere" && (
                <div className='main_home_swiper_warp lowest_anywhere'>
                    <button ref={prevRef} className="custom-prev">
                        <GrFormPrevious size={20} />
                    </button>

                    <Swiper
                        className="main_home_content_lowest"
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={10}
                        slidesPerView={4}
                        slidesPerGroup={4}
                        loop={true}
                        pagination={{ clickable: true }}
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
        </div>
    );
}
