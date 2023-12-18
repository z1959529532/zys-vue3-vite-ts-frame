<template>
  <div id="main">
    <RouterView />
  </div>
</template>

<script setup lang="ts" name="Main">
import {useRoute, useRouter} from "vue-router"

/**
 * 主页面
 *
 * author zys
 * date 2023/12/16 14:26
 */
const router = useRouter()
const route = useRoute()

const props = defineProps({})
const emit = defineEmits([])

</script>

<style scoped lang="less">
#main {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>