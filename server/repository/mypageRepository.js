import {db} from './db.js'


export const getMyInfo = async(/* {id} */) => {
    const sql = `
        select * from customer
    `;

    const [result] = await db.execute(sql,/* [id] */); 
    return { result_rows: result};
}