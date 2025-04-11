import React from 'react';

export default function ModifyPass() {
    return (
        <div className='r-common layer-contents'>
            <div className='layer-header'>
                <p className='layer-header-title'>비밀번호 변경</p>
                <div className="border-line" />
            </div>
            <div className='layer-contents'>
                <p className='layer-content-desc w300'>소중한 개인정보 보호를 위해 비밀번호를 변경해주세요.</p>
                <div className='field-wrapper'>
                    <label htmlFor="">기존 비밀번호</label>
                    <input type="password" name="" id="" placeholder='기존 비밀번호를 입력해주세요' />
                </div>
                <div className='field-wrapper'>
                    <label htmlFor="">신규 비밀번호</label>
                    <input type="password" name="" id="" placeholder='신규 비밀번호를 입력 해주세요.' />
                </div>
                <div className='field-wrapper'>
                    <label htmlFor="">신규 비밀번호 확인</label>
                    <input type="password" name="" id=""placeholder='신규 비밀번호를 한번 더 입력해주세요.'  />
                </div>
                <div className='btn-group'>
                    <button>취소</button>
                    <button>확인</button>
                </div>
            </div>
        </div>
    );
}

