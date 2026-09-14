<!-- PDF page: 188 -->

아래 표는 UDP를 사용하는 서비스 중 많이 사용되는 서비스에 대해 잘 알려진 포트(well-known port)이다. 네트워크를 통 하여 호스트 시간을 보정하는 NTP 서비스, 네트워크 IP 관리 프로토콜인 BOOTP와 DHCP, FTP보다 단순한 TFTP, 라우팅 프로토콜인 RIP와 OLSR, 컴퓨터 네트워크 인증 프로토콜인 Kerberos 등을 지원한다.

〈표 71〉 잘 알려진 UDP 포트

| 서비스 | TCP 포트 | 서비스 | TCP 포트 |
|---|---|---|---|
| NTP [12,13] | 123 | Syslog | 514 |
| BOOTP Server, DHCP Server [14,15] | 67 | RIP [18] | 520 |
| BOOTP Client, DHCP Client [14,15] | 68 | RIPng | 521 |
| TFTP [16] | 69 | Timed (Time Server) | 525 |
| Kerberos [7] | 88 | OLSR [19] | 698 |

<!-- 표 71의 열 제목 TCP 포트는 원문 그대로 보존. -->

#### 나) UDP 프로토콜

사용자 데이터그램(User Datagram)이라고 부르는 UDP 패킷은 아래 표와 같이 각각 2바이트(16비트)인 4개의 필드로 만들어진 고정된 크기의 8바이트 헤더를 가지고 있다. UDP 헤더의 각 필드는 〈표 72〉와 같은 목적으로 사용된다.

〈표 72〉 사용자 데이터그램 헤더 필드

| 필드 이름 | 길이 | 내용 |
|---|---|---|
| Source Port | 2Bytes | 소스 포트 패킷의 출발지 포트 번호. 0~65,535 값 중 하나 |
| Destination Port | 2Bytes | 목적지 패킷의 목적지 포트 번호 |
| Length | 2Bytes | UDP 헤더와 데이터 필드를 포함한 전체 패킷의 길이 |
| Checksum | 2Bytes | 데이터 오류 검출을 위한 값 |
| Data octets | 가변 | 전송하고자 하는 데이터를 저장 |


출발지 포트(Source port)는 전송하는 프로세스의 포트를 의미하며, 목적지 포트(Destination port)는 특정 목적지 호스트의

포트 번호를 의미한다. 길이(length)는 UDP 헤더(최소 8)와 데이터 크기를 합친 것이다. 검사합(Checksum)은 의사(Pseudo)

IP 헤더와 UDP 헤더, 그리고 데이터에 대하여 16비트 1의 보수 더하기를 한 결과이다. 계산하기 전 검사합 필드는 0으로 채워진다.

전술하였듯이 UDP 프로토콜은 TCP와 달리 데이터를 응용 계층으로부터 받아서 IP 계층으로 내려 보내주고 IP 계층으로 부터 수신 받은 UDP 사용자 데이터그램을 분석하여 적합한 응용 프로그램으로 전달해 주면 되므로 구현이 간단하다.

### 04 SCTP(Stream Control Transmission Protocol)

#### 가) SCTP 특징

스트림 제어 전송 프로토콜(SCTP)은 멀티미디어 통신을 위해 UDP와 TCP의 일부 장점을 결합하여 설계된 새로운 전송계층 프로토콜이다[3]. SCTP 프로토콜의 서비스 특징은 아래 표와 같다. 종단 간 TCP 연결(connection)과 달리 SCTP 결합 (association)은 더 큰 개념으로 보면 된다. SCTP 결합에서는 각 단점(end—point)에 한 개 이상의 IP 주소가 연결될 수 있 다. 이를 멀티 홈잉(multi—homing)이라고 하며 네트워크 수준의 고장 허용(network—level fault tolerance)을 가능하게 한다.

SCTP는 멀티홈잉(multi-homing)을 강조하기 위해 결합이라고 한다. TCP에서는 종단 간 연결에 하나의 스트림이 송수신되

지만, SCTP에서는 하나의 결합(association)당 다중 스트림(multiple streams) 송수신이 가능하다.
