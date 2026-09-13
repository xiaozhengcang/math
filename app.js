/**
 * AI & 现代数学前沿理论知识图谱 - 前端核心逻辑 (Canvas DAG, 交互与渲染引擎)
 */

document.addEventListener('DOMContentLoaded', () => {
  // State variables
  let nodes = KNOWLEDGE_NODES;
  let activeFilter = 'all';
  let searchQuery = '';
  
  // Elements
  const modalBackdrop = document.getElementById('nodeModal');
  const modalCloseBtn = document.getElementById('modalClose');
  const searchInput = document.getElementById('searchInput');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const scrollProgressBar = document.getElementById('scroll-progress');

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

  // --------------------------------------------------------------------------
  // 1. Syllabus Disciplines Cards Renderer (13 大核心学科 · 4 大支柱模块)
  // --------------------------------------------------------------------------
  const modulesMap = {
    "module-1": { title: "🏛️ 模块一：基础数学支柱", badgeClass: "mod-1", desc: "微积分、线性代数、概率统计与凸优化理论" },
    "module-2": { title: "🌊 模块二：分析、测度与动力系统", badgeClass: "mod-2", desc: "实变函数与测度论、泛函分析、偏微分方程、随机过程与随机分析" },
    "module-3": { title: "📊 模块三：信息、时序与统计学习界", badgeClass: "mod-3", desc: "信息论基础、时间序列分析与状态空间模型、高维概率与统计学习理论" },
    "module-4": { title: "🚀 模块四：现代 AI 前沿交叉专题", badgeClass: "mod-4", desc: "李代数几何深度学习、随机矩阵论、连续生成流、大模型数学建模与复杂系统 Scaling Laws" }
  };

  function renderRoadmapCards() {
    const container = document.getElementById('roadmapContainer');
    container.innerHTML = '';

    Object.keys(modulesMap).forEach(modId => {
      if (activeFilter !== 'all' && activeFilter !== modId) return;

      const groupDisciplines = SYLLABUS_DISCIPLINES.filter(d => d.moduleId === modId && matchesSyllabusSearch(d));
      if (groupDisciplines.length === 0) return;

      const groupEl = document.createElement('div');
      groupEl.className = 'module-group';

      const headerEl = document.createElement('div');
      headerEl.className = 'module-header';
      headerEl.innerHTML = `
        <div class="module-title-wrap">
          <span class="module-badge ${modulesMap[modId].badgeClass}">${modulesMap[modId].title}</span>
        </div>
        <span class="module-desc">${modulesMap[modId].desc}</span>
      `;

      const gridEl = document.createElement('div');
      gridEl.className = 'syllabus-grid';

      groupDisciplines.forEach(d => {
        const cardEl = document.createElement('div');
        cardEl.className = 'syllabus-card';
        cardEl.style.setProperty('--card-accent', d.color);
        cardEl.dataset.id = d.id;

        const textbookHtml = d.primaryTextbook ? `
          <a href="${d.primaryTextbook.url}" target="_blank" class="card-textbook-bar" title="研读推荐教材">
            <div class="card-textbook-info">
              <span>📖</span> ${d.primaryTextbook.title}
            </div>
            <span class="card-textbook-badge">${d.primaryTextbook.badge || '配套教材'}</span>
          </a>
        ` : '';

        const conceptsPills = d.topics.map(t => `<span class="concept-tag">${t}</span>`).join('');

        cardEl.innerHTML = `
          <div>
            <div class="syllabus-top">
              <div style="display:flex; align-items:center; gap:0.5rem;">
                <span class="discipline-id-badge" style="color: ${d.color}; border-color: ${d.color}40; background: ${d.color}15;">${d.id}</span>
                <span style="font-size:0.75rem; color:${d.color}; font-weight:700; border:1px solid ${d.color}40; padding:0.12rem 0.45rem; border-radius:6px; background:rgba(255,255,255,0.03);">${d.badge}</span>
              </div>
            </div>

            <h3 class="discipline-title">${d.name}</h3>
            <p class="discipline-overview">${d.overview}</p>

            <div class="concepts-section">
              <div class="concepts-label">
                <span>📋</span> 核心概念与考点
              </div>
              <div class="concepts-pills">
                ${conceptsPills}
              </div>
            </div>

            ${textbookHtml}

            <div class="discipline-meta">
              <div class="meta-row">
                <strong>🧮 数学工具：</strong>
                <span class="meta-row-content">${d.mathTools}</span>
              </div>
              <div class="meta-row">
                <strong>⚡ AI 应用：</strong>
                <span class="meta-row-content">${d.aiApplications}</span>
              </div>
            </div>
          </div>

          <div class="syllabus-card-footer">
            <div class="syllabus-action-btns">
              <a href="${d.primaryTutorial.url}" target="_blank" class="btn-syllabus-primary" style="background: linear-gradient(135deg, ${d.color}25 0%, rgba(99, 102, 241, 0.2) 100%); border-color: ${d.color}60; color: ${d.color};">
                阅读教程 ➔
              </a>
              <button class="btn-syllabus-secondary" onclick="window.openDisciplineModal('${d.id}')" title="查看知识点与参考文献">
                理论与文献
              </button>
            </div>
          </div>
        `;

        gridEl.appendChild(cardEl);
      });

      groupEl.appendChild(headerEl);
      groupEl.appendChild(gridEl);
      container.appendChild(groupEl);
    });

    if (window.renderMathInElement) {
      window.renderMathInElement(container, {
        delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$', right: '$', display: false},
          {left: '\\(', right: '\\)', display: false},
          {left: '\\[', right: '\\]', display: true}
        ],
        throwOnError: false
      });
    }
  }

  function matchesSyllabusSearch(d) {
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return d.name.toLowerCase().includes(q) ||
      d.id.toLowerCase().includes(q) ||
      d.overview.toLowerCase().includes(q) ||
      d.topics.some(t => t.toLowerCase().includes(q)) ||
      d.mathTools.toLowerCase().includes(q) ||
      d.aiApplications.toLowerCase().includes(q) ||
      (d.primaryTextbook && d.primaryTextbook.title.toLowerCase().includes(q)) ||
      (d.seminalPapers && d.seminalPapers.some(p => p.title.toLowerCase().includes(q) || p.authors.toLowerCase().includes(q)));
  }

  // --------------------------------------------------------------------------
  // 4. Modal Handlers (Discipline Details & Node Details)
  // --------------------------------------------------------------------------
  window.openDisciplineModal = function(disciplineId) {
    const d = SYLLABUS_DISCIPLINES.find(item => item.id === disciplineId);
    if (!d) return;

    document.getElementById('modalNodeTag').textContent = `${d.id} · ${d.badge}`;
    document.getElementById('modalNodeTag').style.color = d.color;
    document.getElementById('modalNodeTag').style.background = `${d.color}20`;

    document.getElementById('modalTitle').textContent = d.name;
    document.getElementById('modalDesc').textContent = d.overview;

    // Topics list in modal
    const topicsHtml = `
      <div style="margin-bottom: 0.75rem;">
        <div class="concepts-pills">
          ${d.topics.map(t => `<span class="concept-tag" style="font-size:0.85rem; padding:0.25rem 0.65rem; color:#fff; background:rgba(255,255,255,0.08);">${t}</span>`).join('')}
        </div>
      </div>
      <div style="font-size:0.95rem; color:#f1f5f9; font-family:var(--font-mono);">${d.mathTools}</div>
    `;
    document.getElementById('modalMathTools').innerHTML = topicsHtml;
    document.getElementById('modalApplications').textContent = d.aiApplications;

    // Prereqs & Outputs linkages
    const prereqContainer = document.getElementById('modalPrereqs');
    prereqContainer.innerHTML = d.relatedNodeIds ? d.relatedNodeIds.map(nid => `<button class="filter-btn" onclick="window.openNodeModal('${nid}')">${nid} 对应节点</button>`).join(' ') : '<span>现代核心大纲学科</span>';

    const outputContainer = document.getElementById('modalOutputs');
    outputContainer.innerHTML = `<span style="color:var(--text-secondary); font-size:0.85rem;">已按 2026 最新前沿大纲严格归纳</span>`;

    // Books list
    const booksContainer = document.getElementById('modalBooks');
    if (d.primaryTextbook) {
      booksContainer.innerHTML = `
        <div class="item-card">
          <strong>📖 ${d.primaryTextbook.title}</strong>
          <div style="color: var(--accent-blue); font-size: 0.82rem; margin-top: 0.2rem;">
            <a href="${d.primaryTextbook.url}" target="_blank" style="color:var(--accent-blue); text-decoration:none;">进入配套教材 ➔</a>
          </div>
        </div>
      `;
    } else {
      booksContainer.innerHTML = '<span style="color:var(--text-muted); font-size:0.85rem;">可参考上方经典教材文库中的对应章节。</span>';
    }

    // Papers list
    const papersContainer = document.getElementById('modalPapers');
    if (d.seminalPapers && d.seminalPapers.length > 0) {
      papersContainer.innerHTML = d.seminalPapers.map(p => `
        <div class="item-card paper">
          <strong>📄 ${p.title}</strong>
          <div style="color: var(--text-secondary); font-size: 0.82rem; margin-top: 0.2rem;">
            作者: ${p.authors} · <span style="color: var(--accent-emerald); font-weight: 600;">${p.journal} (${p.year})</span>
          </div>
        </div>
      `).join('');
    } else {
      papersContainer.innerHTML = '<span style="color:var(--text-muted); font-size:0.85rem;">详见专属子目录教程中的经典文献研读章节。</span>';
    }

    // Local links
    const localLinksContainer = document.getElementById('modalLocalLinks');
    let linksHtml = `
      <a href="${d.primaryTutorial.url}" class="local-link-btn" target="_blank" style="background:rgba(56, 189, 248, 0.15); border-color:rgba(56, 189, 248, 0.4); color:#38bdf8; font-weight:700;">
        <span>🚀 ${d.primaryTutorial.title}</span>
      </a>
    `;
    if (d.localLabs && d.localLabs.length > 0) {
      linksHtml += d.localLabs.map(l => `
        <a href="${l.url}" class="local-link-btn" target="_blank">
          <span>🧪 ${l.name}</span>
        </a>
      `).join('');
    }
    localLinksContainer.innerHTML = linksHtml;

    modalBackdrop.classList.add('active');

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

    const prereqContainer = document.getElementById('modalPrereqs');
    prereqContainer.innerHTML = node.prereqs.length === 0 ? '<span>无（基底节点）</span>' :
      node.prereqs.map(pid => `<button class="filter-btn" onclick="window.openNodeModal('${pid}')">${pid}</button>`).join(' ');

    const outputContainer = document.getElementById('modalOutputs');
    outputContainer.innerHTML = node.outputs.map(oid => `<button class="filter-btn" onclick="window.openNodeModal('${oid}')">${oid}</button>`).join(' ');

    const booksContainer = document.getElementById('modalBooks');
    booksContainer.innerHTML = node.books.map(b => `
      <div class="item-card">
        <strong>📖 ${b.title}</strong>
        <div style="color: var(--text-secondary); font-size: 0.82rem; margin-top: 0.2rem;">作者: ${b.author}</div>
      </div>
    `).join('');

    const papersContainer = document.getElementById('modalPapers');
    papersContainer.innerHTML = node.papers.map(p => `
      <div class="item-card paper">
        <strong>📄 ${p.title}</strong>
        <div style="color: var(--text-secondary); font-size: 0.82rem; margin-top: 0.2rem;">
          作者: ${p.authors} · <span style="color: var(--accent-emerald); font-weight: 600;">${p.journal} (${p.year})</span>
        </div>
      </div>
    `).join('');

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
  // 5. Interactive Visual Labs Setup (LoRA, Softmax)
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
        <span style="color: var(--accent-emerald); font-weight:700;">参数量削减: ${compression}%</span>
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
  renderRoadmapCards();
  setupInteractiveLabs();
});
