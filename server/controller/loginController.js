import React from 'react';
import * as repository from '../repository/loginRepository.js';
import jwt from 'jsonwebtoken';


/***************************** 
 * 로그인 
*****************************/
export const checkLogin = async(req, res) =>{
  let result = await repository.checkLogin(req.body);
  if(result.cnt === 1){
    const token = jwt.sign({"userId":req.body.id},'xIP999DfLP');
    result = {...result, "token":token};
   }
  res.json(result);
  res.end();
};

