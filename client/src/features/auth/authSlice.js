import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn : false,
  isError : false,
}

export const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers:{
    setIsLoggedIn(state, action){
      console.log('action -->>', action.payload.cnt);
      if(action.payload.cnt){
        state.isLoggedIn = true;  
      }else{
        state.isError =true;
      }
    },
    setLoginReset(state){
      state.isError = false;
    }, 
    setIsLogout(state){
      state.isLoggedIn = false;
    }
  },
});

export const { setIsLoggedIn, setLoginReset, setIsLogout} = authSlice.actions

export default authSlice.reducer
/* 
 * Redux Toolkit : "자동화된 switch-case reducer"
 * 내부적으로 switch-case 형태의 reducer로 실행되게 만들어줌
*/