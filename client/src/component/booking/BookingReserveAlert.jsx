import React from 'react';

export default function BookingReserveAlert({text, setModalIsOpen}) {
    return (
        <div className='booking-seat-alert'>
            <p>{text}</p>
            <button onClick={() => {setModalIsOpen(false)}}>확인</button>
        </div>
    );
}