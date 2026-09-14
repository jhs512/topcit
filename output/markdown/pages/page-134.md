<!-- PDF page: 134 -->

##### ④ MDM(Mobile Device Management)

MDM은 기업 업무에서 활용되는 다양한 모바일 디바이스와 애플리케이션을 효율적으로 관리해주는 솔루션으로 OTA(휴대 폰 무선전송기술, Over The Air)를 활용하여 언제 어디서나 모바일 디바이스를 관리할 수 있는 시스템이다(단, 디바이스가 Power on 상태여야 한다).

〈표 75〉 MDM 주요기능

| 기능 | 설명 |
| --- | --- |
| 디바이스 관리 | Mobile Device에 대한 정보수집/ 배포관리(모바일 기기 ID 식별) |
| 사용등록 및 추적관리 | 모바일 기기에 대한 등록/승인/회수 기능<br>분실/도난 시 모바일 기기 사용중지 가능 |
| 보안정책 수립 및 적용 | 조직 내부의 Active Directory에 모바일 디바이스를 조인하여 그룹정책을 이용한 보안정책 수립 및 정책적용 |
| 소프트웨어 배포 | 디바이스 관리 서버를 통해 소프트웨어 배포 |

[그림 58] MDM 구성도

<!-- 생략: 그림 58 / 장비·서버 아이콘과 복합 네트워크 배치 -->

〈표 76〉 MDM 구성요소 및 역할

| 구성요소 | 역할 |
| --- | --- |
| MDM Gateway Server | • DMZ나 Screened subnet에 위치하며 사내 네트워크와 Mobile Device 간의 인증 연결<br>• Direct Push Update 등 통신을 위한 Gateway 역할 |
| MDM Device Management Server | • Mobile Device에 대해 관리 및 운영의 역할<br>• 그룹정책 및 소프트웨어 배포 등의 기능적 허브 역할<br>• 사내 다른 인프라 서버들과의 통신 역할 |
| MDM Enrollment Server | • 인증이 요청되거나 철회된 Mobile Device에 대한 권한 부여, 이때 OTP를 통한 Device 인증을 시도 |
| Databases | • MDM Device Management Server와 MDM Enrollment Server의 Mobile Device 관리, 구성, 작업, 설정을 하기 위한 데이터베이스를 저장 |

###### MDM의 기대효과

MDM을 도입하여 기업은 다양한 서비스 연동, PC 수준으로의 관리와 보안 업무 연속성 보장, 보다 편리한 원격지원 및 트러블 슈팅, 다양한 OS/언어/시스템을 지원하여 유연성 및 확장성을 기대할 수 있다.
