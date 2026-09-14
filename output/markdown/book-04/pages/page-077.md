<!-- PDF page: 077 -->

자는 취약한 프로세스의 권한을 취득하여 임의의 코드를 실행할 수 있다.

•코딩기법
printf(), snprintf() 등 포맷 문자열을 사용하는 함수를 사용할 때는 사용자 입력값을 직접적으로 포맷 문자열로 사용하거나
포맷 문자열 생성에 포함시키지 않는다. 포맷문자열을 사용하는 함수에 사용자 입력값을 사용할 때는 사용자가 포맷 스
트링을 변경할 수 있는 구조로 쓰지 않는다.

〈표 24〉 코드 사례

안전하지 않은 코드

```c
void incorrect_password(const char *user) {
    static const char msg_format[] = "%s cannot be authenticated.\n";
    size_t len = strlen(user) + sizeof(msg_format);
    char *msg =(char *)malloc(len);
    if(msg == NULL) {
        /* 오류 처리 */
    }
    int ret = snprintf(msg, len, msg_format, user);
    if(ret < 0 || ret >= len) {
        /* 오류 처리 */
    }
    fprintf(stderr, msg);
    free(msg);
    msg = NULL;
}
```

msg는 신뢰할 수 없는 사용자 입력을 포함하고 있고 fprintf() 호출에서 포맷문자열 인자로 전달되기 때문에 포맷스트링 삽입에 취약하다.

안전한 코드

```c
void incorrect_password(const char *user) {
    static const char msg_format[] = "%s cannot be authenticated.\n";
    size_t len = strlen(user) + sizeof(msg_format);
    char *msg =(char *)malloc(len);
    if(msg == NULL) {
        /* 오류 처리 */
    }
    int ret = snprintf(msg, len, msg_format, user);
    if(ret < 0 || ret >= len) {
        /* 오류 처리 */
    }
    if(fputs(msg, stderr) == EOF) {
        /* 오류 처리 */
    }
    free(msg);
    msg = NULL;
}
```

예제는 fprintf() 대신에 fputs()를 사용하여, msg를 포맷문자열처럼 취급하지 않고 그대로 stderr로 출력한다.

#### 다) Android—JAVA 시큐어 코딩 주요기법

① 외부에서 접근이 가능한 컴포넌트 공격 대응을 위한 시큐어 코딩 기법

• 공격개요
안드로이드 애플리케이션에서 manifest.xml 파일에 android:exported=”true”로 설정되어 있는 컴포넌트는 외부에서 해당
컴포넌트에 인텐트를 전달하여 활성화 시킬수 있다. 이 경우 해당 컴포넌트가 원래 의도하지 않았던 상황에서 수행을 시
작함으로써 시스템 보안에 침해를 가져올 수 있다.
