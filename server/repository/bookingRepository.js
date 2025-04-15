import { db } from './db.js';

/***************************** 
 * 항공권 선택 페이지
 * 예약 가능 항공권 조회
*****************************/
export const getOnewayList = async({departure, arrive, startDate}) => {
    console.log("출발지 확인 : ", departure);
    console.log("도착지 확인 : ", arrive);
    console.log("출발일 확인 : ", startDate);
    
    // 출발일 수정 : 2025.04.01(화) -> 2025-04-01
    const date = startDate.replace(/\(.*\)/g, '').trim().replace(/\./g, '-');

    const sql = `
        select fNUM,
                pnum,
                Departure_location,
                left(Departure_date, 10) as Departure_date,
                right(Departure_date, 8) as Departure_time,
                D_acode,
                Arrive_location,
                left(Arrive_date, 10) as Arrive_date,
                right(Arrive_date, 8) as Arrive_time,
                A_acode,
                basic_price,
                premium_price
        from flight
        where Arrive_location = ?
            and Departure_location = ?
            and left(Arrive_date, 10) = ?
    `;

    const values = [departure, arrive, date];

    const [result] = await db.execute(sql, values);

    return result;
}