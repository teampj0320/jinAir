import React from 'react';
import { useLocation } from 'react-router-dom';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function NavbarItem({ page, title }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <li className={location.pathname.split('/')[2] === page.split('/')[2] ? 'style-active' : ''}>
        <span onClick={()=>navigate(page)}>{title}</span>
        <MdOutlineArrowForwardIos size='12' color='#4583f5' />
    </li>
  );
}
