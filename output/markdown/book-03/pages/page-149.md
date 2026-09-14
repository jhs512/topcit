<!-- PDF page: 149 -->

ARP 패킷은 6바이트의 Destination MAC address, 6바이트의 Source MAC address, 2바이트 Ethernet Protocol type, 2바이트 Hardware Type, 2바이트 Protocol Type, 1바이트 Hardware Address Length, 1바이트 Protocol Address Length, 2바이트 Operation Code, 6 바이트 Sender Hardware Address, 4바이트 Sender Protocol Address, 6바이트 Target Hardware Address, 4 바이트 Target Protocol Address, 18 바이트 Padding 등으로 이루어져 있다.

#### 나) MAC 주소 검색 시나리오

[그림 99]에서 사용자 A가 있는 컴퓨터와 라우터 C는 같은 네트워크 구간에 있기 때문에 통신을 하기 위해서는 MAC 주소를 알아야 한다. 이런 경우에 사용자 A가 있는 컴퓨터는 브로드캐스트를 통해 같은 네트워크 구간 내 모든 시스템에게 ARP 요청을 하게 되며, ARP 요청 시 전달되는 프레임 내 데이터 부분에 [그림 104]와 같은 ARP 패킷이 포함되어 전달된다. 응답을 받은 라우터 C는 자신의 MAC 주소를 ARP 패킷에 포함시켜 유니캐스트를 통해 사용자 A가 있는 컴퓨터로 전달하여 상호간의 MAC 주소를 알게 되고, 그 MAC 주소는 각 시스템의 캐시 메모리에 저장된다. 이때, 유무선 공유기 B는 자신의 포트에 연결된 시스템들에 대한 포트-MAC주소 테이블을 캐시 메모리에 관리한다.

### 05 데이터 링크계층 오류검출과 오류정정기법

#### 가) 오류제어의 개념

데이터 링크계층을 통해 프레임 전달 시 네트워크 상태나 송수신 장비의 동작에 따라 여러 오류가 발생할 수 있다. 오류의 종류에는 데이터 부분 중 한 비트만 변경된 오류를 가진 단일 비트 오류(Single-bit error), 데이터 단위에서 2개 이상의 비연속적인 비트들이 변경되는 다중 비트 오류(Multi-bit error), 데이터 부분의 2개 또는 그 이상의 연속적인 비트가 변경되는 오류인 집단 오류(Burst error)가 있다.

송신한 데이터가 제대로 도달되지 않거나 전송 도중 오류가 발생할 때, 검출하고 오류를 수정하는 기능을 오류제어라고 한다. 오류를 제어하는 방법은 다음 그림과 같이 크게 2가지로 구분될 수 있는데, 전진 오류 수정(Forward Error Correction, FEC)은 수신 측에서 오류를 스스로 검출/복원할 수 있는 방법으로 송신 시 오류복구를 위한 잉여 비트를 추가하여 전송하는 방식이다. 후진 오류 수정(Backward Error Correction, BEC)은 전송된 데이터에 오류가 발생된 경우, 송신 측에 오류 사실을 알려서 재전송하여 복원하는 방식이다.
