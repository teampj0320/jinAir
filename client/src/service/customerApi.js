// src/services/customerApi.js
import { axiosGet, axiosPost } from './api';

import {  setMyInfo,
    updateCustomerField,
    updateMarketingConsent,
    logoutCustomer } from  '../features/customer/customerSlice.js';

// 회원 정보 조회
export const getMyInfo =(formData) = async (dispatch) => {
    const url = 'http://localhost:9000/mypage/getMyInfo';
    const data = formData;

    const getMyInfoResult = await axiosPost({url, data});
    const result_rows = getMyInfoResult.result_rows;

    if (result_rows) {
        localStorage.setItem("user_id", formData.id);
        dispatch(setMyInfo({ result_rows })); 
    } else {
        // 실패
        dispatch(setMyInfo({ result_rows })); 

    };





}