<p align="center">
  <img src="https://lf1-fe.ecombdstatic.com/obj/eden-cn/upelogps/bitbug_favicon.ico" width="200" height="200" />
</p>

<h1 align="center">resemble-douyin-visual</h1>

<p align="center"></p>

<p align="center">
  <span>&nbsp;[&nbsp;</span>
  演示地址
  <a href="" target="_blank">暂未开放</a>
  <span>&nbsp;]&nbsp;</span>
<p>

## 1、简介

巨量百应 :bear: 是一个功能强大的平台，专为抖音上的用户、商家和机构提供商品管理、数据分析、直播管理等一站式服务。仿巨量星图-抖音直播后台项目是对巨量百应 **抖音直播大屏后台** 的模仿，基于 Vue3、Vite、TypeScript、Pinia、TailWindCss 和 ElementPlus 等前端最新技术栈。

## 2、目前的阶段性成果

- :sleeping: 调用 websocket API 接入了后台项目，完成了数据的实时更新

## 3、需要完善的方面

- :flushed: 大屏的适配方案，不同大小的屏幕，移动端适配
- :wink: 2K、4K 屏幕渲染可能会出现卡顿，后续尝试通过 GPU 加速等方案稳定 FPS
- :grin: 项目的目录结构比较乱
- :grinning: 项目虽然使用 `TypeScript` ,但很多地方都是用`any`代替
- :unamused: 列表组件宽度自适应、自动滚动/虚拟滚动功能的开发
- :open_mouth: 使用 `socketIO` 替换原生的 `WebSocket API`
- :stuck_out_tongue_closed_eyes: 使用原生 `data-*` 封装单选组件
- :kissing_smiling_eyes: 优化每一个图表的结构
- :hushed: 优化 `echarts` 导入与封装方案

## 4、长期的目标

- 开发出 `C端` 抖音与巨量百应门户网站，完成项目闭环
- 后端使用 `redis` 等进行数据缓存
- 后端优化 `socket` 事件推送机制
- 后端添加 `双token` 鉴权机制
- 前端添加 `登录页面` 等 `page`

## 5、预览

<img src="https://s21.ax1x.com/2024/07/04/pk2OZQI.png" alt="项目实现效果0704">

## 6、快速开始

```sh
# 克隆项目
git clone https://github.com/hellosaofei/resemble-douyin-visual.git

# 安装依赖
pnpm install

# 启动
pnpm run dev
```

## 5、支持

如果觉得 resemble-douyin-visual 这个项目不错，或者已经在使用了，希望你可以在 **Github** 帮我点个 :star: ，这将对我是极大的鼓励。
