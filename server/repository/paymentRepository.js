import { db } from './db.js'

/*************************
 * 예약 정보 삽입
 *************************/  

export const payment = ({ id, fnum, passenger_names }) => {

  const setResNum = `
      SET @res_num = CONCAT(
          CHAR(FLOOR(RAND() * 26) + 65),
          LPAD(FLOOR(RAND() * 100), 2, '0'),
          CHAR(FLOOR(RAND() * 26) + 65),
          LPAD(FLOOR(RAND() * 10), 1, '0'),
          CHAR(FLOOR(RAND() * 26) + 65)
      );
  `;

  // 승객 이름을 공백 제거 후, 배열로 변환
  const cleanedPassengerNames = passenger_names
      .map(name => name.trim().replace(/\s+/g, ''));  // 공백 제거 후 배열로 변환

  console.log(cleanedPassengerNames);  // 결과 확인

  const insert = `
      INSERT INTO reservation (id, fnum, passenger_name, res_num, res_date)
      VALUES 
          (?, ?, JSON_ARRAY(?, ?), @res_num, NOW()),
          (?, ?, JSON_ARRAY(?, ?), @res_num, NOW());
  `;

  return db.execute(setResNum)
  .then(() => db.execute(insert, [
      id, fnum[0], ...cleanedPassengerNames,  // 승객 이름을 배열로 전개해서 전달
      id, fnum[1], ...cleanedPassengerNames,  // 승객 이름을 배열로 전개해서 전달
  ]));
};



/*************************
 * 차트 정보 정보 조회
 *************************/
export const active = async (data) => {
  const sql = `
    SELECT 
      D_acode, 
      Arrive_date, 
      AVG(basic_price) AS average_price 
    FROM flight 
    WHERE D_acode = ? 
    GROUP BY Arrive_date;
  `;
  const [result] = await db.execute(sql, [data.d_acode]); // 데이터의 d_acode 값에 맞춰서 "tak" 같은 값을 전달
  return result;
};
 
/*************************
 * 비행기 정보 조회 (Repository)
 *************************/

export const flight = async (flightNumber) => {
  const sql = `SELECT * FROM flight WHERE fNUM = ?`;

  try {
    const [result] = await db.execute(sql, [flightNumber]); 
    return { result_rows: result };
  } catch (error) {
    console.error('SQL Error:', error);
    throw new Error('항공편 조회 중 오류가 발생했습니다.');
  }
};