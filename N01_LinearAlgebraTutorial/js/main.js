/* ==========================================================================
   Linear Algebra Interactive Learning Platform - Main JavaScript
   LA2022Fall (Prof. Hung-yi Lee)
   ========================================================================== */

// MathJax Configuration (only set if MathJax is not yet initialized)
if (!window.MathJax || !window.MathJax.version) {
  window.MathJax = window.MathJax || {};
  window.MathJax.tex = window.MathJax.tex || {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true
  };
  window.MathJax.options = window.MathJax.options || {
    enableAssistiveMml: false,
    ignoreHtmlClass: 'tex2jax_ignore',
    processHtmlClass: 'tex2jax_process'
  };
  window.MathJax.svg = window.MathJax.svg || {
    fontCache: 'global'
  };
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderSidebar();
  highlightActiveNav();
  initSidebarScroll();
  setupSmoothScroll();
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
});

// ==========================================================================
// Reusable Master Sidebar Component (Single Source of Truth for all pages)
// ==========================================================================
const MASTER_SIDEBAR_NAV = `<div class="nav-section-title">课程导航</div>
        <a href="index.html" class="nav-item">
          <span class="nav-icon">🏠</span>
          <span>课程总览与章节地图</span>
        </a>
        <a href="essence_of_linear_algebra_3b1b.html" class="nav-item" style="background: rgba(168, 85, 247, 0.12); border: 1px solid rgba(168, 85, 247, 0.3); margin-top: 4px;">
          <span class="nav-icon">🎬</span>
          <span style="color: var(--accent-purple); font-weight: 700;">3B1B 线性代数的本质 (15讲全景)</span>
        </a>

        <div class="nav-section-title">完整教学大纲 (按 Chapter 细分)</div>
    
        <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700; margin: 12px 12px 4px; text-transform: uppercase;">
          Chapter 1: 线性系统与求解基础
        </div>
            
        <a href="ch1_1_linear_system.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--primary);">Ch 1.1</span>
          <span>线性系统与微积分算子</span>
        </a>
        
        <a href="ch1_2_vector.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--primary);">Ch 1.2</span>
          <span>向量、几何法则与点积</span>
        </a>
        
        <a href="ch1_3_system_of_equations.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--primary);">Ch 1.3</span>
          <span>线性方程组的行与列视角</span>
        </a>
        
        <a href="ch1_4_matrix.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--primary);">Ch 1.4</span>
          <span>矩阵概念与 Ax=b 列组合视角</span>
        </a>
        
        <a href="ch1_5_solution.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--primary);">Ch 1.5</span>
          <span>相容性与解集几何结构 (x=xp+xn)</span>
        </a>
        
        <a href="ch1_6_rref.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--primary);">Ch 1.6</span>
          <span>高斯消元、RREF 与列对应定理</span>
        </a>
        
        <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700; margin: 12px 12px 4px; text-transform: uppercase;">
          Chapter 2: 矩阵运算与逆矩阵
        </div>
            
        <a href="ch2_1_matrix_multiplication.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--primary);">Ch 2.1</span>
          <span>矩阵乘法 4 大视角与几何变换</span>
        </a>
        
        <a href="ch2_2_matrix_inverse.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--primary);">Ch 2.2</span>
          <span>逆矩阵、初等矩阵与可逆等价定理</span>
        </a>
        
        <a href="ch2_3_matrix_transpose.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--primary);">Ch 2.3</span>
          <span>矩阵转置、几何镜像与对偶伴随</span>
        </a>
        
        <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700; margin: 12px 12px 4px; text-transform: uppercase;">
          Chapter 3: 行列式
        </div>
            
        <a href="ch3_1_determinant.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--primary);">Ch 3.1</span>
          <span>行列式几何体积与余子式展开</span>
        </a>

        <a href="ch3_1_supplement_geometric_foundations.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--accent-amber);">拓展 1</span>
          <span>二维面积推导、减法直觉与法向量底蕴</span>
        </a>

        <a href="ch3_1_supplement_leibniz_formula.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--accent-purple);">拓展 2</span>
          <span>莱布尼茨公式与全景本质意义</span>
        </a>

        <a href="ch3_1_supplement_volume_orthogonal_height.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--accent-green);">拓展 3</span>
          <span>正交高度乘积与剪切不变性</span>
        </a>
        
        <a href="ch3_2_cramer_applications.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--primary);">Ch 3.2</span>
          <span>伴随矩阵求逆与克莱姆法则</span>
        </a>

        <a href="ch3_2_supplement_cross_product.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--accent-cyan, #06b6d4);">拓展 4</span>
          <span>三维向量叉积 (Cross Product) 全景指南</span>
        </a>
        
        <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700; margin: 12px 12px 4px; text-transform: uppercase;">
          Chapter 4: 空间、基底与坐标系
        </div>
            
        <a href="ch4_1_span_independence.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--primary);">Ch 4.1</span>
          <span>张成空间 (Span) 与线性无关判定</span>
        </a>
        
        <a href="ch4_2_linear_transformation.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--primary);">Ch 4.2</span>
          <span>线性变换、几何映射与网格扭曲</span>
        </a>
        
        <a href="ch4_3_subspaces_rank.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--primary);">Ch 4.3</span>
          <span>子空间与四大基本子空间剖析</span>
        </a>
        
        <a href="ch4_4_basis_dimension.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--primary);">Ch 4.4</span>
          <span>基底、维数定理与秩-零度定理</span>
        </a>
        
        <a href="ch4_5_coordinate_system.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--primary);">Ch 4.5</span>
          <span>坐标系统、基坐标与基变换矩阵</span>
        </a>
        
        <a href="ch4_6_operator_matrix.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--primary);">Ch 4.6</span>
          <span>算子矩阵化、相似变换与微积分算子</span>
        </a>
        
        <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700; margin: 12px 12px 4px; text-transform: uppercase;">
          Chapter 5: 特征值与对角化
        </div>
            
        <a href="ch5_1_eigenvalues_eigenvectors.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--primary);">Ch 5.1</span>
          <span>特征值与特征向量几何直觉与求解</span>
        </a>

        <a href="ch5_1_supplement_complex_numbers_foundation.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--accent-green);">拓展 1</span>
          <span>高中数学复数完全基石指南</span>
        </a>

        <a href="ch5_1_supplement_fundamental_theorem_of_algebra.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--accent-amber);">拓展 2</span>
          <span>代数基本定理与三维马鞍面</span>
        </a>
        
        <a href="ch5_2_characteristic_polynomial.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--primary);">Ch 5.2</span>
          <span>特征多项式、代数/几何重数与相似性</span>
        </a>
        
        <a href="ch5_3_pagerank.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--primary);">Ch 5.3</span>
          <span>PageRank 网页排名算法与马尔可夫稳态</span>
        </a>
        
        <a href="ch5_4_diagonalization.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--primary);">Ch 5.4</span>
          <span>矩阵对角化 A=PDP⁻¹ 与高阶幂应用</span>
        </a>
        
        <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700; margin: 12px 12px 4px; text-transform: uppercase;">
          Chapter 6: 抽象向量空间
        </div>
            
        <a href="ch6_1_vector_space_isomorphism.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--primary);">Ch 6.1</span>
          <span>抽象向量空间 8 大公理与同构定理</span>
        </a>
        
        <a href="ch6_2_inner_product_space.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--primary);">Ch 6.2</span>
          <span>抽象内积空间与傅里叶级数分解</span>
        </a>
        
        <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700; margin: 12px 12px 4px; text-transform: uppercase;">
          Chapter 7: 正交性与 SVD
        </div>
            
        <a href="ch7_1_orthogonality_gram_schmidt.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--primary);">Ch 7.1</span>
          <span>正交性、Gram-Schmidt 正交化与 QR</span>
        </a>
        
        <a href="ch7_2_projection_least_squares.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--primary);">Ch 7.2</span>
          <span>正交投影矩阵与最小二乘法回归</span>
        </a>
        
        <a href="ch7_3_spectral_decomposition.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--primary);">Ch 7.3</span>
          <span>实对称矩阵正交对角化与谱分解</span>
        </a>
        
        <a href="ch7_4_svd_low_rank.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--primary);">Ch 7.4</span>
          <span>奇异值分解 SVD、伪逆与图像低秩压缩</span>
        </a>
        
        <a href="ch7_5_positive_definite.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--primary);">Ch 7.5</span>
          <span>正定与半正定矩阵、二次型几何曲面</span>
        </a>

        <div style="font-size: 0.75rem; color: var(--text-muted); font-weight: 700; margin: 12px 12px 4px; text-transform: uppercase;">
          Chapter 8: 附录与工业实战
        </div>

        <a href="ch8_1_ols_applications.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--accent-green);">Ch 8.1</span>
          <span>OLS 股票市场涨跌归因与全景图谱</span>
        </a>

        <div class="nav-section-title" style="color: var(--accent-purple); border-top: 1px solid rgba(168, 85, 247, 0.25); padding-top: 14px; margin-top: 14px;">
          矩阵分析进阶系列 (Matrix Analysis)
        </div>

        <a href="ma1_norms_operator_theory.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--accent-purple);">MA 01</span>
          <span>向量与矩阵范数、算子理论与摄动</span>
        </a>

        <a href="ma2_spectral_radius_rayleigh.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--accent-purple);">MA 02</span>
          <span>特征值变分刻画、谱半径与瑞利商</span>
        </a>

        <a href="ma3_schur_jcf_pseudoinverse.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--accent-purple);">MA 03</span>
          <span>高阶矩阵分解、伪逆与 Schur 补</span>
        </a>

        <a href="ma4_psd_matrix_inequalities.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--accent-purple);">MA 04</span>
          <span>半正定锥、Loewner 偏序与矩阵不等式</span>
        </a>

        <a href="ma5_kronecker_vectorization_equations.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--accent-purple);">MA 05</span>
          <span>克罗内克积、向量化与矩阵方程</span>
        </a>

        <a href="ma6_matrix_calculus_optimization.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--accent-purple);">MA 06</span>
          <span>矩阵微积分、全微分迹技巧与优化</span>
        </a>

        <a href="ma7_matrix_functions_dynamics.html" class="nav-item" style="padding-left: 1.25rem; font-size: 0.82rem;">
          <span style="font-size:0.75rem; font-weight:700; min-width:38px; color:var(--accent-purple);">MA 07</span>
          <span>矩阵函数、谱映射与微分动力系统</span>
        </a>
        
        <div class="nav-section-title">综合大模块入口 (原 Module 1-8)</div>
        <a href="module1_vectors_linear_systems.html" class="nav-item">
          <span class="nav-icon">1️⃣</span>
          <span>Module 1: 向量与方程组</span>
        </a>
        <a href="module2_rref_solutions_rank.html" class="nav-item">
          <span class="nav-icon">2️⃣</span>
          <span>Module 2: RREF 与列对应</span>
        </a>
        <a href="module3_matrix_transforms_inverse.html" class="nav-item">
          <span class="nav-icon">3️⃣</span>
          <span>Module 3: 矩阵变换与逆矩阵</span>
        </a>
        <a href="module4_subspaces_basis_dimension.html" class="nav-item">
          <span class="nav-icon">4️⃣</span>
          <span>Module 4: 子空间与四大空间</span>
        </a>
        <a href="module5_determinant_cramer.html" class="nav-item">
          <span class="nav-icon">5️⃣</span>
          <span>Module 5: 行列式与克莱姆</span>
        </a>
        <a href="module6_coordinates_transforms.html" class="nav-item">
          <span class="nav-icon">6️⃣</span>
          <span>Module 6: 坐标系与基变换</span>
        </a>
        <a href="module7_eigenvalues_diagonalization.html" class="nav-item">
          <span class="nav-icon">7️⃣</span>
          <span>Module 7: 特征值与对角化</span>
        </a>
        <a href="module8_orthogonality_svd_beyond.html" class="nav-item">
          <span class="nav-icon">8️⃣</span>
          <span>Module 8: 正交、SVD与超越</span>
        </a>`;

function renderSidebar() {
  const sidebarNav = document.querySelector('.sidebar-nav');
  if (sidebarNav) {
    sidebarNav.innerHTML = MASTER_SIDEBAR_NAV;
  }
}

// Sidebar Scroll Persistence
function initSidebarScroll() {
  const sidebarNav = document.querySelector('.sidebar-nav');
  if (!sidebarNav) return;

  // Restore saved scroll position if available
  const restoreScroll = () => {
    const savedScrollTop = sessionStorage.getItem('sidebar_scroll_top');
    if (savedScrollTop !== null) {
      sidebarNav.scrollTop = parseInt(savedScrollTop, 10);
    } else {
      // If no saved position, ensure the active item is visible
      const activeItem = sidebarNav.querySelector('.nav-item.active');
      if (activeItem) {
        activeItem.scrollIntoView({ block: 'nearest', inline: 'nearest' });
      }
    }
  };

  // Run restore immediately and on animation frame to prevent browser reset
  restoreScroll();
  requestAnimationFrame(restoreScroll);

  // Save position on scroll
  sidebarNav.addEventListener('scroll', () => {
    sessionStorage.setItem('sidebar_scroll_top', sidebarNav.scrollTop);
  }, { passive: true });

  // Save position immediately when clicking any navigation link inside sidebar
  sidebarNav.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      sessionStorage.setItem('sidebar_scroll_top', sidebarNav.scrollTop);
    }
  });

  // When clicking footer nav or breadcrumb links, clear saved position so sidebar auto-scrolls to the new chapter
  document.querySelectorAll('.module-nav-footer a, .header-breadcrumb a').forEach(link => {
    link.addEventListener('click', () => {
      sessionStorage.removeItem('sidebar_scroll_top');
    });
  });

  window.addEventListener('beforeunload', () => {
    if (sidebarNav) {
      sessionStorage.setItem('sidebar_scroll_top', sidebarNav.scrollTop);
    }
  });
}

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('la_tutorial_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeButtonText(savedTheme);

  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('la_tutorial_theme', newTheme);
      updateThemeButtonText(newTheme);
      
      // Notify visualizers if any
      window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme: newTheme } }));
    });
  }
}

function updateThemeButtonText(theme) {
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.innerHTML = theme === 'light' 
      ? '🌙 切换暗色模式' 
      : '☀️ 切换亮色模式';
  }
}

// Highlight Active Navigation Link
function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navItems = document.querySelectorAll('.nav-item');
  
  navItems.forEach(item => {
    const href = item.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Smooth Scrolling for Anchors
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Global utility for re-triggering MathJax if content is dynamically loaded
function renderMath() {
  if (window.MathJax && window.MathJax.typesetPromise) {
    window.MathJax.typesetPromise();
  }
}
