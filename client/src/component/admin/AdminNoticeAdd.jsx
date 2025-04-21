import React from 'react';

export default function AdminNoticeAdd() {

  const handleSubmit = () =>{

  };

  return (
    <div className='admin-notice-content'>
       <form onSubmit={handleSubmit}>
        <div className='admin-notice-top'>
          <div className='admin-notice-title'>
            공지사항 등록
          </div>
        </div>
      </form>
    </div>
  );
}

