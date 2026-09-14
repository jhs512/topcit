<!-- PDF page: 078 -->

• 코딩기법

컴포넌트에 대한 접근권한을 외부에 제공하지 않는 것이 바람직하다.

〈표 25〉 코드 사례

안전하지 않은 코드

```xml
<manifest xmlns:...>
<application android:icon="@drawable/icon" android:label="@string/label">
  <service android:name=".syncadapter.SyncService" android:exported="true">
...
</application>
</manifest>
```

SyncService 서비스의 속성값이 android:exported="true"로 설정되어 있어 외부에서 해당 컴포넌트를 구동시킴으로써 보안상의 취약점이 발생할 수 있다.

안전한 코드

```xml
<manifest xmlns:...>
<application android:icon="@drawable/icon" android:label="@string/label">
  <service android:name=".syncadapter.SyncService" android:exported="false">
...
</application>
</manifest>
```

Android:exported 속성을 “false”로 설정하거나 설정을 제거하면 해당 속성이 “false”가 되어 외부로부터 차단된다.

② 공유 아이디에 의한 접근통제 통과 공격 대응을 위한 시큐어 코딩 기법

• 공격개요

Manifest.xml 파일의 manifest 태그에 android:sharedUserId 속성을 설정할 경우 같은 아이디와 서명을 사용함으로써 다른 응용프로그램이 해당 프로그램의 정보에 접근할 수 있게 된다. 이를 통해 의도적 및 비의도적으로 해당 프로그램의 무결성과 보안성이 침해 될 수 있다.

• 코딩기법

공유 아이디 설정을 하지 않는 것이 바람직하다.

〈표 26〉 코드 사례

안전하지 않은 코드

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
Package="com.example.android.apis"
android:versionCode="1"
android:versionName="1.0"
android:sharedUserId="android.uid.developer1">
```

Manifest.xml 파일의 manifest 태그에 android:sharedUserId 속성을 설정하고 있어 같은 shareduserId 태그값과 응용프로그램 서명을 가진 다른 응용프로그램이 이 프로그램의 모든 데이터에 접근할 수 있다.

안전한 코드

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
Package="com.example.android.apis"
android:versionCode="1"
android:versionName="1.0">
<!-- android:sharedUserId="android.uid.developer1" 삭제한다 -->
```

Manifest.xml 파일의 manifest 태그에 android:sharedUserId 속성을 설정하지 않아, 아이디 공유로 인한 데이터 유출이나 부적절한 접근 위험을 방지한다.
