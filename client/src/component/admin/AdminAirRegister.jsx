import React from 'react';
import { IoMdSearch } from "react-icons/io";

export default function AdminAirRegister() {
  return (
    <div className='admin-airlist-content'>
      <div className='admin-airlist-top'>
        <div className='admin-airlist-title'>
          항공권 관리
        </div>
        <div>
          <button>출발지</button>
          <button>도착지</button>
          <input type="text" className='admin-search' placeholder='비행번호를 입력하세요'/>
          <IoMdSearch className='admin-search-icon'/>
        </div>
      </div> 

      <table className='admin-airlist'>
        <tr>
          <th style={{width:'20px'}}><input type="checkbox" /></th>
          <th style={{width:'100px'}}>No</th>
          <th style={{width:'200px'}}>출발지</th>
          <th style={{width:'200px'}}>도착지</th>
          <th style={{width:'300px'}}>비행번호</th>
          <th style={{width:'200px'}}>출발날짜</th>
          <th style={{width:'150px'}}>가격</th>
        </tr>
        <tr>
          <td><input type="checkbox" /></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
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

