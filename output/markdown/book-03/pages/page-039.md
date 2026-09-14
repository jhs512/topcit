<!-- PDF page: 039 -->

<!-- 생략: 그림 13 / 개방 시스템 간 계층별 연결과 물리 매체의 세부 배치 -->

| 원문 영역 | 원문 표기 |
| --- | --- |
| Open System (양쪽) | Application, Presentation, Session, Transport, Network, Data Link, Physical |
| Relay open system | Network, Data Link, Physical |
| 물리 매체 | Physical media for OSI |
| 도식 식별자 | TISO2930-94/d11 |

[그림 13] 릴레이 개방 시스템을 포함한 OSI 참조 모델 통신 개념

OSI 참조 모델의 각 계층에 해당하는 프로토콜과 기능은 &lt;표 2&gt;에서와 같이 각 계층에서 담당하고 있는 기능이 잘 정의되어 있음을 알 수 있다[1].

&lt;표 2&gt; OSI 참조 모델 각 계층의 프로토콜과 기능

| 계층 | 프로토콜 | 기능 |
| --- | --- | --- |
| 응용계층 | HTTP, SMTP, SNMP, FTP, Telent 등 | 사용자 인터페이스, 전자우편, 데이터베이스 관리 등 서비스를 제공한다. |
| 표현계층 | JPEG, MPEG, XDR 등 | 두 시스템 간 교환되는 정보의 구문(Syntax)과 시맨틱과 관련된 인코딩 변환(Translation)과 암호화(Encryption)를 지원한다. |
| 세션계층 | TLS, SSH, RPC, NetBIOS 등 | 통신 세션을 구성하는 계층으로, 통신장치 간의 상호작용을 설정하고 유지, 동기화 한다. |
| 전송계층 | TCP, UDP, SCTP 등 | 종단 프로세스 간 신뢰성 있는 메시지 전송과 오류 제어 기능을 제공한다. |
| 네트워크계층 | IP, IPX, ICMP, X.25, ARP, OSPF 등 | 발신지로부터 목적지까지 네트워크 간 패킷 전송을 지원한다. |
| 데이터링크계층 | Ethernet, Token Ring, 무선랜 등 | 오류 없이 홉(Hop) 간 프레임(Frame)을 전달하는 기능을 제공한다. |
| 물리계층 | 전파, 광섬유, PSTN 등 | 물리적 매체를 통해 실제로 비트(bit) 흐름을 전송한다 |

인터넷 프로토콜 계층은 [그림 14]에서처럼 OSI 계층 모델보다 먼저 나온 ARPANET 참조 모델에 기반하고 있다([3], [9], [10]). 문서마다 조금씩 계층에 대한 용어 표현이 다른데, 본 장에서는 가장 보편적으로 사용되는 용어를 사용한다.

#### ① 응용 계층(Application Layer)

웹(HTTP), DNS, 텔넷, FTP, 이메일 송수신(SMTP/POP3/IMAP4) 등을 포함하는 응용 프로그램이 다른 계층의 서비스에 대한 접근을 허용한다. OSI 참조 모델에서 응용 계층뿐만 아니라 표현 계층과 세션 계층도 포함하는 개념으로 보면 된다.
