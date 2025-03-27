import React from 'react';
import MainSearch from '../component/main/MainSearch.jsx';

export default function Home() {
    return (
        <>
            <div>
                <MainSearch />
            </div>
            <div className='content'>
                <span>
                    여긴 메인 홈이지롱
                </span>
            </div>
        </>
    );
}

