import React, { useState } from 'react';
import SignupTerms from '../component/member/SignupTerms.jsx';
import SignupAuth from '../component/member/SignupAuth.jsx';
import SignupUserInfo from '../component/member/SignupUserInfo.jsx';
import SignupSuccess from '../component/member/SignupSuccess.jsx';
import { useParams } from 'react-router-dom';

export default function SignupFunnel() {
  const params = useParams();
  const [ registerData, setRegisterData ] = useState([]);
  const [ step, setStep ] = useState(params.part);

  /* 회원정보 입력*/
  const handleTerms = (data) =>{
    if(data === true ) { setStep('auth');}
  };
  /* 본인인증*/
  const handleSignAuth = (data) =>{
    // const { name, value } = data;
    // setRegisterData(prev =>({...prev, [name]:value}));
    setStep("userInfo")
  };
  
  /* 회원정보 입력*/
  const handleUserInfo = (data)=>{

    setStep("signupSuccess")
  };

console.log('registerData1차 확인',registerData);
console.log('step 확인',step);


  return (
    <div>
      {step === 'terms'    && <SignupTerms onNext={handleTerms}/>}
      {step === 'auth'     && <SignupAuth onNext={handleSignAuth} />}
      {step === 'userInfo' && <SignupUserInfo onNext={handleUserInfo}/>}
      {step === 'signupSuccess' && <SignupSuccess onNext={handleUserInfo}/>}
    </div>
  );
}

