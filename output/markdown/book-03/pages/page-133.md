<!-- PDF page: 133 -->

방식 하이퍼바이저가 전가상화에 해당된다.

<table><tr><td>APP1 ↓</td><td>APP2</td><td></td><td>APP2 ↓</td><td></td></tr><tr><td colspan="2">게스트 OS</td><td colspan="2"></td><td>…</td></tr><tr><td colspan="5">가상화 소프트웨어</td></tr><tr><td colspan="5">하이퍼바이저(Hypervisor)<br>CPU (Intel VT-X, AMD-V)</td></tr></table>

<!-- 그림 93: APP1과 오른쪽 APP2의 화살표는 게스트 OS·가상화 소프트웨어를 통과하여 CPU 내 하이퍼바이저까지 이어짐 -->

[그림 93] 전가상화 개념도

##### ② 반가상화(Para Virtualization)

반가상화는 하드웨어를 완전히 가상화하지 않으며 게스트 OS가 하드웨어 자원을 접근하기 위해서는 하이퍼바이저를 경유해야 한다. 하드웨어 에뮬레이션 없이 하이퍼바이저 API를 이용하는 방식이다. 게스트 OS의 운영체제는 하이퍼바이저 API를 사용하도록 OS의 커널을 일부분 수정해야 한다.

하드웨어 에뮬레이션을 하지 않고 하이퍼바이저를 통해서 제어하기 때문에 높은 성능을 제공할 수 있다는 장점과 함께 게스트 OS의 커널을 일부분 수정해야 하기 때문에 오픈 소스 운영체제만을 게스트 OS로 사용 할 수 있다는 단점이 있다.

<table><tr><td>APP1</td><td>APP2</td><td></td><td>APP1</td><td></td></tr><tr><td colspan="2">게스트 OS</td><td colspan="2">게스트 OS ↓</td><td>…</td></tr><tr><td colspan="5">하이퍼바이저 / Hypercall ↓</td></tr><tr><td colspan="5">하드웨어</td></tr></table>

[그림 94] 반가상화 개념도

##### ③ OS레벨 가상화(OS-level virtualization)

OS상에서 같은 OS를 하나 더 사용하는 것처럼 꾸며주는 가상화 기술이다. 하이퍼바이저를 사용하지 않고 OS에 포함된 가상화 기술을 사용한다. 운영체제에 포함된 자원을 할당하고 격리하는 컨테이너 기술이 주목 받고 있다. 대표적인 기술로는 Solaris Containers, FreeBSD Jails, Linux Docker가 있다. 하이퍼바이저를 사용하지 않고 OS의 컨테이너 기능을 사용하기 때문에 게스트 OS는 호스트 OS와 동일해야 한다. OS에 올라가는 컨테이너는 메모리, 스토리지, 네트워크 등의 자원을 기본적으로 할당 받으며 이는 각 컨테이너 간 독립적으로 운영된다.
