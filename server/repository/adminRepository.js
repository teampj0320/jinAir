import { db } from "./db.js";

/***************************
 * 비행 리스트 조회
 ***************************/
export const getFlightList = async() =>{
 const sql=`
  SELECT  ROW_NUMBER() OVER (ORDER BY departure_date desc) AS no
            , departure_location
            , d_acode
            , arrive_location
            , a_acode
            , fnum
            , date_format(departure_date, '%Y-%m-%d %H-%I:%S') AS  departure_date
            , format(basic_price, 0) as price
    FROM flight;
 `;

 const [result] = await db.execute(sql);
//  console.log('레파지토리 >>',result);
 return result;
};