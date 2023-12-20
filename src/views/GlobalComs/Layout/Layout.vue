<template>
  <div id="Layout" flex>
    <ZysSideMenu>
    </ZysSideMenu>
    <RouterView></RouterView>
  </div>
</template>

<script setup name="ZysLayout" lang="ts">
import {useRoute, useRouter} from 'vue-router'

/**
 * 页面
 *
 * author zys
 * date 2023/12/20 9:04
 */
const router = useRouter()
const route = useRoute()

const props = defineProps({})
const emit = defineEmits([])

onMounted(() => {
})

</script>

<style scoped lang="less">
#Layout {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>