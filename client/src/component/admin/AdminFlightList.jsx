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
  const itemsPerPage = 10; // 페이지당 개수
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

  const handleSelectDeparture = (data) => {
    setDeparture(data);
    setShowDeparture(false);
  };

  const handlePageNation = (page) => {
    setPage(page);
  };

  return (
    <div className='admin-airlist-content'>
      <div className='admin-airlist-top'>
        <div className='admin-airlist-title'>
          항공권 관리
        </div>
        <div className='admin-airlist-controls'>
          <div onClick={handleSelectDeparture}>
            <button className='admin-location-button'>출발지</button>
            {/* <input type="text" value={departure} readOnly placeholder='출발지 선택'/> */}
          </div>
          <div>
            <button className='admin-location-button'>도착지</button>
            {/* <input type="text" value={departure} readOnly placeholder='도착지 선택'/> */}
          </div>
          <input type="text" className='admin-search' placeholder='비행번호를 입력하세요'/>
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
        <div className='admin-pagenation'>
          <ReactPaginate previousLabel={<FiChevronLeft/>}
                         nextLabel={<FiChevronRight />}
                         breakLabel={'..'}
                         pageCount={Math.ceil(formData.length/itemsPerPage)} // pagnation에 나타낼 페이지 범위
                         itemsCountPerPage={itemsPerPage} // 한페이지 당 보여줄 아이템 개수
                         marginPagesDisplayed={0}
                         pageRangeDisplayed={10} // 한 페이지에 표시할 게시글 수 
                         onPageChange={(selected)=>setPage(selected.selected + 1)}
                         containerClassName={'pagination'}
                         pageClassName={'pagination__item'}
                         activeClassName={'active'} 
                         forcePage={page - 1}/>
        </div>
        <div className='admin-insert-btn'>
          <button onClick={()=>navigate('/admin/flight/add')}>등록</button>
        </div>
      </div>
    </div>
  );
}

