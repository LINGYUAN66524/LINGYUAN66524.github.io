/* ============================================================
   某躺平人的遗物库 · 交互脚本（Material 风格）
   1) 明暗模式切换（记忆到 localStorage）
   2) 移动端抽屉导航
   3) 侧边栏折叠分组
   4) 平滑滚动 + 滚动高亮（scrollspy）+ 标签栏同步
   5) 回到顶部
   6) 页脚年份 / 更新时间
   ============================================================ */

(function () {
  "use strict";

  var root = document.documentElement;
  var THEME_KEY = "relics-theme";

  /* ---------- 1. 明暗模式 ---------- */
  var themeToggle = document.getElementById("themeToggle");

  function setTheme(t) {
    root.setAttribute("data-theme", t);
    try { localStorage.setItem(THEME_KEY, t); } catch (e) {}
  }

  // 芒性 = 浅色（明亮·白金）；荒性 = 深色（深海·蓝黑）
  function themeLabel(t) {
    return t === "dark"
      ? "当前：荒性（深海·蓝黑）· 点击切换"
      : "当前：芒性（明亮·白金）· 点击切换";
  }

  function refreshToggleLabel() {
    if (!themeToggle) return;
    themeToggle.setAttribute("aria-label", "切换芒/荒");
    themeToggle.setAttribute(
      "title",
      themeLabel(root.getAttribute("data-theme") === "dark" ? "dark" : "light")
    );
  }

  // 切换时从按钮位置扩散一圈水波（View Transitions API；不支持则直接切）
  function switchTheme() {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    var apply = function () {
      setTheme(next);
      refreshToggleLabel();
    };

    if (!document.startViewTransition || !themeToggle) {
      apply();
      return;
    }

    var r = themeToggle.getBoundingClientRect();
    var cx = r.left + r.width / 2;
    var cy = r.top + r.height / 2;
    var radius = Math.hypot(
      Math.max(cx, window.innerWidth - cx),
      Math.max(cy, window.innerHeight - cy)
    );
    root.style.setProperty("--vt-x", cx + "px");
    root.style.setProperty("--vt-y", cy + "px");
    root.style.setProperty("--vt-r", radius + "px");

    document.startViewTransition(apply);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", switchTheme);
    refreshToggleLabel();
  }

  /* ---------- 2. 移动端抽屉 ---------- */
  var drawerToggle = document.getElementById("drawerToggle");
  var overlay = document.getElementById("overlay");

  function closeDrawer() {
    document.body.classList.remove("drawer-open");
    if (drawerToggle) drawerToggle.setAttribute("aria-expanded", "false");
  }

  if (drawerToggle) {
    drawerToggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("drawer-open");
      drawerToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  if (overlay) overlay.addEventListener("click", closeDrawer);

  /* ---------- 3. 侧边栏折叠分组 ---------- */
  Array.prototype.forEach.call(
    document.querySelectorAll(".md-nav__toggle"),
    function (btn) {
      btn.addEventListener("click", function () {
        var item = btn.closest(".md-nav__item--nested");
        if (!item) return;
        var open = item.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
  );

  /* ---------- 4. 平滑滚动 ---------- */
  var scrollLinks = document.querySelectorAll(
    '.md-nav__link[href^="#"], .md-tabs__link[href^="#"], a.md-header__logo[href^="#"]'
  );

  Array.prototype.forEach.call(scrollLinks, function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href").slice(1);
      var target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (history.replaceState) history.replaceState(null, "", "#" + id);
      closeDrawer();
    });
  });

  /* ---------- 5. 滚动高亮（scrollspy） ---------- */
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll(".md-nav__link[href^='#']")
  );
  var tabLinks = Array.prototype.slice.call(
    document.querySelectorAll(".md-tabs__link[href^='#']")
  );

  // 收集内容区里所有锚点目标
  var sections = navLinks
    .map(function (a) {
      var id = a.getAttribute("href").slice(1);
      var el = document.getElementById(id);
      return el ? { id: id, el: el } : null;
    })
    .filter(Boolean);

  function highlight(id) {
    navLinks.forEach(function (a) {
      a.classList.toggle("is-active", a.getAttribute("href") === "#" + id);
    });
    // 标签栏：找到该 id 所属的顶层区块
    var owner = tabOwner(id);
    tabLinks.forEach(function (a) {
      a.classList.toggle("is-active", a.getAttribute("href") === "#" + owner);
    });
  }

  // 判断某个锚点归哪个标签栏分类
  var TAB_ORDER = ["home", "courses", "misc", "about"];
  var GROUP = {
    home: "home",
    courses: "courses",
    physics: "courses",
    "exp-osc": "courses",
    "exp-snd": "courses",
    "exp-spc": "courses",
    "exp-grt": "courses",
    "exp-fg": "courses",
    "exp-gs": "courses",
    "exp-mul": "courses",
    "exp-va": "courses",
    "exp-src": "courses",
    "exp-ac": "courses",
    furina: "misc",
    snaps: "misc",
    chem: "courses",
    ode: "courses",
    modian: "courses",
    misc: "misc",
    about: "about",
    contact: "about"
  };

  function tabOwner(id) {
    if (GROUP[id]) return GROUP[id];
    return TAB_ORDER[0];
  }

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      var offset = 120;
      var current = sections.length ? sections[0].id : null;
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].el.getBoundingClientRect().top - offset <= 0) {
          current = sections[i].id;
        }
      }
      if (current) highlight(current);

      if (backTop) backTop.classList.toggle("show", window.pageYOffset > 400);
      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- 6. 回到顶部 ---------- */
  var backTop = document.getElementById("backTop");
  if (backTop) {
    backTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- 7. 页脚信息 ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var updatedEl = document.getElementById("updated");
  if (updatedEl) {
    var d = document.lastModified ? new Date(document.lastModified) : new Date();
    updatedEl.textContent = d.toLocaleDateString("zh-CN");
  }

  /* 初始化一次，保证首屏状态正确 */
  onScroll();
})();
