# Build section 1.4 HTML
section_1_4_html = '''            <!-- 讲义经典例题：三维平面投影矩阵计算 -->
            <div style="background: rgba(15, 23, 42, 0.5); padding: 1.25rem; border-radius: 8px; border: 1px solid var(--border-color); margin: 1rem 0;">
              <span style="color: var(--accent-purple); font-weight: bold;">📖 讲义经典例题：三维平面投影矩阵计算 (77_Ch07_03 Slide 21)</span>
              <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 0.4rem; line-height: 1.8;">
                设 $W$ 是 $\\mathbb{R}^3$ 中方程为 $x_1 - x_2 + 2x_3 = 0$ 的二维平面子空间。求其正交投影矩阵 $P_W$：<br>
                • 选取平面的一组基：令 $x_2 = 1, x_3 = 0 \\implies x_1 = 1$；令 $x_2 = 0, x_3 = 1 \\implies x_1 = -2$。构造矩阵 $C$：
                $$C = \\begin{bmatrix} 1 & -2 \\\\ 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$$
                • 计算 $C^T C$ 及其逆矩阵：
                $$C^T C = \\begin{bmatrix} 1 & 1 & 0 \\\\ -2 & 0 & 1 \\end{bmatrix} \\begin{bmatrix} 1 & -2 \\\\ 1 & 0 \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} 2 & -2 \\\\ -2 & 5 \\end{bmatrix} \\implies (C^T C)^{-1} = \\frac{1}{6} \\begin{bmatrix} 5 & 2 \\\\ 2 & 2 \\end{bmatrix}$$
                • 计算投影矩阵 $P_W = C (C^T C)^{-1} C^T$：
                $$P_W = \\frac{1}{6} \\begin{bmatrix} 1 & -2 \\\\ 1 & 0 \\\\ 0 & 1 \\end{bmatrix} \\begin{bmatrix} 5 & 2 \\\\ 2 & 2 \\end{bmatrix} \\begin{bmatrix} 1 & 1 & 0 \\\\ -2 & 0 & 1 \\end{bmatrix} = \\frac{1}{6} \\begin{bmatrix} 5 & 1 & -2 \\\\ 1 & 5 & 2 \\\\ -2 & 2 & 2 \\end{bmatrix}$$
                • 验证性质：显然 $P_W^T = P_W$，$\\text{tr}(P_W) = \\frac{5+5+2}{6} = 2 = \\dim W$！
              </p>
            </div>

            <!-- 1.4 深度几何显微镜：解构 P_W = C(C^T C)^{-1} C^T 的三大认知卡点与对偶基机制 -->
            <div style="margin-top: 2rem; border-top: 1px dashed rgba(56, 189, 248, 0.25); padding-top: 1.5rem;">
              <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                <span class="badge" style="background: var(--accent-purple); color: #fff; font-size: 0.75rem;">深度几何显微镜</span>
                <h3 style="color: var(--accent-purple); margin: 0; font-size: 1.25rem;">1.4 解构 $P_W = C(C^T C)^{-1} C^T$：三大认知卡点、对偶基解耦与跨领域映射</h3>
              </div>
              
              <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.8;">
                公式 $P_W = C(C^T C)^{-1} C^T$ 表面看起来只是一串矩阵连乘，但其背后蕴含着极其深刻的几何秩序。
                很多初学者学到这里都会产生三个普遍卡点：<strong>为什么不能直接把各基向量上的投影相加？Gram 矩阵求逆到底在几何上消除了什么？为什么“矩阵对称性”在几何上等价于“光线垂直下落”？</strong>
                下面我们逐一用几何显微镜剖析这三重核心机制。
              </p>

              <!-- 卡点一：为什么不能直接把各基向量上的投影相加？ -->
              <div class="theorem-box" style="margin: 1.25rem 0; padding: 1.25rem; background: rgba(239, 68, 68, 0.05); border-left: 4px solid #ef4444; border-radius: 6px;">
                <h4 style="color: #f87171; margin-bottom: 0.6rem;">🔬 核心症结一：为什么不能直接把各基向量上的投影相加？</h4>
                <p style="font-size: 0.88rem; line-height: 1.8; color: #f8fafc;">
                  假设子空间 $W$ 是一个由基底 $\\mathbf{c}_1, \\mathbf{c}_2$ 张成的二维平面。如果基底不是标准正交基，直接用点积 $\\mathbf{c}_1^T \\mathbf{b}$ 和 $\\mathbf{c}_2^T \\mathbf{b}$ 试图计算投影，会遭遇两个毁灭性的几何缺陷：
                </p>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin-top: 0.75rem;">
                  <div style="background: rgba(15, 23, 42, 0.6); padding: 1rem; border-radius: 6px; border: 1px solid rgba(239, 68, 68, 0.2);">
                    <strong style="color: #fca5a5;">1. 尺度污染 (Scale Distortion)</strong>
                    <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.3rem; line-height: 1.7;">
                      点积大小直接受向量模长操控：$\\mathbf{c}_i^T \\mathbf{b} = \\|\\mathbf{c}_i\\| \\|\\mathbf{b}\\| \\cos\\theta$。<br>
                      若仅仅将基向量 $\\mathbf{c}_1$ 的长度人为扩大 10 倍，点积数值就会暴增 10 倍，合成项 $(\\mathbf{c}_1^T \\mathbf{b})\\mathbf{c}_1$ 更是直接暴涨 100 倍！但几何子空间 $W = \\text{Span}\\{\\mathbf{c}_1, \\mathbf{c}_2\\}$ 本身从未发生任何改变。
                    </p>
                  </div>
                  <div style="background: rgba(15, 23, 42, 0.6); padding: 1rem; border-radius: 6px; border: 1px solid rgba(239, 68, 68, 0.2);">
                    <strong style="color: #fca5a5;">2. 夹角信息重复计算 (Crosstalk / 串扰)</strong>
                    <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.3rem; line-height: 1.7;">
                      若 $\\mathbf{c}_1$ 与 $\\mathbf{c}_2$ 夹角只有 $30^{\\circ}$，两基向量在方向上严重重叠。<br>
                      $\\mathbf{b}$ 在 $\\mathbf{c}_1$ 上的投影分量中，已经包含了大量沿 $\\mathbf{c}_2$ 方向的信息。若盲目进行线性相加：
                      $$\\tilde{\\mathbf{p}} = (\\mathbf{c}_1^T \\mathbf{b})\\mathbf{c}_1 + (\\mathbf{c}_2^T \\mathbf{b})\\mathbf{c}_2$$
                      这个粗糙合成向量会因为重复叠加重叠分量而被严重拉伸，远远偏离实际正交垂足位置！
                    </p>
                  </div>
                </div>
              </div>

              <!-- SVG 1: 非正交基串扰失真 vs 真实正交垂足 -->
              <div style="text-align:center; margin: 1.5rem 0;">
                <svg width="680" height="280" viewBox="0 0 680 280" style="background:#090d16; border-radius:8px; border:1px solid var(--border-color); max-width: 100%;">
                  <defs>
                    <pattern id="grid-crosstalk" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.025)" stroke-width="1"/>
                    </pattern>
                    <marker id="arr-red" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                      <polygon points="0 0, 7 3.5, 0 7" fill="#ef4444"/>
                    </marker>
                    <marker id="arr-blue" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                      <polygon points="0 0, 7 3.5, 0 7" fill="#38bdf8"/>
                    </marker>
                    <marker id="arr-green" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                      <polygon points="0 0, 7 3.5, 0 7" fill="#4ade80"/>
                    </marker>
                    <marker id="arr-white" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                      <polygon points="0 0, 7 3.5, 0 7" fill="#f8fafc"/>
                    </marker>
                  </defs>
                  <rect width="680" height="280" fill="url(#grid-crosstalk)"/>

                  <!-- Left Half: Naive Dot Product Addition (Error / Crosstalk) -->
                  <g transform="translate(10, 0)">
                    <rect x="20" y="14" width="290" height="26" rx="4" fill="rgba(239, 68, 68, 0.12)" stroke="rgba(239, 68, 68, 0.3)"/>
                    <text x="165" y="32" fill="#f87171" font-size="11.5" font-weight="bold" text-anchor="middle">❌ 错误做法：直接点积相加 (串扰与尺度失真)</text>

                    <!-- Origin O1 -->
                    <circle cx="50" cy="225" r="3.5" fill="#94a3b8"/>
                    <text x="38" y="240" fill="#94a3b8" font-size="11">O</text>

                    <!-- c1 and c2 -->
                    <line x1="50" y1="225" x2="190" y2="210" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arr-blue)"/>
                    <text x="195" y="215" fill="#38bdf8" font-size="12" font-weight="bold">c₁</text>

                    <line x1="50" y1="225" x2="150" y2="120" stroke="#38bdf8" stroke-width="2.5" marker-end="url(#arr-blue)"/>
                    <text x="155" y="115" fill="#38bdf8" font-size="12" font-weight="bold">c₂</text>

                    <!-- Arc between c1 and c2 -->
                    <path d="M 90,220 A 40,40 0 0,0 76,197" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
                    <text x="95" y="202" fill="#fbbf24" font-size="10">θ ≈ 35°</text>

                    <!-- Target vector b -->
                    <line x1="50" y1="225" x2="135" y2="155" stroke="#f8fafc" stroke-width="2" marker-end="url(#arr-white)"/>
                    <text x="100" y="160" fill="#f8fafc" font-size="12" font-weight="bold">目标 b</text>

                    <!-- Naive sum p_tilde stretches way out -->
                    <line x1="50" y1="225" x2="255" y2="125" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="5,3" marker-end="url(#arr-red)"/>
                    <circle cx="255" cy="125" r="4" fill="#ef4444"/>
                    <text x="190" y="105" fill="#fca5a5" font-size="11.5" font-weight="bold">p̃ = (c₁ᵀb)c₁ + (c₂ᵀb)c₂</text>
                    <text x="200" y="120" fill="#f87171" font-size="10">双重重叠分量，被严重拉伸！</text>

                    <!-- Parallelogram dash lines -->
                    <line x1="170" y1="212" x2="255" y2="125" stroke="#fca5a5" stroke-width="1" stroke-dasharray="3,3"/>
                    <line x1="135" y1="135" x2="255" y2="125" stroke="#fca5a5" stroke-width="1" stroke-dasharray="3,3"/>
                  </g>

                  <!-- Divider Line -->
                  <line x1="340" y1="20" x2="340" y2="260" stroke="rgba(255,255,255,0.1)" stroke-width="1" stroke-dasharray="4,4"/>

                  <!-- Right Half: (C^T C)^-1 Decoupled Projection (Precise / Orthogonal) -->
                  <g transform="translate(350, 0)">
                    <rect x="20" y="14" width="290" height="26" rx="4" fill="rgba(52, 211, 153, 0.12)" stroke="rgba(52, 211, 153, 0.3)"/>
                    <text x="165" y="32" fill="#4ade80" font-size="11.5" font-weight="bold" text-anchor="middle">✓ 正确做法：(CᵀC)⁻¹ 全局反向解耦 (无偏垂足)</text>

                    <!-- Origin O2 -->
                    <circle cx="50" cy="225" r="3.5" fill="#94a3b8"/>
                    <text x="38" y="240" fill="#94a3b8" font-size="11">O</text>

                    <!-- c1 and c2 -->
                    <line x1="50" y1="225" x2="190" y2="210" stroke="#38bdf8" stroke-width="2" marker-end="url(#arr-blue)"/>
                    <text x="195" y="215" fill="#38bdf8" font-size="12" font-weight="bold">c₁</text>

                    <line x1="50" y1="225" x2="150" y2="120" stroke="#38bdf8" stroke-width="2" marker-end="url(#arr-blue)"/>
                    <text x="155" y="115" fill="#38bdf8" font-size="12" font-weight="bold">c₂</text>

                    <!-- Target vector b -->
                    <line x1="50" y1="225" x2="135" y2="155" stroke="#f8fafc" stroke-width="2" marker-end="url(#arr-white)"/>
                    <text x="90" y="160" fill="#f8fafc" font-size="12" font-weight="bold">目标 b</text>

                    <!-- Oblique coordinate projection to find correct x̂1 c1 and x̂2 c2 -->
                    <line x1="95" y1="220" x2="135" y2="155" stroke="#4ade80" stroke-width="1.2" stroke-dasharray="3,3"/>
                    <line x1="90" y1="160" x2="135" y2="155" stroke="#4ade80" stroke-width="1.2" stroke-dasharray="3,3"/>

                    <!-- True projection vector p -->
                    <line x1="50" y1="225" x2="135" y2="155" stroke="#4ade80" stroke-width="3" marker-end="url(#arr-green)"/>
                    <circle cx="135" cy="155" r="4" fill="#4ade80"/>

                    <rect x="145" y="145" width="165" height="42" rx="4" fill="rgba(15,23,42,0.9)" stroke="rgba(52,211,153,0.3)"/>
                    <text x="152" y="162" fill="#4ade80" font-size="11" font-weight="bold">p = C(CᵀC)⁻¹Cᵀb</text>
                    <text x="152" y="178" fill="#94a3b8" font-size="9.5">消解串扰，回归无偏真实坐标！</text>
                  </g>
                </svg>
                <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.5rem;">
                  图 1.4.1: 非正交基下的尺度污染与串扰（左：直接点积合成 $\tilde{\mathbf{p}}$ 发生严重拉伸畸变；右：Gram 逆矩阵解耦后无偏还原）
                </div>
              </div>

              <!-- 卡点二：Gram 矩阵逆运算的本质：协变基到逆变基（对偶基） -->
              <div class="theorem-box" style="margin: 1.25rem 0; padding: 1.25rem; background: rgba(56, 189, 248, 0.05); border-left: 4px solid var(--accent-blue); border-radius: 6px;">
                <h4 style="color: var(--accent-blue); margin-bottom: 0.6rem;">🔬 核心症结二：Gram 矩阵 $(C^T C)^{-1}$ 的几何显微镜：从协变基到逆变基（对偶基）</h4>
                <p style="font-size: 0.88rem; line-height: 1.8; color: #f8fafc;">
                  方阵 $G = C^T C \\in \\mathbb{R}^{k \\times k}$ 称为 <strong>Gram 矩阵</strong>（在微分几何与张量分析中，它正是欧氏度量在离散基底下的<strong>度量张量 Metric Tensor</strong>）。其第 $i$ 行第 $j$ 列元素正是两基向量的内积 $G_{ij} = \\mathbf{c}_i^T \\mathbf{c}_j$：
                </p>
                <div style="font-size: 1.15rem; text-align: center; color: var(--accent-blue); margin: 0.6rem 0;">
                  $$G = C^T C = \\begin{bmatrix} \\|\\mathbf{c}_1\\|^2 & \\mathbf{c}_1 \\cdot \\mathbf{c}_2 \\\\ \\mathbf{c}_2 \\cdot \\mathbf{c}_1 & \\|\\mathbf{c}_2\\|^2 \\end{bmatrix}$$
                </div>
                <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.8;">
                  • <strong>对角线元素</strong>：精确记录了各基向量自身的<strong>模长平方</strong>（反映了各自的固有尺度）；<br>
                  • <strong>非对角线元素</strong>：精确量化了基向量之间的<strong>互相倾斜与串扰程度</strong>（$\\mathbf{c}_1 \\cdot \\mathbf{c}_2 = \\|\\mathbf{c}_1\\|\\|\\mathbf{c}_2\\|\\cos\\theta$）。
                </p>
                <div style="background: rgba(15, 23, 42, 0.6); padding: 1rem; border-radius: 6px; border: 1px solid rgba(56, 189, 248, 0.25); margin-top: 0.75rem;">
                  <strong style="color: var(--accent-green); font-size: 0.95rem;">💡 $(C^T C)^{-1}$ 的真正几何动作：构造对偶基 (Dual Basis / 逆变基)</strong>
                  <p style="font-size: 0.86rem; color: #f8fafc; margin-top: 0.4rem; line-height: 1.8;">
                    求逆运算 $(C^T C)^{-1}$ 绝不是孤立地缩放各个坐标轴，而是做了一次<strong>全局反向几何解耦</strong>！<br>
                    考察伪逆左乘算子 $C^{\\dagger} = (C^T C)^{-1} C^T \\in \\mathbb{R}^{k \\times n}$。若将 $C^\\dagger$ 的行向量记为 $\\mathbf{c}_1^*, \\mathbf{c}_2^*, \\dots, \\mathbf{c}_k^*$，根据定义：
                  </p>
                  <div style="font-size: 1.15rem; text-align: center; color: var(--accent-green); margin: 0.5rem 0;">
                    $$C^\\dagger C = (C^T C)^{-1} (C^T C) = I_k \\iff \\mathbf{c}_i^* \\cdot \\mathbf{c}_j = \\delta_{ij} = \\begin{cases} 1, & i = j \\\\ 0, & i \\ne j \\end{cases}$$
                  </div>
                  <p style="font-size: 0.86rem; color: var(--text-muted); line-height: 1.8;">
                    这组崭新的向量 $\\{\\mathbf{c}_i^*\\}$ 正是子空间 $W$ 的<strong>对偶基（Dual Basis / 逆变基）</strong>！这一性质蕴含着震撼的几何直觉：<br>
                    • 向量 $\\mathbf{c}_1^*$ <strong>严格垂直于除 $\\mathbf{c}_1$ 以外的所有基向量</strong>（在二维平面中即 $\\mathbf{c}_1^* \\perp \\mathbf{c}_2$）！<br>
                    • 因此，点积 $\\hat{x}_1 = \\mathbf{c}_1^* \\cdot \\mathbf{b}$ <strong>能够彻底过滤、屏蔽掉 $\\mathbf{c}_2$ 方向的所有干扰</strong>，精确测量出“必须沿着 $\\mathbf{c}_1$ 走多远”；<br>
                    • 正交投影算子因此拥有了无可挑剔的<strong>对偶基展开形式</strong>：
                  </p>
                  <div style="font-size: 1.2rem; text-align: center; color: #fbbf24; margin: 0.5rem 0;">
                    $$\\mathbf{p} = \\sum_{i=1}^k (\\mathbf{c}_i^* \\cdot \\mathbf{b}) \\mathbf{c}_i$$
                  </div>
                </div>
              </div>

              <!-- SVG 2: 对偶基与斜角网格解耦 -->
              <div style="text-align:center; margin: 1.5rem 0;">
                <svg width="680" height="280" viewBox="0 0 680 280" style="background:#090d16; border-radius:8px; border:1px solid var(--border-color); max-width: 100%;">
                  <defs>
                    <pattern id="grid-dual" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.025)" stroke-width="1"/>
                    </pattern>
                    <marker id="m-c1" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                      <polygon points="0 0, 7 3.5, 0 7" fill="#38bdf8"/>
                    </marker>
                    <marker id="m-c1-star" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                      <polygon points="0 0, 7 3.5, 0 7" fill="#fbbf24"/>
                    </marker>
                    <marker id="m-c2" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                      <polygon points="0 0, 7 3.5, 0 7" fill="#06b6d4"/>
                    </marker>
                    <marker id="m-c2-star" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                      <polygon points="0 0, 7 3.5, 0 7" fill="#c084fc"/>
                    </marker>
                    <marker id="m-vec-b" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                      <polygon points="0 0, 7 3.5, 0 7" fill="#f8fafc"/>
                    </marker>
                  </defs>
                  <rect width="680" height="280" fill="url(#grid-dual)"/>

                  <g transform="translate(100, 0)">
                    <!-- Grid guidelines / lines of c1 and c2 -->
                    <line x1="-30" y1="200" x2="280" y2="200" stroke="rgba(56, 189, 248, 0.2)" stroke-width="1" stroke-dasharray="4,4"/>
                    <line x1="-20" y1="270" x2="190" y2="60" stroke="rgba(6, 182, 212, 0.2)" stroke-width="1" stroke-dasharray="4,4"/>

                    <!-- Covariant Basis c1 along x-axis (length 150) -->
                    <line x1="50" y1="200" x2="200" y2="200" stroke="#38bdf8" stroke-width="3" marker-end="url(#m-c1)"/>
                    <text x="208" y="205" fill="#38bdf8" font-size="13" font-weight="bold">c₁ (原始基 1)</text>

                    <!-- Covariant Basis c2 tilted at 45 deg (dx=100, dy=-100) -->
                    <line x1="50" y1="200" x2="150" y2="100" stroke="#06b6d4" stroke-width="3" marker-end="url(#m-c2)"/>
                    <text x="155" y="95" fill="#06b6d4" font-size="13" font-weight="bold">c₂ (原始基 2)</text>

                    <!-- Dual Basis c2* : perpendicular to c1 (pointing straight up) -->
                    <line x1="50" y1="200" x2="50" y2="100" stroke="#c084fc" stroke-width="2.5" marker-end="url(#m-c2-star)"/>
                    <text x="5" y="95" fill="#c084fc" font-size="12" font-weight="bold">c₂* (对偶基 2)</text>

                    <!-- Right-angle symbol at origin between c2* and c1 -->
                    <rect x="50" y="185" width="15" height="15" fill="none" stroke="#c084fc" stroke-width="1.2"/>
                    <text x="68" y="195" fill="#c084fc" font-size="9">90° (c₂* ⊥ c₁)</text>

                    <!-- Dual Basis c1* : perpendicular to c2 (pointing down-right, dx=60, dy=60) -->
                    <line x1="50" y1="200" x2="110" y2="260" stroke="#fbbf24" stroke-width="2.5" marker-end="url(#m-c1-star)"/>
                    <text x="115" y="265" fill="#fbbf24" font-size="12" font-weight="bold">c₁* (对偶基 1)</text>

                    <!-- Right-angle symbol between c1* and c2 -->
                    <path d="M 60,190 L 70,200 L 60,210" fill="none" stroke="#fbbf24" stroke-width="1.2"/>
                    <text x="75" y="215" fill="#fbbf24" font-size="9">90° (c₁* ⊥ c₂)</text>

                    <!-- Target vector b: (220, 80) -->
                    <line x1="50" y1="200" x2="220" y2="80" stroke="#f8fafc" stroke-width="2.5" marker-end="url(#m-vec-b)"/>
                    <circle cx="220" cy="80" r="3.5" fill="#f8fafc"/>
                    <text x="228" y="80" fill="#f8fafc" font-size="13" font-weight="bold">目标 b</text>

                    <!-- Projection of b onto c2* (horizontal line to x=50, y=80) -->
                    <line x1="220" y1="80" x2="50" y2="80" stroke="#c084fc" stroke-width="1.5" stroke-dasharray="4,3"/>
                    <circle cx="50" cy="80" r="3" fill="#c084fc"/>
                    <text x="-48" y="75" fill="#c084fc" font-size="11">x̂₂ = c₂* · b</text>
                    <text x="-48" y="88" fill="#94a3b8" font-size="9">(完全过滤 c₁ 干扰)</text>

                    <!-- Explanation Box on the right -->
                    <rect x="250" y="115" width="290" height="115" rx="6" fill="rgba(15, 23, 42, 0.9)" stroke="rgba(56, 189, 248, 0.3)"/>
                    <text x="262" y="136" fill="#38bdf8" font-size="11.5" font-weight="bold">🎯 对偶基的核心几何绝技：</text>
                    <text x="262" y="156" fill="#f8fafc" font-size="10.5">• c₁* 垂直于 c₂ (c₁* · c₂ = 0)</text>
                    <text x="262" y="174" fill="#f8fafc" font-size="10.5">• c₂* 垂直于 c₁ (c₂* · c₁ = 0)</text>
                    <text x="262" y="192" fill="#4ade80" font-size="10.5">• 计算 x̂₁ = c₁* · b 时，c₂ 的分量被严格一刀切除！</text>
                    <text x="262" y="210" fill="#fbbf24" font-size="10.5">• 完美实现“斜角坐标系”下的无损独立测量</text>
                  </g>
                </svg>
                <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.5rem;">
                  图 1.4.2: 对偶基 $\mathbf{c}_1^*, \mathbf{c}_2^*$ 的几何解耦机制（$\mathbf{c}_1^* \perp \mathbf{c}_2$，投影测量时一刀切除串扰）
                </div>
              </div>

              <!-- 卡点三：为什么“对称性（P^T = P）”精确保证了“垂直下落”？ -->
              <div class="theorem-box" style="margin: 1.25rem 0; padding: 1.25rem; background: rgba(192, 132, 252, 0.05); border-left: 4px solid var(--accent-purple); border-radius: 6px;">
                <h4 style="color: var(--accent-purple); margin-bottom: 0.6rem;">🔬 核心症结三：为什么“对称性（$P^T = P$）”精确保证了“垂直下落”？</h4>
                <p style="font-size: 0.88rem; line-height: 1.8; color: #f8fafc;">
                  在代数上，只要满足幂等性 $P^2 = P$ 的方阵都是投影算子（例如斜向射入的阳光把电线杆投射在斜坡上，再投影一次阴影不再改变）。但<strong>为什么只有满足对称性 $P^T = P$ 时，投影线才必然垂直于平面（正交投影）？</strong>
                </p>
                <div style="font-size: 0.88rem; line-height: 1.9; color: #f8fafc; margin-top: 0.5rem;">
                  <p><strong>严密内积推导：自伴随算子与垂直残差的等价性</strong><br>
                    考察空间中任意两个向量 $\\mathbf{u}, \\mathbf{v} \\in \\mathbb{R}^n$。$P\\mathbf{u}$ 是落在子空间 $W$ 内的投影，而 $(I - P)\\mathbf{v}$ 是投向残差方向的向量。
                  </p>
                  <p style="color: var(--text-muted);">
                    1. <strong>定义正交性要求：</strong>按正交投影的物理几何定义，<strong>任何投影结果 $P\\mathbf{u} \\in W$ 必须垂直于任何残差 $(I - P)\\mathbf{v} \\in W^\\perp$</strong>：
                    $$(P\\mathbf{u})^T (I - P)\\mathbf{v} = 0 \\implies \\mathbf{u}^T P^T (I - P) \\mathbf{v} = 0$$
                  </p>
                  <p style="color: var(--text-muted);">
                    2. <strong>导出零矩阵条件：</strong>要使上式对全空间任意向量 $\\mathbf{u}, \\mathbf{v}$ 恒成立，内积核矩阵必须为零矩阵：
                    $$P^T (I - P) = \\mathbf{O} \\implies P^T - P^T P = \\mathbf{O} \\implies P^T = P^T P \\tag{A}$$
                  </p>
                  <p style="color: var(--text-muted);">
                    3. <strong>转置等价性：</strong>对等式 (A) 两边同时取转置矩阵：
                    $$(P^T)^T = (P^T P)^T \\implies P = P^T (P^T)^T \\implies P = P^T P \\tag{B}$$
                  </p>
                  <p style="color: var(--text-muted);">
                    4. <strong>联立导出对称性：</strong>比较等式 (A) 与等式 (B) 的右端，两者均为 $P^T P$，立即得出终极结论：
                    <div style="font-size: 1.25rem; text-align: center; color: var(--accent-green); margin: 0.4rem 0;">
                      $$P^T = P$$
                    </div>
                  </p>
                  <p style="color: #f8fafc;">
                    <strong>🎯 几何精髓总结：</strong><br>
                    • <strong>仅 $P^2 = P$</strong>：保证变换是<strong>“投影”</strong>（将高维全空间压扁至平面，平面内部点不动，但投影光线纤维 Fiber 可以任意斜着打）；<br>
                    • <strong>$P^2 = P$ 且 $P^T = P$</strong>：对称性在代数上锁死了内积的等价转移（自伴随算子 $\\langle P\\mathbf{u}, \\mathbf{v}\\rangle = \\langle \\mathbf{u}, P\\mathbf{v}\\rangle$），<strong>强制所有投射线（残差光束）与目标平面夹角锁死在严格的 $90^{\\circ}$ 直角！</strong>
                  </p>
                </div>
              </div>

              <!-- SVG 3: 正交投影 (P^T=P) vs 斜投影 (P^T != P) -->
              <div style="text-align:center; margin: 1.5rem 0;">
                <svg width="680" height="250" viewBox="0 0 680 250" style="background:#090d16; border-radius:8px; border:1px solid var(--border-color); max-width: 100%;">
                  <defs>
                    <pattern id="grid-proj" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.025)" stroke-width="1"/>
                    </pattern>
                    <marker id="arr-sub" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                      <polygon points="0 0, 7 3.5, 0 7" fill="#38bdf8"/>
                    </marker>
                    <marker id="arr-green3" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                      <polygon points="0 0, 7 3.5, 0 7" fill="#4ade80"/>
                    </marker>
                    <marker id="arr-rose3" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                      <polygon points="0 0, 7 3.5, 0 7" fill="#f43f5e"/>
                    </marker>
                  </defs>
                  <rect width="680" height="250" fill="url(#grid-proj)"/>

                  <!-- Left: Orthogonal Projection (P^T = P) -->
                  <g transform="translate(10, 0)">
                    <rect x="15" y="15" width="300" height="26" rx="4" fill="rgba(52, 211, 153, 0.12)" stroke="rgba(52, 211, 153, 0.3)"/>
                    <text x="165" y="32" fill="#4ade80" font-size="11.5" font-weight="bold" text-anchor="middle">正交投影 (Pᵀ = P)：光线垂直下落，距离绝对最短</text>

                    <!-- Subspace Line W -->
                    <line x1="30" y1="190" x2="300" y2="190" stroke="#38bdf8" stroke-width="2.5"/>
                    <text x="250" y="210" fill="#38bdf8" font-size="11" font-weight="bold">子空间 W</text>

                    <!-- Origin O -->
                    <circle cx="60" cy="190" r="3.5" fill="#f8fafc"/>
                    <text x="50" y="210" fill="#94a3b8" font-size="11">O</text>

                    <!-- Vector u -->
                    <line x1="60" y1="190" x2="190" y2="70" stroke="#f8fafc" stroke-width="2.5" marker-end="url(#arr-sub)"/>
                    <text x="110" y="120" fill="#f8fafc" font-size="12" font-weight="bold">向量 u</text>

                    <!-- Orthogonal drop to W at (190, 190) -->
                    <line x1="190" y1="70" x2="190" y2="190" stroke="#fbbf24" stroke-width="2" stroke-dasharray="4,3"/>
                    <text x="198" y="130" fill="#fbbf24" font-size="11" font-weight="bold">残差 e ⊥ W</text>

                    <!-- Right angle symbol at (190, 190) -->
                    <rect x="175" y="175" width="15" height="15" fill="none" stroke="#fbbf24" stroke-width="1.5"/>
                    <text x="178" y="186" fill="#fbbf24" font-size="8">90°</text>

                    <!-- Projection Pu -->
                    <line x1="60" y1="190" x2="190" y2="190" stroke="#4ade80" stroke-width="3.5" marker-end="url(#arr-green3)"/>
                    <circle cx="190" cy="190" r="4" fill="#4ade80"/>
                    <text x="110" y="210" fill="#4ade80" font-size="11" font-weight="bold">正交投影 Pu</text>

                    <text x="165" y="235" fill="#94a3b8" font-size="10" text-anchor="middle">对称性 Pᵀ = P 锁死垂直：‖u - Pu‖ 为欧氏全局最短！</text>
                  </g>

                  <!-- Divider -->
                  <line x1="340" y1="20" x2="340" y2="230" stroke="rgba(255,255,255,0.1)" stroke-width="1" stroke-dasharray="4,4"/>

                  <!-- Right: Oblique Projection (P^2 = P, but P^T != P) -->
                  <g transform="translate(350, 0)">
                    <rect x="15" y="15" width="300" height="26" rx="4" fill="rgba(244, 63, 94, 0.12)" stroke="rgba(244, 63, 94, 0.3)"/>
                    <text x="165" y="32" fill="#fb7185" font-size="11.5" font-weight="bold" text-anchor="middle">斜投影 (P² = P 但 Pᵀ ≠ P)：光线斜向打入，非最短</text>

                    <!-- Subspace Line W -->
                    <line x1="30" y1="190" x2="300" y2="190" stroke="#38bdf8" stroke-width="2.5"/>
                    <text x="250" y="210" fill="#38bdf8" font-size="11" font-weight="bold">子空间 W</text>

                    <!-- Origin O -->
                    <circle cx="60" cy="190" r="3.5" fill="#f8fafc"/>
                    <text x="50" y="210" fill="#94a3b8" font-size="11">O</text>

                    <!-- Vector u -->
                    <line x1="60" y1="190" x2="190" y2="70" stroke="#f8fafc" stroke-width="2.5" marker-end="url(#arr-sub)"/>
                    <text x="110" y="120" fill="#f8fafc" font-size="12" font-weight="bold">向量 u</text>

                    <!-- Oblique drop to W at (250, 190), slant angle ~60 deg -->
                    <line x1="190" y1="70" x2="250" y2="190" stroke="#f43f5e" stroke-width="2" stroke-dasharray="4,3"/>
                    <text x="230" y="125" fill="#f43f5e" font-size="11" font-weight="bold">残差 e ∦ ⊥ W</text>

                    <!-- Angle indicator (not 90 deg) -->
                    <path d="M 230,190 A 20,20 0 0,1 242,175" fill="none" stroke="#f43f5e" stroke-width="1.5"/>
                    <text x="205" y="180" fill="#f43f5e" font-size="9">θ ≠ 90°</text>

                    <!-- Oblique Projection Pu -->
                    <line x1="60" y1="190" x2="250" y2="190" stroke="#fb7185" stroke-width="3.5" marker-end="url(#arr-rose3)"/>
                    <circle cx="250" cy="190" r="4" fill="#fb7185"/>
                    <text x="140" y="210" fill="#fb7185" font-size="11" font-weight="bold">斜投影 Pu (P² = P)</text>

                    <text x="165" y="235" fill="#94a3b8" font-size="10" text-anchor="middle">非对称 Pᵀ ≠ P：虽满足投两次不变，但连线倾斜失真</text>
                  </g>
                </svg>
                <div style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.5rem;">
                  图 1.4.3: 正交投影与斜投影几何对比（左：垂直光线 $P^T = P$ 保证最短距离；右：倾斜光线 $P^T \ne P$ 残差不垂直）
                </div>
              </div>

              <!-- 跨领域物理映射表 -->
              <h4 style="color: var(--accent-green); margin-top: 1.75rem; margin-bottom: 0.75rem;">🌐 宏观升华：正交投影与跨领域的物理与工程映射全景</h4>
              <div style="overflow-x: auto; margin: 0.75rem 0;">
                <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; text-align: left;">
                  <thead>
                    <tr style="border-bottom: 2px solid var(--border-color); color: var(--text-muted);">
                      <th style="padding: 0.75rem;">应用领域</th>
                      <th style="padding: 0.75rem;">对应数学表达式</th>
                      <th style="padding: 0.75rem;">正交投影几何对应项</th>
                      <th style="padding: 0.75rem;">物理实质与工程直觉</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                      <td style="padding: 0.75rem; font-weight: bold; color: var(--accent-blue);">多元线性回归 (OLS)</td>
                      <td style="padding: 0.75rem; color: #38bdf8;">$\\hat{\\beta} = (X^T X)^{-1} X^T \\mathbf{y}$</td>
                      <td style="padding: 0.75rem;">垂足在特征列基底下的坐标 $\\hat{\\mathbf{x}}$</td>
                      <td style="padding: 0.75rem;">将含噪因变量投射到特征超平面，找到欧氏距离最近的最优解释权重。</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                      <td style="padding: 0.75rem; font-weight: bold; color: #fbbf24;">残差向量 (Residuals)</td>
                      <td style="padding: 0.75rem; color: #fde047;">$\\mathbf{e} = \\mathbf{y} - X\\hat{\\beta} = (I - P_X)\\mathbf{y}$</td>
                      <td style="padding: 0.75rem;">垂直垂线段自身（属于 $W^\\perp$）</td>
                      <td style="padding: 0.75rem;">模型无法捕获的高维垂直残差，与所有解释变量严格正交（信息无泄漏）。</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                      <td style="padding: 0.75rem; font-weight: bold; color: var(--accent-green);">信号处理 (Matched Filter)</td>
                      <td style="padding: 0.75rem; color: #4ade80;">$(R_{xx})^{-1} X^T \\mathbf{y}$（白化 + 匹配滤波）</td>
                      <td style="padding: 0.75rem;">Gram 逆矩阵消除通道相关性</td>
                      <td style="padding: 0.75rem;">消除传感器多通道之间的空间相关与噪声串扰，还原纯净源信号投影。</td>
                    </tr>
                    <tr>
                      <td style="padding: 0.75rem; font-weight: bold; color: var(--accent-purple);">量子力学 (Quantum State)</td>
                      <td style="padding: 0.75rem; color: #c084fc;">投影测量算符 $P = |\\psi\\rangle\\langle\\psi|$</td>
                      <td style="padding: 0.75rem;">一维子空间外积投影 $\\frac{\\mathbf{a}\\mathbf{a}^T}{\\mathbf{a}^T\\mathbf{a}}$</td>
                      <td style="padding: 0.75rem;">波函数在测量基底上的坍缩投影，测量概率等于投影向量长度平方。</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>'''

with open('ch7_2_projection_least_squares.html', 'r', encoding='utf-8') as f:
    orig = f.read()

target = '''            <!-- 讲义经典例题：三维平面投影矩阵计算 -->
            <div style="background: rgba(15, 23, 42, 0.5); padding: 1.25rem; border-radius: 8px; border: 1px solid var(--border-color); margin: 1rem 0;">
              <span style="color: var(--accent-purple); font-weight: bold;">📖 讲义经典例题：三维平面投影矩阵计算 (77_Ch07_03 Slide 21)</span>
              <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 0.4rem; line-height: 1.8;">
                设 $W$ 是 $\\mathbb{R}^3$ 中方程为 $x_1 - x_2 + 2x_3 = 0$ 的二维平面子空间。求其正交投影矩阵 $P_W$：<br>
                • 选取平面的一组基：令 $x_2 = 1, x_3 = 0 \\implies x_1 = 1$；令 $x_2 = 0, x_3 = 1 \\implies x_1 = -2$。构造矩阵 $C$：
                $$C = \\begin{bmatrix} 1 & -2 \\\\ 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$$
                • 计算 $C^T C$ 及其逆矩阵：
                $$C^T C = \\begin{bmatrix} 1 & 1 & 0 \\\\ -2 & 0 & 1 \\end{bmatrix} \\begin{bmatrix} 1 & -2 \\\\ 1 & 0 \\\\ 0 & 1 \\end{bmatrix} = \\begin{bmatrix} 2 & -2 \\\\ -2 & 5 \\end{bmatrix} \\implies (C^T C)^{-1} = \\frac{1}{6} \\begin{bmatrix} 5 & 2 \\\\ 2 & 2 \\end{bmatrix}$$
                • 计算投影矩阵 $P_W = C (C^T C)^{-1} C^T$：
                $$P_W = \\frac{1}{6} \\begin{bmatrix} 1 & -2 \\\\ 1 & 0 \\\\ 0 & 1 \\end{bmatrix} \\begin{bmatrix} 5 & 2 \\\\ 2 & 2 \\end{bmatrix} \\begin{bmatrix} 1 & 1 & 0 \\\\ -2 & 0 & 1 \\end{bmatrix} = \\frac{1}{6} \\begin{bmatrix} 5 & 1 & -2 \\\\ 1 & 5 & 2 \\\\ -2 & 2 & 2 \\end{bmatrix}$$
                • 验证性质：显然 $P_W^T = P_W$，$\\text{tr}(P_W) = \\frac{5+5+2}{6} = 2 = \\dim W$！
              </p>
            </div>'''

patched = orig.replace(target, section_1_4_html)

# Also update law ② in Card 2 with cross-link
law2_orig = '''                <div style="background: rgba(15, 23, 42, 0.5); padding: 0.85rem; border-radius: 6px;">
                  <strong style="color: var(--accent-purple);">② 对称性 ($P_W^T = P_W$, Prob 67b)</strong>
                  <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.3rem;">
                    $P_W^T = (C(C^TC)^{-1}C^T)^T = C(C^TC)^{-1}C^T = P_W$。<br>
                    <strong>核心意义：</strong>对称性是<strong>正交投影</strong>区别于斜投影的唯一充要代数判据！
                  </p>
                </div>'''

law2_new = '''                <div style="background: rgba(15, 23, 42, 0.5); padding: 0.85rem; border-radius: 6px;">
                  <strong style="color: var(--accent-purple);">② 对称性 ($P_W^T = P_W$, Prob 67b)</strong>
                  <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.3rem;">
                    $P_W^T = (C(C^TC)^{-1}C^T)^T = C(C^TC)^{-1}C^T = P_W$。<br>
                    <strong>核心意义：</strong>对称性是<strong>正交投影</strong>区别于斜投影的唯一充要代数判据！（详见 1.4 节自伴随内积几何严密证明）
                  </p>
                </div>'''

patched = patched.replace(law2_orig, law2_new)

with open('scratch/test_ch7_2.html', 'w', encoding='utf-8') as f:
    f.write(patched)

print("Test file generated at scratch/test_ch7_2.html")
