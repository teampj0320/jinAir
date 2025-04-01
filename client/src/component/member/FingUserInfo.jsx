import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";
import { RiHomeLine } from "react-icons/ri";

export default function FingUserInfo() {
  let params = useParams();
  const navigate = useNavigate();
  const [ active, setActive ] = useState(false);
  const [ tabName, setTebName ] = useState(params.finfo);

  console.log('params.finfo>>',params.finfo);
  

  const handleSubmit = () =>{

  };

  return (
    <div className='find-content'>
      <div className='find-header'>
        <div>
          <IoArrowBackSharp className='header-icon' onClick={()=>navigate('/login')}/> 
          <span>{params.finfo === 'id' ? '아이디 찾기' : '비밀번호 찾기'}</span>
        </div>
        <RiHomeLine className='header-icon2' onClick={()=>navigate('/')}/>
      </div>  
      <ul className='find-title'>
        <li onClick={()=>navigate('/find/id')}><span>아이디 찾기</span></li>
        <li onClick={()=>navigate('/find/pwd')}><span>비밀번호 찾기</span></li>
      </ul>
      <p className='find-basic-info-title'>이메일로 찾기</p>
      <form onSubmit={handleSubmit}>
        <ul className='user-info'>
          {params.finfo === 'pwd' ? (
            <li>
              <div>
                <input type="text" placeholder='아이디(이메일계정)' className='id'/>
              </div>
            </li>
            ) : (
             <></>
            )
          }
          <li>
            <div className='find-basic-info'>
              <div>
                <input type="text" placeholder='이름' className='name'/>
              </div>
              <div className='info-gender'> 
                <button type='button' className='gender'>남</button>
                <button type='button' className='gender'>여</button>
              </div>
            </div>
          </li>
          <li>
            <div>
              <input type="text" placeholder='생년월일' className='birth'/>
            </div>
          </li>
          <li>
            <div className='auth-input'>
              <input type="text" placeholder='이메일' className='email'/>
              <button type='button' className='auth-btn'>인증번호 요청</button>
            </div>
          </li>
          <li>
            <div className='auth-input'>
              <input type="text" placeholder='인증번호' className='auth-code'/>
              <button type='button' className='auth-btn'>인증하기</button>
            </div>
          </li>
        </ul>
        <button type='submit' className='find-submit-btn'>
          { params.finfo === 'id'? '아이디 찾기' : '비밀번호 찾기'}
        </button>
      </form>
    </div>
  );
}

