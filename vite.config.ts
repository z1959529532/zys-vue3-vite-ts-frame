import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// import {fileURLToPath, URL} from 'node:url'
import {resolve} from "path";

// 自动导入vue相关函数
import AutoImport from 'unplugin-auto-import/vite';
// script标签上定义<script setup name="">，使组件带有name属性
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
// 按需引入引入UI组件 ant-design-vue
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

// UnoCSS
import UnoCSS from 'unocss/vite'
// 显示本地svg图标
import {createSvgIconsPlugin} from "vite-plugin-svg-icons";

// https://vitejs.dev/config/
export default defineConfig({
    base: '/zys-web',
    server: {
        host: true, // 监听所有地址
        port: 8050, // 指定开发服务器端口
        // open: true, // 启动时自动在浏览器打开
        // cors: true, // 默认启用并允许任何源
        proxy: { // 反向代理
            // 字符串简写写法
            // '/zysApi': 'http://localhost:8040',
            // 选项写法
            '/zysApi': {
                target: 'http://localhost:8040',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/zysApi/, '')
            },
        }
    },
    build: { // 项目构建配置
        outDir: 'dist', // 构建的包名，默认：dist
        assetsDir: 'assets', // 静态资源存放位置
        minify: 'terser',  // 项目压缩
        rollupOptions: { // 配置rollup的一些构建策略
            output: {
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
                assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
                manualChunks: (id: string) => {
                    if (id.includes('node_modules')) {
                        return id
                            .toString()
                            .split('node_modules/')[1]
                            .split('/')[0]
                            .toString()
                    }
                }
            }
        }
    },
    esbuild: { // 剔除console+debugger esbuild or terser
        // drop: mode === 'production' ? ['console', 'debugger'] : []
    },
    plugins: [
        vue(),
        AutoImport({
            dts: 'src/auto-import.d.ts', // 路径下自动生成文件夹存放全局指令
            imports: ['vue', 'vue-router', 'pinia'],
        }),
        VueSetupExtend(),
        Components({
            dts: 'src/components.d.ts', // 路径下自动生成文件夹存放全局指令
            // dirs 指定组件所在位置，默认为 src/components
            // 可以让我们使用自己定义组件的时候免去 import 的麻烦
            dirs: ['src/components/'],
            // 配置需要将哪些后缀类型的文件进行自动按需引入
            extensions: ['vue', 'md'],
            resolvers: [
                // 是否同时导入样式、解析ant-design-vue图标
                AntDesignVueResolver({importStyle: 'less', resolveIcons: true}),
                // IconsResolver(),
            ]
        }),
        UnoCSS(),
        createSvgIconsPlugin({
            iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
            symbolId: "icon-[dir]-[name]",
        }),
    ],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
                // modifyVars: {
                //   hack: `true; @import (reference) "${path.resolve("src/assets/css/base.less")}";`,
                // },
            },
        },
    },
    resolve: {
        alias: { // 路径别名
            // '@': fileURLToPath(new URL('./src', import.meta.url))
            '@': resolve(__dirname, './src')
        },
        // 配置需要将哪些后缀类型的文件进行自动按需引入
        extensions: ['.js', '.ts', '.vue', '.jsx', '.tsx', '.json', 'png', 'svg']
    }
})
