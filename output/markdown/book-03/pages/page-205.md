<!-- PDF page: 205 -->

② SIP 메시지 구조

SIP는 사용자들을 구분하기 위해 이메일 주소와 비슷한 SIP URI(Uniform Resource Identifier)을 사용하여 IP 주소에 종속되 지 않고 서비스 제공이 가능하다. SIP 메시지 요소로는 요청할 메소드(method) 종류와 SIP URI를 기술하는 START LINE, 세션을 제어하기 위한 값을 설정하는 HEADER Content-Type에 설정된 타입의 내용이 있는 BODY, HEADER와 BODY 사 이의 공백인 CR/LF 등이 있다.

#### 다) H.323

H.323은 품질이 보장되지 않는 랜상에서 음성, 데이터, 영상 서비스를 제공하기 위한 ITU-T 표준이다. 기존 네트워크의 하 부구조 변경 없이 쉽게 멀티미디어 서비스 제공이 가능하여 초기 VoIP 사업자가 많이 사용하는 프로토콜이다.

H.323 네트워크의 아키텍처는 [그림 140]과 같으며, 서비스 구성요소로는 일반전화, 팩스 멀티미디어 장비를 갖춘 PC 등 실제 사용자에 의해 사용되는 장치인 Terminal, E.164와 IP 주소 간의 변환, 리다이렉션 작업과 콜에 대한 인증 작업을 수 행하고, 콜 시그널링, 구성요소와 대역폭 관리를 수행하는 게이트키퍼(Gatekeeper), 서로 다른 네트워크(IP network, PSTN, ISDN, ATM 등) 간의 논리적인 연결(인코딩, 프로토콜, 콜 제어) 매핑 기능을 수행하는 게이트웨이(Gateway)로 구성된다.

<!-- 원본 그림 140의 H.323 네트워크 아키텍처 생략. 중앙 IP LAN. 연결 라벨: H.323 endpoint, H.450 Call Deflection, IP-based Voice Mail Server, MCU, Gate-Keeper, H.225.0 Annex G Inter-Domain, H.323 Annex E UDP Signaling, Firewall Server, Egress Router, ISP, Voice Fax GW, H.320 GW, CO, PBX, PSTN/ISDN, H.323 Annex D(T.38 Fax), H.323 Annex F(Simple Endpoint Types). -->

[그림 140] H.323 네트워크 아키텍처

#### 라) VoLTE(Voice over LTE)

VoLTE는 데이터뿐만 아니라 음성까지도 LTE망을 통해 제공되는 기술로 차세대 무선 브로드밴드 네트워크 기술인 LTE 환경에서 제공되는 음성서비스이다

VoLTE는 음성서비스 영역을 가리키지만, LTE 기술은 All-IP 기반의 데이터 전용 네트워크이기 때문에 실제로 제공되는 VoLTE 서비스는 디지털 데이터의 형태로 구현된다. 따라서 음성, 문자, 영상 채팅, 멀티미디어 콘텐츠를 인터넷전화의 주 요 통화솔루션인 SIP(session initiation protocol) 방식으로 전송하게 되며, IMS(IP Multimedia Subsystem) 아키텍처를 통해서 데이터로 존재하는 음성 및 문자와 같은 서비스를 전송한다.

이러한 VoLTE 기술 솔루션이 처음부터 완벽하게 구현되지는 못한다. 그 이유는 아직 LTE 인프라가 충분히 갖추어져 있 지 않고 음성서비스가 WCDMA/GSM 망을 넘나드는 전송 기능이 자유롭지 못하기 때문이다 즉, 끊김 없는 통신서비스를 제공하기 위해서는 LTE 및 3G 네트워크 간에 로밍 및 상호접속이 필요하지만, 이러한 신구 네트워크 간 로밍 및 상호접속 합의가 쉽게 이루어지고 있지 않다는 데에 문제가 있다. 이러한 상황을 해결하는 과정으로 다음의 2가지 단계를 생각해 볼 수 있다.

첫째, 서킷폴백(circuit switched fallback) 솔루션으로 호가 WCDMA/GSM 서킷 망에서 주로 이루어지며, LTE 터미널 벤더

및 이동통신사들이 최소한의 로밍을 해주는 형식이다. 그러나 이러한 단계에서는 멀티미디어 커뮤니케이션 서비스가 구
