# 项目与全局规则

1. The chat box cannot render Latex, use Unicode when the output is for the chatbox.
2. 不要用打开浏览器的方式验证 HTML 文件，必须使用脚本方式（例如 Python/Node 语法解析与逻辑测试脚本）进行验证。

---

## 核心经验教训与防错指南 (Post-Mortem & Best Practices)

### 1. 严格以成熟基准文件为准（MathJax SVG 本地回退机制）
- **唯一标准基准**：新增或修改 HTML 文件时，`<head>` 标签中的 MathJax 配置与脚本引用必须 100% 对齐成熟运行的基准文件（如 `ch7_3_spectral_decomposition.html`、`ch7_4_svd_low_rank.html`）：
  ```html
  <script>
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
  </script>
  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js" onerror="this.onerror=null;this.src='js/tex-svg.js';"></script>
  <script src="js/main.js" defer></script>
  <script src="js/visualizer.js" defer></script>
  ```
- **核心坑点与原则（为什么必须用 tex-svg + 本地 onerror 回退）**：
  1. **本地仓库只有 `js/tex-svg.js`**：仓库中只预置了完整的本地离线引擎 `js/tex-svg.js` (2.1 MB)，**没有** `tex-mml-chtml.js`！
  2. **严禁使用无本地回退的 `tex-mml-chtml.js`**：若使用 `tex-mml-chtml.js` 且无 fallback，在离线使用（`file://` 协议）或 CDN（`cdn.jsdelivr.net`）因国内网络波动/DNS 拦截无法连接时，MathJax 脚本将直接 404/加载中断，全站公式彻底白屏或以原始 `$` 源码显示。
  3. **SVG 矢量的抗网络抖动优势**：`tex-svg.js` 输出纯 SVG 路径，不依赖远程 Web 字体文件（避免了 CHTML 模式下字体文件因网络缓慢产生的字形空白、排版闪烁与错位）。
  4. **全局缓存与配置对齐**：必须包含 `svg: { fontCache: 'global' }` 与 `enableAssistiveMml: false`，与 [js/main.js](file:///d:/Dev/Math/N01_LinearAlgebraTutorial/js/main.js) 的动态渲染配置保持一致。
- **绝对禁忌：动态修改 script.src**：严禁编写类似 `mjScript.src = '...'` 或 `if (location.protocol === 'file:') mjScript.src = ...` 的脚本。现代浏览器对于已经挂载并在解析中的异步 `<script>`，一旦动态修改其 `src`，会立即掐断当前请求且不会可靠加载新脚本，直接导致 MathJax 彻底无法执行！

### 2. 严禁使用粗暴跨行正则处理 HTML 内联公式（防雪崩破坏）
- **核心踩坑**：类似 `re.sub(r'\$([^\$\n]+\n[^\$]+?)\$', ...)` 的贪婪/非贪婪正则跨行替换，会误将段落 A 的结尾 `$` 与跨越数十行 HTML 标签后的段落 B 开头 `$` 误配为一个公式，把大批 `<div>`, `<p>`, `<strong>`, `<hr>`, `<ul>`, `<li>` 标签全部揉进 `$ ... $` 内部并压扁为单行。
- MathJax 一旦在 `$...$` 内遇到复杂的真实 HTML 标签，会直接解析失败或报错崩溃。
- **正确做法**：公式排版处理必须区分文本节点与标签结构，严禁在未做 HTML 解析的情况下跨多行合并未知 `$`。

### 3. HTML 与 LaTeX 冲突字符及排版规范
- **严禁在 HTML 正文中书写双反斜杠宏命令 (Double Backslash Crash)**：在 HTML 文件中，LaTeX 宏命令必须使用**单反斜杠**（如 `\mathbf{x}`、`\int`、`\frac`、`\Delta`、`\nabla`、`\succ`），严禁写成双反斜杠（如 `\\mathbf{x}`）。若写为 `\\mathbf{x}`，MathJax 会将其解析为换行符 `\\` 加上普通文本 `mathbf{x}`，导致行内公式产生严重语法错误并终止后续渲染！仅在矩阵内部换行时才允许使用 `\\` 分隔行（如 `\begin{bmatrix} a & b \\ c & d \end{bmatrix}`）。在 Python 脚本生成或替换 HTML 时必须格外警惕字符串转义引入的非意图双反斜杠。
- **严禁使用触发 MathJax 动态 Autoload 的非核心宏命令（如 `\boldsymbol`）**：`tex-svg.js` 核心包中**未内置** `\boldsymbol`。遇到 `\boldsymbol` 时 MathJax 会尝试通过网络动态加载扩展 `[tex]/boldsymbol`。在离线或本地文件（`file://`）环境下，此动态加载必然失败并触发 `MathJax retry` 致命错误，导致后续所有公式排队中断、整页公式渲染彻底瘫痪！粗体希腊字母或向量一律使用标准 `\mathbf` 或直接使用斜体符号（如 `\mathbf{\mu}` 或 `\mu`）。
- **严禁在公式内部书写长句中文或在 `\underbrace` 下使用中文标注**：MathJax 在 SVG 模式下依赖 TeX 矢量字形表，缺少 CJK 字符的 SVG 矢量度量指标。在 `\underbrace` 的下标中塞入 `\text{中文}` 会导致 SVG 宽度计算返回 `NaN`，从而引发渲染异常甚至中断整页排版。公式应严格保持纯数学符号，中文解释必须写在公式外部的普通 HTML 文本中（如 `<p>` 标签）。
- **转义冲突**：在 HTML 页面中写 LaTeX 时，比较运算符 `<` 与 `>` 应写为 `\lt` 与 `\gt`（如 `\mathbf{N} \cdot \mathbf{V} \gt 0`），防止浏览器 HTML Tokenizer 将其误判为未闭合的 HTML 标签。
- **标点隔离**：感叹号、问号、逗号、句号等语句标点必须置于公式定界符 `$` 或 `$$` 外部，严禁在公式末尾书写诸如 `\ !`、`\!$` 等非法或冗余控制符。
- **度数符号**：角度度数符号规范使用大括号包覆：`^{\circ}`（如 `0^{\circ} \le \theta \le 180^{\circ}`），防止歧义。

### 4. 单一文件问题坚持局部对比排查（切勿扩散修改）
- 当用户反馈“仅有某一个新增/修改文件有问题，其它文件原本是好的”时：
  1. **第一动作**：拿该文件与正常文件做 `diff`（对比 `<head>`、容器结构、脚本顺序、公式语法）；
  2. **严禁动作**：不要试图全局批量修改全站几十个文件，不要修改公共核心类库（如全局重写 MathJax 引擎或切换 SVG/CHTML），不要把局部小问题复杂化为全局工程重构。

### 5. 新建/修改文件后的三步脚本检验流程 (Script-Only Verification)
- **禁止打开浏览器**：按照全局规则，验证必须通过脚本自动运行完成。
- **检验标准**：
  1. **HTML 标签闭合性检验**：运行 Python `html.parser` 脚本，确认所有 `div`, `p`, `section`, `a`, `svg`, `script` 完全闭合且无嵌套错位。
  2. **公式闭合与语法审计**：统计全文单 `$` 与双 `$$` 数量，必须 100% 均为偶数；检查所有花括号 `{}` 与 `\begin{...}` / `\end{...}` 环境完全匹配。
  3. **Node.js 运行时执行验证**：提取并模拟运行页面内置 JavaScript，确保在没有浏览器弹窗的情况下无 `ReferenceError` 或 `TypeError`。


