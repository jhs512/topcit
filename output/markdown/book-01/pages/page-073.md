<!-- PDF page: 073 -->

<table>
<thead><tr><th>모델구분</th><th>다이어그램</th><th>내용</th></tr></thead>
<tbody>
<tr><td rowspan="4">정적모델</td><td>클래스 다이어그램<br>(Class Diagram)</td><td>시스템을 구성하는 클래스, 인터페이스 사이의 구조적 연관관계를 표현</td></tr>
<tr><td>객체 다이어그램<br>(Object Diagram)</td><td>특정 시점 객체들의 구조적 상태를 표현</td></tr>
<tr><td>컴포넌트 다이어그램<br>(Component Diagram)</td><td>컴포넌트 구조사이의 관계 표현</td></tr>
<tr><td>배치 다이어그램<br>(Deployment Diagram)</td><td>소프트웨어, 하드웨어, 네트워크를 포함한 실행 시스템의 물리 구조를 표현</td></tr>
<tr><td rowspan="5">동적모델</td><td>시퀀스 다이어그램<br>(Sequence Diagram)</td><td>시스템 외부 이벤트를 처리하기 위해 시스템 내부 객체 간에 주고받는 동적 메시지를 시간의 흐름에 따라 표현</td></tr>
<tr><td>컬레보레이션 다이어그램<br>(Collaboration Diagram)</td><td>시퀀스 다이어그램과 동일한 내용을 객체 상호 관계의 관점에서 표현</td></tr>
<tr><td>액티비티 다이어그램<br>(Activity Diagram)</td><td>시스템 내부의 활동 흐름을 표현</td></tr>
<tr><td>상태차트 다이어그램<br>(Statechart Diagrm)</td><td>시스템 내부의 상태 전이를 표현</td></tr>
<tr><td>패키지 다이어그램<br>(Package Diagram)</td><td>클래스나 유스케이스 등을 포함한 여러 모델 요소들을 그룹화해 패키지를 구성하고 패키지들 사이의 관계를 표현</td></tr>
</tbody>
</table>

### 04 디자인 패턴(Design Pattern)

#### 가) 디자인 패턴 개념

옷에 쓰이는 그런 패턴의 이야기가 정확히 이야기하면 소프트웨어 디자인 패턴이다. 디자인 패턴에 대해서 정의하면 디자인 패턴(소프트웨어 생략)이라는 것은 “소프트웨어 설계의 특정한 맥락에서(in a context) 반복해서 해결해야 할 문제 (recurring problem)에 대해서 일반적이고 재사용이 가능한 해결 방법”이다. 디자인 패턴은 다양한 상황에서 사용할 수 있는 문제를 해결하는 방법에 대한 설명이거나 견본이라고 할 수 있으며 프로그래머가 구현해야 하는 모범사례들을 공식화 하고 있으며 일반적으로 클래스나 객체 간의 상호작용이나 관계를 보여 준다.

목적(Purpose)에 따른 구분 →<br>
범위(Scope)에 따른 구분 ↓

| | 생성 | 구조 | 행위 |
| --- | --- | --- | --- |
| 클래스 | - Factory Method | - Adaptor(class) | - Interpreter<br>- Template Method |
| 객체 | - Abstract Factory<br>- Builder<br>- Prototype<br>- Singleton | - Abstract(object)<br>- Bridge<br>- Composite<br>- Decorator<br>- Façade<br>- Flyweight<br>- Proxy | - Chain of Responsibility<br>- Command<br>- Interpreter<br>- Mediator<br>- Memento<br>- Observer<br>- State<br>- Strategy<br>- Visitor |

[그림 18] 디자인패턴 분류
