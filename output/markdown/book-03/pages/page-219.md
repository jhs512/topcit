<!-- PDF page: 219 -->

#### 라) SDN과 NFV

초기에 SDN은 연구자와 데이터센터 설계자를 중심으로 개발되었고, NFV는 인터넷 서비스 제공자들(ISP, Internet Service Provider)에 의해 개발되었다. 그러나, SDN과 NFV 기술은 상호보완적으로, 현재 인터넷 서비스 제공자들은 두 기술을 결합하여 네트워크에 적용하고 있는 추세이다.

① NFV와 SDN 관계

[그림 151] NFV와 SDN의 관계 [8]

<!-- 세 원이 겹치는 벤 다이어그램 생략. 원본 원의 라벨과 설명을 전사했다. -->

| 라벨 | 설명 |
| --- | --- |
| Open Innovation | Creates competitive supply of innovative applications by third parties |
| Software Defined Networks | Creates network abstractions to enable faster innovation |
| Network Functions Virtualisation | Reduces CAPEX, OPEX, Space & Power Consumption |

SDN은 추상화된 네트워크를 만들어 보다 빠른 변화를 가능하게 하고, NFV는 CAPEX(Capital expenditures), OPEX(Operating expenditures), 공간과 자원의 소모를 줄여준다. NFV와 SDN은 상호 보완적인 관계로 독립적으로 구성하는 것이 가능하다.

② NFV와 SDN 비교

| 항목 | SDN | NFV |
| --- | --- | --- |
| 기술목적 | 컨트롤과 데이터 분리와 네트워크 컨트롤 중앙화를 통해 네트워크 기능을 소프트웨어적으로 구현 | VM(Virtual Machine)과 고성능 x86서버 플랫폼을 활용하여 기존 네트워크 전용 장치의 기능을 구현 |
| 대상위치 | 캠퍼스, 데이터센터 및 클라우드 중심으로 시작되었으나, 최근에는 통신사업자에서도 활용 | 초기부터 통신사업자 네트워크 장비를 대상으로 함 |
| 대상장치 | 중대형 라우터, 스위치 등 네트워크 장비 | 중대형 라우터, 스위치 등 네트워크 장비 |
| 구현기능 | 클라우드 오케스트레이션 및 네트워킹 | 라우터, 방화벽, 게이트웨이, CDN, WAN 가속기, SLA 보장 |
| 프로토콜 | 오픈플로우 중심 | 없음 |
| 주도기관 | 오픈 네트워킹 포럼(ONF) | ETSI NFV 워킹그룹 |
