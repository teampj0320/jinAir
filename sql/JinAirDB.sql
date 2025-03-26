drop database JinAirDB;
CREATE DATABASE  IF NOT EXISTS `JinAirDB` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `JinAirDB`;

-- ########################################
-- Dumping data for table `main_menu_category` n.메인메뉴 카테고리 테이블
-- ######################################## 

DROP TABLE IF EXISTS `main_menu_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `main_menu_category` (
  `mid`          char(3)         PRIMARY KEY ,
  `title`         varchar(20)      NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

insert into main_menu_category(mid, title)
values(101,'예약'),(102,'프로모션/제휴'),(103,'부가서비스'),(104,'운항정보') ; 
-- ########################################
-- Dumping data for table `main_sub_category` n.서브카테고리 테이블
-- ########################################
DROP TABLE IF EXISTS `sub_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_category` (
  `sid`          char(3)          NOT NULL,
  `title`         varchar(20)      NOT NULL,
  `mid`            char(3)         NOT NULL,
  `image`         varchar(50),    
   PRIMARY KEY (`mid`, `sid`), 
   CONSTRAINT `SUB_CATEGORY_FK_SID` FOREIGN KEY (`mid`) REFERENCES `main_menu_category` (`mid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

INSERT INTO sub_category(sid, title, mid, image)
VALUES
('aa1', '예약안내', 101, '이미지'),
('aa2', '항공권 예약', 101, NULL),
('aa3', '예약/결제안내', 101, NULL),
('aa4', '예약변경/취소/환불', 101, NULL),
('bb1', '추천 항공권', 102, '이미지'),
('bb2', '최저가항공권', 102, NULL),
('bb3', '맞춤항공권', 102, NULL),
('cc1', '운임 및 수수료', 103, '이미지'),
('cc2', '국내선', 103, NULL),
('cc3', '국제선', 103, NULL),
('cc4', '운임 및 수수료', 103, '이미지'),
('cc5', '국내선', 103, NULL),
('cc6', '국제선', 103, NULL);


-- ########################################
-- Dumping data for table `customer` 3.고객 테이블
-- ########################################
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `id` 				varchar(20) NOT NULL,
  `password` 		varchar(20) NOT NULL,
  `kname_first` 	varchar(10) NOT null,  -- 한글이름 first
  `kname_last` 		varchar(10) NOT null,  -- 한글이름 last 
  `ename_firtst`   	varchar(20) NOT null,  -- 영어이름 first
  `ename_last`   	varchar(20) NOT null,  -- 영어이름 last
  `phone` 			varchar(23) NOT NULL,
  `email` 			varchar(50) NOT NULL,
  `gender` 			char(1) 	NOT NULL,  -- F, M
  `birth` 			varchar(10) NOT null,
  `reg_date` 		datetime 	NOT NULL,
  `zipcode` 		int(5) 		NULL,
  `address` 		varchar(80) NULL,
  `detail_address`  varchar(80) NULL,
  `nationality`  	varchar(10) NULL, 	 -- 국적(여권) 
  `country`  		varchar(10) NULL,    -- 거주 국가
  `profile_img` 	json NULL,  -- 프사
  `miles` 			int  NULL default 0, -- 마일리지 / 결제금액의 10%
  `coupon`			json NULL,
  `interest_area`   json NULL,
  `interest_thema`  json NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
INSERT INTO `customer` ( id, password, kname_first, kname_last , ename_firtst, ename_last , phone, email, gender , birth, reg_date  )  
VALUES ('test1', '1111', '홍', '길동', 'HONG', 'GILLDONG', '010-1234-5678', 'HONG@GOOGLE.COM', 'F', '1996.05.23', NOW()   ),
	   ('test2', '2222', '바나', '프레소', 'BANA', 'PRESSO', '010-1234-5678', 'BANA@PRESSO.COM', 'M', '2000.05.23', NOW()   );
               

-- ########################################
-- Dumping data for table `admin` 4.어드민 테이블
-- ########################################
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `aid` 			varchar(20) NOT NULL,
  `password` 		varchar(20) NOT NULL,
  `name` 			varchar(10) not NULL, 
  `phone` 			varchar(23) NOT NULL,
  `email` 			varchar(50) NOT NULL,
  `register_date` 	datetime 	NOT NULL,
  PRIMARY KEY (`aid`) 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
INSERT INTO `ADMIN`  
VALUES ('ADMIN1', '1111', '관리자1', '010-0000-0000', 'ADMIN1@GOOGLE.COM',NOW()),
       ('ADMIN2', '2222', '관리자2', '010-0000-0000', 'ADMIN2@GOOGLE.COM',NOW());

-- ########################################
-- Dumping data for table `flight` 5.비행 테이블
-- ########################################
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `flight` (
fNUM					varchar(20)	NOT NULL, -- 항공편 번호 PK
pnum					varchar(20) NOT NULL, -- 비행기 번호
Departure_location		varchar(20)	NOT NULL,
Arrive_location			varchar(20)	NOT NULL,
Departure_date			DATETIME    NOT NULL,
Arrive_date				DATETIME    NOT NULL,
total_Passengers		INT 		NOT NULL,
basic_seat 				INT 		NULL,
premium_seat 			INT 		NULL,
basic_price 			INT 		NULL,
premium_price			INT 		NULL,
PRIMARY KEY (`fnum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

-- ########################################
-- Dumping data for table `promotion` 6.프로모션 테이블
-- ########################################
DROP TABLE IF EXISTS `promotion`;
CREATE TABLE `promotion` (
	pronum  	varchar(20)		NOT NULL,  -- 프로모션 넘버
	img			varchar(20)		NOT NULL,
    anum    	varchar(20) 	NOT NULL,
PRIMARY KEY (`pronum`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


-- ########################################
-- Dumping data for table `reservation` 7.예약 테이블
-- 성인, 유아, 소아 선택사항 / 그룹설정은 제외
-- ########################################
DROP TABLE IF EXISTS `reservation`;
CREATE TABLE `reservation` (
NO 			int  			NOT NULL, 
ID  		varchar(20)     NOT NULL,
fNUM		varchar(20)	NOT NULL, -- 항공편 번호 PK
RES_NUM     varchar(20)     NOT NULL,
RES_DATE	DATETIME   		NOT NULL,
CONSTRAINT `SUB_RESERVATION_FK_fnum` FOREIGN KEY (`fnum`) REFERENCES `flight` (`fnum`),
CONSTRAINT `SUB_RESERVATION_FK_id` FOREIGN KEY (`ID`) REFERENCES `customer` (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

 
-- ########################################
-- Dumping data for table `QNA` 8.고객센터(QNA) 테이블
-- ########################################
DROP TABLE IF EXISTS `QNA`;
CREATE TABLE `QNA` (
  NO        int AUTO_INCREMENT PRIMARY KEY,
TYPE	char(1)  		NOT NULL,
TITLE 	varchar(30)		NOT NULL,
CONTENT varchar(100)	NOT NULL,
REG_DATE DATETIME 		NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;


-- ########################################
-- Dumping data for table `COUNTRY` 9.나라 테이블
-- ########################################
DROP TABLE IF EXISTS `COUNTRY`;
CREATE TABLE `COUNTRY` (
area 	varchar(10)  NOT NULL,
city 	varchar(40)  NOT NULL,  -- ICN, GMP
PRIMARY KEY (`city`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;





-- ############################################################# 
-- ############################################################# VIEW TABLES
-- ############################################################# 
-- ########################################
-- Dumping data for table `` n.결제 뷰 테이블
-- ########################################
-- 예약 번호 OID
-- 가격 PRICE
-- 쿠폰 
-- 할인금액
-- 항공편명 PNAME
-- 결제 방법





