<!-- PDF page: 037 -->

#### 바) DTD 개념 및 작성 절차

문서의 구조와 콘텐츠를 정의하여 XML문서의 구조를 명시적으로 선언하는 파일로 다음과 같은 선언 종류를 갖는다.

〈표 14〉 DTD의 선언 종류

| 정의 | 선언 | 예 |
| --- | --- | --- |
| 엘리먼트 타입선언 | – element type declaration | `<!ELEMENT element name~>` |
| 애트리뷰트 리스트 선언 | – attribute type declaration | `<!ATTLIST element name~>` |
| 엔티티 선언 | – entity declaration | `<!ENTITY ~>` |
| 표기선언 | – notation declaration<br>– 비xml 데이터처리: 이미지 등 | `<!NOTATION name~>` |

##### DTD 작성 절차

① 1단계: DTD선언 – DTD를 선언하는 과정 기술

```xml
<! DOCTYPE Root_Element[
   <! ELEMENT Root_Element(..)>
   <...>
   <...>
]>
```

```xml
<! DOCTYPE books[
   <! ELEMENT book(title, author))>
   <! ELEMENT title(#PCDATA))>
]>
```

② 2단계: 엘리먼트 타입 선언

| | |
| --- | --- |
| `<!ELEMENT element_name(con tent_model)>` | `<! ELEMENT books(book*)>` |

[참고] * 기호는 엘리먼트가 생략되거나 여러 번 나타날 수 있는 경우

③ 3단계: XML과 DTD의 결합

- DTD를 선언하고 정의하는 부분을 XML 내부 작성 혹은 외부 파일로 저장하여 처리하는 지를 결정
- 내부선언: XML문서 안에 DTD를 정의
- 외부선언: XML문서에는 DTD(Document Type Definition)부분 적용

#### 사) XML Schema 개념 및 특징, DTD와 비교

기존 DTD로는 어떤 정보의 데이터 형이나 범위를 제한하고 확장하는 기능이 없으며, DTD를 기술하는 문법은 XML을 기술하는 문법과 다름에 따라 DTD, XML모두 문법을 알아야 하는 단점이 있다. 그래서 DTD를 대체하기 위해 개발된, 문서를 좀 더 쉽게 처리할 수 있게 하는 데이터 형(Data Type)만들기를 제공하기 위해 XML Schema가 나오게 되었다.

데이터 형 지원: 기존 DTD보다 복잡한 타입 선언이 가능하고 새로운 데이터 형을 생성하여 사용할 수 있음

- 복잡구조정의 지원: 스키마 문서 안에 Schema location 지시자를 이용하여 또 다른 스키마 문서를 포함 할 수 있음
- Name Space를 지원: XML Schema는 Name Space를 지원함

* Namespace: XML 문서타입으로부터 엘리먼트들을 뽑아내어 다른 문서와 결합시킬 때, 여러 개의 문서를 동시에 처리하고 있을 때, 엘리먼트를 구별 할 수 있는 추상적인 존재

〈표 15〉 XML Schema와 DTD의 비교

| 구분 | XML Schema | DTD |
| --- | --- | --- |
| 작성문법 | XML 1.0을 만족 | EBNF + 의사 |
| 구조 | 복잡함 | 상대적으로 간결함 |
