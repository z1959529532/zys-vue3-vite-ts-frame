<template>
  <a-layout class="wh-full overflow-hidden">
    <a-layout-sider class=""
                    :theme="getTheme"
                    collapsible
                    :width="sideWidth"
                    :trigger="null"
                    v-model:collapsed="collapsed">
      <Logo :collapsed="collapsed" :topHeight="topHeight"></Logo>
      <SideMenu :collapsed="collapsed"
                :theme="getTheme"
                :topHeight="topHeight"></SideMenu>
    </a-layout-sider>
    <a-layout>
      <Header v-model:collapsed="collapsed"
              :theme="getTheme"
              :topHeight="topHeight"></Header>
      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup name="Layout" lang="ts">
import {useRoute, useRouter} from 'vue-router'
import Logo from "@/layout/Logo/Logo.vue";
import SideMenu from './Menu/Menu.vue'
import Header from "@/layout/Header/Header.vue";

/**
 * layout页面
 *
 * author zys
 * date 2023/12/26 10:25
 */
const router = useRouter()
const route = useRoute()

/** 是否折叠 */
const collapsed = ref(false);
/** header logo 高度 */
const topHeight = ref(55);
const getTheme = computed(() => {
  // (layoutSetting.value.navTheme === 'light' ? 'light' : 'dark')
  return 'dark'
});
// 自定义侧边栏菜单收缩和展开时的宽度
const sideWidth = computed(() => (collapsed.value ? 80 : 220));

const props = defineProps({})
const emit = defineEmits([])

onMounted(() => {
})

</script>

<style scoped lang="less">

</style>