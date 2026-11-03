# 躺平摸鱼日记

> 在蓝色大肥鱼的辅助（？）下搭建而成，仓库内容由大肥鱼识别我的课程内容生成，个人粗略审核，仅供参考。

个人主页仓库 `LINGYUAN66524.github.io` 的源码，线上地址：<https://lingyuan66524.github.io>

纯 **HTML + CSS + JS**，零依赖、零构建，改完推到 GitHub 就能上线。版式是 MkDocs Material 那一路：顶栏、标签栏和侧栏是半透明毛玻璃，右下角压一张芙宁娜帽子的线稿，其余保持扁平（没有渐变、投影、进场动画）。

## 目录结构

```
LINGYUAN66524.github.io/
├── index.html          # 主页（欢迎语，不显示侧栏）
├── courses.html        # 课程作业（实验报告列表 + 教师评语）
├── misc.html           # 杂项收藏（图集入口）
├── about.html          # 关于（站点说明 + 联系方式）
├── furina.html         # 芙宁娜图集（独立页）
├── snaps.html          # 随手拍（独立页）
├── note.html           # 笔记渲染页（marked + KaTeX）
├── styles/main.css     # 全部样式（配色变量在 :root）
├── scripts/main.js     # 交互（明暗切换、抽屉导航、滚动高亮）
├── files/              # 上传的资料（PDF 等）
└── README.md
```

## 怎么改内容

- **站名**：改四个页面的 `.md-header__title`（四页保持一致）。
- **新增课程条目**：照 `courses.html` 里的 `<ul class="md-filelist">` 抄一条 `<li>`，id 用 `exp-xxx`，同时在页面左侧导航里补一条 `<a href="#exp-xxx">`（其他页面的侧栏要写 `courses.html#exp-xxx`）。
- **新增页面**：复制任一页的 `<header>`、`<aside>`、`<footer>` 三段，改 `<title>` 和正文；顶部标签栏的 `is-active` 只留当前页一个。
- **上传资料**：文件丢进 `files/`，再用相对路径链接，例如 `files/你的文件.pdf`。
- **配色**：改 `styles/main.css` 顶部的 `:root`，四色取自芙宁娜官方色卡（近黑深蓝 / 深靛蓝 / 亮水蓝 / 浅灰蓝）。

## 本地预览

直接用浏览器打开 `index.html` 即可，无需任何依赖。
