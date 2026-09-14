<!-- PDF page: 197 -->

FTP는 한 파일이나 파일의 일부분을 한 시스템에서 다른 시스템으로 전송하기 위한 규약[1]으로. 다른 응용 계층 프로토콜과 다르게 두 개의 연결을 가진다. 이는 제어 연결(Control Connection)과 데이터 연결(Data Connection)이라 하며, 각기 21번 포트와 20번 포트를 사용한다. 제어 연결은 클라이언트가 종료되거나 FTP 세션이 끝날 때까지 유지된다. 데이터 연결은 각각 의 파일 전송이 시작될 때마다 TCP 연결 설정을 하여 사용되며, 데이터 포트는 사용되는 방식에 따라서 20번 포트 외에도 다

른 포트 번호가 사용될 수 있다.

FTP 연결은 크게 일반 전송 모드와 수동 전송 모드(PASV, passive transfer)로 구분한다. 여기서 일반 전송 모드는 데이터 연 결 설정을 위해 서버가 클라이언트에게 연결을 요청하며, 방화벽(firewall)과 같은 시스템을 경유하여 외부에 있는 서버 시스템 과 연결을 할 때 문제가 발생한다. 이에 비해 수동 전송 모드는 클라이언트가 기본 데이터 채널이 아닌 다른 채널을 통해 서버와의 연결을 먼저 요청한다. 클라이언트가 FTP 연결 설정을 요청하기 때문에 방화벽 통과가 가능하다. 클라이언트 네트워크가 프록시 서버를 사용하고 있어 외부에서 클라이언트의 IP가 보이지 않는 경우에도 적용 가능하다.

〈표 76〉 일반 전송 모드와 수동 전송 모드 비교

<table>
<tr><td>구분</td><td>일반 전송 모드</td><td>수동 전송 모드</td></tr>
<tr><td>개념</td><td>서버에서 클라이언트의 특정포트에 접속하여 데이터<br>전송</td><td>클라이언트에서 서버의 특정포트에 접속하여 데이터<br>전송</td></tr>
<tr><td>목적</td><td>일반적인 FTP 사용 방식</td><td>보안 설정된 클라이언트에서 FTP 사용</td></tr>
<tr><td>적용</td><td>일반 FTP 도구 Active, Passive 지원</td><td>웹 브라우저에서 FTP 연결 시</td></tr>
<tr><td>사용포트</td><td>제어 포트. 21번<br>데이터 포트: 20번</td><td>제어 포트: 21번<br>데이터 포트: 1024번 포트 이후</td></tr>

</table>

FTP 명령어 처리 과정과 사용 가능한 FTP 명령어는 다음과 같다.

FTP 명령어 처리 과정 FTP는 제어 연결을 설정하여 서버 제어 프로세스와 클라이언트 제어 프로세스가 통신을 하게 된다.

| 제어 연결 | 메시지 |
|---|---|
| 클라이언트 → 서버: 명령 메시지 | 명령어 / SP / 매개변수 / CR / LF |
| 서버 → 클라이언트: 응답 메시지 | 응답코드 / SP / 의미 / CR / LF |

- 대화형으로 처리되며, 사용자가 서버에 내리는 명령(command)과 그에 대한 응답(response)으로 구분된다.

FTP 명령 메시지에 포함된 명령어 종류

<table>
<tr><td>명령어 유형</td><td>명령어 종류</td></tr>
<tr><td>접근 명령어</td><td>USER, PASS, ACCT, REIN, QUIT, ABOR</td></tr>
<tr><td>파일 관리 명령어</td><td>CWD, CDUP, DELE, LIST, NLST, MKD, PWD, RMD, RNFR, RNTO, SMNT</td></tr>
<tr><td>데이터 형식화 명령어</td><td>TYPE, STRU, MODE</td></tr>
<tr><td>포트 정의 명령어</td><td>PORT, PASV</td></tr>
<tr><td>파일 전송 명령어</td><td>GET, PUT, MGET, MPUT, RETR, STOR, APPE, STOU, ALLO, REST, STAT</td></tr>
<tr><td>기타 명령어</td><td>HELP, NOOP, SITE, SYST</td></tr>
</table>
