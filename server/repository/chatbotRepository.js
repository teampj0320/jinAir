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
    const [result] = await db.execute(sql, [start, end, date, endDate]);
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

/***************************** 
 * // 예약번호 아이디로 예약조회
*****************************/
export const searchReservation = async ({ reserMessage1, reserMessage }) => {
  const sql = `    
  select count(*) as result_rows
  from reservation 
  where RES_NUM = ? and
    ID = ?
     
    `;
  const [result] = await db.execute(sql, [reserMessage, reserMessage1]);
  return { "result": result[0].result_rows };
}


/***************************** 
 *예약정보 가져오기
*****************************/
export const getReservation = async ({ reserMessage, reserMessage1 }) => {
  const sql = `    
  select  c.ename_first as eFirst, c.ename_last as eLast, RES_NUM as rnum, 
  left(Departure_date,10) as Ddate
 from customer as c, reservation as r   , flight as f  
		where c.id = r.ID and f.fNUM = r.fNUM and
      RES_NUM = ? and
    r.ID = ?      
    `;
  const [result] = await db.execute(sql, [reserMessage, reserMessage1]);
  return { 'result': result[0] };
}


// qna 이미지 등록
export const registerQna = async (formData) => {

  const sql = `
             insert into qna(
                TYPE, TITLE,CONTENT,REG_DATE,qnaImg,category,customer_id
                      )
                      values('a',?,?,now(),json_array(?),?,?)                     
            `;
  const values = [
    formData.inputData.title,
    formData.inputData.content,
    formData.upload_file || null,
    formData.inputData.type,
    formData.id,
  ];

  const [result] = await db.execute(sql, values);
  return { "result_rows": result.affectedRows };
}

/***************************** 
 *qna 가져오기
*****************************/
export const getQnaAll = async () => {
  const sql = `    
  select NO as no, TYPE as type, category, customer_id as id,comment,adminTitle,adminContent,
    TITLE as title, CONTENT as content, left(REG_DATE,10) as reg_date
   from qna    
    `;
  const [result] = await db.execute(sql);
  return { 'result': result };
}

export const getQna = async (qid) => {
  // console.log('qid===>',qid);
  const sql = `
         select NO as no, TYPE as type, category, customer_id as id,comment,adminTitle,adminContent,
           CONCAT('http://localhost:9000/', jt.img) AS image,
    TITLE as title, CONTENT as content, left(REG_DATE,10) as reg_date
          from qna ,
          JSON_TABLE(
  JSON_UNQUOTE(qna.qnaImg->>'$[0]'),
  '$[*]' COLUMNS (
    img VARCHAR(255) PATH '$'
  )
) AS jt
 where no = ?
              `;
  const [result, field] = await db.execute(sql, [qid]);

  return result[0];
}


// qna 답변여부 업데이트

export const updateComment = async ({ no, inputData }) => {
  // console.log(no);
  // console.log(inputData);
  
  const sql = `
             UPDATE qna
            SET comment = '답변완료',
                adminTitle = ?,
                adminContent = ?
            WHERE no = ?;
              `;
  const [result] = await db.execute(sql, [inputData.title, inputData.content, no]);
  return { 'result_rows': result.affectedRows };
}
