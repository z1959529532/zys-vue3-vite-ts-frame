<template>
  <template v-if="allAntDesignIcons[props.icon]">
    <component :is="allAntDesignIcons[props.icon]"
               :class="{'cursor-pointer': isPointer}"
               :style="getSizeStyle"
               :rotate="rotate"
               :spin="spin"></component>
  </template>
  <span v-else class="anticon anticon-plus cursor-pointer">
    <svg aria-hidden="true"
         :class="['inline-block', 'overflow-hidden', 'fill-current', isPointer?'cursor-pointer':'', spin?'element-spin':'']"
         :style="[getSizeStyle, rotate?`transform: rotate(${rotate}deg)`:'']">
    <use :xlink:href="symbolId" :fill="color"/>
  </svg>
  </span>
</template>

<script setup name="ZysIcon" lang="ts">
import {useRoute, useRouter} from 'vue-router'
import * as allAntDesignIcons from '@ant-design/icons-vue'
import { isVNode } from 'vue'

/**
 * icon组件
 *
 * author zys
 * date 2024/1/2 11:10
 */
const router = useRouter()
const route = useRoute()

const props = defineProps({
  prefix: {
    type: String,
    default: 'icon',
  },
  icon: {
    type: String,
    default: '',
  },
  isPointer: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    // default: '#333',
  },
  size: {
    type: [Number, String],
    default: '14px',
  },
  rotate: {
    type: Number,
    default: 0
  },
  spin: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits([])
// 本地svg图标情况
const symbolId = computed(() => `#${props.prefix}-${props.icon}`)
const getSizeStyle = computed(() => {
  const {size, rotate} = props
  const s = `${size}`.replace('px', '').concat('px')
  return {width: s, height: s}
})

onMounted(() => {
})

</script>

<style scoped lang="less">
//.svg-icon {
//  vertical-align: -0.15em;
//}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.element-spin {
  animation-name: rotate;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
</style>