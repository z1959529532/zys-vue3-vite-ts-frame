<template>
  <div id="loading">
    <ZysCard class="zh-flex-item-weight-1 zh-margin-top" :hover="true">
      <template #title>使用组件方式</template>
      <template #extra>
        <a-button type="primary" @click="openCompFullLoading">全屏Loding</a-button>
        <a-button type="primary" @click="openCompLoading">容器内Loding</a-button>
      </template>
      <div style="position: relative">
        <ZysLoading :loading="compState.loading"
                    :absolute="compState.absolute"
                    :tip="compState.tip"
                    :background="compState.background"/>
        <div style="width: 100px;height: 100px;background-color: lightblue"></div>
      </div>
    </ZysCard>

    <ZysCard class="zh-flex-item-weight-1 zh-margin-top" :hover="true">
      <template #title>使用函数方式</template>
      <template #extra>
        <a-button type="primary" @click="openFnFullLoading">全屏Loding</a-button>
        <a-button type="primary" @click="openFnWrapLoading">容器内Loding</a-button>
      </template>
      <div ref="wrapEl" style="position: relative">
        <div style="width: 100px;height: 100px;background-color: lightblue"></div>
      </div>
    </ZysCard>

    <ZysCard class="zh-flex-item-weight-1 zh-margin-top"
             :hover="true">
      <template #title>使用指令方式</template>
      <template #extra>
        <a-button type="primary" @click="useLoadingDirective">使用指令</a-button>
      </template>
      <div class="zh-flex-item-weight-1" v-loading="loading" loadingTip="加载中..."
           loadingBackground="rgba(0, 0, 0, .3)">
        <div style="width: 100px;height: 100px;background-color: lightblue"></div>
      </div>
    </ZysCard>
  </div>
</template>

<script setup name="Loading" lang="ts">
import {useRoute, useRouter} from 'vue-router'

/**
 * 组件-Loading
 *
 * author zys
 * date 2023/12/15 19:00
 */
const router = useRouter()
const route = useRoute()

const props = defineProps({})
const emit = defineEmits([])

onMounted(() => {
})

/***********************************组件****************************************/
const compState = reactive({
  loading: false,
  absolute: false,
  background: 'rgba(0, 0, 0, .3)',
  tip: '加载中...',
});

/** 全屏 */
const openCompFullLoading = () => {
  openLoading(false);
}
/** 容器内 */
const openCompLoading = () => {
  openLoading(true);
}
const openLoading = (absolute: boolean) => {
  compState.loading = true;
  compState.absolute = absolute;
  setTimeout(() => {
    compState.loading = false;
  }, 2000);
}

/***********************************函数****************************************/
import {useLoading} from "@/components/Loading/useLoading.ts";

/** 全屏 */
const [openFnFull, closeFnFull] = useLoading({
  tip: '加载中...',
  background: 'rgba(0, 0, 0, .3)'
});
const openFnFullLoading = () => {
  openFnFull();
  setTimeout(() => {
    closeFnFull();
  }, 2000);
}
/** 容器内 */
const wrapEl = ref();
const [openFnWrap, closeFnWrap] = useLoading({
  props: {
    tip: '加载中...',
    background: 'rgba(0, 0, 0, .3)',
    absolute: true,
  },
  target: wrapEl
});
const openFnWrapLoading = () => {
  openFnWrap();
  setTimeout(() => {
    closeFnWrap();
  }, 2000);
}

/***********************************指令****************************************/
const loading = ref(false)
const useLoadingDirective = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
}

</script>

<style scoped lang="less">
#loading {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
</style>