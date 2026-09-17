# 📐 AI & 现代数学前沿理论知识图谱 (N01 - N23) 全景学习门户

> 从高维代数与连续微积分底座，到生成式 AI 概率流形、大模型数学建模，再到复杂系统 Scaling Laws 圣杯法则的全景式数学与前沿理论导航。

![Version](https://img.shields.io/badge/Version-2.0.0-indigo.svg)
![Nodes](https://img.shields.io/badge/Knowledge_Nodes-N01_~_N23-blue.svg)
![Interactive](https://img.shields.io/badge/Canvas_DAG-Interactive-emerald.svg)
![LaTeX](https://img.shields.io/badge/Math-KaTeX-rose.svg)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Online_Live-brightgreen.svg)](https://xiaozhengcang.github.io/math/)

🌐 **GitHub Pages 离线/在线在线预览**：[https://xiaozhengcang.github.io/math/](https://xiaozhengcang.github.io/math/)

---

## 🌟 项目简介

本项目旨在为 AGI 时代的 AI 开发者、算法工程师与数学研究者构建一套**结构严密、通俗易懂且图文/代码并茂的“AI 现代数学知识体系全景门户”**。

根据最新的标准化学习规划，知识体系重构为 **4 大支柱模块 · 13 门核心学科**：

1. **🏛️ 模块一：基础数学支柱 (Foundations of Mathematics, 4 门)**
   - **D01** 微积分 & 精细数学分析 (Calculus & Mathematical Analysis)
   - **D02** 线性代数 & 矩阵分析 (Linear Algebra & Matrix Analysis)
   - **D03** 概率论与数理统计 (Probability & Mathematical Statistics)
   - **D04** 优化理论与凸分析 (Optimization Theory & Convex Optimization)

2. **🌊 模块二：分析、测度与动力系统 (Analysis, Measure & Dynamical Systems, 5 门)**
   - **D05** 测度论 & 实变函数基础 (Measure Theory & Real Analysis)
   - **D06** 泛函分析基础 (Functional Analysis)
   - **D07** 偏微分方程 (PDE 与物理信息神经网络 PINN)
   - **D08** 随机过程 (Stochastic Processes & 马尔可夫决策过程)
   - **D09** 随机分析 (Stochastic Calculus & 伊藤积分/SDE)

3. **📊 模块三：信息、时序与统计学习界 (Information, Time Series & Learning Theory, 3 门)**
   - **D10** 信息论 (Information Theory & 信息瓶颈)
   - **D11** 时间序列分析 (Time Series Analysis & 状态空间模型 SSM)
   - **D12** 高维概率与经验过程/统计学习 (High-Dimensional Probability & Statistical Learning Theory)

4. **🚀 模块四：现代 AI 前沿交叉专题 (Frontier Topics & Modern AI, 1 门大专题)**
   - **D13** 现代 AI 前沿理论集锦（李代数几何 ML、随机矩阵 RMT、连续生成流模型、大模型数学建模、慢思考推理搜索、强化学习与偏好对齐、过参数化泛化双下降、复杂系统 Scaling Laws）

---

## 🗺️ 13 大核心学科规划与映射导航表

| 学科编号 | 学科名称 | 归属模块 | 核心数学概念与工具 | 典型 AI 算法应用 | 推荐经典教材与文献 | 教程与资源直达 |
|---|---|---|---|---|---|---|
| **D01** | 微积分 & 精细数学分析 | 模块 1：基础数学支柱 | 多元微积分、Taylor 级数、链式法则、隐函数定理、梯度/Hessian、极值充分条件、外微分与微分形式 | 自动微分 (Autodiff/反向传播)、反向模式 AD、牛顿法/拟牛顿法、神经 ODE 流形、损失曲面局部曲率分析 | 同济《高等数学》第八版 / Rudin《数学分析原理》 | [`N02_MultivariableCalculus/`](N02_MultivariableCalculus/index.html) |
| **D02** | 线性代数 & 矩阵分析 | 模块 1：基础数学支柱 | 向量空间、内积/范数、矩阵四子空间、特征分解、SVD 奇异值分解、伪逆、Rayleigh 商、Perron-Frobenius 定理 | LoRA 低秩微调 (矩阵秩亏分解)、Transformer 注意力投影、PCA 降维、谱聚类、PageRank、隐空间嵌入投影 | 同济《工程数学 线性代数》第七版 / Strang《线性代数导论》 | [`N01_LinearAlgebraTutorial/`](N01_LinearAlgebraTutorial/index.html) |
| **D03** | 概率论与数理统计 | 模块 1：基础数学支柱 | 条件概率、Bayes 公式、独立性、大数定律、中心极限定理、最大似然估计 MLE、MAP 最大后验、假设检验、指数族分布 | 交叉熵损失函数推导、变分自编码器 VAE 隐变量推断、Softmax 温度采样、大模型拒绝采样、贝叶斯先验 | 同济《概率论与数理统计》 / Bertsekas《概率导论》 | [`N03_ProbabilityAndStatistics/`](N03_ProbabilityAndStatistics/index.html) |
| **D04** | 优化理论与凸分析 | 模块 1：基础数学支柱 | 凸集与凸函数、Jensen 不等式、KKT 最优性条件、Lagrange 对偶理论、次梯度、近端算子 Proximal、Lipschitz 连续性 | 梯度下降 GD/SGD、Momentum 动量法、Adam 自适应优化器、束缚优化投影梯度法、流形约束优化 | Boyd《Convex Optimization》 / Nocedal《Numerical Optimization》 | [`N07_ConvexOptimization/`](N07_ConvexOptimization/index.html) |
| **D05** | 测度论 & 实变函数基础 | 模块 2：分析与动力系统 | σ-代数、Lebesgue 测度与积分、控制收敛定理、Radon-Nikodym 导数、乘积测度与 Fubini 定理、概率测度空间 | 严格连续分布积分、连续概率流生成模型连续性方程、Wasserstein 距离弱拓扑支撑、测度变换似然推导 | Royden《Real Analysis》 / 严加安《测度论与概率论基础》 | [`N08_MeasureTheoryHighDimProb/`](N08_MeasureTheoryHighDimProb/index.html) |
| **D06** | 泛函分析基础 | 模块 2：分析与动力系统 | Hilbert 空间、Banach 空间、有界线性算子、对偶空间、Riesz 表示定理、Hahn-Banach 定理、紧算子谱分解、Sobolev 空间 | 核方法 RKHS (支持向量机)、通用逼近定理 UAT、连续深度网络函数空间逼近、神经算子 FNO/DeepONet | Kreyszig《Introductory Functional Analysis》 / 汪林《泛函分析导引》 | [`N06_FunctionalAnalysis/`](N06_FunctionalAnalysis/index.html) |
| **D07** | 偏微分方程 PDE | 模块 2：分析与动力系统 | 扩散方程/热传导方程、波方程、Poisson/Laplace 方程、有限差分法 FDM、变分形式与弱解、Green 函数 | 物理信息神经网络 PINN (Loss 中内嵌微分算子残差)、神经偏微分方程求解器、热核扩散模型反向过程 | Evans《Partial Differential Equations》 / 姜礼尚《偏微分方程》 | [`D07_PartialDifferentialEquations/`](D07_PartialDifferentialEquations/index.html) |
| **D08** | 随机过程 | 模块 2：分析与动力系统 | Markov 链、转移概率矩阵、遍历性与平稳分布、Poisson 过程、Brown 运动 (Wiener 过程)、鞅论 Martingale | MCMC 马尔可夫链蒙特卡洛采样、强化学习马尔可夫决策过程 MDP、扩散模型前向加噪 Brown 漂移模拟 | Ross《Stochastic Processes》 / 何声武《随机过程导论》 | [`D08_StochasticProcesses/`](D08_StochasticProcesses/index.html) |
| **D09** | 随机分析 (伊藤微积分) | 模块 2：分析与动力系统 | Itô 积分、Itô 引理 (微分法则)、随机微分方程 SDE、Fokker-Planck (Kolmogorov 前向) 方程、Girsanov 定理 | 评分扩散模型 (Score-based SDE / Song et al.)、随机梯度朗之万动力学 SGLD、连续时间生成扩散逆过程 | Øksendal《Stochastic Differential Equations》 | [`N14_StochasticDynamicsSDE/`](N14_StochasticDynamicsSDE/index.html) |
| **D10** | 信息论 | 模块 3：信息与学习界 | Shannon 熵、联合熵/条件熵、互信息、KL 散度 (相对熵)、交叉熵、最大熵原理、数据处理不等式 DPI | 自监督对比学习 (InfoNCE 目标下界)、信息瓶颈理论 (IB 解释泛化与表征压缩)、强化学习熵正则项 (SAC) | Cover & Thomas《Elements of Information Theory》 | [`N04_InformationTheory/`](N04_InformationTheory/index.html) |
| **D11** | 时间序列分析 | 模块 3：信息与学习界 | ARMA/ARIMA 模型、谱分析与傅里叶变换、平稳性检验、状态空间模型 SSM、Kalman 滤波 | 现代线性状态空间架构 (S4, Mamba 循环扫描)、时间序列自回归预测、RNN 隐状态递推、卡尔曼自适应滤波 | Brockwell & Davis《Time Series》 / Gu et al. (Mamba) | [`N16_SequenceModelsSSM/`](N16_SequenceModelsSSM/index.html) |
| **D12** | 高维概率与统计学习界 | 模块 3：信息与学习界 | 集中不等式 (Chernoff / Hoeffding / McDiarmid)、亚高斯/亚指数变量、VC 维、Rademacher 复杂度、一致收敛界、经验过程 | 机器学习泛化误差界、过参数化模型隐式正则化分析、高维特征投影集中性证明、对抗攻击样本存在性分析 | Wainwright《High-Dimensional Statistics》 / Shalev-Shwartz | [`N09_StatisticalLearningTheory/`](N09_StatisticalLearningTheory/index.html) |
| **D13** | 现代 AI 前沿交叉专题 | 模块 4：前沿交叉专题 | 李群李代数、最优传输 (Wasserstein / Sinkhorn)、随机矩阵理论 RMT、变分推断、神经切线核 NTK、重正化群 | 流匹配 Flow Matching、几何等变神经网络 (EGNN/AlphaFold)、大模型数学建模、慢思考 MCTS/PRM 搜索、RLHF/DPO、Scaling Laws 幂律涌现 | 顶会经典论文集 / Peyré & Cuturi / Kaplan et al. | [`FrontierTopics/`](FrontierTopics/index.html) |

---

## 📂 精简规范的目录结构

```text
Math/
├── index.html                           # 全景门户主页面 (DAG 画布 + 4大模块13学科卡片 + 数字化教材文库 + 实验台)
├── nodes_data.js                        # 13 学科全量大纲与 23 节点拓扑元数据库 (含教材联动与路径规范)
├── app.js                               # 响应式渲染引擎：13 学科卡片、打卡持久化、Canvas DAG 脉冲交互与实时搜索
├── style.css                            # Modern Web Design 全套深色玻璃态 CSS 规范与响应式栅格
├── FrontierTopics/                      # 模块 4 现代 AI 前沿交叉专题总览门户
│   ├── index.html                       # 13 大前沿专题总览导航 (李代数、生成流、LLM数学、慢思考搜索、对齐、Scaling)
│   ├── N05_GraphTheory/                 # 图论与计算图分析
│   ├── N10_GameTheoryVariationalInequalities/ # 博弈论与变分不等式
│   ├── N11_OptimalTransport/            # 最优传输理论 (Wasserstein 距离与 Sinkhorn 算法)
│   ├── N12_DeepNeuralNetDynamics/       # 深度网络动力学与 NTK 神经切线核
│   ├── N13_GeometricDeepLearning/       # 几何深度学习与代数拓扑 (EGNN 与李群等变)
│   ├── N15_ContinuousGenerativeModels/  # 连续生成模型 (扩散模型与 Flow Matching)
│   ├── N17_RepresentationLearningInformationBottleneck/ # 表征学习与信息瓶颈理论
│   ├── N18_LLMMathModeling/             # 大语言模型数学建模 (Transformer 机理与上下文学习)
│   ├── N19_ReasoningSearchTestTimeCompute/ # 慢思考推理搜索与测试时计算 (PRM 与 MCTS)
│   ├── N20_ReinforcementLearningAlignment/ # 强化学习与偏好对齐 (PPO, DPO 与 Nash 均衡)
│   ├── N21_OverparameterizedGeneralization/ # 过参数化泛化理论与双下降现象
│   ├── N22_StatisticalPhysicsML/        # 机器学习统计物理 (自旋玻璃与重正化群)
│   └── N23_ComplexSystemsScalingLaws/   # 复杂系统 Scaling Laws 与 AGI 幂律涌现
├── D07_PartialDifferentialEquations/    # D07 偏微分方程专属教程 (热方程/Black-Scholes、FDM、PINN)
├── D08_StochasticProcesses/             # D08 随机过程专属教程 (马尔可夫链、Brown运动、鞅、MDP)
├── N01_LinearAlgebraTutorial/           # D02 线性代数专属教程 (严格保留原目录，8大章节完整直觉教程)
├── N02_MultivariableCalculus/           # D01 微积分专属教程
├── N03_ProbabilityAndStatistics/        # D03 概率论专属教程
├── N04_InformationTheory/               # D10 信息论专属教程
├── N06_FunctionalAnalysis/              # D06 泛函分析专属教程
├── N07_ConvexOptimization/              # D04 优化理论专属教程
├── N08_MeasureTheoryHighDimProb/        # D05 测度论专属教程
├── N09_StatisticalLearningTheory/       # D12 高维概率与统计学习专属教程
├── N14_StochasticDynamicsSDE/           # D09 随机分析专属教程
├── N16_SequenceModelsSSM/               # D11 时间序列分析专属教程
├── TextBook-Advanced Mathematics/       # 经典教材: 同济《高等数学》(第八版 上下册 796页数字化重构)
├── TextBook-MathAnalysis/               # 经典教材: 复旦《数学分析》(陈纪修 第三版 数字化精校重构)
├── TextBook-LinearAlgebra/              # 经典教材: 同济《工程数学 线性代数》(第七版 数字化重构)
├── TextBook-Probobility and Statistics/ # 经典教材: 同济《概率论与数理统计》(纯文本数字化重构)
├── algebra1.html                        # 实战交互: 向量与矩阵运算底座
├── week2_geometric_projection.html      # 实战交互: 正交投影与法方程
├── attention.html                       # 实战交互: Attention (QKV) 矩阵运算几何本质
├── plane_translation.html               # 实战交互: 2D/3D 平面变换与梯度几何
└── References/                          # 参考讲义与文献


---

## 🚀 如何运行与学习指南

### 1. 本地直接打开
直接双击根目录下的 `index.html` 即可在现代浏览器（Chrome / Edge / Firefox / Safari）中直接运行！

### 2. 使用 HTTP 本地服务器（推荐）
对于更好的字体与 Canvas 跨域体验，可运行简单的本地 HTTP 服务：

```bash
# 使用 Python 快速搭建
python -m http.server 8000

# 或使用 Node.js serve
npx serve .
```

访问 `http://localhost:8000` 即可进入主门户。

---

## 📖 版权与致谢

- 课程与讲义资料归属原作者及出版商（包括 Prof. Gilbert Strang, Prof. Stephen Boyd, Prof. Hung-yi Lee 等）。
- 项目前端基于 HTML5 / Vanilla CSS / Modern JS 原生打造，公式采用 KaTeX 快速异步渲染。
