<!-- PDF page: 186 -->

| RTT 진행 | Client 혼잡윈도우 |
|---|---:|
| 1 | 1 |
| 2 | 2 |
| 3 | 4 |
| 4 | 8 |

<!-- 원본 그림 132의 Client→Server Segment, Server→Client ACK 교환과 Time 축 화살표는 생략. 혼잡윈도우 증가값 보존. -->

[그림 132] 느린 시작(slow start) 개념

혼잡회피 알고리즘(Congestion Avoidance Algorithm)은 혼잡윈도우의 크기(Congestion Window)를 혼잡상태가 감지될 때까지 하나씩(additively) 증가시키는 방법이다.

| RTT 진행 | Client cwnd 혼잡윈도우 |
|---|---|
| 1 | i = 2 |
| 2 | i + 1 |
| 3 | i + 2 |
| 4 | i + 3 |

<!-- 원본 그림 133의 Client→Server Segment, Server→Client ACK 교환과 Time 축 화살표는 생략. 혼잡윈도우 증가값 보존. -->

[그림 133] 혼잡 회피 동작 개념
