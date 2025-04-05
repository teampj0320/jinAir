import React from 'react';

export default function AuthUser({item}) {
  return (
    <>  
        {(item === 'pwd' || item ==='userInfo') && (
          <>
            <li>
              <div className='auth-find-pwd'>
                <input type="text" placeholder='아이디(이메일계정)' className='id'/>
              </div>
            </li>
          </>
        )}
       <li>
          <div className='find-basic-info'>
            <div>
              <input type="text" placeholder='이름' className='name'/>
            </div>
            <div className='info-gender'> 
              <button type='button' className='gender'>남</button>
              <button type='button' className='gender'>여</button>
            </div>
          </div>
        </li>
        <li>
          <div>
            <input type="text" placeholder='생년월일' className='birth'/>
          </div>
        </li>
        { item === 'nomal' || item === 'pwd'?(    
          <>
           <li>
            <div className='auth-input'>
              <input type="text" placeholder='이메일' className='email'/>
              <button type='button' className='auth-btn'>인증번호 요청</button>
            </div>
           </li>
           <li>
            <div className='auth-input'>
              <input type="text" placeholder='인증번호' className='auth-code'/>
              <button type='button' className='auth-btn'>인증하기</button>
            </div>
           </li>
          </>   
        ):(
          <>
            <li>
              <div>
                <input type="text" placeholder='휴대폰번호' className='phone'/>
                <input type="checkbox" className='ch-box-input'/> 
                <span  className='ch-box'>외국인</span>
              </div>
            </li>
            <li>
              <div>
               <input type="password" placeholder='비밀번호' className='password'/>
              </div>
            </li>
            <li>
              <div>
               <input type="password" placeholder='비밀번호 확인' className='cpassword'/>
              </div>
            </li>
          </>
        )}

    </>
  );
}

