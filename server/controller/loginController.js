import React from 'react';
import * as repository from '../repository/loginRepository.js';
import jwt from 'jsonwebtoken';
import {sendMail} from'../utils/sendMail.js';

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


/***************************** 
 * 인증번호 이메일 발송
*****************************/
export const getAuthCode = async(req, res) =>{
  const { name, email} = req.body;

  const authCode = Math.floor(Math.random() * 1000000).toString();
  console.log('authCode ->>',authCode);
  
  const subject = '[JinAir] 이메일 인증번호가 도착하였습니다.';
  const message = `발급된 인증번호는 [ ${authCode} ]입니다.`;
  
  try {
    const result = await sendMail(name, email, subject, message);
    if(result === 'success'){
      res.status(200).json({success : true, code: authCode})
    }else{
      res.status(500).json({success: false, error: result})  
    }
  } catch (error) {
    console.log('서버오류',error);
  }
};


/***************************** 
 * 아이디 찾기
*****************************/
export const getFindId = async(req, res) =>{
  const kname_first = req.body.name.slice(0,1);
  const kname_last = req.body.name.slice(1,3);
  const formData = {...req.body, kname_first,kname_last};

  const result = await repository.getFindId(formData);
  res.json(result);
  res.end();
};


/***************************** 
 * 비밀번호 찾기
*****************************/
export const getFindPwd = async(req, res) =>{
    const { id, name, email } = req.body;

    const kname_first = name.slice(0,1);
    const kname_last = name.slice(1,3);
    const formData = {...req.body, kname_first,kname_last};

    const findResult= await repository.getFindPwd(formData);

    if(findResult[0]?.cnt){
      const updateResult= await repository.updatePwd(formData);
      return res.json({
                success: true,
                data: {
                  password: updateResult.password,
                  findResult
                }        
          });
    }else{
      res.json({success: false,
                data: {findResult}});
      res.end();
    }
};