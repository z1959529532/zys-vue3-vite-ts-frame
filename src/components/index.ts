/**
 * 导入所有组件
 * 以 <script setup name="组件名"> 上的name名字使用组件
 *
 * author zys
 * date: 2023/12/4 14:09
 */
import type {App, Component} from 'vue';

// const allModule = import.meta.globEager("@/components/*/*.vue");

// 新版本vite的globEager弃用，默认懒加载，直接引入加 eager 参数
const allModule = import.meta.glob("@/components/*/*.vue", {eager: true});

const globalComponents = {
    install(app: App) {
        const modules = Object.values(allModule);
        for (const module of modules) {
            const component: Component = module.default;
            if (component.name) {
                app.component(component.name, component);
            }
        }
    },
};

export default globalComponents;
