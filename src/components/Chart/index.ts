/**
 * 导出所有模块方法
 * author zys
 */
// const modulesFiles = require.context('./options', true, /index.ts$/)
// let modules = {}
// modulesFiles.keys().forEach(item => {
//     modules = Object.assign({}, modules, modulesFiles(item).default)
// })

const allModule = import.meta.glob("./options/*/*.ts", {eager: true});
let modules = {}
for (const module of Object.values(allModule)) {
    modules = {...modules, ...module.default}
}
export default modules