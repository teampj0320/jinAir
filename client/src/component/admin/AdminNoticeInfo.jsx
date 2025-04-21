import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function AdminNoticeAdd() {
  const [ formData, setFormData ] = useState([]);
  const navigate = useNavigate();
  const { num } = useParams();
  const refs = {
    titleRef : useRef(null),
    contentRef : useRef(null),
  }

  useEffect(()=>{
    axios.post('http://localhost:9000/admin/noticeInfo', {"num":num})
         .then((res)=>setFormData(res.data))
         .catch((error)=>console.log(error))
  },[]);

  /* 변경되는 값 formData에 저장 */
  const handleForm = (e) =>{
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();

    axios.post('http://localhost:9000/admin/noticeUpdate', formData)
         .then((res)=>setFormData(res.data[0]))
         .catch((error)=>console.log(error))
  };

  
  return (
    <div className='admin-notice-content'>
       <form onSubmit={handleSubmit}>
        <div className='admin-notice-top'>
          <div className='admin-notice-title'>
            공지사항 상세
          </div>
        </div>
        <div className='admin-noticeUpload-all-box'>
          <table>
            {formData && formData.map((data, idx)=> (
              <tbody key={idx}>
                <tr>
                    <td>제목<span style={{ color: 'red' }}>*</span></td>
                    <td><input ref={refs.titleRef} name='title' type="text" value={data.title} onChange={handleForm} /></td>
                </tr>
                <tr>
                    <td>내용<span style={{ color: 'red' }}>*</span></td>
                    <td><textarea ref={refs.contentRef} name='content' rows={10}  value={data.content} onChange={handleForm} /></td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className='admin-noticeUpload-btn'>
          <button type='button' onClick={()=>navigate('/admin/notice')}>목록</button>
          <button type='submit'>수정</button>
        </div>
      </form>
    </div>
  );
}

