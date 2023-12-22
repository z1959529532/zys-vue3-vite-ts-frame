<template>
  <a-layout-sider class="h-full overflow-x-auto" width="256px" theme="dark">
    <div class="header h50px zys-flex-center-v">
      <router-link class="zys-flex-center-v" to="/">
        <img class="w25px h25px" src="@/assets/images/logo.png">
        <h1 class="m-l10px">XX系统</h1>
      </router-link>
    </div>
    <div>123</div>
  </a-layout-sider>
</template>

<script setup name="ZysSideMenu" lang="ts">
import {useRoute, useRouter} from 'vue-router'

/**
 * 页面
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
  collapsed: {
    type: Boolean,
    default: false
  },
  menuData: {
    type: Array,
    default: []
  },
  theme: {
    type: String,
    default: 'dark'
  }
})
const emit = defineEmits([])

onMounted(() => {
})

// const sideTheme = computed(() => {
//   return props.theme == 'light' ? props.theme : 'dark'
// })

</script>

<style scoped lang="less">

.header {
  position: relative;
  -webkit-transition: all .3s;
  transition: all .3s;
  overflow: hidden;

  &.light {
    background-color: #fff;

    h1 {
      color: var(--zh-primary);
    }
  }
}
</style>