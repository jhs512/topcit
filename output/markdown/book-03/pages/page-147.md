<!-- PDF page: 147 -->

### 03 데이터 링크계층 구성

#### 가) 데이터 링크계층 부계층

데이터 링크계층은 2개의 부계층(Sub-layer)로 구성되며, 각각은 **LLC**(Logical Link Control), **MAC**(Media Access Control)이라고 한다. LLC 부계층은 MAC 부계층과 망계층(Layer 3) 간의 접속을 담당한다. 하위의 MAC 부계층은 물리계층 상의 토폴로지나 기타 특성에 맞추어 주는 제어를 담당한다.

<table><tr><th>OSI 참조 모델</th><th></th></tr><tr><td>네트워크 계층</td><td></td></tr><tr><td rowspan="2">데이터 링크 계층</td><td>Logical Link Control (LLC)</td></tr><tr><td>Media Access Control (MAC)</td></tr><tr><td>물리 계층</td><td></td></tr></table>

[그림 101] 데이터 링크계층의 부계층(sub-layer)

#### 나) 논리 링크 제어(LLC)

##### ① 논리 링크 제어(LLC)의 개념

<table><tr><td>7</td><td>1</td><td>6</td><td>6</td><td>2</td><td>1</td><td>1</td><td>1 or 2</td><td>Variable</td><td>4</td></tr><tr><td>Preamble</td><td>SFD</td><td>Destination Address</td><td>Source Address</td><td>Length</td><td>DSAP</td><td>SSAP</td><td>Ctrl</td><td>DATA</td><td>FCS</td></tr><tr><td colspan="5">802.3</td><td colspan="3">802.2</td><td></td><td>802.3</td></tr></table>

[그림 102] IEEE 802.3 프레임 구조

데이터 링크계층의 하위계층 중 윗부분에 있는 계층으로, IEEE 802.2이다. 데이터 링크 계층의 네트워크 두 인접 노드 사이의 데이터 전송을 책임진다. 이때 인접 노드는 LLC 계층 안에 목적지 서비스 접속점(DSAP)과 출발지 서비스 접속점(SSAP) 주소를 가진다. LLC 계층은 여러 상이한 MAC 부계층 프로토콜을 사용할 수 있도록 하여 망의 토폴로지(Topology)에 관계없는 통신이 가능하도록 한다.

##### ② 논리 링크 제어 서비스 옵션

논리 링크 제어 서비스의 옵션에는 Type 1, Type 2, Type 3가 있는데. Type 1은 비확인 데이터 그램 서비스라고 하며, 수신 도착 확인 메시지가 필요 없는 서비스로 무연결 서비스라고도 한다. Type 2는 가상 회로 접근 방식이며, TCP 서비스와 비슷하게 가상 세션을 연결 후 데이터를 전송하는 방식이다. Type 3는 확인식 데이터 그램 서비스라고 하며, 수신 통지가 있는 데이터 그램을 포인트 투 포인트 방식으로 제공한다.
