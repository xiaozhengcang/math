# LinearAlgebraTutorial 📐

> **面向初学者的 100% 穷尽式几何直觉、全定理推导与 Python 实战 Web 教程**
> 
> *An Interactive, Visual, and Mathematically Rigorous Linear Algebra Course based on NTU Prof. Hung-yi Lee's LA 2022 Fall Lectures.*
>
> 课程参考来源：[Linear Algebra 2022 Fall (NTU Hung-yi Lee)](https://googly-mingto.github.io/LA_2022_fall/2022-fall.html)

---

## 🌟 核心特色 (Key Features)

- 👁️ **几何直觉优先 (Geometric Intuition)**: 将矩阵乘法解读为空间网格扭曲，行列式解读为有向体积放缩率，特征向量解读为不旋转主轴，SVD 解读为旋转-拉伸-旋转三步曲。
- ✍️ **100% 穷尽式推导 (Full Proofs)**: 列对应定理 (Column Correspondence Theorem)、可逆矩阵 10 条件闭环定理、克莱姆法则、伴随矩阵公式、Cayley-Hamilton 定理、谱分解定理等均有严密无缝逻辑推导。
- 🌱 **生动且适合零基础 (Beginner Friendly)**: 从《九章算术》方程术引出高斯消元，使用“在 Span 耍废的 Vector”等比喻拆解抽象公理。
- 💻 **Python / NumPy 代码实战 (Python Labs)**: 每一个模块均配备工业级 `NumPy` 代码规范与例题验证（`linalg.solve`, `inv`, `qr`, `eig`, `svd`, `pinv` 等）。
- 🎨 **现代响应式 Dark/Light Web 界面**: 交互式 Visualizer 动态图形展现、沉浸式卡片布局与深浅色主题自由切换。

---

## 🗺️ 课程模块路线图 (Course Roadmap)

```
[Module 1: 向量/矩阵与方程组] ───► [Module 2: 求解方程组/RREF/列对应定理] ───► [Module 3: 矩阵4大视角与可逆大一统]
                                                                                            │
[Module 6: 坐标系统与基变换] ◄─── [Module 5: 行列式体积与克莱姆法则] ◄─── [Module 4: 子空间/基与四大基本子空间]
       │
       ▼
[Module 7: 特征值/PageRank/对角化] ───► [Module 8: 正交投影/SVD与超越向量空间]
```

### 📚 本教程 8 大模块目录

| 模块 | 名称 | 对应章节 | 核心讲义内容与链接 |
| :--- | :--- | :--- | :--- |
| **Module 01** | [向量、矩阵与线性方程组](module1_vectors_linear_systems.html) | Ch 1.1 ~ 1.5 | 线性系统定义、微积分算子线性性、向量几何意义、Ax = b 矩阵方程与列组合视角 |
| **Module 02** | [求解方程组、RREF 与列对应定理](module2_rref_solutions_rank.html) | Ch 1.6 ~ 1.7 | Span 生成空间、解结构 x = xₚ + xₙ、高斯消元法、RREF 唯一性、列对应定理全推导 |
| **Module 03** | [矩阵四大视角与可逆大一统定理](module3_matrix_transforms_inverse.html) | Ch 2.1 ~ 2.2 | 矩阵乘法 4 大视角、线性变换网格扭曲、初等矩阵与逆矩阵、可逆矩阵 10 条件闭环 |
| **Module 04** | [子空间、基与四大基本子空间](module4_subspaces_basis_dimension.html) | Ch 4.1 ~ 4.3 | 子空间 3 条件、基与维数定理、四大基本子空间 (Col, Row, Null, Left Null)、Rank-Nullity 定理 |
| **Module 05** | [行列式体积、余子式与克莱姆法则](module5_determinant_cramer.html) | Ch 3.1 ~ 3.2 | Signed Volume 几何放缩率、3 大基本性质、代数余子式展开、伴随矩阵求逆与 Cramer's Rule |
| **Module 06** | [坐标系统与基变换矩阵](module6_coordinates_transforms.html) | Ch 4.4 ~ 4.5 | 任意基底下的坐标表示 [x]ᵦ、基变换矩阵、相似矩阵 B = P⁻¹AP、微分与积分算子矩阵化 |
| **Module 07** | [特征值、PageRank 与矩阵对角化](module7_eigenvalues_diagonalization.html) | Ch 5.1 ~ 5.3 | 特征值/特征向量几何意义、特征多项式、PageRank 幂迭代法、矩阵对角化 A = PDP⁻¹ 与 Aᵏ 计算 |
| **Module 08** | [正交投影、SVD 与超越向量空间](module8_orthogonality_svd_beyond.html) | Ch 6 & Ch 7 | Gram-Schmidt 正交化、正交投影 P = A(AᵀA)⁻¹Aᵀ、最小二乘法、对称矩阵谱分解、SVD 奇异值分解 |

---

## 📖 完整教学大纲 (Detailed Syllabus: LA 2022 Fall)

### 📌 Chapter 1: 线性系统与求解基础 (Linear System & RREF)
- **1. Linear (线性概念)**: 线性系统定义、微积分导数与积分作为线性系统（加法性与齐次性）
- **2. Vector (向量)**: 向量的代数与几何意义、向量加法与标量乘法
- **3. System of Linear Equations (线性方程组)**: 方程组的行图像 (Row Picture) 与列图像 (Column Picture)
- **4. Matrix (矩阵)**: 矩阵形式 Ax = b、矩阵与向量相乘的列线性组合视角
- **5. Solution (解的情况)**: 相容 (Consistent) 与矛盾 (Inconsistent)、唯一解、无穷多解与无解判定
- **6. RREF (简化行阶梯形)**: 初等行变换 (Elementary Row Operations)、高斯-若尔当消元、主元 (Pivots) 与自由变量 (Free Variables)

### 📌 Chapter 2: 矩阵运算与逆矩阵 (Matrix Operations & Inverses)
- **1. Matrix Multiplication (矩阵乘法)**:
  - 矩阵乘法 4 种理解视角（行向量线性组合、列向量线性组合、外积之和、分量点积）
  - 矩阵乘法性质、块矩阵乘法与初等矩阵 (Elementary Matrices)
- **2. Matrix Inverse (逆矩阵)**:
  - 可逆矩阵 (Invertible Matrix) 的充要条件
  - 初等行变换求逆算法：[A \| I] → [I \| A⁻¹]
  - 左逆、右逆与矩阵可逆等价定理

### 📌 Chapter 3: 行列式 (Determinant)
- **1. Determinant Definition (行列式定义)**:
  - 余子式与代数余子式展开 (Cofactor Expansion)
  - 2×2 与 3×3 行列式的有向面积与体积直观
- **2. Determinant Properties (行列式基本性质)**:
  - 行列式 3 大公理（线性性、交错性、单位矩阵 det(I) = 1）
  - 核心性质：det(AB) = det(A)·det(B)，det(Aᵀ) = det(A)，det(A⁻¹) = 1 / det(A)
  - 可逆充要条件：A 可逆 ⟺ det(A) ≠ 0
- **3. Applications (应用专题)**:
  - 伴随矩阵与逆矩阵解析公式：A⁻¹ = (1 / det(A)) · adj(A)
  - 克莱姆法则 (Cramer's Rule)

### 📌 Chapter 4: 空间、基底与坐标系 (Subspace, Basis & Coordinate System)
- **1. Linear Combination & Span**: 线性组合、张成空间 Span{v₁, ..., vₖ}
- **2. Linear Transformation (线性变换)**: 旋转、反射、投影与剪切矩阵
- **3. Linear Independence (线性无关)**: 无关性定义、主元与线性无关关系
- **4. Subspace (子空间)**: 子空间 3 大封闭性检验（零向量、加法封闭、数乘封闭）
- **5. 四大基本子空间**:
  - 列空间 Col(A)、行空间 Row(A)、零空间 Null(A)、左零空间 Null(Aᵀ)
  - 秩-零化度定理 (Rank-Nullity Theorem): Rank(A) + Nullity(A) = n
  - 核心定理：Rank(A) = Rank(Aᵀ)
- **6. Basis & Dimension (基底与维度)**: 基底判别法则、维数概念
- **7. Coordinate Systems (坐标系统)**:
  - 任意基底下的坐标表示 [x]ᵦ
  - 基变换矩阵 (Change of Basis Matrix)
- **8. Linear Operator Representation (线性算子矩阵化)**:
  - 算子在不同坐标系下的矩阵表示与相似矩阵：B = P⁻¹AP

### 📌 Chapter 5: 特征值、特征向量与对角化 (Eigenvalues & Diagonalization)
- **1. Eigenvalues & Eigenvectors (特征值与特征向量)**:
  - 几何与代数定义：Av = λv (v ≠ 0)
  - 特征方程 det(A - λI) = 0 与特征多项式 (Characteristic Polynomial)
  - 特征空间 (Eigenspace)、代数重数 (Algebraic Multiplicity) 与几何重数 (Geometric Multiplicity)
- **2. Similar Matrices (相似矩阵)**: 相似矩阵共享特征多项式、特征值与迹
- **3. Diagonalization (矩阵对角化)**:
  - 对角化充要条件：矩阵拥有 n 个线性无关的特征向量 (A = PDP⁻¹)
  - 对角化应用：矩阵快速高次幂 Aᵏ = PDᵏP⁻¹、差分方程与动态系统演化
- **4. 经典应用专题: PageRank 算法**:
  - 网页链接图与马尔可夫转移矩阵建模
  - 为什么最大特征值总是 λ = 1？幂法 (Power Method) 迭代求解

### 📌 Chapter 6: 抽象向量空间 (Abstract Vector Space)
- **1. Vector Space (万物皆向量)**:
  - 抽象向量空间 8 条公理
  - 多项式空间 Pₙ、函数空间、连续可微函数空间、矩阵空间
- **2. Isomorphism (同构)**: 任意 n 维实向量空间均与 ℝⁿ 同构
- **3. Abstract Linear Transformation**: 微分算子 d/dx、积分算子的矩阵化表示
- **4. Inner Product Space (内积空间)**:
  - 抽象内积公理（对称性、正定性、双线性）
  - 函数空间的内积：⟨f, g⟩ = ∫ f(t)g(t) dt

### 📌 Chapter 7: 正交性、谱分解与 SVD (Orthogonality & SVD)
- **1. Orthogonality (正交性)**:
  - 范数 (Norm)、欧几里得距离、点积与正交
  - 勾股定理与柯西-施瓦茨/三角不等式
  - 正交基 (Orthogonal Basis) 与标准正交基 (Orthonormal Basis)
- **2. Gram-Schmidt 正交化**: 构造标准正交基的算法与 QR 分解
- **3. Orthogonal Complement (正交补空间)**: (Col A)ᵧ = Null(Aᵀ)
- **4. Orthogonal Projection (正交投影)**:
  - 向量投影到直线与子空间
  - 投影矩阵推导：P = A (Aᵀ A)⁻¹ Aᵀ
  - 最佳逼近定理 (Closest Vector Property)
- **5. Least Squares Approximation (最小二乘法)**:
  - 不相容方程 Ax = b 的最小二乘解：Aᵀ Ax̂ = Aᵀ b
  - 线性回归 (Linear Regression) 与数据多项式拟合
- **6. Orthogonal Matrices (正交矩阵)**: Qᵀ Q = I，保持长度与角度不变（刚体几何变换）
- **7. Symmetric Matrices & Spectral Decomposition (对称矩阵与谱分解)**:
  - 实对称矩阵特征值必为实数，不同特征值对应的特征向量必正交
  - 对称矩阵必可正交对角化：A = QDQᵀ = ∑ λᵢ qᵢ qᵢᵀ
- **8. SVD 奇异值分解 (Singular Value Decomposition)**:
  - 任意矩阵全能分解：A = U Σ Vᵀ
  - 奇异值与特征值的联系 (Aᵀ A 与 A Aᵀ)
  - 截断 SVD 低秩逼近 (Low-Rank Approximation) 与图像压缩/降维

---

## 💻 编程作业与上机实验 (Hands-on Homeworks)

课程配套了 7 次结合工程与算法的实践实验（基于 Python / Google Colab）：

| 序号 | 实验专题 (Topic) | 核心算法与涉及知识点 |
| :--- | :--- | :--- |
| **HW0** | **Colab Tutorial** | Python / NumPy 向量与矩阵基础运算、广播机制与环境配置 |
| **HW1** | **Cycle Detection** | 有向图邻接矩阵表示、矩阵乘幂与图的环路检测 |
| **HW2** | **Hill Cipher (希尔密码)** | 矩阵乘法、模逆矩阵与经典密码学编解码 |
| **HW3** | **Cosine Transform (离散余弦变换)** | 正交基变换、频域能量集中与图像压缩 (JPEG 核心基石) |
| **HW4** | **PageRank** | 随机游走转移概率矩阵、马尔可夫链稳态、主特征向量与幂迭代法 |
| **HW5** | **Linear Regression (最小二乘拟合)** | 正交投影矩阵、正规方程组推导、过拟合与数据回归分析 |
| **HW6** | **SVD for Image Compression** | 奇异值分解截断、低秩矩阵逼近与图像有损压缩实验 |

---

## 💡 2022 前沿与精华专题 (2022 Essence)

- 🤖 **AlphaTensor 专题**: DeepMind 强化学习突破人类 50 年极限发现的新型快速矩阵相乘算法。
- 💬 **ChatGPT 专题**: 利用大语言模型探讨解答线性代数历年考题、概念推导与代数运算局限性。
- 🎯 **期中与专题总复习**:
  - Review CH4: 坐标系转换与特征值/特征向量的联系串讲
  - Review Diagonalization: 对角化条件与可对角化矩阵判定
  - Review Orthogonal & Projection: 正交几何与投影矩阵结构深度解析

---

## 🚀 本地运行与快速开始 (Quickstart)

本项目为原生 HTML5 + Vanilla CSS + JavaScript 静态 Web 应用，无需配置 Node.js 或复杂编译环境。

### 方式一：直接在浏览器打开
双击项目根目录下的 `index.html` 即可在本地浏览器中开始学习。

### 方式二：使用静态 Web 服务器 (推荐)
```bash
# 进入项目根目录
cd N01_LinearAlgebraTutorial

# 启动 Python 静态服务
python3 -m http.server 8000
```
然后在浏览器访问 `http://localhost:8000` 即可浏览。

---

## 🌐 部署至 GitHub Pages (Deployment)

项目已内置 GitHub Actions 工作流文件 (`.github/workflows/static.yml`)。
只需将代码推送到 GitHub 的 `main` 分支并在 Repository 设置中启用 **GitHub Pages** (Source: GitHub Actions)，即可自动发布上线。

---

## 📄 开源许可证 (License)

本项目基于 [MIT License](LICENSE) 协议开源。欢迎自由学习、分享与交流。
