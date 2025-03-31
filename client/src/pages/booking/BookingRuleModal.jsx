import React from 'react';
import { IoIosClose } from "react-icons/io";

export default function BookingRuleModal() {
    return (
        <div className='booking-rule-modal-wrap'>
            <div>
                <span>운임규정</span>
                <span><IoIosClose /></span>
            </div>
        </div>
    );
}