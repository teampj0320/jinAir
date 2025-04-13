import {db} from './db.js'

// 회원 정보 불러오기
export const getMyInfo = async() => {
    const sql = `SELECT * FROM customer WHERE id = 'test1'`; // 아이디 우선 고정
    const [result] = await db.execute(sql);
    return { result_rows: result };
};

// 회원정보 수정 버튼 클릭시
export const updateMyInfo = async (data) => {
    const sql = `
      UPDATE customer SET 
        email = ?,
        phone = ?,
        nationality = ?,
        country = ?,
        zipcode = ?,
        address = ?,
        detail_address = ?
      WHERE id = 'test1'
    `;
    const values = [
      data.email,
      data.phone,
      data.nationality || '한국',
      data.residence || '한국',
      data.zipcode || '',
      data.address || '',
      data.detail_address,
    ];
  
    await db.execute(sql, values);
  
    // 업데이트 된 값 다시 조회해서 보내기
    const [result] = await db.execute(`SELECT * FROM customer WHERE id = 'test1'`); // 아이디 우선 고정
    return result[0];
  };