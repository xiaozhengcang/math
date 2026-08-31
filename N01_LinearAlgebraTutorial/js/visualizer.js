/* ==========================================================================
   Linear Algebra Interactive Visualizers
   Interactive HTML5 Canvas for Vectors, Transformations, Determinants & Projections
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initVectorVisualizer();
  initTransformVisualizer();
  initEigenVisualizer();
  initProjectionVisualizer();
  initElementaryTransformVisualizer();
});

// Window resize handler for canvas responsive scaling
window.addEventListener('resize', () => {
  initVectorVisualizer();
  initTransformVisualizer();
  initEigenVisualizer();
  initProjectionVisualizer();
  initElementaryTransformVisualizer();
});

/* --------------------------------------------------------------------------
   1. Vector Linear Combination Visualizer (Span Visualizer)
   -------------------------------------------------------------------------- */
function initVectorVisualizer() {
  const canvas = document.getElementById('canvas-vector-span');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const sliderC1 = document.getElementById('slider-c1');
  const sliderC2 = document.getElementById('slider-c2');
  const valC1 = document.getElementById('val-c1');
  const valC2 = document.getElementById('val-c2');

  const width = canvas.width = canvas.parentElement.clientWidth || 600;
  const height = canvas.height = 360;
  const origin = { x: width / 2, y: height / 2 };
  const scale = 40; // 1 unit = 40px

  // Base vectors u1 = (2, 1), u2 = (-1, 2)
  const u1 = { x: 2, y: 1 };
  const u2 = { x: -1, y: 2 };

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Draw Grid
    drawGrid(ctx, width, height, origin, scale);

    const c1 = parseFloat(sliderC1 ? sliderC1.value : 1.5);
    const c2 = parseFloat(sliderC2 ? sliderC2.value : 1.0);

    if (valC1) valC1.textContent = c1.toFixed(1);
    if (valC2) valC2.textContent = c2.toFixed(1);

    const v1 = { x: c1 * u1.x, y: c1 * u1.y };
    const v2 = { x: c2 * u2.x, y: c2 * u2.y };
    const result = { x: v1.x + v2.x, y: v1.y + v2.y };

    // Draw component vectors
    drawArrow(ctx, origin, toCanvas(origin, v1, scale), '#38bdf8', `c1·u1 (${v1.x.toFixed(1)}, ${v1.y.toFixed(1)})`);
    drawArrow(ctx, toCanvas(origin, v1, scale), toCanvas(origin, result, scale), '#c084fc', `c2·u2`);

    // Draw resultant vector
    drawArrow(ctx, origin, toCanvas(origin, result, scale), '#34d399', `v = c1·u1 + c2·u2 (${result.x.toFixed(1)}, ${result.y.toFixed(1)})`, 3);

    // Draw parallelogram dashed lines
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.beginPath();
    const p1 = toCanvas(origin, v1, scale);
    const p2 = toCanvas(origin, toCanvasRel(v1, v2), scale);
    const p3 = toCanvas(origin, v2, scale);
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);
    ctx.stroke();
    ctx.setLineDash([]);
  }

  if (sliderC1) sliderC1.addEventListener('input', draw);
  if (sliderC2) sliderC2.addEventListener('input', draw);
  draw();
}

/* --------------------------------------------------------------------------
   2. 2D Linear Transformation & Determinant Visualizer
   -------------------------------------------------------------------------- */
function initTransformVisualizer() {
  const canvas = document.getElementById('canvas-transform');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const sliderA = document.getElementById('slider-m-a'); // a11
  const sliderB = document.getElementById('slider-m-b'); // a12
  const sliderC = document.getElementById('slider-m-c'); // a21
  const sliderD = document.getElementById('slider-m-d'); // a22

  const valDet = document.getElementById('val-det');
  const valDetInfo = document.getElementById('val-det-info');

  const width = canvas.width = canvas.parentElement.clientWidth || 600;
  const height = canvas.height = 380;
  const origin = { x: width / 2, y: height / 2 };
  const scale = 50;

  function draw() {
    ctx.clearRect(0, 0, width, height);

    const a11 = parseFloat(sliderA ? sliderA.value : 1.5);
    const a12 = parseFloat(sliderB ? sliderB.value : 0.5);
    const a21 = parseFloat(sliderC ? sliderC.value : 0.0);
    const a22 = parseFloat(sliderD ? sliderD.value : 1.2);

    const det = a11 * a22 - a12 * a21;
    if (valDet) valDet.textContent = det.toFixed(2);
    if (valDetInfo) {
      if (Math.abs(det) < 0.01) {
        valDetInfo.innerHTML = '<span style="color:#ef4444; font-weight:bold;">⚠️ det(A) = 0：空间被彻底压扁归零（不可逆，存在零特征值）！</span>';
      } else if (det > 0) {
        valDetInfo.innerHTML = `<span style="color:#34d399;">✨ det(A) = ${det.toFixed(2)} > 0：空间面积放缩为 ${det.toFixed(2)} 倍，手性保持一致。</span>`;
      } else {
        valDetInfo.innerHTML = `<span style="color:#fbbf24;">🔄 det(A) = ${det.toFixed(2)} < 0：空间面积放缩为 ${Math.abs(det).toFixed(2)} 倍，但坐标手性镜像颠倒！</span>`;
      }
    }

    // Transform basis vectors e1=(1,0), e2=(0,1)
    const Te1 = { x: a11, y: a21 };
    const Te2 = { x: a12, y: a22 };

    // Draw Transformed Grid Lines
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.15)';
    ctx.lineWidth = 1;
    for (let i = -5; i <= 5; i++) {
      const startH = transformPoint({ x: -5, y: i }, a11, a12, a21, a22);
      const endH = transformPoint({ x: 5, y: i }, a11, a12, a21, a22);
      drawLine(ctx, toCanvas(origin, startH, scale), toCanvas(origin, endH, scale));

      const startV = transformPoint({ x: i, y: -5 }, a11, a12, a21, a22);
      const endV = transformPoint({ x: i, y: 5 }, a11, a12, a21, a22);
      drawLine(ctx, toCanvas(origin, startV, scale), toCanvas(origin, endV, scale));
    }

    // Draw Transformed Unit Square (Determinant Area)
    const p0 = toCanvas(origin, { x: 0, y: 0 }, scale);
    const p1 = toCanvas(origin, Te1, scale);
    const p2 = toCanvas(origin, { x: Te1.x + Te2.x, y: Te1.y + Te2.y }, scale);
    const p3 = toCanvas(origin, Te2, scale);

    ctx.fillStyle = det >= 0 ? 'rgba(52, 211, 153, 0.25)' : 'rgba(244, 63, 94, 0.25)';
    ctx.strokeStyle = det >= 0 ? '#34d399' : '#f43f5e';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y);
    ctx.lineTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Draw transformed basis vectors
    drawArrow(ctx, origin, p1, '#38bdf8', `A·e1 (${Te1.x.toFixed(1)}, ${Te1.y.toFixed(1)})`, 3);
    drawArrow(ctx, origin, p3, '#c084fc', `A·e2 (${Te2.x.toFixed(1)}, ${Te2.y.toFixed(1)})`, 3);
  }

  [sliderA, sliderB, sliderC, sliderD].forEach(s => {
    if (s) s.addEventListener('input', draw);
  });

  draw();
}

/* --------------------------------------------------------------------------
   3. Eigenvalues & Eigenvectors Visualizer
   -------------------------------------------------------------------------- */
function initEigenVisualizer() {
  const canvas = document.getElementById('canvas-eigen');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const sliderAngle = document.getElementById('slider-vector-angle');
  const valAngle = document.getElementById('val-angle');
  const valEigenStatus = document.getElementById('val-eigen-status');

  const width = canvas.width = canvas.parentElement.clientWidth || 600;
  const height = canvas.height = 360;
  const origin = { x: width / 2, y: height / 2 };
  const scale = 50;

  // Matrix with real eigenvalues: A = [ [2, 1], [1, 2] ]
  // Eigenvalues: lambda1 = 3 (vec = (1,1) -> 45° / 225°), lambda2 = 1 (vec = (1,-1) -> 135° / 315°)
  const A = { a11: 2, a12: 1, a21: 1, a22: 2 };

  function draw() {
    ctx.clearRect(0, 0, width, height);

    drawGrid(ctx, width, height, origin, scale);

    const deg = parseFloat(sliderAngle ? sliderAngle.value : 45);
    if (valAngle) valAngle.textContent = `${deg}°`;

    const rad = (deg * Math.PI) / 180;
    const x = Math.cos(rad);
    const y = Math.sin(rad);
    const v = { x, y };

    // Ax
    const Av = {
      x: A.a11 * v.x + A.a12 * v.y,
      y: A.a21 * v.x + A.a22 * v.y
    };

    // Draw Eigen-lines
    // Line 1: y = x (eigenvector for lambda = 3)
    drawLine(ctx, toCanvas(origin, { x: -4, y: -4 }, scale), toCanvas(origin, { x: 4, y: 4 }, scale), 'rgba(251, 191, 36, 0.4)', 2, [5, 5]);
    // Line 2: y = -x (eigenvector for lambda = 1)
    drawLine(ctx, toCanvas(origin, { x: -4, y: 4 }, scale), toCanvas(origin, { x: 4, y: -4 }, scale), 'rgba(129, 140, 248, 0.4)', 2, [5, 5]);

    // Check if current vector is close to an eigenvector line
    const rem45 = Math.abs((deg % 180) - 45);
    const rem135 = Math.abs((deg % 180) - 135);
    const isEigen1 = rem45 < 4;
    const isEigen2 = rem135 < 4;

    if (valEigenStatus) {
      if (isEigen1) {
        valEigenStatus.innerHTML = '<span style="color:#fbbf24; font-weight:bold;">🎯 捕捉到特征轴 1！向量处于 y=x 直线上：A·v = 3·v，特征值 λ₁ = 3！</span>';
      } else if (isEigen2) {
        valEigenStatus.innerHTML = '<span style="color:#818cf8; font-weight:bold;">🎯 捕捉到特征轴 2！向量处于 y=-x 直线上：A·v = 1·v，特征值 λ₂ = 1！</span>';
      } else {
        valEigenStatus.innerHTML = '<span style="color:var(--text-muted);">↪️ 普通向量：A·x 偏离了 x 的原始方向。滑动滑动条调整方向，观察何时 A·x 与 x 重合！</span>';
      }
    }

    // Draw current input vector v
    const pV = toCanvas(origin, v, scale);
    drawArrow(ctx, origin, pV, '#38bdf8', `x (${v.x.toFixed(2)}, ${v.y.toFixed(2)})`, 3);

    // Draw transformed vector Ax
    const pAv = toCanvas(origin, Av, scale);
    const isEigen = isEigen1 || isEigen2;
    const colorAv = isEigen1 ? '#fbbf24' : (isEigen2 ? '#818cf8' : '#f43f5e');
    const labelAv = isEigen1 ? `A·x = 3x (特征向量! λ=3)` : (isEigen2 ? `A·x = 1x (特征向量! λ=1)` : `A·x (${Av.x.toFixed(2)}, ${Av.y.toFixed(2)})`);
    drawArrow(ctx, origin, pAv, colorAv, labelAv, 3);
  }

  if (sliderAngle) sliderAngle.addEventListener('input', draw);
  draw();
}

/* --------------------------------------------------------------------------
   4. Orthogonal Projection Visualizer
   -------------------------------------------------------------------------- */
function initProjectionVisualizer() {
  const canvas = document.getElementById('canvas-projection');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const sliderBx = document.getElementById('slider-bx');
  const sliderBy = document.getElementById('slider-by');

  const width = canvas.width = canvas.parentElement.clientWidth || 600;
  const height = canvas.height = 360;
  const origin = { x: width / 2, y: height / 2 };
  const scale = 45;

  // Subspace line spanned by a = (3, 1)
  const a = { x: 3, y: 1 };

  function draw() {
    ctx.clearRect(0, 0, width, height);

    drawGrid(ctx, width, height, origin, scale);

    const bx = parseFloat(sliderBx ? sliderBx.value : 1.5);
    const by = parseFloat(sliderBy ? sliderBy.value : 3.0);
    const b = { x: bx, y: by };

    // Subspace line
    drawLine(ctx, toCanvas(origin, { x: -a.x * 2, y: -a.y * 2 }, scale), toCanvas(origin, { x: a.x * 2, y: a.y * 2 }, scale), '#818cf8', 2);

    // Projection p = (b · a / ||a||^2) * a
    const dotBA = b.x * a.x + b.y * a.y;
    const normA2 = a.x * a.x + a.y * a.y;
    const projCoeff = dotBA / normA2;
    const p = { x: projCoeff * a.x, y: projCoeff * a.y };

    // Error e = b - p
    const e = { x: b.x - p.x, y: b.y - p.y };

    const pB = toCanvas(origin, b, scale);
    const pP = toCanvas(origin, p, scale);

    // Draw Projection p
    drawArrow(ctx, origin, pP, '#34d399', `p (正交投影)`, 3);

    // Draw Original vector b
    drawArrow(ctx, origin, pB, '#38bdf8', `b (${b.x.toFixed(1)}, ${b.y.toFixed(1)})`, 3);

    // Draw Error vector e (dashed from p to b)
    ctx.setLineDash([4, 4]);
    drawLine(ctx, pP, pB, '#f43f5e', 2);
    ctx.setLineDash([]);

    // Draw Right Angle Box at p
    drawRightAngleMarker(ctx, origin, p, b, scale);
  }

  if (sliderBx) sliderBx.addEventListener('input', draw);
  if (sliderBy) sliderBy.addEventListener('input', draw);

  draw();
}

/* --------------------------------------------------------------------------
   Helper Functions
   -------------------------------------------------------------------------- */
function drawGrid(ctx, width, height, origin, scale) {
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
  ctx.lineWidth = 1;

  for (let x = origin.x % scale; x < width; x += scale) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = origin.y % scale; y < height; y += scale) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  // Main axes
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
  ctx.lineWidth = 2;
  // X axis
  ctx.beginPath();
  ctx.moveTo(0, origin.y);
  ctx.lineTo(width, origin.y);
  ctx.stroke();
  // Y axis
  ctx.beginPath();
  ctx.moveTo(origin.x, 0);
  ctx.lineTo(origin.x, height);
  ctx.stroke();
}

function toCanvas(origin, point, scale) {
  return {
    x: origin.x + point.x * scale,
    y: origin.y - point.y * scale // Invert Y axis for standard math coordinates
  };
}

function toCanvasRel(p1, p2) {
  return { x: p1.x + p2.x, y: p1.y + p2.y };
}

function transformPoint(p, a11, a12, a21, a22) {
  return {
    x: a11 * p.x + a12 * p.y,
    y: a21 * p.x + a22 * p.y
  };
}

function drawLine(ctx, p1, p2, color = '#ffffff', width = 1, dash = []) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = width;
  if (dash.length > 0) ctx.setLineDash(dash);
  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.stroke();
  ctx.restore();
}

function drawArrow(ctx, p1, p2, color, label = '', width = 2) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = width;

  // Shaft
  ctx.beginPath();
  ctx.moveTo(p1.x, p1.y);
  ctx.lineTo(p2.x, p2.y);
  ctx.stroke();

  // Head
  const angle = Math.atan2(p2.y - p1.y, p2.x - p1.x);
  const headLen = 10;
  ctx.beginPath();
  ctx.moveTo(p2.x, p2.y);
  ctx.lineTo(p2.x - headLen * Math.cos(angle - Math.PI / 6), p2.y - headLen * Math.sin(angle - Math.PI / 6));
  ctx.lineTo(p2.x - headLen * Math.cos(angle + Math.PI / 6), p2.y - headLen * Math.sin(angle + Math.PI / 6));
  ctx.closePath();
  ctx.fill();

  // Label
  if (label) {
    ctx.font = '12px Inter, sans-serif';
    ctx.fillText(label, p2.x + 8, p2.y - 8);
  }

  ctx.restore();
}

function drawRightAngleMarker(ctx, origin, p, b, scale) {
  // simple visual indicator for perpendicularity
  ctx.save();
  ctx.strokeStyle = '#f43f5e';
  ctx.lineWidth = 1.5;
  const canvasP = toCanvas(origin, p, scale);
  ctx.beginPath();
  ctx.arc(canvasP.x, canvasP.y, 8, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}

/* --------------------------------------------------------------------------
   5. Elementary Transformations Visualizer (Swap, Scale, Shear)
   -------------------------------------------------------------------------- */
function initElementaryTransformVisualizer() {
  const canvas = document.getElementById('canvas-elem-transform');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  
  // State
  let currentMode = 'shear'; // 'swap', 'scale', 'shear'
  let isSwapped = false;
  let showDiag = true;
  let scaleK1 = 1.5;
  let scaleK2 = 1.0;
  let shearK = 1.2;
  let shearDir = 'h'; // 'h': R1 + k*R2 -> R1 (horizontal), 'v': R2 + k*R1 -> R2 (vertical)

  // Tabs
  const tabSwap = document.getElementById('tab-elem-swap');
  const tabScale = document.getElementById('tab-elem-scale');
  const tabShear = document.getElementById('tab-elem-shear');

  // Panels
  const panelSwap = document.getElementById('panel-elem-swap');
  const panelScale = document.getElementById('panel-elem-scale');
  const panelShear = document.getElementById('panel-elem-shear');

  // Controls - Swap
  const btnSwapToggle = document.getElementById('btn-swap-toggle');
  const btnSwapDiag = document.getElementById('btn-swap-diag');

  // Controls - Scale
  const sliderK1 = document.getElementById('slider-elem-k1');
  const sliderK2 = document.getElementById('slider-elem-k2');
  const valK1 = document.getElementById('val-elem-k1');
  const valK2 = document.getElementById('val-elem-k2');

  // Controls - Shear
  const sliderShearK = document.getElementById('slider-elem-shear-k');
  const valShearK = document.getElementById('val-elem-shear-k');
  const radioShearH = document.getElementById('radio-shear-h');
  const radioShearV = document.getElementById('radio-shear-v');

  // Global Controls
  const btnReset = document.getElementById('btn-elem-reset');

  // HUD Elements
  const matE11 = document.getElementById('mat-e-11');
  const matE12 = document.getElementById('mat-e-12');
  const matE21 = document.getElementById('mat-e-21');
  const matE22 = document.getElementById('mat-e-22');

  const matInv11 = document.getElementById('mat-inv-11');
  const matInv12 = document.getElementById('mat-inv-12');
  const matInv21 = document.getElementById('mat-inv-21');
  const matInv22 = document.getElementById('mat-inv-22');

  const valDet = document.getElementById('val-elem-det');
  const valArea = document.getElementById('val-elem-area');
  const badgeStatus = document.getElementById('badge-elem-status');
  const geoDesc = document.getElementById('elem-geo-explanation');

  // Canvas size setup
  const width = canvas.width = canvas.parentElement.clientWidth || 640;
  const height = canvas.height = 420;
  const origin = { x: width / 2, y: height / 2 };
  const scale = 55; // 55px per unit

  function getMatrix() {
    if (currentMode === 'swap') {
      return isSwapped 
        ? { a11: 0, a12: 1, a21: 1, a22: 0 }
        : { a11: 1, a12: 0, a21: 0, a22: 1 };
    } else if (currentMode === 'scale') {
      return { a11: scaleK1, a12: 0, a21: 0, a22: scaleK2 };
    } else { // shear
      if (shearDir === 'h') {
        // R1 + k*R2 -> R1
        return { a11: 1, a12: shearK, a21: 0, a22: 1 };
      } else {
        // R2 + k*R1 -> R2
        return { a11: 1, a12: 0, a21: shearK, a22: 1 };
      }
    }
  }

  function getInverseMatrix(m) {
    const det = m.a11 * m.a22 - m.a12 * m.a21;
    if (Math.abs(det) < 0.0001) return null;
    return {
      a11: m.a22 / det,
      a12: -m.a12 / det,
      a21: -m.a21 / det,
      a22: m.a11 / det
    };
  }

  function formatNum(num) {
    if (Math.abs(num) < 0.001) return '0';
    if (Math.abs(num - Math.round(num)) < 0.001) return String(Math.round(num));
    return num.toFixed(2);
  }

  function updateHUD(m) {
    const det = m.a11 * m.a22 - m.a12 * m.a21;
    const inv = getInverseMatrix(m);

    if (matE11) matE11.textContent = formatNum(m.a11);
    if (matE12) matE12.textContent = formatNum(m.a12);
    if (matE21) matE21.textContent = formatNum(m.a21);
    if (matE22) matE22.textContent = formatNum(m.a22);

    if (inv) {
      if (matInv11) matInv11.textContent = formatNum(inv.a11);
      if (matInv12) matInv12.textContent = formatNum(inv.a12);
      if (matInv21) matInv21.textContent = formatNum(inv.a21);
      if (matInv22) matInv22.textContent = formatNum(inv.a22);
    } else {
      if (matInv11) matInv11.textContent = 'NaN';
      if (matInv12) matInv12.textContent = 'NaN';
      if (matInv21) matInv21.textContent = 'NaN';
      if (matInv22) matInv22.textContent = 'NaN';
    }

    if (valDet) valDet.textContent = formatNum(det);
    if (valArea) valArea.textContent = formatNum(Math.abs(det));

    if (badgeStatus) {
      if (currentMode === 'shear') {
        badgeStatus.innerHTML = '<span style="color:#4ade80; background:rgba(74,222,128,0.15); border:1px solid #4ade80; padding:2px 8px; border-radius:12px; font-weight:bold;">⚡ 面积严格守恒 = 1.00 (det = 1.00)</span>';
      } else if (currentMode === 'swap') {
        if (isSwapped) {
          badgeStatus.innerHTML = '<span style="color:#fbbf24; background:rgba(251,191,36,0.15); border:1px solid #fbbf24; padding:2px 8px; border-radius:12px; font-weight:bold;">🔄 空间镜像翻转 (det = -1.00，面积=1.00)</span>';
        } else {
          badgeStatus.innerHTML = '<span style="color:#38bdf8; background:rgba(56,189,248,0.15); border:1px solid #38bdf8; padding:2px 8px; border-radius:12px; font-weight:bold;">单位阵原态 (det = 1.00)</span>';
        }
      } else { // scale
        if (Math.abs(det) < 0.001) {
          badgeStatus.innerHTML = '<span style="color:#ef4444; background:rgba(239,68,68,0.15); border:1px solid #ef4444; padding:2px 8px; border-radius:12px; font-weight:bold;">⚠️ 奇异退化：面积坍缩为 0 (不可逆)</span>';
        } else {
          badgeStatus.innerHTML = `<span style="color:#38bdf8; background:rgba(56,189,248,0.15); border:1px solid #38bdf8; padding:2px 8px; border-radius:12px; font-weight:bold;">面积放缩为 ${formatNum(Math.abs(det))} 倍 (det = ${formatNum(det)})</span>`;
        }
      }
    }

    if (geoDesc) {
      if (currentMode === 'swap') {
        geoDesc.innerHTML = isSwapped
          ? '<strong>几何直觉（镜像反射）</strong>：基向量 e₁ 和 e₂ 发生对调，整个二维空间关于黄色对角虚线 <code>y = x</code> 发生镜像翻转！行列式为 <code>-1</code>，图形面积不变但手性颠倒。再次对调即可原路撤销（E⁻¹ = E）。'
          : '<strong>几何直觉</strong>：当前为原始状态（单位阵 I）。点击上方按钮执行行交换 <code>R₁ ↔ R₂</code>。';
      } else if (currentMode === 'scale') {
        geoDesc.innerHTML = `<strong>几何直觉（轴向拉伸/压缩）</strong>：X 轴方向放缩 <code>${scaleK1.toFixed(1)}</code> 倍，Y 轴方向放缩 <code>${scaleK2.toFixed(1)}</code> 倍。面积放缩为 <code>${Math.abs(det).toFixed(2)}</code> 倍。撤销时只需乘以倒数系数（主对角线取倒数）。`;
      } else {
        const dirText = shearDir === 'h' ? '水平方向（沿 X 轴平移，高度 y 越大平移越远）' : '垂直方向（沿 Y 轴平移，横坐标 x 越大平移越远）';
        geoDesc.innerHTML = `<strong>几何直觉（剪切 Shear / 扑克牌推斜）</strong>：在${dirText}施加强度为 <code>${shearK.toFixed(1)}</code> 的错切。由于<strong>底长未变、垂直高未变</strong>，平行四边形面积<strong>绝对恒等于 1.00</strong>（det(E) 严格为 1）！这就是加减消元法完全不改变空间体积的几何秘密！`;
      }
    }
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // 1. Draw Static Coordinate Grid
    drawGrid(ctx, width, height, origin, scale);

    const m = getMatrix();
    updateHUD(m);

    // 2. Draw Transformed Grid Lines
    ctx.lineWidth = 1;
    for (let i = -6; i <= 6; i++) {
      if (i === 0) continue;
      // Horizontal transformed line
      const hStart = transformPoint({ x: -6, y: i }, m.a11, m.a12, m.a21, m.a22);
      const hEnd = transformPoint({ x: 6, y: i }, m.a11, m.a12, m.a21, m.a22);
      drawLine(ctx, toCanvas(origin, hStart, scale), toCanvas(origin, hEnd, scale), 'rgba(56, 189, 248, 0.12)');

      // Vertical transformed line
      const vStart = transformPoint({ x: i, y: -6 }, m.a11, m.a12, m.a21, m.a22);
      const vEnd = transformPoint({ x: i, y: 6 }, m.a11, m.a12, m.a21, m.a22);
      drawLine(ctx, toCanvas(origin, vStart, scale), toCanvas(origin, vEnd, scale), 'rgba(168, 85, 247, 0.12)');
    }

    // 3. Draw Mirror line (y = x) in Swap mode if enabled
    if (currentMode === 'swap' && showDiag) {
      ctx.setLineDash([5, 5]);
      drawLine(ctx, toCanvas(origin, { x: -5, y: -5 }, scale), toCanvas(origin, { x: 5, y: 5 }, scale), '#fbbf24', 1.8);
      ctx.setLineDash([]);
      ctx.fillStyle = '#fbbf24';
      ctx.font = '11px Inter, sans-serif';
      const diagLabelPos = toCanvas(origin, { x: 3.2, y: 3.4 }, scale);
      ctx.fillText('反射轴 y = x', diagLabelPos.x, diagLabelPos.y);
    }

    // 4. Draw Reference Original Unit Square (Dashed Box)
    const o0 = toCanvas(origin, { x: 0, y: 0 }, scale);
    const oe1 = toCanvas(origin, { x: 1, y: 0 }, scale);
    const oe12 = toCanvas(origin, { x: 1, y: 1 }, scale);
    const oe2 = toCanvas(origin, { x: 0, y: 1 }, scale);

    ctx.save();
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.4)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(o0.x, o0.y);
    ctx.lineTo(oe1.x, oe1.y);
    ctx.lineTo(oe12.x, oe12.y);
    ctx.lineTo(oe2.x, oe2.y);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();

    // 5. Transformed Basis Vectors & Unit Square
    const Te1 = { x: m.a11, y: m.a21 };
    const Te2 = { x: m.a12, y: m.a22 };
    const Te12 = { x: Te1.x + Te2.x, y: Te1.y + Te2.y };

    const p0 = toCanvas(origin, { x: 0, y: 0 }, scale);
    const p1 = toCanvas(origin, Te1, scale);
    const p2 = toCanvas(origin, Te12, scale);
    const p3 = toCanvas(origin, Te2, scale);

    const det = m.a11 * m.a22 - m.a12 * m.a21;

    // Transformed Parallelogram Fill
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(p0.x, p0.y);
    ctx.lineTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);
    ctx.closePath();

    if (currentMode === 'shear') {
      ctx.fillStyle = 'rgba(74, 222, 128, 0.22)'; // Green glow for shear (area preserved!)
      ctx.strokeStyle = '#4ade80';
    } else if (currentMode === 'swap') {
      ctx.fillStyle = isSwapped ? 'rgba(251, 191, 36, 0.22)' : 'rgba(56, 189, 248, 0.18)';
      ctx.strokeStyle = isSwapped ? '#fbbf24' : '#38bdf8';
    } else {
      ctx.fillStyle = det >= 0 ? 'rgba(56, 189, 248, 0.22)' : 'rgba(239, 68, 68, 0.22)';
      ctx.strokeStyle = det >= 0 ? '#38bdf8' : '#ef4444';
    }

    ctx.lineWidth = 2.5;
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // 6. Draw Internal Grid Pattern inside transformed square (Cards effect for shear!)
    ctx.save();
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
    ctx.lineWidth = 1;
    for (let step = 0.25; step < 1.0; step += 0.25) {
      // Horizontal internal line
      const ihStart = transformPoint({ x: 0, y: step }, m.a11, m.a12, m.a21, m.a22);
      const ihEnd = transformPoint({ x: 1, y: step }, m.a11, m.a12, m.a21, m.a22);
      drawLine(ctx, toCanvas(origin, ihStart, scale), toCanvas(origin, ihEnd, scale), 'rgba(255, 255, 255, 0.2)', 1);

      // Vertical internal line
      const ivStart = transformPoint({ x: step, y: 0 }, m.a11, m.a12, m.a21, m.a22);
      const ivEnd = transformPoint({ x: step, y: 1 }, m.a11, m.a12, m.a21, m.a22);
      drawLine(ctx, toCanvas(origin, ivStart, scale), toCanvas(origin, ivEnd, scale), 'rgba(255, 255, 255, 0.2)', 1);
    }
    ctx.restore();

    // 7. Draw Basis Vector Arrows
    drawArrow(ctx, origin, p1, '#38bdf8', `E·e₁ (${formatNum(Te1.x)}, ${formatNum(Te1.y)})`, 3.5);
    drawArrow(ctx, origin, p3, '#c084fc', `E·e₂ (${formatNum(Te2.x)}, ${formatNum(Te2.y)})`, 3.5);

    // 8. Area Marker Text in center of parallelogram
    if (Math.abs(det) > 0.05) {
      const centerP = {
        x: (p0.x + p1.x + p2.x + p3.x) / 4,
        y: (p0.y + p1.y + p2.y + p3.y) / 4
      };
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`面积 = ${formatNum(Math.abs(det))}`, centerP.x, centerP.y);
    }
  }

  // Tab switching handler
  function switchTab(mode) {
    currentMode = mode;
    [tabSwap, tabScale, tabShear].forEach(t => t && t.classList.remove('active'));
    [panelSwap, panelScale, panelShear].forEach(p => p && (p.style.display = 'none'));

    if (mode === 'swap') {
      if (tabSwap) tabSwap.classList.add('active');
      if (panelSwap) panelSwap.style.display = 'flex';
    } else if (mode === 'scale') {
      if (tabScale) tabScale.classList.add('active');
      if (panelScale) panelScale.style.display = 'flex';
    } else {
      if (tabShear) tabShear.classList.add('active');
      if (panelShear) panelShear.style.display = 'flex';
    }
    draw();
  }

  if (tabSwap) tabSwap.addEventListener('click', () => switchTab('swap'));
  if (tabScale) tabScale.addEventListener('click', () => switchTab('scale'));
  if (tabShear) tabShear.addEventListener('click', () => switchTab('shear'));

  // Swap Controls
  if (btnSwapToggle) {
    btnSwapToggle.addEventListener('click', () => {
      isSwapped = !isSwapped;
      btnSwapToggle.textContent = isSwapped ? '↩️ 撤销对调 (恢复单位阵)' : '🔄 执行对调 R₁ ↔ R₂';
      draw();
    });
  }
  if (btnSwapDiag) {
    btnSwapDiag.addEventListener('click', () => {
      showDiag = !showDiag;
      btnSwapDiag.style.opacity = showDiag ? '1' : '0.5';
      draw();
    });
  }

  // Scale Controls
  if (sliderK1) {
    sliderK1.addEventListener('input', (e) => {
      scaleK1 = parseFloat(e.target.value);
      if (valK1) valK1.textContent = scaleK1.toFixed(1);
      draw();
    });
  }
  if (sliderK2) {
    sliderK2.addEventListener('input', (e) => {
      scaleK2 = parseFloat(e.target.value);
      if (valK2) valK2.textContent = scaleK2.toFixed(1);
      draw();
    });
  }

  // Scale Preset buttons
  const btnPresetScale2 = document.getElementById('btn-preset-scale-2');
  const btnPresetScaleNeg = document.getElementById('btn-preset-scale-neg');
  if (btnPresetScale2) {
    btnPresetScale2.addEventListener('click', () => {
      scaleK1 = 2.0; scaleK2 = 1.5;
      if (sliderK1) sliderK1.value = '2.0';
      if (sliderK2) sliderK2.value = '1.5';
      if (valK1) valK1.textContent = '2.0';
      if (valK2) valK2.textContent = '1.5';
      draw();
    });
  }
  if (btnPresetScaleNeg) {
    btnPresetScaleNeg.addEventListener('click', () => {
      scaleK1 = -1.0; scaleK2 = 1.0;
      if (sliderK1) sliderK1.value = '-1.0';
      if (sliderK2) sliderK2.value = '1.0';
      if (valK1) valK1.textContent = '-1.0';
      if (valK2) valK2.textContent = '1.0';
      draw();
    });
  }

  // Shear Controls
  if (sliderShearK) {
    sliderShearK.addEventListener('input', (e) => {
      shearK = parseFloat(e.target.value);
      if (valShearK) valShearK.textContent = shearK.toFixed(1);
      draw();
    });
  }
  if (radioShearH) {
    radioShearH.addEventListener('change', () => {
      shearDir = 'h';
      draw();
    });
  }
  if (radioShearV) {
    radioShearV.addEventListener('change', () => {
      shearDir = 'v';
      draw();
    });
  }

  // Shear Presets
  const btnShearPreset1 = document.getElementById('btn-shear-preset-1');
  const btnShearPresetNeg = document.getElementById('btn-shear-preset-neg');
  const btnShearPreset2 = document.getElementById('btn-shear-preset-2');
  if (btnShearPreset1) {
    btnShearPreset1.addEventListener('click', () => {
      shearK = 1.0;
      if (sliderShearK) sliderShearK.value = '1.0';
      if (valShearK) valShearK.textContent = '1.0';
      draw();
    });
  }
  if (btnShearPresetNeg) {
    btnShearPresetNeg.addEventListener('click', () => {
      shearK = -1.0;
      if (sliderShearK) sliderShearK.value = '-1.0';
      if (valShearK) valShearK.textContent = '-1.0';
      draw();
    });
  }
  if (btnShearPreset2) {
    btnShearPreset2.addEventListener('click', () => {
      shearK = 2.0;
      if (sliderShearK) sliderShearK.value = '2.0';
      if (valShearK) valShearK.textContent = '2.0';
      draw();
    });
  }

  // Reset button
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      isSwapped = false;
      if (btnSwapToggle) btnSwapToggle.textContent = '🔄 执行对调 R₁ ↔ R₂';
      scaleK1 = 1.0; scaleK2 = 1.0;
      if (sliderK1) sliderK1.value = '1.0';
      if (sliderK2) sliderK2.value = '1.0';
      if (valK1) valK1.textContent = '1.0';
      if (valK2) valK2.textContent = '1.0';
      shearK = 1.0;
      if (sliderShearK) sliderShearK.value = '1.0';
      if (valShearK) valShearK.textContent = '1.0';
      draw();
    });
  }

  // Initial draw
  switchTab('shear');
}
