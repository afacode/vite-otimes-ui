# OTimes-UI
> Vue 3 + Typescript + Vite

一个UI组件库的练习，样式基于ELement-plus

## 安装 install
```
yarn add otimes-ui
或者
npm install otimes-ui -S
```

## 使用 use
> 完整引入
在 main.js 中写入以下内容
```
import OTimesUI from 'otimes-ui'

app.use(OTimesUI)
```
> vite 按需引入
在 main.js 中写入以下内容
```
import {OButton} from 'otimes-ui'

app.use(OButton)
```


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"

```
import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Affix from './src/index.vue'

Affix.install = (app: App): void => {
  app.component(Affix.name, Affix)
}

const _Affix: SFCWithInstall<typeof Affix> = Affix

export default _Affix
```
