import React, { useEffect, useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import axios from 'axios';
import { LuArrowUpRight } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { IoTicketSharp } from "react-icons/io5";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

export default function MainPromotions() {
    const navigate = useNavigate();
    const [promotion, setPromotion] = useState([]);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

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
                        <span className='main_home_promotion_before'>고객님</span><span>을 위한 맞춤 항공권</span>
                    </div>
                    <div className='main_home_promotion_title_2' 
                    onClick={() => navigate('/')}>
                        <span>#회원가입_추가정보입력_맞춤_최저가_항공권_정보_겟겟!<LuArrowUpRight /></span>
                    </div>
                </div>
                <div className='main_home_promotion_sub' >
                    <span>편도</span><span>총액</span>
                </div>
            </div>
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
            <div className='main_promotion_more_warp'>
                <div className='main_promotion_more'>
                    <span><IoTicketSharp />맞춤 항공권 더보기</span>
                </div>

            </div>
        </div>
        </>
    );
} 
