import React from 'react';

export default function BookingReserveAlert({text, setAlertOpen}) {
    return (
        <div className='booking-seat-alert'>
            <p>{text}</p>
            <button onClick={() => {setAlertOpen(false)}}>확인</button>
        </div>
    );
}