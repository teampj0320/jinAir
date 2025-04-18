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
    mycoupon:[],
    couponcount:0
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
                // 선택한 항목이면 제거
                state.myinterest = state.myinterest.filter(item => item !== value);
            } else if (state.myinterest.length < 3) {
                // 3개까지만 추가
                state.myinterest.push(value);
            } else {
                alert("최대 3개까지 선택할 수 있습니다.");
            }
        },
        setMyCoupon: (state, action) => { 
            state.mycoupon = action.payload; 
        },
        setCouponCount: (state, action) => { 
            state.couponcount = action.payload; 
        },

    },
});

export const {
    setMyInfo,
    setMyInterest,
    toggleInterestItem,
    setMyCoupon,
    setCouponCount
} = myinfoSlice.actions;

export default myinfoSlice.reducer;