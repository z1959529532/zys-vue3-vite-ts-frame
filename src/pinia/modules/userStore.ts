import {defineStore} from 'pinia'

export const useUserStore = defineStore('demo', {
    // @ts-ignore
    state: () => ({
        userInfo: {},
    }),
    getters: {},
    actions: {},
    // 表示这个store里的数据都将持久化存储
    // persist: true,
    persist: {
        enabled: true, // 开起持久化
        storage: localStorage, //储存模式
    },
}, {
    // 表示这个store里的数据都将持久化存储
    // persist: true,
})