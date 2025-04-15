
import { axiosGet, axiosPost } from './api';

import {  setMyInfo,
        setMyInterest,
} from  '../features/myinfo/myinfoSlice.js';

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


// 관심지역 저장

export const updateInterest = (checkList) => async (dispatch) => {
    const url = 'http://localhost:9000/mypage/updateInterest';
    const id = localStorage.getItem("user_id");

    const result = await axiosPost({ url, data: { id, checkList } });

    if (result) {
        dispatch(setMyInterest(checkList));
    }
};


// 관심지역 불러오기
export const getInterest = () => async (dispatch) => {
    const url = 'http://localhost:9000/mypage/getInterest';
    const id = localStorage.getItem("user_id");

    const result = await axiosPost({ url, data: { id } });

    if (result && result[0]?.interest_area) {
        dispatch(setMyInterest(result[0].interest_area));
    } else {
        dispatch(setMyInterest([]));
    }
};
