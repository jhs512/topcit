# 시스템아키텍처·정보보안 PPT 교재 대조

검토일: 2026-09-09. 대상은 시스템아키텍처 10개와 정보보안 10개 마크다운 원본이다. 저장소의 03권 221쪽, 04권 124쪽 PDF에서 관련 본문을 추출해 읽고 표·그림의 페이지 이미지를 대조했다. 전권 정독이나 교재 자체의 모든 사실에 대한 최신성 검증을 뜻하지 않는다.

표의 PDF 쪽은 뷰어에 입력하는 1부터 시작하는 페이지 번호다. 교재 인쇄 쪽보다 2 크다. 각 PPT의 핵심 개념, 사례, 핵심 구분 표를 대조했다. 교재에 없는 예시·판단을 모두 교재 문장이라고 취급하지 않았으며, 모든 자료에 자체 재구성 표시를 넣었다. 직접 근거가 약한 내용은 아래처럼 교체하거나 재구성 사실을 명시했다.

| 자료 | 확인한 PDF 쪽 | 실제 본문 근거 | 결과·변경 |
| --- | --- | --- | --- |
| [architecture-layers](../slides/architecture-layers.md) | [26 (본문 24)](https://jhs512.github.io/topcit/viewer/index.html?book=03&page=26) | 서버의 하드웨어·OS·미들웨어·응용 스택 및 웹·응용·DB 서버 역할 | 개념 확인. 지연 원인을 계층별로 찾는 상황과 변경 비용 판단은 자체 적용 예시. |
| [architecture-process](../slides/architecture-process.md) | [48–50 (본문 46–48)](https://jhs512.github.io/topcit/viewer/index.html?book=03&page=50) | 실행 중 프로그램, 스레드의 메모리 공유 및 개별 레지스터·스택 | 개념 확인. 두 요청의 힙 공유 사례는 재구성. 프로세스 주소 공간 분리는 기본적인 경우로 한정. |
| [architecture-scheduling](../slides/architecture-scheduling.md) | [55–56 (본문 53–54)](https://jhs512.github.io/topcit/viewer/index.html?book=03&page=55) | 스케줄링 목적, FIFO/FCFS, 우선순위, 라운드 로빈 비교표 | 개념 확인. 긴 작업 대기 사례와 시간 할당량·문맥 교환 관계는 표의 정책을 설명하는 적용 판단. |
| [architecture-synchronization](../slides/architecture-synchronization.md) | [51–52 (본문 49–50)](https://jhs512.github.io/topcit/viewer/index.html?book=03&page=51) | 경합 상태, 임계구역, 상호배제, 교착의 네 조건·예방 | 개념 확인. 수량 10→11 유실과 잠금 순서 통일은 자체 사례. 순환 대기와 연결. |
| [architecture-virtual-memory](../slides/architecture-virtual-memory.md) | [56–57 (본문 54–55)](https://jhs512.github.io/topcit/viewer/index.html?book=03&page=56) | 가상·실제 주소, MMU, 페이징·세그먼테이션, FIFO/LRU 교체 | 수정. 교재에서 직접 확인되지 않은 TLB·minor page fault·스래싱 설명을 제거. 교재의 페이지/프레임 및 페이지 교체로 교체. |
| [architecture-raid](../slides/architecture-raid.md) | [92–94 (본문 90–92)](https://jhs512.github.io/topcit/viewer/index.html?book=03&page=93) | RAID 0/1/5/6의 중복·패리티와 장애 허용 | 수정. RAID 전체가 디스크 고장을 보호하는 것으로 읽힐 문장을 고치고 RAID 0 제외 명시. 4×2TB→6TB는 자체 계산 예이며 파일시스템 비용 제외. 백업과 차이는 적용 설명. |
| [architecture-tcp-ip](../slides/architecture-tcp-ip.md) | [39–40·180–181 (본문 37–38·178–179)](https://jhs512.github.io/topcit/viewer/index.html?book=03&page=40) | TCP/IP 각 계층 역할, TCP 스트림·신뢰성, HTTP 요청응답 전달 | 개념 확인. TCP 성공과 업무 성공의 차이는 자체 적용 판단. 계층 본문과 TCP 상세를 두 링크로 연결. |
| [architecture-virtualization](../slides/architecture-virtualization.md) | [131–134 (본문 129–132)](https://jhs512.github.io/topcit/viewer/index.html?book=03&page=133) | 자원 추상화, 하이퍼바이저, OS 레벨 가상화 비교 | 개념 확인. 컨테이너 커널 공유는 본문과 표34에 근거. 격리 요구에 따른 선택은 자체 판단 예시. |
| [architecture-availability](../slides/architecture-availability.md) | [122–124 (본문 120–122)](https://jhs512.github.io/topcit/viewer/index.html?book=03&page=123) | HA 정의, heartbeat·failover, 동시 접근과 부하분산 | 개념 확인. 공통 DB 단일 장애점과 복제 일관성 검토는 자체 설계 예시로 구분. |
| [architecture-recovery](../slides/architecture-recovery.md) | [122·126 (본문 120·124)](https://jhs512.github.io/topcit/viewer/index.html?book=03&page=122) | 복구 목표시간 RTO와 손실 허용시점 RPO | 개념 확인. 2시간·15분 수치는 자체 예시이며 목표와 보장을 구별. 훈련 필요성은 적용 설명. |
| [security-cia](../slides/security-cia.md) | [15–16 (본문 13–14)](https://jhs512.github.io/topcit/viewer/index.html?book=04&page=15) | 정보보안 정의와 기밀성·무결성·가용성 | 개념 확인. 성적 서비스와 암호화의 보호 범위는 자체 예시. |
| [security-risk](../slides/security-risk.md) | [61–62 (본문 59–60)](https://jhs512.github.io/topcit/viewer/index.html?book=04&page=61) | 자산·위협·취약성, 수용 가능한 위험, 위험 평가 | 개념 확인. 위험의 가능성·영향은 본문 손실 가능성과 평가 방법의 요약. 외부 관리 기능과 잔여 위험은 적용 설명. |
| [security-identity](../slides/security-identity.md) | [41–42 (본문 39–40)](https://jhs512.github.io/topcit/viewer/index.html?book=04&page=42) | 식별·인증·인가와 자원·행위 접근통제 | 개념 확인. 학생 성적 소유권 확인과 UI 버튼의 한계는 자체 적용 사례. |
| [security-least-privilege](../slides/security-least-privilege.md) | [42–43·48 (본문 40–41·46)](https://jhs512.github.io/topcit/viewer/index.html?book=04&page=42) | 최소권한, 역할 기반 접근통제, 접근권한 관리·회수 | 수정. 직접 연결이 약한 직무분리 표 항목을 역할 기반 통제로 교체. 조회/배포 역할 분리는 자체 예시. |
| [security-encryption](../slides/security-encryption.md) | [24–29 (본문 22–27)](https://jhs512.github.io/topcit/viewer/index.html?book=04&page=24) | 암호화·복호화, 대칭키/공개키 차이, 인증·키 교환 및 속도 비교 | 수정. 혼합 통신 문장이 교재 원리를 조합한 예라는 점 명시. 알고리즘별 현재 권고 수준은 이 자료의 범위가 아님. |
| [security-hash-signature](../slides/security-hash-signature.md) | [29–30·38–39 (본문 27–28·36–37)](https://jhs512.github.io/topcit/viewer/index.html?book=04&page=38) | 고정 길이 해시, 개인키 서명·공개키 검증, 인증서 연결 | 개념 확인. 파일과 해시를 함께 바꿀 수 있는 상황은 자체 신뢰 경계 예시. 해시와 전자서명 두 본문 링크. |
| [security-transport](../slides/security-transport.md) | [109·39–41 (본문 107·37–39)](https://jhs512.github.io/topcit/viewer/index.html?book=04&page=109) | SSL/TLS의 통신 보호·무결성과 PKI·인증서 | 개념 확인. HTTPS 서버명 확인과 서버 취약점은 통신 보호 범위를 설명하는 자체 적용 예시. 교재의 상세 핸드셰이크 인용이 아님. |
| [security-secure-development](../slides/security-secure-development.md) | [70–73 (본문 68–71)](https://jhs512.github.io/topcit/viewer/index.html?book=04&page=70) | Secure SDLC, PreparedStatement로 쿼리 구조 보호, XSS 문자 변환 | 개념 확인. 입력·질의·출력 방어를 구분. 맥락별 인코딩·서버 권한·비밀·의존성 점검은 수업용 확장 적용 설명이며 교재 체크리스트 인용이 아님. |
| [security-privacy](../slides/security-privacy.md) | [64 (본문 62)](https://jhs512.github.io/topcit/viewer/index.html?book=04&page=64) | 수집 목적·항목·보유기간, 파기, 접근통제, 암호화 | 개념 확인. 최소 수집·출석 사례는 목적/항목 제한의 자체 설계 적용. 오래된 교재의 법정 보관기간 숫자는 전재하지 않음. 현행 법률 전체 검증을 의미하지 않음. |
| [security-incident](../slides/security-incident.md) | [60·63 (본문 58·61)](https://jhs512.github.io/topcit/viewer/index.html?book=04&page=60) | ISMS의 신속 대응·손실 최소화, 사고 예방·대응, 점검·개선 | 수정. 본문에서 동일한 상세 대응 단계는 확인되지 않음. 핵심을 관리체계에 맞추고 계정 제한·기록 보존 및 세 단계는 자체 수업용 재구성임을 슬라이드에 직접 명시. |

## 검토 한계와 해석 원칙

- 교재를 근거로 만든 교육용 설명이며 축약·사례·판단 문장까지 원문에 그대로 있다는 뜻은 아니다. 특히 보안 사고 대응의 상세 순서는 자체 재구성이다.
- PDF 텍스트 인식에 공백과 글자 오류가 있어 용어 검색은 위치 찾기에만 쓰고 앞뒤 본문을 함께 읽었다. PDF 43쪽처럼 추출 순서가 뒤집힌 표는 페이지 이미지로 확인했다.
- 오래된 암호 알고리즘 권고·개인정보 법정 보관기간·당시 시장 점유율은 슬라이드에 새로 옮기지 않았다. 현행 법률이나 TLS 버전별 구현 지침의 검증은 별도 작업이다.
- 모든 참고 링크는 자체 배포 뷰어의 실제 근거 쪽으로 연결했다. 공식 전자책으로 연결되는 링크나 첫 페이지 임시 링크는 이 20개 원본에 없다.
