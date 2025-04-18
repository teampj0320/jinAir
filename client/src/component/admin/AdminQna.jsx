import React, { useEffect, useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import axios from 'axios';

export default function AdminQna() {
  const [formData, setFormData] = useState([]); //db 에서 가져온 qna 리스트들
  // const [currentList, setCurrentList] = useState(formData); // pageNation
  // const itemsPerPage = 10; // 페이지당 개수
  // const pageBlockSize = 10;
  // const totalPages = Math.ceil(formData.length / itemsPerPage);

  // const indexOfLastItem = page * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  useEffect(() => {
    axios.post('http://localhost:9000/chatbot/getQnaAll')
      .then(res => {
        console.log(res.data.result);
        setFormData(res.data.result);

      })
      .catch(err => console.log(err));
  }, []);

  const openqna = () => {
    
  }
  return (
    <div className='admin-airlist-content'>
      <div className='admin-airlist-top'>
        <div className='admin-airlist-title'>
          1:1 문의
        </div>
        <div className='admin-airlist-controls'>
          <input type="text" className='admin-search' placeholder='검색어를 입력하세요' />
          <IoMdSearch className='admin-search-icon' />
        </div>
      </div>
      <table className='admin-airlist'>
        <thead>
          <tr>
            <th style={{ width: '20px' }}><input type="checkbox" /></th>
            <th style={{ width: '50px' }}>No</th>
            <th style={{ width: '130px' }}>문의유형</th>
            <th style={{ width: '300px' }}>제목</th>
            <th style={{ width: '130px' }}>회원아이디</th>
            <th style={{ width: '130px' }}>등록일</th>
            <th style={{ width: '130px' }}>답변여부</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((data) => (
            <tr onClick={openqna}>
              <td><input type="checkbox" /></td>
              <td>{data.no}</td>
              <td>{data.category}</td>
              <td>{data.title}</td>
              <td>{data.id}</td>
              <td>{data.reg_date}</td>
              <td>부</td>
            </tr>
          ))
          }
        </tbody>
      </table>
      <div className='admin-airlist-bottom'>
        <div className='admin-delete-btn'>
        </div>
        <div className='admin-pagenation'>페이지네이션</div>
        <div className='admin-insert-btn'>
          <button>답변</button>
        </div>
      </div>
    </div>
  );
}



