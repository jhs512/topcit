<!-- PDF page: 115 -->

③ 활용

IPSec을 활용하여 VPN의 구현은 물론 IPSec의 구현으로 안전한 원격 접속, 전자상거래 보안 등과 같이 응용 계층 서비스
에 대한 보안성도 제공하게 된다.

#### 나) SSL

① 개념

SSL은 1994년 Netscape사의 히크만(Hickman)에 의해서 개발된 프로토콜로서 SSL 버전 3.0이후 IETF(Internet Engineering
Task Force)에서 표준화되어 TLS(Transport Layer Security)로 명명되었으며, 대부분의 웹 브라우저에서 지원하고 있다.
SSL 프로토콜은 TCP/IP 프로토콜 구조에서 응용 계층과 전송 계층 사이에 위치하며, 신뢰할 수 있는 종단-대-종단 안전한 서비스를 제공하기 위해 TCP를 사용하도록 설계되었다. SSL은 다양한 응용 계층의 프로토콜에서 활용이 가능하지만,
실제 가장 널리 사용하는 응용은 HTTP로, 이 경우 HTTPS로 표현한다.
SSL의 중요한 개념 두 가지는 연결(Connection)과 세션(Session)이다.

• SSL 연결: SSL 연결이란 적절한 서비스를 제공하는 전송을 말하며, SSL에서 연결은 대등-대-대등(Peer-to-Peer) 관계
이며 일시적이고 모든 연결은 하나의 세션과 연관(Associated)됨

• SSL 세션: 하나의 SSL 세션이란 한 클라이언트와 한 서버 간의 연관을 말한다. 세션을 시작하려면 다음에 설명할 핸드쉐이크 프로토콜을 이용해야 한다. 세션은 다수의 연결이 공유하는 암호학적 보안 매개변수를 정의하며, 각 연결마다 필요한 새 보안 매개변수 협상 작업을 피하기 위하여 사용

② 구조와 동작

• SSL 프로토콜 구조
SSL은 [그림 64]에서와 같이 핸드쉐이크(Handshake), 암호 명세 변경(Change Cipher Spec), 레코드(Record) 및 경고
(Alert) 등 4개의 프로토콜로 구성되어 있다.

<table>
<tr><th colspan="7">Application Layer</th></tr>
<tr><td>SSL Handshake Protocol</td><td>SSL Change Cipher Spec Protocol</td><td>SSL Alert Protocol</td><td colspan="2">Protocols Secured by SSL</td><td rowspan="3">HTTP</td><td rowspan="3">SMTP etc...</td></tr>
<tr><td colspan="3"></td><td>HTTP</td><td>LDAP etc...</td></tr>
<tr><td colspan="5">SSL Record Layer</td></tr>
<tr><td colspan="7">TCP — Transport Layer</td></tr>
<tr><td colspan="7">IP — Internet Layer</td></tr>
<tr><td colspan="7">Network Access — Network Layer</td></tr>
</table>

[그림 64] SSL 프로토콜의 구성

• SSL 프로토콜 종류
SSL 프로토콜의 종류별 기능은 〈표 38〉에 보인다.
