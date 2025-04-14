

import {db} from './db.js'

// 회원 정보 불러오기
export const getMyInfo = async() => {
    const sql = `SELECT * FROM customer WHERE id = 'test1'`; // 아이디 우선 고정
    const [result] = await db.execute(sql);
    return { result_rows: result };
};

// 회원정보 수정 버튼 클릭시 회원정보 업뎃
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




  /* 비밀번호 확인 */
  export const checkPwd = async (id, password) => {
    const sql = `SELECT password FROM customer WHERE id = ?`;
    const [rows] = await db.execute(sql, [id]);
    return rows.length > 0 && rows[0].password === password;
  };
  


    /* 나의 예약 가져오기 */
    export const getMyRes = async() => {
      const sql = `SELECT * FROM reservaiton WHERE id = 'test1'`; // 아이디 우선 고정
      const [result] = await db.execute(sql);
      return { result_rows: result };
  };
