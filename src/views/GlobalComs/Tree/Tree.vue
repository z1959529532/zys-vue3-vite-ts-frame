<template>
  <div id="tree"
       wh-full
       overflow-hidden
       p-4>
    <div h-full w-200px>
      <ZysTree :treeData="treeInit.treeData"
               :load-data="onLoadData">
        <template #actions="node">
          <ZysButton type="link" icon="PlusOutlined"></ZysButton>
          <ZysButton type="link" icon="EditOutlined"></ZysButton>
          <ZysButton type="link" icon="DeleteOutlined"></ZysButton>
        </template>
      </ZysTree>
    </div>
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

const treeInit = reactive({
  selectedKeys: [],
  expandedKeys: [],
  treeData: [
    {name: 'Tree 11111111111111111111111111111111111111111', id: '1'},
    {name: 'Tree 2', id: '2'},
    {name: 'Tree 3', id: '3', isLeaf: true},
  ],
  expandTreeData: [
    {name: 'Tree 1.1', id: '1.1', isLeaf: true, parentId: '1'},
    {name: 'Tree 1.2', id: '1.2', isLeaf: true, parentId: '1'},
    {name: 'Tree 1.3', id: '1.3', isLeaf: true, parentId: '1'},
    {name: 'Tree 2.1', id: '2.1', isLeaf: true, parentId: '2'},
    {name: 'Tree 2.2', id: '2.2', isLeaf: true, parentId: '2'},
    {name: 'Tree 2.3', id: '2.3', isLeaf: true, parentId: '2'},
  ],
})

const onLoadData = (treeNode) => {
  console.log(treeInit.expandTreeData.filter(val => val?.parentId === treeNode.dataRef.id));
  return new Promise((resolve) => {
    treeNode.dataRef.children = treeInit.expandTreeData.filter(val => val?.parentId === treeNode.dataRef.id)
    treeInit.treeData = [...treeInit.treeData];
    resolve()
  })
}

</script>

<style scoped lang="less">
#tree {
}
</style>