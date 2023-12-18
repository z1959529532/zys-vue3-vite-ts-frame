<template>
  <a-card :bordered="border"
          :style="{border: getBorderColor, position: 'relative'}"
          :hoverable="hover"
          v-bind="$attrs">
    <!--支持原有插槽-->
    <template v-for="(slot, slotName) in $slots" #[slotName]="slotProps">
      <slot :name="slotName" v-bind="slotProps || {}"></slot>
    </template>
    <!-- extra插槽 (添加了默认间距) -->
    <template #extra v-if="slots.extra">
      <a-space>
        <slot name="extra"></slot>
      </a-space>
    </template>
  </a-card>
</template>

<script setup name="ZysCard" lang="ts">
import {useRoute, useRouter} from 'vue-router'
import {useExcludeSlots} from "@/components/hooks";

/**
 * 卡片组件
 *
 * author zys
 * date 2023/12/15 14:03
 */
const router = useRouter()
const route = useRoute()
defineOptions({
  inheritAttrs: false // 关闭自动透传
})
const props = defineProps({
  border: {
    type: Boolean,
    default: false
  },
  borderColor: {
    type: [String, Boolean],
    default: 'rgba(0, 0, 0, 15%)'
  },
  hover: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits([])

const slots = useSlots()
const slotsFilter = useExcludeSlots(slots, ['extra'])

const getBorderColor = computed(() => {
  return `1px solid ${props.borderColor}`;
})

onMounted(() => {
})

</script>

<style scoped lang="less">
</style>