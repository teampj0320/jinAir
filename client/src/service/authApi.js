import { setIsLoggedIn, setLoginReset, setIsLogout } from '../features/auth/authSlice.js';
import { axiosPost } from'./api.js';

/***************************** 
 * 로그인 
*****************************/
export const getLogin = (formData) =>async(dispatch) =>{
  const url = `http://localhost:9000/member/login`;
  const data = formData;

  const loginResult = await axiosPost({url, data});
  
  const cnt = loginResult.cnt;

  if(cnt){
    localStorage.setItem("token",loginResult.token);
    localStorage.setItem("user_id",formData.id);
    dispatch(setIsLoggedIn({cnt}))
  }else{
    dispatch(setIsLoggedIn({cnt}))
  }
};

/***************************** 
 * 로그인 리셋
*****************************/
export const getLoginResest = () => async(dispatch) =>{
  dispatch(setLoginReset());
};

/***************************** 
 * 로그아웃
*****************************/
export const getLogout = () => async(dispatch) =>{
  localStorage.clear();
  dispatch(setIsLogout());
};