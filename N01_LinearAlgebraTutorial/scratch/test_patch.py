# Python test patch
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

print('Target in orig:', target in orig)
