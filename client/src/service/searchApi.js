import {setModalOpen, setPeopleModal ,setCalendar, setCalendar2,
    setAdultNum,  setPediatricNum,  setBabyNum, setTotal,
    setDeparture,setArrive,  setStartDate,setEndDate,setType
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

export const getDeparture = (country) => (dispatch) => {
    dispatch(setDeparture(country));
}
export const getArrive = (country) => (dispatch) => {
    dispatch(setArrive(country));
}

export const getStartDate = (date) => (dispatch) => {
    dispatch(setStartDate(date));
}
export const getEndDate = (date) => (dispatch) => {
    dispatch(setEndDate(date));
}

export const getType = (type) => (dispatch) => {
    dispatch(setType(type));
}