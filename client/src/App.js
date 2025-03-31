import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/common.scss';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
//mypage
import MypageIndex from './pages/MypageIndex.jsx';
import MyReservation from './pages/Mypage/MyReservation.jsx';
import CheckIn from './pages/Mypage/CheckIn.jsx';
import MyInterest from './pages/Mypage/MyInterest.jsx';
import MyQna from './pages/Mypage/MyQna.jsx';

import BookingAvailabilityList from './pages/booking/BookingAvailabilityList.jsx';
import BookingPassenger from './pages/booking/BookingPassenger.jsx';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        {/* mypage */}
        <Route path='/mypage/index' element={<MypageIndex />} />
        <Route path='/mypage/getReservation' element={<MyReservation />} />
        <Route path='/mypage/checkIn' element={<CheckIn />} />
        <Route path='/mypage/myInterest' element={<MyInterest />} />
        <Route path='/mypage/myQna' element={<MyQna />} />
        {/* <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/admin' element={<Admin />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}


