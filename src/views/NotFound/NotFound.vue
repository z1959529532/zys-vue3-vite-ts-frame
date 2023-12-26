<template>
  <div id="not-found" class="zh-flex-column zh-flex-center">
    <img src="../../assets/images/404.png" alt=""/>
    <div class="tip-content">
      <h2>您访问的页面不存在！</h2>
      <p>{{ countdown }}&nbsp;秒后自动跳转到上一页</p>
    </div>
    <a-space size="large">
      <a-button @click="router.go(-1)">返回上一页</a-button>
      <a-button type="primary" @click="router.replace('/')">返回首页</a-button>
    </a-space>
  </div>
</template>

<script setup lang="ts" name="NotFound">
import {onMounted} from "vue";
import {useRoute, useRouter} from 'vue-router'
import {useIntervalFn} from "@vueuse/core";

/**
 * 404页面
 *
 * author zys
 * date 2023/12/5 8:53
 */
onMounted(() => {

})
const router = useRouter()
const route = useRoute()

const countdown = ref(5)

const { pause } = useIntervalFn(() => {
  if (--countdown.value === 0) {
    countdown.value = 5;
    router.go(-1)
  }
}, 1000)

onBeforeUnmount(() => {
  pause && pause()
})

</script>

<style scoped lang="less">
#not-found {
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 724px;
    height: 718px;
  }

  .tip-content {
    position: absolute;
    bottom: 22%;
    transform: translateX(10px);

    p {
      color: #777a84;
      font-size: 18px;
      margin-top: 10px;
    }
  }
}
</style>