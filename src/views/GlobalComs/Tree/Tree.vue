<template>
  <div id="tree"
       wh-full
       overflow-hidden>
    123
  </div>
</template>

<script setup name="Tree" lang="ts">
import {useRoute, useRouter} from 'vue-router'

/**
 * 页面
 *
 * author zys
 * date 2024/1/5 17:50
 */
const router = useRouter()
const route = useRoute()

const props = defineProps({})
const emit = defineEmits([])

onMounted(() => {
})

</script>

<style scoped lang="less">
#tree {
}
</style>