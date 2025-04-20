import * as repository from '../repository/adminRepository.js';
import jwt from 'jsonwebtoken';

/***************************
 * 어드민 로그인
 ***************************/
export const getAdminLogin = async(req, res) => {
    let result = await repository.getAdminLogin(req.body);
    if(result.cnt === 1){
      const token = jwt.sign({'admin_id':req.body.id},'exhEDqh7HG');
      result = {...result, "token":token};
    }
    res.json(result);
    res.end();
}


/***************************
 * 비행 리스트 조회
 ***************************/
export const getFlightList = async(req, res) =>{
  const result = await repository.getFlightList(req.body);
  res.json(result);
  res.end();
};

/***************************
 * 항공권 등록 fnum 조회
 ***************************/
export const getFnum = async(req, res) =>{
  const result = await repository.getFnum(req.body);
  const num = Number(result.slice(2,5)) + 1;
  const updateNum = `LJ${num}`;
  res.json(updateNum);
  res.end();
};

/***************************
 * 항공권 등록
 ***************************/
export const setFlightRegister = async(req, res) =>{
  const {Departure_location, Arrive_location, Departure_date,Departure_time, 
          Arrive_date, Arrive_time} = req.body;
  const fnum = req.body.fnum;  
  const pnum = req.body.pnum;  
  const basic_price = req.body.basic_price;  
  const premium_price = req.body.premium_price;  

  const nameAndCode = (value) =>{
    const name = value.split('(')[0].trim();
    const code = value.match(/\(([^)]+)\)/)?.[1] ?? '';
    return {name, code};
  };  
  
  const dateAndTime = (dateStr, timeStr) =>{
    const date = dateStr.split('(')[0].replace(/\./g,'-');
    return `${date} ${timeStr}`
  };  

  const {name : departure_location, code:d_acode} = nameAndCode(Departure_location);
  const {name : arrive_location, code:a_acode} = nameAndCode(Arrive_location);

  const departure_date = dateAndTime(Departure_date, Departure_time);
  const arrive_date = dateAndTime(Arrive_date, Arrive_time);

  const data = { fnum, pnum, departure_location, d_acode, arrive_location, a_acode,
    departure_date, arrive_date, basic_price, premium_price};

  const result = await repository.setFlightRegister(data);
  res.json(result);
  res.end();
};


/***************************
 * 항공권 삭제
 ***************************/
export const deleteFlight = async(req, res) =>{
  const result = await repository.deleteFlight(req.body);
  res.json(result);
  res.end();
};

/***************************
 * 항공권 검색
 ***************************/
export const getSearchFlightList = async(req, res) =>{
  const result = await repository.getsearchflightlist(req.body);
  res.json(result);
  res.end();
}



/***************************
 * 공지사항 리스트 조회
 ***************************/
export const getNoticeList = async(req, res) =>{
  const result = await repository.getNoticeList(req.body);
  res.json(result);
  res.end();
}