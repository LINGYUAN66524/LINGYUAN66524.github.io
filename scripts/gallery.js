/* ============================================================
   图集页：点击缩略图 -> 灯箱放大
   ============================================================ */

(function () {
  "use strict";

  var gallery = document.getElementById("gallery");
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var closeBtn = document.getElementById("lightboxClose");
  if (!gallery || !lightbox || !lightboxImg) return;

  function open(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || "";
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
  }

  function close() {
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.body.classList.remove("lightbox-open");
  }

  Array.prototype.forEach.call(
    gallery.querySelectorAll(".md-gallery__item"),
    function (item) {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        var img = item.querySelector("img");
        open(item.getAttribute("data-full") || item.getAttribute("href"),
             img ? img.getAttribute("alt") : "");
      });
    }
  );

  // 点遮罩关闭（点图片本身不关）
  lightbox.addEventListener("click", function (e) {
    if (e.target !== lightboxImg) close();
  });
  if (closeBtn) closeBtn.addEventListener("click", close);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !lightbox.hidden) close();
  });
})();
