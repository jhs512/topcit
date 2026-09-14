<!-- PDF page: 078 -->

<!-- 원문 예제의 주석 종결 누락과 start Computer, cpu, jump 표기를 그대로 옮겼다. -->
```java
/* Complex parts */

class CPU {
    public void freeze() { ... }
    public void jump(long position) { ... }
    public void execute() { ... }
}

class Memory {
    public void load(long position, byte[ ] data) {
        ...
    }
}

class HardDrive {
    public byte[ ] read(long lba, int size) {
        ...
    }
}

/* Façade /

class Computer {
    public void start Computer() {
        CPU cpu = new CPU();
        Memory memory = new Memory();
        HardDrive hardDrive = new HardDrive();
        cpu.freeze();
        memory. load(BOOT_ADDRESS, hardDrive.read(BOOT_SECTOR, SECTOR_SIZE));
        cpu, jump (BOOT_ADDRESS);
        cpu.execute();
    }
}

/* Client */

class You {
    public static void main(String[ ] args) throws ParseException {
        Computer facade = /* grab a facade instance */;
        facade.start Computer();
    }
}
```

- Flyweight 패턴

- 정의: 정보를 공유하기 위해 공유 가능한 정보와 그렇지 않은 정보를 분리하고 공유 가능한 정보를 개체 형태로 정의해서 정보 공유를 수행하는 형태의 설계

- 장점: 저장 공간 감소 및 다수의 객체 다루기 용이

- Proxy 패턴

- 정의: Proxy 패턴은 복잡하거나 생성하는 데 시간이 걸리는 객체를 좀더 간단한 객체로 나타내기 위해 사용되는 패턴. 객체를 생성하는 일이 자원 소모나 시간 소요라는 점에서 소비가 클 경우 Proxy 패턴은 개발자가 이런 객체를 실제로 필요로 할 때까지 해당 객체의 생성 작업을 늦춤
