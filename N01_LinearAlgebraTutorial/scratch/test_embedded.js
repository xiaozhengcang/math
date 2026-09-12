
    const document = {
      getElementById: (id) => ({
        getContext: () => ({
          clearRect: () => {},
          beginPath: () => {},
          moveTo: () => {},
          lineTo: () => {},
          stroke: () => {},
          arc: () => {},
          fill: () => {},
          fillText: () => {},
          setLineDash: () => {}
        }),
        addEventListener: () => {},
        width: 460,
        height: 360,
        style: {},
        textContent: '',
        innerHTML: ''
      }),
      querySelectorAll: (sel) => [],
      addEventListener: () => {}
    };
    const window = { MathJax: {} };
    
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: true,
        processEnvironments: true
      },
      options: {
        enableAssistiveMml: false,
        ignoreHtmlClass: 'tex2jax_ignore',
        processHtmlClass: 'tex2jax_process'
      },
      svg: {
        fontCache: 'global'
      }
    };
  

    // 交互实验台：最小二乘拟合与正规方程联动逻辑
    (function() {
      const canvas = document.getElementById('olsCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const btnReset = document.getElementById('btnResetPts');

      const statLineEq = document.getElementById('statLineEq');
      const statC = document.getElementById('statC');
      const statD = document.getElementById('statD');
      const statRSS = document.getElementById('statRSS');
      const statMSE = document.getElementById('statMSE');
      const statNormMat = document.getElementById('statNormMat');

      // Initial points: (x, y) in math coordinates [0..10, 0..10]
      let points = [
        { x: 1.0, y: 1.8 },
        { x: 2.5, y: 3.2 },
        { x: 4.0, y: 3.8 },
        { x: 6.0, y: 6.5 },
        { x: 7.5, y: 7.2 },
        { x: 8.8, y: 9.0 }
      ];

      function toScreen(x, y) {
        const padL = 40, padB = 40, padT = 20, padR = 20;
        const pw = canvas.width - padL - padR;
        const ph = canvas.height - padT - padB;
        return {
          px: padL + (x / 10) * pw,
          py: canvas.height - padB - (y / 10) * ph
        };
      }

      function fromScreen(px, py) {
        const padL = 40, padB = 40, padT = 20, padR = 20;
        const pw = canvas.width - padL - padR;
        const ph = canvas.height - padT - padB;
        const x = Math.max(0, Math.min(10, ((px - padL) / pw) * 10));
        const y = Math.max(0, Math.min(10, ((canvas.height - padB - py) / ph) * 10));
        return { x, y };
      }

      function solveOLS() {
        const m = points.length;
        if (m < 2) return { c: 0, d: 0, rss: 0, mse: 0, sX: 0, sXX: 0, sY: 0, sXY: 0 };

        let sumX = 0, sumY = 0, sumXX = 0, sumXY = 0;
        for (let p of points) {
          sumX += p.x;
          sumY += p.y;
          sumXX += p.x * p.x;
          sumXY += p.x * p.y;
        }

        const det = m * sumXX - sumX * sumX;
        let c = 0, d = 0;
        if (Math.abs(det) > 1e-8) {
          c = (sumXX * sumY - sumX * sumXY) / det;
          d = (m * sumXY - sumX * sumY) / det;
        }

        let rss = 0;
        for (let p of points) {
          const pred = c + d * p.x;
          const err = p.y - pred;
          rss += err * err;
        }
        const mse = rss / m;

        return { c, d, rss, mse, m, sumX, sumXX, sumY, sumXY };
      }

      function render() {
        const w = canvas.width;
        const h = canvas.height;
        ctx.clearRect(0, 0, w, h);

        const padL = 40, padB = 40, padT = 20, padR = 20;
        const pw = w - padL - padR;
        const ph = h - padT - padB;

        // Grid
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
        ctx.lineWidth = 1;
        for (let i = 0; i <= 10; i += 2) {
          const ptX = toScreen(i, 0);
          ctx.beginPath(); ctx.moveTo(ptX.px, padT); ctx.lineTo(ptX.px, h - padB); ctx.stroke();
          const ptY = toScreen(0, i);
          ctx.beginPath(); ctx.moveTo(padL, ptY.py); ctx.lineTo(w - padR, ptY.py); ctx.stroke();

          // Labels
          ctx.fillStyle = '#64748b';
          ctx.font = '10px monospace';
          ctx.fillText(i.toString(), ptX.px - 4, h - padB + 16);
          if (i > 0) ctx.fillText(i.toString(), padL - 20, ptY.py + 4);
        }

        // Axes
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(padL, h - padB);
        ctx.lineTo(w - padR, h - padB);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(padL, h - padB);
        ctx.lineTo(padL, padT);
        ctx.stroke();

        const ols = solveOLS();

        // Draw Residual dashed drops e_i
        ctx.strokeStyle = '#f43f5e';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([3, 3]);
        for (let p of points) {
          const ptReal = toScreen(p.x, p.y);
          const predY = ols.c + ols.d * p.x;
          const ptPred = toScreen(p.x, predY);
          ctx.beginPath();
          ctx.moveTo(ptReal.px, ptReal.py);
          ctx.lineTo(ptPred.px, ptPred.py);
          ctx.stroke();
        }
        ctx.setLineDash([]);

        // Draw OLS Best Fit Line
        if (points.length >= 2) {
          const pStart = toScreen(0, ols.c);
          const pEnd = toScreen(10, ols.c + ols.d * 10);

          ctx.strokeStyle = '#4ade80';
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(pStart.px, pStart.py);
          ctx.lineTo(pEnd.px, pEnd.py);
          ctx.stroke();
        }

        // Draw Data Points
        for (let p of points) {
          const pt = toScreen(p.x, p.y);
          ctx.fillStyle = '#38bdf8';
          ctx.beginPath();
          ctx.arc(pt.px, pt.py, 6, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = '#fff';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }

        // Update live math readouts
        const sign = ols.d >= 0 ? '+' : '-';
        statLineEq.textContent = `y = ${ols.c.toFixed(2)} ${sign} ${Math.abs(ols.d).toFixed(2)}x`;
        statC.textContent = ols.c.toFixed(3);
        statD.textContent = ols.d.toFixed(3);
        statRSS.textContent = ols.rss.toFixed(4);
        statMSE.textContent = ols.mse.toFixed(4);

        if (ols.m) {
          statNormMat.innerHTML = `AᵀA = [${ols.m}, ${ols.sumX.toFixed(1)}; ${ols.sumX.toFixed(1)}, ${ols.sumXX.toFixed(1)}] | Aᵀb = [${ols.sumY.toFixed(1)}, ${ols.sumXY.toFixed(1)}]ᵀ`;
        }
      }

      // Interaction: Click to add points
      canvas.addEventListener('click', (e) => {
        const rect = canvas.getBoundingClientRect();
        const px = (e.clientX - rect.left) * (canvas.width / rect.width);
        const py = (e.clientY - rect.top) * (canvas.height / rect.height);
        const mathPt = fromScreen(px, py);
        points.push(mathPt);
        render();
      });

      btnReset.addEventListener('click', () => {
        points = [
          { x: 1.0, y: 1.8 },
          { x: 2.5, y: 3.2 },
          { x: 4.0, y: 3.8 },
          { x: 6.0, y: 6.5 },
          { x: 7.5, y: 7.2 },
          { x: 8.8, y: 9.0 }
        ];
        render();
      });

      render();
    })();

    // 交互式自测 Quiz 选项点击逻辑
    document.addEventListener('DOMContentLoaded', () => {
      const quizItems = document.querySelectorAll('.quiz-item');
      quizItems.forEach(item => {
        const buttons = item.querySelectorAll('.quiz-opt');
        const feedback = item.querySelector('.quiz-feedback');

        buttons.forEach(btn => {
          btn.addEventListener('click', () => {
            const isCorrect = btn.getAttribute('data-correct') === 'true';
            buttons.forEach(b => {
              b.style.borderColor = 'transparent';
              b.style.opacity = '0.6';
            });
            btn.style.opacity = '1';

            if (isCorrect) {
              btn.style.borderColor = 'var(--accent-green)';
              btn.style.background = 'rgba(52, 211, 153, 0.15)';
              feedback.style.display = 'block';
              feedback.style.background = 'rgba(52, 211, 153, 0.1)';
              feedback.style.border = '1px solid var(--accent-green)';
              feedback.style.color = 'var(--accent-green)';
              feedback.innerHTML = '<strong>🎉 回答正确！</strong> ' + getQuizExplanation72(item, true);
            } else {
              btn.style.borderColor = 'var(--accent-rose)';
              btn.style.background = 'rgba(244, 63, 94, 0.15)';
              feedback.style.display = 'block';
              feedback.style.background = 'rgba(244, 63, 94, 0.1)';
              feedback.style.border = '1px solid var(--accent-rose)';
              feedback.style.color = 'var(--accent-rose)';
              feedback.innerHTML = '<strong>❌ 答案不正确。</strong> ' + getQuizExplanation72(item, false);
            }
          });
        });
      });

      function getQuizExplanation72(item, isCorrect) {
        const text = item.querySelector('div').innerText;
        if (text.includes('特征值必然是')) {
          return '选项 B 正确。由 P² = P 可知特征值 λ² = λ，因此 λ 只能取 0 或 1。属于 λ=1 的特征空间恰好是投影目标子空间 Col(A)，维数为 k；属于 λ=0 的特征空间是正交补空间，维数为 m-k。';
        } else if (text.includes('满足 P² = P，但并不满足 Pᵀ = P')) {
          return '选项 B 正确。P² = P 仅保证它是某种投影算子（投两次等于投一次），但若不满足对称性 Pᵀ = P，说明投影方向不垂直于目标子空间，这正是斜投影 (Oblique Projection)！';
        } else if (text.includes('推荐使用 QR 分解而非直接求逆')) {
          return '选项 B 正确。计算 AᵀA 会使其条件数平方化（κ(AᵀA) = [κ(A)]²），一旦原设计矩阵条件数为 10^8，AᵀA 条件数瞬间飙至 10^16，直接击穿双精度浮点精度限制！而 QR 分解保持条件数不变。';
        }
        return '';
      }
    });
  