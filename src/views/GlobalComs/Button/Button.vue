<template>
  <ZysButton>123</ZysButton>
</template>

<script setup name="Button" lang="ts">
import {useRoute, useRouter} from 'vue-router'

/**
 * 按钮使用页面
 *
 * author zys
 * date 2023/12/28 15:30
 */
const router = useRouter()
const route = useRoute()

const props = defineProps({})
const emit = defineEmits([])

onMounted(() => {
})

</script>

<style scoped lang="less">
</style>