<!-- PDF page: 094 -->

##### ③ 스프링 프레임워크의 구성

<table>
<tbody>
<tr><td rowspan="2"><strong>Spring AOP</strong><br>Source-level<br>metadata<br>AOP infrastructure</td><td><strong>Spring ORM</strong><br>Hibernate support<br>iBats support<br>JDO support</td><td><strong>Spring Web</strong><br>Web ApplicationContext<br>Mutipart resolver<br>Web utlities</td><td rowspan="2"><strong>Spring Web MVC</strong><br>Web MVC<br>Framework<br>Web Views<br>JSP/Velocity<br>PDF/Export</td></tr>
<tr><td><strong>Spring DAO</strong><br>Transaction infrastructure<br>JOBC support<br>DAO support</td><td><strong>Spring Context</strong><br>Application context<br>UI support<br>Validation<br>JNDL EJB support and<br>remodeling<br>Mail</td></tr>
<tr><td colspan="4"><strong>Spring Core</strong><br>Supporting utlities<br>Bean container</td></tr>
</tbody>
</table>

〈표 24〉 스프링 프레임워크 구성요소

| 구성요소 | 설명 |
| --- | --- |
| Spring Core | 스프링의 핵심부분으로 기능과 설정을 분리하기 위한 IoC 기능이 구현된 BeanFactory를 제공한다 |
| Spring Context | Core와 같이 스프링의 기본 기능으로 스프링 기반에서 구현된 기능 객체(Bean)들에 대한 접근 방법을 제공한다. |
| Spring DAO | JDBC에 대한 추상화 계층으로 ORM 프레임워크와 통합되어 트랜잭션 관리 기능을 향상시킨다. |
| Spring ORM | 객체/관계 맵핑을 위한 JDO, 하이버네이트, iBatis 등과 같은 통합을 위한 패키지로 객체 관계형 모델을 지원한다. |
| Spring AOP | 로깅, 보안, 트랜잭션 등과 같은 횡단 관심사의 분리로 유지보수성과 변경 용이성을 지원한다. |
| Spring Web | 일반적인 어플리케이션 개발에 필요한 기본 기능을 제공하고 웹 워크나 스트럿츠와의 통합을 위해 사용되는 패키지이다. |
| Spring WebMVC | 스트럿츠와 같은 일반적인 WAF 기능을 스프링 버전으로 구현하고 있는 패키지이다. |

#### 다) 전자정부 표준프레임워크

##### ① 전자정부 표준프레임워크 소개

자바기반의 시스템 개발 • 운영 시 필요한 기본 기능들을 표준화하여 미리 구현해 둔 공공사업용 표준개발프레임워크로 민간과 정부에서 필요한 다양한 소프트웨어 개발에 기반이 되는 환경(실행 • 개발 • 관리 • 운영)과 공통모듈을 미리 구현하여 제공한 것이다. 개발자는 표준프레임워크가 제공하는 기반 환경 위에서 공통모듈을 재사용하고 각 서비스의 고유한 기능만을 자체 개발하여 시스템 구축이 가능하다.

##### ② 전자정부 표준프레임워크의 목적과 특징

공공사업에 적용되는 개발 프레임워크의 표준 정립을 통해 응용 소프트웨어 표준화, 품질 및 재사용성 향상을 목적으로 한다.

- 전자정부 서비스 품질향상

- 정보화 투자 효율성 향상

- 대 • 중 • 소기업이 동일한 개발 기반 위에서 공정한 경쟁
