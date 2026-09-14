<!-- PDF page: 166 -->

```text
Dijkstra's Algorithm()
{
  // Initialization
  Tree = {root}              //Tree is made only of the root
  for (y=1 to N)             // N is the number of nodes
  {
    if (y is the root)
      D[y] = 0               // D[y] is shortest distance from root to node y
    else if (y is a neighbor)
      D[y] = c[root][y]       // c[x][y] is cost between nodes x and y in LSDB
    else
      D[y] = ∞
  }
  // Calculation
  repeat
  {
    find a node w, with D[w]
    Tree = Tree U {w}        // Add w to tree
    // Update distances for all neighbors of w
    for (every node x, which is a neighbor of w and not in the Tree)
    {
      D[x] = min{D[x], (D[w] + c[w][x]}
    }
  } until (all nodes included in the Tree)
} //End of Dijkstra
```

[그림 116] Dijkstra’s Algorithm의 Pseudo-code

##### ② 벨만포드 알고리즘(Dijkstra Algorithm)

거리 벡터 라우팅 방식 알고리즘 중에서는 벨만포드 알고리즘이 대표적이다.

최단경로 문제의 optimal substructure를 확장하면 최단경로를 다음과 같이 분해(decompostion)할 수 있다. 시작노드 s에서 v에 이르는 최단경로는 s에서 u까지의 최단경로에 u에서 v 사이의 가중치(거리)를 더한 값이다.

**D(s, v) = D(s, u) + w(u, v)**

벨만포드 알고리즘은 s, u 사이의 최단경로를 구할 때 그래프 내 모든 엣지에 대해 edge relaxation을 수행한다. 그러면 이를 몇 번 수행해야 할까? 생각해 보면 s, u 사이의 최단경로는 s와 u뿐일 수 있고, u를 제외한 그래프의 모든 노드(|V|-1개)가 s,u 사이의 최단경로를 구성할 수도 있다. 따라서 벨만포드 알고리즘은 모든 엣지에 대한 edge-relaxation을 |V|-1회 수행한다.
