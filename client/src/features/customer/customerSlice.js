import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    customerInfo: {
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
        setCustomerInfo: (state, action) => {
            state.customerInfo = action.payload;
        },
        updateCustomerField: (state, action) => {
            const { field, value } = action.payload;
            state.customerInfo[field] = value;
        },
        updateMarketingConsent: (state, action) => {
            state.customerInfo.marketingConsent = {
                ...state.customerInfo.marketingConsent,
                ...action.payload,
            };
        },
        logoutCustomer: (state) => {
            state.customerInfo = initialState.customerInfo;
            state.isLoggedIn = false;
        },
    },
});

export const {
    setCustomerInfo,
    updateCustomerField,
    updateMarketingConsent,
    logoutCustomer,
} = customerSlice.actions;

export default customerSlice.reducer;