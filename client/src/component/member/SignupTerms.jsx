import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Modal, Button } from "antd";
import { IoArrowBackSharp } from "react-icons/io5";
import { RiHomeLine } from "react-icons/ri";
import axios from 'axios';

export default function SignupTerms({onNext}) {
    const navigate = useNavigate();
    const params = useParams();
    const [ terms, setTerms ] = useState([]); 
    const [ modalContent, setModalContent ] = useState(''); 
    const [ modalOpen, setModalOpen ] = useState(false); 

    useEffect(()=>{
          axios.get('/data/signupTerms.json')
               .then((res)=> setTerms(res.data.terms))
               .catch((error)=>console.log(error))
        },[]);

    const openModal = (content) =>{
      setModalContent(content);
      setModalOpen(true);
    };

    const handleNext = () =>{
      onNext(true); //modalOpen 넣기
    };
    
  return (
    <div className='signup-content'>
      <div className='signup-header'>
        <div>
          <IoArrowBackSharp className='header-icon' onClick={()=>navigate('/login')}/> 
          <span>약관동의</span>
        </div>
         <RiHomeLine className='header-icon2' onClick={()=>navigate('/')}/>
      </div> 
      <div className='areement'>
        <p>약관 내용에 먼저</p>
        <p>동의해주세요.</p>
      </div> 
      <ul className='agreement-list'>
                <li>
                  <input type="checkbox" className='all-agree' id='check-ch'/> 
                  <label htmlFor="check-ch">
                    <span>전체동의</span>
                  </label>
                </li>
                { terms && terms.map((term, i)=>{
                   const id = `check-ch2-${i}`; 
                   return (
                    <li key={i}>
                      <input type="checkbox" id={id}/> 
                      <label htmlFor={id}>
                        <span className='check-label'>
                          [{term.type}]&nbsp; 
                          <span className='term-info' 
                                onClick={()=> term.content && openModal(term.content)}>{term.title}</span>에 대한 동의
                        </span>
                      </label>
                    </li>
                  )})}
        </ul>
        <Modal className='signup-terms' title="약관내용" open={modalOpen}
        onCancel={()=>setModalOpen(false)}footer={null}>
        <p>{modalContent}</p>
        </Modal>
        <button type='button' className='agree-btn' onClick={handleNext}>다음</button>
    </div>
  );
}

