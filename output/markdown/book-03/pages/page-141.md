<!-- PDF page: 141 -->

<table><thead><tr><th>빅데이터 구분</th><th>주요 기술</th><th>기술별 주요 기능</th></tr></thead><tbody>
<tr><th>메타 데이터관리</th><td>HCatalog</td><td>빅데이터 메타 정보 관리</td></tr>
<tr><th rowspan="2">데이터 분석</th><td>Hive</td><td>하둡 기반의 데이터웨어하우징용 솔루션<br>유사 SQL 기반 빅데이터 처리<br>페이스북에서 개발하여, 오픈 소스로 공개</td></tr>
<tr><td>Pig</td><td>데이터 분석<br>MapReduce 대신 자체 언어 Pig Latin 제공</td></tr>
<tr><th>인메모리 처리</th><td>Spark</td><td>오픈소스 클러스터 컴퓨팅 프레임워크<br>UC 버클리 AMPLab에서 처음 개발함</td></tr>
<tr><th>데이터 마이닝</th><td>Mahout</td><td>데이터 마이닝<br>하둡 기반의 오픈 소스</td></tr>
<tr><th>워크 플로우관리</th><td>Oozie</td><td>빅데이터 처리 과정 관리<br>하둡 작업을 관리</td></tr>
<tr><th>분산 코디네이터</th><td>Zookeeper</td><td>빅데이터 서버 시스템 관리<br>분산 환경 서버들 간의 상호 조정 서비스</td></tr>
<tr><th>직렬화</th><td>Avro</td><td>RPC(Remote Procedure Call)와 데이터 직렬화를 지원하는 프레임워크</td></tr>
<tr><th>리소스 매니져</th><td>YARN</td><td>리소스 관리 플랫폼<br>분산 컴퓨팅 환경 제공<br>클러스터내 컴퓨팅 자원 관리<br>사용자의 애플리케이션 스케줄링 사용 관리</td></tr>
</tbody></table>

#### 라) 하둡기반 전문 상용 솔루션

오픈 소스 하둡을 전문적으로 개발해 상용 솔루션으로 배포하는 전문 기업들로는 클라우데라와 호튼웍스, 맵알(Map R) 이 대표적이다. 이들 업체들은 하둡을 기반으로 한 자체 플랫폼을 만들고 이를 기존 DB, DW, BI 솔루션 업체와의 전략적 제휴를 통해 배포하고 있다.<sup>9</sup>

| 하둡상용버전 | 특징 |
| --- | --- |
| CDH, Cloudera Manager | CDH: 하둡, 하이브, 마훗, 우지, 피그, 주키퍼, 휴와 다른 오픈 소스 도구 포함, 고유 제품 포함하지 않음<br>클라우데라 매니저: CDH 환경 관리 도구(CDH 배포 및 모니터링을 지원, 무료와 엔터프라이즈 버전)<br>• 프리 에디션: CDH 포함, 최대 50개 노드 클러스터 지원, 하둡 인프라 서비스 및 설정 관리 외 부가기능 제한<br>• 엔터프라이즈 에디션: CDH 포함, 무제한의 노드 클러스터 지원, 능동적 모니터, 추가 데이터 분석도구 결합 |
| 호튼웍스 데이터 플랫폼 (HDP) | 하둡, 하이브, 마훗, 우지, 피그, 주키퍼, 휴와 다른 오픈 소스 도구 포함, 업체 고유 제품 포함하지 않음<br>모든 소프트웨어 무료 제공, 교육과 지원 프로그램 통해 수익 |
| M3, M5, M7 | 하둡, 하이브, 마훗, 우지, 주키퍼, 휴와 다른 오픈 소스 도구 포함<br>M3: 무료 버전, NFS access, 통합 관리UI, 향상된 확장성 등 제공<br>M5: 유료 버전(서브스크립션), no single points of failure, mirroring, snapshots, NFS HA, data placement control 등의 기능 제공<br>M7: HBase 개선, 속도, 확장성과 안정성 향상 |

---

9 클라우데라와 호튼웍스는 2018.10.03 합병됨
