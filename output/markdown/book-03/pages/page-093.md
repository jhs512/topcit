<!-- PDF page: 093 -->

RAID 0 / Striping

| DISK1 | DISK2 |
| --- | --- |
| BLOCK 1 | BLOCK 2 |
| BLOCK 3 | BLOCK 4 |
| BLOCK 5 | BLOCK 6 |
| BLOCK 7 | BLOCK 8 |

[그림 64] RAID-0

##### ② RAID-1(Mirroring and Duplexing)

데이터를 2개의 드라이브에 중복 저장하는 방법을 이용하는 미러링(Mirroring) 기법을 이용한다. 데이터를 중복으로 저장하기 때문에 1개의 드라이브가 손상되어도 데이터를 복수 할 수 있다. 입출력이 적은 드라이브에서 읽기(Read)작업을 수행하여 읽기 성능을 높일 수 있지만 쓰기(Write)작업은 약간 느리다. 안정성이 높지만 드라이브 1개를 중복 저장용으로 사용하기 때문에 물리적인 용량을 절반만 사용할 수 있어 비용이 높다.

RAID 1 / mirroring

| DISK1 | DISK2 |
| --- | --- |
| BLOCK 1 | BLOCK 1 |
| BLOCK 2 | BLOCK 2 |
| BLOCK 3 | BLOCK 3 |
| BLOCK 4 | BLOCK 4 |

[그림 65] RAID-1

##### ③ RAID-5

RAID-4는 별도의 패리티 드라이브를 두고 데이터 검증과 복구를 위한 패리티들을 모아 저장한다. RAID-5는 RAID-4에서 패리티가 저장되는 드라이브의 부하를 분산 저장하도록 개선한 방법이다. 최소 3개 이상의 드라이브가 필요하며, 드라이브에 분산하여 데이터와 패리티를 저장한다. 가격과 성능 측면에서 효과가 높으며, 최근의 SSD(Solid State Drive)의 경우 RAID-5로 많이 구성한다. 하지만 세개의 드라이브로 구성 시 두 개 이상의 드라이브가 손실될 경우 복구가 불가능해진다.
