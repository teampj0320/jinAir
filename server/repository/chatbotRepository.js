import { db } from './db.js';

/***************************** 
 * 나라데이터 가져오기
*****************************/
export const getCountry = async () => {
  const sql = `
        select city
        from country
          `;
  const [result] = await db.execute(sql);
  // console.log('sdfsd',result);

  return result;
};
/***************************** 
 * 비행 스케쥴 있는 지 체크
*****************************/
export const searchSchedule = async ({ start, end, date, endDate }) => {
  if (endDate) {
    const sql = `
    select count(*) as result_rows 
    from flight
     where  
          Departure_location = ? and
          Arrive_location = ? and
          left(Departure_date,10) = ? and
          left(Arrive_date,10) = ?
         
  `;
    const [result] = await db.execute(sql, [start, end, date,endDate]);
    // console.log('✅ 쿼리 결과:', result[0].result_rows);
    return { "result": result[0].result_rows };
  } else {
    const sql = `
      select count(*) as result_rows 
      from flight
       where  
            Departure_location = ? and
            Arrive_location = ? and
            left(Departure_date,10) = ?
           
    `;
    const [result] = await db.execute(sql, [start, end, date]);
    // console.log('✅ 쿼리 결과:', result[0].result_rows);
    return { "result": result[0].result_rows };
  }
};

/***************************** 
 * 비행스케쥴 가져오기 
*****************************/
export const getSchedule = async ({ start, end, date, airNumber, airNumStartDate }) => {
  if (airNumber && airNumStartDate) {
    const sql = `
    select       
    basic_price,
    Departure_location,
    Arrive_location,
      D_acode as Dcode,
      A_acode as Acode,
      fNUM as fnum,
      DATE_FORMAT(Departure_date, '%H:%i') AS Dtime, 
      DATE_FORMAT(Arrive_date, '%H:%i') AS Atime
     from flight
     where fNUM = ? and  left(Departure_date,10) = ?              
      `;
    const [result] = await db.execute(sql, [airNumber, airNumStartDate]);
    // console.log('sdfsd',result[0]);
    return { 'result': result[0] };

  } else if (start && end && date) {
    const sql = `
          select    
           basic_price, 
            D_acode as Dcode,
            A_acode as Acode,
            fNUM as fnum,
            DATE_FORMAT(Departure_date, '%H:%i') AS Dtime, 
            DATE_FORMAT(Arrive_date, '%H:%i') AS Atime
           from flight
           where  
            Departure_location = ? and
            Arrive_location = ? and
            left(Departure_date,10) = ?
            `;
    const [result] = await db.execute(sql, [start, end, date]);
    // console.log('sdfsd',result[0]);
    return { 'result': result[0] };
  }
};

/***************************** 
 * 비행 스케쥴 있는 지 체크 airplane
*****************************/
export const searchAirplane = async ({ airNumber, airNumStartDate }) => {
  const sql = `
    select count(*) as result_rows 
    from flight
     where  
          fNUM = ? and
          left(Departure_date,10) = ?
         
  `;
  const [result] = await db.execute(sql, [airNumber, airNumStartDate]);
  // console.log('✅ 쿼리 결과:', result[0].result_rows);
  return { "result": result[0].result_rows };
};

/***************************** 
 * // 당월 최저가 가져오기 출발지 도착지 가격
*****************************/
export const searchMonthCheap = async ({ start, end, date }) => {
  const month = date.split('-')[1];
  const sql = `    
  select 
      concat(substring(Departure_date,6,2),'월',concat(substring(Departure_date,9,2),'일')) as date,
       concat(substring(Arrive_date,6,2),'월',concat(substring(Arrive_date,9,2),'일')) as endDate,
      basic_price,
concat(substring(Departure_date,6,2),'월') as month   
  from flight 
  where Departure_location = ? and 
        Arrive_location = ? and
        substring(Departure_date, 6,2) = ? 
    order by basic_price 
    LIMIT 1       
    `;
  const [result] = await db.execute(sql, [start, end, month]);
  return { 'result': result[0] };
}