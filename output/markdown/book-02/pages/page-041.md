<!-- PDF page: 041 -->

〈표 18〉 칼럼형 데이터베이스와 로우형 데이터베이스 비교

<table>
<tr><td>구분</td><td>로우형 데이터베이스<br>(Row-oriented Database)</td><td>칼럼형 데이터베이스<br>(Column—oriented Database)</td></tr>
<tr><td>물리적 저장구조</td><td colspan="2"><!-- Column-store와 Row-store 페이지 저장 배치 그림 생략. --></td></tr>
<tr><td>개념도</td><td><!-- 사번·이름·급여·전화의 로우 저장 배치 그림 생략. --></td><td><!-- 사번·이름 칼럼의 연속 저장 배치 그림 생략. --></td></tr>
<tr><td>구분</td><td>- 로우 단위로 데이터 저장<br>하나의 디스크 페이지(Page)에 여러 레코드가<br>저장되는 구조</td><td>- 칼럼 단위로 데이터 저장<br>하나의 디스크 페이지에 동일한 칼럼 값들이 연속<br>저장되는 구조</td></tr>
<tr><td>트랜잭션 특징</td><td>- 레코드 단위로 추가, 수정, 삭제에 적합</td><td>- 동일한 칼럼에 대해 대량 데이터 처리에 적합</td></tr>
<tr><td>데이터 압축효율</td><td>_ 레코드는 중복이 없이 고유하므로 압축효율이<br>상대적으로 낮음</td><td>_ 칼럼마다 중복된 값이 많을 경우 압축효율이 높음</td></tr>
<tr><td>주로 사용 SQL<br>패턴 예</td><td>SELECT *(또는 많은 수의 칼럼)<br>FROM Table</td><td>SELECT AVG(COLI)(또는 칼럼 연산)<br>FROM Table</td></tr>
<tr><td>적용 DBMS</td><td>일반 OLTP용 RDBMS<br>오라클, DB2, Sybase ASE 등</td><td>분석용 RDBMS<br>Vectorwise, Sybase IQ, SAP HANA 등</td></tr>
</table>

상용 Column—oriented Database List는 [List of column—oriented DBMSes]에서 갱신되고 있음
