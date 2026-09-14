<!-- PDF page: 148 -->

#### 다) NoSQL의 저장방식

NoSQL DB는 데이터를 저장하는 데이터 모델의 관점에서 다음과 같이 구분할 수 있다.

〈표 78〉 NoSQL의 종류

<table>
<tr><td>종류</td><td>설명</td></tr>
<tr><td>Key-Value 기반</td><td>• Key-value 기반의 단순하고 빠른 Get, Put, Delete 기능을 제공하는 가장 기초적인<br>NoSQL DB<br>• Dynamo, Redis, MemcacheDB 등</td></tr>
<tr><td>Column Family 기반</td><td>관계형 데이터베이스의 테이블에 대응되는 칼럼 패밀리에 행으로 데이터를 저장하는<br>NoSQL DB<br>• Cassandra HBase, SimpleDB 등</td></tr>
<tr><td>Document 기반</td><td>XML JSON, BSON 등의 문서를 Key-Value 데이터베이스의 value 부분에 저장하는<br>NoSQL DB, MongoDB, CouchDB 등</td></tr>
<tr><td>Graph 기반</td><td>• 관계형 데이터베이스에서 엔트리 속성을 노드로, 관계를 노드간 엣지로 표현하는 NoSQL<br>DB, Neo4J, 플록DB 등</td></tr>
</table>

#### 라) NoSQL 데이터 모델의 특징

〈표 79〉 관계형DB 데이터 모델링과 비교한 NoSQL 데이터 모델링의 특징 비교

<table>
<tr><td>종류</td><td>관계형DB 데이터 모델링</td><td>NoSQL 데이터 모델링</td></tr>
<tr><td>개념도</td><td><!-- 관계형 DB 테이블 관계 도식 생략. --></td><td><!-- NoSQL 노드 관계 도식 생략. --></td></tr>
<tr><td></td><td>• ACID기반 데이터 모델링</td><td>BASE기반 데이터 모델링</td></tr>
<tr><td>방식</td><td>• Minimal Redundancy통한 데이터일관성 확보</td><td>• 데이터중복통한 빠른 조회(Performance) 확보</td></tr>
<tr><td>단계</td><td>• 업무특징에 따른 데이터 모델링(설계) 수행후 개발</td><td>• 화면과 개발로직을 고려한 데이터셋 설계</td></tr>
<tr><td>독립성</td><td>프로그램 독립적 설계(데이터독립성 중요)</td><td>프로그램 종속적 설계(데이터독립성 회피)</td></tr>
<tr><td>특징</td><td>• 일반화된표기법과수행절차가있는데이터구성방식으로<br>논리적인 연결점을 갖는 데이터 모델링 기법</td><td>프로그램에서 처리하기에 용이한 구조의 데이터셋을<br>구성하는 일반적인 데이터 모델링 이라기 보다는<br>파일구조 설계에 더 가까움</td></tr>
</table>

#### 마) NoSQL 데이터 모델의 특징

① CAP Theorem의 정의

대용량 분산 데이터 저장소는 데이터 일관성(Consistency), 가용성(AvaiIabiIity), 단절내성(Partition Tolerance)을 모두 만족 시키는 것이 불가능하므로 두 가지만 전략적으로 선택해야 한다는 이론
