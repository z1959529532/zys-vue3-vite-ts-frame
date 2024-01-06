<template>
  <a-tooltip :open="open"
             destroyTooltipOnHide
             v-bind="$attrs">
    <!--弹出面板-->
    <template #title>
      <div break-all>
        <template v-if="title">{{ title }}</template>
        <slot v-else></slot>
      </div>
    </template>
    <!--内容-->
    <template #default>
      <div :class="contentStyle"
           :style="{'-webkit-line-clamp':row>1?row:''}"
           @mouseenter="showToolTip"
           @mouseleave="open=false">
        <template v-if="title">{{ title }}</template>
        <slot v-else></slot>
      </div>
    </template>
  </a-tooltip>
</template>

<script setup lang="ts" name="ZysTooltip">
import {useRoute, useRouter} from "vue-router"

/**
 * Tooltip组件
 *
 * author zys
 * date 2024/1/6 15:13
 */
const router = useRouter()
const route = useRoute()

const props = defineProps({
  // 内容显示行数，超出显示...
  row: {
    type: Number,
    default: 1,
  },
  // 内容
  title: {
    type: String,
    default: '',
  }
})
const emit = defineEmits([])
const contentRef = ref(false)

const contentStyle = computed(() => {
  if (props.row === 1) {
    return ['one-row']
  } else if (props.row > 1) {
    return ['more-row']
  }
})

// 显隐状态
const open = ref(false)
// hover
const showToolTip = (event) => {
  const clientWidth = event.target.clientWidth
  const scrollWidth = event.target.scrollWidth
  if (scrollWidth > clientWidth) {
    open.value = true
  }
}

</script>

<style scoped lang="less">
.one-row {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.more-row {
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
</style>