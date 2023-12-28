<template>
  <a-button>
    <slot></slot>
  </a-button>
</template>

<script setup name="ZysButton" lang="ts">
import {useRoute, useRouter} from 'vue-router'

/**
 * 页面
 *
 * author zys
 * date 2023/12/28 15:37
 */
const router = useRouter()
const route = useRoute()
defineOptions({
  inheritAttrs: false // 关闭自动透传
})

const props = defineProps({})
const emit = defineEmits([])

onMounted(() => {
})

</script>

<style scoped lang="less">

</style>