<template>
  <ZysIcon icon="PlusOutlined"/>
  <ZysIcon icon="export"></ZysIcon>
  <br>

  <ZysButton type="primary" icon="PlusOutlined">添加</ZysButton>
  <ZysButton type="primary" icon="export">导出</ZysButton>

  <ZysButton @click="showConfirm">确认框</ZysButton>
</template>

<script setup name="Button" lang="ts">
import {useRoute, useRouter} from 'vue-router'
import {h} from 'vue';
import {PlusOutlined} from '@ant-design/icons-vue';
import {Modal} from "ant-design-vue";

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

// const iconVNode = computed(() => {
//   return
// })

onMounted(() => {
})

const showConfirm = () => {
  Modal.confirm({
    title: '确定？',
    content: '内容',
    onOk() {
    },
  });
}

</script>

<style scoped lang="less">
</style>