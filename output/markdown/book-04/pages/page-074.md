<!-- PDF page: 074 -->

• 코딩기법

웹 인터페이스를 통해 서버 내부로 시스템 명령어를 전달시키지 않도록 응용프로그램을 구성하고, 외부에서 전달되는 값을 검증 없이 시스템 내부 명령어로 사용하지 않는다. 외부 입력에 따라 명령어를 생성하거나 선택이 필요한 경우에는 명령어 생성에 필요한 값들을 미리 지정해 놓고 외부 입력에 따라 선택하여 사용한다.

〈표 21〉 코드 사례

안전하지 않은 코드

```java
public static void main(String args[]) throws IOException {
    if(args.length == 0) {
        System.err.println("실행할 프로그램 명을 입력하세요.");
        return;
    }
    // 해당 프로그램에서 실행할 프로그램을 제한하고 있지 않아 파라미터로 전달되는 모든 프로그램이 실행될 수 있다.
    String cmd = args[0];
    Process ps = null;
    InputStream is = null;
    InputStreamReader isr = null;
    BufferedReader br = null;
    try {
        ps = Runtime.getRuntime().exec(cmd);
        is = ps.getInputStream();
        isr = new InputStreamReader(is);
        br = new BufferedReader(isr);
        String line = null;
        while((line = br.readLine()) != null) {
            System.out.println(line);
        }
    }
    ...(적절한 예외처리 및 자원해제 처리) · · ·
}
```

Runtime.getRuntime().exec()명령어를 통해 프로그램을 실행하며, 외부에서 전달되는 인자값은 명령어의 생성에 사용된다. 그러나 해당 프로그램에서 실행할 프로그램을 제한하지 않고 있기 때문에 외부의 공격자는 가능한 모든 프로그램을 실행시킬 수 있다.

안전한 코드

```java
public static void main(String args[]) throws IOException {
    // 해당 애플리케이션에서 실행할 수 있는 프로그램을 노트패드와 계산기로 제한하고 있다.
    List<String> allowedCommands = new ArrayList<String>();
    allowedCommands.add("notepad");
    allowedCommands.add("calc");
    if(args.length == 0) {
        System.err.println("실행할 프로그램 명을 입력하세요.");
        return;
    }

    String cmd = args[0];
    if(!allowedCommands.contains(cmd)) {
        System.err.println("허용되지 않은 명령어입니다.");
        return;
    }
    Process ps = null;
    InputStream is = null;
    InputStreamReader isr = null;
    BufferedReader br = null;
    try {
        ps = Runtime.getRuntime().exec(cmd);
        ......
```

미리 정의된 파라미터의 배열을 만들어 놓고, 외부의 입력에 따라 적절한 파라미터를 선택하도록 하여, 외부의 부적절한 입력이 명령어로 사용될 가능성을 배제하여야 한다.
