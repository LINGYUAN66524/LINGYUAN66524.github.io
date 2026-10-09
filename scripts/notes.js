/* ============================================================
   笔记页渲染器
   读取 Markdown 文件 -> marked 渲染 -> KaTeX 渲染公式 -> 生成目录
   用法：note.html?f=notes/ode.md
   ============================================================ */

(function () {
  "use strict";

  var contentEl = document.getElementById("note-content");
  var titleEl = document.getElementById("note-title");
  var tocEl = document.getElementById("note-toc");
  if (!contentEl || typeof marked === "undefined") return;

  /* ---------- 1. 解析参数并做安全校验 ---------- */
  var params = new URLSearchParams(window.location.search);
  var file = params.get("f") || "notes/ode.md";

  // 只允许 notes/ 目录下的 .md，防止路径穿越
  if (!/^notes\/[A-Za-z0-9_\-\.\u4e00-\u9fa5]+\.md$/.test(file) || file.indexOf("..") !== -1) {
    contentEl.innerHTML = '<p class="md-muted">路径不合法。</p>';
    return;
  }

  /* ---------- 2. 配置 marked ---------- */
  if (typeof markedKatex === "function") {
    marked.use(markedKatex({ throwOnError: false, output: "html" }));
  }
  marked.setOptions({ gfm: true, breaks: true });

  /* ---------- 3. 拉取并渲染 ---------- */
  fetch(file, { cache: "no-cache" })
    .then(function (res) {
      if (!res.ok) throw new Error("HTTP " + res.status);
      return res.text();
    })
    .then(function (md) {
      // 用第一个 h1 当页面标题
      var m = md.match(/^#\s+(.+)$/m);
      var title = m ? m[1].trim() : "笔记";
      document.title = title + " · 躺平摸鱼日记";
      if (titleEl) titleEl.textContent = title;

      // 渲染（第一个 h1 去掉，避免和页面标题重复）
      var body = md.replace(/^#\s+.+$/m, "");
      contentEl.innerHTML = marked.parse(body);

      buildToc();
      decorateTables();
    })
    .catch(function (err) {
      contentEl.innerHTML =
        '<p class="md-muted">笔记读取失败：' + err.message +
        '（如果是本地直接双击打开的，浏览器会因安全策略拒绝读取文件，' +
        '请改用 GitHub Pages 在线地址，或起一个本地服务器）</p>';
    });

  /* ---------- 4. 目录 ---------- */
  function buildToc() {
    if (!tocEl) return;
    var heads = contentEl.querySelectorAll("h1, h2, h3");
    if (!heads.length) {
      tocEl.innerHTML = '<p class="md-muted">（本页暂无小节）</p>';
      return;
    }
    var html = '<ul class="md-nav__list">';
    Array.prototype.forEach.call(heads, function (h, i) {
      var id = "sec-" + i;
      h.id = id;
      var level = h.tagName === "H1" ? ' style="font-weight:700"'
                : h.tagName === "H2" ? ' style="padding-left:1.1rem"'
                : ' style="padding-left:2.2rem"';
      html += '<li class="md-nav__item"><a class="md-nav__link" href="#' + id + '"' + level + '>' +
              h.textContent.replace(/#$/, "").trim() + "</a></li>";
    });
    html += "</ul>";
    tocEl.innerHTML = html;
  }

  /* ---------- 5. 表格套用站点样式 ---------- */
  function decorateTables() {
    Array.prototype.forEach.call(contentEl.querySelectorAll("table"), function (t) {
      t.classList.add("md-table");
    });
  }
})();
