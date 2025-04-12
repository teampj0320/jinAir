import { createSlice } from '@reduxjs/toolkit'

const initialState = {
     modalOpen : false,
     peopleModal : false,
     calendar : false,
     calendar2 : false ,
     type : 'n',
     departure : '' ,
     arrive : '',
     multiDepart : '',
     multiArr : '',
     adultNum : 1 , 
     pediatricNum : 0,   
     babyNum : 0 , 
     total : 0,
     startDate : '',
     startDate2 : '' , 
     endDate : '',
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
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
        setMultiDepart(){

        },
        setMultiArr(){

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

export const {setModalOpen ,setPeopleModal ,setCalendar, setCalendar2,
    setAdultNum,  setPediatricNum,  setBabyNum, setTotal,setDeparture,setArrive,
    setStartDate,setEndDate,setType, resetSearch
 } = searchSlice.actions
export default searchSlice.reducer