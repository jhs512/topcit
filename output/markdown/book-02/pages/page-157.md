<!-- PDF page: 157 -->

| 특징 | 설명 |
| --- | --- |
| CNN | • Convolutional Neural Networks<br>• 생물의 시신경이 동작하는 원리를 이용하여 이미지데이터의 처리에 적합한 구조로 만들어진 신경망 알고리즘<br>• Convolution layer→Pooling layer→Convolution layer→Pooling layer→Feed forward layer 로 이루어져 있음<br>Input, Feature maps, f.maps, f.maps, Output<br>Convolution, Subsampling, Convolutions, Subsampling, Fully connected<br><!-- 생략: 표 86 CNN / 이미지와 입체적인 신경망 공간 배치 --> |
| RNN | • Recurrent Neural Network<br>• 인공신경망을 구성하는 유닛 사이의 연결이 Directed Cycle을 구성하는 신경망<br>• 하나의 입력값을 넣으면 여러 개의 값이 나오는 관계를 만드는 알고리즘<br>• 과거의 신경망(T-1)과 현재의 신경망(T)을 연결해 주는 역할을 수행하며, 기존 인공 신경망의 학습 알고리즘인 오류역전파(Error back-propagation)를 확장한 BPTT(Back-Propagation Through Time)라는 알고리즘을 통해 학습<br>D, D, D<br><!-- 생략: 표 86 RNN / 원문의 반복 연결선 공간 배치 --> |
| DBN | • 기계학습에서 사용되는 그래프 생성 모형(generative graphical model)<br>• 잠재 변수(latent variable)의 다중계층으로 이루어진 심층 신경망<br>• 볼츠만 머신의 일종인 Restricted Boltzmann Machine(RBM)을 층층이 쌓아 학습하는 deep learning 기법<br>• visible layer와 hidden layer이 따로 존재하는 RBM을 층층이 쌓아 학습하는 구조임<br>Hidden layer 3 (Top layer), Hidden layer 2, Hidden layer 1, Visible layer<br>W₃ᵀ, W₃, W₂ᵀ, W₂, W₁ᵀ, W₁<br><!-- 생략: 표 86 DBN / 전체 연결선의 공간 배치 --> |
