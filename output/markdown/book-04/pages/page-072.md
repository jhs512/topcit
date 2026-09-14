<!-- PDF page: 072 -->

• 코딩기법
PreparedStatement 객체 등을 이용하여 DB에 컴파일 된 쿼리문(상수)을 전달하는 방법을 사용한다. PreparedStatement
를 사용하는 경우에는 DB 쿼리에 사용되는 외부 입력값에 대하여 특수문자 및 쿼리 예약어를 필터링하고, 스트러츠
(Struts), 스프링(Spring) 등과 같은 프레임워크를 사용하는 경우에는 외부 입력값 검증모듈 및 보안모듈을 상황에 맞추어
적절하게 사용한다.

〈표 19〉코드 사례

안전하지 않은 코드

```java
String gubun = request.getParameter("gubun");
......
String sql = "select b_gubun "
    + " , a.idx "
    + " , a.b_id "
    + " , date_format(a.w_date, '%Y-%m-%d') "
    + " , a.pwd "
    + " , a.content "
    + " , b.idx "
    + " , a.security "
    + " from board a left outer join tail b on a.idx = b.b_id "
    + " where b_gubun = '" + gubun + "' ";
Connection con = db.getCon();
Statement stmt = con.createStatement();
ResultSet rs = stmt.executeQuery(sql);
```

외부로부터 입력받은 gubun의 값을 아무런 검증과정을 거치지 않고 SQL 쿼리를 생성하는데 사용하고 있다. 이 경우 gubun의 값으로 `a’ or ‘a’ = ‘a` 를 입력하면 조건절이 `b_gubun = ‘a’ or ‘a’ = ‘a’` 로 바뀌어 쿼리의 구조가 변경되어 board 테이블의 모든 내용이 조회된다.

안전한 코드

```java
String gubun = request.getParameter("gubun");
......
String sql = "select b_gubun "
    + " , a.idx "
    + " , a.b_id "
    + " , date_format(a.w_date, '%Y-%m-%d') "
    + " , a.pwd "
    + " , a.content "
    + " , b.idx "
    + " , a.security "
    + " from board a left outer join tail b on a.idx = b.b_id "
    + " where b_gubun = ? ";
Connection con = db.getConnection();
PreparedStatement pstmt = con.prepareStatement(sql);
pstmt.setString(1, gubun);
ResultSet rs = pstmt.executeQuery();
```

파라미터(Parameter)를 받는 PreparedStatement 객체를 상수 스트링으로 생성하고, 파라미터 부분을 setXXX 메서드로 설정하여, 외부의 입력이 쿼리문의 구조를 바꾸는 것을 방지해야 한다.

② 크로스 사이트 스크립팅(XSS) 공격 대응을 위한 시큐어 코딩 기법

• 공격개요
웹 페이지에 악의적인 스크립트를 포함시켜 사용자 측에서 실행되게 유도할 수 있다. 예를 들어, 검증되지 않은 외부 입
력이 동적 웹페이지 생성에 사용될 경우, 전송된 동적 웹페이지를 열람하는 접속자의 권한으로 부적절한 스크립트가 수
행되어 정보유출 등의 공격을 유발할 수 있다.
