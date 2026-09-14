<!-- PDF page: 071 -->

는 것이 대표적인 사례이다. PI는 제도 및 프로세스에 대한 개선을 수행하고 이를 통해 정보화계획을 수립한 후, ERP든
CRM이든 실행 수단으로서의 계획된 항목을 실현하는 시스템을 구축하는 단계로 전개된다.
```mermaid
flowchart TB
    A["PI<br>PI Focused Approach<br>제도/프로세스/인력관점 PI<br>Vision 및 전략분석<br>AS-IS 프로세스 분석<br>CSF, KPI 설정<br>To-Be 프로세스 설계"]
    B["ISP<br>4가지 관점의 ISP 수행<br>Strategy / Process / Organization / Technology<br>경영전략과 연계된 IT 전략수립<br>중/단기적인 정보시스템 계획수립<br>IT 아키텍처 Roadmap"]
    C["ERP<br>중장기 정보 전략<br>단계별 통합정보시스템 구축<br>Core 시스템 구축<br>확장 시스템 구축"]
    A -->|CSF 및 KPI 기반 전략 목표 달성 중심| B
    B -->|통합 정보시스템 구축을 위한 세부 실행계획| C
    A -->|To-Be프로세스| C
```

[그림 25] PI의 수행절차 사례

PI와 ERP의 관계를 보면 PI를 먼저 수행하여 제도/프로세스/인력 관점의 개선과 데이터와 프로세스의 통합을 위한 기반을
마련하고, 이어 통합 시스템을 구축하는 절차로 진행된다.
```mermaid
flowchart TB
    A[사업의 비전/미션 정립] --- B[관리제도개선 및 재설계]
    A --- C[프로세스 통합, 개선 및 재설계]
    A --- D[통합 정보시스템 구축]
    B --- C --- D
    B --- E[관리, 조직, 인력, 기업 문화 통합 및 강화]
    C --- E
    D --- E
    subgraph PI 영역
        B
        C
    end
    subgraph 시스템 구축 영역
        D
    end
```

[그림 26] PI와 ERP의 관계

PI를 통하여 IT 비즈니스 혁신은 2가지 측면에서 접근할 수 있는데, PI를 통해 ERP를 도입하는 방법이 있고, ERP를 통해
급진적인 PI를 실현하는 방법도 있다. 각 기업의 상황에 맞게 전략적으로 도입 계획과 방향을 수립하여야 한다.
