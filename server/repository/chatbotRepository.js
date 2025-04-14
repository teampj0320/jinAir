import {db} from './db.js';

/***************************** 
 * 나라데이터 가져오기
*****************************/
export const getCountry = async() =>{
  const sql =`
        select city
        from country
          `;
  const [result] = await db.execute(sql);
  // console.log('gggg',result);
  
  return result;
};