<!-- PDF page: 143 -->

### 02 빅데이터 관련 기술

#### 가) 수집기술

데이터 수집을 위해서는 ETL, 웹 크롤링, RSS Feeding, Open API, CEP(Complex Event Processing) 등의 기술을 이용할 수 있다. 이 중 웹 크롤링은 웹에서 생성되는 각종 문서 및 데이터를 자동으로 수집하는 기술로서 SNS. 블로그, 뉴스 등의 데이터를 수집하는데 이용한다. 수집하고자 하는 URL을 수집한 후 해당 페이지 전체를 복사해오거나 HTML 코드를 분석 하여 특정 태그의 데이터만 수집해온다.

〈표 69〉 빅데이터 수집 솔루션 예

<table>
<tr><td>기술</td><td>설명</td><td>솔루션</td></tr>
<tr><td>DBMS이용 수집</td><td>DBMS의 SQL기능을 이용하여 데이터를 수집함</td><td>Oracle, MariaDB, MS SQL, Tibero 등</td></tr>
<tr><td>센서 이용한 수집</td><td>일정한 조건에 해당할 경우 데이터를 수집함</td><td>CQL Kafka</td></tr>
<tr><td>FTP수집</td><td>파일을 이동할 수 있는 포트를 이용하여 데이터를 수집함</td><td></td></tr>
<tr><td>HTP 수집</td><td>HTML태그를 읽어서 데이터를 수집함</td><td>스크래피</td></tr>
</table>

#### 나) 빅데이터 저장/처리 기술

빠른 속도로 생성되는 대용량의 데이터와 비정형 데이터(즉, 빅데이터)를 경제적이고, 효과적으로 저장/처리하기 위해서 분산파일시스템(DFS), NoSQL Mapreduce 등의 기술이 이용되고 있으며, 최근에는 클라우드 컴퓨팅 환경에서 가상화 기 술을 활용한 클라우드 기반 분산파일시스템이 도입되고 있다.

〈표 70〉 빅데이터 저장/처리 기술 및 솔루션 예

<table>
<tr><td>기술</td><td>설명</td><td>솔루션</td></tr>
<tr><td>분산파일시스템<br>(DFS)</td><td>컴퓨터 네트워크를 통해 공유하는 여러 호스트 컴퓨터의<br>파일에 접근할 수 있게 하는 파일시스템</td><td>GFS(Google FlIe System),<br>HDFS(Hadoop Distributed FlIe system) 등</td></tr>
<tr><td>NoSQL<br>(Not OnIy SQL)</td><td>전통적인 관계형 DB보다 덜 제한적인 일관성 모델을<br>이용(BASE 특성)하는 새로운 형태의 데이터 저장/검색<br>시스템</td><td>HBase, Cassandra, Mongodb,<br>CouchBase, Redis, Ne04J 등</td></tr>
<tr><td>분산 병렬처리<br>(Distributed ParaIIeI<br>Processing)</td><td>대용량의 데이터를 분산된 병렬 컴퓨팅(Parallel<br>Computing) 환경에서 처리하는 기술</td><td>MapReduce</td></tr>
</table>

① 분산파일시스템(DFS)

대용량, 비정형 데이터를 분산 환경에 저장/처리하기 위한 파일시스템 아키텍처로 다음과 같은 특징을 갖는다.

- 가격이 저렴한 서버로 구성

- Scale--Out: 장비가 추가될 때마다 전체 가용량 및 성능이 거의 선형적으로 증가

- 높은 가용성: 일부 서버에 장애가 발생하더라도 전체 시스템 사용성에 영향이 적음

- Throughput에 최적화: 대용량 데이터의 배치 처리에 적합

② MapReduce

MapReduce는 저렴한 머신을 이용하여 빅데이터를 병렬로 분산 처리하기 위한 프로그래밍 모델로서 Map 함수와 Reduce 함수로 구성된 프로그램을 이용하여 대량의 데이터를 병렬로 처리 가능한 모델이다. MapReduce의 여러 머신들
