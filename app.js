/**
 * AI & 现代数学前沿理论知识图谱 - 前端核心逻辑 (Canvas DAG, 交互与渲染引擎)
 */

document.addEventListener('DOMContentLoaded', () => {
  // State variables
  let nodes = KNOWLEDGE_NODES;
  let hoveredNodeId = null;
  let selectedNodeId = null;
  let activeFilter = 'all';
  let searchQuery = '';
  
  // Canvas Viewport Transforms (Pan & Zoom)
  let zoomLevel = 1;
  let panX = 0;
  let panY = 0;
  let isDragging = false;
  let startX = 0;
  let startY = 0;
  
  // Elements
  const canvas = document.getElementById('dagCanvas');
  const ctx = canvas.getContext('2d');
  const modalBackdrop = document.getElementById('nodeModal');
  const modalCloseBtn = document.getElementById('modalClose');
  const searchInput = document.getElementById('searchInput');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const progressBadge = document.getElementById('progressBadgeText');
  const scrollProgressBar = document.getElementById('scroll-progress');
  
  // Progress state from LocalStorage
  let completedNodes = JSON.parse(localStorage.getItem('ai_math_completed_nodes') || '[]');

  // --------------------------------------------------------------------------
  // 1. DAG Node Positioning & Coordinates Setup
  // --------------------------------------------------------------------------
  function calculateNodePositions(width, height) {
    const marginX = 80;
    const marginY = 60;
    const availableW = width - marginX * 2;
    const availableH = height - marginY * 2;

    // Group by levelNum (0, 1, 2, 3, 4)
    const levels = { 0: [], 1: [], 2: [], 3: [], 4: [] };
    nodes.forEach(node => {
      if (levels[node.levelNum] !== undefined) {
        levels[node.levelNum].push(node);
      }
    });

    const levelXStep = availableW / 4;

    Object.keys(levels).forEach(levelIdxStr => {
      const levelIdx = parseInt(levelIdxStr, 10);
      const group = levels[levelIdx];
      const count = group.length;
      const x = marginX + levelIdx * levelXStep;

      group.forEach((node, i) => {
        const yStep = availableH / (count + 1);
        node.x = x;
        node.y = marginY + yStep * (i + 1);
        node.radius = levelIdx === 4 ? 22 : (levelIdx === 0 ? 15 : 18);
      });
    });
  }

  // --------------------------------------------------------------------------
  // 2. DAG Topology Canvas Drawing Engine
  // --------------------------------------------------------------------------
  let animationFrameId = null;
  let pulseOffset = 0;

  function resizeCanvas() {
    const container = canvas.parentElement;
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    calculateNodePositions(canvas.width, canvas.height);
  }

  function getLevelColor(levelNum) {
    switch(levelNum) {
      case 0: return '#38bdf8'; // Blue
      case 1: return '#10b981'; // Emerald
      case 2: return '#a855f7'; // Purple
      case 3: return '#f59e0b'; // Amber
      case 4: return '#f43f5e'; // Rose
      default: return '#6366f1';
    }
  }

  function getUpstreamNodes(nodeId, visited = new Set()) {
    if (visited.has(nodeId)) return visited;
    visited.add(nodeId);
    const node = nodes.find(n => n.id === nodeId);
    if (node && node.prereqs) {
      node.prereqs.forEach(prereqId => getUpstreamNodes(prereqId, visited));
    }
    return visited;
  }

  function getDownstreamNodes(nodeId, visited = new Set()) {
    if (visited.has(nodeId)) return visited;
    visited.add(nodeId);
    nodes.forEach(n => {
      if (n.prereqs && n.prereqs.includes(nodeId)) {
        getDownstreamNodes(n.id, visited);
      }
    });
    return visited;
  }

  function drawDAG() {
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Apply viewport pan & zoom transforms
    ctx.translate(panX, panY);
    ctx.scale(zoomLevel, zoomLevel);

    const activeUpstream = hoveredNodeId ? getUpstreamNodes(hoveredNodeId) : new Set();
    const activeDownstream = hoveredNodeId ? getDownstreamNodes(hoveredNodeId) : new Set();

    pulseOffset = (pulseOffset + 0.03) % 1;

    // --- Step A: Draw Connections (Bezier curves) ---
    nodes.forEach(node => {
      if (!node.prereqs) return;
      node.prereqs.forEach(prereqId => {
        const sourceNode = nodes.find(n => n.id === prereqId);
        if (!sourceNode) return;

        const isHighlighted = hoveredNodeId && 
          (activeUpstream.has(sourceNode.id) && activeUpstream.has(node.id));

        ctx.beginPath();
        const startX = sourceNode.x;
        const startY = sourceNode.y;
        const endX = node.x;
        const endY = node.y;
        const ctrlX1 = startX + (endX - startX) * 0.5;
        const ctrlY1 = startY;
        const ctrlX2 = startX + (endX - startX) * 0.5;
        const ctrlY2 = endY;

        ctx.moveTo(startX, startY);
        ctx.bezierCurveTo(ctrlX1, ctrlY1, ctrlX2, ctrlY2, endX, endY);

        if (isHighlighted) {
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 3;
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 10;
        } else if (hoveredNodeId) {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
          ctx.lineWidth = 1;
          ctx.shadowBlur = 0;
        } else {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
          ctx.lineWidth = 1.5;
          ctx.shadowBlur = 0;
        }
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Draw animated energy pulse on highlighted edges
        if (isHighlighted) {
          const t = pulseOffset;
          const px = Math.pow(1-t,3)*startX + 3*Math.pow(1-t,2)*t*ctrlX1 + 3*(1-t)*t*t*ctrlX2 + Math.pow(t,3)*endX;
          const py = Math.pow(1-t,3)*startY + 3*Math.pow(1-t,2)*t*ctrlY1 + 3*(1-t)*t*t*ctrlY2 + Math.pow(t,3)*endY;

          ctx.beginPath();
          ctx.arc(px, py, 4, 0, Math.PI * 2);
          ctx.fillStyle = '#60a5fa';
          ctx.shadowColor = '#60a5fa';
          ctx.shadowBlur = 8;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });
    });

    // --- Step B: Draw Nodes ---
    nodes.forEach(node => {
      const color = getLevelColor(node.levelNum);
      const isHovered = hoveredNodeId === node.id;
      const isUp = hoveredNodeId && activeUpstream.has(node.id);
      const isDown = hoveredNodeId && activeDownstream.has(node.id);
      const isDimmed = hoveredNodeId && !isUp && !isDown;
      const isDone = completedNodes.includes(node.id);

      ctx.save();
      ctx.translate(node.x, node.y);

      // Outer Glow Halo
      if (isHovered || isUp || isDown) {
        ctx.beginPath();
        ctx.arc(0, 0, node.radius + 6, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? color : (isUp ? '#38bdf8' : '#f59e0b');
        ctx.globalAlpha = 0.35;
        ctx.shadowColor = color;
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.globalAlpha = 1.0;
        ctx.shadowBlur = 0;
      }

      // Main Circle
      ctx.beginPath();
      ctx.arc(0, 0, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = isDimmed ? 'rgba(15, 23, 42, 0.6)' : '#0f172a';
      ctx.fill();
      ctx.lineWidth = isHovered ? 3 : 2;
      ctx.strokeStyle = isDimmed ? 'rgba(255,255,255,0.1)' : color;
      ctx.stroke();

      // Completed checkmark indicator dot
      if (isDone) {
        ctx.beginPath();
        ctx.arc(node.radius * 0.7, -node.radius * 0.7, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#10b981';
        ctx.fill();
      }

      // Text Labels
      ctx.fillStyle = isDimmed ? 'rgba(148, 163, 184, 0.4)' : '#f8fafc';
      ctx.font = isHovered ? 'bold 13px Outfit, sans-serif' : '12px Outfit, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(node.id, 0, 0);

      // Node Name Below
      ctx.font = isHovered ? 'bold 12px Outfit, sans-serif' : '11px Outfit, sans-serif';
      ctx.fillStyle = isDimmed ? 'rgba(148, 163, 184, 0.3)' : (isHovered ? '#fff' : '#cbd5e1');
      ctx.fillText(node.title, 0, node.radius + 14);

      ctx.restore();
    });

    ctx.restore();
    animationFrameId = requestAnimationFrame(drawDAG);
  }

  // Handle canvas mouse interactions
  function getCanvasCoords(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    const worldX = (clientX - panX) / zoomLevel;
    const worldY = (clientY - panY) / zoomLevel;
    return { clientX, clientY, worldX, worldY };
  }

  canvas.addEventListener('mousemove', (e) => {
    const { worldX, worldY } = getCanvasCoords(e);

    if (isDragging) {
      panX = e.clientX - startX;
      panY = e.clientY - startY;
      return;
    }

    let foundNode = null;
    nodes.forEach(node => {
      const dist = Math.hypot(node.x - worldX, node.y - worldY);
      if (dist <= node.radius + 5) {
        foundNode = node.id;
      }
    });

    if (hoveredNodeId !== foundNode) {
      hoveredNodeId = foundNode;
      canvas.style.cursor = foundNode ? 'pointer' : (isDragging ? 'grabbing' : 'grab');
    }
  });

  canvas.addEventListener('mousedown', (e) => {
    const { worldX, worldY } = getCanvasCoords(e);
    let clickedNode = null;
    nodes.forEach(node => {
      const dist = Math.hypot(node.x - worldX, node.y - worldY);
      if (dist <= node.radius + 5) {
        clickedNode = node.id;
      }
    });

    if (clickedNode) {
      openNodeModal(clickedNode);
    } else {
      isDragging = true;
      startX = e.clientX - panX;
      startY = e.clientY - panY;
      canvas.style.cursor = 'grabbing';
    }
  });

  window.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      canvas.style.cursor = 'grab';
    }
  });

  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
    const newZoom = Math.min(Math.max(0.5, zoomLevel * zoomFactor), 2.5);
    
    // Zoom around mouse cursor
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    panX = mouseX - (mouseX - panX) * (newZoom / zoomLevel);
    panY = mouseY - (mouseY - panY) * (newZoom / zoomLevel);
    zoomLevel = newZoom;
  });

  // Canvas Toolbar Buttons
  document.getElementById('zoomIn').addEventListener('click', () => { zoomLevel = Math.min(2.5, zoomLevel * 1.2); });
  document.getElementById('zoomOut').addEventListener('click', () => { zoomLevel = Math.max(0.5, zoomLevel / 1.2); });
  document.getElementById('zoomReset').addEventListener('click', () => { zoomLevel = 1; panX = 0; panY = 0; });

  // --------------------------------------------------------------------------
  // 3. Level Roadmap Cards Renderer
  // --------------------------------------------------------------------------
  function renderRoadmapCards() {
    const container = document.getElementById('roadmapContainer');
    container.innerHTML = '';

    const levelsMap = {
      0: { title: "Level 0: 先修基础", badgeClass: "level-0-badge" },
      1: { title: "Level 1: 核心工具", badgeClass: "level-1-badge" },
      2: { title: "Level 2: 模型与几何", badgeClass: "level-2-badge" },
      3: { title: "Level 3: 前沿理论", badgeClass: "level-3-badge" },
      4: { title: "顶层目标: 复杂系统与 Scaling Laws", badgeClass: "level-4-badge" }
    };

    Object.keys(levelsMap).forEach(lvlNumStr => {
      const lvlNum = parseInt(lvlNumStr, 10);
      if (activeFilter !== 'all' && activeFilter !== `level-${lvlNum}`) return;

      const groupNodes = nodes.filter(n => n.levelNum === lvlNum && matchesSearch(n));
      if (groupNodes.length === 0) return;

      const groupEl = document.createElement('div');
      groupEl.className = 'level-group';

      const headerEl = document.createElement('div');
      headerEl.className = 'level-header';
      headerEl.innerHTML = `
        <span class="level-badge ${levelsMap[lvlNum].badgeClass}">${levelsMap[lvlNum].title}</span>
      `;

      const gridEl = document.createElement('div');
      gridEl.className = 'cards-grid';

      groupNodes.forEach(node => {
        const isDone = completedNodes.includes(node.id);
        const cardEl = document.createElement('div');
        cardEl.className = `node-card ${isDone ? 'done' : ''}`;
        cardEl.dataset.id = node.id;

        cardEl.innerHTML = `
          <div>
            <div class="card-top">
              <span class="node-id" style="color: ${getLevelColor(node.levelNum)};">${node.id}</span>
              ${isDone ? '<span style="color:#10b981; font-size:0.8rem; font-weight:700;">✓ 已掌握</span>' : ''}
            </div>
            <h3 class="node-title-text">${node.title}</h3>
            <p class="node-desc-short">${node.description}</p>
            <div class="node-meta-pills">
              ${node.prereqs.length > 0 ? `<span class="meta-pill prereq">前置: ${node.prereqs.join(', ')}</span>` : '<span class="meta-pill">无前置 (基底)</span>'}
              ${node.outputs.length > 0 ? `<span class="meta-pill output">指向: ${node.outputs.slice(0, 3).join(', ')}${node.outputs.length > 3 ? '...' : ''}</span>` : ''}
            </div>
          </div>

          <div class="card-footer">
            <button class="btn-detail" onclick="window.openNodeModal('${node.id}')">查看完整理论与论文 ➔</button>
            <label class="check-label">
              <input type="checkbox" ${isDone ? 'checked' : ''} onchange="window.toggleNodeProgress('${node.id}')">
              打卡
            </label>
          </div>
        `;

        gridEl.appendChild(cardEl);
      });

      groupEl.appendChild(headerEl);
      groupEl.appendChild(gridEl);
      container.appendChild(groupEl);
    });
  }

  function matchesSearch(node) {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return node.id.toLowerCase().includes(q) ||
      node.title.toLowerCase().includes(q) ||
      node.mathTools.toLowerCase().includes(q) ||
      node.applications.toLowerCase().includes(q) ||
      node.books.some(b => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q)) ||
      node.papers.some(p => p.title.toLowerCase().includes(q) || p.authors.toLowerCase().includes(q));
  }

  // --------------------------------------------------------------------------
  // 4. Modal Handler for Node Details
  // --------------------------------------------------------------------------
  window.openNodeModal = function(nodeId) {
    const node = nodes.find(n => n.id === nodeId);
    if (!node) return;

    selectedNodeId = nodeId;

    document.getElementById('modalNodeTag').textContent = `${node.id} · ${node.level}`;
    document.getElementById('modalNodeTag').style.color = getLevelColor(node.levelNum);
    document.getElementById('modalNodeTag').style.background = `${getLevelColor(node.levelNum)}20`;

    document.getElementById('modalTitle').textContent = node.title;
    document.getElementById('modalDesc').textContent = node.description;
    document.getElementById('modalMathTools').innerHTML = node.mathTools;
    document.getElementById('modalApplications').textContent = node.applications;

    // Prereqs & Outputs linkages
    const prereqContainer = document.getElementById('modalPrereqs');
    prereqContainer.innerHTML = node.prereqs.length === 0 ? '<span>无（基底节点）</span>' :
      node.prereqs.map(pid => `<button class="filter-btn" onclick="window.openNodeModal('${pid}')">${pid}</button>`).join(' ');

    const outputContainer = document.getElementById('modalOutputs');
    outputContainer.innerHTML = node.outputs.map(oid => `<button class="filter-btn" onclick="window.openNodeModal('${oid}')">${oid}</button>`).join(' ');

    // Books list
    const booksContainer = document.getElementById('modalBooks');
    booksContainer.innerHTML = node.books.map(b => `
      <div class="item-card">
        <strong>📖 ${b.title}</strong>
        <div style="color: var(--text-secondary); font-size: 0.82rem; margin-top: 0.2rem;">作者: ${b.author}</div>
      </div>
    `).join('');

    // Papers list
    const papersContainer = document.getElementById('modalPapers');
    papersContainer.innerHTML = node.papers.map(p => `
      <div class="item-card paper">
        <strong>📄 ${p.title}</strong>
        <div style="color: var(--text-secondary); font-size: 0.82rem; margin-top: 0.2rem;">
          作者: ${p.authors} · <span style="color: var(--accent-emerald); font-weight: 600;">${p.journal} (${p.year})</span>
        </div>
      </div>
    `).join('');

    // Local links
    const localLinksContainer = document.getElementById('modalLocalLinks');
    if (node.localLinks && node.localLinks.length > 0) {
      localLinksContainer.innerHTML = node.localLinks.map(l => `
        <a href="${l.url}" class="local-link-btn" target="_blank">
          <span>🚀 ${l.name}</span>
        </a>
      `).join('');
    } else {
      localLinksContainer.innerHTML = '<span style="color: var(--text-muted); font-size: 0.88rem;">当前节点暂未挂载本地特定 HTML 实验页面，可在上方查阅奠基论文与经典教材。</span>';
    }

    modalBackdrop.classList.add('active');

    // Trigger KaTeX render if loaded
    if (window.renderMathInElement) {
      window.renderMathInElement(document.getElementById('modalBody'), {
        delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$', right: '$', display: false},
          {left: '\\(', right: '\\)', display: false},
          {left: '\\[', right: '\\]', display: true}
        ],
        throwOnError: false
      });
    }
  };

  function closeModal() {
    modalBackdrop.classList.remove('active');
  }

  modalCloseBtn.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  // --------------------------------------------------------------------------
  // 5. LocalStorage Progress Management
  // --------------------------------------------------------------------------
  window.toggleNodeProgress = function(nodeId) {
    if (completedNodes.includes(nodeId)) {
      completedNodes = completedNodes.filter(id => id !== nodeId);
    } else {
      completedNodes.push(nodeId);
    }
    localStorage.setItem('ai_math_completed_nodes', JSON.stringify(completedNodes));
    updateProgressUI();
    renderRoadmapCards();
  };

  function updateProgressUI() {
    const pct = Math.round((completedNodes.length / nodes.length) * 100);
    progressBadge.textContent = `${completedNodes.length}/${nodes.length} 打卡 (${pct}%)`;
  }

  // Search & Filters Listener
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderRoadmapCards();
  });

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderRoadmapCards();
    });
  });

  // Window scroll progress bar
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgressBar.style.width = scrolled + "%";
  });

  // --------------------------------------------------------------------------
  // 6. Interactive Visual Labs Setup (LoRA, Softmax, Scaling Law)
  // --------------------------------------------------------------------------
  function setupInteractiveLabs() {
    // Lab 1: LoRA Low-Rank Decomposition
    const dimSlider = document.getElementById('loraDim');
    const rankSlider = document.getElementById('loraRank');
    const loraResult = document.getElementById('loraResult');

    function updateLoRA() {
      const d = parseInt(dimSlider.value, 10);
      const r = parseInt(rankSlider.value, 10);
      const origParams = d * d;
      const loraParams = 2 * r * d;
      const compression = ((1 - loraParams / origParams) * 100).toFixed(1);

      document.getElementById('loraDimVal').textContent = `${d} × ${d}`;
      document.getElementById('loraRankVal').textContent = `r = ${r}`;
      loraResult.innerHTML = `
        原始全量矩阵 $W_0$: <strong>${origParams.toLocaleString()}</strong> 参数<br>
        LoRA 低秩分解 $B \\cdot A$: <strong>${loraParams.toLocaleString()}</strong> 参数<br>
        <span style="color: var(--accent-emerald); font-weight:700;">节省算力/显存: ${compression}%</span>
      `;
      if (window.renderMathInElement) window.renderMathInElement(loraResult);
    }
    dimSlider.addEventListener('input', updateLoRA);
    rankSlider.addEventListener('input', updateLoRA);
    updateLoRA();

    // Lab 2: Softmax Temperature Sampling
    const tempSlider = document.getElementById('tempSlider');
    const tempVal = document.getElementById('tempVal');
    const softmaxCanvas = document.getElementById('softmaxCanvas');
    const smCtx = softmaxCanvas.getContext('2d');

    const logits = [2.5, 1.2, 0.3, -0.8];
    const labels = ["Token A", "Token B", "Token C", "Token D"];

    function updateSoftmax() {
      const T = parseFloat(tempSlider.value);
      tempVal.textContent = T.toFixed(2);

      const expLogits = logits.map(z => Math.exp(z / T));
      const sumExp = expLogits.reduce((a, b) => a + b, 0);
      const probs = expLogits.map(e => e / sumExp);

      smCtx.clearRect(0, 0, softmaxCanvas.width, softmaxCanvas.height);
      const barW = 50;
      const gap = 25;
      const startX = 30;

      probs.forEach((p, i) => {
        const x = startX + i * (barW + gap);
        const barH = p * 140;
        const y = 160 - barH;

        smCtx.fillStyle = '#38bdf8';
        smCtx.fillRect(x, y, barW, barH);

        smCtx.fillStyle = '#fff';
        smCtx.font = '11px Fira Code';
        smCtx.textAlign = 'center';
        smCtx.fillText((p * 100).toFixed(1) + '%', x + barW / 2, y - 6);
        smCtx.fillText(labels[i], x + barW / 2, 178);
      });
    }
    tempSlider.addEventListener('input', updateSoftmax);
    updateSoftmax();
  }

  // Initialization
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  drawDAG();
  renderRoadmapCards();
  updateProgressUI();
  setupInteractiveLabs();
});
