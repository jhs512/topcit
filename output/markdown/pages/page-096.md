<!-- PDF page: 096 -->

〈표 47〉 DSS 데이터 모델유형


| 모델유형 | 설명 |
| --- | --- |
| 시나리오 분석 (What-if Analysis) | 결정된 해결방안과 관련하여 일부 변수의 변화가 다른 변수에 미치는 영향을 분석하여 불확실한 미래 상황에 대한 가정을 테스트하는 용도로 사용 |
| 민감도 분석 (Sensitivity Analysis) | 입력변수와 결과변수로 구성된 등식 모형에서 한두 개의 변수에 대한 변화로 인해 나머지 변수들이 어떤 영향을 받는지 관찰하는 방법 |
| 목표변수 역추적 (Goal-seeking) | 목표치를 설정하고 목표치를 달성할 수 있는 관련 변수 값을 찾는 분석 방법 |
| 최적화 분석 (Optimization Analysis) | 특정 제약식이 주어졌을 때 하나 이상의 목표 변수 최적 값을 구하는 방법 |


#### 다) BI의 이해

##### ① BI의 개념


BI(Business Intelligence)는 기업의 데이터와 정보를 요약, 분석, 활용하여 기업 경영에 필요한 의사결정의 질 제고 및 성과
향상을 도모하는 일련의 프로세스이다. DSS가 의사결정권자를 위한 시스템이고 전통적 개념의 의사결정 지원시스템이라
면 BI는 전사적 사용자를 위해서 도입되는 의사결정 지원시스템이다.
- 협의로는 기업의 데이터와 정보를 요약 분석, 활용하여 기업 경영에 필요한 의사결정의 질을 높이고 성과 향상을 도모하
는 시스템을 의미한다.
- 인텔리전스의 의미는 원하는 목표를 달성하는데 필요한 지침을 얻을 수 있도록 주어진 사실 간의 상호관계를 이해하는
능력이다(IBM, 한스 룬, 1958)
- 오늘날의 BI는 DSS에서 진화하였다는 의견이 지배적인데, DSS을 근간으로 1980년대 말부터 데이터 웨어하우스, OLAP,
BI와 같은 분석 기술들이 개발되기 시작하였다.
##### ② BI의 구성
<!-- 생략: 그림 39 / 화면 캡처와 복합 구성도 -->


| 구분 | 내용 |
| --- | --- |
| 입력 | Web Service Messaging: ESB<br>Applications (Legacy & Custom)<br>Data Base & Files<br>SaaS Providers & Partners<br>RSS & Social Activity |
| Feed & Connectors | Feed, Connector |
| Dashboards |  |
| Apps | KPI Builder, Process Visibility, ... |
| Analytics — Correlation | Patterns, Join, Sequence Matching, Real Time |
| Analytics — Function | Aggregation, Numeric, Data Time, Ordering |
| Analytics — Analysis | Time Series, Moving Avg’s & Trends, Predictive, Multi-Dimensional |
| BPMS | Policy Manager<br>BPM & Workflow |
| Big Data Framework or Data Warehouse | Event Capture<br>Analytics, Time Series<br>Event Retrieval & Queries<br>Offline Analysis |


[그림 39] BI 구성도
