import { axiosPost } from './api.js';
import { setOnewayList, setDcode, setAcode } from '../features/booking/bookingSlice.js';

/***************************** 
 * 항공권 선택 페이지
 * 예약 가능 항공권 조회
*****************************/
export const getOnewayList = (departure, arrive, startDate) => async(dispatch) => {
    const url = 'http://localhost:9000/booking/availability';
    const data = { "departure": departure, "arrive": arrive, "startDate": startDate };
    
    const result = await axiosPost({url, data});
    const dcode = result.A_acode;
    const acode = result.D_acode;

    dispatch(setOnewayList({result}));
    dispatch(setDcode({dcode}));
    dispatch(setAcode({acode}));
}