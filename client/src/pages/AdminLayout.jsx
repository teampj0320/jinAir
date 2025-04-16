import React from 'react';
import { Outlet } from 'react-router-dom';
import '../scss/admin.scss'
import AdminHeader from '../component/admin/AdminHeader.jsx';
import AdminNavbar from '../component/admin/AdminNavbar.jsx';

export default function AdminLayout() {
  return (
    <div className='admin-wrapper'>
      <AdminHeader />
      <div className='admin-body'>
        <AdminNavbar />
        <div className='admin-content'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

