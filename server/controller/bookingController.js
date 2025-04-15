import * as repository from '../repository/bookingRepository.js';

/***************************** 
 * 항공권 선택 페이지
 * 예약 가능 항공권 조회
*****************************/
export const getOnewayList = async(req, res) => {
    const result = await repository.getOnewayList(req.body);
    res.json(result);
    res.end();
}