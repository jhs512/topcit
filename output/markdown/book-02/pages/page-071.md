<!-- PDF page: 071 -->

#### 가) 함수 종속성

① 정의: 테이블 R에서 정의된 필드들의 부분집합 X, Y가 있다. 이 때 임의의 레코드 쌍 t₁와 t₂의 X의 값이 동일하면 항상 이 두 레코드의 Y값도 동일할 때, Y는 X에 함수적으로 종속된다고 한다.

② 표현: X→Y(종속자 Y는 결정자 X에 함수적으로 종속됨)

예: (주민번호) →(이름)

- 사람에 대한 테이블에서 두 레코드의 주민번호가 같다면 이들 두 레코드의 이름도 항상 같음을 의미함

〈표 26〉 함수 종속성의 유형

<table>
<tr><th>유형</th><th>개념</th></tr>
<tr><td>완전 함수 종속</td><td>Full Functional Dependency<br>X′⊂X 이고 X′→Y 를 만족하는 애트리뷰트 X′이 존재하지 않음</td></tr>
<tr><td>부분 함수 종속(2FN)</td><td>Partial Functional Dependency<br>X′⊂X 이고 X′→Y 를 만족하는 애트리뷰트 X′이 존재함
<table><tr><th>사원번호</th><th>사원이름</th><th>빌딩번호</th><th>시작일자</th></tr>
<tr><td>1789</td><td>박지성</td><td>15</td><td>2000 / 07 / 12</td></tr>
<tr><td>1412</td><td>이영표</td><td>23</td><td>1999 / 02 / 19</td></tr>
<tr><td>1789</td><td>박지성</td><td>19</td><td>2000 / 05 / 24</td></tr>
<tr><td>1412</td><td>이영표</td><td>32</td><td>2001 / 04 / 21</td></tr></table>
사원번호 → 사원이름: 부분함수종속<br>사원번호, 빌딩번호 → 시작일자: 완전함수종속<br>〈완전/부분 함수종속–2NF에서 활용〉</td></tr>
<tr><td>이행함수적 종속성(3FN)</td><td>Transitive Dependence<br>릴레이션 R에서 속성 A→X이고 X→Y이면 A→Y임
<table><tr><th>공급자번호</th><th>소재지</th><th>운송거리</th></tr>
<tr><td>S1</td><td>수원</td><td>46</td></tr>
<tr><td>S2</td><td>대전</td><td>164</td></tr>
<tr><td>S3</td><td>대구</td><td>302</td></tr>
<tr><td>S4</td><td>광주</td><td>329</td></tr></table>
공급자번호 → 소재지 → 운송거리<br>공급자번호 → 운송거리<br>〈이행함수종속–3NF에서 활용〉</td></tr>
<tr><td>결정자함수적종속성(BCNF)</td><td>Boyce-code Normalization<br>함수적 종속이 되는 결정자가 후보키가 아닌 경우<br>즉, X→Y에서 X가 후보키가 아님</td></tr>
</table>

#### 나) 암스트롱의 추론 규칙

〈표 27〉 암스트롱 추론 규칙

<table>
<tr><th>구분</th><th>추론</th><th>내용</th></tr>
<tr><td rowspan="3">기본 추론 규칙</td><td>재귀성 규칙</td><td>Y ⊆ X이면 X→Y이다</td></tr>
<tr><td>부가성 규칙</td><td>X→Y 이면, XZ→YZ이다</td></tr>
<tr><td>이행성 규칙</td><td>X→Y이고, Y→Z이면, X→Z이다.</td></tr>
<tr><td rowspan="3">부가 추론 규칙</td><td>연합 규칙</td><td>X→Y이고, Y→Z이면, X→YZ이다</td></tr>
<tr><td>분해 규칙</td><td>X→YZ이면, X→Y이고, X→Z이다.</td></tr>
<tr><td>의사이행 규칙</td><td>X→Y이고, YW→Z이면, XW→Z이다</td></tr>
</table>
