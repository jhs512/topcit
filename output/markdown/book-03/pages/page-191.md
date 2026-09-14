<!-- PDF page: 191 -->

| 구분 | 내용 |
|---|---|
| 검사합(checksum) | 검사합 크기는 CRC-32 검사합 사용이 가능하도록 32비트<br>(UDP, TCP, IP에서는 16비트 검사합 연산) |

제어정보와 사용자 데이터는 청크로 운반되며, Type, Flag, Length 3개 필드는 모든 청크에 공통이다. 정보필드는 청크의 유형을 나타내고, 유형필드는 청크의 256바이트까지 정의되지만, 일부만 정의되고 나머지는 미래 사용을 위해 유보되어 있다. 플래그 필드는 특별한 청크가 필요할 수 있는 특수한 플래그를 정의한다.

청크 유형(Chunk Type)에 따라서 데이터 청크에 제어 청크로 구분된다. 대표적인 청크 유형은 다음과 같다.

〈표 75〉 청크 유형

| ID값 | 청크 유형 | ID값 | 청크 유형 |
|---|---|---|---|
| 0 | 페이로드 데이터(DATA) | 6 | 중지(ABORT) |
| 1 | 초기화(INIT) | 7 | 셧다운(SHUTDOWN) |
| 2 | 초기화 응답(INIT ACK) | 8 | 셧다운 응답(SHUTDOWN ACK) |
| 3 | 선택적 응답(SACK) | 9 | 오퍼레이션 오류(ERROR) |
| 4 | 하트비트 요청(HEARTBEAT) | 10 | 상태 쿠키(COOKIE ECHO) |
| 5 | 하트비트 응답(HEARTBEAT ACK) | 11 | 쿠키 응답(COOKIE ACK) |

### 참고 및 추천 자료

[1] Information Sciences Institute, "Transmission Control Protocol: DARPA Internet Program Protocol Specification”, RFC

793, Sept. 1981.

[2] J. Postel, "User Datagram Protocol”, RFC 768, Aug, 1980.

[3] R Stewart, Ed., "Stream Control Transmission Protocol”, RFC 4960 Sept. 2007.

[4] J. Postel and J. Reynolds, "File Transfer Protocol (FTP)”, RFC 959, Oct. 1985.

[5] T. Ylonen and C. Lonvick, Ed, "The Secure Shell (SSH) Transport Layer Protocol”, RFC 4253, Jan. 2006.

[6] J. Postel and J. Reynolds, "Telnet Protocol Specification”, RFC 854, May 1983.

[7] J. Klensin, "Simple Mail Transfer Protocol”, RFC 5321, Oct. 2008. ㈜ RFC 821(Aug. 1982)을 RFC 2821(Apr. 2001)가

대체했으며, 이를 다시 RFC 5321이 대체함.

[8] P. Mockapetris, "Domain Names— Implementation and Specification”, RFC 1035, Nov. 1987.

[9] R Fielding, J. Gettys, J. Mogul, H. Frystyk, L Masinter, P. Leach and T. Berners—Lee. "Hypertext Transfer Protocol -

HTTP/1.1”, RFC 2616, June 1999.

[10] J. Myers and M. Rose, "Post Office Protocol- Version 3”, RFC 1939, May 1996.

[11] M. Crispin, "Internet Message Access Protocol-Version 4rev1”, RFC 3501, March 2003.

[12] D.L Mills, "Network Time Protocol (Version 3) Specification, Implementation and Analysis”, RFC 1305. March 1992

[13] D. Mills. U. Delaware and J. Martin. Ed., "Network Time Protocol Version 4: Protocol and Algorithms Specification”,

RFC 5905, June 2010.

[14] B. Croft and J. Gilmore, "Bootstrap Protocol (BOOTP)”, RFC 951, Sept. 1985.

[15] R Droms, "Dynamic Host Configuration Protocol”, RFC 2131, March 1997.

[16] K. Sollins. "The TFTP Protocol (Revision 2)”, RFC 1350, July 1992.

[17] C. Neuman, T. Yu, S. Hartman and K Raeburn, "The Kerberos Network Authentication Service (V5)”, RFC 4120,

July 2005
