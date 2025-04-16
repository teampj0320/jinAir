

import {db} from './db.js'

/************************************
 *       회원정보 불러오기
************************************/
export const getMyInfo = async(data) => {
    const sql = `SELECT * FROM customer WHERE id = ?`
    const [result] = await db.execute(sql, [data.id]);
    return { result_rows: result };
};


/************************************
 *       회원정보 수정
************************************/
export const updateMyInfo = async (data) => {
  const sql = `
    UPDATE customer SET 
      email = ?,
      phone = ?,
      nationality = ?,
      country = ?,
      zipcode = ?,
      address = ?,
      detail_address = ?,
      password = ?
    WHERE id = ?
  `;

  const values = [
    data.email,
    data.phone,
    data.nationality,
    data.residence,
    data.zipcode,
    data.address,
    data.detail_address,
    data.password, 
    data.id
  ];

  await db.execute(sql, values);

  const [result] = await db.execute(`SELECT * FROM customer WHERE id = ?`, [data.id]);
  return result[0];
};



/************************************
 *       비밀번호 체크 
************************************/
  export const checkPwd = async (id, password) => {
    const sql = `SELECT password FROM customer WHERE id = ?`;
    const [rows] = await db.execute(sql, [id]);
    return rows.length > 0 && rows[0].password === password;
  };
  

  
/************************************
 *      나의 예약 불러오기
************************************/
  
  
  export const getMyRes = async ({id}) => {
    const sql = `
    
              SELECT 
                  r.id,
                  r.fnum,
                  r.res_num,
                  r.passenger_name,
                  r.res_date,
                  f.departure_location,
                  f.d_acode,
                  f.departure_date,
                  f.arrive_location,
                  f.a_acode,
                  f.arrive_date
          FROM reservation r
          JOIN flight f ON r.fnum = f.fnum
          WHERE r.id = ?
        ORDER BY r.res_num, f.departure_date
    
    `;

    const [rows] = await db.execute(sql, [id]);

    //res_num(예약번호) 기준으로 그룹핑
    const resMap = new Map();
  
    for (const row of rows) {
      if (!resMap.has(row.res_num)) {
        resMap.set(row.res_num, []);
      }
      resMap.get(row.res_num).push(row);
    }
  
    const grouped = Array.from(resMap.values());
    return grouped;
  };
  


/************************************
 *       관심 지역 불러오기
************************************/

  export const getInterest = async({id}) => {
    const sql = `SELECT interest_area FROM customer WHERE id = ?`
    const [result] = await db.execute(sql, [id]);
    return result
};


/************************************
 *        관심지역 추가하기
************************************/
export const updateInterest = async ({ id, checkList }) => {
  const sql = `UPDATE customer SET interest_area = ? WHERE id = ?`;
  const values = [JSON.stringify(checkList), id];
  const [result] = await db.execute(sql, values);

  return result;
};



/************************************
 *        나의 사용가능 쿠폰 조회
************************************/


export const getMyCoupon = async ({ id}) => {
  const sql = `select * from coupon where id = ?`;
  const [result] = await db.execute(sql, [id]);

  return result;
};


