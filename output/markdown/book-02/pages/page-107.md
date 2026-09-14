<!-- PDF page: 107 -->

〈표 43〉 DML 기본 연산

<table>
<tr><th>명령어</th><th>설명 및 사용 예</th></tr>
<tr><td>SELECT</td><td>테이블에 저장된 데이터 값을 조회할 때 사용<pre>SELECT 칼럼명1, 칼럼명2
FROM 테이블명
WHERE 조건절;</pre></td></tr>
<tr><td>INSERT</td><td>테이블의 전체 칼럼 또는 일부 칼럼에 값을 입력할 때 사용<pre>(전체 칼럼 입력)
INSERT INTO 테이블명 VALUES(입력값1, 입력값2, 입력값3);

(일부 칼럼 입력)
INSERT INTO 테이블명(칼럼명1, 칼럼명3) VALUES(입력값1, 입력값3);

(기존 테이블로부터 입력)
INSERT INTO 테이블명
SELECT 칼럼명1, 칼럼명2
FROM 테이블명
WHERE 조건절;</pre></td></tr>
<tr><td>UPDATE</td><td>테이블에 저장된 데이터 값을 변경할 때 사용<br>조건절을 기술하지 않는 경우 모든 행에 대해서 UPDATE가 수행됨<pre>UPDATE 테이블명 SET 칼럼명1 = 입력값1, 칼럼명2 = 입력값2
WHERE 조건절;</pre></td></tr>
<tr><td>DELETE</td><td>테이블에 저장된 데이터(레코드)를 삭제할 때 사용<br>조건절을 기술하지 않는 경우 모든 행에 대해서 DELETE가 수행됨<pre>DELETE FROM 테이블명
WHERE 조건절;</pre></td></tr>
</table>

#### 나) DML 그룹 연산

DML의 AVG, SUM, COUNT 명령어를 활용하여 그룹 연산을 수행할 수 있다. GROPU BY 절은 SQL문에서 FROM 절과 WHERE 절 뒤에 위치하며, 데이터들을 그룹으로 분류하여 그룹에 대한 항목별 통계 정보를 얻기 위해 사용된다. 일반적으로 그룹 연산은 GROUP BY 절과 함께 사용되지만, 테이블 전체가 하나의 그룹이 되는 경우에는 GROUP BY 절 없이 그룹 연산의 수행이 가능하다. 한편 HAVING 절을 통해 GROUP BY 절의 그룹에 대한 조건을 설정할 수 있다. 또한 같은 값을 하나의 데이터로 간주하고자 하는 경우 DISTINCT 옵션을 사용할 수 있다.

〈표 44〉 DML 그룹 연산

<table>
<tr><th>명령어</th><th>설명 및 사용 예</th></tr>
<tr><td>COUNT</td><td>행의 수를 출력할 때 사용<pre>SELECT COUNT(*) FROM 테이블명</pre></td></tr>
<tr><td>SUM</td><td>NULL 값을 제외한 합계를 출력할 때 사용<pre>SELECT 칼럼명1, SUM(칼럼명2) AS 별칭 FROM 테이블명
GROUP BY 칼럼명1</pre></td></tr>
<tr><td>AVG</td><td>NULL 값을 제외한 평균을 출력할 때 사용<pre>SELECT 칼럼명1, AVG(칼럼명2) AS 별칭 FROM 테이블명
GROUP BY 칼럼명1</pre></td></tr>
</table>
