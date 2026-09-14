<!-- PDF page: 100 -->

〈표 35> 데몬 서비스와 점검 포트 목록

<table>
<tr><td>구분</td><td>세부항목</td></tr>
<tr><td>Echo(7)</td><td>수신된 메시지를 단순히 재전송</td></tr>
<tr><td>Ehargen(19)</td><td>임의 길이의 문자열을 반환하는 서비스</td></tr>
<tr><td>Finger(79)</td><td>사용자 정보를 출력</td></tr>
<tr><td>Nntp(119)</td><td>NNTP(Network News Transfer Protocol) 인터넷상에 토론 그룹을 생성할 수 있는 표준 서비스</td></tr>
<tr><td>Netbios-Dgm(138)</td><td>NetBIOS Datagram서비스, 호스트, 그룹, 또는 전체로 브로드캐스팅하는데 사용</td></tr>
<tr><td>Ldap(389)</td><td>디렉토리 서비스 엑세스를 위한 서비스</td></tr>
<tr><td>Ntalk(518)</td><td>서로 다른 시스템간에 채팅을 가능하게 하는 서비스</td></tr>
<tr><td>Ldaps(636)</td><td>LDAP over SSL</td></tr>
<tr><td>Nfsd(2049)—NFS</td><td>미사용 시 NFS 서버 데몬 서비스</td></tr>
<tr><td>Discard(9)</td><td>수신되는 임의 사용자의 데이터를 폐기하는 서비스</td></tr>
<tr><td>Time(37)</td><td>Rdate 데몬에 의해 사용되는 RFC 868 시간 서버의 TCP 버전</td></tr>
<tr><td>Sftp(115)</td><td>Ftp over SSH</td></tr>
<tr><td>Ntp(123)</td><td>ntp(Network Time Protocol)는 클라이언트와 서버의 시간을 동기화 시킴</td></tr>
<tr><td>Netbios_Ssn(139)</td><td>NetBIOS Session 서비스, 네트워크 공유 등을 이용한 실제 데이터를 송수신 하는데 사용 됨</td></tr>
<tr><td>Printer(515)</td><td>원격 프린터에서 스풀링 하는데 사용</td></tr>
<tr><td>Uucp(540)</td><td>다른 유닉스 시스템들 간에 파일을 복사하고, 다른 시스템상에서 실행될 명령어들을 보냄</td></tr>
<tr><td>Ingreslock(1524)</td><td>Ingre 데이터베이스 Lock 서비스</td></tr>
<tr><td>Dtspcd(6112)</td><td>데스크탑 하위 프로세스 제어 데몬 서비스</td></tr>
<tr><td>Daytime(13)</td><td>Daytime은 클라이언트의 질의에 응답하여 아스키 형태로 현재 시간과 날짜를 출력하는 데몬</td></tr>
<tr><td>Tftp(69)</td><td>파일 전송을 위한 프로토콜</td></tr>
<tr><td>Uucp—path(117)</td><td>Uucp path 서비스</td></tr>
<tr><td>Netbios_ns(137)</td><td>NetBIOS name 서비스, 네트워크상에 자원을 식별하기 위해 사용</td></tr>
<tr><td>Bftp(152)</td><td>Binary File Transfer Protocol</td></tr>
<tr><td>Talk(517)</td><td>사용자가 시스템에 원격으로 연결하여 다른 시스템에 로그인하고 있는 사용자와 대화 세션을 시작 할수 있음</td></tr>
<tr><td>Pcserver(600)</td><td>ECD Integrated PC board srvr, RPC 관련공격에 사용됨</td></tr>
</table>

② 익명(Anonymous) FTP 사용 제한 및 Secure FTP 사용

Anonymous FTP를 사용할 경우 악의적인 사용자가 시스템에 관한 정보를 획득할 수 있으며 디렉터리에 쓰기 권한이 설정되어 있을 경우 다양한 공격이 가능하므로 반드시 필요한 사용자만 접속을 할 수 있도록 설정하여 Anonymous FTP 사용을 제한하고, 보안이 취약한 FTP 보다 Secure FTP를 사용하여야 한다.

Anonymous FTP를 사용하거나 계정을 설정하여 일반 FTP를 사용하는 경우, 사용자 인증 정보에 대한 암호화가 이루어지지 않고 평문으로 전송되는 취약점과 FTP 프로토콜 자체의 특성에 따른 보안 취약점이 존재한다. 즉, FTP 는 계정 로그인
의 인증 취약점을 악용한 무작위 전수공격(Brute force) 공격이나 스니핑(Sniffing) 공격 등에 의한 계정 권한 취득이 가능하다. 따라서 파일 송수신을 위하여 FTP 프로그램을 작성할 경우, FTP서버는 SFTP서버를 설치하고, FTP 클라이언트 프로그램도 SFTP를 이용하여 프로그램을 작성한다.

• Java를 이용한 SFTP 적용 방법
Java를 이용하여 SFTP 클라이언트 프로그램 작성을 위하여 SFTP 오픈소스 라이브러리를 사용하는데, Apache 오프소스 프로젝트 사이트(http://commons.apache.org/proper/commons-net/) 에서 Commons—Net 라이브러리를 다운로드 하여 설치하고 다음과 같이 SFTP 클라이언트 프로그램을 작성한다.
