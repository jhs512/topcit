<!-- PDF page: 094 -->

RAID 5 / Parity across disks

| DISK1 | DISK2 | DISK3 | DISK4 |
| --- | --- | --- | --- |
| BLOCK 1a | BLOCK 2a | BLOCK 3a | parity |
| BLOCK 1b | BLOCK 2b | parity | BLOCK 4a |
| BLOCK 1c | parity | BLOCK 3b | BLOCK 4b |
| parity | BLOCK 2c | BLOCK 3c | BLOCK 4c |

[그림 66] RAID-5

##### ④ RAID-6(Stripe set with dual distributed parity)

RAID-5와 유사한 방식으로 RAID-5는 하나의 패리티를 저장하지만 RAID-6는 두 개의 드라이브에 패리티를 중복하여 저장한다. RAID-5보다 내구성(Durability)이 높아 데이터를 안전하게 저장할 수 있다. RAID-5로 구성할 경우에 드라이브 오류가 발생하여 교체할 경우 교체된 드라이브에 데이터를 복구하는 작업을 리빌드 시간(Rebuild Time)이라고 하며, 저장량이 많은 스토리지 시스템에서는 리빌드 시간이 오래 소요된다. 이 리빌드 시간에 또 다른 드라이브에서 오류가 발생할 경우 데이터의 유실이 될 가능성이 있어 보다 안전한 RAID-6로 구성한다.

RAID 6 / striping with dual parity across drives

| drive 1 | drive 2 | drive 3 | drive 4 |
| --- | --- | --- | --- |
| BLOCK 1a | BLOCK 1b | parity b1 | parity b1 |
| BLOCK 2a | parity b2 | parity b2 | BLOCK 2b |
| parity b3 | parity b3 | BLOCK 3a | BLOCK 3b |
| parity b4 | BLOCK 4a | BLOCK 4b | parity b4 |

[그림 67] RAID-6

##### ⑤ RAID-10(Striping & Mirroring)

최소 4개의 드라이브가 필요하며 입출력 속도의 향상과 데이터의 안정성을 제공하기 위해 RAID-0과 RAID-1 기술의 복합체이다. 이 방법으로 RAID-0의 중요한 단점인 안정성의 불안을 없앨 수 있고, RAID-1의 최대 단점인 퍼포먼스를 대폭 향상 시킬 수 있다. 하지만 많은 비용이 소모된다는 단점이 있다. RAID 1+0은 우선 드라이브 2개씩 미러링으로 구성한 후 2개씩 구성된 RAID-1 구성 드라이브 다시 RAID-0로 구성합니다. RAID 0+1는 구성할 드라이브를 반으로 나누어 RAID-0으로 구성한 후 전체의 1/2개의 드라이브와 나머지 1/2개의 드라이브를 RAID-1로 재구성합니다. RAID-10방식이 더 나은 안정성을 제공하고 일반적으로 RAID-0+1보다 RAID-10을 많이 사용한다.
