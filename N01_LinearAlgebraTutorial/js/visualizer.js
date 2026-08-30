/* ==========================================================================
   Linear Algebra Interactive Visualizers
   Interactive HTML5 Canvas for Vectors, Transformations, Determinants & Projections
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initVectorVisualizer();
  initTransformVisualizer();
  initEigenVisualizer();
  initProjectionVisualizer();
});

// Window resize handler for canvas responsive scaling
window.addEventListener('resize', () => {
  initVectorVisualizer();
  initTransformVisualizer();
  initEigenVisualizer();
  initProjectionVisualizer();
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
