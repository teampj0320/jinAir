import React from 'react';
import { IoArrowBackSharp } from "react-icons/io5";

export default function Login() {


  const handleSubmit = () =>{

  };

  return (
    <div className='login-content'>
      <div className='login-header'>
       <IoArrowBackSharp className='header-icon'/> 
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
          <span>아이디 찾기</span>
          <span></span>
          <span>비밀번호 찾기</span>
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
      <div>
          <button type='button' className='signup-btn'>회원 가입하기</button>
      </div>
    </div>
  );
}

