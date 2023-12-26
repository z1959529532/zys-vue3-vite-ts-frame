<template>
  <a-menu v-model:selectedKeys="menuInit.selectedKeys"
          :theme="theme"
          :mode="mode"
          :items="menuData">
  </a-menu>
</template>

<script setup name="ZysMenu" lang="ts">
import {useRoute, useRouter} from 'vue-router'

/**
 * 页面
 *
 * author zys
 * date 2023/12/26 9:46
 */
const router = useRouter()
const route = useRoute()

const props = defineProps({
  mode: {
    type: String,
    default: 'inline'
  },
  collapsed: {
    type: Boolean,
    default: false
  },
  theme: {
    type: String,
    default: 'dark'
  },
  menuData: {
    type: Array,
    default: []
  },
})
const emit = defineEmits([])

const menuInit = reactive({
  selectedKeys: [],
})

onMounted(() => {
  console.log(router.getRoutes().filter(val => val.meta?.isMenu));
  console.log(route);
})

const getMenuData = computed(() =>
    props.menuData
)

const convertMenu = () => {

}

</script>

<style scoped lang="less">

</style>