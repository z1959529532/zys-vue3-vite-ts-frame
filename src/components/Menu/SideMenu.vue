<template>
  <a-layout-sider class="h-full overflow-x-auto"
                  width="256px"
                  theme="dark"
                  :collapsible="collapsible">
    <Logo></Logo>
    <ZysMenu></ZysMenu>
  </a-layout-sider>
</template>

<script setup name="ZysSideMenu" lang="ts">
import {useRoute, useRouter} from 'vue-router'
import Logo from '@/layout/Logo/Logo.vue'

/**
 * 侧边栏从菜单页面
 *
 * author zys
 * date 2023/12/22 16:04
 */
const router = useRouter()
const route = useRoute()

const props = defineProps({
  collapsible: {
    type: Boolean,
    default: false
  },
})
const emit = defineEmits([])

onMounted(() => {
})

</script>

<style scoped lang="less">
</style>