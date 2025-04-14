import React from 'react';
import { Outlet } from 'react-router-dom';
import '../scss/admin.scss'
import AdminHeader from '../component/admin/AdminHeader.jsx';

export default function AdminLayout() {
  return (
    <div>
      <AdminHeader />
      <div className='admin-container'> 
        <Outlet />
      </div>
    </div>
  );
}

