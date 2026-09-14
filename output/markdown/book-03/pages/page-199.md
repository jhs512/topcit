<!-- PDF page: 199 -->

**Passive FTP 모드 동작**

<!-- 원본 Passive FTP 연결도는 포트·메시지·방향 텍스트로 전사. 서버의 새 포트는 도형에서 3267, OK 메시지에서 32567로 서로 다르게 인쇄되어 그대로 보존. -->

| 방향 | 원문 메시지 |
|---|---|
| FTP Client 5150 → FTP Server 21 COMMAND | ① PASV |
| FTP Server 21 → FTP Client 5150 | ② OK 32567 |
| FTP Client 5151 → FTP Server 3267 | ③ DATA CHANNEL |
| FTP Server 3267 → FTP Client 5151 | ④ OK |

FTP Server: 20 DATA, 21 COMMAND. FTP Client: 5150, 5151.

1) 클라이언트가 command 포트로 접속을 시도한다.

2) 서버에서는 서버가 사용할 두 번째 포트를 알려준다.

3) 클라이언트는 다른 포트를 열어 서버가 알려준 이 포트로 접속을 시도한다.

4) 서버는 ack로 응답한다.

### 참고 및 추천 자료

[1] J. Postel and J. Reynolds. "File Transfer Protocol (FTP)”, RFC 959, Oct. 1985.

[2] J. Postel and J. Reynolds, "Telnet Protocol Specification”, RFC 854, May 1983.

[3] J. Klensin, "Simple Mail Transfer Protocol”, RFC 5321, Oct. 2008. ㈜ RFC 821(Aug. 1982)을 RFC 2821(Apr. 2001)가

대체했으며, 이를 다시 RFC 5321이 대체함.

[4] J. Myers and M. Rose, "Post Office Protocol-Version 3”, RFC 1939, May 1996.

[5] M. Crispin, "Internet Message Access Protocol—Version 4rev1”, RFC 3501, March 2003.

[6] P. Mockapetris, "Domain Names—Implementation and Specification”, RFC 1035, Nov. 1987.

[7] D. Harrington, R Presuhn and B. Wijnen, "An Architecture for Describing Simple Network Management Protocol

(SNMP) Management Frameworks”, RFC 3411, Dec. 2002.

[8] R Fielding, J. Gettys, J. Mogul, H. Frystyk L Masinter, P. Leach and T. Berners—Lee, "Hypertext Transfer Protocol—

HTTP/1.1”, RFC 2616, June 1999.

[9] Apache Commons Net - Overview, https://commons.apache.org/proper/commons—net/.

[10] Apache License, Version 2.0, http://www.apache.org/licenses/LICENSE-2.0.
