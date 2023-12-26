import {defineStore} from 'pinia'
import {CacheEnum} from "@/enums/cacheEnum.ts";

export const useLayoutSettingStore = defineStore('layoutSetting', {
    // @ts-ignore
    state: () => ({
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

export const defaultSetting: LayoutSetting = {
    navTheme: 'dark', // theme for nav menu
    colorPrimary: '#1677FF', // '#F5222D', // primary color of ant design
    layout: 'sidemenu', // nav menu position: `sidemenu` or `topmenu`
    contentWidth: 'Fluid', // layout of content: `Fluid` or `Fixed`, only works when layout is topmenu
    fixedHeader: false, // sticky header
    fixSiderbar: false, // sticky siderbar
    colorWeak: false,
    menu: {
        locale: true,
    },
    title: 'vite-antdv-admin',
    pwa: false,
    iconfontUrl: '',
    // production: process.env.NODE_ENV === 'production' && process.env.VUE_APP_PREVIEW !== 'true',
};

export type LayoutSetting = {
    navTheme: ThemeColor;
    colorPrimary: string;
    layout: 'sidemenu' | 'topmenu';
    contentWidth: 'Fluid' | 'Fixed';
    fixedHeader: false;
    fixSiderbar: false;
    colorWeak: false;
    menu: {
        locale: true;
    };
    title: string;
    pwa: false;
    iconfontUrl: string;
};