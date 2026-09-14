<!-- PDF page: 036 -->

#### 라) XML Processor의 구조 및 주요 구성요소

<!-- 그림 6 XML Processor의 구조 및 구성요소: 사용자·처리기·DB 간의 다중 연결 도식 생략. -->

[그림 6] XML Processor의 구조 및 구성요소

〈표 13〉 XML 구성요소

<table>
<tr><td>구성요소</td><td>기능</td></tr>
<tr><td>XML parser</td><td>XML문서의 문법과 구문구조의 점검검사(validation검사)</td></tr>
<tr><td>XML구문분석기</td><td>XML문서의 구문구조를 분석처리(SAX, DOM)</td></tr>
<tr><td>XSL엔진</td><td>XML문서를 표현정보를 갖는 문서형식으로 변환</td></tr>
</table>

#### 마) XML문서 작성 절차

절차

내용

- 제작하고자 하는 문서의 유형을 결정

문서유형 선택

예: 사용자 매뉴얼, 계약서, 카탈로그, 공문서 등

- 문서의 사용 용도 결정

문서분석

- 문서의 논리적인 구조와 요소들을 결정

DTD작성

- DB에 기초적인 스키마를 제공하고 상호 연동이 이루어지도록 함

- DTD에 정의한 태그를 이용하여 XML문서 작성

XML문서작성

- XML문법을 준수하여 작성

- 문서의 외형 및 문서 내의 처리되어질 내용에 대한 절차를 작성

StyleSheet 작성

- XML문서와 독립적으로 작성되고 다른 파일로 관리

[그림 7] XML 작성절차
