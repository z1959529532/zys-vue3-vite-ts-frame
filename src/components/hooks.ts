// 暴露子组件已暴露的方法和属性（用于UI组件库的二次封装）
export function useExposed(Ref) {
    const instance = getCurrentInstance()
    onMounted(() => {
        const entries = Object.entries(unref(Ref)?.$?.exposed || {})
        for (const [key, value] of entries) {
            instance.exposed[key] = value
        }
    })
}

// 排除arr中的slot
export function useExcludeSlots(slots, arr) {
    const newSlots = reactive({})
    Object.entries(slots).forEach(([key, value]) => {
        if (!arr.includes(key)) {
            newSlots[key] = value
        }
    })
    return newSlots
}

// 获取根路径
export function getRootPath() {
    const curWwwPath = window.document.location.href
    const pathName = window.document.location.pathname
    const pos = curWwwPath.indexOf(pathName)
    const localhostPaht = curWwwPath.substring(0, pos)
    const projectName = pathName.substring(0, pathName.substr(1).indexOf('/') + 1)
    return localhostPaht + projectName
}
