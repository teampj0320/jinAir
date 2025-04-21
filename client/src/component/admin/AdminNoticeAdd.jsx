import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminNoticeAdd() {
  const [ inputData, setInputData ] = useState([]);
  const navigate = useNavigate();

  const refs = {
    titleRef : useRef(null),
    contentRef : useRef(null),
  }
  const handleForm = (e) =>{
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();

    axios.post('http://localhost:9000/admin/noticeRegister', inputData)
         .then((res)=>{
          console.log('res.data',res.data);
          
         })
         .catch((error)=>console.log(error))
  };

  return (
    <div className='admin-notice-content'>
       <form onSubmit={handleSubmit}>
        <div className='admin-notice-top'>
          <div className='admin-notice-title'>
            공지사항 등록
          </div>
        </div>
        <div className='admin-noticeUpload-all-box'>
          <table>
            <tr>
                <td>제목<span style={{ color: 'red' }}>*</span></td>
                <td><input ref={refs.titleRef} name='title' type="text" onChange={handleForm} /></td>
            </tr>
            <tr>
                <td>내용<span style={{ color: 'red' }}>*</span></td>
                <td><textarea ref={refs.contentRef} name='content' rows={10} onChange={handleForm} /></td>
            </tr>
          </table>
        </div>
        <div className='admin-noticeUpload-btn'>
          <button type='button' onClick={()=>navigate('/admin/notice')}>목록</button>
          <button type='submit'>등록</button>
        </div>
      </form>
    </div>
  );
}

