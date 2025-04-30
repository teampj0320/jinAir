### <div align=center>![header](https://capsule-render.vercel.app/api?type=blur&color=0:D3DC2E,100:D3DC2E&width=1000&height=200&section=header&text=JINAIR%20Team%20Project&fontSize=30&fontColor=FFFFFF&fontAlignX=50&fontAlignY=50&stroke=BFBFBF)</div>


## 프로젝트 소개
- 항공 예약 사이트 중 진에어를 참고한 코딩 팀 프로젝트 
- 진에어는 저비용 항공사(LCC)로, 국내 및 국제선 항공편을 합리적인 가격에 제공하는 항공사입니다. 고객들에게 편리하고 효율적인 여행 서비스를 제공하며, 주요 타겟은 가격에 민감한 여행객과 여유로운 여행 계획을 선호하는 사람들입니다. 진에어는 저렴한 항공권과 다양한 서비스를 제공하는 것을 중점으로 하여, 기내 서비스와 같은 기본적인 항공 서비스를 비롯해 선택적인 유료 서비스를 제공하는 방식으로 운영되고 있습니다. 또한, 항공권 예매부터 탑승까지의 모든 과정이 온라인으로 쉽게 이루어져, 편리하게 여행 계획을 세울 수 있도록 돕고 있습니다.

### 📄 개요
- 준비중

### 📆 프로젝트 기간
- 2025.03.24 ~ 2025.04.28

<br>

### 🙋‍♀️ 팀구성

<br>

## 프로젝트 설명
### 설계단계 - ERD 
- 추후 업데이트
<br>

### 📚기술 스택

<div align=left> 
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> 
  <br>
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white">
  <br>
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/fontawesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white">
  <br>
</div>

<br>

## 프로젝트 시연 & 기능 설명

- 준비중

## 🖥구현기능 
📁 회원가입
- 회원가입 유효성 체크(필요 정보 입력, 약관 동의)
- 이메일 인증 기능 활용
  
📁 로그인
- 입력 정보 유효성 체크(아이디, 비밀번호)
- SNS 간편 로그인 기능
- 개인정보를 활용한 아이디·비밀번호 찾기 기능구현
  
📁 메인페이지
- 이미지 슬라이드 (swiper, slick)
- DB연동 및 chartJS를 활용한 일일 최저가 조회
  
📁 카테고리/사이드바
- 마우스 호버시 카테고리 정보 노출
- 우측하단의 사이드 바에서 위로가기 버튼을 통해 위치 이동 가능
  
📁 예약 조회
- 마이페이지 결제 내역과 메인페이지 에서 가능
  
📁 체크인
- 예약번호, 이름, 출발일을 통해 출발 24시간 전 체크인 가능

📁 예약
- DB에 저장된 출발 공항과 도착 공항을 선택
- 캘린더를 활용한 여행일정 설정
- 탑승 승객 지정 및 항공권 조회

📁 결제정보 선택 및 입력
- 여행 일정에따라 일반석/프리미엄 석 선택(왕복의 경우 오는 편까지)
- 탑승객 정보 입력
- 선택한 좌석 등급에 따른 지정좌석 선택 가능(필수X) 
  
📁 결제페이지
- DB에 저장된 쿠폰 적용 가능
- TossPayAPI를 활용한 결제 기능 구현

📁 챗봇
- 우측하단 사이드 바 아이콘을 통회 예약조회/반영 가능
  
📁 환율
- 우측하단 사이드 바 아이콘을 통해 환율 조회 가능
  
📁 마이페이지
- 쿠폰 조회
- 나의 예약조회
- 회원정보수정
- 관심지역 설정
- 고객문의
- 유저가 설정한 관심지역을 기반으로 맞춤 항공권 노출
  
📁 관리자페이지
- 공지사항 등록 및 수정 가능
- 문의사항 답변으로 답변된 문의와 되지 않은 답변으로 구분 가능
- 항공권 관리 가능 

<br>

## 😨trouble Issue
- DB 연동 비동기 작업 지연으로 Redux상태 업데이트 오류 발생. 팀원간 소통 오류로 데이터 작업과 비동기 작업의 순서 흐름을 재구성하여 이슈 해결
- 메인화면 ChartJS에대한 DB활용 SQL문 서식에 오류가 있어 서버 에러로 다운. 해당 SQL 서식을 재구성하여 오류를 최소화하도록 디버깅함. 
<br>

## ✨ Notice

<br>

## ❗ Reference

- 본 프로젝트는 진에어를 참조하여 학습 목적으로 만들어졌습니다.
- 학습용으로 만들어진 사이트이므로 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제가 될 수 있습니다.
- 본 프로젝트에서 사용하고 있는 사진의 저작권은 모두 진에어에 있습니다. 
<br>
<br><br><br>
