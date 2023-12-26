<template>
  <a-layout-header :style="headerStyle">
    <a-space>
      <span class="menu-fold" @click="changeCollapsed">
        <component :is="collapsed ? MenuUnfoldOutlined : MenuFoldOutlined"/>
      </span>
    </a-space>
  </a-layout-header>
</template>

<script setup name="Header" lang="ts">
import {useRoute, useRouter} from 'vue-router'
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons-vue';

/**
 * header页面
 *
 * author zys
 * date 2023/12/26 13:57
 */
const router = useRouter()
const route = useRoute()

const headerStyle = computed(() => {
  return {
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: '0 20px',
    height: `${props.topHeight}px`,
    lineHeight: `${props.topHeight}px`,
  }
})

const props = defineProps({
  theme: {
    type: String,
    default: 'dark'
  },
  collapsed: {
    type: Boolean,
    default: false
  },
  topHeight: {
    type: Number,
  },
})
const emit = defineEmits(['update:collapsed'])

onMounted(() => {
})

const changeCollapsed = () => {
  emit('update:collapsed', !props.collapsed)
}

</script>

<style scoped lang="less">
* {
  cursor: pointer;
}
</style>