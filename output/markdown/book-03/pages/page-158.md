<!-- PDF page: 158 -->

〈표 42〉 인터네트워킹 장비

| 장비 | 설명 |
| --- | --- |
| 리피터 | AN 접속점 사이의 신호를 강화(증폭, 신호 재생)시켜주는 기능 수행하는 장치 |
| 브리지 | 2개의 LAN을 연결해주고, 통역과 포맷 변환 등으로 하나처럼 보이게 하는 장치 |
| 스위치 | 다중 포트 브리지 개념을 가지는 MAC 주소 기반 네트워크 분리 장치 |
| 라우터 | 이종 네트워크 연결 시 최적의 통신경로를 찾아서 데이터를 전송하는 장치 |

인터네트워킹 장비들이 OSI 7계층과 TCP/IP 4계층에서 각각 어떤 계층의 기능을 담당하는지 알아보자. 먼저 라우터는 네트워크 계층에서 IP 주소를 통해 패킷 라우팅을 수행한다. 브리지와 스위치는 데이터링크 계층에서 프레임의 전달을 담당하며, 허브와 리피터는 물리 계층에서 단순하게 물리적인 신호를 전달한다. 각 장비들의 기능을 프로토콜 계층과 비교해 보면 〈표 43〉과 같다.

〈표 43〉 프로토콜 계층과 계층별 장비

<table><thead><tr><th>OSI 7계층</th><th>TCP/IP 4계층</th><th>장비</th></tr></thead><tbody><tr><td>Application</td><td rowspan="3">Application</td><td rowspan="4">Gateway</td></tr><tr><td>Presentation</td></tr><tr><td>Session</td></tr><tr><td>Transport</td><td>Transport</td></tr><tr><td>Network</td><td>Internet</td><td>Router</td></tr><tr><td>Data Link</td><td rowspan="2">Network Access</td><td>Bridge, Switch</td></tr><tr><td>Physical</td><td>Hub, Repeater</td></tr></tbody></table>

#### 라) 라우터(Router)란?

라우터는 하나 이상의 메트릭을 사용해 네트워크 트래픽을 포워딩하며, 최적 경로를 결정하는 장치이다. 다시 말하면, 네트워크 계층 정보를 기초로 하나의 네트워크에서 다른 네트워크로 패킷을 포워딩하는 역할을 한다.

##### ① 라우터의 구조

라우터는 [그림 110]과 같이 대부분 **제어면(Router Control Plane)**과 **전달면(Forwarding Plane)**으로 구성되는데, 제어면은 라우터에서 소프트웨어적으로 구현되며, 라우터로 입력된 패킷을 어디로 보내야 할지에 대한 처리과정과 그 처리에 필요한 테이블들로 구성된다. 전달면에서는 제어면에서 만들어진 요구사항에 따라 실제로 패킷을 전송하게 된다.
