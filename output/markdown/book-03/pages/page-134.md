<!-- PDF page: 134 -->

<table><tr><td>Application 2<br>Application 1<br>컨테이너</td><td>Application 2<br>Application 1<br>컨테이너</td></tr><tr><td colspan="2">Host OS</td></tr><tr><td colspan="2">하드웨어</td></tr></table>

[그림 95] OS레벨 가상화

컨테이너형 가상화 기술은 기존의 가상화 기술에 비교하여 가볍고 이식성이 뛰어난 특징을 갖는다. LXC(Linux Containers)에서 OS의 내부에는 물리적 자원을 관리하는 “커널 공간”과 사용자 프로세스를 실행하는 “사용자 공간”이 있다. 컨테이너형 가상화 기술은 사용자 공간을 분할하여 열 개로 나누고 각각의 사용자 프로세스에서 보이는 자원을 제한하는 방식으로 운영된다.

〈표 34〉 Hypervisor 가상화와 OS레벨 가상화 비교

| 항목 | Hypervisor 가상화 | OS-Level 가상화 |
| --- | --- | --- |
| 하드웨어 독립성 | VM내에서 완전 독립 | 호스트 OS 사용 |
| OS 독립성 | Host OS와 완전 독립 | 호스트 OS와 게스트 OS 동일 |
| 성능 | 높은 Overhead발생<br>성능 향상을 위한 H/W가상화 적용 | Overhead 발생 없음 |
| 관리 | VM별로 별도 관리 | 공통 S/W 중앙 집중식 관리 |
| 응용분야 | 이기종 통합<br>리눅스&윈도우 혼합 | 단일 OS 환경 자원 통합 |
| 가상화 기술 | Xen, MS Virtual Server, KVM | Solaris, LXC(Linux Container), Docker |

OS레벨 가상화(컨테이너 가상화)의 강점은 다음과 같다.

- 빠른 시작과 종료: 하이퍼바이저 기반 가상화에 비교하여 매우 빠름
- 높은 집적도: 여러 컨테이너를 운영 시 OS는 1개이므로 소비 자원 최소화
- 낮은 오버헤드: 에뮬레이션 없이 사용자 공간 격리
- 애플리케이션 컨테이너 지원: 애플리케이션별 컨테이너 구성 지원

OS레벨 가상화의 단점은 다음과 같다.

- Host OS에 종속적
- 컨테이너별 커널 구성이 불가능
