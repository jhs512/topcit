<!-- PDF page: 171 -->

#### 다) 특수 IPv4 주소

IPv4에서는 일반적인 A, B, C 클래스 주소체계와는 다른 형태의 주소체계가 있는데 이런 주소들을 특수 IPv4 주소라고 하며, 아래 〈표 57〉과 같다.

〈표 57〉 특수 IPv4 주소[7]

<table>
<tr><th>Network ID</th><th>Host ID</th><th>주소 이름</th><th>용도</th></tr>
<tr><td>specific</td><td>All 0</td><td>Network address</td><td>• 네트워크 주소를 의미</td></tr>
<tr><td>specific</td><td>All 1</td><td>Net-directed broadcast to netid</td><td>• 특정 네트워크 모든 단말들에게 브로드캐스트할 때 사용</td></tr>
<tr><td>All 0</td><td>specific</td><td>Specific host on this network</td><td>• 연결된 망 내부에 특정 단말을 지시<br>• 라우터 통과 못함</td></tr>
<tr><td colspan="2">127.X.X.X</td><td>Local loopback address</td><td>• 시스템 내부에서 루프백되는 목적지 주소로 사용</td></tr>
<tr><td colspan="2">255.255.255.255</td><td>Limited broadcast</td><td>• 라우터 내부 망의 모든 단말에게 브로드캐스트시 사용<br>• 라우터 통과못함</td></tr>
<tr><td colspan="2">0.0.0.0</td><td>This host on this network</td><td>• 단말 자신의 IP 주소 모를 때 자기 자신을 의미하기 위해 사용<br>• 라우터 통과 못함</td></tr>
<tr><td>10. ~</td><td>Any</td><td>Class A용 사설주소<br>(10.0.0.0 ~ 10.255.255.255)</td><td rowspan="3">• 공인승인 없이 사용 가능한 사설망 주소</td></tr>
<tr><td>172.16~172.31</td><td>Any</td><td>Class B용 사설주소<br>(172.16.0.0 ~ 172.31.255.255)</td></tr>
<tr><td>192.168.0 ~ 192.168.255</td><td>Any</td><td>Class C용 사설주소<br>(192.168.0.0 ~ 192.168.255.255)</td></tr>
</table>

#### 라) 서브네팅

① 서브네팅의 개념

**서브네팅(Subnettting)**은 하나의 네트워크 주소를 여러 개의 작은 네트워크로 나누어 사용하는 방식이다. 서브넷 마스크(Subnet mask)는 IP 주소 중에 네트워크 주소 부분을 구분하기 위한 마스크를 말한다[8].

| 구분 | 비트 표현 | subnet mask |
|---|---|---|
| 일반적인 클래식 C 주소 | 11111111 11111111 11111111 00000000 | 255.255.255.0 |
| 서브네팅으로 2비트를 사용 | 11111111 11111111 11111111 11000000 | 255.255.255.192 |

[그림 122] 서브네팅을 적용한 IP 주소

② 서브넷 사용 형태

서브 네트워크의 추가는 IP 주소에서 중간 레벨의 계층을 생성하게 되며, 사이트, 서브네트, 호스트의 3개 레벨로 구분된다.
