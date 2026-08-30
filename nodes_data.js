/**
 * AI & 现代数学前沿理论知识图谱 - 全量节点数据库 (N01 ~ N23)
 * 已全量关联 23 个专属子目录入门级 HTML 学习材料
 */
const KNOWLEDGE_NODES = [
  {
    id: "N01",
    title: "高维线性代数与矩阵分析",
    level: "Level 0: 先修基础",
    levelNum: 0,
    prereqs: [],
    outputs: ["N06", "N07", "N12", "N16"],
    mathTools: "矩阵微积分、SVD 分解 $(\\mathbf{A} = \\mathbf{U}\\mathbf{\\Sigma}\\mathbf{V}^T)$、特征谱分析、矩阵诱导范数 $\|\\mathbf{A}\|_p$、低秩投影定理 (Eckart-Young Theorem)",
    description: "构建高维向量空间与变换的直觉底座。深入理解矩阵作为线性算子对几何空间的旋转、拉伸与投影作用，掌握奇异值分解 (SVD) 与低秩拟合原理，为大模型的特征投影与权重量化提供直接数学支撑。",
    books: [
      { title: "Linear Algebra and Learning from Data", author: "Gilbert Strang" },
      { title: "Matrix Computations (4th Edition)", author: "Gene H. Golub & Charles F. Van Loan" }
    ],
    papers: [
      { title: "Low-rank Matrix Recoveries via Convex Optimization", authors: "Candès & Recht", year: "2009", journal: "Comm. Pure Appl. Math." },
      { title: "LoRA: Low-Rank Adaptation of Large Language Models", authors: "Hu et al.", year: "2021", journal: "ICLR 2022" }
    ],
    applications: "轻量化与微调（LoRA 低秩微调 $W = W_0 + B A$、模型量化 FP4/INT8 SVD 剪枝、KV Cache 压缩、向量检索相似度度量）",
    localLinks: [
      { name: "N01 入门教程: LinearAlgebraTutorial 8 大模块交互指南", url: "N01_LinearAlgebraTutorial/index.html" },
      { name: "Week 1: 代数与运算底座 (Vector & Matrix)", url: "algebra1.html" },
      { name: "Week 2: 空间与几何投影 (Orthogonal Projection)", url: "week2_geometric_projection.html" },
      { name: "LA 2022 Fall 讲义与习题库 (PDF Resources)", url: "LA2022Fall/" }
    ]
  },
  {
    id: "N02",
    title: "多元微积分与微分分析",
    level: "Level 0: 先修基础",
    levelNum: 0,
    prereqs: [],
    outputs: ["N07", "N13", "N14"],
    mathTools: "梯度向量 $\\nabla f$、Jacobian 矩阵 $\\mathbf{J}$、Hessian 矩阵 $\\mathbf{H}$、方向导数、散度与旋度、多元泰勒展开 $\\Delta f \\approx \\nabla f^T \\mathbf{dx} + \\frac{1}{2} \\mathbf{dx}^T \\mathbf{H} \\mathbf{dx}$",
    description: "神经网络参数更新与流形微分的代数基底。从一阶梯度的最速下降方向，到二阶 Hessian 矩阵描绘的能量曲面曲率，全面支撑反向传播算法与连续流模型的构建。",
    books: [
      { title: "Principles of Mathematical Analysis", author: "Walter Rudin" },
      { title: "Vector Calculus, Linear Algebra, and Differential Forms", author: "J. H. Hubbard" }
    ],
    papers: [
      { title: "Automatic Differentiation in Machine Learning: A Survey", authors: "Baydin et al.", year: "2018", journal: "JMLR" },
      { title: "Neural Ordinary Differential Equations", authors: "Chen et al.", year: "2018", journal: "NeurIPS Best Paper" }
    ],
    applications: "自动微分引擎（PyTorch/JAX 算子链式微分与 VJP/JVP 映射、神经流曲率剪枝、反向传播优化）",
    localLinks: [
      { name: "N02 入门教程: 多元微积分与微分分析", url: "N02_MultivariableCalculus/index.html" },
      { name: "2D 变换与平面映射", url: "plane_translation.html" }
    ]
  },
  {
    id: "N03",
    title: "初等概率论与数理统计",
    level: "Level 0: 先修基础",
    levelNum: 0,
    prereqs: [],
    outputs: ["N04", "N08", "N09"],
    mathTools: "条件概率 $P(A|B)$、联合分布、贝叶斯定理 $P(\\theta|x) \\propto P(x|\\theta)P(\\theta)$、期望与协方差矩阵、大数定律 (LLN)、中心极限定理 (CLT)",
    description: "刻画 AI 随机性与不确定性的基石。理解数据生成的概率机制、极大似然估计 (MLE) 与最大后验估计 (MAP)，为变分推断与 LLM 采样解码奠定概率基础。",
    books: [
      { title: "Introduction to Probability", author: "Dimitri P. Bertsekas" },
      { title: "All of Statistics: A Concise Course in Statistical Inference", author: "Larry Wasserman" }
    ],
    papers: [
      { title: "Auto-Encoding Variational Bayes", authors: "Kingma & Welling", year: "2014", journal: "ICLR 2014" },
      { title: "The Curious Case of Neural Text Degeneration", authors: "Holtzman et al.", year: "2020", journal: "ICLR 2020" }
    ],
    applications: "概率判别与采样（贝叶斯推断、高斯混合模型 GMM、LLM 采样解码 Top-p/Top-k 与 Temperature 缩放）",
    localLinks: [
      { name: "N03 入门教程: 初等概率论与数理统计", url: "N03_ProbabilityAndStatistics/index.html" }
    ]
  },
  {
    id: "N04",
    title: "信息论基础",
    level: "Level 0: 先修基础",
    levelNum: 0,
    prereqs: ["N03"],
    outputs: ["N09", "N15", "N17", "N18", "N20"],
    mathTools: "香农熵 $H(X)$、条件熵 $H(Y|X)$、互信息 $I(X;Y)$、KL 散度 $D_{KL}(P\|Q)$、JS 散度、率失真理论 (Rate-Distortion Theory)",
    description: "量化信息量、不确定性与概率分布间距离的通用工具。KL 散度是现代交叉熵损失、变分推断 ELBO 上界以及 RLHF 偏好对齐惩罚的核心度量。",
    books: [
      { title: "Elements of Information Theory (2nd Ed)", author: "Thomas M. Cover & Joy A. Thomas" },
      { title: "Information Theory, Inference and Learning Algorithms", author: "David J. C. MacKay" }
    ],
    papers: [
      { title: "A Mathematical Theory of Communication", authors: "Claude E. Shannon", year: "1948", journal: "Bell System Tech. J." },
      { title: "Estimating Divergences with Information Bottleneck", authors: "Tishby, Pereira, Bialek", year: "2000", journal: "Annual Allerton Conf." }
    ],
    applications: "目标度量与压缩（交叉熵损失函数设计、LLM 上下文信息压缩与 Prompt 压缩、变分推断 ELBO 边界推导）",
    localLinks: [
      { name: "N04 入门教程: 信息论基础", url: "N04_InformationTheory/index.html" }
    ]
  },
  {
    id: "N05",
    title: "图论与计算图分析",
    level: "Level 0: 先修基础",
    levelNum: 0,
    prereqs: [],
    outputs: ["N12", "N13", "N16", "N19"],
    mathTools: "DAG 有向无环图、拓扑排序、二分图匹配、谱图论（拉普拉斯矩阵 $\\mathbf{L} = \\mathbf{D} - \\mathbf{A}$）、图特征谱分析",
    description: "神经网络计算拓扑与复杂拓扑关系的代数表达。现代自动微分引擎将深度网络表示为 DAG，而稀疏专家模型 (MoE) 和 MCTS 推理搜索均依赖图匹配与遍历算法。",
    books: [
      { title: "Introduction to Graph Theory (2nd Ed)", author: "Douglas B. West" },
      { title: "Spectral Graph Theory", author: "Fan R. K. Chung" }
    ],
    papers: [
      { title: "Semi-Supervised Classification with Graph Convolutional Networks", authors: "Kipf & Welling", year: "2017", journal: "ICLR 2017" },
      { title: "Outrageously Large Neural Networks: The Sparsely-Gated MoE", authors: "Shazeer et al.", year: "2017", journal: "ICLR 2017" }
    ],
    applications: "系统架构与图模型（自动微分计算图调度、MoE 稀疏路由分配、推理搜索树 MCTS 与思维树 ToT 搜索）",
    localLinks: [
      { name: "N05 入门教程: 图论与计算图分析", url: "N05_GraphTheory/index.html" }
    ]
  },
  {
    id: "N06",
    title: "逼近论与泛函分析",
    level: "Level 1: 核心工具",
    levelNum: 1,
    prereqs: ["N01"],
    outputs: ["N12", "N21"],
    mathTools: "希尔伯特空间 $(L^2)$、万能逼近定理 (UAT)、再生核希尔伯特空间 (RKHS)、索伯列夫空间 (Sobolev Spaces)",
    description: "从有限维向量拓展到无限维连续函数空间。万能逼近定理证明了神经网络具备逼近任意连续函数的能力，RKHS 提供了核方法与连续算子学习的几何范式。",
    books: [
      { title: "Introductory Functional Analysis with Applications", author: "Erwin Kreyszig" },
      { title: "An Introduction to RKHS", author: "Vern I. Paulsen" }
    ],
    papers: [
      { title: "Approximation by Superpositions of a Sigmoidal Function", authors: "G. Cybenko", year: "1989", journal: "Math. Control Signals Systems" },
      { title: "Fourier Neural Operator for Parametric PDEs", authors: "Zongyi Li et al.", year: "2021", journal: "ICLR 2021" }
    ],
    applications: "科学智能 (AI for Science)（神经算子 FNO/DeepONet 求解偏微分方程、连续函数流形表征与核投影）",
    localLinks: [
      { name: "N06 入门教程: 逼近论与泛函分析", url: "N06_FunctionalAnalysis/index.html" }
    ]
  },
  {
    id: "N07",
    title: "连续最优化理论与凸分析",
    level: "Level 1: 核心工具",
    levelNum: 1,
    prereqs: ["N01", "N02"],
    outputs: ["N10", "N12", "N14", "N21"],
    mathTools: "凸集与凸函数、KKT 对偶条件、拉格朗日对偶性、非凸梯度流 (Gradient Flow)、Hessian 鞍点逃逸机制",
    description: "支撑神经网络训练算法的理论核心。分析梯度下降在非凸能量曲面上的收敛轨迹、鞍点与局部极小值分布，推导 AdamW、Muon 等前沿优化器的自适应更新法则。",
    books: [
      { title: "Convex Optimization", author: "Stephen Boyd & Lieven Vandenberghe" },
      { title: "Numerical Optimization (2nd Ed)", author: "Jorge Nocedal & Stephen J. Wright" }
    ],
    papers: [
      { title: "Adam: A Method for Stochastic Optimization", authors: "Kingma & Ba", year: "2015", journal: "ICLR 2015" },
      { title: "Escaping From Saddle Points — Online Stochastic Gradient for Nonconvex Problems", authors: "Ge et al.", year: "2015", journal: "COLT 2015" }
    ],
    applications: "大规模分布式优化器（AdamW、Muon 优化器、梯度累积与通信压缩、自适应学习率控制算法）",
    localLinks: [
      { name: "N07 入门教程: 连续最优化理论与凸分析", url: "N07_ConvexOptimization/index.html" },
      { name: "Week 2: 法方程与最小二乘凸优化", url: "week2_geometric_projection.html#s3" }
    ]
  },
  {
    id: "N08",
    title: "测度论与高维概率",
    level: "Level 1: 核心工具",
    levelNum: 1,
    prereqs: ["N03"],
    outputs: ["N11", "N14", "N15"],
    mathTools: "勒贝格测度、Radon-Nikodym 导数、测度推前 (Push-forward Measure $\\sharp$)、亚高斯 (Sub-Gaussian) 集中不等式",
    description: "处理高维非欧空间与连续概率测度的数学语言。分析高维空间中“测度集中效应”（Concentration of Measure），为 Diffusion 模型的连续测度变换与 OOD 异常检测提供理论根基。",
    books: [
      { title: "High-Dimensional Statistics: A Non-Asymptotic Viewpoint", author: "Martin J. Wainwright" },
      { title: "Real Analysis and Probability", author: "R. M. Dudley" }
    ],
    papers: [
      { title: "Concentration Inequalities: A Nonasymptotic Theory of Independence", authors: "Boucheron, Lugosi, Massart", year: "2013", journal: "Oxford Univ Press" },
      { title: "A Non-Asymptotic Approach to Random Matrices", authors: "Roman Vershynin", year: "2012", journal: "Compressed Sensing" }
    ],
    applications: "高维不确定性度量（连续概率测度推演、Out-of-Distribution 异常检测、高维表征各向异性修正）",
    localLinks: [
      { name: "N08 入门教程: 测度论与高维概率", url: "N08_MeasureTheoryHighDimProb/index.html" }
    ]
  },
  {
    id: "N09",
    title: "统计学习理论",
    level: "Level 1: 核心工具",
    levelNum: 1,
    prereqs: ["N03", "N04"],
    outputs: ["N20", "N21"],
    mathTools: "偏差-方差分解 (Bias-Variance Tradeoff)、PAC-Learning 框架、Rademacher 复杂度、VC 维 (VC-Dimension)、经验风险最小化 (ERM)",
    description: "解答“机器学习为什么能够泛化”的核心理论。建立泛化上界 (Generalization Bound)，评估模型在未知测试集上的表现，指导数据采样与对抗鲁棒性设计。",
    books: [
      { title: "Understanding Machine Learning: From Theory to Algorithms", author: "Shai Shalev-Shwartz & Shai Ben-David" },
      { title: "Foundations of Machine Learning (2nd Ed)", author: "Mehryar Mohri, Afshin Rostamizadeh, Ameet Talwalkar" }
    ],
    papers: [
      { title: "A Theory of the Learnable", authors: "Leslie G. Valiant", year: "1984", journal: "Comm. ACM" },
      { title: "Rademacher and Gaussian Complexities: Risk Bounds and Structural Results", authors: "Bartlett & Mendelson", year: "2002", journal: "JMLR" }
    ],
    applications: "模型泛化评估与鲁棒性（Few-shot 泛化界、鲁棒对抗防御、数据多样性与覆盖度度量）",
    localLinks: [
      { name: "N09 入门教程: 统计学习理论", url: "N09_StatisticalLearningTheory/index.html" }
    ]
  },
  {
    id: "N10",
    title: "博弈论与变分不等式",
    level: "Level 1: 核心工具",
    levelNum: 1,
    prereqs: ["N07"],
    outputs: ["N20"],
    mathTools: "纳什均衡 (Nash Equilibrium)、极小极大定理 (Minimax Theorem)、变分不等式 (VI)、双层优化 (Bilevel Optimization)",
    description: "分析多决策主体互相博弈与协同演化的数学工具。GAN 的生成器与判别器对抗、Actor-Critic 强化学习以及多 Agent 偏好对齐均属于博弈均衡的求解范式。",
    books: [
      { title: "Game Theory", author: "Drew Fudenberg & Jean Tirole" },
      { title: "Finite-Dimensional Variational Inequalities and Complementarity Problems", author: "Francisco Facchinei & Jong-Shi Pang" }
    ],
    papers: [
      { title: "Generative Adversarial Nets", authors: "Goodfellow et al.", year: "2014", journal: "NeurIPS 2014" },
      { title: "Multi-Agent Reinforcement Learning: A Game-Theoretic Perspective", authors: "Busoniu et al.", year: "2008", journal: "IEEE Transactions" }
    ],
    applications: "对抗学习与偏好对齐（GAN 对抗博弈、Actor-Critic 协同博弈、多智能体对齐与自博弈演化）",
    localLinks: [
      { name: "N10 入门教程: 博弈论与变分不等式", url: "N10_GameTheoryVariationalInequalities/index.html" }
    ]
  },
  {
    id: "N11",
    title: "最优传输理论",
    level: "Level 1: 核心工具",
    levelNum: 1,
    prereqs: ["N08"],
    outputs: ["N15"],
    mathTools: "Monge-Kantorovich 最优传输问题、Wasserstein 距离 ($W_1, W_2$)、Kantorovich 对偶性、Benamou-Brenier 连续动力学公式",
    description: "刻画概率分布之间平滑迁移与最小能耗变形的几何理论。Wasserstein 距离解决了 KL 散度在无重叠支撑集时的梯度消失问题，是 Flow Matching 的理论根基。",
    books: [
      { title: "Computational Optimal Transport", author: "Gabriel Peyré & Marco Cuturi" },
      { title: "Optimal Transport: Old and New", author: "Cédric Villani" }
    ],
    papers: [
      { title: "Wasserstein Generative Adversarial Networks", authors: "Arjovsky, Chintala, Bottou", year: "2017", journal: "ICML 2017" },
      { title: "Sinkhorn Distances: Lightspeed Computation of Optimal Transport", authors: "Marco Cuturi", year: "2013", journal: "NeurIPS 2013" }
    ],
    applications: "生成分布几何对齐（Flow Matching 极小传输成本轨迹插值、WGAN 稳定性控制、跨模态流形对齐）",
    localLinks: [
      { name: "N11 入门教程: 最优传输理论", url: "N11_OptimalTransport/index.html" }
    ]
  },
  {
    id: "N12",
    title: "深度神经网络动力学",
    level: "Level 2: 模型与几何",
    levelNum: 2,
    prereqs: ["N01", "N05", "N06", "N07"],
    outputs: ["N16", "N17", "N18", "N20"],
    mathTools: "残差网络 ODE 极限 $\\frac{dh}{dt} = f(h, t)$、深度特征传播稳定性、反向传播链式微分、神经正切核 (NTK)",
    description: "研究极深神经网络在无限宽度与无限深度极限下的特征表征与演化动力学。NTK 证明了超参数化网络在初始化附近的线性收敛特性，ResNet 建立了连续 ODE 流。",
    books: [
      { title: "Deep Learning", author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville" },
      { title: "The Principles of Deep Learning Theory", author: "Daniel A. Roberts, Sho Yaida, Boris Hanin" }
    ],
    papers: [
      { title: "Deep Residual Learning for Image Recognition", authors: "He et al.", year: "2016", journal: "CVPR Best Paper" },
      { title: "Neural Tangent Kernel: Convergence and Generalization in Neural Networks", authors: "Jacot, Gabriel, Hongler", year: "2018", journal: "NeurIPS 2018" }
    ],
    applications: "视觉与通用感知网络（ResNet、ConvNeXt、视觉自监督模型 MAE、神经网络初始化与梯度爆炸控制）",
    localLinks: [
      { name: "N12 入门教程: 深度神经网络动力学", url: "N12_DeepNeuralNetDynamics/index.html" }
    ]
  },
  {
    id: "N13",
    title: "几何深度学习与代数拓扑",
    level: "Level 2: 模型与几何",
    levelNum: 2,
    prereqs: ["N02", "N05"],
    outputs: ["N15", "N16"],
    mathTools: "流形假说 (Manifold Hypothesis)、李群与李代数 ($\mathrm{SE}(3)/\mathrm{SO}(3)$)、群等变性与不变性 ($f(g \\cdot x) = g \\cdot f(x)$)、拓扑数据分析 (TDA)",
    description: "利用三维空间旋转、对称性与拓扑结构约束神经网络的几何范式。在分子构象生成与蛋白质结构预测中，等变性保证了三维物理规律的严格一致性。",
    books: [
      { title: "Geometric Deep Learning: Grids, Groups, Graphs, Geodesics, and Gauges", author: "Michael M. Bronstein et al." },
      { title: "Riemannian Manifolds: An Introduction to Curvature", author: "John M. Lee" }
    ],
    papers: [
      { title: "E(n) Equivariant Graph Neural Networks", authors: "Satorras, Hoogeboom, Welling", year: "2021", journal: "ICML 2021" },
      { title: "Highly accurate protein structure prediction with AlphaFold", authors: "Jumper et al.", year: "2021", journal: "Nature 2021" }
    ],
    applications: "结构生物与材料科学（AlphaFold3 蛋白质设计、分子构象生成、等变图神经网络 GNN）",
    localLinks: [
      { name: "N13 入门教程: 几何深度学习与代数拓扑", url: "N13_GeometricDeepLearning/index.html" }
    ]
  },
  {
    id: "N14",
    title: "随机动力学与 SDE",
    level: "Level 2: 模型与几何",
    levelNum: 2,
    prereqs: ["N02", "N07", "N08"],
    outputs: ["N15", "N22"],
    mathTools: "朗之万动力学 (Langevin Dynamics)、伊藤引理 (Itô's Lemma)、Fokker-Planck 方程 $\\frac{\\partial p}{\\partial t} = -\\nabla \\cdot (\\mu p) + \\frac{1}{2}\\nabla^2(D p)$、随机梯度朗之万动力学 (SGLD)",
    description: "用连续时间随机微分方程 (SDE) 描述热噪声扰动下的粒子扩散与采样过程。是 Score-based 扩散模型逆向去噪与 SGD 随机扰动逃逸鞍点的数学基础。",
    books: [
      { title: "Applied Stochastic Differential Equations", author: "Simo Särkkä & Arno Solin" },
      { title: "Stochastic Differential Equations (6th Ed)", author: "Bernt Øksendal" }
    ],
    papers: [
      { title: "Bayesian Learning via Stochastic Gradient Langevin Dynamics", authors: "Welling & Teh", year: "2011", journal: "ICML 2011" },
      { title: "A Continuous-Time View of Gradient Methods for Machine Learning", authors: "Su, Boyd, Candès", year: "2016", journal: "JMLR" }
    ],
    applications: "生成采样与优化动力学（扩散模型逆向 SDE 求解器、朗之万退火采样、SGD 随机噪声逃逸与平滑收敛）",
    localLinks: [
      { name: "N14 入门教程: 随机动力学与 SDE", url: "N14_StochasticDynamicsSDE/index.html" }
    ]
  },
  {
    id: "N15",
    title: "连续生成模型 (Diffusion/Flow/EBM)",
    level: "Level 2: 模型与几何",
    levelNum: 2,
    prereqs: ["N04", "N11", "N13", "N14"],
    outputs: ["N23"],
    mathTools: "连续归一化流 (CNF)、基于分数的生成模型 (Score SDE $\\nabla_x \\log p_t(x)$)、流匹配 (Flow Matching)、能量基模型 (EBM $p(x) \\propto e^{-E(x)}$)",
    description: "前沿图像、视频与语音生成模型的数学统摄框架。将噪声分布映射到数据分布，通过概率流 ODE (Probability Flow ODE) 与 Flow Matching 实现极速极高质量生成。",
    books: [
      { title: "Normalizing Flows: Introduction and Review", author: "Ivan Kobyzev et al." },
      { title: "Score-Based Generative Modeling: Papers & Monograph", author: "Yang Song et al." }
    ],
    papers: [
      { title: "Denoising Diffusion Probabilistic Models (DDPM)", authors: "Ho, Jain, Abbeel", year: "2020", journal: "NeurIPS 2020" },
      { title: "Flow Matching for Generative Modeling", authors: "Lipman et al.", year: "2023", journal: "ICLR 2023" },
      { title: "Score-Based Generative Modeling through SDEs", authors: "Song et al.", year: "2021", journal: "ICLR 2021 Outstanding Paper" }
    ],
    applications: "多模态内容生成（Stable Diffusion、Flux.1、Sora 视频生成底座、流匹配语音合成与极速采样求解）",
    localLinks: [
      { name: "N15 入门教程: 连续生成模型", url: "N15_ContinuousGenerativeModels/index.html" }
    ]
  },
  {
    id: "N16",
    title: "序列模型与状态空间系统",
    level: "Level 2: 模型与几何",
    levelNum: 2,
    prereqs: ["N01", "N05", "N12", "N13"],
    outputs: ["N18"],
    mathTools: "自注意力机制核投影 $\\operatorname{Softmax}\\left(\\frac{QK^T}{\\sqrt{d_k}}\\right)V$、连续状态空间方程离散化 (SSM)、HiPPO 矩阵多项式记忆衰减",
    description: "长文本与连续时序建模的核心架构。Transformer 利用 QKV 空间投影进行全局关联，Mamba/SSM 利用连续控制理论矩阵衰减实现线性时间复杂度的长程记忆。",
    books: [
      { title: "State Space Models for Deep Learning", author: "Albert Gu et al." },
      { title: "Transformers from First Principles", author: "Angelos Katharopoulos et al." }
    ],
    papers: [
      { title: "Attention Is All You Need", authors: "Vaswani et al.", year: "2017", journal: "NeurIPS 2017" },
      { title: "HiPPO: Recurrent Memory with Optimal Polynomial Projections", authors: "Gu et al.", year: "2020", journal: "NeurIPS 2020" },
      { title: "Mamba: Linear-Time Sequence Modeling with Selective State Spaces", authors: "Gu & Dao", year: "2023", journal: "arXiv:2312.00752" }
    ],
    applications: "长上下文序列建模（Transformer 基座、Linear Attention 线性注意力、Mamba/SSM 架构演进）",
    localLinks: [
      { name: "N16 入门教程: 序列模型与状态空间系统", url: "N16_SequenceModelsSSM/index.html" },
      { name: "Attention (QKV) 几何本质交互教程", url: "attention.html" }
    ]
  },
  {
    id: "N17",
    title: "表征学习与信息瓶颈",
    level: "Level 2: 模型与几何",
    levelNum: 2,
    prereqs: ["N04", "N12"],
    outputs: ["N18", "N21"],
    mathTools: "信息瓶颈原理 (Information Bottleneck $\\min I(X;Z) - \\beta I(Z;Y)$)、对比学习测度对齐 (InfoNCE Loss)、自监督解耦 (Disentanglement)",
    description: "解释模型如何从高维原始数据中抽取最具泛化能力的低维特征。InfoNCE 损失拉近同类拉远异类，信息瓶颈舍弃无关噪声保留核心语义。",
    books: [
      { title: "Information Bottleneck Theory and Applications", author: "Naftali Tishby et al." },
      { title: "Self-Supervised Learning Foundations", author: "Longlong Jing & Yingli Tian" }
    ],
    papers: [
      { title: "Opening the Black Box of Deep Neural Networks via Information", authors: "Shwartz-Ziv & Tishby", year: "2017", journal: "arXiv:1703.00810" },
      { title: "Representation Learning with Contrastive Predictive Coding", authors: "van den Oord et al.", year: "2018", journal: "arXiv:1807.03748" },
      { title: "Learning Transferable Visual Models From Natural Language Supervision (CLIP)", authors: "Radford et al.", year: "2021", journal: "ICML 2021" }
    ],
    applications: "多模态对齐与自监督（CLIP 跨模态表征对齐、DINOv2 视觉自监督特征提取、表征坍缩防御）",
    localLinks: [
      { name: "N17 入门教程: 表征学习与信息瓶颈", url: "N17_RepresentationLearningInformationBottleneck/index.html" }
    ]
  },
  {
    id: "N18",
    title: "大语言模型 (LLMs) 数学建模",
    level: "Level 3: 前沿理论",
    levelNum: 3,
    prereqs: ["N04", "N16", "N17"],
    outputs: ["N19", "N23"],
    mathTools: "自回归高维联合概率分解 $P(x_1..x_T) = \\prod P(x_t|x_{<t})$、Softmax 测度分布、注意力机制低秩流形投影、In-Context Learning 隐式梯度下降机制",
    description: "现代 LLM (GPT-4, Claude, DeepSeek) 的数学范式。揭示 Transformer 如何通过上下文学习 (ICL) 隐式执行梯度更新，以及自回归生成在概率流形上的演化特征。",
    books: [
      { title: "The Principles of Deep Learning Theory", author: "Roberts, Yaida, Hanin" }
    ],
    papers: [
      { title: "Language Models are Few-Shot Learners (GPT-3)", authors: "Tom B. Brown et al.", year: "2020", journal: "NeurIPS 2020" },
      { title: "Transformers learn in-context by gradient descent", authors: "von Oswald et al.", year: "2023", journal: "ICML 2023" },
      { title: "What Can Transformers Learn In-Context? A Case Study of Linear Regression", authors: "Garg et al.", year: "2022", journal: "NeurIPS 2022" }
    ],
    applications: "认知推理与基座架构（GPT-4、Claude、DeepSeek 基座模型、长程代码生成与数学自动证明）",
    localLinks: [
      { name: "N18 入门教程: 大语言模型 (LLMs) 数学建模", url: "N18_LLMMathModeling/index.html" },
      { name: "Attention (QKV) 矩阵运算几何本质", url: "attention.html" }
    ]
  },
  {
    id: "N19",
    title: "推理搜索与测试时计算理论",
    level: "Level 3: 前沿理论",
    levelNum: 3,
    prereqs: ["N05", "N18"],
    outputs: ["N23"],
    mathTools: "树搜索动力学 (MCTS / Upper Confidence Bounds)、Verifier 验证器概率测度、过程奖励模型 (PRM)、自修正马尔可夫链、Test-Time Scaling Law",
    description: "新一代推理模型 (o1/o3/DeepSeek-R1) 的核心理论。将计算资源从预训练转移到测试阶段（Test-Time Compute），通过思维链 CoT 自省与树搜索突破模型推理上限。",
    books: [
      { title: "Reinforcement Learning and Optimal Control", author: "Dimitri P. Bertsekas" },
      { title: "Search-based Planning: Algorithms and Implementations", author: "Steven M. LaValle" }
    ],
    papers: [
      { title: "Let's Verify Step by Step", authors: "Lightman et al. (OpenAI)", year: "2023", journal: "arXiv:2305.20050" },
      { title: "Large Language Monkeys: Scaling Inference Compute with Repeated Sampling", authors: "Brown et al.", year: "2024", journal: "arXiv:2407.21787" },
      { title: "Scaling LLM Test-Time Compute Optimally can be More Effective than Scaling Parameters", authors: "Snell et al.", year: "2024", journal: "arXiv:2408.03314" }
    ],
    applications: "慢思考与复杂推理模型（o1/o3 推理范式、长链推理 CoT 自省、数学与竞赛级代码自博弈求解）",
    localLinks: [
      { name: "N19 入门教程: 推理搜索与测试时计算理论", url: "N19_ReasoningSearchTestTimeCompute/index.html" }
    ]
  },
  {
    id: "N20",
    title: "强化学习与对齐理论",
    level: "Level 3: 前沿理论",
    levelNum: 3,
    prereqs: ["N04", "N09", "N10", "N12"],
    outputs: ["N23"],
    mathTools: "马尔可夫决策过程 (MDP)、贝尔曼最优算子 (Bellman Optimality Operator)、策略梯度定理、KL 散度约束对齐、DPO/GRPO 解析求解形式",
    description: "大模型人类偏好对齐与自博弈集成的理论依据。推导 RLHF、DPO 与 GRPO 的隐式奖励函数关系，确保模型输出符合人类价值且具备自主反思能力。",
    books: [
      { title: "Reinforcement Learning: An Introduction (2nd Ed)", author: "Richard S. Sutton & Andrew G. Barto" },
      { title: "Bandit Algorithms", author: "Tor Lattimore & Csaba Szepesvári" }
    ],
    papers: [
      { title: "Policy Gradient Methods for Reinforcement Learning with Function Approximation", authors: "Sutton et al.", year: "1999", journal: "NeurIPS 1999" },
      { title: "Training language models to follow instructions with human feedback (InstructGPT)", authors: "Ouyang et al.", year: "2022", journal: "NeurIPS 2022" },
      { title: "Direct Preference Optimization: Your Language Model is Secretly a Reward Model (DPO)", authors: "Rafailov et al.", year: "2023", journal: "NeurIPS 2023" }
    ],
    applications: "大模型后训练与具身控制（RLHF 人类偏好对齐、DPO/GRPO 推理模型自博弈强化、机器人运动控制）",
    localLinks: [
      { name: "N20 入门教程: 强化学习与对齐理论", url: "N20_ReinforcementLearningAlignment/index.html" }
    ]
  },
  {
    id: "N21",
    title: "过参数化泛化理论",
    level: "Level 3: 前沿理论",
    levelNum: 3,
    prereqs: ["N06", "N07", "N09", "N17"],
    outputs: ["N23"],
    mathTools: "扁平极小值 (Flat Minima)、Hessian 谱衰减与低秩偏置、PAC-Bayes 泛化界、双重下降现象 (Double Descent Curve)",
    description: "打破经典统计学“参数过多必过拟合”迷思的现代理论。解释过参数化网络为何能收敛到“平坦极小值”从而具备极强泛化能力，指导 SAM 优化器与 MoE 剪枝。",
    books: [
      { title: "High-Dimensional Data Analysis with Low-Dimensional Models", author: "John Wright & Yi Ma" },
      { title: "Generalization in Deep Learning", author: "Kenji Kawaguchi et al." }
    ],
    papers: [
      { title: "Reconciling modern machine-learning practice and the classical bias–variance trade-off (Double Descent)", authors: "Belkin et al.", year: "2019", journal: "PNAS" },
      { title: "Understanding deep learning requires rethinking generalization", authors: "Zhang et al.", year: "2017", journal: "ICLR 2017 Best Paper" },
      { title: "Sharpness-Aware Minimization for Efficiently Improving Generalization (SAM)", authors: "Foret et al.", year: "2021", journal: "ICLR 2021" }
    ],
    applications: "基础模型鲁棒性与剪枝（SAM 锐度感知优化、结构化剪枝、稀疏激活 MoE 负载均衡控制）",
    localLinks: [
      { name: "N21 入门教程: 过参数化泛化理论", url: "N21_OverparameterizedGeneralization/index.html" }
    ]
  },
  {
    id: "N22",
    title: "机器学习统计物理",
    level: "Level 3: 前沿理论",
    levelNum: 3,
    prereqs: ["N14"],
    outputs: ["N23"],
    mathTools: "平均场理论 (Mean Field Theory)、复制对称性破缺 (RSB)、自由能曲面 (Free Energy Surface)、无序系统与自旋玻璃态相变 (Spin Glass Phase Transition)",
    description: "将神经网络看作极高维统计物理热力学系统。解释深度学习中的“Grokking”（顿悟现象）、训练相变边界以及机械可解释性 (Mechanistic Interpretability)。",
    books: [
      { title: "Statistical Physics of Machine Learning", author: "Marylou Gabrié et al." },
      { title: "Spin Glass Theory and Beyond", author: "Marc Mézard, Giorgio Parisi, Miguel Angel Virasoro" }
    ],
    papers: [
      { title: "The Mean Field Theory of Neural Networks", authors: "Mei, Montanari, Nguyen", year: "2018", journal: "PNAS" },
      { title: "Grokking: Generalization Beyond Overfitting on Small Algorithmic Datasets", authors: "Power et al. (OpenAI)", year: "2022", journal: "arXiv:2201.02177" },
      { title: "Progress measures for grokking via mechanistic interpretability", authors: "Neel Nanda et al.", year: "2023", journal: "ICLR 2023" }
    ],
    applications: "训练相变与涌现预测（Grokking 顿悟机制预测、模型表征坍缩临界点监测、相变边界推导）",
    localLinks: [
      { name: "N22 入门教程: 机器学习统计物理", url: "N22_StatisticalPhysicsML/index.html" }
    ]
  },
  {
    id: "N23",
    title: "复杂系统涌现与 Scaling Laws",
    level: "顶层目标",
    levelNum: 4,
    prereqs: ["N15", "N18", "N19", "N20", "N21", "N22"],
    outputs: ["最终收敛闭环"],
    mathTools: "幂律标度微分方程 $L(C) = (C_c/C)^{\alpha_C}$、计算-数据-推理最优帕累托边界 (Pareto Frontier)、跨尺度突变几何学",
    description: "AI 领域的顶层圣杯法则。定量预测模型规模 (Parameters)、数据量 (Tokens) 与算力 (FLOPs) 拓展时的性能突变，指导超算集群构建与 AGI 演化方向。",
    books: [
      { title: "Scaling Laws for Neural Language Models", author: "Jared Kaplan et al." },
      { title: "Emergent Abilities of Large Language Models", author: "Jason Wei et al." }
    ],
    papers: [
      { title: "Scaling Laws for Neural Language Models", authors: "Kaplan et al. (OpenAI)", year: "2020", journal: "arXiv:2001.08361" },
      { title: "Training Compute-Optimal Large Language Models (Chinchilla)", authors: "Hoffmann et al. (DeepMind)", year: "2022", journal: "NeurIPS 2022" },
      { title: "Are Emergent Abilities of Large Language Models a Mirage?", authors: "Schaeffer, Miranda, Kelson", year: "2023", journal: "NeurIPS 2023 Outstanding Paper" }
    ],
    applications: "超算集群与前沿范式规划（预训练+推理计算联合 Scaling 边界算力分配、AGI 演化论证）",
    localLinks: [
      { name: "N23 入门教程: 复杂系统涌现与 Scaling Laws", url: "N23_ComplexSystemsScalingLaws/index.html" }
    ]
  }
];
