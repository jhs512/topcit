<!-- PDF page: 203 -->

내는 메시지이며, 송신기 방향(upstream)으로 이동하여 RSVP를 지원하는 라우터의 자원을 예약하는 Resv 메시지가 있다.

경로상 라우터가 RSVP를 지원하지 않으면, 최선 노력(best—effort) 전달방법을 기반으로 패킷 전달한다.

IP 데이터그램의 TOS 필드를 이용한 우선순위 방법은 [그림 140]과 같이 1바이트의 TOS(Type Of Service) 필드를 검사하 여 설정된 값에 따라 처리 우선 순위를 결정한다. TOS Class는 0에서 7까지 8단계로 구분되며 숫자가 높을수록 처리 우선 순위가 높다.

첫 번째 필드인 PRECEDENCE는 해당 패킷의 우선순위 또는 중요도를 나타내며, TOS 필드는 네트워크에서 처리량, 지연, 신뢰성, 비용 간에 균형을 유지하는지를 나타낸다. 마지막 MBZ(must be zero) 필드는 현재 사용되지 않는 필드이다.

TOS 필드는 4비트의 이진수로 표현되며 각 값들은 〈표 78〉과 같은 의미를 가진다.

〈표 78〉 TOS 필드 값

<table>
<tr><td>이진수 값</td><td>의미</td></tr>
<tr><td>1000</td><td>지연 최소화를 가장 우선</td></tr>
<tr><td>0100</td><td>처리량을 가장 우선</td></tr>
<tr><td>0010</td><td>신뢰성을 가장 우선</td></tr>
<tr><td>0001</td><td>비용 최소화를 가장 우선</td></tr>
<tr><td>0000</td><td>일반적인 서비스</td></tr>
</table>

### 02 인터넷 전화 개념 및 호 신호 프로토콜

#### 가) VoIP(Voice over Internet Protocol)란?

VoIP는 IP 네트워크를 기반으로 패킷 데이터를 통해 음성통화를 구현하는 통신기술이다. VoIP 시스템의 구조는 [그림 138] 과 같으며 주요 서비스 구성요소는 미디어 게이트웨이(Media Gateway)와 시그널링 게이트웨이(Signaling Gateway)가 있다. 미디어 게이트웨이는 멀티미디어 데이터 간의 교환 작업을 수행하고, 변경한 데이터를 해당 네트워크에 전달하는 기능을 수행하며, MGCP(Media Gateway Control Protocol)를 통해 제어를 한다. 시그널링 게이트웨이는 H.323, SIP, MGCP, MEGACO 등과 같은 프로토콜을 사용하여 콜 시그널링을 수행하며 PSTN과 IP 네트워크의 시그널들을 서로 사용할 수 있 도록 변환하는 기능을 수행한다.

<!-- 원본 그림 138의 VoIP 네트워크 연결도 생략. 구성 라벨: PSTN, SSP, SS7, Signaling Gateway, Media Gateway, IP Device, IP network. 연결 프로토콜 라벨: H.323, SIP, SIGTran, MGCP/MEGACO, RTP/RTCP. -->

[그림 138]

과 같으며 주요 서비스 구성요소는 미디어 게이트웨이(Media Gateway)와 시그널링 게이트웨이(Signaling Gateway)가 있다. 미디어 게이트웨이는 멀티미디어 데이터 간의 교환 작업을 수행하고, 변경한 데이터를 해당 네트워크에 전달하는 기능을 수행하며, MGCP(Media Gateway Control Protocol)를 통해 제어를 한다. 시그널링 게이트웨이는 H.323, SIP, MGCP, MEGACO 등과 같은 프로토콜을 사용하여 콜 시그널링을 수행하며 PSTN과 IP 네트워크의 시그널들을 서로 사용할 수 있 도록 변환하는 기능을 수행한다.

IP Device SignaIing Gateway H.323,SlP PSTN PSTN RTP/RTCP SS7 H.323,SlP $7 SSP SSP SlGTran MGCP/ MEGACO 0 0 RTP / RTCP IP network Media Gateway

[그림 138] VoIP 시스템 구조
