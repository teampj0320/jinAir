import * as repository from '../repository/chatbotRepository.js';

// 나라 데이터 가져오기
export const getCountry = async(req, res) =>{
  let result = await repository.getCountry(req.body);
  res.json(result);
  res.end();
};

// 비행 스케쥴 있는지 조회
export const searchSchedule = async(req, res) =>{
  // console.log('하온테스트',req.body);  
  let result = await repository.searchSchedule(req.body);
  res.json(result);
  res.end();
};

// 비행 스케쥴 정보가져오기
export const getSchedule = async(req, res) =>{
  // console.log('하온테스트',req.body);  
  let result = await repository.getSchedule(req.body);
  res.json(result);
  res.end();
};

// 비행 스케쥴 있는지 조회 airplane
export const searchAirplane = async(req, res) =>{
  // console.log('하온테스트',req.body);  
  let result = await repository.searchAirplane(req.body);
  res.json(result);
  res.end();
};

// 당월 최저가 가져오기 출발지 도착지 가격
export const searchMonthCheap = async(req, res) =>{
  // console.log('하온테스트',req.body);  
  let result = await repository.searchMonthCheap(req.body);
  res.json(result);
  res.end();
};


// 예약번호 아이디로 예약조회
export const searchReservation = async(req, res) =>{
  // console.log('하온테스트',req.body);  
  let result = await repository.searchReservation(req.body);
  res.json(result);
  res.end();
};
