import React,{useState} from 'react';

export default function Question() {
    const [reservation, setReservation] = useState(false);
    const [sale, setSale] = useState(false);
    const [promotion, setPromotion] = useState(false);
    const [checkin, setCheckin] = useState(false);
    const [baggage, setBaggage] = useState(false);
    const [help, setHelp] = useState(false);
    const [service, setService] = useState(false);
    const [homepage, setHomePage] = useState(false);
    const [point, setPoint] = useState(false);
    const [etc, setEtc] = useState(false);

    const list = [
        { tab: 'setReservation', name: '항공권 예매' },
        { tab: 'setSale', name: '할인제도' },
        { tab: 'setPromotion', name: '프로모션' },
        { tab: 'setCheckin', name: '체크인(수속)' },
        { tab: 'setBaggage', name: '수하물' },
        { tab: 'setHelp', name: '도움이 필요하신 고객' },
        { tab: 'setService', name: '기내서비스' },
        { tab: 'setHomePage', name: '홈페이지' },
        { tab: 'setPoint', name: '나비포인트' },
        { tab: 'setEtc', name: '기타' }
    ];
    return (
        <div>
            <div className='schedule-all-box'>
                <p>아래 목록중 문의 사항이 있으시면 선택해주세요! 목록중에 원하는 질문이 없으시다면 저에게 직접 질문해주시면 최선을 다해 답변해 드리겠습니다</p>
                <div>
                    {list.map((data) => (
                        <button onClick={data.tab(true)}>{data.name}</button>
                    ))}
                </div>
            </div>
            {reservation &&// 항공권 일떄
                <div className='schedule-all-box'>
                    <p>아래 목록중 문의 사항이 있으시면 선택해주세요! 목록중에 원하는 질문이 없으시다면 저에게 직접 질문해주시면 최선을 다해 답변해 드리겠습니다!</p>
                    <div>
                        <button>예약</button>
                        <button>결제</button>
                        <button>변경/환불</button>
                        <button>항공권</button>
                        <button>기타(영수증 발급 등)</button>
                    </div>
                </div>
            }
            {promotion &&// 프로모션 일떄
                <div className='schedule-all-box'>
                    <p>아래 목록중 문의 사항이 있으시면 선택해주세요! 목록중에 원하는 질문이 없으시다면 저에게 직접 질문해주시면 최선을 다해 답변해 드리겠습니다!</p>
                    <div>
                        <button>진마켓 할인에 대해 알고 싶습니다.</button>
                        <button>슬림한 잔은 무엇인가요?</button>
                        <button>프로모션 코드가 뭔가요? 어떻게 받을 수 있나요?</button>
                    </div>
                </div>
                //1번째
                //2번째
                //3번째
                //4번째
                //5번째
            }
            {sale &&// 할인제도 일떄
                <div className='schedule-all-box'>
                    <p>아래 목록중 문의 사항이 있으시면 선택해주세요! 목록중에 원하는 질문이 없으시다면 저에게 직접 질문해주시면 최선을 다해 답변해 드리겠습니다!</p>
                    <div>
                        <button>유아는 할인이 적용 되나요?</button>
                        <button>가족 운임 할인 제도란 무엇인가요?</button>
                        <button>제주/재외도민 그리고 명예도민 할인 되나요?</button>
                        <button>기업 우대 할인은 어떻게 하나요?</button>
                    </div>
                </div>
                //1번째
                //2번째
                //3번째
                //4번째
            }
            {checkin &&// 체크인 일떄
                <div className='schedule-all-box'>
                    <p>아래 목록중 문의 사항이 있으시면 선택해주세요! 목록중에 원하는 질문이 없으시다면 저에게 직접 질문해주시면 최선을 다해 답변해 드리겠습니다!</p>
                    <div>
                        <button>공항 체크인</button>
                        <button>웹 모바일 셀프 체크인</button>
                        <button>여행서류</button>
                        <button>카운터안내</button>
                    </div>
                </div>
                //1번째
                //2번째
                //3번째
                //4번째
            }
            {baggage &&// 수하물 일떄
                <div className='schedule-all-box'>
                    <p>아래 목록중 문의 사항이 있으시면 선택해주세요! 목록중에 원하는 질문이 없으시다면 저에게 직접 질문해주시면 최선을 다해 답변해 드리겠습니다!</p>
                    <div>
                        <button>휴대수하물</button>
                        <button>위탁수하물</button>
                        <button>기내유실물</button>
                        <button>수하물배상</button>
                        <button>기내반입제한</button>
                    </div>
                </div>
                //1번째
                //2번째
                //3번째
                //4번째
                //5번째
            }
            {point &&//나비포인트 일떄
                <div className='schedule-all-box'>
                    <p>아래 목록중 문의 사항이 있으시면 선택해주세요! 목록중에 원하는 질문이 없으시다면 저에게 직접 질문해주시면 최선을 다해 답변해 드리겠습니다!</p>
                    <div>
                        <button>나비포인트 적립/소멸</button>
                        <button>나비포인트 사용</button>
                        <button>대한항공 공동운항</button>
                    </div>
                </div>
                //1번째
                //2번째
                //3번째
            }
            {etc &&//기타 일때
                <>
                    <div className='schedule-all-box'>
                        <p>아래 목록중 문의 사항이 있으시면 선택해주세요! 목록중에 원하는 질문이 없으시다면 저에게 직접 질문해주시면 최선을 다해 답변해 드리겠습니다!</p>
                        <div>
                            <button>진에어 현황</button>
                            <button>대리점</button>
                            <button>제휴문의</button>
                        </div>
                    </div>
                    //진에어 현황 클릭
                    <div className='schedule-all-box'>
                        <button>운영 중인 비행기 기종과 좌석수를 알려주세요.</button>
                        <button>진에어 연혁에 대해서 알려주세요.</button>
                        <button>성수기와 비수기가 언제인가요?</button>
                    </div>
                        //1번 대답시
                    <div>진에어에서 운영하는 항공기 기종은 B737-800, B737-8, B737-900, B777-200ER 입니다.
                        <li>B737-800 : 대형 항공사에서 단거리 국제선에 운용하고 있는 기종이며, 100% 디지털 기술로 운항하는 737기종 중에서도 최신예 기종에 속하는 항공기</li>
                        <li>B737-8 : B737 시리즈 중 가장 최신에 개발된 항공기로 엔진 기술 향상 및 날개 개선 등 첨단 기술 적용으로 항속거리 및 효율성이 개선 된 항공기 입니다.</li>
                        <li>B737-900 : 대형 항공사에서 단거리 국제선에 운용하고 있는 기종이며, 100% 디지털 기술로 운항하는 737기종 중에서도 최신예 기종에 속하는 항공기</li>
                        <li>B777-200ER : 국내 LCC 최초로 도입한 항공기로 현재 운영 좌석 수는 393석이며, 장거리 노선을 운항할 수 있는 최첨단 항공기 입니다.</li>
                        <p>자세한 내용은 아래의 링크에서 확인해보세요.</p>
                        <a href="https://www.jinair.com/company/aircraft">항공기 소개</a>
                    </div>
                //2번 대답시
                //3번 대답시
                </>
            }
        </div>
    );
}

