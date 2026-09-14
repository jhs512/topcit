<!-- PDF page: 076 -->

- Singleton.java-인스턴스가 1개만 있는 클래스

```java
package DP005_singleton;

public class Singleton {
    private static Singleton singleton = new Singleton();
    // 외부에서 접근하지 못하도록 private, 한 프로그램에서 모두 사용할 수 있도록 으로 static
    private Singleton() { // 외부에서 생성하지 못하게 생성자의 접근제한자를 private으로 선언
        System.out.println("인스턴스가 생성되었습니다.");

    }
    public static Singleton getInstance() {
        return singleton; //생성된 Singleton 인스턴스를 반환
    }
}
```

- Main.java-Main()메소드가 있는 테스트용 클래스

```java
package DP805_singleton;

public class Main {
    public static void main(String[ ] args) {
        System.out.println("Start.");
        Singleton obj1 = Singleton.getInstance(); //인스턴스 반환받는다.
        Singleton obj2 = Singleton.getInstance(); //인스턴스 반환받는다.

        if(obj1 == obj2){ //obj1과 obj2가 참조하는 값은 같다.
            System.out.println("obj1과 obj2는 같은 인스턴스입니다.");
        }else{
            System.out.println("obj1과 obj2는 틀린 인스턴스입니다.");
        }
        System.out.println("End.");

    }
}
```

##### ② 구조패턴

- Adapter 패턴

- 정의: 클래스가 갖는 프로그래밍 인터페이스를 다른 클래스의 프로그래밍 인터페이스로 변화시킴. 하나의 프로그램에서 서로 관련이 없는 클래스들을 함께 일하도록 만들고 싶을 때 Adapter 패턴을 사용

- 장점: 새로운 클래스, 해당 클래스의 기능 추가가 간편

- Bridge패턴

- 정의: 개발자가 클라이언트의 코드 내용을 변경하지 않고도 구현 내용을 바꾸거나 대체할 수 있도록 클래스의 인터페이스와 구현 내용을 분리시킨 것

- 장점: 인터페이스와 구현의 분리. 실행 시간에 구현 객체 교환 및 설정 가능. #ifdef~#endif 구문을 대체할 수 있음

- Composite패턴

- 정의: 디렉토리와 파일을 합해서 디렉토리 엔트리로 취급하듯이 특정 객체들과 그것들을 포함하는 객체들을 동일하게 다룰 수 있게 해주는 패턴
