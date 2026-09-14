<!-- PDF page: 147 -->

<table>
<tr><td>특징</td><td>설명</td></tr>
<tr><td>탄력성(Elasticity)</td><td>시스템의 일부 장애에도 불구하고 시스템에 접근하는 클라이언트. 응용시스템의 다운타임이<br>없도록 하는 동시에 대용량 데이터의 생성, 업데이트, 질의에 대응할 수 있도록 시스템 규모와<br>성능 확장이 용이하고 입출력의 부하 분산에도 용이한 구조를 갖춤</td></tr>
<tr><td>질의가능(Query)</td><td>수십 대에서 수천 대 규모로 구성된 시스템에서도 데이터의 특성에 맞게 효율적으로 데이터를<br>검색/처리할 수 있는 질의 언어, 관련 처리 기술. API를 제공</td></tr>
<tr><td>캐싱(Caching)</td><td>대규모의 질의에도 고성능 응답속도를 제공할 수 있는 메모리 기반의 ,씽 기술의 적용이 매우<br>중요하고 개발 및 운영에서도 일관되게 적용할 수 있는 구조</td></tr>
<tr><td>높은 확장성</td><td>점진적으로 노드를 추가 할 수 있어야 하고 이는 파티셔닝을 통해서 가능</td></tr>
<tr><td>높은 AvaiIabiIity</td><td>실패의 단일 포인트가 없으며 데이터는 복제되기 때문에 어떤 노드가 죽었을 때도 데이터는<br>이용이 가능</td></tr>
<tr><td>노으 서느</td><td>디스크 대신 메모리 기반으로 결과는 빠르게 리턴되어야하고 이는 논블락킹 write와 낮은<br>복잡성을 가진 알고리즘을 통해서 이를 수 있음</td></tr>
<tr><td>원자성</td><td>각각의 쓰기는 원자성을 가질 필요</td></tr>
<tr><td>일관성</td><td>강한 일관성은 필요 없고 결과적인 일관성만 가지면 됨(Read-Your-Writes: 일관성)</td></tr>
<tr><td>지속성</td><td>데이터는 휘발성 메모리만이 아닌 디스크에서 유지되어야 함</td></tr>
<tr><td>배포의 유연함<br>(FIexibility)</td><td>노드 추가/삭제는 데이터를 분산하고 수동으로 중재할 필요 없이 자동으로 로드되어야 하며<br>분산 파일 시스템이나 공유스토리지 요구 같은 제약이나 특수한 하드웨어 같은 것이 필요<br>없어야 함. 이기종간의 하드웨어 동작 가능해야함</td></tr>
<tr><td>모델링의 유연함<br>(FIexibiIity)</td><td>Key-vaIue쌍, 계층적 데이터, 그래프등 여러가지 타임의 데이터를 간단하게 모델링</td></tr>
<tr><td>쿼리의 유연함</td><td>하나의 호출에서 제공된 카에 대한 값이 묶음을 얻는 다중 G타과 기의 특정 범위 기반한<br>데이터를 얻는 범위 쿼리가 필요함</td></tr>
</table>

#### 나) NoSQL의 BASE 속성

① NoSQL의 BASE 속성

〈표 76〉 NoSQL의 BASE 속성 설명

<table>
<tr><td></td><td>내용</td></tr>
<tr><td>BasicaIIy AvaiIabIe</td><td>- 가용성을 중시, Optimistic Locking 및 큐 사용<br>- 다수의 실패에도 가용성을 보장, 다수의 스토리지에 복사본 저장</td></tr>
<tr><td>Soft—State</td><td>- 노드의 상태는 외부에서 전송된 정보를 통해 결정됨<br>_ 분산 노드 간 업데이트는 데이터가 노드에 도달한 시점에 갱신</td></tr>
<tr><td>EventuaIIy<br>Consistent</td><td>- 일시적으로 비일관적인 상태가 되어도 최적으로는 일관성이 있는 상태가 되는 성질</td></tr>
</table>

② BASE 속성과 ACID 속성의 비교

〈표 77〉 BASE와 ACID 비교

<table>
<tr><td>속성</td><td>BASE</td><td>ACID</td></tr>
<tr><td>적용분야</td><td>NOSQL</td><td>RDBMS</td></tr>
<tr><td>범위</td><td>시스템 전체에 대한 특성</td><td>트랜잭션에 한정</td></tr>
<tr><td>일관성 측면</td><td>약한 일관성</td><td>강한 일관성</td></tr>
<tr><td>중점사항</td><td>&#x27;Availability&#x27;에 집중</td><td>&#x27;Commit&#x27;에 집중</td></tr>
<tr><td>시스템 측면</td><td>&#x27;성능에 초점</td><td>&#x27;엄격한 데이터관리&#x27;에 초점</td></tr>
<tr><td>효율성</td><td>&#x27;쿼리 디자인&#x27;이 중요</td><td>&#x27;테이블 디자인&#x27;이 중요</td></tr>
</table>
