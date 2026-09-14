<!-- PDF page: 101 -->

```java
//라이브러리 import
import org.apache.commons.vfs2.FileObject;
import org.apache.commons.vfs2.FileSystemOptions;
import org.apache.commons.vfs2.Selectors;
import org.apache.commons.vfs2.impl.StandardFileSystemManager;
import org.apache.commons.vfs2.provider.sftp.SftpFileSystemConfigBuilder;
//FTP 접속 및 파일 다운로드
  StandardFileSystemManager manager = new StandardFileSystemManager();
  String sftpUri = "sftp://" + userId + ":" + password + "@" + serverAddress + "/" +
    remoteDirectory + fileToFTP;

FileObject localFile = manager.resolveFile(file.getAbsolutePath());
  FileObject remoteFile = manager.resolveFile(sftpUri, opts);
  remoteFile.copyFrom(localFile, Selectors.SELECT_SELF);
```

• C를 이용한 SFTP 적용 방법

C를 이용하여 SFTP 클라이언트 프로그램 작성을 위하여 SFTP 오픈소스 라이브러리를 사용하는데, libssh2 사이트(http://www.libssh2.org)에서 Libssh2 라이브러리를 다운로드 하여 설치하고 다음과 같이 SFTP 클라이언트 프로그램을 작성한다.

```c
//라이브러리 include
#include "libssh2_config.h"
#include <libssh2.h>
#include <libssh2_sftp.h>
//FTP 접속 및 파일 다운로드
session = libssh2_session_init();
libssh2_userauth_password(session, username, password);
libssh2_sftp_open(sftp_session, sftppath, LIBSSH2_FXF_READ, 0);
libssh2_sftp_read(sftp_handle, mem, sizeof(mem));
```
