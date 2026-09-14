<!-- PDF page: 213 -->

#### 라) IoT 주요 프로토콜

IoT를 위한 프로토콜은 경량화에 대한 요구가 가장 크며, 기존에도 일반적으로 사용되고 있어 호환성과 확장성에 유리한 프로토콜이 많이 거론되고 있다. 특히 CoAP와 MQTT는 IoT 특성상 소형 단말들이 인터넷으로 쉽게 연결되어 데이터를 전송하는데 적합하여 다양한 아키텍처에 통신 프로토콜로 제시되고 있다.

① CoAP

CoAP(Constrained Application Protocol)는 IETF CORE 워킹그룹에서 개발한 사물 간 통신용 경량 응용계층 프로토콜이다. IP 계층 위의 UDP 트랜스포트 계층을 사용하도록 하고 있지만 하위계층과 독립적으로 설계되어 다른 네트워크 및 전송 계층에서도 동작할 수 있다. 엔드포인트의 부하를 줄이기 위해 메시지 크기를 작게 하고 인코딩과 디코딩을 쉽게 하기 위해 바이너리 인코딩 방식을 사용한다.

[그림 144] CoAP 개념도

<!-- 계층별 범위 화살표를 포함한 그림 생략. 원본의 계층과 라벨을 전사했다. -->

| 계층(위에서 아래) | 관련 범위 |
| --- | --- |
| Application Layer | CoRE WG |
| Transport Layer (TCP/UDP) | CoRE WG |
| Network Layer (IPv4/IPv6) | IETF Standard |
| Adaptation Layer | 6LoWPAN WG |
| MAC | IEEE 802.15.4 |
| PHY | IEEE 802.15.4 |

오른쪽 구성(위에서 아래): Application, CoAP REST, CoAP Transactions, UDP.

CoAP이 IoT의 주요 프로토콜로 주목 받는 것은 빠르고 안정적인 이더넷이나 Wi-Fi와 같은 통신보다도 Zigbee와 같은 통신을 이용해서 엔드포인트와 통신하는 경우가 많기 때문이다.

② MQTT

MQTT(Message Queue Telemetry Transport)는 Publish-Subscribe 기반으로 높은 지연과 비신뢰 네트워크에서 저속으로 경량화된 메시지를 전달하기 위한 프로토콜이다.
