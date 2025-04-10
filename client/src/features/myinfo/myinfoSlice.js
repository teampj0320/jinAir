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
        zipCode: '',
        address: '',
        addressDetail: '',
        marketingConsent: {
            email: false,
            sms: false,
            app: false,
        },
        profileImage: '',
    },
    isLoggedIn: false, // 로그인 전
};


const customerSlice = createSlice({
    name: 'customer',
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
        updateMarketing: (state, action) => {
            state.myinfo.marketingConsent = {
                ...state.myinfo.marketingConsent,
                ...action.payload,
            };
        },
        deleteAccount: (state) => {
            state.myinfo = initialState.myinfo; 
            state.isLoggedIn = false;                       
        },
    },
});

export const {
    setMyInfo,
    updateMyInfoField,
    updateMarketing,
    deleteAccount,
} = customerSlice.actions;

export default myinfoSlice.reducer;