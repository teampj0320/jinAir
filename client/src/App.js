import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './scss/common.scss';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import MobileLayout from './pages/MobileLayout.jsx';
import Login from './pages/Login.jsx';
import FingUserInfo from '../src/component/member/FingUserInfo.jsx';
import Signup from './pages/Signup.jsx';
//mypage
import MypageIndex from './pages/MypageIndex.jsx';
import MyReservation from './pages/Mypage/MyReservation.jsx';
import CheckIn from './pages/Mypage/CheckIn.jsx';
import MyInterest from './pages/Mypage/MyInterest.jsx';
import MyQna from './pages/Mypage/MyQna.jsx';
import ModifyInfo from './pages/Mypage/ModifyInfo.jsx';
import BookingAvailabilityList from './pages/booking/BookingAvailabilityList.jsx';
import BookingPassenger from './pages/booking/BookingPassenger.jsx';
import BookingSelectSeat from './pages/booking/BookingSelectSeat.jsx';

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
        <Route path='/mypage/modifyInfo' element={<ModifyInfo />} />
        <Route path='/booking/availabilityList' element={<BookingAvailabilityList />} />
        <Route path='/booking/passenger' element={<BookingPassenger />} />
        <Route path='/booking/selectSeat' element={<BookingSelectSeat />} />
        {/* <Route path='/payment' element={<Payment />} />
        <Route path='/admin' element={<Admin />} />  */}
      </Route>

      <Route element={<MobileLayout />}>
        <Route path='/login' element={<Login />} />
        <Route path='/find/:finfo' element={<FingUserInfo />} />
        <Route path='/join/:jnum' element={<Signup />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}


