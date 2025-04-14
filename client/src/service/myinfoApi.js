
import { axiosGet, axiosPost } from './api';

import {  setMyInfo,
    updateCustomerField,
    updateMarketingConsent,
    logoutCustomer } from  '../features/myinfo/myinfoSlice.js';

// 회원 정보 불러오기
export const getMyInfo = (data) => async (dispatch) => {
    const url = 'http://localhost:9000/mypage/getMyInfo';
    const id = localStorage.getItem("user_id");

    const getMyInfoResult = await axiosPost({url, data:{id}});

    const result_rows = getMyInfoResult.result_rows;

    if (result_rows) {
        dispatch(setMyInfo( result_rows[0])); 
    };

}




// 회원정보 업데이트
export const updateMyInfo = (formData) => async (dispatch) => {
    const url = 'http://localhost:9000/mypage/updateMyInfo';
    const result = await axiosPost({ url, data: formData });
    if (result.success) {
      dispatch(setMyInfo(result.updatedInfo)); 
    }
  };