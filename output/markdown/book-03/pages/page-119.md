<!-- PDF page: 119 -->

| 전통적인 IT 인프라 (DIY)<br>Legacy Infra. | Converged Infrastructure (CI) | Hyper Converged Infrastructure (HCI) |
| --- | --- | --- |
| • 전통적인 IT 인프라 유형<br>• 분리된 개별 컴포넌트로 도입 (서버, 스토리지, 네트워킹 및 소프트웨어)<br>• 공급사(Reseller)또는 고객사 IT Staff에 의하여 현장에서 구성 및 통합<br>• 공급업체별 유지보수 및 지원 | • 서버, 스토리지, 네트워킹 및 소프트웨어가 단일 SKUs로 공급 (Reference Architecture의 경우, 별도 개별 SKUs)<br>• 제조사 또는 공급사(Reseller)에 의하여 Facatory에서 통합 구성되어 고객사에 공급<br>• Reference Architecture의 경우 고객사 On-Site에서 구성 | • 새로운 형태의 통합 시스템<br>• 서버 및 Software Defined Storage가 하나의 솔루션 또는 어플라이언스로 공급 (외장 스토리지가 존재하지 않음)<br>• 솔루션에 따라 Software Defined Networking 및 추가 솔루션을 통합 제공<br>• Software Defined 기술을 근간으로 통합된 운영 및 관리체계 제공 |

<!-- 생략: 그림 83 / 서버 제품 사진과 CI·HCI 외곽 점선 -->

[그림 83] 전통적 인프라 vs 컨버지드 인프라

하지만 컨버지드 인프라는 사전 통합 및 검증된 시스템으로 빠른 서비스 구축이 가능하다는 장점에도 불구하고 실제 시장에서는 투입된 자원 대비 성과가 좋지 못해 평가가 엇갈렸다. 서버와 NW, 특히 외장형 스토리지까지 통합된 제품이다 보니 기본적으로 구매 비용이 높았고, 이는 시스템 확장 시에도 문제가 됐다. 특히 고성능의 외장형 스토리지는 비용적으로나 구조적으로나 커다란 부담으로 작용했다.

하이퍼 컨버지드 인프라(Hyper Converged Infrastructure, 이하 HCI)는 이런 CI의 한계를 극복하는 개념으로, 핵심은 비싼 외장 스토리지의 제거다. [그림 84]와 같이 HCI는 범용 x86서버 아래에 위치하는 DAS(Direct Attached Storage)를 IP 기반 NW를 통해 소프트웨어 정의 스토리지(Software-Defined Storage, SDS) 기술로 묶어, SAN(Storage Area Network)과 유사한 스토리지 풀(Storage Pool)로 활용한다는게 가장 큰 특징이다. 외장 스토리지를 없앰으로써 구조적인 복잡성을 제거함과 동시에 확장성을 만족시키고, 무엇보다 비용 절감을 달성한 아키텍처이다.
