import {db} from './db.js'


export const getMyInfo = async() => {
    const sql = `SELECT * FROM customer WHERE id = 'test1'`; // 아이디 우선 고정
    const [result] = await db.execute(sql);
    return { result_rows: result };
};


export const updateMyInfo = async (data) => {
    const sql = `
      UPDATE customer SET 
        email = ?,
        phone = ?,
        nationality = ?,
        country = ?,
        detail_address = ?
      WHERE id = 'test1'
    `;
    const values = [
      data.email,
      data.phone,
      data.nationality || '한국',
      data.residence || '한국',
      data.detail_address,
    ];
  
    await db.execute(sql, values);
  
    // 업데이트 된 값 다시 조회해서 보내기
    const [result] = await db.execute(`SELECT * FROM customer WHERE id = 'test1'`); // 아이디 우선 고정
    return result[0];
  };