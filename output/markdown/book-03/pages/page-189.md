<!-- PDF page: 189 -->

〈표 73〉 SCTP 서비스 특징

<table>
<tr><td>특징</td><td>내용</td></tr>
<tr><td>프로세스 대 프로세스 통신</td><td>프로세스 대 프로세스 통신 제공</td></tr>
<tr><td>다중 스트림</td><td>결합(association)이라고 하는 다중 스트림 서비스(multi stream service)를 각 연결에 허용</td></tr>
<tr><td>멀티 홈잉<br>(multi—homing)</td><td>송신/수신 호스트는 결합을 위해 각 종단에 다수의 IP 주소 정의<br>IP 주소 중 하나만이 우선 주소(primary address), 나머지는 대체 주소</td></tr>
<tr><td>전이중 통신</td><td>동시에 양방향으로 데이터를 전달 할 수 있는 전이 중 서비스</td></tr>
<tr><td>연결지향</td><td>연결지향 프로토콜이며, 결합(association)이라고 함</td></tr>
<tr><td>신뢰성</td><td>신뢰성 있는 전송 프로토콜. 도착여부 확인하기 위해 확인응답 사용</td></tr>
</table>

SCTP에서 사용되는 번호 체계는 전송 순서 번호 TSN(Transmission Sequence Number), 스트림 식별자 SI(Stream Identifier), 스트림 순서 번호 SSN(Stream Sequence Number)이 있다. TCP의 데이터 단위가 바이트였는데 반해 SCTP 는 데이터 청크(data chunk)가 데이터 단위이다. 데이터 청크를 번호화하기 위하여 전송 순서 번호 TSN(Transmission Sequence Number)을 사용한다. SCTP의 TSN은 TCP의 순서 번호(sequence number)와 비슷한 역할을 한다. 또한 SCTP 결합 당 다중 스트림이 존재할 수 있으므로 이를 구분하기 위하여 0부터 시작하는 16비트 스트림 식별자 SI(Stream Identifier)를 사용한다. 동일한 스트림에 속하는 데이터 청크들을 구분하기 위해서는 스트림 순서 번호 SSN(Stream Sequence Number)를 사용한다.

#### 나) SCTP 프로토콜

본 장에서는 SCTP의 모든 내용을 다루기 어려우므로 아래 그림을 통해 SCTP 전송 서비스의 기능들을 간략하게 살펴볼 것이다. SCTP의 기능은 크게 아래와 같이 8가지로 분류할 수 있다.

- 결합 시작과 종료

- 스트림 내 순서화된 전달(Sequenced delivery)

- 사용자 데이터 단편화(Fragmentation)

- 확인 응답(Acknowledgement)

- 혼잡 회피(Congestion avoidance)

- 청크 묶음(Chunk bundling)

- 패킷 인증(Packet validation)

- 경로 관리(Path management)

① 결합 시작과 종료

결합(Association)은 SCTP 사용자의 요청에 의해서 시작된다. SYN 공격(Synchronization attack)을 방지하기 위하여 종단 (end-point) A에서 종단 Z로 INIT 청크를 보내면 종단 Z에서 쿠키 정보를 가진 INIT ACK 청크를 보낸다. 이를 수신한 종단 A에서는 수신한 쿠키를 복사하여 다시 종단 Z로 COOKIE ECHO 청크를 보내어 제대로 수신하였음을 알리고 이에 대하여 종단 Z에서 다시 COOKIE-ACK 청크를 보냄으로써 네 방향 핸드쉐이크가 완성된다. 종단 Z에서 정상적인 COOKIE ECHO 청크를 받아야만 시스템의 주요 자원인 TCB(Transmission Control Block)를 생성하도록 함으로써 TCP 연결 설정 시 SYN 세그먼트를 받자마자 TCB를 생성하여 발생하였던 SYN 공격으로 인한 서비스 거부(DoS) 문제를 해결하였다.

② 스트림 내 순서화된 전달(Sequenced delivery)

SCTP에서 스트림(Stream)은 일련의 사용자 메시지를 의미한다. SCTP 사용자는 결합 설정 시 지원 가능한 스트림의 수를 설정할 수 있으며 이들 스트림은 스트림 식별자 SI로 구분한다. 또한 스트림 내 사용자 메시지는 스트림 순서 번호 SSN을

부여함으로써 정상적인 순서로 데이터 청크가 전달될 수 있게 한다. 하나의 스트림이 다음 순서의 사용자 메시지를 전달
