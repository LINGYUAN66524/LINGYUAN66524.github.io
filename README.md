# 某躺平人的遗物库

> 某在校大学生留下的学习资料与杂七杂八的遗物。躺平是态度，整理是底线。

这是个人主页仓库 `LINGYUAN66524.github.io` 的源码。纯 **HTML + CSS + JS**，零依赖、零构建，改完推到 GitHub 就能上线。

## 目录结构

```
LINGYUAN66524.github.io/
├── index.html          # 页面结构（占位内容在这里改）
├── styles/
│   └── main.css        # 全部样式（配色变量在 :root）
├── scripts/
│   └── main.js         # 交互（导航、动画、回到顶部）
├── README.md
└── .gitignore
```

## 怎么改内容

- **标题 / 简介**：改 `index.html` 里的 `.hero` 和 `#about` 段落。
- **分类卡片**：改 `#archive` 里的 `.category-card`。
- **遗物陈列**：改 `#relics` 里的 `.relic-card`，复制一份卡片就是新增一件。
- **联系方式**：把 `#contact` 里的邮箱 `your@example.com` 换成真的。
- **配色**：改 `styles/main.css` 顶部的 `:root` 变量（`--accent` 是主色）。

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库，名字必须叫 **`LINGYUAN66524.github.io`**（大小写不敏感）。
2. 本地初始化并推送：

   ```bash
   git init
   git add .
   git commit -m "init: 遗物库上线"
   git branch -M main
   git remote add origin git@github.com:LINGYUAN66524/LINGYUAN66524.github.io.git
   git push -u origin main
   ```

3. 打开仓库 `Settings → Pages`，把 Source 设为 `Deploy from a branch`，分支选 `main`、目录选 `/ (root)`，保存。
4. 等一两分钟，访问 **https://LINGYUAN66524.github.io** 就能看到。

## 本地预览

直接用浏览器打开 `index.html` 即可，无需任何依赖。
