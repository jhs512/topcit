<!-- PDF page: 190 -->

하기 위해 봉쇄(block)되어 있더라도 다른 스트림은 전송 가능하다.

③ 사용자 데이터 단편화(Fragmentation)

TCP와 마찬가지로 SCTP는 사용자 메시지는 경로 MTU(path Maximum Transmission Unit)에 제한 받게 되는데, 이를 위한 단편화(Fragmentation) 기법을 제공한다. 나누어져 전송된 각각의 단편들은 SCTP 층에서 다시 재조합(Reassembly)되어 하나의 사용자 메시지가 된다.

④ 확인 응답(Acknowledgement)과 혼잡 회피(Congestion Avoidance)

SCTP는 스트림에 관계없이 데이터 청크에 전송 순서 번호 TSN을 부여하여 전송한다. 수신 측에서는 수신한 모든 TSN에 대한 확인 응답(ACK)을 함으로써 순서화된 스트림 전송과는 별도로 전송의 신뢰성을 확보한다. 확인 응답과 혼잡 제어 기 능은 확인 응답이 주어진 시간 안에 수신되지 않았을 경우 패킷 재전송과 관련 있다. 패킷 재전송은 TCP 혼잡 제어와 유 사한 혼잡 회피 절차에 따라서 이루어진다.

⑤ 청크 묶음(Chunk Bundling)

SCTP 패킷을 구성하는 공통 헤더(Common Header) 뒤에 여러 개의 사용자 데이터나 SCTP 제어 정보를 가지는 청크가 올 수 있다. SCTP 사용자는 하나의 SCTP 패킷 안에 여러 개의 사용자 메시지를 묶는 요청을 할 수 있다. SCTP 청크 묶음 (Chunk Bundling) 기능은 여러 청크를 하나의 SCTP 패킷으로 조합하고 분해하는 책임을 진다.

⑥ 패킷 인증(Packet Validation)

SCTP 공통 헤더에는 검증 태그(Verification Tag)와 32비트 검사합(Checksum) 필드가 있다. 검증 태그 VT는 결합 설정 시 각 종단에서 선택되는 값이다. 설정된 결합 동안 동일한 검증 태그를 사용하여 SCTP 패킷을 전송해야 하며, 틀린 검증 태 그를 가지는 SCTP 패킷을 수신하며 폐기(Discard)한다. 이와 더불어 CRC32c 검사합을 생성하여 SCTP 패킷을 전송함으 로써 네트워크에서의 데이터 변형(Corruption)을 방지한다.

⑦ 경로 관리(Path Management)

송신 SCTP 사용자는 SCTP 패킷의 목적지에서 사용되는 전송 주소(Transport Address)SCTP 포트 번호와 IP 주소를 조 작(Manipulate)하는 경로 관리(Path Management) 기능을 사용할 수 있다. 결합 설정 시 각 SCTP 종단에 대한 주 경로 (Primary Path)는 정의되어 SCTP 패킷을 주고 받는데 사용된다. 그러나 현재 사용 중인 경로에 문제가 발생할 경우 이를 멀티 홈잉(Multi-homing)에 의해 정의된 여러 전송 주소 중 사용 가능한 전송 주소를 지정하여 사용 가능하다. 경로 관리와 검증 태그와 검사합을 사용하는 패킷 검증(Packet Verification)은 동시에 이루어진다.

SCTP 패킷은 일반헤더와 청크로 불리는 블록 집합들을 가진다. 청크에는 제어 청크와 데이터 청크 2가지 형태가 있으며, 제어 청크는 데이터 청크 전에 전달된다.

일반 헤더는 패킷이 속하는 각 결합의 끝 지점을 정의하며, 특정한 결합에 속하는 패킷을 보장하고 헤더 자체를 포함하는 패킷 내용에 대한 무결성을 보존한다

〈표 74〉 SCTP 공통 헤더 구성 요소

<table>
<tr><th>구분</th><th>내용</th></tr>
<tr><td>소스 포트번호</td><td>TCP, UDP와 동일</td></tr>
<tr><td>목적지 포트번호</td><td>TCP, UDP와 동일</td></tr>
<tr><td>확인 태그<br>(Verification Tag)</td><td>결합을 위한 식별자로 사용, 결합 동안에 모든 패킷에서 반복</td></tr>
</table>
