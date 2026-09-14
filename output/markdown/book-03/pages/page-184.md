<!-- PDF page: 184 -->

| 단계 | TCP A | 메시지 / 방향 | TCP B |
|---|---|---|---|
| 1 | ESTABLISHED | | ESTABLISHED |
| 2 | (Close), FIN-WAIT-1 | A → B: SEQ=100, ACK=300, CTL=FIN,ACK | CLOSE-WAIT |
| 3 | FIN-WAIT-2 | B → A: SEQ=300, ACK=101, CTL=ACK | CLOSE-WAIT |
| 4 | TIME-WAIT | B → A: SEQ=300, ACK=101, CTL=FIN,ACK | (Close), LAST-ACK |
| 5 | TIME-WAIT | A → B: SEQ=101, ACK=301, CTL=ACK | CLOSED |
| 6 | (2 MSL), CLOSED | | |

[그림 129] 일반적인 종료 순서 [1]

[그림 129]의 TCP 동작 가상 시나리오에서 단계 ④와 단계 ⑪~⑭가 TCP 연결 종료에 해당한다.

③ 흐름 제어

흐름 제어는 데이터를 만드는 속도와 데이터를 사용하는 속도의 균형을 맞추는 것으로 TCP에서는 **슬라이딩 윈도우 프로토콜(sliding window protocol)**을 사용한다. 수신 TCP는 자신이 준비해 놓은 Octet(1 Byte)수를 지정하여 알린다. 송신 TCP는 이를 참조하여, 슬라이딩 윈도우 수를 조절할 수 있다. 이 필드의 길이가 16bit이므로 윈도우의 최대 크기는 65,535바이트이다.

| 송신 Sender | 수신 Receiver |
|---|---|
| Window size = 3, Send 1 | ACK 2, Window size = 3 |
| Window size = 3, Send 2 | |
| Window size = 3, Send 3 | Packet 3 is Dropped; ACK 3, Window size = 2 |
| Window size = 3, Send 3 | |
| Window size = 3, Send 4 | ACK 5, Window size = 2 |

Window Filed

<!-- 그림 130의 패킷 화살표 위치는 생략하고 원문 송수신 항목을 순서대로 전사. -->

[그림 130] 슬라이딩 윈도우 프로토콜에 의한 패킷 송수신 예
