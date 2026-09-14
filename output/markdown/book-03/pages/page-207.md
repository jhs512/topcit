<!-- PDF page: 207 -->

적절하게 처리해 주어야 한다. RTCP를 이용해 RTP의 QoS를 유지하고 미디어 스트림이 동기화되도록 할 수 있다.

#### 나) RTCP(Real-time Transport Control Protocol)

RTCP는 인터넷을 통한 영상이나 음성의 스트리밍용 프로토콜인 RTP를 제어하기 위한 프로토콜이며, RFC 1889에 RTP 와 함께 규정되어 있는 IETF 표준이다. RTCP 패킷 유형으로는 송신자 보고 패킷(Sender Report Packet), 수신자 보고 패 킷(Receiver Report Packet), 소스 기술 패킷(Source Description Message), 종료 패킷(Bye Message), 응용 지정 패킷 (Application Specific Packet)이 있다.

#### 다) RTSP(Real-time Streaming Protocol)

RTSP는 리얼타임 미디어 전송을 행하는 애플리케이션 계층의 프로토콜로 IETF가 1998년에 개발한 통신 규약으로 RFC 2326에 정의되어 있다. 실시간으로 음성이나 동화를 송수신하기 위한 통신 규약이며, 인터넷상에서 스트리밍 데이터를 제 어하는 방법에 대한 표준 프로코톨이다. 미디어 서버를 원격으로 제어할 때 쓰이고 명령어는 "PLAY”, "PAUSE” 같이 VCR 동작하고 비슷하며 시간 정보를 바탕으로 서버에 접근을 한다

#### 라) IMS(IP Multimedia Subsystem)

IMS(IP Multimedia Subsystem)는 무선통신분야의 국제표준을 개발하는 3GPP(3rd Generation Partnership Project) 그룹에 서 처음 제기하였다. IP Multimedia 서비스 제공을 위한 기반구조이며, SIP 프로토콜 기반의 호 제어를 핵심기술로 사용한 다.

① IMS 개념

IMS는 SIP 프로토콜 기반으로 멀티미디어 세션 제어 및 서비스 제공을 목적으로 표준화 기구인 3GPP에서 정의한 통신 플 랫폼이며, 유무선 다중접속 네트워크 환경에서 통합 서비스를 제공하기 위한 코어 네트워크이다.

② IMS 서비스 목표

IP 프로토콜을 기반으로 음성, 오디오, 비디오 및 데이터 등의 멀티미디어를 복합적으로 제공하고, 신속한 서비스 개발 및 변경을 목표로 한다. 범용적인 인터넷 기반 기술을 사용함으로써 서비스의 가격 경쟁력 향상과 함께, 효율적인 세션관리 기능을 기반으로 다양한 3rd party 애플리케이션과 손쉬운 연동을 가능케 하며, 서비스 간 글로벌 연동을 통해 사업 영역 의 확장을 가능하게 한다.

③ IMS 네트워크 구조

All IP망의 논리적인 구조는 무선망 도메인(radio network domain), GPRS 기반의 패킷 교환 서비스 도메인(GPRS packet switched service domain), IP 멀티미디어 서비스 도메인(IP multimedia service domain)으로 구분된다. GPRS 기반 의 패킷 교환 서비스 도메인은 3GPP 범위를 벗어나서 패킷 라우터에 의한 IP 네트워크로 대체 가능하며, 무선 도메인은 3GPP를 벗어난 Wibro, Mobile-LAN 등 다른 무선망 액세스 도메인 및 데이터망 액세스 도메인으로 대체 가능한 구조이 다. IMS 서비스 도메인은 IETF의 SIP 프로토콜을 이용한 등록 및 멀티미디어 호처리 기능을 담당하는 CSCF(Call Session Control Function), 기존 이동 네트워크(legacy mobile network)의 HLR(Home Location Register) 기능에 IP 멀티미디어 사용 자의 이동성 관리 및 인증을 위한 기능이 통합된 HSS(Home Subscriber Server)로 구성된다.

④ 컨버전스 관점에서 IMS의 역할

- IMS 인프라를 활용해서 컨버전스 환경의 ID 및 인증 체계 구현

- 서비스 제어를 위한 양방향 채널 제공
