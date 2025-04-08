// src/services/customerApi.js
import { axiosGet, axiosPut } from './api';
import {  setCustomerInfo,
    updateCustomerField,
    updateMarketingConsent,
    logoutCustomer } from  '../features/customer/customerSlice.js';

// 회원 정보 조회
export const getCustomerInfo = async (userId) => {
    return await axiosGet({ url: `/api/customer/${userId}` });
};

// 회원 정보 수정
export const updateCustomerInfo = async (data) => {
    return await axiosPut({ url: `/api/customer/update`, data });
};
