import React from 'react';
import MainSearch from '../component/main/MainSearch.jsx';
import MainHome from '../component/main/MainHome.jsx'

export default function Home() {
    return (
        <>
            <div className='content'> 
                <div>
                    <MainSearch />
                </div>
                <div style={{margin: "50px"}}>
                    <MainHome/>
                </div>
            </div>
        </>
    );
}

