<!-- PDF page: 149 -->

② CAP Theorem의 구성과 관리 전략

〈표 80〉 CAP Theorem 구성과 관리 전략

<table>
<tr><td>특성</td><td>설명</td></tr>
<tr><td>구성도</td><td><!-- CAP Theorem의 세 특성과 DB 제품의 분류 배치 도식 생략. --></td></tr>
<tr><td>Consistency</td><td>모든 노드들은 같은 시간에 같은 데이터를 보여줘야 함<br>(각각의 사용자가 항상 동일한 데이터를 조회함)</td></tr>
<tr><td>AvaiIabiIity</td><td>몇몇 노드가 다운되어도 다른 노드들에게 영향을 주지 않아야 함<br>(모든 사용자가 항상 읽고 쓸 수 있음)</td></tr>
<tr><td>Partition Tolerance</td><td>일부 메시지를 손실하더라도 시스템은 정상 동작을 해야 함<br>(물리적 네트워크 분산 환경에서 시스템이 잘 동작함)</td></tr>
<tr><td>C + A</td><td>- 시스템이 죽더라도 메시지 손실은 방지하는 강한 신뢰형<br>- 트랜잭션이 필요한 경우 필수적<br>- 일반 RDBMS</td></tr>
<tr><td>C + P</td><td>- 모든 노드가 함께 퍼포먼스를 내야하는 성능형<br>- 구글의 BigTable, HyperTable, HBase</td></tr>
<tr><td>A + P</td><td>- 비동기화된 스토어 작업에 필수적<br>_ Dynamo, Apache Cassandra, CouchDB, Oracle Coherence</td></tr>
</table>

- NoSQL 시스템들은 A+P, C+P 의 특성을 가지는 분산 시스템들로 구성

[참고 및 추천 자료]

[1] 서상원, 김재홍, 박윤성, 이준섭, 명재석, "Hadoop &amp; NoSQL”, 서울: 길벗, 2013.

[2] 프라모드 사달게이, 마틴 파울리, “빅데이터 세상으로 떠나는 간결한 안내서, NoSQL”, 서울: 인사이트, 2013.

[3] 이춘식, 전혜경, “빅데이터 시대에 관계형 데이터 모델과 빅데이터 데이터 모델 변화 요소 연구”, IT 서비스학회2014.
