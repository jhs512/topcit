<!-- PDF page: 106 -->

TCL(Transaction Contrd Language)로 부르기도 한다.

#### 가) 데이터 제어어의 역할

〈표 42〉 데이터 제어어의 역할

<table>
<tr><td>구분</td><td>역할</td></tr>
<tr><td>데이터 보안(Security)</td><td>불법적인 사용자로부터 데이터를 보호</td></tr>
<tr><td>무결성(lntegnty)</td><td>데이터의 정확성 유지</td></tr>
<tr><td>회복(Recovery)</td><td>시스템 장애에 대비</td></tr>
<tr><td>병행수행제어<br>(Concurrency ControI)</td><td>여러 사용자가 DB에 동시 접근 가능(사용)</td></tr>
</table>

#### 나) 데이터 제어어의 종류

① GRANT

사용자에게 객체에 대한 권한을 부여할 때 사용한다

- 예: 사용자 ABC에게 고객 Table조회 권한을 부여하는 경우

- GRANT SELECT ON 고객 TO ABC ,

② REVOKE

사용자에게서 객체에 대한 권한을 회수할 때 사용한다.

- 예: 사용자 ABC로부터 고객 Table조회 권한을 회수 하는 경우

- REVOKE SELECT ON 고객 FROM ABC ,

③ DENY

사용자의 객체에 대한 권한을 거부할 때 사용하며, GRANT와 DENY가 동시에 부여될 경우 DENY가 우선한다.

- 예: 사용자 ABC로부터 고객 Table조회 권한을 거부 하는 경우

- DENY SELECT ON 고객 TO ABC ,

④ COMMIT

트랜잭션을 종료하고 데이터의 변경을 확정할 때 사용한다.

⑤ ROLLBACK

트랜잭션을 취소하고 데이터의 변경을 이전 상태로 복구할 때 사용한다.

### 04 데이터 조작어(DML: Data ManipuLation Language)

데이터 조작어는 데이터베이스에 데이터를 입력, 수정, 삭제, 조회하기 위해 사용된다. 본 절에서는 데이터 조작어를 기본 연 산, 그룹 연산, 고급 조인 연산으로 세분화하여 소개한다.

#### 가) DML 기본 연산

DML 기본 연산은 INSERT, UPDATE, DELETE SELECT, FROM, WHERE 등의 명령어로 구성되며, 입력, 수정, 삭제, 조회 연산에 사용된다. 이 중 FROM과 WHERE는 INSERT, UPDATE DELETE, SELECT와 함께 사용되며, FROM은 대상 테이블 지정, WHEPE는 조건 부여에 사용된다.
