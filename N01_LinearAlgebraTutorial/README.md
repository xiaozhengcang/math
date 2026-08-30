# LinearAlgebraTutorial 📐

> **面向初学者的 100% 穷尽式几何直觉、全定理推导与 Python 实战 Web 教程**
> 
> *An Interactive, Visual, and Mathematically Rigorous Linear Algebra Course based on NTU Prof. Hung-yi Lee's LA 2022 Fall Lectures.*

---

## 🌟 核心特色 (Key Features)

- 👁️ **几何直觉优先 (Geometric Intuition)**: 将矩阵乘法解读为空间网格扭曲，行列式解读为有向体积放缩率，特征向量解读为不旋转主轴，SVD 解读为旋转-拉伸-旋转三步曲。
- ✍️ **100% 穷尽式推导 (Full Proofs)**: 列对应定理 (Column Correspondence Theorem)、可逆矩阵 10 条件闭环定理、克莱姆法则、伴随矩阵公式、Cayley-Hamilton 定理、谱定理等均有严密无缝逻辑推导。
- 🌱 **生动且适合零基础 (Beginner Friendly)**: 从《九章算术》方程术引出高斯消元，使用“在 Span 耍废的 Vector”等比喻拆解抽象公理。
- 💻 **Python / NumPy 代码实战 (Python Labs)**: 每一个模块均配备工业级 `NumPy` 代码规范与例题验证（`linalg.solve`, `inv`, `qr`, `eig`, `svd`, `pinv` 等）。
- 🎨 **现代响应式 Dark/Light Web 界面**: 内置 MathJax 3 实时数学公式渲染、交互式 Visualizer 动态图形展现与主题切换。

---

## 🗺️ 课程模块路线图 (8 Major Modules)

```
[Module 1: 向量/矩阵与方程组] ---> [Module 2: 求解方程组/RREF/列对应定理] ---> [Module 3: 矩阵4大视角与可逆大一统]
                                                                                            |
[Module 6: 坐标系统与基变换] <--- [Module 5: 行列式体积与克莱姆法则] <--- [Module 4: 子空间/基与四大基本子空间]
       |
       v
[Module 7: 特征值/PageRank/对角化] ---> [Module 8: 正交投影/SVD与超越向量空间]
```

### 📚 8 大模块详细目录

| 模块 | 名称 | 主要内容与讲义覆盖 |
| :--- | :--- | :--- |
| **Module 01** | [向量、矩阵与线性方程组](module1_vectors_linear_systems.html) | 线性方程组定义、反例、向量点积几何意义、矩阵基本运算、$A\mathbf{x}$ 列组合视角 |
| **Module 02** | [求解方程组、RREF 与列对应定理](module2_rref_solutions_rank.html) | Span 空间、解结构 $\mathbf{x}=\mathbf{x}_p+\mathbf{x}_n$、高斯消元、RREF 唯一性、列对应定理推导 |
| **Module 03** | [矩阵四大视角与可逆大一统定理](module3_matrix_transforms_inverse.html) | 矩阵乘法 4 大视角、线性变换几何网格扭曲、初等矩阵与求逆、可逆矩阵 10 大条件闭环 |
| **Module 04** | [子空间、基与四大基本子空间](module4_subspaces_basis_dimension.html) | 子空间 3 条件、基与维数定理、四大基本子空间与秩-零化度定理 ($\text{rank}+\text{nullity}=n$) |
| **Module 05** | [行列式体积、余子式与克莱姆法则](module5_determinant_cramer.html) | Signed Volume 几何放缩率、3 大基本性质、余子式展开、伴随矩阵求逆与 Cramer's Rule |
| **Module 06** | [坐标系统与基变换矩阵](module6_coordinates_transforms.html) | 笛卡尔与非笛卡尔坐标转换、基变换矩阵 $P_{B\to C}$、$B=P^{-1}AP$ 算子变化、微积分算子矩阵化 |
| **Module 07** | [特征值、PageRank 与矩阵对角化](module7_eigenvalues_diagonalization.html) | 特征值/向量几何意义、特征多项式、PageRank 幂法算法、矩阵对角化 $A=PDP^{-1}$ 与 $A^k$ |
| **Module 08** | [正交投影、SVD 与超越向量空间](module8_orthogonality_svd_beyond.html) | Gram-Schmidt / QR 分解、正交投影 $P=A(A^TA)^{-1}A^T$、谱定理、SVD 分解与伪逆 $A^+$ |

---

## 🚀 本地运行与快速开始 (Quickstart)

本项目为原生 HTML5 + Vanilla CSS + JavaScript 静态 Web 应用，无需复杂的 Node.js 或构建工具。

### 方式一：直接在浏览器打开
双击项目根目录下的 `index.html` 即可在本地浏览器中开始学习。

### 方式二：使用静态 Web 服务器 (推荐)
对于 Python 环境：
```bash
# 进入项目根目录
cd LinearAlgebraTutorial

# 启动静态服务
python -m http.server 8000
```
然后在浏览器访问 `http://localhost:8000` 即可。

---

## 🌐 部署至 GitHub Pages (Deployment)

项目已内置 GitHub Actions 工作流文件 (`.github/workflows/static.yml`)。

只需将本项目推送到 GitHub 的 `main` 分支并在 Repository 设置中启用 **GitHub Pages** (Source: GitHub Actions)，即可实现自动编译与全球发布！

---

## 📄 开源许可证 (License)

本项目基于 [MIT License](LICENSE) 协议开源。欢迎自由学习、分享与二次开发。
