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


/***************************** 
 * 아이디 찾기
*****************************/
export const getFindId = async(formData) =>{
  const sql =`
    select id, count(*) as cnt 
      from customer 
     where kname_first = ?
       and kname_last = ?
       and email = ?
  group by id;
  `;

  const values =[formData.kname_first, formData.kname_last, formData.email];
  const [result] = await db.execute(sql, values);
  return result;
};  

/***************************** 
 * 비밀번호 찾기
*****************************/
export const getFindPwd = async(formData) =>{
  const sql =`
  select count(*) as cnt 
    from customer 
   where id= ?
     and kname_first = ?
     and kname_last = ?
     and email = ?
  `;

  const values = [formData.id
                , formData.kname_first
                , formData.kname_last
                , formData.email];

  const [result] = await db.execute(sql, values);
  return result;
}  

/***************************** 
 * 임시 비밀번호 발급
*****************************/
export const updatePwd = async(formData) =>{
  const sql =`
    update customer 
       set password = LEFT(UUID(), 8)
     where id=?
       and kname_first = ?
       and kname_last = ?
       and email= ?;
  `;

  const values = [formData.id
                , formData.kname_first
                , formData.kname_last
                , formData.email];

  const [updateResult] =  await db.execute(sql, values);

  if(updateResult.affectedRows){
    const selectSql=`select password from customer where id =? and email =? `;

    const [getResult]= await db.execute(selectSql, [formData.id, formData.email]);
    console.log('getResult',getResult[0]);
    return getResult[0];
  }
  return updateResult.affectedRows;
};