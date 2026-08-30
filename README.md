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

整体体系包含 **N01 至 N23 共 23 个核心知识节点**，划分为 5 大递进层级：
1. **Level 0: 先修基础** (N01 ~ N05) —— 高维线性代数、多元微积分、概率统计、信息论与图论。
2. **Level 1: 核心工具** (N06 ~ N11) —— 泛函逼近论、连续凸优化、高维概率测度、统计学习理论、博弈论与最优传输。
3. **Level 2: 模型与几何** (N12 ~ N17) —— 深度网络动力学、几何深度学习、随机动力学 SDE、连续生成模型、序列 SSM 与表征信息瓶颈。
4. **Level 3: 前沿理论** (N18 ~ N22) —— LLM 数学建模、推理搜索与测试时计算、强化学习与偏好对齐、过参数化泛化与机器学习统计物理。
5. **顶层目标: 复杂系统** (N23) —— 幂律 Scaling Laws、帕累托最优计算边界与 AGI 演化论证。

每个知识节点均配套了**专属子目录教程 (Nxx_.../index.html)**，深剖**经典教材**与**必读奠基论文**，提供通俗比喻、KaTeX 公式推导、AI 算子应用与交互自测题。

---

## 🌐 核心功能与交互亮点

- **HTML5 Canvas 动态拓扑网络图 (DAG View)**：
  - 全景展示 N01 至 N23 的依赖演进网络。
  - **动态依赖高亮**：鼠标悬停任意节点，自动高亮其所有**上游前置依赖**（蓝/青光晕）与**下游输出流向**（橙/红光晕），带贝塞尔曲线能量脉冲动画。
  - 支持画布平移 (Pan) 与滚轮缩放 (Zoom)。
- **分层航道与实时搜索 (Roadmap & Search)**：
  - 按 Level 0 到 顶层 N23 筛选节点。
  - 实时搜索框支持按节点 ID、公式、论文或 AI 应用关键字瞬间过滤。
- **本地打卡打卡打卡进度管理 (LocalStorage Tracker)**：
  - 节点打卡状态自动持久化，顶部导航栏实时展示完成百分比。
- **23 个专属子目录入门级 HTML 材料**：
  - 结合经典教材（Rudin, Strang, Boyd, Cover & Thomas, Wainwright, Sutton 等）与奠基论文（LoRA, Neural ODE, Shannon 1948, GCN, Adam, WGAN, ResNet, AlphaFold, DDPM, Flow Matching, Mamba, CLIP, GPT-3, o1/PRM, DPO, Double Descent, Grokking, Chinchilla 等）深度拆解。
- **交互式数学与算法实验室 (Visual Labs)**：
  - **LoRA 低秩微调省减计算器** (N01/N21)。
  - **Softmax 测度 Sampling 解码器** (N03/N18)。

---

## 🗺️ N01 - N23 全维知识节点导航表

| 编号 | 节点名称 | 层级 | 前置依赖 | 递进输出 | 推荐经典教材 | 推荐必读奠基论文 | 专属子目录学习材料 |
|---|---|---|---|---|---|---|---|
| **N01** | 高维线性代数与矩阵分析 | Level 0 | - | N06, N07, N12, N16 | Strang / Golub | Candès & Recht (2009) / LoRA (Hu 2021) | [`N01_LinearAlgebraTutorial/`](N01_LinearAlgebraTutorial/index.html) |
| **N02** | 多元微积分与微分分析 | Level 0 | - | N07, N13, N14 | Rudin / Hubbard | Autodiff Survey (2018) / Neural ODEs (2018) | [`N02_MultivariableCalculus/`](N02_MultivariableCalculus/index.html) |
| **N03** | 初等概率论与数理统计 | Level 0 | - | N04, N08, N09 | Bertsekas / Wasserman | VAE (2014) / Nucleus Sampling (2020) | [`N03_ProbabilityAndStatistics/`](N03_ProbabilityAndStatistics/index.html) |
| **N04** | 信息论基础 | Level 0 | N03 | N09,N15,N17,N18,N20 | Cover & Thomas / MacKay | Shannon (1948) / Information Bottleneck (2000) | [`N04_InformationTheory/`](N04_InformationTheory/index.html) |
| **N05** | 图论与计算图分析 | Level 0 | - | N12, N13, N16, N19 | West / Chung | GCN (2017) / MoE (Shazeer 2017) | [`N05_GraphTheory/`](N05_GraphTheory/index.html) |
| **N06** | 逼近论与泛函分析 | Level 1 | N01 | N12, N21 | Kreyszig / Paulsen | UAT (Cybenko 1989) / FNO (Li 2021) | [`N06_FunctionalAnalysis/`](N06_FunctionalAnalysis/index.html) |
| **N07** | 连续最优化理论与凸分析 | Level 1 | N01, N02 | N10, N12, N14, N21 | Boyd / Nocedal | Adam (2015) / Escaping Saddle Points (2015) | [`N07_ConvexOptimization/`](N07_ConvexOptimization/index.html) |
| **N08** | 测度论与高维概率 | Level 1 | N03 | N11, N14, N15 | Wainwright / Dudley | Concentration Inequalities / Random Matrices | [`N08_MeasureTheoryHighDimProb/`](N08_MeasureTheoryHighDimProb/index.html) |
| **N09** | 统计学习理论 | Level 1 | N03, N04 | N20, N21 | Shalev-Shwartz / Mohri | PAC (Valiant 1984) / Rademacher (2002) | [`N09_StatisticalLearningTheory/`](N09_StatisticalLearningTheory/index.html) |
| **N10** | 博弈论与变分不等式 | Level 1 | N07 | N20 | Fudenberg / Facchinei | GAN (Goodfellow 2014) / Multi-Agent RL (2008) | [`N10_GameTheoryVariationalInequalities/`](N10_GameTheoryVariationalInequalities/index.html) |
| **N11** | 最优传输理论 | Level 1 | N08 | N15 | Peyré / Villani | WGAN (2017) / Sinkhorn (Cuturi 2013) | [`N11_OptimalTransport/`](N11_OptimalTransport/index.html) |
| **N12** | 深度神经网络动力学 | Level 2 | N01,N05,N06,N07 | N16,N17,N18,N20 | Goodfellow / Roberts | ResNet (He 2016) / NTK (Jacot 2018) | [`N12_DeepNeuralNetDynamics/`](N12_DeepNeuralNetDynamics/index.html) |
| **N13** | 几何深度学习与代数拓扑 | Level 2 | N02, N05 | N15, N16 | Bronstein / Lee | EGNN (2021) / AlphaFold (Jumper 2021) | [`N13_GeometricDeepLearning/`](N13_GeometricDeepLearning/index.html) |
| **N14** | 随机动力学与 SDE | Level 2 | N02, N07, N08 | N15, N22 | Särkkä / Øksendal | SGLD (Welling 2011) / Continuous Gradient Flow | [`N14_StochasticDynamicsSDE/`](N14_StochasticDynamicsSDE/index.html) |
| **N15** | 连续生成模型 | Level 2 | N04,N11,N13,N14 | N23 | Kobyzev / Song | DDPM (2020) / Flow Matching (2023) / Score SDE | [`N15_ContinuousGenerativeModels/`](N15_ContinuousGenerativeModels/index.html) |
| **N16** | 序列模型与状态空间系统 | Level 2 | N01,N05,N12,N13 | N18 | Gu / Katharopoulos | Attention (2017) / HiPPO (2020) / Mamba (2023) | [`N16_SequenceModelsSSM/`](N16_SequenceModelsSSM/index.html) |
| **N17** | 表征学习与信息瓶颈 | Level 2 | N04, N12 | N18, N21 | Tishby / Jing & Tian | Info Bottleneck (2017) / CPC (2018) / CLIP (2021) | [`N17_RepresentationLearningInformationBottleneck/`](N17_RepresentationLearningInformationBottleneck/index.html) |
| **N18** | 大语言模型数学建模 | Level 3 | N04, N16, N17 | N19, N23 | Roberts | GPT-3 (2020) / In-Context Gradient Descent (2023) | [`N18_LLMMathModeling/`](N18_LLMMathModeling/index.html) |
| **N19** | 推理搜索与测试时计算 | Level 3 | N05, N18 | N23 | Bertsekas / LaValle | PRM (2023) / Repeated Sampling / Test-Time Scaling | [`N19_ReasoningSearchTestTimeCompute/`](N19_ReasoningSearchTestTimeCompute/index.html) |
| **N20** | 强化学习与对齐理论 | Level 3 | N04,N09,N10,N12 | N23 | Sutton & Barto / Lattimore | Policy Gradient / InstructGPT (2022) / DPO (2023) | [`N20_ReinforcementLearningAlignment/`](N20_ReinforcementLearningAlignment/index.html) |
| **N21** | 过参数化泛化理论 | Level 3 | N06,N07,N09,N17 | N23 | Wright & Ma / Kawaguchi | Double Descent (2019) / Rethinking Generalization / SAM | [`N21_OverparameterizedGeneralization/`](N21_OverparameterizedGeneralization/index.html) |
| **N22** | 机器学习统计物理 | Level 3 | N14 | N23 | Gabrié / Mézard | Mean Field (2018) / Grokking (2022) / Interpretability | [`N22_StatisticalPhysicsML/`](N22_StatisticalPhysicsML/index.html) |
| **N23** | 复杂系统涌现与 Scaling | 顶层目标 | N15,N18..N22 | 闭环 | Kaplan / Wei | Kaplan (2020) / Chinchilla (2022) / Emergent Mirage | [`N23_ComplexSystemsScalingLaws/`](N23_ComplexSystemsScalingLaws/index.html) |

---

## 📂 项目目录结构

```text
Math/
├── index.html                   # 全景门户主页面 (DAG 画布 + 分层航道 + 实验台)
├── nodes_data.js                # N01 - N23 全量节点结构化元数据库
├── app.js                       # Canvas DAG 渲染引擎、交互悬停高亮、平移缩放与逻辑
├── style.css                    # Modern Web Design 全套 CSS 样式系统 (深色玻璃态)
├── algebra1.html                # Week 1 实战: 向量与矩阵运算底座
├── week2_geometric_projection.html # Week 2 实战: 正交投影与法方程
├── attention.html               # Attention (QKV) 矩阵运算几何本质交互教程
├── plane_translation.html       # 2D/3D 平面变换与梯度几何交互演示
├── References/
│   └── LA2022Fall/              # 参考资料: Linear Algebra 2022 Fall 官方讲义与习题库 (PDF Resources)
├── N01_LinearAlgebraTutorial/   # N01 专属子目录 (包含 8 大章节完整直觉教程)
├── N02_MultivariableCalculus/   # N02 专属子目录 (多元微积分与微分分析 index.html)
├── N03_ProbabilityAndStatistics/# N03 专属子目录 (初等概率论与数理统计 index.html)
├── N04_InformationTheory/       # N04 专属子目录 (信息论基础 index.html)
├── N05_GraphTheory/             # N05 专属子目录 (图论与计算图分析 index.html)
├── N06_FunctionalAnalysis/      # N06 专属子目录 (逼近论与泛函分析 index.html)
├── N07_ConvexOptimization/      # N07 专属子目录 (连续最优化理论与凸分析 index.html)
├── N08_MeasureTheoryHighDimProb/# N08 专属子目录 (测度论与高维概率 index.html)
├── N09_StatisticalLearningTheory/# N09 专属子目录 (统计学习理论 index.html)
├── N10_GameTheoryVariationalInequalities/# N10 专属子目录 (博弈论与变分不等式 index.html)
├── N11_OptimalTransport/        # N11 专属子目录 (最优传输理论 index.html)
├── N12_DeepNeuralNetDynamics/   # N12 专属子目录 (深度神经网络动力学 index.html)
├── N13_GeometricDeepLearning/   # N13 专属子目录 (几何深度学习与代数拓扑 index.html)
├── N14_StochasticDynamicsSDE/   # N14 专属子目录 (随机动力学与 SDE index.html)
├── N15_ContinuousGenerativeModels/# N15 专属子目录 (连续生成模型 index.html)
├── N16_SequenceModelsSSM/       # N16 专属子目录 (序列模型与状态空间系统 index.html)
├── N17_RepresentationLearningInformationBottleneck/# N17 专属子目录 (表征学习与信息瓶颈 index.html)
├── N18_LLMMathModeling/         # N18 专属子目录 (大语言模型数学建模 index.html)
├── N19_ReasoningSearchTestTimeCompute/# N19 专属子目录 (推理搜索与测试时计算 index.html)
├── N20_ReinforcementLearningAlignment/# N20 专属子目录 (强化学习与对齐理论 index.html)
├── N21_OverparameterizedGeneralization/# N21 专属子目录 (过参数化泛化理论 index.html)
├── N22_StatisticalPhysicsML/    # N22 专属子目录 (机器学习统计物理 index.html)
└── N23_ComplexSystemsScalingLaws/# N23 专属子目录 (复杂系统涌现与 Scaling Laws index.html)
```

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
