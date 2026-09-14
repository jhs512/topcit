<!-- PDF page: 206 -->

현되지 않는다

둘째, LTE 네트워크 구축의 초기 단계를 지나 커버리지가 어느 정도 갖추게 되면 3GPP MMTel(Multimedia Telephony)와 같은 적절한 솔루션을 통해서 멀티미디어 커뮤니케이션 서비스를 구현하는 단계로 진화된다.

[그림 141]은 3G네트워크상에서 VoLTE 서비스가 구현되는 방식을 보여주고 있다

<!-- 원본 그림 141 VoLTE 개념도 생략. 두 휴대단말/무선망과 2G/3G CS core(서킷스위치 코어), Evolved packet core(진화한 패킷코어), IMS(IP멀티미디어 서브시스템), IMS voice, SCC AS, MMTel(멀티미디어 텔레포니) 연결 구성. -->

자료: 에릭슨 화이트 페이퍼 (2010. 12)

[그림 141] 3G네트워크상에서 VoLTE 서비스 모형도

### 03 미디어 전송 프로토콜

미디어 전송 프로토콜에는 RTP(Real Time Transport Protocol), RTCP(Real Time Control Protocol), RTSP(Real Time Streaming Protocol)가 있다. RTP는 인터넷상에서 실시간 트래픽을 처리하기 위해 설계되었으며, 주로 인터넷을 통해 실시간 으로 비디오 또는 오디오 데이터를 전송하기 위해 사용하는 프로토콜이다. RTCP는 인터넷을 통한 영상이나 음성의 스트리밍 용 프로토콜인 RTP(Real-time Transport Protocol)를 제어하기 위한 프로토콜이다. IETF 표준문서 RFC 1889에 RTP와 함께 규 정되어 있다. RTSP는 스트리밍 미디어 서버를 제어하기 위해 엔터테인먼트 및 통신 시스템에 사용하도록 설계된 프로토콜이 다. RTP는 엔드 포인트 간의 미디어 세션을 설정하고 제어하는 데 사용되며, 실제 미디어 스트리밍 데이터를 전송하지는 않 는다. 대부분의 RTSP 서버는 RTP 규약을 사용해서 전송 계층으로 실제 오디오/비디오 데이터를 전송한다.

#### 가) RTP(Real-time Transport Protocol)

실시간 전송 프로토콜(RTP, Real-time Transport Protocol)은 인터넷상에서 실시간 트래픽을 처리하기 위해 설계되었으 며, 주로 인터넷을 통해 실시간으로 비디오 또는 오디오 데이터를 전송하기 위해 사용하는 프로토콜이다. RTP는 전송계층 의 UDP(User Datagram Protocol)상에서 수행된다.

RTP 프로토콜에서 미디어 파일을 보내는 송신 측은 코덱으로 압축된 미디어 단위 데이터를 RTP 패킷으로 만든 뒤 UDP 를 이용해 수신 측으로 보낸다. UDP를 이용해 전송되기 때문에 RTP는 정해진 시간 내 패킷이 전달과 패킷이 손실되지 않

는 것을 보장하지 못한다 따라서, 비디오 및 오디오 애플리케이션에서 RTP 패킷의 헤더에 포함된 각종 정보들을 이용해
