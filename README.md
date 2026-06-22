# Zero-Perspective-Slides · 视角幻灯片集

> 六个视角的 HTML 幻灯片 —— 键盘翻页,深空科技风。

🔗 在线访问:https://<jeekeagle>.github.io/zero-perspective-slides/

## 这是什么

本站是 [zero-perspective-hub](https://github.com/jeekeagle/zero-perspective-hub) 与 [zero-perspective-book](https://github.com/jeekeagle/zero-perspective-book) 的**幻灯片形态**。
三个仓库<strong>内容一致</strong>,但视觉风格刻意分三:

| 仓库 | 视觉 | 形态 | 适合场景 |
|------|------|------|---------|
| **zero-perspective-hub** | 墨韵宣纸 + 朱砂 + 山水(东方新中式) | 网页门户 | 翻阅、查找、跳转 |
| **zero-perspective-book** | 羊皮纸 + 酒红皮装 + 古铜金(西方精装古籍) | 长篇阅读 | 沉浸、系统阅读 |
| **zero-perspective-slides**(本站) | 深空底色 + 霓虹辉光 + 终端字(科技风) | HTML PPT | 讲演、教学、分享 |

## 内容

六份独立幻灯片,每份 10 页左右:

| # | Deck | 视角 |
|---|------|------|
| 01 | [01-taxonomy.html](01-taxonomy.html) | 分类学视角 |
| 02 | [02-economics.html](02-economics.html) | 经济学视角 |
| 03 | [03-program.html](03-program.html) | 程序视角 |
| 04 | [04-topology.html](04-topology.html) | 拓扑学视角 |
| 05 | [05-relation.html](05-relation.html) | 关系视角 |
| 06 | [06-architecture.html](06-architecture.html) | 架构视角 |

每页幻灯片 10 张,固定结构:
1. **Cover** 封面
2. **Why** 为什么要这副镜片
3. **Definition** 定义
4. **Core Insight** 核心观点
5. **Mechanism** 机制
6. **Key Points** 三个核心
7. **Case** 一个案例
8. **Limit** 这副镜片的盲区
9. **Judgment** 一个判断
10. **End** 结尾 + 下一步

## 键盘快捷键

| 键 | 动作 |
|---|---|
| <kbd>→</kbd> / <kbd>Space</kbd> / <kbd>PageDown</kbd> | 下一页 |
| <kbd>←</kbd> / <kbd>PageUp</kbd> | 上一页 |
| <kbd>Home</kbd> | 第一页 |
| <kbd>End</kbd> | 最后一页 |
| 触屏左右滑动 | 翻页 |
| <kbd>Ctrl</kbd> + 滚轮 | 翻页 |

## 项目结构

```
zero-perspective-slides/
├── index.html                  # 6 份 PPT 的入口索引
├── 01-taxonomy.html            # Deck 01 · 分类学视角(10 页)
├── 02-economics.html           # Deck 02 · 经济学视角(10 页)
├── 03-program.html             # Deck 03 · 程序视角(10 页)
├── 04-topology.html            # Deck 04 · 拓扑学视角(10 页)
├── 05-relation.html            # Deck 05 · 关系视角(10 页)
├── 06-architecture.html        # Deck 06 · 架构视角(10 页)
├── assets/
│   ├── css/style-tech.css      # 统一科技风样式(深空 + 霓虹 + 终端字)
│   └── js/deck.js              # 键盘 / 触屏 / 按钮 翻页控制器
└── README.md
```

## 设计原则

- **配色**:深空底色(`#0a0e1a`) + 霓虹(Cyan `#00f0ff` / Magenta `#ff2bd6` / Lime `#b6ff3c` / Amber `#ffb547`)
- **字体**:JetBrains Mono(代码、终端字)+ Space Grotesk(标题、显示)+ Inter(正文)
- **装饰**:扫描线、网格背景、霓虹辉光、四角角饰、ASCII 风格分隔
- **响应式**:从手机到大屏都能演示(默认 16:9)
- **零依赖**:纯 HTML + CSS + 极少量 JS,无构建步骤、无外链库(只用 Google Fonts CDN)

## 本地预览

任意 HTTP 服务器即可:

```bash
python3 -m http.server 8000
# 或
npx http-server -p 8000
```

然后访问 http://localhost:8000

## 部署到 GitHub Pages

1. 在 GitHub 创建仓库 `zero-perspective-slides`(公开)
2. 把本目录 push 上去
3. Settings → Pages → Branch: `main` / `/ (root)` → Save
4. 1-2 分钟后访问 https://<jeekeagle>.github.io/zero-perspective-slides/

## 演讲场景建议

- **周会分享**:用 [02-economics.html](02-economics.html)(Skill 经济学)或 [04-topology.html](04-topology.html)(Agent 拓扑)各 10 页
- **技术培训**:用 [03-program.html](03-program.html)(提示词即程序)+ [06-architecture.html](06-architecture.html)(RAG 架构)
- **新人 onboarding**:从 [01-taxonomy.html](01-taxonomy.html) 开始,按顺序走一遍
- **面向决策者**:用 [05-relation.html](05-relation.html)(关系视角)讲人机协作的范式

## 许可

- 内容采用 CC BY 4.0
- 代码采用 MIT License

—— Zero · 2026
