# 躺平摸鱼日记

> 在蓝色大肥鱼的辅助（？）下搭建而成，仓库内容由大肥鱼识别我的课程内容生成，个人粗略审核，仅供参考。

个人主页仓库 `LINGYUAN66524.github.io` 的源码，线上地址：<https://lingyuan66524.github.io>

纯 **HTML + CSS + JS**，零依赖、零构建，改完推到 GitHub 就能上线。

## 目录结构

```
LINGYUAN66524.github.io/
├── index.html          # 页面结构与内容
├── styles/main.css     # 全部样式（配色变量在 :root）
├── scripts/main.js     # 交互（明暗切换、抽屉导航、滚动高亮）
├── files/              # 上传的资料（PDF 等）
└── README.md
```

## 怎么改内容

- **站名 / 首页说明**：改 `index.html` 里的 `.md-header__title`、`h1#home`、`.md-lead`。
- **新增课程条目**：照 `#courses` 里的 `<ul class="md-filelist">` 抄一份，同时在左侧导航里补一条对应的 `<a href="#xxx">`。
- **上传资料**：文件丢进 `files/`，再用相对路径链接，例如 `files/你的文件.pdf`。
- **配色**：改 `styles/main.css` 顶部的 `:root`，四色取自芙宁娜官方色卡（近黑深蓝 / 深靛蓝 / 亮水蓝 / 浅灰蓝）。

## 本地预览

直接用浏览器打开 `index.html` 即可，无需任何依赖。
