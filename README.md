# React19 Play

## 相关仓库

| 仓库名         | 仓库地址                                     | 说明               |
|----------------|----------------------------------------------|--------------------|
| react-template | https://github.com/lexmin0412/react-template | react 单页应用模板 |
| vue-template | https://github.com/lexmin0412/vue-template | vue 单页应用模板 |

## 技术栈

- 🔥 React V19
- TypeScript V5
- TailwindCSS V3
- 💦 Pure React Router V0
- 🤔 ~~Ant Design V5~~
- AHooks V3
- PNPM V7
- Rsbuild V1
- Jest V29

## 升级 React19

注意：由于 React19 发布不久且存在一些 Breaking Changes (如 ref 的使用方式)，很多开源库对其的支持都仍在规划/开发阶段，如 antd 暂不支持 React19，如果存量项目大量应用到了这两个库，请暂时放弃升级，等待官方给出支持。

- [Ant Design V6 的官方讨论](https://github.com/ant-design/ant-design/discussions/51919)

### 升级依赖

```shell
pnpm add react@19 react-dom@19
pnpm add @types/react @types/react-dom -D
```


