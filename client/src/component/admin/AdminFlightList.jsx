import React, { useEffect, useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import axios from 'axios';
import ReactPaginate  from 'react-paginate';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

export default function AdminAirRegister() {
  const navigate = useNavigate();
  const [ formData, setFormData ] = useState([]);
  const [ currentList, setCurrentList ] = useState(formData); // pageNation
  const [ departure, setDeparture] = useState('');
  const [ showDeparture, setShowDeparture] = useState(false);
  const [ page, setPage ] = useState(1); 
  const [block, setBlock] = useState(0);
  const itemsPerPage = 10; // 페이지당 개수
  const pageBlockSize = 10;
  const totalPages = Math.ceil(formData.length / itemsPerPage);

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
   
  useEffect(()=>{
    setCurrentList(formData.slice(indexOfFirstItem, indexOfLastItem));
  },[page, formData]);

  useEffect(()=>{
    axios.post('http://localhost:9000/admin/flight')
         .then((res)=>{
            console.log('res>>',res.data);
            setFormData(res.data);
         })
         .catch((error)=>console.log(error))
  },[]);


  const getPageNumbers = () => {
    const start = block * pageBlockSize + 1;
    const end = Math.min(start + pageBlockSize - 1, totalPages);
    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const goToPrevBlock = () => {
    if (block > 0) {
      const newBlock = block - 1;
      setBlock(newBlock);
      setPage(newBlock * pageBlockSize + 1);
    }
  };

  const goToNextBlock = () => {
    if ((block + 1) * pageBlockSize < totalPages) {
      const newBlock = block + 1;
      setBlock(newBlock);
      setPage(newBlock * pageBlockSize + 1);
    }
  };

  return (
    <div className='admin-airlist-content'>
      <div className='admin-airlist-top'>
        <div className='admin-airlist-title'>
          항공권 관리
        </div>
        <div className='admin-airlist-controls'>
          <select className='admin-select-option'>
            <option value="default">선택</option>
            <option value="출발지">출발지</option>
            <option value="도착지">도착지</option>
            <option value="도착지">비행번호</option>
          </select>
          <input type="text" className='admin-search' placeholder='검색어를 입력하세요'/>
          <IoMdSearch className='admin-search-icon'/>
        </div>
      </div> 

      <table className='admin-airlist'>
        <thead>
          <tr>
            <th style={{width:'20px'}}><input type="checkbox" /></th>
            <th style={{width:'50px'}}>No</th>
            <th style={{width:'200px'}}>출발지</th>
            <th style={{width:'200px'}}>도착지</th>
            <th style={{width:'230px'}}>비행번호</th>
            <th style={{width:'200px'}}>출발날짜</th>
            <th style={{width:'150px'}}>가격</th>
          </tr>
        </thead>
        <tbody>
          {currentList && currentList.map((data, idx)=>(
            <tr key={idx}>
              <td style={{width:'20px'}}><input type="checkbox" /></td>
              <td style={{width:'50px'}}>{data.no}</td>
              <td style={{width:'200px'}}>{data.departure_location}({data.d_acode})</td>
              <td style={{width:'200px'}}>{data.arrive_location}({data.a_acode})</td>
              <td style={{width:'230px'}}>{data.fnum}</td>
              <td style={{width:'200px'}}>{data.departure_date}</td>
              <td style={{width:'150px'}}>{data.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='admin-airlist-bottom'>
        <div className='admin-delete-btn'>
          <button>삭제</button>
        </div>
        <div className='custom-pagination'>
          <button onClick={goToPrevBlock} disabled={block === 0}><FiChevronLeft /></button>
          {getPageNumbers().map((num) => (
            <button key={num}
                    onClick={() => setPage(num)}
                    className={page === num ? 'active' : ''}>{num}</button>
          ))}
          <button onClick={goToNextBlock} disabled={(block + 1) * pageBlockSize >= totalPages}>
            <FiChevronRight />
          </button>
        </div>
        <div className='admin-insert-btn'>
          <button onClick={()=>navigate('/admin/flight/add')}>등록</button>
        </div>
      </div>
    </div>
  );
}

