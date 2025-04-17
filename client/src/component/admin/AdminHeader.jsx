import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineLogout } from 'react-icons/md';

export default function AdminHeader() {

  const handleLogout = () =>{

  };

  return (
    <header className="admin-header">
      <div>
        <div>
          <img src="https://images.jinair.com/newHom/images/web/common/logo.svg" alt="jinair-logo" className='admin-logo' />
          <p className="admin-title">진에어 Admin Page</p>
        </div>
        <button className="admin-logout" onClick={handleLogout}>
          <MdOutlineLogout size="20" title="logout" />
        </button>
      </div>
    </header>
  );
}

