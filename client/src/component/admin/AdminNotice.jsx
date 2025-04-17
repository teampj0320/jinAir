import React from 'react';
import { IoMdSearch } from "react-icons/io";

export default function AdminNotice() {
  
  return (
    <div className='admin-airlist-content'>
      <div className='admin-airlist-top'>
        <div className='admin-airlist-title'>
         공지사항
        </div>
        <div className='admin-airlist-controls'>
          <input type="text" className='admin-search' placeholder='검색어를 입력하세요'/>
          <IoMdSearch className='admin-search-icon'/>
        </div>
      </div> 

      <table className='admin-airlist'>
        <thead>
          <tr>
            <th style={{width:'20px'}}><input type="checkbox" /></th>
            <th style={{width:'50px'}}>No</th>
            <th style={{width:'300px'}}>제목</th>
            <th style={{width:'130px'}}>등록일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" /></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className='admin-airlist-bottom'>
        <div className='admin-delete-btn'>
          <button>삭제</button>
        </div>
        <div className='admin-pagenation'>페이지네이션</div>
        <div className='admin-insert-btn'>
          <button>등록</button>
        </div>
      </div>
    </div>
  );
}



