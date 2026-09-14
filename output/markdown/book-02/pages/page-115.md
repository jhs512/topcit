<!-- PDF page: 115 -->

#### 다) 동적 SQL과 정적 SQL의 코드 예

① 정적 SQL의 예

```c
Init main()
\{
   Printf("사번을 입력하시오 : ");
   Scanf("%d",&empno);
   EXEC SQL WHENEVER NOT FOUND GOTO notfound;
   EXEC SQL SELECT ENAME INTO :ename
               FROM EMP
               WHERE EMPNO = :empno;
   Printf("사원명 : %s.\n",ename);
Notfound:
   Printf("%d는 존재하지 않는 사번입니다..\n",empno);
\}
```

② 동적 SQL의 예

```c
Int main()
\{
Char select_stmt\[50\] = "SELECT ENAME FROM EMP WHERE EMPNO = :empno";
// scanf("c", &select_stmt) ; ? SQL 문을 동적으로 입력 받을 수도 있음
EXEC SQL PREPARE sql_stmt FROM :select_stmt ;
EXEC SQL DECLARE emp_cursor CURSOR SQL sql_stmt ;
EXEC OPEN emp_cursor USING :empno ;
EXEC FETCH emp_cursor INTO :ename ;
EXEC CLOSE emp_cursor ;
Printf("사원명 : %s.\n", ename);
\}
```

<!-- 원문의 코드 표기·대소문자·역슬래시를 유지함. 실행 가능한 예제로 수정하지 않음. -->

### 04 질의 최적화(Query Optimization) 및 옵티마이저(Optimizer)

질의 최적화(Query Optimization)란 DBMS로 하여금 질의문을 실행하는 여러 전략들을 체계적으로 평가하여 하나의 최적 전략을 선택하도록 하는 과정을 의미하며, 고급 관계 질의어를 지원하는 시스템에서 사용된다.

#### 가) 질의 최적화 과정

① 파서에서 생성된 중간 형태의 질의문을 어떠한 형태의 부표현으로 변환하여 Query Tree로 표현한다.

② 내부 표현을 논리적 변환 규칙을 이용해 효율적인 질의문으로 변환한다. 여러 개의 조건은 하나의 조건으로 통합하고, 가급적 이른 시점에 Projection을 수행하여 불필요한 속성을 제거한다. 또한 Selection도 가능한 이른 시점에 수행한다.

③ 접근 계획을 생성하며, 조인 프로시저, 셀렉션 프로시저 등으로 명세한다.

④ 접근계획을 평가하여 가장 효율적인 것을 선정한다. 평가 기준으로는 디스크 접근 비용, 저장 비용, 계산 비용, 통신 비용 등이 고려된다.
