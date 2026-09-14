<!-- PDF page: 163 -->

<table><tr><th></th><th colspan="6"></th><th></th></tr><tr><td>Application</td><td>FTP<br>21</td><td>TEL NET<br>23</td><td>SMTP<br>25</td><td>DNS<br>53</td><td>TFTP<br>69</td><td>SNMP<br>161</td><td>Application<br>Presentation<br>Session</td></tr><tr><td>Transport</td><td colspan="3">TCP</td><td colspan="3">UDP</td><td>Transport</td></tr><tr><td>Internet</td><td colspan="6">IP / ICMP / ARP / RARP</td><td>Network</td></tr><tr><td>Network Interface</td><td colspan="6">Network Interface (Ethernet)</td><td>Data Link<br>Physical</td></tr></table>

[그림 115] 네트워크 계층 프로토콜

〈표 48〉 네트워크 계층 프로토콜

| 프로토콜 | 내용 |
| --- | --- |
| ARP | Address Resolution Protocol(RFC 826)<br>IP 주소를 MAC 주소로 변환시켜주는 프로토콜 |
| RARP | Reverse Address Resolution Protocol(RFC 903)<br>MAC 주소를 IP 주소로 변환시켜주는 역주소 변환 프로토콜 |
| ICMP | Internet Control Message Protocol(RFC 792)<br>네트워크 오류에 관한 정보를 전송하기 위해 사용되는 프로토콜 |
| IGMP | Internet Group Management Protocol(RFC 1112)<br>IP 멀티캐스트를 실현하기 위한 프로토콜 |

#### 다) 네트워크 계층 명령어

네트워크 계층의 상태정보 또는 특정 동작을 위한 명령어들은 〈표 49〉와 같다.

〈표 49〉 네트워크 계층 관련 명령어

| 명령어 | 내용 |
| --- | --- |
| Ping | ICMP 메시지를 이용해 네트워크 계층까지 연결성을 테스트하는 명령어<br>ICMP 메시지 중 echo request와 reply 메시지를 사용 |
| Tracert/Traceroute | 원하는 목적지까지의 경로를 출력해 주는 명령어<br>특정 사이트에 접속되지 않을 경우, 어떤 네트워크 구간에서 병목이 발생했는지 알아보는 명령어 |
| Route | 수동으로 라우팅 테이블의 내용을 수정하게 허용하는 명령어 |
| Ipconfig/Ifconfig | 컴퓨터의 TCP/IP 네트워크 설정 값을 확인하기 위한 명령어<br>DHCP와 DNS 설정을 확인 및 갱신하는데 사용하는 명령어 |
| Netstat | 네트워크 연결, 라우팅 테이블, 네트워크 인터페이스 상태 등 종합적으로 확인 할 수 있는 명령어 |
| Arp | 로컬 ARP 캐쉬의 내용을 변경하거나 보여주는 명령어 |
