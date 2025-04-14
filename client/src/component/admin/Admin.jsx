import React from 'react';
import AdminNavbar from './AdminNavbar.jsx';
import AdimnPage from './AdimnPage.jsx';
import AdminAirRegister from './AdminAirRegister.jsx';
// import AdminNotice from './AdminNotice.jsx';

export default function Admin() {
  return (
    <div className='admin-wrapper'>
      <div className='admin-container'>
        <AdminNavbar />
        <div className='admin-content'>
          <AdimnPage />
          <AdminAirRegister />
        </div>
      </div>
    </div>
  );
}

