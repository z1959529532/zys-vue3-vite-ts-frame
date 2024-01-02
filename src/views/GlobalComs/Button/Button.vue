<template>
  <!--icon节点-->
  <ZysIcon :icon="h(PlusOutlined)"/>
  <br>
  <br>
  <!--icon字符串-->
  <ZysIcon icon="PlusOutlined"/>
  <br>
  <br>
  <!--icon字符串，组件库中没有-->
  <ZysIcon icon="export"></ZysIcon>
  <br>
  <br>

  <!--button节点-->
  <ZysButton type="primary" :icon="h(PlusOutlined)">添加</ZysButton>
  <br>
  <br>
  <!--button字符串-->
  <ZysButton type="primary" icon="PlusOutlined">添加</ZysButton>
  <br>
  <br>
  <!--button字符串，组件库中没有-->
  <ZysButton type="primary" icon="export">导出</ZysButton>
</template>

<script setup name="Button" lang="ts">
import {useRoute, useRouter} from 'vue-router'
import {h} from 'vue';
import {PlusOutlined} from '@ant-design/icons-vue';

/**
 * 按钮使用页面
 *
 * author zys
 * date 2023/12/28 15:30
 */
const router = useRouter()
const route = useRoute()

const props = defineProps({})
const emit = defineEmits([])

onMounted(() => {
})

</script>

<style scoped lang="less">
</style>