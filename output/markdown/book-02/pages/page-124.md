<!-- PDF page: 124 -->

### 03 트랜잭션 격리수준(lsolation Level)

ANSI/SO SQL 표준(SQL92)에서 정의한 4가지 트랜잭션 격리 수준은 다음과 같다.

#### 가) 완료되지 않은 읽기(Read Uncommitted)

트랜잭션에서 처리 중인 아직 완료되지 않은 데이터를 다른 트랜잭션이 읽는 것을 허용한다.

#### 나) 완료된 읽기(Read Commtted)

트랜잭션이 완료되어 확정된 데이터만 다른 트랜잭션이 읽도록 허용한다.

#### 다) 반복 읽기(Repeatable Read)

트랜잭션 내에서 질의를 두 번 이상 수행할 때, 첫 번째 질의에 있던 레코드가 사라지거나 값이 바뀌는 현상을 방지해준 다.

#### 라) 직렬호KSerializable Read)

트랜잭션 내에서 질의를 두 번 이상 수행할 때, 첫 번째 질의에 있던 레코드가 사라지거나 값이 바뀌지 않음은 물론 새로 운 레코드가 나타나지도 않게 한다.

〈표 50〉 트랜잭션 격리수준에 따른 동시성

<table>
<tr><td>lsolation Level</td><td>Dirty Read</td><td>Nonrepeatable Read</td><td>Phantom Read</td></tr>
<tr><td>레벨0 Read Uncommlted</td><td>발생</td><td>발생</td><td>발생</td></tr>
<tr><td>레벨1 Read Committed</td><td></td><td>발생</td><td>발생</td></tr>
<tr><td>레벨2 Repeatable Read</td><td></td><td></td><td>발생</td></tr>
<tr><td>레벨3 Serializable</td><td></td><td></td><td></td></tr>
</table>

### 04 교작상Etl(DeadLock)

#### 가) 교착상태(Deadlock) 정의

① 다중처리 환경 또는 다중 트랜잭션 데이터베이스 시스템에서 다수의 프로세스 또는 트랜잭션이 특정자원의 할당을 무한 정 기다리고 있는 상태이다.

② 교착상태에 있는 트랜잭션들은 결코 실행을 끝낼 수 없으며 시스템 자원이 묶여있어서 다른 작업을 시작하는 것도 불가능 하며 교착상태가 발생하면 반드시 시스템은 두 트랜잭션 중의 하나를 취소시켜야 한다
