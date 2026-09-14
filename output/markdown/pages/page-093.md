<!-- PDF page: 093 -->

번 저장된 데이터는 특별한 사유가 없는 한 소멸되거나 변경되지 않는다. 이러한, EDW의 특징을 상세히 설명하면 다음과
같다.
〈표 44〉 EDW의 특징


| 특징 | 설명 |
| --- | --- |
| 주제 지향적(Subject Oriented) | 분석하고자 하는 데이터를 일상적인 트랜잭션을 처리하는 주제 중심으로 시스템을 구조화 |
| 통합성(Integrated) | 기업의 내부·외부 데이터를 추출하여 표준화하고 통합화<br>서로 다른 형식의 데이터 표현에 대하여 데이터 추출 시 일관된 형식으로 표현되도록 관리 |
| 시계열성(Time Variant) | 데이터가 일정 기간 정확성을 유지하면서, 날짜, 주, 월과 같은 시점 별 요소 반영 |
| 비 휘발성(Non-volatile) | 분석의 일관성을 유지하기 위하여 정상적으로 기록되면 변경되지 않는 성질<br>저장된 데이터는 읽기 전용으로 존재하며 특별한 규칙이나 이벤트가 없는 한 삭제되지 않음 |


##### ④ EDW 구성


EDW는 업무지원시스템이 운영 중에 생성하는 데이터를 수집하고 변환 및 적재하는 활동으로 시작하여 요구사항에 부합
하는 데이터를 분석하고 가시화하여 의사결정 지원에 도움을 줄 수 있도록 구성된다. 거시적 관점에서는 이러한 모든 프
로세스를 EDW라고 하며 미시적 관점에서는 데이터를 저장하는 저장소를 EDW라고 표현하기도 한다.
<!-- 생략: 그림 37 / 복잡한 연결 및 차트 -->

Data Source → Data Acquisition → Data Warehouse → Data Delivery → Data Consumption


| 구분 | 내용 |
| --- | --- |
| Operational Systems | Customer Type = “Retailer”<br>Customer Type = “Wholesale”<br>Customer Type = “Internal” |
| Data Acquisition | Extract, Load, Transform<br>Customer Type = “Retailer”<br>Data Quality, Data Survivorship<br>Master Data: Customer, Product, Hierarchy<br>Data Governance<br>Match, Merge Standardise |
| Data Warehouse | EDW |
| Data Delivery | Data Marts |
| Data Consumption | BI Solutions |


[그림 37] EDW 개념도


위의 그림에서 보는 바와 같이 기업의 운영계(Legacy) 시스템에서 트랜잭션 데이터를 추출하여 저장소에 저장하고 분석
된 데이터는 정보로서 가치를 가지며 BI Solutions에 의하여 가시화된다.
