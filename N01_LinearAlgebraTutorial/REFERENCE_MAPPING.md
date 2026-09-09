# N01_LinearAlgebraTutorial 与 References/LA2022Fall 完整对应关系对照表

本文档建立了 `N01_LinearAlgebraTutorial/` 目录下全部 **39 个 HTML 交互课件** 与 `References/LA2022Fall/` 目录下全部 **84 个讲义与练习题 PDF** 的双向精确映射关系。

---

## 目录
1. [第一部分：按 HTML 课件结构索引 (共 39 个 HTML 文件)](#第一部分按-html-课件结构索引)
   - [Chapter 1: 线性方程组与向量 (6 个课件)](#chapter-1-线性方程组与向量)
   - [Chapter 2: 矩阵运算与逆矩阵 (2 个课件)](#chapter-2-矩阵运算与逆矩阵)
   - [Chapter 3: 行列式 (4 个课件)](#chapter-3-行列式)
   - [Chapter 4: 空间、基底与坐标系 (6 个课件)](#chapter-4-空间基底与坐标系)
   - [Chapter 5: 特征值与对角化 (6 个课件)](#chapter-5-特征值与对角化)
   - [Chapter 6: 抽象向量空间与内积空间 (2 个课件)](#chapter-6-抽象向量空间与内积空间)
   - [Chapter 7: 正交性、谱分解与 SVD (4 个课件)](#chapter-7-正交性谱分解与-svd)
   - [综合大模块 (Module 1 ~ Module 8) 与主页 (9 个课件)](#综合大模块-module-1--module-8-与主页)
2. [第二部分：按 PDF 讲义编号索引 (共 84 个 PDF 文件)](#第二部分按-pdf-讲义编号索引)

---

## 第一部分：按 HTML 课件结构索引

### Chapter 1: 线性方程组与向量

| 序号 | HTML 教程文件 | 章节主题 | 对应 PDF 讲义 / 练习题 | 核心覆盖知识点 |
| :--- | :--- | :--- | :--- | :--- |
| 1 | [ch1_1_linear_system.html](ch1_1_linear_system.html) | Ch 1.1: 线性系统与微积分算子 | [`08_Ch01_01_linear.pdf`](../References/LA2022Fall/08_Ch01_01_linear.pdf)<br>[`09_Ch01_02_other_course.pdf`](../References/LA2022Fall/09_Ch01_02_other_course.pdf)<br>[`10_Ch01_03_overview.pdf`](../References/LA2022Fall/10_Ch01_03_overview.pdf) | 线性系统的齐次性与可加性、叠加原理、导数与积分算子的线性本质、课程全局概览 |
| 2 | [ch1_2_vector.html](ch1_2_vector.html) | Ch 1.2: 向量、几何法则与点积 | [`11_Ch01_04_vector.pdf`](../References/LA2022Fall/11_Ch01_04_vector.pdf) | 几何位移箭头、向量加法平行四边形法则、标量数乘缩放、点积几何与代数初探 |
| 3 | [ch1_3_system_of_equations.html](ch1_3_system_of_equations.html) | Ch 1.3: 线性方程组的行与列视角 | [`02_ESSENCE_01_System_of_Linear_Equations.pdf`](../References/LA2022Fall/02_ESSENCE_01_System_of_Linear_Equations.pdf)<br>[`12_Ch01_05_equation.pdf`](../References/LA2022Fall/12_Ch01_05_equation.pdf) | 线性方程组的一般形式、行图 (超平面相交) 与列图 (列向量线性组合) 的双重视角对照 |
| 4 | [ch1_4_matrix.html](ch1_4_matrix.html) | Ch 1.4: 矩阵概念与 Ax=b 列组合视角 | [`13_Ch01_06_matrix.pdf`](../References/LA2022Fall/13_Ch01_06_matrix.pdf)<br>[`14_Ch01_07_matrix_name.pdf`](../References/LA2022Fall/14_Ch01_07_matrix_name.pdf)<br>[`15_Ch01_08_product.pdf`](../References/LA2022Fall/15_Ch01_08_product.pdf)<br>[`16_Ch01_09_product_property.pdf`](../References/LA2022Fall/16_Ch01_09_product_property.pdf) | 矩阵定义、特殊矩阵命名、矩阵乘向量 Ax 的列组合本质、矩阵向量乘积的线性分配律 |
| 5 | [ch1_5_solution.html](ch1_5_solution.html) | Ch 1.5: 相容性与解集几何结构 (x=xp+xn) | [`17_Ch01_10_solution.pdf`](../References/LA2022Fall/17_Ch01_10_solution.pdf)<br>[`27_Ch01_17_find_solution.pdf`](../References/LA2022Fall/27_Ch01_17_find_solution.pdf)<br>[`29_Ch01_19_RREF_solution.pdf`](../References/LA2022Fall/29_Ch01_19_RREF_solution.pdf)<br>[`30_Ch01_20_RREF_solution_example.pdf`](../References/LA2022Fall/30_Ch01_20_RREF_solution_example.pdf)<br>[`35_Ch01_24_always_consistent.pdf`](../References/LA2022Fall/35_Ch01_24_always_consistent.pdf) | 解的三种可能（唯一解/无解/无穷解）、特解加齐次通解 x = x_p + x_n 的仿射平移结构、满行秩方程恒相容定理 |
| 6 | [ch1_6_rref.html](ch1_6_rref.html) | Ch 1.6: 高斯消元、RREF 与列对应定理 | [`25_Ch01_15_rank.pdf`](../References/LA2022Fall/25_Ch01_15_rank.pdf)<br>[`26_Ch01_16_history.pdf`](../References/LA2022Fall/26_Ch01_16_history.pdf)<br>[`28_Ch01_18_RREF.pdf`](../References/LA2022Fall/28_Ch01_18_RREF.pdf)<br>[`31_Ch01_Exercise_1-4.pdf`](../References/LA2022Fall/31_Ch01_Exercise_1-4.pdf)<br>[`32_Ch01_21_column_correspondence.pdf`](../References/LA2022Fall/32_Ch01_21_column_correspondence.pdf)<br>[`33_Ch01_22_pivot_independent.pdf`](../References/LA2022Fall/33_Ch01_22_pivot_independent.pdf)<br>[`34_Ch01_23_definition_of_rank.pdf`](../References/LA2022Fall/34_Ch01_23_definition_of_rank.pdf) | 三类初等行变换、高斯-若尔当消元、简化行阶梯形 RREF 唯一性、主元列与自由变量、列对应定理 (CCT)、矩阵秩 Rank 的定义 |

---

### Chapter 2: 矩阵运算与逆矩阵

| 序号 | HTML 教程文件 | 章节主题 | 对应 PDF 讲义 / 练习题 | 核心覆盖知识点 |
| :--- | :--- | :--- | :--- | :--- |
| 7 | [ch2_1_matrix_multiplication.html](ch2_1_matrix_multiplication.html) | Ch 2.1: 矩阵乘法 4 大视角与几何变换 | [`03_ESSENCE_02_AlphaTensor.pdf`](../References/LA2022Fall/03_ESSENCE_02_AlphaTensor.pdf)<br>[`36_Ch02_01_multiplication_basic.pdf`](../References/LA2022Fall/36_Ch02_01_multiplication_basic.pdf)<br>[`37_Ch02_02_multiplication_meaning.pdf`](../References/LA2022Fall/37_Ch02_02_multiplication_meaning.pdf)<br>[`38_Ch02_Exercise_2-1_Oct08.pdf`](../References/LA2022Fall/38_Ch02_Exercise_2-1_Oct08.pdf)<br>[`39_Ch02_03_multiplication_property.pdf`](../References/LA2022Fall/39_Ch02_03_multiplication_property.pdf)<br>[`40_Ch02_Exercise_2-1_Oct15.pdf`](../References/LA2022Fall/40_Ch02_Exercise_2-1_Oct15.pdf) | 矩阵乘法 4 大视角（点积/列组合/外积原子和/分块）、复合几何变换网格扭曲、结合律与不可交换性、DeepMind AlphaTensor 算法 |
| 8 | [ch2_2_matrix_inverse.html](ch2_2_matrix_inverse.html) | Ch 2.2: 逆矩阵、初等矩阵与可逆等价定理 | [`41_Ch02_04_inverse.pdf`](../References/LA2022Fall/41_Ch02_04_inverse.pdf)<br>[`42_Ch02_05_inverse_application.pdf`](../References/LA2022Fall/42_Ch02_05_inverse_application.pdf)<br>[`43_Ch02_06_invertible.pdf`](../References/LA2022Fall/43_Ch02_06_invertible.pdf)<br>[`44_Ch02_07_invertible_proof.pdf`](../References/LA2022Fall/44_Ch02_07_invertible_proof.pdf)<br>[`45_Ch02_08_inverse_elementary.pdf`](../References/LA2022Fall/45_Ch02_08_inverse_elementary.pdf)<br>[`46_Ch02_Exercise_2-3.pdf`](../References/LA2022Fall/46_Ch02_Exercise_2-3.pdf)<br>[`47_Ch02_09_inverse_general.pdf`](../References/LA2022Fall/47_Ch02_09_inverse_general.pdf)<br>[`48_Ch02_Exercise_2-4.pdf`](../References/LA2022Fall/48_Ch02_Exercise_2-4.pdf) | 逆矩阵定义、初等矩阵 E、增广消元法 [A \| I] → [I \| A⁻¹]、可逆矩阵十大等价定理 (IMT)、单边逆等价双边逆证明、密码学与方程求解 |

---

### Chapter 3: 行列式

| 序号 | HTML 教程文件 | 章节主题 | 对应 PDF 讲义 / 练习题 | 核心覆盖知识点 |
| :--- | :--- | :--- | :--- | :--- |
| 9 | [ch3_1_determinant.html](ch3_1_determinant.html) | Ch 3.1: 行列式几何体积与余子式展开 | [`56_Ch03_01_det.pdf`](../References/LA2022Fall/56_Ch03_01_det.pdf)<br>[`57_Ch03_02_det_basic_property.pdf`](../References/LA2022Fall/57_Ch03_02_det_basic_property.pdf)<br>[`59_Ch03_04_det_more_property.pdf`](../References/LA2022Fall/59_Ch03_04_det_more_property.pdf)<br>[`60_Ch03_05_Chapter_3_Review.pdf`](../References/LA2022Fall/60_Ch03_05_Chapter_3_Review.pdf) | 有向面积与超体积缩放因子、初等行变换对行列式的影响、拉普拉斯代数余子式展开、乘积性质 det(AB) = det(A)det(B) 与 det(Aᵀ) = det(A) |
| 10 | [ch3_1_supplement_geometric_foundations.html](ch3_1_supplement_geometric_foundations.html) | 拓展 1: 行列式几何底蕴：二维面积推导、减法直觉与法向量构造 | [`56_Ch03_01_det.pdf`](../References/LA2022Fall/56_Ch03_01_det.pdf)<br>[`57_Ch03_02_det_basic_property.pdf`](../References/LA2022Fall/57_Ch03_02_det_basic_property.pdf) | 二维面积公式 ad - bc 的几何切割推导、有向面积正负号右手定则、正交法向量与外积关联 |
| 11 | [ch3_1_supplement_leibniz_formula.html](ch3_1_supplement_leibniz_formula.html) | 拓展 2: 行列式莱布尼茨公式、几何体积与本质意义 | [`56_Ch03_01_det.pdf`](../References/LA2022Fall/56_Ch03_01_det.pdf)<br>[`59_Ch03_04_det_more_property.pdf`](../References/LA2022Fall/59_Ch03_04_det_more_property.pdf) | 全排列逆序数 sgn(σ)、莱布尼茨全展开公式、几何多线性完全交错反对称形式 |
| 12 | [ch3_2_cramer_applications.html](ch3_2_cramer_applications.html) | Ch 3.2: 伴随矩阵求逆与克莱姆法则 | [`04_ESSENCE_03_期中考總複習_2022.pdf`](../References/LA2022Fall/04_ESSENCE_03_期中考總複習_2022.pdf)<br>[`58_Ch03_03_cramers_rule.pdf`](../References/LA2022Fall/58_Ch03_03_cramers_rule.pdf)<br>[`61_Ch03_06_期中考總複習.pdf`](../References/LA2022Fall/61_Ch03_06_期中考總複習.pdf) | 经典伴随矩阵 adj(A)、逆矩阵解析式 A⁻¹ = (1/det A) adj(A)、克莱姆法则 (Cramer's Rule)、期中考典型真题与题型梳理 |

---

### Chapter 4: 空间、基底与坐标系

| 序号 | HTML 教程文件 | 章节主题 | 对应 PDF 讲义 / 练习题 | 核心覆盖知识点 |
| :--- | :--- | :--- | :--- | :--- |
| 13 | [ch4_1_span_independence.html](ch4_1_span_independence.html) | Ch 4.1: 张成空间 (Span) 与线性无关判定 | [`18_Ch01_11_combination.pdf`](../References/LA2022Fall/18_Ch01_11_combination.pdf) ~ [`20_Ch01_13_more_span.pdf`](../References/LA2022Fall/20_Ch01_13_more_span.pdf)<br>[`21_Ch01_Exercise_1-6.pdf`](../References/LA2022Fall/21_Ch01_Exercise_1-6.pdf)<br>[`22_Ch01_14_independent.pdf`](../References/LA2022Fall/22_Ch01_14_independent.pdf)<br>[`23_Ch01_Exercise_1-7.pdf`](../References/LA2022Fall/23_Ch01_Exercise_1-7.pdf)<br>[`24_Ch01_Exercise_1-7-2.pdf`](../References/LA2022Fall/24_Ch01_Exercise_1-7-2.pdf) | 向量线性组合、Span 的空间形态、线性无关的齐次零解判据、冗余向量剔除定理 |
| 14 | [ch4_2_linear_transformation.html](ch4_2_linear_transformation.html) | Ch 4.2: 线性变换、几何映射与网格扭曲 | [`37_Ch02_02_multiplication_meaning.pdf`](../References/LA2022Fall/37_Ch02_02_multiplication_meaning.pdf)<br>[`65_Ch04_07_change_function.pdf`](../References/LA2022Fall/65_Ch04_07_change_function.pdf) | 线性变换严格定义、基底象向量拼装标准矩阵 [T] = [T(e₁) ... T(e_n)]、旋转/缩放/反射/剪切四大基本变换 |
| 15 | [ch4_3_subspaces_rank.html](ch4_3_subspaces_rank.html) | Ch 4.3: 子空间与四大基本子空间剖析 | [`49_Ch04_01_subspace.pdf`](../References/LA2022Fall/49_Ch04_01_subspace.pdf)<br>[`50_Ch04_Exercise_4-1.pdf`](../References/LA2022Fall/50_Ch04_Exercise_4-1.pdf)<br>[`54_Ch04_04_column_space_row_space_dim.pdf`](../References/LA2022Fall/54_Ch04_04_column_space_row_space_dim.pdf)<br>[`55_Ch04_Exercise_4-3.pdf`](../References/LA2022Fall/55_Ch04_Exercise_4-3.pdf) | 向量子空间三步准则（零元/加法封闭/数乘封闭）、四大基本子空间：Col(A)、Row(A)、Null(A)、Null(Aᵀ) |
| 16 | [ch4_4_basis_dimension.html](ch4_4_basis_dimension.html) | Ch 4.4: 基底、维数定理与秩-零度定理 | [`51_Ch04_02_basis_theorem.pdf`](../References/LA2022Fall/51_Ch04_02_basis_theorem.pdf)<br>[`52_Ch04_03_check_basis.pdf`](../References/LA2022Fall/52_Ch04_03_check_basis.pdf)<br>[`53_Ch04_Exercise_4-2.pdf`](../References/LA2022Fall/53_Ch04_Exercise_4-2.pdf)<br>[`54_Ch04_04_column_space_row_space_dim.pdf`](../References/LA2022Fall/54_Ch04_04_column_space_row_space_dim.pdf) | 基底的两大本质（极大无关组 + 极小生成集）、基定理、维数不变性、秩-零度定理 (rank + nullity = n) |
| 17 | [ch4_5_coordinate_system.html](ch4_5_coordinate_system.html) | Ch 4.5: 坐标系统、基坐标与基变换矩阵 | [`05_ESSENCE_04_Review_CH4_Coordinate_System.pdf`](../References/LA2022Fall/05_ESSENCE_04_Review_CH4_Coordinate_System.pdf)<br>[`62_Ch04_05_idea_of_coordinate_system.pdf`](../References/LA2022Fall/62_Ch04_05_idea_of_coordinate_system.pdf)<br>[`63_Ch04_06_change_coordinate.pdf`](../References/LA2022Fall/63_Ch04_06_change_coordinate.pdf)<br>[`64_Ch04_Exercise_4-4.pdf`](../References/LA2022Fall/64_Ch04_Exercise_4-4.pdf) | 相对坐标系哲学视角、坐标向量 [x]ᵦ、过渡矩阵 P_{C←B} 构造与性质、不同基底之间坐标无损转换 |
| 18 | [ch4_6_operator_matrix.html](ch4_6_operator_matrix.html) | Ch 4.6: 算子矩阵化、相似变换与微积分算子 | [`65_Ch04_07_change_function.pdf`](../References/LA2022Fall/65_Ch04_07_change_function.pdf)<br>[`66_Ch04_Exercise_4-5.pdf`](../References/LA2022Fall/66_Ch04_Exercise_4-5.pdf) | 线性算子在非标准基下的矩阵表示 [T]ᵦ、相似矩阵变换 B = P⁻¹AP、相似不变量定理、多项式求导算子矩阵化 |

---

### Chapter 5: 特征值与对角化

| 序号 | HTML 教程文件 | 章节主题 | 对应 PDF 讲义 / 练习题 | 核心覆盖知识点 |
| :--- | :--- | :--- | :--- | :--- |
| 19 | [ch5_1_eigenvalues_eigenvectors.html](ch5_1_eigenvalues_eigenvectors.html) | Ch 5.1: 特征值与特征向量几何直觉与求解 | [`67_Ch05_01_eigen.pdf`](../References/LA2022Fall/67_Ch05_01_eigen.pdf)<br>[`68_Ch05_Exercise_5-1.pdf`](../References/LA2022Fall/68_Ch05_Exercise_5-1.pdf) | 特征方程 Av = λv 几何主轴直觉、特征子空间 Null(A - λI) 求解、五大经典几何变换特征值解析 |
| 20 | [ch5_1_supplement_complex_numbers_foundation.html](ch5_1_supplement_complex_numbers_foundation.html) | 拓展 1: 高中数学复数完全基石指南 | [`67_Ch05_01_eigen.pdf`](../References/LA2022Fall/67_Ch05_01_eigen.pdf) (复特征值数学基础) | 虚数单位 i、复数代数运算、复平面极坐标表示、欧拉公式 e^(iθ) 与旋转变换复特征值 |
| 21 | [ch5_1_supplement_fundamental_theorem_of_algebra.html](ch5_1_supplement_fundamental_theorem_of_algebra.html) | 拓展 2: 代数基本定理：复数域代数闭包与特征值必然存在性 | [`67_Ch05_01_eigen.pdf`](../References/LA2022Fall/67_Ch05_01_eigen.pdf)<br>[`69_Ch05_Exercise_5-2-1.pdf`](../References/LA2022Fall/69_Ch05_Exercise_5-2-1.pdf) | 复数域代数闭包、多项式必有复根、3D 模长鞍面直观证明、保证 n 阶实矩阵必定存在 n 个复特征值 |
| 22 | [ch5_2_characteristic_polynomial.html](ch5_2_characteristic_polynomial.html) | Ch 5.2: 特征多项式、代数/几何重数与相似性 | [`69_Ch05_Exercise_5-2-1.pdf`](../References/LA2022Fall/69_Ch05_Exercise_5-2-1.pdf)<br>[`70_Ch05_Exercise_5-2-2.pdf`](../References/LA2022Fall/70_Ch05_Exercise_5-2-2.pdf) | 特征多项式 det(λI - A) = 0、代数重数 (AM) 与几何重数 (GM)、不等式 1 ≤ GM ≤ AM 严格证明、亏损矩阵与对角化失效 |
| 23 | [ch5_3_pagerank.html](ch5_3_pagerank.html) | Ch 5.3: PageRank 网页排名算法与马尔可夫稳态 | [`71_Ch05_02_PageRank.pdf`](../References/LA2022Fall/71_Ch05_02_PageRank.pdf) | 网络拓扑图、随机马尔可夫转移矩阵、主特征值 λ = 1 稳态分布、Perron-Frobenius 定理、阻尼因子与随机游走 |
| 24 | [ch5_4_diagonalization.html](ch5_4_diagonalization.html) | Ch 5.4: 矩阵对角化 A=PDP⁻¹ 与高阶幂应用 | [`72_Ch05_03_diagonalization.pdf`](../References/LA2022Fall/72_Ch05_03_diagonalization.pdf)<br>[`73_Ch05_Exercise_5-3.pdf`](../References/LA2022Fall/73_Ch05_Exercise_5-3.pdf)<br>[`74_Ch05_04_Chapter_5_Review.pdf`](../References/LA2022Fall/74_Ch05_04_Chapter_5_Review.pdf) | 矩阵可对角化充要条件（n 个线性无关特征向量）、A = PDP⁻¹ 坐标解耦、极速计算高阶矩阵幂 A^k、斐波那契离散系统求解 |

---

### Chapter 6: 抽象向量空间与内积空间

| 序号 | HTML 教程文件 | 章节主题 | 对应 PDF 讲义 / 练习题 | 核心覆盖知识点 |
| :--- | :--- | :--- | :--- | :--- |
| 25 | [ch6_1_vector_space_isomorphism.html](ch6_1_vector_space_isomorphism.html) | Ch 6.1: 抽象向量空间 8 大公理与同构定理 | [`83_Ch06_01_beyond_vector.pdf`](../References/LA2022Fall/83_Ch06_01_beyond_vector.pdf) (Slide 1~35) | 2 大封闭性前提、8 大代数公理、子空间 6 题检验套件、无迹矩阵生成集、多项式与无穷维空间概念 (dim P = ∞)、多项式与指数函数无关性检验 (Vandermonde)、转置/求导/积分算子核与值域、同构基本定理 V ≅ ℝⁿ、求导矩阵求逆算反导数（不定积分）、求导算子与转置算子特征值 |
| 26 | [ch6_2_inner_product_space.html](ch6_2_inner_product_space.html) | Ch 6.2: 抽象内积空间与傅里叶级数分解 | [`83_Ch06_01_beyond_vector.pdf`](../References/LA2022Fall/83_Ch06_01_beyond_vector.pdf) (Slide 36~44) | 实与复内积公理系统、内积反例 ⟨f, g⟩ = f(0)g(0) 正定性击穿、区间 [-1, 1] 积分内积与奇偶正交性、Gram-Schmidt 正交化构造勒让德多项式族、模长平方计算 ‖v₃‖² = 8/45、单位正交基 q₁, q₂, q₃、傅里叶级数无穷维正交投影、帕塞瓦尔能量守恒恒等式 |

---

### Chapter 7: 正交性、谱分解与 SVD

| 序号 | HTML 教程文件 | 章节主题 | 对应 PDF 讲义 / 练习题 | 核心覆盖知识点 |
| :--- | :--- | :--- | :--- | :--- |
| 27 | [ch7_1_orthogonality_gram_schmidt.html](ch7_1_orthogonality_gram_schmidt.html) | Ch 7.1: 正交性、Gram-Schmidt 正交化与 QR | [`06_ESSENCE_05_Review_Orthogonal.pdf`](../References/LA2022Fall/06_ESSENCE_05_Review_Orthogonal.pdf)<br>[`75_Ch07_01_orthogonality.pdf`](../References/LA2022Fall/75_Ch07_01_orthogonality.pdf)<br>[`76_Ch07_02_orthogonal_basis.pdf`](../References/LA2022Fall/76_Ch07_02_orthogonal_basis.pdf)<br>[`78_Ch07_Exercise_7-3.pdf`](../References/LA2022Fall/78_Ch07_Exercise_7-3.pdf) | 向量长度与范数公理、转置伴随点积 (Au)·v = u·(Aᵀv)、平行四边形恒等式、柯西-施瓦茨不等式严密证明、正交基坐标公式、Gram-Schmidt 归纳法严密证明、矩阵 QR 分解 (A = QR) |
| 28 | [ch7_2_projection_least_squares.html](ch7_2_projection_least_squares.html) | Ch 7.2: 正交投影矩阵与最小二乘法回归 | [`75_Ch07_01_orthogonality.pdf`](../References/LA2022Fall/75_Ch07_01_orthogonality.pdf)<br>[`77_Ch07_03_orthogonal_projection.pdf`](../References/LA2022Fall/77_Ch07_03_orthogonal_projection.pdf)<br>[`78_Ch07_Exercise_7-3.pdf`](../References/LA2022Fall/78_Ch07_Exercise_7-3.pdf)<br>[`79_Ch07_Exercise_7-4.pdf`](../References/LA2022Fall/79_Ch07_Exercise_7-4.pdf) | 正交补空间 W^⊥ 性质群（子空间性/自反性/维数互补）、四大基本子空间垂直互补定理、投影算子矩阵 P = C(CᵀC)⁻¹Cᵀ、投影矩阵性质 P²=P=Pᵀ、Householder 镜像反射 Q = 2P - I、最小二乘法正规方程 AᵀAx̂ = Aᵀb |
| 29 | [ch7_3_spectral_decomposition.html](ch7_3_spectral_decomposition.html) | Ch 7.3: 实对称矩阵正交对角化与谱分解 | [`80_Ch07_04_special_matrix.pdf`](../References/LA2022Fall/80_Ch07_04_special_matrix.pdf)<br>[`81_Ch07_Exercise_7-5.pdf`](../References/LA2022Fall/81_Ch07_Exercise_7-5.pdf) | 正交矩阵 Q 的 7 大充要判据、实对称矩阵谱定理（特征值恒实、特征向量正交、必定可正交对角化 A=QDQᵀ）、外积谱分解 A = ∑ λᵢ qᵢqᵢᵀ、投影原子四大定律、正定矩阵判别、AᵀA 恒半正定定理 |
| 30 | [ch7_4_svd_low_rank.html](ch7_4_svd_low_rank.html) | Ch 7.4: 奇异值分解 SVD、伪逆与图像低秩压缩 | [`82_Ch07_05_SVD.pdf`](../References/LA2022Fall/82_Ch07_05_SVD.pdf) | 奇异值定义 σᵢ = √(λᵢ(AᵀA))、SVD 定理 A = UΣVᵀ 构造性严密证明、旋转拉伸几何意义、完全 SVD 与紧致 SVD、Eckart-Young-Mirsky 最优低秩截断定理、摩尔-彭罗斯广义逆 A⁺ 计算与应用 |

---

### 综合大模块 (Module 1 ~ Module 8) 与主页

| 序号 | HTML 教程文件 | 章节主题 | 覆盖的 PDF 讲义全集 | 模块定位与核心目标 |
| :--- | :--- | :--- | :--- | :--- |
| 31 | [index.html](index.html) | 线性代数课程全景主页与导航中心 | [`01_Policy.pdf`](../References/LA2022Fall/01_Policy.pdf)<br>[`07_ESSENCE_06_ChatGPT解線性代數考古題.pdf`](../References/LA2022Fall/07_ESSENCE_06_ChatGPT解線性代數考古題.pdf)<br>[`09_Ch01_02_other_course.pdf`](../References/LA2022Fall/09_Ch01_02_other_course.pdf)<br>[`10_Ch01_03_overview.pdf`](../References/LA2022Fall/10_Ch01_03_overview.pdf)<br>[`26_Ch01_16_history.pdf`](../References/LA2022Fall/26_Ch01_16_history.pdf)<br>[`84_HW0_Google_Colab_Tutorial.pdf`](../References/LA2022Fall/84_HW0_Google_Colab_Tutorial.pdf) | 课程大纲、知识图谱导航、学习路线规划、历史演进导读与 Colab 计算实验环境入口 |
| 32 | [module1_vectors_linear_systems.html](module1_vectors_linear_systems.html) | 模块一：向量、线性组合与张成空间 (Span) | [`02_ESSENCE_01_System_of_Linear_Equations.pdf`](../References/LA2022Fall/02_ESSENCE_01_System_of_Linear_Equations.pdf)<br>[`08_Ch01_01_linear.pdf`](../References/LA2022Fall/08_Ch01_01_linear.pdf) ~ [`16_Ch01_09_product_property.pdf`](../References/LA2022Fall/16_Ch01_09_product_property.pdf)<br>[`18_Ch01_11_combination.pdf`](../References/LA2022Fall/18_Ch01_11_combination.pdf) ~ [`24_Ch01_Exercise_1-7-2.pdf`](../References/LA2022Fall/24_Ch01_Exercise_1-7-2.pdf) | 向量代数、几何箭头、线性组合、行图/列图、Span 与线性无关判定大综合沉浸式体验 |
| 33 | [module2_rref_solutions_rank.html](module2_rref_solutions_rank.html) | 模块二：线性方程组求解、RREF 与列对应定理 | [`17_Ch01_10_solution.pdf`](../References/LA2022Fall/17_Ch01_10_solution.pdf)<br>[`25_Ch01_15_rank.pdf`](../References/LA2022Fall/25_Ch01_15_rank.pdf)<br>[`27_Ch01_17_find_solution.pdf`](../References/LA2022Fall/27_Ch01_17_find_solution.pdf) ~ [`35_Ch01_24_always_consistent.pdf`](../References/LA2022Fall/35_Ch01_24_always_consistent.pdf) | 高斯消元流程、RREF 唯一性、主元提取基底、列对应定理、通解结构大综合交互演练 |
| 34 | [module3_matrix_transforms_inverse.html](module3_matrix_transforms_inverse.html) | 模块三：矩阵四大视角、几何变换与可逆大一统定理 | [`03_ESSENCE_02_AlphaTensor.pdf`](../References/LA2022Fall/03_ESSENCE_02_AlphaTensor.pdf)<br>[`36_Ch02_01_multiplication_basic.pdf`](../References/LA2022Fall/36_Ch02_01_multiplication_basic.pdf) ~ [`48_Ch02_Exercise_2-4.pdf`](../References/LA2022Fall/48_Ch02_Exercise_2-4.pdf) | 矩阵乘法四大视角、几何空间网格扭曲、初等矩阵行变换求逆、可逆矩阵十大等价定理大综合 |
| 35 | [module4_subspaces_basis_dimension.html](module4_subspaces_basis_dimension.html) | 模块四：子空间、基 (Basis) 与四大基本子空间 | [`49_Ch04_01_subspace.pdf`](../References/LA2022Fall/49_Ch04_01_subspace.pdf) ~ [`55_Ch04_Exercise_4-3.pdf`](../References/LA2022Fall/55_Ch04_Exercise_4-3.pdf) | 子空间三步判定、极大无关组与极小生成集、四大基本子空间关联与秩-零度定理综合演练 |
| 36 | [module5_determinant_cramer.html](module5_determinant_cramer.html) | 模块五：行列式体积缩放、余子式展开与克莱姆法则 | [`04_ESSENCE_03_期中考總複習_2022.pdf`](../References/LA2022Fall/04_ESSENCE_03_期中考總複習_2022.pdf)<br>[`56_Ch03_01_det.pdf`](../References/LA2022Fall/56_Ch03_01_det.pdf) ~ [`61_Ch03_06_期中考總複習.pdf`](../References/LA2022Fall/61_Ch03_06_期中考總複習.pdf) | 行列式几何体积缩放、行变换性质、伴随矩阵、克莱姆法则与期中考高频真题大通关 |
| 37 | [module6_coordinates_transforms.html](module6_coordinates_transforms.html) | 模块六：坐标系统、基变换矩阵与线性算子表示 | [`05_ESSENCE_04_Review_CH4_Coordinate_System.pdf`](../References/LA2022Fall/05_ESSENCE_04_Review_CH4_Coordinate_System.pdf)<br>[`62_Ch04_05_idea_of_coordinate_system.pdf`](../References/LA2022Fall/62_Ch04_05_idea_of_coordinate_system.pdf) ~ [`66_Ch04_Exercise_4-5.pdf`](../References/LA2022Fall/66_Ch04_Exercise_4-5.pdf) | 坐标系变换过渡矩阵 P、线性算子矩阵化、相似矩阵变换 B = P⁻¹AP 与微积分算子大综合 |
| 38 | [module7_eigenvalues_diagonalization.html](module7_eigenvalues_diagonalization.html) | 模块七：特征值、特征向量、Google PageRank 与矩阵对角化 | [`67_Ch05_01_eigen.pdf`](../References/LA2022Fall/67_Ch05_01_eigen.pdf) ~ [`74_Ch05_04_Chapter_5_Review.pdf`](../References/LA2022Fall/74_Ch05_04_Chapter_5_Review.pdf) | 特征值几何主轴、重数不等式、Google 网页排名稳态转移矩阵与矩阵高阶幂对角化大综合 |
| 39 | [module8_orthogonality_svd_beyond.html](module8_orthogonality_svd_beyond.html) | 模块八：正交投影、奇异值分解 (SVD) 与超越向量空间 | [`06_ESSENCE_05_Review_Orthogonal.pdf`](../References/LA2022Fall/06_ESSENCE_05_Review_Orthogonal.pdf)<br>[`75_Ch07_01_orthogonality.pdf`](../References/LA2022Fall/75_Ch07_01_orthogonality.pdf) ~ [`83_Ch06_01_beyond_vector.pdf`](../References/LA2022Fall/83_Ch06_01_beyond_vector.pdf) | 正交补、Gram-Schmidt、最小二乘法、对称谱定理、SVD 奇异值分解与公理化抽象向量空间收官大综合 |

---

## 第二部分：按 PDF 讲义编号索引

| PDF 编号与文件名 | 讲义主要内容与知识模块 | 主对应 HTML 课件 | 次要/综合模块对应 |
| :--- | :--- | :--- | :--- |
| `01_Policy.pdf` | 课程评分机制、教学日程与学术规范 | [index.html](index.html) | - |
| `02_ESSENCE_01_System_of_Linear_Equations.pdf` | 线性方程组核心思想与行/列视角本质 | [ch1_3_system_of_equations.html](ch1_3_system_of_equations.html) | [module1](module1_vectors_linear_systems.html) |
| `03_ESSENCE_02_AlphaTensor.pdf` | DeepMind AlphaTensor 发现全新快速矩阵乘法算法 | [ch2_1_matrix_multiplication.html](ch2_1_matrix_multiplication.html) | [module3](module3_matrix_transforms_inverse.html) |
| `04_ESSENCE_03_期中考總複習_2022.pdf` | 2022 期中考全景题型梳理 (Ch1 ~ Ch4) | [ch3_2_cramer_applications.html](ch3_2_cramer_applications.html) | [module5](module5_determinant_cramer.html) |
| `05_ESSENCE_04_Review_CH4_Coordinate_System.pdf` | 第四章坐标系与基变换深度复习 | [ch4_5_coordinate_system.html](ch4_5_coordinate_system.html) | [module6](module6_coordinates_transforms.html) |
| `06_ESSENCE_05_Review_Orthogonal.pdf` | 第七章正交性与内积空间期末复习专题 | [ch7_1_orthogonality_gram_schmidt.html](ch7_1_orthogonality_gram_schmidt.html) | [module8](module8_orthogonality_svd_beyond.html) |
| `07_ESSENCE_06_ChatGPT解線性代數考古題.pdf` | AI 与大语言模型解答线性代数历年期末题实测 | [index.html](index.html) | - |
| `08_Ch01_01_linear.pdf` | 线性代数第一课：线性系统的概念与特征 | [ch1_1_linear_system.html](ch1_1_linear_system.html) | [module1](module1_vectors_linear_systems.html) |
| `09_Ch01_02_other_course.pdf` | 线性代数在计算机图形、控制论、AI 中的前驱作用 | [ch1_1_linear_system.html](ch1_1_linear_system.html) | [index.html](index.html) |
| `10_Ch01_03_overview.pdf` | 课程全局鸟瞰：从向量到矩阵再到抽象空间 | [ch1_1_linear_system.html](ch1_1_linear_system.html) | [index.html](index.html) |
| `11_Ch01_04_vector.pdf` | 向量表示法：几何箭头、代数数组与平行四边形加法 | [ch1_2_vector.html](ch1_2_vector.html) | [module1](module1_vectors_linear_systems.html) |
| `12_Ch01_05_equation.pdf` | 线性方程组的一般代数形式与几何交集解释 | [ch1_3_system_of_equations.html](ch1_3_system_of_equations.html) | [module1](module1_vectors_linear_systems.html) |
| `13_Ch01_06_matrix.pdf` | 矩阵定义：行列维度、元素记法与数据表格模型 | [ch1_4_matrix.html](ch1_4_matrix.html) | [module1](module1_vectors_linear_systems.html) |
| `14_Ch01_07_matrix_name.pdf` | 特殊矩阵词典：对角阵、三角阵、对称阵、单位阵 | [ch1_4_matrix.html](ch1_4_matrix.html) | [module1](module1_vectors_linear_systems.html) |
| `15_Ch01_08_product.pdf` | 矩阵向量积 Ax：列向量的线性组合 | [ch1_4_matrix.html](ch1_4_matrix.html) | [module1](module1_vectors_linear_systems.html) |
| `16_Ch01_09_product_property.pdf` | 矩阵乘向量的线性性质：A(u+v)=Au+Av 与 A(cu)=c(Au) | [ch1_4_matrix.html](ch1_4_matrix.html) | [module1](module1_vectors_linear_systems.html) |
| `17_Ch01_10_solution.pdf` | 线性方程组解的分类：唯一解、无解与无穷多解 | [ch1_5_solution.html](ch1_5_solution.html) | [module2](module2_rref_solutions_rank.html) |
| `18_Ch01_11_combination.pdf` | 向量线性组合 (Linear Combination) 严格定义 | [ch4_1_span_independence.html](ch4_1_span_independence.html) | [module1](module1_vectors_linear_systems.html) |
| `19_Ch01_12_span.pdf` | 张成空间 Span 的几何本质：从点延伸出线与面 | [ch4_1_span_independence.html](ch4_1_span_independence.html) | [module1](module1_vectors_linear_systems.html) |
| `20_Ch01_13_more_span.pdf` | 深入 Span：方程 Ax=b 有解当且仅当 b 在 Col(A) 中 | [ch4_1_span_independence.html](ch4_1_span_independence.html) | [module1](module1_vectors_linear_systems.html) |
| `21_Ch01_Exercise_1-6.pdf` | 课后练习 1.6：线性组合与生成集判定题解 | [ch4_1_span_independence.html](ch4_1_span_independence.html) | [module1](module1_vectors_linear_systems.html) |
| `22_Ch01_14_independent.pdf` | 线性无关 (Linear Independence) 的齐次解充要判据 | [ch4_1_span_independence.html](ch4_1_span_independence.html) | [module1](module1_vectors_linear_systems.html) |
| `23_Ch01_Exercise_1-7.pdf` | 课后练习 1.7 (第一部分)：线性相关/无关检验演练 | [ch4_1_span_independence.html](ch4_1_span_independence.html) | [module1](module1_vectors_linear_systems.html) |
| `24_Ch01_Exercise_1-7-2.pdf` | 课后练习 1.7 (第二部分)：包含参数方程的无关性判定 | [ch4_1_span_independence.html](ch4_1_span_independence.html) | [module1](module1_vectors_linear_systems.html) |
| `25_Ch01_15_rank.pdf` | 矩阵的秩 (Rank)：有效独立方程与自由度 | [ch1_6_rref.html](ch1_6_rref.html) | [module2](module2_rref_solutions_rank.html) |
| `26_Ch01_16_history.pdf` | 历史渊源：九章算术与高斯消元法的演进脉络 | [ch1_6_rref.html](ch1_6_rref.html) | [index.html](index.html) |
| `27_Ch01_17_find_solution.pdf` | 系统求解线性方程组的高斯消元通用步骤 | [ch1_6_rref.html](ch1_6_rref.html) | [module2](module2_rref_solutions_rank.html) |
| `28_Ch01_18_RREF.pdf` | 简化行阶梯形 (RREF) 的四条严格条件与唯一性 | [ch1_6_rref.html](ch1_6_rref.html) | [module2](module2_rref_solutions_rank.html) |
| `29_Ch01_19_RREF_solution.pdf` | 由 RREF 回代导出解集向量参数化方程 (xp + s v₁ + ...) | [ch1_5_solution.html](ch1_5_solution.html) | [module2](module2_rref_solutions_rank.html) |
| `30_Ch01_20_RREF_solution_example.pdf` | RREF 求解大型非方阵方程组手算实战范例 | [ch1_5_solution.html](ch1_5_solution.html) | [module2](module2_rref_solutions_rank.html) |
| `31_Ch01_Exercise_1-4.pdf` | 课后练习 1.4：行化简为 RREF 及解方程专项训练 | [ch1_6_rref.html](ch1_6_rref.html) | [module2](module2_rref_solutions_rank.html) |
| `32_Ch01_21_column_correspondence.pdf` | 列对应定理 (Column Correspondence Theorem, CCT) | [ch1_6_rref.html](ch1_6_rref.html) | [module2](module2_rref_solutions_rank.html) |
| `33_Ch01_22_pivot_independent.pdf` | 为什么主元列 (Pivot Columns) 必定构成列空间的基底 | [ch1_6_rref.html](ch1_6_rref.html) | [module2](module2_rref_solutions_rank.html) |
| `34_Ch01_23_definition_of_rank.pdf` | 矩阵秩的严密数学定义：主元列数量与维数映射 | [ch1_6_rref.html](ch1_6_rref.html) | [module2](module2_rref_solutions_rank.html) |
| `35_Ch01_24_always_consistent.pdf` | 满行秩 (Full Row Rank) 矩阵与方程恒相容定理 | [ch1_5_solution.html](ch1_5_solution.html) | [module2](module2_rref_solutions_rank.html) |
| `36_Ch02_01_multiplication_basic.pdf` | 矩阵乘法第一讲：基本行列点积定义与相容尺寸规则 | [ch2_1_matrix_multiplication.html](ch2_1_matrix_multiplication.html) | [module3](module3_matrix_transforms_inverse.html) |
| `37_Ch02_02_multiplication_meaning.pdf` | 矩阵乘法几何意义：复合变换与坐标网格连续拉伸 | [ch2_1_matrix_multiplication.html](ch2_1_matrix_multiplication.html) | [module3](module3_matrix_transforms_inverse.html) |
| `38_Ch02_Exercise_2-1_Oct08.pdf` | 课后练习 2.1 (10月08日版本)：矩阵乘法计算题集 | [ch2_1_matrix_multiplication.html](ch2_1_matrix_multiplication.html) | [module3](module3_matrix_transforms_inverse.html) |
| `39_Ch02_03_multiplication_property.pdf` | 矩阵乘法代数性质：结合律成立、交换律破损、零因子现象 | [ch2_1_matrix_multiplication.html](ch2_1_matrix_multiplication.html) | [module3](module3_matrix_transforms_inverse.html) |
| `40_Ch02_Exercise_2-1_Oct15.pdf` | 课后练习 2.1 (10月15日进阶版本)：乘法性质证明题 | [ch2_1_matrix_multiplication.html](ch2_1_matrix_multiplication.html) | [module3](module3_matrix_transforms_inverse.html) |
| `41_Ch02_04_inverse.pdf` | 逆矩阵概念：方阵的乘法逆元与恒等变换复原 | [ch2_2_matrix_inverse.html](ch2_2_matrix_inverse.html) | [module3](module3_matrix_transforms_inverse.html) |
| `42_Ch02_05_inverse_application.pdf` | 逆矩阵的应用：Hill 密码学加解密与解多元方程组 | [ch2_2_matrix_inverse.html](ch2_2_matrix_inverse.html) | [module3](module3_matrix_transforms_inverse.html) |
| `43_Ch02_06_invertible.pdf` | 可逆性判据：可逆矩阵 (Invertible) 与奇异矩阵 (Singular) | [ch2_2_matrix_inverse.html](ch2_2_matrix_inverse.html) | [module3](module3_matrix_transforms_inverse.html) |
| `44_Ch02_07_invertible_proof.pdf` | 可逆矩阵单边逆等于双边逆的严格代数推导 | [ch2_2_matrix_inverse.html](ch2_2_matrix_inverse.html) | [module3](module3_matrix_transforms_inverse.html) |
| `45_Ch02_08_inverse_elementary.pdf` | 初等矩阵 (Elementary Matrix)：行变换的矩阵算子表示 | [ch2_2_matrix_inverse.html](ch2_2_matrix_inverse.html) | [module3](module3_matrix_transforms_inverse.html) |
| `46_Ch02_Exercise_2-3.pdf` | 课后练习 2.3：初等矩阵分解与矩阵乘积求逆训练 | [ch2_2_matrix_inverse.html](ch2_2_matrix_inverse.html) | [module3](module3_matrix_transforms_inverse.html) |
| `47_Ch02_09_inverse_general.pdf` | 高斯-若尔当增广求逆法：[A \| I] 化简为 [I \| A⁻¹] | [ch2_2_matrix_inverse.html](ch2_2_matrix_inverse.html) | [module3](module3_matrix_transforms_inverse.html) |
| `48_Ch02_Exercise_2-4.pdf` | 课后练习 2.4：高阶方阵求逆与可逆等价综合题 | [ch2_2_matrix_inverse.html](ch2_2_matrix_inverse.html) | [module3](module3_matrix_transforms_inverse.html) |
| `49_Ch04_01_subspace.pdf` | 向量子空间 (Subspace)：三步检验法与几何模型 | [ch4_3_subspaces_rank.html](ch4_3_subspaces_rank.html) | [module4](module4_subspaces_basis_dimension.html) |
| `50_Ch04_Exercise_4-1.pdf` | 课后练习 4.1：子空间判定经典例题与反例诊断 | [ch4_3_subspaces_rank.html](ch4_3_subspaces_rank.html) | [module4](module4_subspaces_basis_dimension.html) |
| `51_Ch04_02_basis_theorem.pdf` | 基定理 (Basis Theorem)：无冗余生成集与基底唯一维数 | [ch4_4_basis_dimension.html](ch4_4_basis_dimension.html) | [module4](module4_subspaces_basis_dimension.html) |
| `52_Ch04_03_check_basis.pdf` | 如何检验一组候选向量是否构成给定子空间的基底 | [ch4_4_basis_dimension.html](ch4_4_basis_dimension.html) | [module4](module4_subspaces_basis_dimension.html) |
| `53_Ch04_Exercise_4-2.pdf` | 课后练习 4.2：基底提取与维数计算深度演练 | [ch4_4_basis_dimension.html](ch4_4_basis_dimension.html) | [module4](module4_subspaces_basis_dimension.html) |
| `54_Ch04_04_column_space_row_space_dim.pdf` | 列空间与行空间同维定理：dim Col(A) = dim Row(A) = rank(A) | [ch4_3_subspaces_rank.html](ch4_3_subspaces_rank.html) | [ch4_4](ch4_4_basis_dimension.html) |
| `55_Ch04_Exercise_4-3.pdf` | 课后练习 4.3：四大基本子空间基底与秩定理综合题 | [ch4_3_subspaces_rank.html](ch4_3_subspaces_rank.html) | [module4](module4_subspaces_basis_dimension.html) |
| `56_Ch03_01_det.pdf` | 行列式几何第一讲：2D 面积、3D 体积与拉普拉斯展开 | [ch3_1_determinant.html](ch3_1_determinant.html) | [拓展1](ch3_1_supplement_geometric_foundations.html) |
| `57_Ch03_02_det_basic_property.pdf` | 行列式基本运算性质：交换行变号、倍加不变、数乘提出 | [ch3_1_determinant.html](ch3_1_determinant.html) | [module5](module5_determinant_cramer.html) |
| `58_Ch03_03_cramers_rule.pdf` | 克莱姆法则 (Cramer's Rule)：用行列式比值精确解方程 | [ch3_2_cramer_applications.html](ch3_2_cramer_applications.html) | [module5](module5_determinant_cramer.html) |
| `59_Ch03_04_det_more_property.pdf` | 行列式高阶定理：det(AB) = det(A)det(B) 与 det(Aᵀ) = det(A) | [ch3_1_determinant.html](ch3_1_determinant.html) | [拓展2](ch3_1_supplement_leibniz_formula.html) |
| `60_Ch03_05_Chapter_3_Review.pdf` | 第三章行列式全章复习与核心公式速查卡 | [ch3_1_determinant.html](ch3_1_determinant.html) | [ch3_2](ch3_2_cramer_applications.html) |
| `61_Ch03_06_期中考總複習.pdf` | 期中考全真题大讲评 (聚焦行列式与子空间大题) | [ch3_2_cramer_applications.html](ch3_2_cramer_applications.html) | [module5](module5_determinant_cramer.html) |
| `62_Ch04_05_idea_of_coordinate_system.pdf` | 坐标系统哲学：基底就是我们观察空间的一副特定眼镜 | [ch4_5_coordinate_system.html](ch4_5_coordinate_system.html) | [module6](module6_coordinates_transforms.html) |
| `63_Ch04_06_change_coordinate.pdf` | 基变换过渡矩阵 P_{C←B}：坐标转换标准流程 | [ch4_5_coordinate_system.html](ch4_5_coordinate_system.html) | [module6](module6_coordinates_transforms.html) |
| `64_Ch04_Exercise_4-4.pdf` | 课后练习 4.4：不同基坐标转换计算题精解 | [ch4_5_coordinate_system.html](ch4_5_coordinate_system.html) | [module6](module6_coordinates_transforms.html) |
| `65_Ch04_07_change_function.pdf` | 线性算子矩阵化：[T]ᵦ 与基变换下的相似变换 B = P⁻¹AP | [ch4_6_operator_matrix.html](ch4_6_operator_matrix.html) | [module6](module6_coordinates_transforms.html) |
| `66_Ch04_Exercise_4-5.pdf` | 课后练习 4.5：算子矩阵化与几何变换相似性演练 | [ch4_6_operator_matrix.html](ch4_6_operator_matrix.html) | [module6](module6_coordinates_transforms.html) |
| `67_Ch05_01_eigen.pdf` | 特征值与特征向量定义：伸缩因子与特征空间求解 | [ch5_1_eigenvalues_eigenvectors.html](ch5_1_eigenvalues_eigenvectors.html) | [module7](module7_eigenvalues_diagonalization.html) |
| `68_Ch05_Exercise_5-1.pdf` | 课后练习 5.1：特征值与特征向量基础求解练习 | [ch5_1_eigenvalues_eigenvectors.html](ch5_1_eigenvalues_eigenvectors.html) | [module7](module7_eigenvalues_diagonalization.html) |
| `69_Ch05_Exercise_5-2-1.pdf` | 课后练习 5.2 (第一部分)：特征多项式因式分解求根 | [ch5_2_characteristic_polynomial.html](ch5_2_characteristic_polynomial.html) | [module7](module7_eigenvalues_diagonalization.html) |
| `70_Ch05_Exercise_5-2-2.pdf` | 课后练习 5.2 (第二部分)：代数重数与几何重数比较 | [ch5_2_characteristic_polynomial.html](ch5_2_characteristic_polynomial.html) | [module7](module7_eigenvalues_diagonalization.html) |
| `71_Ch05_02_PageRank.pdf` | Google 网页排名算法：马尔可夫链稳态与主特征向量求解 | [ch5_3_pagerank.html](ch5_3_pagerank.html) | [module7](module7_eigenvalues_diagonalization.html) |
| `72_Ch05_03_diagonalization.pdf` | 矩阵对角化 A=PDP⁻¹：充要条件与高阶矩阵幂快速算法 | [ch5_4_diagonalization.html](ch5_4_diagonalization.html) | [module7](module7_eigenvalues_diagonalization.html) |
| `73_Ch05_Exercise_5-3.pdf` | 课后练习 5.3：对角化应用与马尔可夫动态系统演练 | [ch5_4_diagonalization.html](ch5_4_diagonalization.html) | [module7](module7_eigenvalues_diagonalization.html) |
| `74_Ch05_04_Chapter_5_Review.pdf` | 第五章特征值与对角化全章复习与概念自测 | [ch5_4_diagonalization.html](ch5_4_diagonalization.html) | [module7](module7_eigenvalues_diagonalization.html) |
| `75_Ch07_01_orthogonality.pdf` | 正交性 (Orthogonality)、范数与内积公理、正交补空间 | [ch7_1_orthogonality_gram_schmidt.html](ch7_1_orthogonality_gram_schmidt.html) | [ch7_2](ch7_2_projection_least_squares.html) |
| `76_Ch07_02_orthogonal_basis.pdf` | 正交基、标准正交基与 Gram-Schmidt 算法全流程 | [ch7_1_orthogonality_gram_schmidt.html](ch7_1_orthogonality_gram_schmidt.html) | [module8](module8_orthogonality_svd_beyond.html) |
| `77_Ch07_03_orthogonal_projection.pdf` | 正交投影算子矩阵 P_W 与最小二乘法 (Least Squares) | [ch7_2_projection_least_squares.html](ch7_2_projection_least_squares.html) | [module8](module8_orthogonality_svd_beyond.html) |
| `78_Ch07_Exercise_7-3.pdf` | 课后练习 7.3：Gram-Schmidt 手算与正交基投影运算 | [ch7_1_orthogonality_gram_schmidt.html](ch7_1_orthogonality_gram_schmidt.html) | [ch7_2](ch7_2_projection_least_squares.html) |
| `79_Ch07_Exercise_7-4.pdf` | 课后练习 7.4：正交投影矩阵与最小二乘拟合回归练习 | [ch7_2_projection_least_squares.html](ch7_2_projection_least_squares.html) | [module8](module8_orthogonality_svd_beyond.html) |
| `80_Ch07_04_special_matrix.pdf` | 实对称矩阵谱定理、正交对角化 A=QDQᵀ 与二次型正定性 | [ch7_3_spectral_decomposition.html](ch7_3_spectral_decomposition.html) | [module8](module8_orthogonality_svd_beyond.html) |
| `81_Ch07_Exercise_7-5.pdf` | 课后练习 7.5：谱分解投影原子与正定矩阵特性证明 | [ch7_3_spectral_decomposition.html](ch7_3_spectral_decomposition.html) | [module8](module8_orthogonality_svd_beyond.html) |
| `82_Ch07_05_SVD.pdf` | 奇异值分解 SVD (A = UΣVᵀ)、最优低秩逼近与广义伪逆 | [ch7_4_svd_low_rank.html](ch7_4_svd_low_rank.html) | [module8](module8_orthogonality_svd_beyond.html) |
| `83_Ch06_01_beyond_vector.pdf` | 抽象向量空间 8 大公理、同构定理、多项式/求导算子矩阵化、函数内积与勒让德多项式 Gram-Schmidt | [ch6_1_vector_space_isomorphism.html](ch6_1_vector_space_isomorphism.html)<br>[ch6_2_inner_product_space.html](ch6_2_inner_product_space.html) | [module8](module8_orthogonality_svd_beyond.html) |
| `84_HW0_Google_Colab_Tutorial.pdf` | Python 与 Google Colab 实验作业配置指南 | [index.html](index.html) | - |
