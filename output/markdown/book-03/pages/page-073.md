<!-- PDF page: 073 -->

| 원문 위치 | 표기 |
| --- | --- |
| 위쪽 공통선 | ADDRESS BUS / ④ |
| 구성요소 왼쪽에서 오른쪽 | CPU / Memory / I/O Interface / DMA Controller (DMAC) |
| CPU 제어 핀 | HOLD: ②, ⑧ / HLDA: ③, ⑨ |
| I/O Interface와 DMAC 사이 | I/O / ①: Interface → DMAC / ⑤: DMAC → Interface |
| I/O Interface 안 | ⑦ |
| 아래 공통선 위에서 아래 | DATA BUS: ⑥ / CONTROL BUS |

<!-- 생략: 그림 39 / 공통 버스와 각 장치 사이 연결선 -->

[그림 39] DMA를 포함한 시스템 구조도

##### ② DMA의 동작순서

① I/O 인터페이스가 DMA 컨트롤러에게 DMA 서비스를 요청 전송

② CPU의 HOLD Pin에 Bus Request가 전송되어 버스에 대한 제어를 DMA가 획득(Active High)

③ CPU의 HLDA(Hold Acknowledge) Pin으로부터 DMAC에 Bus grant가 리턴됨(Active High)

④ DMAC는 Address bus에 Address Register의 Contents를 적재한다.

⑤ DMAC는 I/O Interface에게 데이터를 데이터버스에 적재하도록 DMA Acknowledgement를 전송한다.

⑥ Data Byte가 Address Bus에 의해 식별된 메모리 위치로 전송된다.

⑦ I/O Interface는 데이터를 지속적으로 전송 유지한다(Latch).

⑧ Bus Request 가 Drop되어 HOLD가 Low 상태가 되어 DMAC는 Bus에 대한 사용권을 돌려준다.

⑨ BUS Grant가 Drop되어 HLDA가 Low 상태가 된다.

⑩ 이후, Address Register가 1 증가되고, Byte Count는 1 감소된다.

⑪ Byte Count가 0이 아니면 Step ①로, 0이면 정지

##### ③ DMA의 동작모드

| 구분 | 설명 |
| --- | --- |
| 사이클스틸링(Cycle Stealing) | − DMA컨트롤러와 CPU가 동시에 Bus를 사용하고자 할 때 속도가 빠른 CPU가 속도가 느린 DMA에게 Bus 사용 우선순위를 주어 빠른 입출력이 가능하게 하는 방법<br>− 한번의 DMA동작 중 한 Word정도의 데이터를 전송 시 적용함 |
| 버스트모드(Burst mode) | − 한번의 DMA동작 중 Block 단위의 데이터 전송 시 적용함<br>− 여러 개의 메모리 워드로 구성된 블록이 지속적으로 전송됨<br>− 고속의 입출력 장치를 대상으로 하며 DMA 인터페이스가 버스사용권을 획득하면 데이터 전송이 완료될 때까지 버스사이클 독점 |
