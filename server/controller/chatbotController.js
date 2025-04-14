import * as repository from '../repository/chatbotRepository.js';

// 나라 데이터 가져오기
export const getCountry = async(req, res) =>{
  let result = await repository.getCountry(req.body);
  res.json(result);
  res.end();
};