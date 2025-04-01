import {setModalOpen, setPeopleModal ,setCalendar, setCalendar2,
    setAdultNum,  setPediatricNum,  setBabyNum, setTotal
  } from "../features/search/searchSlice.js";

export const getModalOpen = (data) => (dispatch) => {
    data === true && dispatch(setModalOpen(data));
    data === false && dispatch(setModalOpen(data));
}
export const getPeopleModal = (data) => (dispatch) => {
    data === true && dispatch(setPeopleModal(data));
    data === false && dispatch(setPeopleModal(data));
}
export const getCalendar = (data) => (dispatch) => {
    data === true && dispatch(setCalendar(data));
    data === false && dispatch(setCalendar(data));
}
export const getCalendar2 = (data) => (dispatch) => {
    data === true && dispatch(setCalendar2(data));
    data === false && dispatch(setCalendar2(data));
}

export const getAdultNum = (num) => (dispatch) => {
    dispatch(setAdultNum(num));
}
export const getPediatricNum = (num) => (dispatch) => {
    dispatch(setPediatricNum(num));
}
export const getBabyNum = (num) => (dispatch) => {
    dispatch(setBabyNum(num));
}
export const getTotal = (num) => (dispatch) => {
    dispatch(setTotal(num));
}