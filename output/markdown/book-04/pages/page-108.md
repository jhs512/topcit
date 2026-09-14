<!-- PDF page: 108 -->

• 응용 계층(application layer): 웹(HTTP), DNS, 텔넷, FTP, 전자우편 송수신(SMTP/POP3/IMAP4) 등을 포함하는 응용 서비스를 제공하며, 하위 계층인 전송 계층이 제공하는 서비스를 이용하여 동작한다. OSI 참조 모델의 응용 계층뿐만 아니라 표현 계층과 세션 계층도 포함하는 개념으로 볼 수 있다.

• 전송 계층(transport layer): 호스트간 전송 계층(host-to-host transport layer)이라고도 하며, TCP, UDP, SCTP 프로토콜과
같이 응용 프로그램에서 관리하는 추상 포트 간 데이터 교환을 담당한다. OSI 참조 모델의 전송 계층에 해당한다.

• 인터넷 계층(internet layer): 네트워크 계층이라고도 하며, 주소 지정(addressing)과 라우팅(routing) 기능을 담당한다. OSI
참조 모델의 네트워크 계층에 해당한다.

[그림 58]에서의 네트워크 인터페이스 계층(network interface layer)은 TCP/IP 프로토콜 구조 종속적 개념은 아니며, 네트워크 접근 계층(network access layer)라고도 한다. 네트워크 인터페이스 계층은 네트워크 사용자 환경에서 임의로 선택하는 것으로 TCP/IP 패킷을 IEEE 802.3 이더넷이나 IEEE 802.11 WiFi 등의 물리 매체(physical medium)를 통하여 실질적으로
전달하는 역할을 수행한다. OSI 7계층 참조 모델의 MAC 기능을 담당하는 데이터 링크 계층뿐만 아니라 전기 신호를 정의
하는 물리 계층의 기능을 포함하고 있다.

| OSI model layers | DARPA layers | TCP/IP Protocol Suite |
| --- | --- | --- |
| Application Layer<br/>Presentation Layer<br/>Session Layer | Application Layer | HTTP, FTP, SMTP, DNS, RIP, SNMP |
| Transport Layer | Transport Layer | TCP, UDP |
| Network Layer | Internet Layer | IP (IPv4): ARP, IGMP, ICMP<br/>IPv6: ICMPv6, ND, MLD |
| Data Link Layer<br/>Physical Layer | Network Interface Layer | Ethernet, 802.11 wireless LAN, Frame Relay, ATM |

<!-- 그림 58의 계층별 배치와 프로토콜 이름을 표로 전사함. -->

[그림 58] TCP/IP 프로토콜 계층

② 계층별 보안 기능

TCP/IP 프로토콜 구조는 설계 목적이 자유롭게 정보를 교환하는 데 있어, 설계 과정에서 보안의 개념이 고려되지 않았다.
TCP/IP가 인터넷의 핵심 프로토콜로 사용되면서 전자상거래 등과 같은 응용이 개발되어 사용됨에 따라 TCP/IP 프로토콜
구조에 보안 기능을 갖는 프로토콜들을 추가하는 작업이 진행되고 있다. [그림 59]는 OSI 7계층 참조 모델을 기준으로 각
계층별 보안 프로토콜들을 보이고 있다.
