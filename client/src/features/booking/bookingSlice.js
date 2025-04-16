import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    onewayList : [],
    dcode: '',
    acode: '',
};

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        // 예약 가능 항공권 조회(출발지, 도착지 기준)
        setOnewayList(state, action) {
            state.onewayList = action.payload.result;
        },

        // 출발 공항 코드
        setDcode(state, action) {
            state.dcode = action.payload.dcode;
        },
        
        // 도착 공항 코드
        setAcode(state, action) {
            state.acode = action.payload.acode;
        }
    },
});

export const {
    setOnewayList,
    setDcode, setAcode
} = bookingSlice.actions;

export default bookingSlice.reducer;