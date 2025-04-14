
import { axiosGet, axiosPost } from './api';

import {  setMyInfo  } from  '../features/myinfo/myinfoSlice.js';

// 회원 정보 불러오기
export const getMyInfo = (data) => async (dispatch) => {
    const url = 'http://localhost:9000/mypage/getMyInfo';

    const getMyInfoResult = await axiosPost({url, data});
    const result_rows = getMyInfoResult.result_rows;

    if (result_rows) {
        // localStorage.setItem("user_id", data.id);
        // 로그인 인증시 id를 찾는걸로 바꿔야함
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