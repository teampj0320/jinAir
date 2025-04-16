import React, { useEffect } from 'react';
import { getMyCoupon } from '../../service/myinfoApi.js';
import { useDispatch, useSelector } from "react-redux";


export default function MyCoupon() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMyCoupon());
    }, [])

    const MyCouponList = useSelector((state) => state.myinfo.mycoupon);


    return (
        <div className='r-common layer-contents'>
            <div className='layer-header'>
                <p className='layer-header-title'>사용 가능 쿠폰 내역</p>
                <div className="border-line" />
            </div> {/* 타이틀 끝 */}
            <ul className='coupon-list'>
                {
                    MyCouponList && MyCouponList.map((coupon) =>
                        <li className='coupon-wrap'>
                            <div className='coupon-top'>
                                <span className='f16'>{coupon.coupon_name}</span>
                            </div>
                            <div className='coupon-contents'>
                                <p className='coupon-name' >[APP 전용] 국내선 1천원 깜짝쿠폰</p>
                                <p className='f12 w300'>[사용 유효기간] 2025.04.14(월) ~ 2099.04.23(수)</p>
                                <p className='f12 w300'>[사용가능 구간] 왕복, 편도</p>
                            </div>
                            <div className='coupon-bottom'>
                                <b className='f18'>KRW 1,000</b>
                                <p className='f14'>사용가능</p>
                            </div>
                        </li>

                    )
                }
            </ul>
        </div>



    );
}

