import React from 'react';
import { db } from'./db.js';

/***************************** 
 * 로그인 
*****************************/
export const checkLogin = async(formData) =>{
  const sql =`
    select count(*) as cnt 
    from customer
    where id=? and password =?
  `;

  const values = [formData.id, formData.password];

  const [result] = await db.execute(sql, values);
  return result[0];
};