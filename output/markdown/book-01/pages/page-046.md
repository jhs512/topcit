<!-- PDF page: 046 -->

##### ③ 내부 정렬 알고리즘의 수행시간 비교

〈표 16〉 내부 정렬 알고리즘의 수행시간 비교

<table>
<thead><tr><th rowspan="2">정렬방법</th><th rowspan="2">설명</th><th colspan="3">수행시간</th><th rowspan="2">추가 메모리</th></tr>
<tr><th>최악</th><th>평균</th><th>최선</th></tr></thead>
<tbody>
<tr><td>삽입정렬</td><td>- 데이터가 정렬되어 있다고 가정하고 값을 해당 위치에 삽입하여 정렬하는 방법</td><td>O(n²)</td><td>O(n²)</td><td>O(n)</td><td>없음</td></tr>
<tr><td>쉘정렬</td><td>- 주어진 자료 리스트를 특정 매개변수 값의 길이를 갖는 부파일(subfile)로 쪼개서, 각 부파일에서 삽입정렬을 수행</td><td>O(nlog<sub>2</sub>n)</td><td>O(n<sup>1.5</sup>)</td><td>O(n)</td><td>없음</td></tr>
<tr><td>선택정렬</td><td>- 최소값을 찾아 왼쪽으로 이동시키는데 데이터의 크기(개수)만큼 반복하여 정렬하는 방법</td><td>O(n²)</td><td>O(n²)</td><td>O(n²)</td><td>없음</td></tr>
<tr><td>퀵정렬</td><td>- 분할 정복(Divide and Conquer)의 방식으로 고안된 정렬 방법으로 먼저 임의의 기준을 선택하여 그 기준보다 작은 값을 왼쪽에, 큰 값을 오른쪽에 위치시킨 후 다시 임의의 기준을 선택하여 왼쪽과 오른쪽을 반복하여 나누어 가며 정렬하는 방법<br>- 재귀호출(recursive call)을 사용</td><td>O(n²)</td><td>O(nlogn)</td><td>O(nlogn)</td><td>없음</td></tr>
<tr><td>버블정렬</td><td>- 인접한 데이터 간에 교환이 계속해서 일어나면서 정렬이 이루어지는 방법</td><td>O(n²)</td><td>O(n²)</td><td>O(n²)</td><td>없음</td></tr>
<tr><td>힙정렬</td><td>- 최대 힙 트리나 최소 힙 트리를 구성해 정렬을 하는 방법</td><td>O(nlogn)</td><td>O(nlogn)</td><td>O(nlogn)</td><td>없음</td></tr>
<tr><td>머지정렬</td><td>- 분할정복방법을 사용하는데 데이터의 크기를 반으로 계속 나누고 이를 정렬하면서 다시 합치는 방법</td><td>O(nlogn)</td><td>O(nlogn)</td><td>O(nlogn)</td><td>있음</td></tr>
<tr><td>기수정렬</td><td>- 데이터의 낮은 자리 수부터 비교하여 정렬해 가는 방법</td><td>O(dn)</td><td>O(dn)</td><td>O(dn)</td><td>있음</td></tr>
</tbody>
</table>
