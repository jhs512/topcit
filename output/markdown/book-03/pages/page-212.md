<!-- PDF page: 212 -->

[그림 143]은 표준화 기관별 표준범위를 프로토콜 계층 기준으로 보여준다.

[그림 143] 사물인터넷 표준기관별 표준범위 [10]

<!-- 복합 계층·표준 범위 그림 생략. 원본 라벨을 전사했다. Networt는 원문 표기다. -->

- 양쪽 계층(M2M Device / Gateway, M2M Platform): Application, Presentation, Session, Transport, Networt, Link, Physical
- 표준 범위: ETSI, IEEE, 3GPP, IETF
- 네트워크: Wireless Access Network, Wireless Core Network, Core network (IP network)
- 연결 장치: AP, BS, ASN-GW, Node BS, RNC, SGSN, GGSN

#### 다) IoT 주요기술

IoT의 주요 기술은 센싱 기술, 유무선 통신 및 네트워크 인프라 기술, IoT 서비스 및 인터페이스 기술이다.

① 센싱 기술

사물에서 얻을 수 있는 정보는 다양한 센서를 통해서 수집된다. 사물의 주변 상황 정보를 얻기 위해 온도, 습도, 열, 가스, 조도, 초음파 등 다양한 센서가 사물 내에 장착된다. 센서는 장시간 동안 동작을 할 수 있도록 전력소모를 최소화하는 것이 필요하다. 물리적인 센서는 표준화된 인터페이스와 정보처리 능력을 내장한 스마트 센서로 발전하고 있으며 센싱한 데이터로부터 특정 정보를 추출하는 가상 센싱 기능도 포함하고 있다. 센서 단에서 해야 할 역할이 늘어나면서 OSHW(Open Source HardWare)를 이용하여 다양한 센서와 제어, 통신을 손쉽게 엮을 수 있도록 한 하드웨어 플랫폼 시장도 발전하고 있다.

② 유무선 통신 및 네트워크 인프라 기술

사물들이 인터넷에 접속하기 위해서는 일반적으로는 이더넷이나 PLC(Power Line Communication)와 같은 유선을 이용하거나, 설치 편의성과 이동성을 고려하면 무선통신이 더 효율적이다. WLAN, Bluetooth, Zigbee, UWB 등의 근거리 무선통신과 3G, LTE 등의 이동통신이 적용될 수 있다. 또한 센서 네트워킹을 위한 새로운 기술들도 지속적으로 제시되고 있다.

- BLE(Bluetooth Low Energy): Bluetooth Smart라고도 불리며, 기존 Bluetooth와는 호환되지 않으며 Bluetooth 4.0과는 호환이 되는 저전력 근거리 무선통신
- Z-Wave: 지능형 매시 네트워크 토폴로지를 사용하고 마스터 노드를 가지지 않으며, 저전력과 저대역폭을 요구하는 장치를 위한 프로토콜

③ IoT 서비스 및 인터페이스 기술

사물의 센서에서 수집된 많은 데이터들을 자동으로 분석하고 공유하기 위해서는 온톨로지 기반의 Semantic Web 기술과 대규모 분산 처리를 위한 클라우드 컴퓨팅, 그리고 다양한 서비스 접근을 위한 Open API의 사용이 필요하다.
