import { useState } from "react";


/***************************** 
 * 로그인 유효성 체크
*****************************/
export const validateLogin = (refs, msgRef) => {

  if(refs.idRef.current.value === ''){
    msgRef.current.style.setProperty('color','red');
    refs.idRef.current.focus();
    return {result:false, msg: '아이디를 입력해주세요.'};
  }else if(refs.pwdRef.current.value === ''){
    msgRef.current.style.setProperty('color','red');
    refs.pwdRef.current.focus();
    return {result: false, msg:'비밀번호를 입력해주세요.'}
  }else{
    return {result:true, msg:''};
  }
};

/***************************** 
 * 아이디 찾기 유효성 체크
*****************************/
export const validateFindUseInfo = (refs, msgRef) =>{
  if(refs.nameRef.current.value === ''){
    msgRef.current.style.setProperty('color','red');
    refs.nameRef.current.focus();
    return {result: false, msg:'이름을 입력해주세요'}
  }else if(refs.birthRef.current.value === ''){
    msgRef.current.style.setProperty('color','red');
    refs.birthRef.current.focus();
    return {result: false, msg:'생년월일을 입력해주세요.'};
  }else{
    return { result: true, msg: '' };
  }
};

