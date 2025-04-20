import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  total_payment_price: 0, 
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setTotalPaymentPrice(state, action) {
      state.total_payment_price = action.payload;
    },
  },
});

export const { setTotalPaymentPrice } = paymentSlice.actions;

export default paymentSlice.reducer;
