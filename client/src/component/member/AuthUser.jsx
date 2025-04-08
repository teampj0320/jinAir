import React, { useEffect, useRef, useState } from 'react';
import { validateFindUseInfo } from '../../utils/authValidate';
// import { useParams } from 'react-router-dom';

export default function AuthUser({item}) {
  // let params = useParams();
  const getInitialState = (item) =>{
    switch (item) {
      case 'nomal':
        return {'name':'', 'gender':'', 'birth':'', 'email':'', 'auth-code':''};
      case 'pwd' :
        return {'id':'','name':'', 'gender':'', 'birth':'', 'email':'', 'auth-code':''};
      case 'userInfo' :
        return {'id':'', 'name':'', 'gender':'', 'birth':'', 'password':'', 'cpassword':''};   
      default: return {};  
    }
  };
  const [ formData, setFormData ] = useState(getInitialState(item));
  const [ msgResult, setMsgResult ] = useState('');
  const [ selectedGender, setSelectedGender ] = useState(null);
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
  const msgRefs = {"msgRef": useRef(null)};

  useEffect(() =>{
    setFormData(getInitialState(item));
    setSelectedGender(null);
  },[item]);

  // console.log('dfgdfgd', params);
  console.log('dfgdfgd', item);
  
  
  const handleGenderClick  = (gender) =>{
    setSelectedGender(gender);
    const value = gender === 'male' ?'M':'F';
    setFormData((prev)=>({...prev, ['gender']: value}));
  }

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData({...formData, [name]:value });
    console.log('formData>>',formData);
    setMsgResult('');
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    alert('ㅅㅅㅅ');
    const {result, msg } = validateFindUseInfo(refs, msgRefs.msgRef);
    if(result){
      alert('통');
    }else{
      if(msg !== ''){
        setMsgResult(msg);
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
            <li className='validate-text'>아이디를 입력해주세요</li>
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
          <div className='validate-text'  ref={msgRefs.msgRef}>{msgResult}</div>
        </li>
        <li>
          <div>
            <input type="text"  
                   name='birth'
                   className='birth'
                   value={formData.birth}
                   ref={refs.birthRef}
                   onChange={handleChange}
                   placeholder='생년월일'/>
          </div>
          <div className='validate-text' >{msgResult}</div>
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
              <button type='button' className='auth-btn'>인증번호 요청</button>
            </div>
            <div className='validate-text' >이메일을 입력해주세요</div>
           </li>
           <li>
            <div className='auth-input'>
              <input type="text" 
                     name='auth-code' 
                     className='auth-code' 
                     value={formData.code}
                     ref={refs.authCodeRef}
                     onChange={handleChange}
                     placeholder='인증번호' />
              <button type='button' className='auth-btn'>인증하기</button>
            </div>
            <div className='validate-text' >인증번호를 입력해주세요</div>
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
            </li>
          </>
        )}
        {(item === 'nomal' || item ==='pwd') && (
          <button type='submit' className='find-submit-btn'>
            {/* { params.finfo === 'id'? '아이디 찾기' : '비밀번호 찾기'} */}
            { item === 'nomal'? '아이디 찾기' : '비밀번호 찾기'}
          </button>
        )}
    </form>  
  );
}

