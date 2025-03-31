import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/common.scss';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Mypage from './pages/Mypage.jsx';
import MyReservation from './pages/MyReservation.jsx';
import BookingAvailabilityList from './pages/booking/BookingAvailabilityList.jsx';
import BookingPassenger from './pages/booking/BookingPassenger.jsx';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='/mypage/index' element={<Mypage />} />
        <Route path='/mypage/getReservation' element={<MyReservation />} />
        <Route path='/booking/availabilityList' element={<BookingAvailabilityList />} />
        <Route path='/booking/passenger' element={<BookingPassenger />} />
        {/* <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/admin' element={<Admin />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}


