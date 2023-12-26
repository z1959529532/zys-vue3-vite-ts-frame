<template>
  <a-tooltip :title="getTitle" placement="bottom" :mouse-enter-delay="0.5">
    <span @click="toggle">
      <FullscreenOutlined v-if="!isFullscreen"/>
      <FullscreenExitOutlined v-else/>
    </span>
  </a-tooltip>
</template>

<script setup name="FullScreen" lang="ts">
import {useRoute, useRouter} from 'vue-router'
import {FullscreenExitOutlined, FullscreenOutlined} from '@ant-design/icons-vue';
import {useFullscreen} from "@vueuse/core";

/**
 * 全屏页面
 *
 * author zys
 * date 2023/12/26 17:15
 */
const router = useRouter()
const route = useRoute()

const {toggle, isFullscreen} = useFullscreen();
const getTitle = computed(() => {
  return unref(isFullscreen) ? '退出全屏' : '全屏'
});

const props = defineProps({})
const emit = defineEmits([])

onMounted(() => {
})

</script>

<style scoped lang="less">
#fullScreen {
}
</style>