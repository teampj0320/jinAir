// import { useState } from "react";


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
 * 아이디 / 비밀번호 찾기 유효성 체크
*****************************/
export const validateFindUseInfo = (refs, msgRefs, item, gender, active, cactive) =>{
    const validateArr = [];
    if(item === 'pwd' || item === 'userInfo'){
      validateArr.push({ 
        key: 'id', 
        ref:refs.idRef.current, 
        msgSty:msgRefs.idMsgRef.current,
        msg:'아이디를 입력해주세요',
        value:refs.idRef.current.value
    })}

    validateArr.push(
      { key: 'name', 
        ref:refs.nameRef.current, 
        msgSty:msgRefs.nameMsgRef.current,
        msg:'이름을 입력해주세요',
        value:refs.nameRef.current.value},
      { key: 'gender', 
        ref:refs.genderMaleRef.current, 
        msgSty:msgRefs.genderMsgRef.current,
        msg:'성별을 입력해주세요',
        value:gender},
      { key: 'birth',  
        ref:refs.birthRef.current, 
        msgSty:msgRefs.birthMsgRef.current,
        msg:'생년월일을 입력해주세요',
        value:refs.birthRef.current.value},
      { key: 'email',  
        ref:refs.emailRef.current, 
        msgSty:msgRefs.emailMsgRef.current,
        msg:'이메일을 입력해주세요',
        value:refs.emailRef.current.value}
      )  
 
    for(let arr of validateArr){
      if(!arr.value || arr.value.trim() === ''){
        arr.ref.focus();
        return {result: false, msg:arr.msg, key:arr.key}
    }}
    
    if(!active){
      return {result: false, msg:'인증번호를 요청해주세요', key:'req-auth'}
    }

    const authCode = refs.authCodeRef.current.value;
    if(!authCode || authCode.trim() === ''){
      refs.authCodeRef.current.focus();
      return {result: false, msg:'인증번호를 입력해주세요', key:'auth-code'}
    }     
    
    if(!cactive){
      return {result:false, msg:'인증하기 버튼을 클릭해주세요', key:'auth-btn'};
    }
  return { result: true, msg: '' , key:'' };
};



