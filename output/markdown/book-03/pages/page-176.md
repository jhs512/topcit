<!-- PDF page: 176 -->

〈표 63〉 IPv6의 기본 헤더구조와 구성요소

| 구성요소 | Size | 설명 |
|---|---|---|
| Version | 4 bit | IP Version 표시(version 4 or 6) |
| Traffic Class | 8 bit | 송신장치에 송신 우선순위를 요청하는 기능 |
| Flow Label | 20 bit | QoS를 위한 서비스별 구분 표시 |
| Payload Length | 16 bit | 데이터의 길이 표시 |
| Next Header | 8 bit | IP 헤더 다음에 나타나는 헤더의 유형을 정의 |
| Hop Limit | 8 bit | 패킷 전송시 포워딩 제한 표시 |
| Source Address | 128 bit | 송신지 주소를 표시 |
| Destination Address | 128 bit | 수신지 주소를 표시 |

IPv6의 확장 헤더는 개당 64bit에 맞추어지며, 데이지 체인 방식으로 구성된다. 확장 헤더의 구조 및 헤더의 종류는 〈표 64〉와 같다.

<!-- 원본 IPv6 확장 헤더 도형 생략. 위에서 아래로 IPv6 basic header(40 octets), Any number of extension headers, Data(for example TCP or UDP). 확대 구획: Next Header, Extension Header Length / Extension Header Data. -->

〈표 64〉 IPv6의 확장헤더 구조 및 구성요소

| 헤더종류 | 설명 |
|---|---|
| Hop-by-Hop | 경로상의 모든 통신장비에서 패킷 처리 시 필요한 정보 |
| Destination | 최종 목적지의 통신장비에서 패킷 처리 시 필요한 정보 |
| Routing | 송신자에 의한 라우팅 경로 목록 정보 |
| Fragmentation | 전송길이 확대에 따른 패킷 분할 및 재조합 정보 |
| Authentication | 데이터 무결성 및 송신자 인증 정보 |
| Encapsulation Security | 패킷 payload 영역의 암호화 |

### 참고 및 추천 자료

[1] cisco systems, Inc, Available: http://www.cisco.com/c/en/us/support/docs/routers/7200-series-routers/5810-arch-7200-5810.html

[2] cisco systems, Inc, Available: http://www.cisco.com/c/en/us/products/routers/7300-series-routers/index.html, http://www.cisco.com/c/en/us/products/wireless/2500-series-wireless-controllers/index.html
