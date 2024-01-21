# 在Next.js中使用 Antd 组件库集成暗夜模式主题切换时刷新页面暗色主题失效问题

## 版本

- "antd": "5.13.2"
- "next": "14.0.4"

[在线预览](https://nextjs-antd-dark-mode-error.vercel.app/)

## 问题描述

在Next.js中使用 Antd 组件库, 结合 `next-themes` 切换暗夜主题, 并使用 `zustand` 作为状态管理库初始化 Antd 默认主题模式并存入 `localStorage` 中， 初始化主题为`light`模式，将Antd的主题默认主题切换到暗黑模式后，每次刷新页面时，Antd主题的暗夜模式会丢失。

- 尝试过使用 `useEffect` 在页面加载时，重新设置 Antd 主题，但是没有成功。

- 尝试下列不同的集成方式 Antd 组件库,问题仍未解决
  - 1. 使用 `@ant-design/cssinjs`
  - 2. 使用 @ant-design/nextjs-registry
  - 3. 使用 `antd-style` 方式集成 Antd

![](https://cdn.jsdelivr.net/gh/liaoyio/imgHosting/Next.js/antd-err.gif)

## 启动项目

```shell
# 安装依赖
npm install
# 启动项目
npm run dev
```

在项目 `components` 目录下我保留了不同的集成方式，只需要在 `app/layout.tsx` 取消注释对应导入代码即可使用不同的集成方式。

```tsx
// 方案一: 使用 @ant-design/cssinjs 方式集成 Antd
import Providers from "components/themes/First";

// 方案二: 使用 @ant-design/nextjs-registry 方式集成 Antd
// import Providers from "components/themes/Second";

// 方案三: 使用 antd-style 方式集成 Antd
// import Providers from "components/themes/Third";
```
