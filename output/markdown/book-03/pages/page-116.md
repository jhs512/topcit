<!-- PDF page: 116 -->

- 디스크: CPU 규모산정에 따른 서버 구성방안에 의거하여, 서버별 OS, 시스템 S/W, DB의 데이터, DB의 아카이브(Archive) 및 백업 영역 등의 디스크 사용량을 산정
- 스토리지: CPU를 기준으로 산정된 서버 규모에 따라 필요한 스토리지의 규모를 산정

<table>
<thead><tr><th colspan="3" rowspan="2">구분</th><th colspan="2">시스템 유형</th></tr><tr><th>OLTP</th><th>Web/WAS</th></tr></thead>
<tbody>
<tr><th rowspan="4">서버</th><th colspan="2">CPU</th><td>○</td><td>○</td></tr>
<tr><th colspan="2">메모리</th><td colspan="2">○</td></tr>
<tr><th rowspan="2">디스크</th><th>시스템</th><td colspan="2">○</td></tr>
<tr><th>데이터</th><td colspan="2">○</td></tr>
<tr><th colspan="3">스토리지</th><td>○</td><td>○</td></tr>
</tbody></table>

〈표 25〉 규모 산정 대상

그리고 규모 산정 대상별로 [표 26]과 같이 성능 기준치를 적용하여 산정한다.

<table>
<thead><tr><th rowspan="2">구분</th><th colspan="3">CPU</th><th rowspan="2">스토리지</th></tr><tr><th>OLTP 또는 OLTP &amp; 배치 애플리케이션 서버</th><th>WEB서버</th><th>WAS서버</th></tr></thead>
<tbody><tr><th>성능 측정치</th><td>tpmC</td><td colspan="2">ops</td><td>IOPS</td></tr><tr><th>참조 성능 기준</th><td>TPC-C</td><td>SPECWeb2009</td><td>SPECjbb2005</td><td>SPC-1</td></tr></tbody>
</table>

〈표 26〉 CPU 및 스토리지를 위한 적용 성능 기준치

#### 다) 규모 산정 참조 아키텍처

규모산정은 서버단위로 이루어지므로 규모 산정을 수행하는 사람은 구축하고자 하는 시스템에 대한 전체적인 아키텍처의 개념적 모델을 염두에 둘 필요가 있다. 오늘날 대부분의 정보시스템 아키텍처는 [그림 81]과 같이 3-계층(Tier)으로 구성되어 있다.

| 프리젠테이션 | 비즈니스 로직 | 데이터 서비스 |
| --- | --- | --- |
| • 사용자 입력 수집<br>• 표준 인터페이스 제공<br>• 비즈니스 서비스 접근 제공 | • 데이터 처리 규칙 포함<br>• 애플리케이션 비즈니스 로직 정의<br>• 비즈니스 기능을 비즈니스 정의객체상의 동작으로 사상 | • 데이터 저장<br>• 데이터의 오류와 불일치 방지<br>• 메임프레인 데이터 베이스 접근 제공 |

[그림 81] 3-계층(Tier) 아키텍처

정부 표준에서는 규모산정을 위한 기준을 마련하기 위해서 [그림 82]와 같은 3가지 형태의 참조아키텍처를 제안하고 각 아키텍처 형태에 따라 아키텍처내의 계층별 규모산정 방식을 제시한다.
