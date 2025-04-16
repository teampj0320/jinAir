import * as repository from '../repository/mypageRepository.js';


/************************************
 *       회원정보 불러오기
************************************/
export const getMyInfo = async(req, res) => {
    const result = await repository.getMyInfo(req.body); 
    res.json(result);
    res.end();
};

/************************************
 *       회원정보 수정
************************************/

export const updateMyInfo = async (req, res) => {
    const result = await repository.updateMyInfo(req.body);
    res.json({ success: true, updatedInfo: result });
  };


/************************************
 *       비밀번호 체크 
************************************/
  export const checkPwd = async (req, res) => {
    const { id, password } = req.body;
    const result = await repository.checkPwd(id, password);
    res.json({ match: result });
  };

  /************************************
 *      나의 예약 불러오기
************************************/

  export const getMyRes = async (req, res) => {
    const result = await repository.getMyRes(req.body); 
    res.json(result);
    res.end();
  };


  /************************************
 *       관심 지역 불러오기
************************************/
export const getInterest = async(req, res) => {
  const result = await repository.getInterest(req.body); 
  res.json(result);
  res.end();
};


/************************************
 *        관심지역 추가하기
************************************/


export const updateInterest = async(req, res) => {
  const result = await repository.updateInterest(req.body); 
  res.json(result);
  res.end();
};