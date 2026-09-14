<!-- PDF page: 183 -->

TCP 연결을 설정하는 기본 방법이 세 방향 핸드쉐이크 절차(three—way handshake procedure)이다. 이 절차는 [그림 128] 의 2번째 단계와 같이 하나의 TCP 종단(end-point)에서 다른 TCP 종단으로 순서 번호(SEQ)가 100인 SYN 세그먼트를 보 냄으로써 시작되며, SYN 세그먼트는 TCP 헤더의 SYN 제어 플래그가 1로 설정된 것을 의미한다. ACK 세그먼트는 ACK 제 어 플래그가 1로 설정된 것이며, SYN, ACK 세그먼트는 SYN 제어 플래그와 ACK 제어 플래그가 모두 1로 설정되었음을 의 미한다.

SYN 세그먼트를 수신한 TCP B는 이에 대한 응답으로 확인 응답 번호(ACK) 101¹⁰과 함께 TCP B에서도 TCP A로 연결 설 정을 요청하는 SYN 제어 플래그(SEQ=300)를 설정하여 SYN, ACK 세그먼트를 [그림 128]의 단계 3과 같이 보낸다. 이를 수신한 TCP A는 ACK 제어 플래그와 ACK=101을 확인하여 연결 요청이 제대로 전달된 것을 알 수 있다.

또한, SYN 제어 플래그가 같이 설정되어 있어 TCP B에서 연결 요청이 왔음을 알 수 있어 이에 대한 ACK 세그먼트 (ACK=301)를 TCP B로 보냄으로써 세 방향 핸드쉐이크가 완성되어 TCP A와 TCP B 간에 양 방향 연결이 설정되었음을 알 수 있다.

이와 같이 TCP 연결 설정을 위한 세 방향 핸드쉐이크는 TCP 종단 간에 SYN 세그먼트, SYN, ACK 세그먼트, ACK 세그먼트가 오가는 것을 알 수 있다. 이 때 각TCP 종단에서 주고 받은 순서 번호(SEQ)는 송수신될 데이터 스트림이 바이트 단위로 제대로 오가는지 확인하는 흐름 제어 및 오류 제어에 중요한 역할을 한다.

| 단계 | TCP A | 메시지 / 방향 | TCP B |
|---|---|---|---|
| 1 | CLOSED | | LISTEN |
| 2 | SYN-SENT | A → B: SEQ=100, CTL=SYN | SYN-RECEIVED |
| 3 | ESTABLISHED | B → A: SEQ=300, ACK=101, CTL=SYN,ACK | SYN-RECEIVED |
| 4 | ESTABLISHED | A → B: SEQ=101, ACK=301, CTL=ACK | ESTABLISHED |
| 5 | ESTABLISHED | A → B: SEQ=101, ACK=301, CTL=ACK, DATA | ESTABLISHED |

[그림 128] 연결 설정을 위한 삼 방향 핸드쉐이크 [1]

TCP에서는 연결 설정을 위하여 SYN 세그먼트를 받으면 시스템 자원인 TCB(Transmission Control Block)를 할당하여 TCP 연결을 관리한다. 이를 악의적으로 이용하여 SYN 세그먼트를 짧은 시간에 많이 보내면 이를 수신한 TCP 종단 호스트에서 는 TCB를 더 이상 할당할 수 없는 상황이 되어 서비스 불가 상태가 될 수 있다. 이러한 공격을 SYN 플러딩(SYN flooding)

이라 하며, 서비스 거부 공격(Denial-of-Service attack)의 한 유형이라 할 수 있다.

② TCP 연결 종료

TCP 연결 종료는 다음의 순서로 이루어진다. 연결 종료를 원하는 종단 TCP A에서 FIN 세그먼트(SEQ=100, ACK=300)를 단계 2와 같이 TCP B로 보낸다. 여기서는 이전 전송에 대한 확인 응답으로 ACK 제어 플래그를 같이 설정하여 보내고 있 다. 이를 수신한 TCP B에서는 단계 3과 같이 이에 대한 ACK 세그먼트(SEQ=300, ACK=101)를 응답으로 보낸다. FIN 세그먼트의 SEQ=100에 대한 응답으로 ACK는 1 증가한 101이 전송된다

이제 TCP B는 단계 4에서처럼 연결 종료를 위하여 FIN 세그먼트(SEQ=300, ACK=101)를 TCP A로 보낸다. 단계 2에서와 마찬가지로 이전 데이터 전송에 대한 확인 응답을 위하여 ACK를 같이 보내고 있다. 그러면 TCP A는 단계 5와 같이 이에 대한 ACK 세그먼트(SEQ=101, ACK=301)를 보내어 TCP 연결을 완전히 종료하게 된다.

10 TCP 흐름 제어 기법에 의해서 다음에 받기 원하는 바이트 순서 번호 101을 확인 응답 번호로 보내줌
