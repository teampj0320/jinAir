import { useNavigate } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";
import { RiHomeLine } from "react-icons/ri";

export default function SignupSuccess({onNext}) {
  const navigate = useNavigate();

  const handleNext = () =>{
    onNext(); //modalOpen 넣기
  };

  return (
    <div className='signup-content'>
      <div className='signup-header'>
        <div>
          <IoArrowBackSharp className='header-icon' onClick={()=>navigate('/')}/> 
          <span>회원가입 완료</span>
        </div>
         <RiHomeLine className='header-icon2' onClick={()=>navigate('/')}/>
      </div> 
      <div className='areement'>
        <p>xxx님 반가워요!</p>
        <p>회원가입이 완료되었어요.</p>
      </div> 
      <ul className='agreement-list'>
                
        </ul>
      
        <button type='button' className='agree-btn' onClick={handleNext}>계속하기</button>
    </div>
  );
};
  


