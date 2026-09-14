<!-- PDF page: 040 -->

#### ② 전송 계층(Transport Layer)

호스트 간 전송 계층(Host-to-host Transport Layer)라고도 하며, TCP, UDP, SCTP 프로토콜과 같이 응용 프로그램에서 관리하는 추상 포트 간 데이터 교환을 담당한다. OSI 참조 모델에서 전송 계층에 해당한다.

#### ③ 인터넷 계층(Internet Layer)

네트워크 계층이라고도 하며, 주소 지정(Addressing)과 라우팅(Routing) 기능을 담당한다. OSI 참조 모델에서 네트워크 계층에 해당한다.

#### ④ 네트워크 인터페이스 계층(Network Interface Layer)

네트워크 접근 계층(Network Access Layer)이라고도 하며, TCP/IP 패킷을 IEEE 802.3 이더넷이나 IEEE 802.11 WiFi 등의 물리 매체(Physical Medium)를 통하여 실질적으로 패킷을 주고 받는 역할을 한다. OSI 참조 모델의 MAC 기능을 담당하는 데이터 링크 계층뿐만 아니라 전기 신호를 정의하는 물리 계층의 기능을 포함하고 있다.

<table>
<tr><th>OSI model layers</th><th>DARPA layers</th><th>TCP/IP Protocol Suite</th></tr>
<tr><td>Application Layer<br>Presentation Layer<br>Session Layer</td><td>Application Layer</td><td>HTTP, FTP, SMTP, DNS, RIP, SNMP</td></tr>
<tr><td>Transport Layer</td><td>Transport Layer</td><td>TCP, UDP</td></tr>
<tr><td>Network Layer</td><td>Internet Layer</td><td>IGMP, ICMP, ARP, IP (IPv4)<br>ND, MLD, ICMPv6, IPv6</td></tr>
<tr><td>Data Link Layer<br>Physical Layer</td><td>Network Interface Layer</td><td>Ethernet<br>802.11 wireless LAN<br>Frame Relay<br>ATM</td></tr>
</table>

<!-- 생략: 그림 14 / 프로토콜 상자들의 세부 포함·배치 관계 -->

[그림 14] TCP/IP 프로토콜 계층: ARPANET 참조 모델 기반 [10]

[그림 13]에서도 표현되었듯이 이들 프로토콜은 네트워크로 연결된 다른 호스트의 동일 프로토콜 계층과의 통신을 규정한다. 일반적으로 통신을 위해서는 동일 계층 프로토콜 간의 정보를 주고 받기 위한 헤더와 바로 위 계층에서 내려 받은 데이터가 필요하다.

[그림 15]에서처럼 응용 계층에서 전송하려는 사용자 데이터는 상대방 호스트와 연결되는 종단 간 프로토콜인 전송계층 프로토콜 TCP(또는 UDP)를 통하여 전송 가능한데, 이때 TCP 헤더(또는 UDP 헤더)가 필요하다.

TCP 헤더를 포함한 사용자 데이터가 전달되기 위해서는 상대방 호스트가 있는 네트워크까지의 라우팅 정보를 가지고 있는 네트워크 계층 프로토콜인 IP를 사용하며, 이러한 정보를 IP 헤더가 가지고 있다.
