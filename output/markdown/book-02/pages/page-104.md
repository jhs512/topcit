<!-- PDF page: 104 -->

### 01 관계 데이터베이스 언어의 종류

### 70 DDL, DCL, DML

관계 데이터베이스 언어는 관계형 데이터베이스에 저장된 구조와 값을 처리하기 위한 데이터베이스 처리 언어로 DDL(Data Definition l-anguage), DCL(Data Control Language), DML(Data Manipulation l-anguage)로 분류할 수 있다.

〈표 39〉 관계 데이터베이스 언어의 종류

<table>
<tr><td>분류</td><td>설명</td><td>주요 명령어</td></tr>
<tr><td>데이터 정의어<br>(DDI-: Data<br>Definition<br>Language)</td><td>데이터와 데이터 간의 관계 정의를 위한 언어로, 데이터베이스 내에서 테이블과 같은<br>데이터 구조를 생성, 변경, 삭제하는데 사용됨</td><td>CREATE<br>ALTER<br>DROP<br>RENAME</td></tr>
<tr><td>데이터 제어어<br>(DCI-: Data<br>Control<br>Language)</td><td>데이터베이스에서 데이터에 대한 엑세스(접근)를 제어하기 위한 언어로 데이터 보안,<br>무결성, 병행수행제어에 사용됨<br>0 |중 트랜잭션을 제어하는 Commt, RoIlback을 TC(Transacton Contrd Lancuage)로 별도<br>분리하기도 함</td><td>GRANT<br>REVOKE<br>COMMIT<br>ROLLBACK</td></tr>
<tr><td>데이터 조작어<br>(DMI-: Data<br>ManipuIation<br>Language)</td><td>데이터베이스 사용자 또는 응용 프로그램의 데이터 검색, 등록, 삭제, 갱신 등의 처리를<br>위한 언어</td><td>SELECT<br>FROM<br>WHERE<br>INSERT<br>UPDATE,<br>DELETE</td></tr>
</table>

#### 나) SQL의 변천 및 SQL3의 특징

① SQL의 변천

SQL은 1970년대 초 IBM의 도널드 D. 챔벌린과 레이먼드 F. 보이스에 의해 처음 개발된 이휘 ANSI에 의해 다음과 같이 지 속적으로 표준이 개정되고 있다.

〈표 40〉 SQL의 변천

<table>
<tr><td></td><td>이름</td><td>별칭</td><td>특징</td></tr>
<tr><td>1986</td><td>SQL</td><td>SQL—86</td><td>SQL 최초의 표준</td></tr>
<tr><td>1992</td><td>SQL2</td><td>SQL—92</td><td>대규모 개정(lS09075) FIPS 127-2로 채택<br>관계형 DB</td></tr>
<tr><td>1999</td><td>SQL3</td><td>SQL_1999</td><td>객체 지향형 DB<br>정규 표현식(RequIar Exp「esion), 재귀 쿼리, 트리거 등 추가</td></tr>
<tr><td>2003</td><td>SQL4</td><td>SQL-2003<br>SQL-2006</td><td>WL 관련특성, 윈도우 함수, 표준화된 시퀀스, 자동 생성 값을 가진 g(CoIumn)</td></tr>
<tr><td>진행 중</td><td>SQL/NM</td><td></td><td>메타데이터 레지스트리에 대한 일관성 있는 접근</td></tr>
</table>

② SQL3의 특징

SQL3의 객체 지향적 특징들은 객체관계 DBMS들의 공통적인 특성으로도 볼 수 있다.
