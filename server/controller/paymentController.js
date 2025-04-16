import { db } from './db.js';

/***************************** 
 * Reservation insert
*****************************/

export const payment = ({ no, id, fnum }) => {
    const sql = `
    INSERT INTO reservation (no, id, fnum, res_num, res_date)
    VALUES (?, ?, ?, CONCAT(
      CHAR(FLOOR(RAND() * 26) + 65),
      LPAD(FLOOR(RAND() * 10000), 2, '0'),
      CHAR(FLOOR(RAND() * 26) + 65),
      LPAD(FLOOR(RAND() * 10000), 1, '0'),
      CHAR(FLOOR(RAND() * 26) + 65)
    ), NOW());
  `; 
      return db.execute(sql, no, id, fnum); 
};

