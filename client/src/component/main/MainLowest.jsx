import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';
import { IoMdPin } from "react-icons/io"; 
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

export default function MainPromotions() {
    const navigate = useNavigate();
    const [promotion, setPromotion] = useState([]);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [selectedOption, setSelectedOption] = useState("anytime");

    useEffect(() => {
        axios.get('/data/mainBanner.json')
            .then((res) => {
                setPromotion(res.data.promotion)
            })
            .catch((error) => console.error("error:", error));
    }, []);

    return (
        <>
        <div className='main_home_promotion_warp'>
            <div className='main_home_promotion'
                style={{ marginTop: "30px" }}>
                <div className='main_home_promotion_title'>
                    <div className='main_home_promotion_title_1'>
                        <span className='main_home_promotion_before'>최저가로 떠나는 여행</span>
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

                <div className='main_home_promotion_sub' >
                    <span>편도</span><span>총액</span>
                </div>
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

{selectedOption === "anywhere" && (
            <div className="swiper-promotion-container">
                <button ref={prevRef} className="custom-prev">
                    <GrFormPrevious size={20} />
                </button>

                <Swiper
                    className="main_home_content_promotion"
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={4}
                    slidesPerGroup={4}
                    loop={true}
                    pagination={{ clickable: true }}
                    observer={true} //  display: none의 에러 이슈 해결을 위해 삽입
                    observeParents={true} //해당 요소와 부모 요소를 감지하여 DOM에 변화가 있으면 swiper를 초기화하
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
                    {promotion.map((item, i) => (
                        <SwiperSlide key={i}>
                            <div className='promotion_slider'>
                                <div className='main_promotion_img'>
                                    <img src={item.img} alt={`Banner ${i + 1}`} className='main_promotion' 
                                    style={{height:"285px"}}/>
                                </div>
                                <div className='main_promotion_text'>
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
        </>
    );
}
