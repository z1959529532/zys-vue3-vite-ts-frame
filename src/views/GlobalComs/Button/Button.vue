<template>
  <!--icon字符串-->
  <ZysIcon icon="PlusOutlined"/>
  <br>
  <br>
  <!--icon字符串，组件库中没有-->
  <ZysIcon icon="export"></ZysIcon>
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
import {PlusOutlined, DeleteOutlined} from '@ant-design/icons-vue';
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
  console.log(h(PlusOutlined));
})

const deleteTagById = () => {
  Modal.confirm({
    title: 'Do you want to delete these items?',
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, 1500);
      }).catch(() => console.log('Oops errors!'));
    },
  });
}

</script>

<style scoped lang="less">
</style>