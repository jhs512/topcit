<!-- PDF page: 125 -->

### 02 결함 허용 시스템

#### 가) 결함 허용 시스템(Fault tolerant system)

시스템을 구성하는 부품의 일부에서 결함(fault) 또는 고장(failure)이 발생하여도 설계상에 명시된 기능을 지속적으로 수행할 수 있는 시스템이다. 결함 허용 시스템은 부품의 고장이 발생하면 부분적인 기능을 사용할 수 없게 되며, 계속적으로 부품의 결함이나 고장이 발생하면 점진적으로 사용할 수 없는 기능이 증가하며, 치명적인 결함이나 고장이 발생하면 시스템이 정지한다.

〈표 27〉 결함 해결 단계

| 기법 | 내용 |
| --- | --- |
| 결함감지 (Fault Detection) | 하드웨어로 구성된 비교기(Compare Logic)를 통하여 어느 모듈이 Fault를 발생시켰는지 분석을 수행함 |
| 결함진단 (Fault Diagnosis) | Fault가 일시적(Transient)인 것인지 영구(Hard)적인 것인지 판단하여 영구적인 경우 해당 모듈을 운영배제 시킴 |
| 결함통제 (Fault Isolation) | 결함으로 인한 오류 파급 차단 |
| 결함복구 (Fault Recovery) | Fault를 유발한 모듈을 시스템에서 제거하여 장애 복구 및 시스템을 재구성 |

〈표 28〉 결함 허용 기법

<table>
<thead><tr><th>기법</th><th>구분</th><th>내용</th></tr></thead>
<tbody>
<tr><th rowspan="2">일반적 결함 허용 기법</th><td>Checkpoint 기법</td><td>장애 발생 가능한 소스코드에 대한 에러 탐지</td></tr>
<tr><td>프로토콜 감시</td><td>프로토콜 모니터링 및 추적에 따른 결함 허용 기법 적용</td></tr>
<tr><th rowspan="5">하드웨어 측면 허용 기법</th><td>Triple modular Redundancy</td><td>하드웨어를 3중화 시켜 3개 이상의 프로세서가 같은 입력에 대하여 동일한 연산 수행</td></tr>
<tr><td>RAID</td><td>디스크 미러링, 패리티 비트 분산 저장을 통해 결함 허용</td></tr>
<tr><td>Duplication with Comparison</td><td>결함감지를 위해 하드웨어를 이중화</td></tr>
<tr><td>Stand by Sparing</td><td>결함감지를 위한 여분의 하드웨어를 사용</td></tr>
<tr><td>Watchdog Timer</td><td>주기적 타이머 가동을 통한 초기화</td></tr>
<tr><th rowspan="4">소프트웨어 측면 허용 기법</th><td>체크포인터</td><td>이상 발생시 체크포인터 시점부터 재수행</td></tr>
<tr><td>Recover Block</td><td>단일 프로세서의 Rollbakck, Retry</td></tr>
<tr><td>Conversation</td><td>복수의 프로세서간 처리</td></tr>
<tr><td>분산 Rollback</td><td>분산 환경에서의 Rollback 기법</td></tr>
</tbody></table>

### 03 재난복구시스템

#### 가) 재난복구시스템(DRS, Disaster Recovery System)의 정의

정보시스템 기반 구조의 전체 또는 일부를 재해가 발생한 곳과 다른 위치에 구축하고 재해가 발생하였을 경우 이를 신속하게 복구하여 비즈니스에 대한 영향을 최소화 하기 위한 제반 계획과 시스템이다.
