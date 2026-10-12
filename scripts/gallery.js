/* ============================================================
   图集页通用脚本
   1) 若页面定义了 window.GALLERY_IMAGES，则动态生成网格
   2) 点击缩略图 -> 灯箱放大（Esc / 点空白关闭）
   ============================================================ */

(function () {
  "use strict";

  var gallery = document.getElementById("gallery");
  if (!gallery) return;

  /* ---------- 1. 动态生成网格 ---------- */
  var DATA = window.GALLERY_IMAGES;
  if (DATA && DATA.length && !gallery.children.length) {
    var html = "";
    DATA.forEach(function (item) {
      var dir = item.dir || "assets/furina";
      var cap = item.cap || "";
      html += '<a class="md-gallery__item" href="' + dir + "/" + item.base + '.jpg"' +
              ' data-full="' + dir + "/" + item.base + '.jpg">' +
              '<img src="' + dir + "/thumbs/" + item.base + '.jpg" alt="' + cap + '" loading="lazy" />' +
              (cap ? '<span class="md-gallery__cap">' + cap + "</span>" : "") +
              "</a>";
    });
    gallery.innerHTML = html;
  }

  /* ---------- 2. 灯箱 ---------- */
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var closeBtn = document.getElementById("lightboxClose");
  if (!lightbox || !lightboxImg) return;

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

  lightbox.addEventListener("click", function (e) {
    if (e.target !== lightboxImg) close();
  });
  if (closeBtn) closeBtn.addEventListener("click", close);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !lightbox.hidden) close();
  });
})();
