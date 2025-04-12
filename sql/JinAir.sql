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
select * from view_cart_list;




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

UPDATE customer
SET profile_img = JSON_ARRAY('/images/ddung.jpg')
WHERE id = 'test1';


UPDATE customer
SET profile_img = NULL
WHERE id = 'test1';

