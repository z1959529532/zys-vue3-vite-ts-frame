import dragDom from './DragDom/DragDom.directive';
import type {App} from 'vue';

/**
 * 所有自定义指令
 */
const directives = {
    "drag-dom": dragDom, // 拖拽dom
}

export default {
    install(app: App) {
        Object.keys(directives).forEach((key) => {
            app.directive(key, (directives as any)[key])
        })
    }
}

// 1、vue2和Vue3自定义指令钩子不同
// https://zhuanlan.zhihu.com/p/647754190

// 2、钩子参数
// el：指令绑定到的元素，这可以用于直接操作DOM
// binding
// vnode
// prevNode


