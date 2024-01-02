<template>
  <a-button v-bind="$attrs">
    <template #icon v-if="icon">
      <slot name="icon">
        <ZysIcon :icon="icon"></ZysIcon>
      </slot>
    </template>
    <template #default>
      <slot></slot>
    </template>
  </a-button>
</template>

<script setup name="ZysButton" lang="ts">
import {useRoute, useRouter} from 'vue-router'
import ZysIcon from '../Icon/Icon.vue'

/**
 * a-button组件
 *
 * author zys
 * date 2023/12/28 15:37
 */
const router = useRouter()
const route = useRoute()
defineOptions({
  inheritAttrs: false // 关闭自动透传
})

const props = defineProps({
  icon: {
    type: [Object, String],
    default: '',
  },
})
const emit = defineEmits([])

onMounted(() => {
})

</script>

<style scoped lang="less">

</style>