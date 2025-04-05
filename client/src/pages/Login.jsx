import React from 'react';
import { IoArrowBackSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = () =>{

  };

  return (
    <div className='login-content'>
      <div className='login-header'>
       <IoArrowBackSharp className='header-icon' onClick={()=>navigate('/')}/> 
        <span>로그인</span>
      </div>
      <div className='login-logo'>
        <img src="https://images.jinair.com/newHom/images/web/common/logo.svg" alt="jinair-logo" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className='login-info'>
          <span>
            <input type="text" placeholder='아이디를 입력해주세요'/>
          </span>
          <span>
            <input type="text" placeholder='비밀번호를 입력해주세요'/>
          </span>
        </div>
        <div>
          <button type='submit' className='login-btn'> 로그인</button>
        </div>
      </form>
      <div className='id_save'>
        <div>
          <input type="checkbox" /> 
          <span>아이디저장</span>
        </div>
        <div>
          <span className='find-id' onClick={()=>navigate('/find/id')}>아이디 찾기</span>
          <span></span>
          <span  className='find-pwd' onClick={()=>navigate('/find/pwd')}>비밀번호 찾기</span>
        </div>
      </div>
      <div className='sns-login'>
        <div>
          <span>간편 로그인</span>
        </div>
        <div className='sns--login-btn'>
          <button type='button'></button>
          <button type='button'></button>
        </div>
      </div>
      <div className='signup-text'> 
        <span>회원가입하고 <strong>🎉 회원 전용 혜택</strong>을 받아보세요!</span>
      </div>
      <div>
          <button type='button' 
                  className='signup-btn' 
                  onClick={()=>navigate('/join/terms')}>회원 가입하기
          </button>
      </div>
    </div>
  );
}

