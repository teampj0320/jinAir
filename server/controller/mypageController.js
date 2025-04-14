import * as repository from '../repository/mypageRepository.js';

export const getMyInfo = async(req, res) => {
    const result = await repository.getMyInfo(req.body); 
    res.json(result);
    res.end();
};

export const updateMyInfo = async (req, res) => {
    const result = await repository.updateMyInfo(req.body);
    res.json({ success: true, updatedInfo: result });
  };


  export const checkPwd = async (req, res) => {
    const { id, password } = req.body;
    const result = await repository.checkPwd(id, password);
    res.json({ match: result });
  };

  export const getMyRes = async (req, res) => {
    const result = await repository.getMyRes(req.body); 
    res.json(result);
    res.end();
  };