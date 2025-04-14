import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    myinfo: {
        id: '',
        name: '',
        nameKor: { last: '', first: '' },
        nameEng: { last: '', first: '' },
        birth: '',
        phone: '',
        email: '',
        nationality: '',
        residence: '',
        zipcode: '',
        address: '',
        address_detail: '',
        marketingConsent: {
            email: false,
            sms: false,
            app: false,
        },
        profile_img: '',
    },
    isLoggedIn: false, // 로그인 전
};


const myinfoSlice = createSlice({
    name: 'myinfo',
    initialState,
    reducers: {
        setMyInfo: (state, action) => {
            state.myinfo = action.payload;
            // state.isLoggedIn = true;
        },
        updateMyInfoField: (state, action) => {
            const { field, value } = action.payload;
            state.myinfo[field] = value;
        },
        // updateMarketing: (state, action) => {
        //     state.myinfo.marketingConsent = {
        //         ...state.myinfo.marketingConsent,
        //         ...action.payload,
        //     };
        // },
        deleteAccount: (state) => {
            state.myinfo = initialState.myinfo; 
            state.isLoggedIn = false;                       
        },
    },
});

export const {
    setMyInfo,
    updateMyInfoField,
    deleteAccount,
} = myinfoSlice.actions;

export default myinfoSlice.reducer;