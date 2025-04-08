import React from 'react';
import MainSearch from '../component/main/search/MainSearch.jsx';
import MainBoon from '../component/main/MainBoon.jsx';
import MainPromotions from '../component/main/MainPromotions.jsx';
import MainLowest from '../component/main/MainLowest.jsx';
import '../scss/hsh.scss'
import MainNotic from '../component/main/MainNotic.jsx';

export default function Home() {
    return (
        <>
            <div className='content'>
                <div>
                    <MainSearch />
                </div>
                <div className='main_home'>
                    <div className='main_home_content'>
                        <div className='main_home_content_top'>
                            <MainBoon />
                            <MainPromotions />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundColor: "var(--color-242)", height: "25px" }}></div>
            <div className='content'>
                <MainLowest />
            </div>
            <div style={{ backgroundColor: "var(--color-242)", height: "25px" }}></div>
            <div className='content'>
                <MainNotic />
            </div>
        </>
    );
}

