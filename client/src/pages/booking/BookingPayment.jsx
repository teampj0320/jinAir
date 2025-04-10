import React from 'react';
import BookingStep from '../../component/booking/BookingStep.jsx';

export default function BookingPayment() {
    return (
        <div className='booking-payment-wrap'>
            <BookingStep text={'payment'} /> {/* 항공권 예약 ~ 결제 페이지 상단탭 */}
        </div>

        // 해당 페이지 컨텐츠 부분 배경 색상 : background-color: rgb(249, 249, 249);
    );
}