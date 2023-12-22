<template>
  <div id="select">
    <ZysSelect v-model:selectValue="selectInit.value"
               :options="selectInit.options"
               :fieldNames="{label: 'label', value: 'value'}"></ZysSelect>
  </div>
</template>

<script setup name="Select" lang="ts">
import {useRoute, useRouter} from 'vue-router'

/**
 * 使用下拉框页面
 *
 * author zys
 * date 2023/12/21 9:16
 */
const router = useRouter()
const route = useRoute()

const props = defineProps({})
const emit = defineEmits([])

onMounted(() => {
})

const selectInit = reactive({
  value: '',
  options: [
    {
      value: 'jack',
      label: 'Jack',
    },
    {
      value: 'lucy',
      label: 'Lucy',
    },
    {
      value: 'yiminghe',
      label: 'Yiminghe',
    },
  ]
})

</script>

<style scoped lang="less">
#select {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>