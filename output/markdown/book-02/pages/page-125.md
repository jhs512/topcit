<!-- PDF page: 125 -->

[그림 44] 교착상태 개념도

③ 모든 트랜잭션들이 실행을 전혀 진전시기지 못하고 무한정 기다리고 있는 상태이다.

- TI은 T2가 데이터 X를 Un|00k하기를 기다림

- 뙤는 데이터 x를 Locking하고 있는 상태

- T2는TI이 데이터 Y를 UnIcck하기를 기다림

TI은 데이터 Y를 Locking하고 있는 상태

〈표 51〉 교착상태와 무한대기의 비교

<table>
<tr><td>구분</td><td>Deadlock(교착상태)</td><td>Starvation(무한대71)</td></tr>
<tr><td>정의</td><td>다수의 프로세스가 아무 일도 못하고 특정사간d<br>무한대기</td><td>특정 프로세스가 자원을 할당 받기 위한 무한정 대기<br>상태</td></tr>
<tr><td>발생원인</td><td>상호배제, 점유와 대기, 비선점, 환형 대기</td><td>자원의 편중된 분배정책</td></tr>
<tr><td>해결방안</td><td>예방, 회피, 발견, 회복</td><td>Aging 기법</td></tr>
</table>

#### 나) 교착상태 발생원인

〈표 52〉 하나의 시스템에서 교착상태가 발생하기 위한 조건(동시 성립 시 발생)

<table>
<tr><td>원인</td><td>상세 내역</td></tr>
<tr><td>상호배제(Mutual Exclusion)</td><td>프로세스들이 자원을 배타적으로 점유하여 다른 프로세스가 그 지원을 사용하지 못함</td></tr>
<tr><td>점유와 대기(BIock &amp; Wait)</td><td>프로세스가 어떤 자원을 할당 받아 점유하고 있으면서 다른 자원을 요구</td></tr>
<tr><td>비선점(Non Preemption)</td><td>프로세스에 할당된 자원은 사용이 끝날 때까지 강제로 빼앗을 수 없으며, 점유하고 있는<br>프로세스 자신만이 해제 가능</td></tr>
<tr><td>환형 대기(Circular wait)</td><td>프로세스간 자원 요구가 하나의 원형을 구성</td></tr>
</table>

#### 다) 교착상태의 해결 방안

〈표 53〉 교착상태 해결방안

<table>
<tr><td>해결방안</td><td>상세 내역</td></tr>
<tr><td>교착상태 예방<br>(Deadlock Preventlon)</td><td>시스템이 교착상태에 빠지지 않도록 보장하는 규약 사용<br>시스템이 교착 상태에 빠질 확률이 상대적으로 높을 때 사용<br>상호배제 예방, 부분할당 예방, 비선점 예방, 환형대기 예방<br>회피기법. 타임스탬프를 사용하는 Wait-Die, wound-wait 기법</td></tr>
<tr><td>교착상태 탐지와 복구<br>(Deadbck detection &amp; Recovery)</td><td>시스템이 교착 상태에 빠질 수 있도록 하고 교착상태 탐지와 복구 기법을 이용하여 교착상태<br>해결<br>Detection: 시스템의 상태 감시를 알고리즘을 통하여 교착상태 검시(Wait 10r Graph reduction.<br>cycle detection, kl℃t detectbn)<br>Recovery: deadbck이 없어질 때까지 프로세스를 순차적으로 KiII하여 제거함{희생자 선택<br>(프로세스 최소 종료 비용 값을 계산), 를백, 기아상태}</td></tr>
</table>
