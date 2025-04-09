import React, { useEffect, useRef, useState } from 'react';
import { validateFindUseInfo } from '../../utils/authValidate';

export default function AuthUser({item}) {
  const getInitialState = (item) =>{
    switch (item) {
      case 'nomal':
        return {'name':'', 'gender':'', 'birth':'', 'email':'', 'authCode':''};
      case 'pwd' :
        return {'id':'','name':'', 'gender':'', 'birth':'', 'email':'', 'authCode':''};
      case 'userInfo' :
        return {'id':'', 'name':'', 'gender':'', 'birth':'', 'password':'', 'cpassword':''};   
      default: return {};  
    }
  };
  const [ formData, setFormData ] = useState(getInitialState(item));
  const [ msgResult, setMsgResult ] = useState('');
  const [ msgCheck, setMsgCheck ] = useState('');
  const [ selectedGender, setSelectedGender ] = useState(null);
  const [ active, setActive ] = useState(false);
  const [ codeActive, setCodeActive ] = useState(false);

  const refs = {'idRef' : useRef(null),
                'nameRef' : useRef(null),
                'genderMaleRef' : useRef(null),
                'genderFemaleRef' : useRef(null),
                'birthRef' : useRef(null),
                'emailRef' : useRef(null),
                'authCodeRef': useRef(null),
                'phoneRef' : useRef(null),
                'pwdRef' : useRef(null),
                'cpwdRef' : useRef(null),};

  const msgRefs = {"idMsgRef": useRef(null),
                    'nameMsgRef' : useRef(null),
                    'genderMsgRef' : useRef(null),
                    'birthMsgRef' : useRef(null),
                    'emailMsgRef' : useRef(null),
                    'authCodeMsgRef': useRef(null),
                    'phoneMsgRef' : useRef(null),
                    'pwdMsgRef' : useRef(null),
                    'cpwdMsgRef' : useRef(null),};
 
                    useEffect(() =>{
    setFormData(getInitialState(item));
    setSelectedGender(null);
    setMsgResult('');
    setMsgCheck('');
  },[item]);

  /* 성별 체크 함수 */  
  const handleGenderClick  = (gender) =>{
    setSelectedGender(gender);
    const value = gender === 'male' ?'M':'F';
    setFormData((prev)=>({...prev, ['gender']: value}));
    if (msgCheck === 'gender') {
      setMsgResult('');
      setMsgCheck('');
    }
  }

  /* input 입력값 변동 함수 */  
  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({...formData, [name]:value });
    setMsgResult('');
  };
  
  /* 인증번호 이메일 전송 함수 */  
  const handleReqAuthCode = () =>{
    alert('fdgdf');
    setActive(true);
  };
  
  /* 인증번호 확인 함수 */  
  const handleConform = () =>{
    alert('2222');
    setCodeActive(true);
    setMsgResult('');
  };
  
  /* submit 함수 */  
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('formData.gender',formData.gender);
    const {result, msg, key} = validateFindUseInfo(refs, msgRefs, item, formData.gender, active, codeActive);
    
    if(result){
      alert('통');
    }else{
      if(msg !== ''){
        setMsgResult(msg);
        setMsgCheck(key);
      }
    }
  };

 

  return (
    <form onSubmit={handleSubmit}>
        {(item === 'pwd' || item === 'userInfo') && (
          <>
            <li>
              <div className='auth-find-pwd'>
                <input type="text" 
                       className='id'
                       name='id'
                       value={formData.id}
                       ref={refs.idRef}
                       onChange={handleChange}
                       placeholder='아이디(이메일계정)'/>
              </div>
            </li>
            <div className={`validate-text ${msgCheck === 'id' ? 'error' : ''}`}  ref={msgRefs.idMsgRef} >
             {msgCheck === 'id'  && msgResult}
            </div>
          </>
        )}
       <li>
          <div className='find-basic-info'>
            <div>
              <input type="text" 
                     name='name'
                     className='name'
                     value={formData.name}
                     ref={refs.nameRef}
                     onChange={handleChange}
                     placeholder='이름'/>
            </div>
            <div className='info-gender'> 
              <button type='button' 
                      ref={refs.genderMaleRef}
                      className={`gender ${selectedGender === 'male' ? 'info-gender-active':''}`} 
                      onClick={()=>handleGenderClick('male') }>남
              </button>
              <button type='button' 
                      ref={refs.genderFemaleRef}
                      className={`gender ${selectedGender === 'female' ? 'info-gender-active':''}`}
                      onClick={()=>handleGenderClick('female') }>여
              </button>
            </div>
          </div>
          <div className={`validate-text ${(msgCheck === 'name') ? 'error' : (msgCheck === 'gender')? 'error':''}`}
               ref={(msgCheck === 'name') ? msgRefs.nameMsgRef :msgRefs.genderMsgRef }>
            {(msgCheck === 'name' || msgCheck === 'gender' ) &&  msgResult}
          </div>
        </li>

        <li>
          <div>
            <input type="text"  
                   name='birth'
                   className='birth'
                   value={formData.birth}
                   ref={refs.birthRef}
                   onChange={handleChange}
                   placeholder='생년월일 (ex)_19901207'/>
          </div>
          <div className={`validate-text ${msgCheck === 'birth' ? 'error' : ''}`} ref={msgRefs.birthMsgRef}>
            {msgCheck === 'birth'  && msgResult}
          </div>
        </li>
        { item === 'nomal' || item === 'pwd' || item ==='signup-auth'?(    
          <>
           <li>
            <div className='auth-input'>
              <input type="text" 
                     name='email'
                     className='email'
                     value={formData.email}
                     ref={refs.emailRef}
                     onChange={handleChange}
                     placeholder='이메일' />
              <button type='button' 
                      className='auth-btn'
                      onClick={handleReqAuthCode}>인증번호 요청</button>
            </div>
            <div className={`validate-text ${(msgCheck === 'email') ? 'error' : (msgCheck === 'req-auth') ? 'error':''}`} 
                 ref={msgRefs.emailMsgRef}>
              {(msgCheck === 'email' || msgCheck === 'req-auth' )&&  msgResult}
            </div>
           </li>
           <li>
            <div className='auth-input auth_code'>
              <input type="text" 
                     name='authCode' 
                     className='auth-code'
                     value={formData.authCode}
                     ref={refs.authCodeRef}
                     onChange={handleChange}
                     placeholder='인증번호'
                     disabled={!active} />
              <button type='button' 
                      className={`auth-btn ${active?'auth-btn-active':''}`}
                      onClick={handleConform}
                      disabled={!active}>
              인증하기</button>
            </div>
            <div className={`validate-text ${msgCheck === 'auth-code' ? 'error' : (msgCheck === 'auth-btn') ?'error' : ''}`} 
                 ref={msgRefs.authCodeMsgRef}>
              {(msgCheck === 'auth-code' || msgCheck === 'auth-btn')  &&  msgResult}
            </div>
           </li>
          </>   
        ):(
          <>
            <li>
              <div>
                <input type="text" 
                       name='phone'
                       className='phone'
                       ref={refs.phoneRef}
                       value={formData.phone}
                       onChange={handleChange}
                       placeholder='휴대폰번호'/>
                <input type="checkbox" className='ch-box-input'/> 
                <span  className='ch-box'>외국인</span>
              </div>
              <div className={`validate-text ${msgCheck === 'phone' ? 'error' : ''}`} ref={msgRefs.phoneMsgRef}>
                {msgCheck === 'phone'  && msgResult}
              </div>
            </li>
            <li>
              <div>
               <input type="password"  
                      name='password'
                      className='password'
                      ref={refs.pwdRef}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder='비밀번호'/>
              </div>
              <div className={`validate-text ${msgCheck === 'password' ? 'error' : ''}`} ref={msgRefs.pwdMsgRef}>
                {msgCheck === 'password'  && msgResult}
              </div>
            </li>
            <li>
              <div>
               <input type="password" 
                      name='cpassword'
                      className='cpassword'
                      ref={refs.cpwdRef}
                      value={formData.cpassword}
                      onChange={handleChange}
                      placeholder='비밀번호 확인' />
              </div>
              <div className={`validate-text ${msgCheck === 'cpassword' ? 'error' : ''}`} ref={msgRefs.cpwdMsgRef}>
                {msgCheck === 'cpassword'  && msgResult}
              </div>
            </li>
          </>
        )}
        {(item === 'nomal' || item ==='pwd') && (
          <button type='submit' className='find-submit-btn'>
            { item === 'nomal'? '아이디 찾기' : '비밀번호 찾기'}
          </button>
        )}
    </form>  
  );
}

