import React from 'react';
import MainBoon from './MainBoon.jsx';
import '../../scss/hsh.scss';
import MainPromotions from './MainPromotions.jsx';
import MainLowest from './MainLowest.jsx';

export default function MainHome() {
    return (
        <div className='main_home'>
            <div className='main_home_content'> 
                <div className='main_home_content_top'>
                    <MainBoon />
                    <MainPromotions />
                    <MainLowest />
                </div> 
            </div>
        </div>
    );
}

