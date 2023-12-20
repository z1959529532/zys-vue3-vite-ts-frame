zys-vue3-vite-ts-frame   
[参考：https://juejin.cn/post/7079785777692934174?searchId=20231216131804E788606C4FAB441BFD29#heading-7](https://juejin.cn/post/7079785777692934174?searchId=20231216131804E788606C4FAB441BFD29#heading-7)

### 搭建

yarn create vite | yarn create vite --template vue-ts
选择：Vue、TypeScript

- #### 保证node使用安装
    - ```yarn add @types/node -D```
- #### 集成eslint安装
    - ```yarn add eslint -D```
    - 以下可以 yarn eslint --init 自动安装，配置.eslintrc.json文件
    - ```yarn add eslint-plugin-vue -D```
    - ```yarn add @typescript-eslint/parser -D```
    - ```yarn add @typescript-eslint/eslint-plugin -D```
- #### 集成prettier安装
    - ```yarn add prettier -D```
    - 创建.prettierrc.js配置
    - ```yarn add eslint-config-prettier -D```
    - ```yarn add eslint-plugin-prettier -D```
    - 在.eslintrc.json配置冲突
- #### 集成pinia安装
    - ```yarn add pinia -S```
    - 在 src/pinia/index定义
    - 持久化
    - ```yarn add pinia-plugin-persistedstate -S```
- #### 集成vue-router安装
    - ```yarn add vue-router -S```
    - 在 src/router/index定义
- #### 使用less
    - ```yarn add less -D```
    - 在 src/assets/style中定义，vite支持
- #### 安装axios
    - ```yarn add axios -S```
    - 在 src/api中定义

### 其它

| 工具                              | 作用                                                          |
|---------------------------------|-------------------------------------------------------------|
| mitt                            | vue3全局事件总线：`yarn add mitt -S`                               |
| unplugin-auto-import            | 自动导入vue函数：`yarn add unplugin-auto-import -D`                |
| vite-plugin-vue-setup-extend    | script语法糖加name属性：`yarn add vite-plugin-vue-setup-extend -D` |
| @vueuse/core                    | vue组合式api函数工具：`yarn add @vueuse/core -S`                    |
| ant-design-vue                  | UI组件库：`yarn add ant-design-vue -S`                          |
| unplugin-vue-components         | UI组件库自动导入：`yarn add unplugin-vue-components -D`             |
| echarts                         | 图表工具：`yarn add echarts -S`                                  |
| lodash                          | js库工具：`yarn add lodash -S`                                  |
| postcss-px-to-viewport-8-plugin | 适配工具：`yarn add postcss-px-to-viewport-8-plugin -D`          |
| unocss                          | 原子化CSS：`yarn add unocss -D`                                   |

[//]: # (- 全局安装json-server)

[//]: # (    - json-server --watch db.json --port 8040)

[//]: # (- vue3使用decorator得安装10.0.0-rc.3版本)

[//]: # (    - npm info vue-property-decorator查看最新版本)

[//]: # (    - yarn add vue-property-decorator@10.0.0-rc.3 -S)

[//]: # (    - yarn add vue-class-component -S)

[//]: # (    - @Options代替@Component：```import {Options, Model, Prop, Vue, Watch} from "vue-property-decorator";```)

[//]: # (@vitejs/plugin-vue-jsx)


video.js   
swiper
vue-echarts
