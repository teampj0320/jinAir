import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    onewayList : [],
};

const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        // 예약 가능 항공권 조회(출발지, 도착지 기준)
        setOnewayList(state, action) {
            state.onewayList = action.payload.result;
        },
    },
});

export const {
    setOnewayList
} = bookingSlice.actions;

export default bookingSlice.reducer;