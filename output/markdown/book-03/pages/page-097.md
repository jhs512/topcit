<!-- PDF page: 097 -->

정으로 일부 값들을 0으로 변환하게 된다. 부호화 과정은 양자화 후, 인코더 입력 전 지그재그 순서로 배열하며 반복 길이 부호화나 산술부호화를 이용하여 무손실 압축이 이루어진다 [1].

```mermaid
flowchart LR
 im[Image] --> t["Transformer<br>(Lossless)"] --> q["Quantizer<br>(Lossy)"] --> e["Encoder<br>(Lossless)"] --> bits[1010101010]
```

```mermaid
flowchart LR
 bits[1010101010] --> d[Decoder] --> q[Dequantizer] --> t[Inverse transformer] --> im[Image]
```

[그림 70] 이미지 데이터 변환 과정

비디오 데이터는 여러 개의 프레임으로 구성되며 각 프레임은 하나의 이미지이므로, 비디오 파일은 높은 전송속도를 요구한다. 비디오를 압축하는 방식에는 공간적 압축과 시간적 압축방식이 있다. 각 프레임의 공간적 압축은 JPEG로 이루어지고, 각 프레임은 독립적으로 압축된다. 시간적 압축은 중복 프레임을 제거하며, 시간적으로 데이터를 압축하기 위해 각 프레임을 독립적인 프레임인 I-프레임, 다른 I-프레임을 참조하는 B-프레임, P-프레임으로 구성한다.

아날로그 오디오 신호는 아날로그–디지털 변환기(ADC)를 이용하여 디지털화되며, 아날로그 디지털 변환기는 샘플링과 양자화라는 2가지 과정으로 구성된다.

##### ① 동영상 압축 표준

MPEG(Moving Picture Experts Group)은 국제표준화 단체로서의 공식 명칭은 ISO/IEC JTC1/SC29/WG11이다. MPEG은 다음과 같은 압축 포맷과 부가 표준을 만들었다.

〈표16〉 압축포맷과 부가표준

| 구분 | 주요특징 | 활용분야 |
| --- | --- | --- |
| MPEG-1 | 오디오 및 비디오 압축/복원 | MP3, 비디오CD |
| MPEG-2 | DTV 방송용 압축/복원 | 디지털 TV, DVD |
| MPEG-4 | 휴대폰 동영상 압축/복원 | IMT2000, 인터넷 방송 |
| AVC/H.264 | MPEG-2 대비 압축률 2배 | HDTV, 휴대폰 영상 |
| MPEG-V | 가상현실 미디어 표현 및 제어 | 4D 영화, 가상현실 |
| MPEG-DASH | 인터넷 기반 동영상 스트리밍 | 인터넷 영상 스트리밍 |
| MMT | MPEG-2 TS 전송 표준을 대체할 차세대 미디어 전송 표준 | UHDTV, 스마트 TV |
| HEVC/H.265 | AVC 대비 압축률 2배 향상 | UHDTV, 스마트 TV |
| 3D Audio | 기존 서라운드 오디오에 차원을 더한 기술 | UHDTV, 스마트 TV |

##### ② AVC(Advanced Video Coding)와 HEVC(High Efficiency Video Coding)

AVC 코덱은 국제표준화 기구인 ITU-T와 ISO에서 공동으로 제안한 비디오 압축기술로서 ITU-T에서 붙인 H.264라는 명칭 외에 ISO에서 붙인 MPEG4 Part10/AVC라는 명칭을 사용한다. HEVC은 ISO/IEC 표준 번호는 ISO/IEC 23008-2, ITU-T 표준 번호는 H.265이다.
