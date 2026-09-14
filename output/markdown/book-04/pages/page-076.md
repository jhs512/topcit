<!-- PDF page: 076 -->

실행시킴으로써 공격자 프로그램을 통제할 수 있는 권한을 획득하게 한다.

•코딩기법
프로그램상에서 메모리 버퍼를 사용할 경우 적절한 버퍼의 크기를 설정하고, 설정된 범위의 메모리 내에서 올바르게 읽
거나 쓸 수 있게 통제하여야 한다. 특히, 문자열 저장 시 널(NULL) 문자로 종료하지 않으면 의도하지 않은 결과를 가져오
게 되므로 널 문자를 버퍼 범위 내에 삽입하여 널 문자로 종료되도록 해야 한다.

〈표 23〉 코드 사례

안전하지 않은 코드

```c
...typedef struct _charvoid {
    char x[16];
    void * y;
    void * z;
} charvoid
void badCode() {
    charvoid cv_struct
    cv_struct.y =(void *) SRC_STR;
    printLine((char *) cv_struct.y);
    /* sizeof(cv_struct)의 사용으로 포인터 y에 덮어쓰기 발생 */
    memcpy(cv_struct.x, SRC_STR, sizeof(cv_struct));
    printLine((char *) cv_struct.x);
    printLine((char *) cv_struct.y);
}
```

포인터 구조체의 개별 필드에 특정 문자열을 복사하는 프로그램이다. 잘못 계산된 데이터 크기 sizeof(cv_struct)로 인해 프로그램은 연속된 메모리 공간인 포인터 y를 덮어쓰는 버퍼 오버플로우를 발생시킨다. 또한 프로그램은 복사된 문자열에 대해 종료 문자를 첨가시키지 않았기 때문에 문자열의 참조시 잘못된 결과를 가져올 수 있다.

안전한 코드

```c
typedef struct _charvoid {
    char x[16];
    void * y;
    void * z;
} charvoid

static void goodCode() {
    charvoid cv_struct
    cv_struct.y =(void *) SRC_STR;
    printLine((char *) cv_struct.y);
    /* sizeof(cv_struct.x)로 변경하여 포인터 y의 덮어쓰기를 방지함 */
    memcpy(cv_struct.x, SRC_STR, sizeof(cv_struct.x));
    /* 문자열 종료를 위해 널 문자를 삽입함 */
    cv_struct.x[(sizeof(cv_struct.x)/sizeof(char))-1] = '\0';
    printLine((char *) cv_struct.x);
    printLine((char *) cv_struct.y);
}
```

안전한 코드가 되기 위해서는 첫째, 문자열 복사는 구조체 내의 필드값 x에 한정되는 것이므로 정확한 문자열 계산인 sizeof(cv_struct.x)을 통해 허용된 범위의 인덱스만을 사용하도록 수정한다. 둘째, 복사된 문자열은 올바른 널(Null) 정보를 가져야 하므로 복사된 값을 가진 cv_struct.x 배열의 가장 마지막 인덱스를 계산하여 널(Null) 문자를 패딩해야 한다.

② 포맷 스트링 삽입 공격 대응을 위한 시큐어 코딩 기법

• 공격개요
외부로부터 입력된 값을 검증하지 않고 입 • 출력 함수의 포맷 문자열로 그대로 사용하는 경우 발생할 수 있는 보안약점
이다. 공격자는 포맷 문자열을 이용하여 취약한 프로세스를 공격하거나 메모리 내용을 읽거나 쓸 수 있다. 그 결과, 공격
