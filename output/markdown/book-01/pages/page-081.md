<!-- PDF page: 081 -->

<!-- 원문 예제의 V2974, import 종결 콜론, 소문자 string, Event Source 공백, evsrc/evSrc 불일치를 보존했다. -->
```java
/* V2974: ResponseHandler.java */

package obs;

import java.util. Observable;
import java.util. Observer: /* 여기가 옵저버 */

public class ResponseHandler implements Observer
{
    private String resp;
    public void update (Observable obj, Object arg)
    {
        if (arg instanceof String)
        {
            resp = (string) arg;
            System.out.println("₩nReceived Response: "+ resp );
        }
    }
}
```

```java
/* 파일명: myapp.java */
/* 여기서부터가 프로그램 시작점 */

package obs;

public class MyApp
{
    public static void main(String args[ ])
    {
        System.out.print ln("Enter Text >");

        // 이벤트 발행 주체를 생성함 - stdin으로부터 문자열을 입력받음
        final Event Source evsrc = new Event Source();

        // 옵저버를 생성함
        final ResponseHandler respHandler = new ResponseHandler();

        // 옵저버가 발행 주체가 발행하는 이벤트를 구독하게 함
        evSrc.addObserver( respHandler );

        // 이벤트를 발행시키는 쓰레드 시작
        Thread thread = new Thread(evSrc);
        thread.start();
    }
}
```

- State 패턴

- 정의: 어떤 객체의 내부 상태가 계속 추가될 가능성이 있을 때, 새로운 상태의 추가도 쉽도록 만들어 주고, 추가된 상태를 포함해서 객체의 상태 변화 시, 기존 소스코드 변경 없이 행위 수행 변경이 가능하도록 객체 상태 정보를 클래스 상속 구조로 정의해서 사용하는 방식

- 장점: 객체 내부에서 상태값을 비교하는 문장을 없애준다. 정보의 일관성 유지를 돕는다.

- Strategy 패턴

- 정의: 알고리즘의 성격을 변경할 수 있도록 설정하여 가장 적합한 성격을 선정할 수 있는 방법을 제공하게 함
