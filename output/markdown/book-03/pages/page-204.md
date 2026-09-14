<!-- PDF page: 204 -->

#### 나) VoIP 호(Call) 신호 프로토콜

VoIP 호 신호 프로토콜에는 SIP(Session Initiation Protocol)와 H.323이 있다. SIP 프로토콜은 인터넷상에서 통신하고자 하는 지능형 단말들이 서로를 식별하여 그 위치를 찾고, 그들 상호 간에 멀티미디어 통신 세션을 생성하거나 삭제 변경하 기 위한 절차를 명시한 응용계층 시그널링 프로토콜이다. H.323 프로토콜은 품질이 보장되지 않은 랜(LAN)상에서 음성, 데이터, 영상 서비스를 제공하기 위한 ITU-T 표준으로, 기존 네트워크의 하부 구조 변경 없이 쉽게 멀티미디어 서비스 제 공이 가능하여 초기 VoIP 사업자가 많이 사용한 프로토콜이다.

① SIP(Session Initiation Protocol)

SIP는 멀티미디어 세션의 설정, 수정, 종료를 위해 사용하는 응용 계층 시그널링 프로토콜이다. 하위 계층 전송 프로토콜 과 독립적으로 동작하며, HTTP 텍스트 기반 프로토콜로 확장성을 가진다.

패킷 교환 네트워크에서 회선 교환망 방식의 호 제어가 가능하도록 세션을 제어하며, 패킷 네트워크인 인터넷상에서 멀티 미디어 애플리케이션이 가능하게 하고, URL 및 E-mail 형식의 텍스트 기반 어드레싱 방법, 메시지 파싱이나 확장이 용이 하다.

SIP 프로토콜 스택은 [그림 139]와 같으며, 전송계층 프로토콜인 TCP와 UDP 상단에 위치한다. SIP 프로토콜의 구성요소들 은 〈표 79〉와 같다.

| 스택 구획 | 구성 |
|---|---|
| 최상위 | SIP API |
| 시그널링 | SIP, SDP → TCP / UDP |
| 미디어 | Audio Codec, Video Codec → RTP / RTCP → UDP |
| 공통 하위 | IP → Physical |

[그림 139] SIP 프로토콜 스택

〈표 79〉 SIP 프로토콜 구성

<table>
<tr><td>구분</td><td>내용</td></tr>
<tr><td>SIP</td><td>RFC 3261, SIP 기본 내용 정의</td></tr>
<tr><td>SDP</td><td>Session Description Protocol, RFC 4566/3264<br>• 멀티미디어 세션 파라미터(parameter) 설정</td></tr>
<tr><td>Audio Codec</td><td>• G.711A, G.723.1, G.729A<br>• 음성코딩 담당, 다양한 시스템과 호환을 위해 여러 규격 존재</td></tr>
<tr><td>Video Codec</td><td>• H.263, MPEG—4, H.264<br>• 비디오 코딩, H.263이 공통으로 사용되며, H.264 최신 버전</td></tr>
<tr><td>RTP/RTCP</td><td>• Realtime Transport (Control) Protocol, RFC 3550, RFC 3551<br>• 실시간 통신 프로토콜</td></tr>
</table>
