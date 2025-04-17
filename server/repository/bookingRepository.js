import { db } from './db.js';

/***************************** 
 * 항공권 선택 페이지
 * 예약 가능 항공권 조회
*****************************/
export const getOnewayList = async({departure, arrive, startDate}) => {
    // console.log("출발지 확인 : ", departure);
    // console.log("도착지 확인 : ", arrive);
    // console.log("출발일 확인 : ", startDate);
    
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


/***************************** 
 * 항공권 선택 페이지
 * 선택한 날짜 기준 전후 +3일 날짜 리스트 호출
*****************************/
export const getLowPrice = async({start, end, departure, arrive}) => {
    // console.log("시작일 --> ", start);
    // console.log("종료일 --> ", end);
    // console.log("출발지 --> ", departure);
    // console.log("도착지 --> ", arrive);

    // const sql = `
    //     select fNUM,
    //             pnum,
    //             Arrive_location,
    //             left(Arrive_date, 10) as Arrive_date,
    //             Departure_location
    //     from flight
    //     where left(Arrive_date, 10) between ? and ?
    //         and Arrive_location = ?
    //         and Departure_location = ?
    // `;

    // const values = [start, end, departure, arrive];

    // const [result] = await db.execute(sql, values);

    // console.log("결과 확인 --> ", result);
}

/***************************** 
 * 탑승객 정보 입력 페이지
 * 예매자 정보 호출
*****************************/
export const getUserInfo = async({id}) => {
    // console.log("아이디 확인 --> ", id);
    
    const sql = `
    select id,
            email,
            phone,
            kname_first,
            kname_last,
            birth,
            gender
    from customer
    where id = ?
    `;
    
    const [result] = await db.execute(sql, [id]);

    // console.log("정보 확인 --> ", result);
    return {"result": result[0]};
}

/***************************** 
 * 좌석 선택 페이지
 * 좌석 정보 호출
*****************************/
export const getSeats = async({fnum}) => {
    const sql = `
    select *
    from seats
    where fNUM = ?
    `;
    
    const [result] = await db.execute(sql, [fnum]);

    // return result;
    return {"result": result[0]};
}