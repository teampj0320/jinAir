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
select * from view_my_reservation;
select * from coupon;




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

-- customer 테이블 값 수정 : phone 데이터 수정하기 010-0000-0000 -> 01000000000, 관심 지역 2개정도 넣어놓기 , 관심테마는 삭제해도 될듯



-- 예약 테이블 탑승객 이름 (passenger_name) 컬럼 추가, JSON으로 타입 변경
DROP TABLE reservation;

CREATE TABLE `reservation` (
  `NO` int auto_increment PRIMARY KEY,
  `ID` varchar(20) NOT NULL,
  `fNUM` varchar(20) NOT NULL,
  `RES_NUM` varchar(20) NOT NULL, 
  `passenger_name` json not null ,
  `RES_DATE` datetime NOT NULL,
  KEY `SUB_RESERVATION_FK_fnum` (`fNUM`),
  KEY `SUB_RESERVATION_FK_id` (`ID`),
  CONSTRAINT `SUB_RESERVATION_FK_fnum` FOREIGN KEY (`fNUM`) REFERENCES `flight` (`fNUM`),
  CONSTRAINT `SUB_RESERVATION_FK_id` FOREIGN KEY (`ID`) REFERENCES `customer` (`id`)
);

INSERT INTO reservation (id, fnum, res_num, passenger_name , res_date)
VALUES ('test1', 'LJ279', 'A11111', JSON_ARRAY('홍길순', '김철수', '이영희') , now()),
      ('test1', 'LJ278', 'A11111', JSON_ARRAY('홍길순', '김철수', '이영희'), now());



-- coupon 테이블 (신규)
DROP TABLE coupon;

CREATE TABLE `coupon` (
  `NO` int auto_increment PRIMARY KEY, 
  `ID` varchar(20) NOT NULL,  
  `coupon_name` varchar(50) NOT NULL,  -- 쿠폰명 예) 국내선 1천원 깜짝쿠폰
  `coupon_code` varchar(20) NOT NULL,  -- 쿠폰 코드 예)asxd7124
  `discount_price` int NOT NULL,   -- 할인 금액
  `start_date` date NOT NULL,  -- 쿠폰 유효기간 시작일 
  `end_date` date NOT NULL,  -- 쿠폰 유효기간 종료일
  `used` TINYINT(1) NOT NULL DEFAULT 0 ,  -- 쿠폰 사용 여부 (미사용 0, 사용 1)
  KEY `sub_coupon_fk_id` (`ID`),
  CONSTRAINT `sub_coupon_FK_id` FOREIGN KEY (`ID`) REFERENCES `customer` (`id`)
);

INSERT INTO coupon (id, coupon_name, coupon_code, discount_price , start_date, end_date, used )
VALUES ('test1', '[온라인 전용] 1천원 깜짝쿠폰' , 'cl0001', 1000 , '2025-04-01', '2025-12-31', 0),
		('test1',  '[온라인 전용] 2천원 깜짝쿠폰', 'cl0002', 2000 ,'2025-04-01', '2025-12-31', 0);



