# 在Next.js中使用 Antd 组件库集成暗夜模式主题切换时刷新页面暗色主题失效问题

## 问题描述

在Next.js中使用 Antd 组件库, 使用 zustand 作为状态管理库初始化 Antd 默认主题模式并存入 `localStorage` 中， 初始化主题为`light`模式，将Antd的主题默认主题切换到暗黑模式后，每次刷新页面时，Antd主题的暗夜模式会丢失。

- 尝试过使用 `useEffect` 在页面加载时，重新设置 Antd 主题，但是没有成功。

