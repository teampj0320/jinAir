import React from 'react';
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";


export default function MainSearchPeopleModal() {
    return (
        <div className='main-search-modal-content'>
            <div className='main-search-people-modal-all'>
                <div>
                    <span>탑승객 선택</span>
                    <IoMdClose />
                </div>
                <span>* 로그인 후 '나의 그룹' 선택 시, 그룹에 반영된 성인,소아,유아 수가 자동으로 선택됩니다.</span>
                <div>
                    <div>
                        <span>성인</span>
                        <div>
                            <button><FaMinus /></button>
                            <input type="readOnly" value={1}/>
                            <button><FaPlus /></button>
                        </div>
                    </div>                    
                    <div>
                        <span>소아<AiOutlineExclamationCircle className='main-search-people-icon' /></span>
                        <div>
                            <button><FaMinus /></button>
                            <input type="readOnly" value={1} />
                            <button><FaPlus /></button>
                        </div>
                    </div>
                    <div>   
                        <span>유아<AiOutlineExclamationCircle className='main-search-people-icon'/></span>
                        <div>
                            <button><FaMinus /></button>
                            <input type="readOnly"  value={1}/>
                            <button><FaPlus /></button>
                        </div>
                    </div>
                </div>
                <span>* 탑승객은 성인,소아 총 9명까지 선택 할 수 있습니다. 9명 초과 시 고객센터로 문의하시기 바랍니다.</span>
                <span>* 만 2세 미만 유아의 경우 단독 예약이 불가 하며 좌석 제공이 되지 않습니다. 성인을 반드시 포함하여 예약해주십시오.</span>
                <div className='유소아나이계산기'>
                    <span>유/소아 나이 계산기<IoIosArrowDown /></span>
                </div>
                <div>
                <button>확인</button>
                </div>
            </div>
        </div>
    );
}

