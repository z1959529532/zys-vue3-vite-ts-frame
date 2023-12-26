<template>
  <a-menu class="overflow-y-auto"
          :style="{height: `calc(100% - ${props.topHeight}px)`}"
          v-model:openKeys="menuInit.openKeys"
          v-model:selectedKeys="menuInit.selectedKeys"
          :mode="isSideMenu ? 'inline' : 'horizontal'"
          :theme="theme as MenuTheme"
          :inline-collapsed="props?.collapsed"
          :items="menuData"
          @click="clickMenuItem">
  </a-menu>
</template>

<script setup name="Menu" lang="ts">
import {useRoute, useRouter} from 'vue-router'
import {useLayoutSettingStore} from "@/pinia/modules/layoutSetting.ts";
import {MailOutlined} from '@ant-design/icons-vue';
import {allRoutes} from "@/router/routes.ts";
import {MenuTheme} from "ant-design-vue";

/**
 * menu页面
 *
 * author zys
 * date 2023/12/26 11:13
 */
const router = useRouter()
const route = useRoute()

const layoutSettingStore = useLayoutSettingStore();
/** 侧边栏布局 */
const isSideMenu = computed(() => {
  // layoutSettingStore.layoutSetting.layout === 'sidemenu'
  return true
});
const menuData = computed(() => {
  // const menuRoutes = router.getRoutes().filter(val => Object.keys(val.meta).length > 0)
  const menuRoutes = allRoutes.filter(val => Object.keys(val.meta).length > 0)
  return routeConvertMenu(menuRoutes)
})
const routeConvertMenu = (routes) => {
  return routes.map(val => {
    return {
      icon: () => h(MailOutlined),
      key: val?.name,
      label: val?.meta?.title,
      children: val?.children?.length > 0 ? routeConvertMenu(val.children) : undefined
    }
  })
}

const props = defineProps({
  theme: {
    type: String,
    default: 'dark'
  },
  collapsed: {
    type: Boolean,
  },
  topHeight: {
    type: Number,
  },
})
const emit = defineEmits([])

const menuInit = reactive({
  selectedKeys: [],
  openKeys: []
})

onMounted(() => {
})

const clickMenuItem = ({key}) => {
  router.push({name: key});
}

</script>

<style scoped lang="less">
</style>