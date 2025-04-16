

import { db } from './db.js'

/*************************
 * 주문 정보 insert
/*************************/
export const payment = ({ id, fnum, passenger_name }) => {
  const setResNum = `
    SET @res_num = CONCAT(
      CHAR(FLOOR(RAND() * 26) + 65),
      LPAD(FLOOR(RAND() * 100), 2, '0'),
      CHAR(FLOOR(RAND() * 26) + 65),
      LPAD(FLOOR(RAND() * 10), 1, '0'),
      CHAR(FLOOR(RAND() * 26) + 65)
    );
  `;

  const insert = `
    INSERT INTO reservation (id, fnum, passenger_name, res_num, res_date)
    VALUES 
      (?, ?, JSON_ARRAY(?), @res_num, NOW()),
      (?, ?, JSON_ARRAY(?), @res_num, NOW());
  `;

  return db.execute(setResNum)
    .then(() =>
      db.execute(insert, [
        id, fnum[0], passenger_name, // 첫 번째 row
        id, fnum[1], passenger_name  // 두 번째 row
      ])
    );
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
