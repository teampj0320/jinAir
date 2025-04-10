import * as repository from '../repository/mypageRepository.js';

export const getMyInfo = async(req, res) => {
    const result = await repository.getMyInfo(req.body); 
    res.json(result);
    res.end();
};