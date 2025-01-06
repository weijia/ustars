# UStars(Github Star Manger)
UStars 可以方便查询和整理你的 Github Star 仓库, 而不必每次使用 Github Star 功能(太难用)

[预览](https://ustars.dev)

## 使用

- fork 项目
- 配置 Github Token
- 部署项目到 vercel 或其他平台

## 技术栈

- 前端框架：Nuxt.js
- 数据来源：GitHub API
- 更新机制：每日自动同步 `fetch-star-projects`

## 开发

```bash
# 安装依赖
bun i

# 启动开发服务器
bun run dev

# 运行脚本 同步 Github Star 仓库
bun run sync
```
