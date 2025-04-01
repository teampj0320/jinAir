import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Modal, Button } from "antd";
import { IoArrowBackSharp } from "react-icons/io5";
import { RiHomeLine } from "react-icons/ri";

export default function Signup() {
  const navigate = useNavigate();
  const params = useParams();
  const [ terms, setTerms ] = useState([]); 
  const [ modalContent, setModalContent ] = useState(''); 
  const [ modalOpen, setModalOpen ] = useState(false); 

  useEffect(()=>{
    axios.get('/data/signupTerms.json')
         .then((res)=> {
          console.log('res.data', res.data.terms);
          setTerms(res.data.terms)})
         .catch((error)=>console.log(error))
  },[]);

  const openModal = (content) =>{
    setModalContent(content);
    setModalOpen(true);
  };

  return (
    <div className='signup-content'>
      <div className='signup-header'>
        <div>
        {(params.jnum === '1') ? (
          <>
            <IoArrowBackSharp className='header-icon' onClick={()=>navigate('/login')}/> 
            <span>약관동의</span>
          </>
          ) : (params.jnum ==='2')? (
            <>
              <IoArrowBackSharp className='header-icon' onClick={()=>navigate('/join/1')}/> 
              <span>본인인증</span>
            </>
          ):(params.jnum ==='3') ? (
            <>
              <IoArrowBackSharp className='header-icon' onClick={()=>navigate('/join/2')}/> 
              <span>정보입력</span>
            </>
          ):( 
            <>
              <IoArrowBackSharp className='header-icon' onClick={()=>navigate('/join/2')}/> 
              <span>회원가입 완료</span>
            </>
          )
          }
        </div>
        <RiHomeLine className='header-icon2' onClick={()=>navigate('/')}/>
      </div>
      <div className='areement'>
          {(params.jnum === '1') ? (
            <>
              <p>약관 내용에 먼저</p>
              <p>동의해주세요.</p>
            </>
            ) : (params.jnum ==='2') ? (
              <>
                <p>회원가입을 위해</p>
                <p>본인인증이 필요해요.</p>
              </>
            ) :(params.jnum ==='3') ? (
              <>
                <p>거의 다 왔어요!</p>
                <p>고객님의 정보를 입력해주세요.</p>
              </>
            ) : 
              <>
                <p>xxx님 반가워요!</p>
                <p>회원가입이 완료되었어요.</p>
              </>
            }
      </div>
      {(params.jnum === '1') ? (  
          <>
        <ul className='agreement-list'>
          <li>
            <input type="checkbox" className='all-agree' /> 
            <span>전체동의</span>
          </li>
          { terms && terms.map((term, i)=>(
            <li key={i}>
              <input type="checkbox" /> 
              <span>[{term.type}]&nbsp; 
                <span className='term-info' 
                      onClick={()=> term.content && openModal(term.content)}>{term.title}</span>에 대한 동의
              </span>
            </li>
          ))}
        </ul>
        <Modal className='signup-terms' title="약관내용" open={modalOpen}
        onCancel={()=>setModalOpen(false)}footer={null}>
          <p>{modalContent}</p>
        </Modal>
        <button type='button' className='agree-btn' onClick={()=>navigate('/join/2')}>다음</button>
      </>):('')}
    </div>
  );
}

