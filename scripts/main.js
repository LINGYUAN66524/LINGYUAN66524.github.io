/* ============================================================
   某躺平人的遗物库 · 交互脚本
   1) 移动端导航开关
   2) 滚动入场动画
   3) 回到顶部
   4) 统计数字滚动
   5) 页脚年份 / 更新时间
   ============================================================ */

(function () {
  "use strict";

  /* 1. 移动端导航开关 */
  var navToggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");
  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      navToggle.classList.toggle("open", open);
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // 点击导航链接后收起菜单
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* 2. 滚动入场动画 */
  var revealEls = document.querySelectorAll(
    ".about-grid, .category-grid, .relic-grid, .contact-grid"
  );
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach(function (el) {
      el.classList.add("reveal");
      observer.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("visible");
    });
  }

  /* 3. 回到顶部 */
  var backTop = document.getElementById("backTop");
  if (backTop) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 500) {
        backTop.classList.add("show");
      } else {
        backTop.classList.remove("show");
      }
    });
    backTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* 4. 统计数字滚动 */
  var counters = document.querySelectorAll("[data-count]");
  function animateCount(el) {
    var target = el.getAttribute("data-count");
    // 无限符号或 0 直接显示
    if (target === "∞" || Number(target) === 0) {
      el.textContent = target;
      return;
    }
    var end = parseInt(target, 10);
    var duration = 1200;
    var startTime = null;
    function step(ts) {
      if (!startTime) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * end);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window) {
    var statObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            statObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach(function (el) {
      statObserver.observe(el);
    });
  } else {
    counters.forEach(animateCount);
  }

  /* 5. 页脚年份 / 更新时间 */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  var updatedEl = document.getElementById("updated");
  if (updatedEl) {
    updatedEl.textContent = document.lastModified
      ? new Date(document.lastModified).toLocaleDateString("zh-CN")
      : new Date().toLocaleDateString("zh-CN");
  }
})();
