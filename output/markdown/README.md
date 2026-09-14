# TOPCIT 교재 서재

[교재 선택](index.html) · [IT 비즈니스와 윤리 읽기](reader.html?book=05) · [원문 대조 기록](AUDIT.md)

여섯 권 중 변환·검수한 교재를 공통 HTML 뷰어에서 읽는다. 현재는 IT 비즈니스와 윤리 한 권을 제공한다. 나머지 다섯 권은 아직 Markdown 변환·검수를 완료하지 않았으며 준비 상태로 표시한다.

## 공통 기능

- 장·절·항목 목차와 현재 위치 표시
- 본문 검색과 PDF 페이지 번호 이동
- HTML 병합 표와 Mermaid 도식 확대
- 글자 크기, 밝은/어두운 화면, 모바일 목차
- 교재별 읽던 위치 저장

## 교재 추가

교재 목록은 `books.mjs`, 읽기 화면은 `reader.html`과 `reader.mjs`가 담당한다. 새 교재는 페이지별 전사를 마치고 원문과 대조한 뒤 합본을 생성한다. 해당 항목의 `source`, `startPage`, `pages`를 지정하고 `status`를 `ready`로 바꾸면 같은 뷰어에 연결된다. 준비되지 않은 교재를 읽기 가능으로 표시하지 않는다.

합본은 `<!-- PDF page: 001 -->`부터 마지막 페이지까지 정확한 순서로 포함해야 한다. 뷰어와 `tests/reader-catalog.test.mjs`에서 페이지 순서를 검사한다. 기존 `index.html#page-...` 링크는 05번 교재로 연결된다.

목차와 본문은 Markdown에서 생성하며 별도로 편집하지 않는다. 05번 교재의 편집 원본은 `pages/page-001.md`부터 `page-213.md`이며 `merge-pages.py`로 합본을 재생성한다.
