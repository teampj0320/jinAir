import React from 'react';
import NavbarItem from '../admin/NavbarItem.jsx';

export default function AdminNavbar() {
  return (
    <nav className="adminNavbar">
    <ul>
      <NavbarItem page={'/admin/airRegister'} title={'항공권 관리'} />
      <NavbarItem page={'/admin/notice'} title={'공지사항'} />
    </ul>
  </nav>
  );
}

