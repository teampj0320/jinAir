import { axiosPost } from './api.js';
import { setOnewayList } from '../features/booking/bookingSlice.js';

/***************************** 
 * 항공권 선택 페이지
 * 예약 가능 항공권 조회
*****************************/
export const getOnewayList = (departure, arrive, startDate) => async(dispatch) => {
    // const id = localStorage.getItem("user_id");
    // const url = 'http://43.200.163.45:9000/cart/items';
    // const data = { "id": id };

    // const result = await axiosPost({url, data});

    // dispatch(setCartList({result}));
    // dispatch(setTotalPrice({result}));

    const url = 'http://localhost:9000/booking/availability';
    const data = { "departure": departure, "arrive": arrive, "startDate": startDate };
    
    const result = await axiosPost({url, data});

    dispatch(setOnewayList({result}));
}