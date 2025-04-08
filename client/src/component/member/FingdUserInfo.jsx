import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";
import { RiHomeLine } from "react-icons/ri";
import AuthUser from './AuthUser.jsx';

export default function FingUserInfo() {
  let params = useParams();
  const navigate = useNavigate();

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
        <li onClick={()=>navigate('/find/id')}>
          <span className={params.finfo ==='id'? 'find-info-active': ''}>아이디 찾기</span>
        </li>
        <li onClick={()=>navigate('/find/pwd')}>
          <span className={params.finfo ==='pwd'? 'find-info-active':''}>비밀번호 찾기</span>
        </li>
      </ul>
      <p className='find-basic-info-title'>이메일로 찾기</p>
        <ul className='user-info'>
          {params.finfo === 'pwd' ? (<AuthUser item={'pwd'}/>) 
            : (<AuthUser item={'nomal'}/>)
          }
        </ul>
    </div>
  );
}

