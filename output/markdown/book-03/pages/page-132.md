<!-- PDF page: 132 -->

<table><tr><td>APP1</td><td>APP2</td><td>…</td><td>APP1</td><td>APP2</td><td>…</td><td></td></tr><tr><td colspan="3">운영체제 1</td><td colspan="3">운영체제 1</td><td>…</td></tr><tr><td colspan="7">하이퍼바이저</td></tr><tr><td colspan="7">하드웨어</td></tr></table>

[그림 91] Native방식 하이퍼바이저

##### ② Hosted방식

Hosted 방식의 하이퍼바이저([그림 92]참조)는 기존의 운영체제 위에 설치되는 소프트웨어이다. 이러한 유형의 하이퍼바이저로는 마이크로소프트의 Virtual PC나 VMWare의 Workstation, 오라클의 VirtualBox등이 있다.

<table><tr><td colspan="2"></td><td>APP1</td><td>APP2</td><td>APP1</td><td></td><td></td></tr><tr><td colspan="2"></td><td colspan="2">OS 1(Guest OS)</td><td colspan="2">OS 2(Guest OS)</td><td>…</td></tr><tr><td>APP1</td><td>APP2</td><td colspan="5">하이퍼바이저</td></tr><tr><td colspan="7">운영체제(Host OS)</td></tr><tr><td colspan="7">하드웨어</td></tr></table>

[그림 92] Hosted방식 하이퍼바이저

#### 다) 서버 가상화 방식의 유형

서버 가상화 기술은 가상화 방식에 따라서 전가상화(Full Virtualization), 반가상화(Para-Virtualization), OS레벨 가상화(OS-level Virtualization)로 구분될 수 있다.

##### ① 전가상화(Full Virtualization)

하드웨어를 완전하게 가상화하는 방식으로 게스트 OS(Guest OS)는 하드웨어를 직접 소유하고 접근하는 것으로 인식하지만, 사실 가상 서버는 하이퍼바이저가 하드웨어를 에뮬레이션한 자원을 사용하는 것이다. 게스트 OS가 하드웨어를 독점하려 할 경우, 하이퍼바이저는 이러한 명령을 별도로 처리해야 한다. CPU를 제외한 하드웨어 자원을 완전히 에뮬레이션하기 위해서는 가상화를 지원하는 CPU(인텔의 VT, AMD-V)가 필요하다. CPU에 포함된 하이퍼바이저가 빠른 속도로 처리하기 때문에 성능이 매우 향상되었다. CPU에서 전가상화를 처리하기 때문에 게스트 OS를 수정할 필요가 없다. 따라서 게스트 OS에 대한 제약이 없다. 리눅스 기반 게스트 OS와 윈도우즈 게스트 OS를 동시에 운영할 수 있다. 일반적으로 Native
