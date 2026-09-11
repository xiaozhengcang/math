# 项目与全局规则

1. The chat box cannot render Latex, use Unicode when the output is for the chatbox.
2. 不要用打开浏览器的方式验证 HTML 文件，必须使用脚本方式（例如 Python/Node 语法解析与逻辑测试脚本）进行验证。

---

## 核心经验教训与防错指南 (Post-Mortem & Best Practices)

### 1. 严格以正常现有文件为基准（避免私自变更加载架构）
- **基准对齐**：新增或修改 HTML 文件时，`<head>` 标签中的 MathJax 配置与脚本引用必须 100% 对齐同目录下成熟运行的文件（如 `ch3_2_cramer_applications.html`、`ch3_1_determinant.html`）：
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
        ignoreHtmlClass: 'tex2jax_ignore',
        processHtmlClass: 'tex2jax_process'
      }
    };
  </script>
  <script src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js" id="MathJax-script" async></script>
  <script src="js/main.js" defer></script>
  <script src="js/visualizer.js" defer></script>
  ```
- **绝对禁忌：动态修改 script.src**：严禁编写类似 `mjScript.src = '...'` 或 `if (location.protocol === 'file:') mjScript.src = ...` 的脚本。现代浏览器对于已经挂载并在解析中的异步 `<script>`，一旦动态修改其 `src`，会立即掐断当前请求且不会可靠加载新脚本，直接导致 MathJax 彻底无法执行！

### 2. 严禁使用粗暴跨行正则处理 HTML 内联公式（防雪崩破坏）
- **核心踩坑**：类似 `re.sub(r'\$([^\$\n]+\n[^\$]+?)\$', ...)` 的贪婪/非贪婪正则跨行替换，会误将段落 A 的结尾 `$` 与跨越数十行 HTML 标签后的段落 B 开头 `$` 误配为一个公式，把大批 `<div>`, `<p>`, `<strong>`, `<hr>`, `<ul>`, `<li>` 标签全部揉进 `$ ... $` 内部并压扁为单行。
- MathJax 一旦在 `$...$` 内遇到复杂的真实 HTML 标签，会直接解析失败或报错崩溃。
- **正确做法**：公式排版处理必须区分文本节点与标签结构，严禁在未做 HTML 解析的情况下跨多行合并未知 `$`。

### 3. HTML 与 LaTeX 冲突字符转义规范
- 在 HTML 页面中写 LaTeX 时，比较运算符 `<` 与 `>` 应写为 `\lt` 与 `\gt`（如 `\mathbf{N} \cdot \mathbf{V} \gt 0`），防止浏览器 HTML Tokenizer 将其误判为未闭合的 HTML 标签。
- 角度度数符号规范使用大括号包覆：`^{\circ}`（如 `0^{\circ} \le \theta \le 180^{\circ}`），防止歧义。

### 4. 单一文件问题坚持局部对比排查（切勿扩散修改）
- 当用户反馈“仅有某一个新增/修改文件有问题，其它文件原本是好的”时：
  1. **第一动作**：拿该文件与正常文件做 `diff`（对比 `<head>`、容器结构、脚本顺序、公式语法）；
  2. **严禁动作**：不要试图全局批量修改全站几十个文件，不要修改公共核心类库（如全局重写 MathJax 引擎或切换 SVG/CHTML），不要把局部小问题复杂化为全局工程重构。

