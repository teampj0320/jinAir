import { db } from "./db.js";



/***************************
 * 1. 어드민 로그인
 ***************************/
export const getAdminLogin = async(formData) => {
  const sql =`
        select count(*) as cnt from admin 
        where aid =? 
        and password =? 
  `;

  const values = [ formData.id, formData.password ];

  const [result] = await db.execute(sql, values);
  return result[0];
};

/***************************
 * 2. 비행 리스트 조회
 ***************************/
export const getFlightList = async() =>{
  const sql=`
    SELECT  ROW_NUMBER() OVER (ORDER BY departure_date desc) AS no
            , departure_location
            , d_acode
            , arrive_location
            , a_acode
            , fnum
            , date_format(departure_date, '%Y-%m-%d %H-%I:%S') AS  departure_date
            , format(basic_price, 0) as price
    FROM flight;
 `;

 const [result] = await db.execute(sql);
 return result;
};

/***************************
 * 3. 항공권 등록 fnum 조회
 ***************************/
export const getFnum = async() =>{
  const sql =`
    select max(fnum) as fnum from flight;
  `;

  const [result] = await db.execute(sql);
  return result[0].fnum;
};


/***************************
 * 4. 항공권 등록
 ***************************/
export const setFlightRegister = async(formData) =>{
  const sql =`
  insert into flight
  values(?,?, ?,?,?,?, ?,?, 188,180,8, ?,?)
  `;

  const values = [
    formData.fnum ,
    formData.pnum ,
    formData.departure_location ,
    formData.d_acode ,
    formData.arrive_location ,
    formData.a_acode ,
    formData.departure_date ,
    formData.arrive_date ,
    formData.basic_price ,
    formData.premium_price 
  ];

  const [result] = await db.execute(sql, values);
  return result.affectedRows;
};  


/***************************
 * 5. 항공권 삭제
 ***************************/
export const deleteFlight = async({fnums}) =>{
  const list = fnums.map(()=>'?').join(',');
  const sql =`delete from flight where fnum in (${list})`;
  
  const [result] = await db.execute(sql, fnums);
  return result.affectedRows;
};


/***************************
 * 6. 항공권 검색
 ***************************/
export const getsearchflightlist = async({type, keyword}) =>{
  const sql =`
    SELECT  ROW_NUMBER() OVER (ORDER BY departure_date desc) AS no
            , departure_location
            , d_acode
            , arrive_location
            , a_acode
            , fnum
            , date_format(departure_date, '%Y-%m-%d %H-%I:%S') AS  departure_date
            , format(basic_price, 0) as price
    FROM flight
    where ${type} LIKE ?;
  `;

  const value = `%${keyword}%`;

  const [result] = await db.execute(sql, [value]);
  return result;
};


/***************************
 * 7. 공지사항 리스트 조회
 ***************************/
export const getNoticeList = async() =>{
  const sql =` 
      select  ROW_NUMBER() OVER (ORDER BY reg_date desc) AS no
              , num
              , title 
              , date_format(reg_date, '%Y-%m-%d %H-%I:%S') AS  reg_date 
      from notice 
      where type = 'n'  `;

  const [result] = await db.execute(sql);
  return result;
}; 

/***************************
 * 8. 공지사항 삭제 로직
 ***************************/
export const deleteNoticeList = async({nums})=>{
  const list = nums.map(()=>'?').join(',');
  const sql =`delete from notice where num in (${list})`;
 
  const [result] = await db.execute(sql, nums);
  return result.affectedRows;
} 

/***************************
 * 9. 공지사항 검색 로직
 ***************************/
export const getSearchNoticeList = async({keyword})=>{
  
 const sql =`
  select  ROW_NUMBER() OVER (ORDER BY reg_date desc) AS no
          , num
          , title 
          , date_format(reg_date, '%Y-%m-%d %H-%I:%S') AS  reg_date 
  from   notice 
  where  type = 'n'
    and  title like ?; 
 `;
 
  const [result] = await db.execute(sql, [`%${keyword}%`]);
  return result;
} 

/***************************
 * 10. 공지사항 등록 로직
 ***************************/
export const setNoticeRegister = async(inputData) =>{
  const sql =`
    insert into notice(type, title, content, reg_date)
    values(?,?,?, NOW());
 `;
  const values = ['N',inputData.title, inputData.content];
  const [result] = await db.execute(sql, values);
  return result.affectedRows;
};

/***************************
 * 11. 공지사항 상세페이지 조회 로직
 ***************************/
export const getNoticeInfo = async({num}) =>{
  const sql =`select title, content from notice where num =?`;

  const value = Number(String(num).replace(/^:/, ''));
  const [result] = await db.execute(sql, [value]);
  return result[0];
};

/***************************
 * 12. 공지사항 상세페이지 업데이트 로직
 ***************************/
export const updateNoticeInfo = async(dataToSend) =>{
  const sql =`update notice set title=?, content=? where num=?`;
  const values= [dataToSend.title, dataToSend.content, Number(String(dataToSend.num).replace(/^:/, ''))];

  const [result] = await db.execute(sql, values);
  return result.affectedRows;
}