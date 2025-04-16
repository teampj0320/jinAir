import { createSlice } from '@reduxjs/toolkit';
import MyCoupon from '../../component/mypage/MyCoupon';

const initialState = {
    myinfo: {
        phone: '',
        email: '',
        nationality: '',
        residence: '',
        zipcode: '',
        address: '',
        address_detail: '',
        profile_img: '',
    },
    isLoggedIn: false,
    myinterest: [],
    mycoupon:[]
};


const myinfoSlice = createSlice({
    name: 'myinfo',
    initialState,
    reducers: {
        setMyInfo: (state, action) => {
            state.myinfo = action.payload;
        },
        // deleteAccount: (state) => {
        //     state.myinfo = initialState.myinfo; 
        //     state.isLoggedIn = false;                       
        // },
        setMyInterest: (state, action) => { 
            state.myinterest = action.payload; 
        },
        toggleInterestItem: (state, action) => {
            const value = action.payload;
            const exists = state.myinterest.includes(value);

            if (exists) {
                state.myinterest = state.myinterest.filter(item => item !== value);
            } else if (state.myinterest.length < 3) {
                state.myinterest.push(value);
            } else {
                alert("최대 3개까지 선택할 수 있습니다.");
            }
        },
        setMyCoupon: (state, action) => { 
            state.mycoupon = action.payload; 
        },

    },
});

export const {
    setMyInfo,
    setMyInterest,
    toggleInterestItem,
    setMyCoupon
} = myinfoSlice.actions;

export default myinfoSlice.reducer;