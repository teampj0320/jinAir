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

/***************************** 
 * 항공권 선택 페이지
 * 선택한 날짜 최저가 
*****************************/
export const getLowPrice = async(req, res) => {
    const result = await repository.getLowPrice(req.body);
    res.json(result);
    res.end();
}