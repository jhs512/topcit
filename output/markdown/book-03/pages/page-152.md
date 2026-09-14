<!-- PDF page: 152 -->

<table><tr><th>논리적 링크 제어 (LLC)</th><td colspan="6">TYPE 1(비확인식 데이터그램 서비스)<br>TYPE 2(가상 회로 서비스)<br>TYPE 3(확인식 데이터그램 서비스)</td></tr><tr><th>물리적 매체 접근 제어(MAC)</th><td rowspan="2">802.3</td><td>CSMA/CD매체 접근 제어</td><td rowspan="2">802.4</td><td>토큰버스 매체 접근 제어</td><td rowspan="2">802.5</td><td>토큰링 매체 접근 제어</td></tr><tr><th>물리적 매체</th><td>• 기준대역동축: 1, 10Mbps<br>• 기준대역트위스트페어: 10Mbps<br>• 광대역동축: 100Mbps 이상</td><td>• 광대역동축: 1, 5, 10Mbps<br>• 광섬유: 5, 10, 20Mbps</td><td>차폐형 트위스트페어: 1, 4Mbps</td></tr></table>

[그림 106] 계층별 서비스

#### 나) IEEE 802.3 표준

IEEE 802 표준 중에서 가장 많이 사용되는 IEEE 802.3 프로토콜 스택에서는 데이터 링크계층의 LLC 계층에 해당하는 IEEE 802.2가 있으며, MAC 계층과 물리계층을 포함하는 IEEE 802.3, IEEE 802.5 Token Ring, FDDI 등이 있다.

<table><tr><th colspan="2">OSI 참조 모델</th><th colspan="3">LAN 프로토콜</th></tr><tr><td colspan="2">Network Layer</td><td colspan="3"></td></tr><tr><td rowspan="2">Data Link Layer</td><td>LLC Sublayer</td><td colspan="3">IEEE 802.2</td></tr><tr><td>MAC Sublayer</td><td rowspan="2">IEEE 802.3</td><td rowspan="2">Token Ring / 802.5</td><td rowspan="2">FDDI</td></tr><tr><td colspan="2">Physical Layer</td></tr></table>

[그림 107] IEEE 802.3 프로토콜 스택

#### 다) IEEE 802.11 표준

IEEE 802.11은 무선 LAN, 와이파이(Wi-Fi)로 불리는 무선 근거리 통신망을 위한 무선통신 표준화 위원회의 명칭이며 유선 LAN 형태의 이더넷의 단점을 보완하기 위해 배선작업과 유지관리 비용 최소화를 목적으로 한다. 일반적으로는 최고 전송속도 11Mbps에 DSSS 변조방식을 사용하는 IEEE 802.11b, 5GHz 대역의 주파수 사용과 OFDM 변조방식 사용으로 최고 54Mbps의 속도를 지원하는 IEEE 802.11a, 2.4GHz 대역의 주파수를 사용하면서 54Mbps 속도를 지원하는 802.11g가 있다.

IEEE 802.11n은 2.4GHz 대역과 5GHz 대역을 사용하며 MIMO(Multiple-Input Multiple-Output)를 지원하여 최대 600Mbps까지 전송속도를 높일 수 있다. 가장 최근에는 Gbps의 속도를 지원하는 무선 AP 제품이 출시되고 있다. IEEE 802.11ac는 80/160MHz의 대역폭과 다중 사용자 MIMO/다중 공간 스트림 MIMO, 256-QAM 변조방식과 빔포밍(Beamforming)의 기
