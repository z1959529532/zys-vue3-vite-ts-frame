<template>
  <a-layout-sider width="256px">
    <div class="logo" />
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <a-menu-item key="1">
        <user-outlined />
        <span>nav 1</span>
      </a-menu-item>
      <a-menu-item key="2">
        <video-camera-outlined />
        <span>nav 2</span>
      </a-menu-item>
      <a-menu-item key="3">
        <upload-outlined />
        <span>nav 3</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script setup name="ZysSideMenu" lang="ts">
import {useRoute, useRouter} from 'vue-router'

/**
 * 侧边栏菜单组件
 *
 * author zys
 * date 2023/12/20 8:53
 */
const router = useRouter()
const route = useRoute()

const props = defineProps({})
const emit = defineEmits([])

const selectedKeys = ref(['1']);

onMounted(() => {

})

</script>

<style scoped lang="less">
#SideMenu {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>