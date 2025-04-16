import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     modalOpen : false,
     peopleModal : false,
     calendar : false,
     calendar2 : false ,
     calendar3 : false ,
     type : 'n',
     departure : '' , // 출발지
     arrive : '', // 도착지
     multiDepart : '',
     multiArr : '',
     adultNum : 1 , // 성인 수
     pediatricNum : 0,    // 소아 수 
     babyNum : 0 , // 유아 수
     total : 0,
     startDate : '',  // 출발일
     startDate2 : '' , 
     endDate : '', // 도착일
     countryList : [],
     calendarType : ''
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setCalendarType(state, action){
            state.countryList = action.payload; 
        },
        setCountryList(state, action){
            state.countryList = action.payload;           
        },
        setModalOpen(state, action){ 
            state.modalOpen = action.payload;
        },
        setPeopleModal(state, action){ 
            state.peopleModal = action.payload;
        },
        setCalendar(state, action){ 
            state.calendar = action.payload;
        },
        setCalendar2(state, action){ 
            state.calendar2 = action.payload;
        },
        setCalendar3(state, action){ 
            state.calendar3 = action.payload;
        },
        setAdultNum(state, action){
            state.adultNum = action.payload;
            
        },setPediatricNum(state, action){
            state.pediatricNum = action.payload;
        },setBabyNum(state, action){
            state.babyNum = action.payload;
        },setTotal(state, action){
            state.total = action.payload;
        },
        setType(state, action){
            state.type = action.payload;
        },
        setDeparture(state, action){
            state.departure = action.payload;
        },
        setArrive(state, action){
            state.arrive = action.payload;
        },
        setStartDate(state, action){
            state.startDate = action.payload;
        },setStartDate2(){

        },setEndDate(state, action){
            state.endDate = action.payload;
        },
         // 🎯 여기에 초기화 액션 추가
         resetSearch: () => initialState
    },
})

export const {setModalOpen ,setPeopleModal ,setCalendar, setCalendar2,setCalendar3,
    setAdultNum,  setPediatricNum,  setBabyNum, setTotal,setDeparture,setArrive,
    setStartDate,setEndDate,setType, resetSearch,setCountryList,setCalendarType
 } = searchSlice.actions
export default searchSlice.reducer