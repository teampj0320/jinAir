import * as repository from '../repository/mypageRepository.js';

/* 회원정보 가져오기 */
export const getMyInfo = async(req, res) => {
    const result = await repository.getMyInfo(req.body); 
    res.json(result);
    res.end();
};
/* 회원정보 업데이트 */
export const updateMyInfo = async (req, res) => {
    const result = await repository.updateMyInfo(req.body);
    res.json({ success: true, updatedInfo: result });
  };

/* 비밀번호 확인 */
  export const checkPwd = async (req, res) => {
    const { id, password } = req.body;
    const result = await repository.checkPwd(id, password);
    res.json({ match: result });
  };


  /* 나의 예약 가져오기 */
  export const getMyRes = async (req, res) => {
    const result = await repository.getMyInfo(req.body); 
    res.json(result);
    res.end();
  };