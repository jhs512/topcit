<!-- PDF page: 074 -->

디자인 패턴은 목적과 범위에 따라 [그림 18]과 같이 분류할 수 있다. 디자인 패턴은 목적에 따라서 '생성패턴', '구조패턴', '행위패턴'으로 나눌 수 있다.

① 생성패턴(creation pattern): 객체의 생성과정에 관여하는 패턴

② 구조패턴(structural pattern): 클래스나 객체의 합성에 관한 패턴

③ 행위패턴(behavioral pattern): 클래스나 객체들이 상호작용하는 방법과 책임을 분산하는 방법을 정의하는 패턴

그리고 범위(scope)에 따른 디자인 패턴을 구분할 수 있다. 범위에 따라 패턴을 주로 클래스에 적용하는지 아니면 객체에 적용하는 지를 구분할 수 있다.

④ 클래스패턴(class pattern): 클래스와 서브 클래스 간의 관련성을 다루는 패턴. 관련성은 주로 상속이며 컴파일 타임에 정적으로 결정한다.

⑤ 객체패턴(object pattern): 객체 관련성을 다루는 패턴으로서 런타임에 변경할 수 있으며 동적인 성격을 갖는다.

#### 나) 대표적인 디자인 패턴

반복적 코드 사용에 대한 재활용 편의를 높이고 복잡한 코드를 쉽게 관리하기 위해 옆 그림의 디자인 패턴들을 사용하여 소프트웨어 개발을 효과적으로 한다.

〈표 20〉 대표적인 디자인 패턴과 문제유형

<table>
<thead><tr><th>대분류</th><th>문제 유형(사용 목적)</th><th>관련 디자인 패턴</th></tr></thead>
<tbody>
<tr><td rowspan="5">객체 생성을 위한 패턴</td><td>제품군(Product Family)별 객체 생성</td><td>Abstract Factory</td></tr>
<tr><td>부분 생성을 통한 전체 객체 생성</td><td>Builder</td></tr>
<tr><td>대행 함수를 통한 객체 생성</td><td>Factory Method</td></tr>
<tr><td>복제를 통한 객체 생성</td><td>Prototype</td></tr>
<tr><td>최대 N개까지로 객체 생성을 제한</td><td>Singleton</td></tr>
<tr><td rowspan="7">구조 개선을 위한 패턴</td><td>기존 모듈 재사용을 위한 인터페이스 변경</td><td>Adapter</td></tr>
<tr><td>인터페이스와 구현의 명확한 분리</td><td>Bridge</td></tr>
<tr><td>객체 간의 부분-전체 관계 형성 및 관리</td><td>Composite</td></tr>
<tr><td>객체의 기능을 동적으로 추가, 삭제</td><td>Decorator</td></tr>
<tr><td>서브시스템의 명확한 구분 정의</td><td>Façade</td></tr>
<tr><td>작은 객체들의 공유</td><td>Flyweight</td></tr>
<tr><td>대리 객체를 통한 작업 수행</td><td>Proxy</td></tr>
<tr><td rowspan="11">행위 개선을 위한 패턴</td><td>수행 기능 객체로까지 요청 전파</td><td>Chain of Responsibility</td></tr>
<tr><td>수행할 작업의 일반화를 통한 조작</td><td>Command</td></tr>
<tr><td>간단한 문법에 기반한 검증 및 작업 처리</td><td>Interpreter</td></tr>
<tr><td>동일 자료형의 여러 객체 순차 접근</td><td>Iterator</td></tr>
<tr><td>M:N 객체 관계를 M:1로 단순화</td><td>Mediator</td></tr>
<tr><td>객체의 이전 상태 복원 또는 보관</td><td>Memento</td></tr>
<tr><td>One Source Multiple Use</td><td>Observer</td></tr>
<tr><td>객체 상태 추가 시 행위 수행의 원활한 변경</td><td>State</td></tr>
<tr><td>동일 목적의 여러 알고리즘 중 선택해서 적용</td><td>Strategy</td></tr>
<tr><td>알고리즘의 기본 골격 재사용 및 상세 구현 변경</td><td>Template method</td></tr>
<tr><td>작업 종류의 효율적 추가, 변경</td><td>Visitor</td></tr>
</tbody>
</table>
