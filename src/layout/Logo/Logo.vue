<template>
  <div id="logo"
       class="zys-flex-center"
       :style="{'height': `${topHeight}px`}">
    <div class="zys-flex-center-v cursor-pointer" @click="clickLogo">
      <img class="h32px" src="@/assets/images/logo2.png" alt=""/>
      <h2 class="ml-8px text-green-600" v-show="!collapsed">ZYS</h2>
    </div>
  </div>
</template>

<script setup name="Logo" lang="ts">
import {useRoute, useRouter} from 'vue-router'

/**
 * logo页面
 *
 * author zys
 * date 2023/12/26 10:29
 */
const router = useRouter()
const route = useRoute()

const props = defineProps({
  collapsed: {
    type: Boolean,
  },
  topHeight: {
    type: Number,
  },
})
const emit = defineEmits([])

onMounted(() => {
})

const clickLogo = () => {
  // router.push({ name: '/' });
}

</script>

<style scoped lang="less">
#logo {
}
</style>