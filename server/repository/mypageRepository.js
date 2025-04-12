import {db} from './db.js'


export const getMyInfo = async() => {
    const sql = `SELECT * FROM customer WHERE id = 'test1'`; // 아이디 우선 고정
    const [result] = await db.execute(sql);
    return { result_rows: result };
};