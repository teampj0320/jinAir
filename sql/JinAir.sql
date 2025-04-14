show databases;
use JinAirDB;
show tables;

-- 테이블 전체 데이터 조회
select * from admin;
select * from country;
select * from customer;
select * from flight;
select * from main_menu_category;
select * from qna;
select * from reservation;
select * from sub_category;
select * from product;
select * from reservation;
select * from view_my_reservation;




-- 테이블 데이터 타입 조희
desc admin;
desc country;
desc customer;
desc flight;
desc main_menu_category;
desc qna;
desc reservation;
desc sub_category;


-- ******** db 수정 테스트 **************** 



-- customer 테이블 test1 아이디에 프사 넣기 (서령)
UPDATE customer
SET profile_img = JSON_ARRAY('/images/ddung.jpg')
WHERE id = 'test1';

-- customer 테이블 test1 아이디에 프사 삭제 (서령)
UPDATE customer
SET profile_img = NULL
WHERE id = 'test1';

-- customer 테이블 phone 데이터 수정하기 010-0000-0000 -> 01000000000



-- 예약 테이블 탑승객 이름 (passenger_name) 컬럼 추가
DROP TABLE reservation;

CREATE TABLE `reservation` (
  `NO` int auto_increment PRIMARY KEY,
  `ID` varchar(20) NOT NULL,
  `fNUM` varchar(20) NOT NULL,
  `RES_NUM` varchar(20) NOT NULL, 
  `passenger_name` varchar(20) not null ,
  `RES_DATE` datetime NOT NULL,
  KEY `SUB_RESERVATION_FK_fnum` (`fNUM`),
  KEY `SUB_RESERVATION_FK_id` (`ID`),
  CONSTRAINT `SUB_RESERVATION_FK_fnum` FOREIGN KEY (`fNUM`) REFERENCES `flight` (`fNUM`),
  CONSTRAINT `SUB_RESERVATION_FK_id` FOREIGN KEY (`ID`) REFERENCES `customer` (`id`)
);

INSERT INTO reservation (id, fnum, res_num, passenger_name , res_date)
VALUES ('test1', 'LJ100', '11111-11111', '["홍길순","김철수","이영희"]', now());



-- 나의 예약 확인 (예약&항공테이블)
drop view view_my_reservation;

create view view_my_reservation
as
select  r.Id as id,
		r.fnum as fnum,
        r.res_num as res_num,
		r.passenger_name  as passenger_name ,
        r.res_date as res_date,
        f.departure_location as departure_location,
        f.d_acode as d_acode,
        f.departure_date as departure_date,
        f.arrive_location as arrive_location,
        f.a_acode as a_acode,
        f.arrive_date as arrive_date
	from reservation r, flight f
    where r.fnum = f.fnum;

-- 왕복, 편도 구분하기