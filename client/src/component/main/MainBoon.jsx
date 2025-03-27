import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function MainBoon() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20} // 슬라이드 간격
            slidesPerView={2}  // 한 번에 보이는 슬라이드 개수
            navigation        // 네비게이션 버튼 추가
            pagination={{ clickable: true }} // 페이지네이션 추가
            // autoplay={{ disableOnInteraction: false }} // 자동 재생
        >
            {[...Array(8)].map((_, index) => (
                <SwiperSlide key={index}>
                    <div className="main_boon">Slide {index + 1}</div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
