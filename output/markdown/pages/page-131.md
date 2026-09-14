<!-- PDF page: 131 -->

- 단순히 서비스를 이용하는 사용자 관점에서 서비스 제공자로의 전환

〈표 69〉 Open API의 구성요소

| 구분 | 설명 |
| --- | --- |
| Open 대상 | API가 사용자에게 제공하는 서비스(날씨, 교통, 공공정보, 지도 등) |
| Open 방법 | 서버: XML, SOAP, Blogging API<br>Client: XML, Javascript, DOM, XMLHttpRequest, AJAX 등 |


###### REST(REpresentational State Transfer) API

Open API로 현재 가장 많이 활용되고 있는 기술이 REST API이다.

REST API는 2000년에 HTTP의 주요 저자 중 한 사람인 Roy Fielding이 웹(HTTP)의 우수성을 적절하게 활용할 수 있도록 발표한 네트워크 기반 아키텍처이다. REST는 ROA(Resource Oriented Architecture)를 따르는 웹 서비스 아키텍처로 HTTP URI + HTTP Method로 구성되어 있다. 대상자원의 명시를 위해 HTTP URI를 사용하고, 해당 자원에 대한 행위의 지정은 HTTP Method를 활용한다.

〈표 70〉 REST API Method 예시

| Method | 역할 |
| --- | --- |
| POST | 해당 리소스를 생성한다. |
| GET | 해당 리소스를 조회하여 정보를 가져온다. |
| PUT | 해당 리소스를 수정한다. |
| DELETE | 해당 리소스를 삭제한다. |

#### 나) 모바일 서비스

##### ① 위치기반 서비스(Location Based Service)

위치기반 서비스는 2010년 이후 급속한 성장을 하고 있는 스마트폰 시장과 함께 성장하고 있으며 위치 정보와 커머스, 엔터테인먼트가 결합되어 다양한 서비스로 진화하고 있다. 모바일 빅뱅으로 인해 위치 측위가 가능한 단말의 보급이 확산되고 스마트 단말의 위치 측위 플랫폼 개방으로 위치기반서비스(LBS)가 빠르게 발전하였다. 스마트폰의 경우 기지국인 Cell-ID, GPS, Wi-Fi 등을 기반의 위치 측위 기술과 모션센서 기반의 정밀 추측 항법을 이용한 위치 측위 메커니즘을 결합하고 Google Map, Apple Map 등의 지도를 기반으로 종합적으로 활용이 가능하다. 이러한 기술이 소셜 네트워크 서비스, 증강 현실, 모바일 게임 및 광고 등의 다양한 서비스와 연계되어 그 활용성이 극대화되고 있다. 네트워크 기반 위치 측위 기술은 다음과 같다.
