import React from 'react';

export default function Footer() {
    return (
        <div className='footer_outline'>
            <div className='footer'>
                <div className='footer_top'>
                    <div className='footer_left'>
                        <div className='footer_menu'>
                            <ul>
                                <li>회사안내</li>
                            </ul>
                            <ul>
                                <li>약관 및 안내</li>
                            </ul>
                            <ul>
                                <li>고객사이트</li>
                            </ul>
                        </div> 
                    </div>
                    <div className='footer_right'>
                        <div>
                            고객센터 안내
                            업무시간 안내
                        </div>
                        <div className='footer_sns'>
                            SNS
                        </div>

                    </div> 
                </div>
                <div className='footer_bottom'>
                    <div className='home_main_logo'>
                        <img src="https://images.jinair.com/newHom/images/web/common/logo2.svg" alt="" />
                        (주) 진에어
                    </div>
                    <div>
                        협력사
                    </div>
                </div>
            </div>
        </div>
    );
}

