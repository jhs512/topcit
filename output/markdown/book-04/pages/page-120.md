<!-- PDF page: 120 -->

Robust Security Network (RSN)

(a) Services and protocols

| Services | Protocols |
| --- | --- |
| Access Control | IEEE 802.1 Port-based Access Control |
| Authentication and Key Generation | Extensible Authentication Protocol (EAP) |
| Confidentiality, Data Origin Authentication and Integrity and Replay Protection | TKIP, CCMP |

Robust Security Network (RSN)

(b) Cryptographic algorithms

| Services | Algorithms |
| --- | --- |
| Confidentiality | TKIP (RC4), CCM (AES-CTR), NIST Key Wrap |
| Integrity and Data Origin Authentication | HMAC-SHA-1, HMAC-MD5, TKIP (Michael MIC), CCM (AES-CBC-MAC) |
| Key Generation | HMAC-SHA-1, RFC 1750 |

CBC-MAC = Cipher Block Block Chaining Message Authentication Code (MAC)\
CCM = Counter Mode with Cipher Block Chaining Message Authentication Code\
CCMP = Counter Mode with Cipher Block Chaining MAC Protocol\
TKIP = Temporal Key Integrity Protocol

[그림 68] IEEE 802.11i 구성 요소
(출처: W. Stallings, Network Security Essentials, Pearson, p.184)

③ IEEE 802.11i의 동작

IEEE 802.11i에서의 동작은 무선랜의 구성과 단말기에 따라 달라질 수 있으나, [그림 69]에서와 같이 5단계 동작으로 설명될 수 있다.

• 탐색: AP가 보안 정책을 방송하는 것을 이용하여 통신을 원하는 STA는 자신이 원하는 무선랜의 AP를 찾아 AP와의 SA을 생성한다.

• 인증: STA는 인증서버인 AS와 상호 인증을 수행한다. 이때 AP는 단지 STA와 AS 사이의 통신을 전달만 한다.

• 키 생성 및 분배: 이 단계에서 AS는 AP에게 RADIUS(Remote Authentication Dial-In User Services) 기반의 키 분배 프로토콜을 통해 PMK(Pairwise Master Key)를 STA의 AP에게 넘긴다. 그 후 AP와 STA는 802.11x 프로토콜을 이용하여 메시지 교환을 통해 암호키를 생성하고 공유한다.

• 안전한 데이터 전송: STA와 상대 종단 지국은 AP를 통해 프레임을 안전하게 교환한다. 이때 안전한 데이터 전송은 STA
와 AP 사이에서만 이루어진다.

• 연결 해제: AP와 STA 가에 메시지 교환을 통해 안전한 연결이 해제되어, 원래 상태의 연결로 돌아간다.
