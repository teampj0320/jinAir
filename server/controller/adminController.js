import * as repository from '../repository/adminRepository.js';

/***************************
 * 비행 리스트 조회
 ***************************/
export const getFlightList = async(req, res) =>{
  const result = await repository.getFlightList(req.body);
  // console.log('컨트롤러 result>> ', result);
  res.json(result);
  res.end();
};