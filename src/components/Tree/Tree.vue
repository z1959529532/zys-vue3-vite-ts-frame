<template>
  <a-tree v-model:selectedKeys="treeComInit.selectedKeys"
          :fieldNames="fieldNames"
          :tree-data="treeData"
          v-bind="$attrs">
    <template #icon></template>
    <template #title="node">
      <span class="custom-tree-node">
        <span class="custom-tree-node-title">
          <ZysTooltip>{{ node[fieldNames?.title] }}</ZysTooltip>
        </span>
        <span @click.stop class="custom-tree-node-actions">
          <slot name="actions" v-bind="node"></slot>
        </span>
      </span>
    </template>
  </a-tree>
</template>

<script setup lang="ts" name="ZysTree">
import {useRoute, useRouter} from "vue-router"

/**
 * Tree组件
 *
 * author zys
 * date 2024/1/6 14:47
 */
const router = useRouter()
const route = useRoute()

defineOptions({
  inheritAttrs: false // 关闭自动透传
})
const props = defineProps({
  defaultSelect: {
    type: Boolean,
    default: false,
  },
  fieldNames: {
    type: Object,
    default: {title: 'name', key: 'id', children: 'children'},
  },
  treeData: {
    type: Array,
    default: [],
  },
})
const emit = defineEmits([])

const treeComInit = reactive({
  selectedKeys: [],
})

</script>

<style lang="less">
.ant-tree-treenode {
  width: 100%;
  //height: 38px;
  align-items: center !important;
}
.ant-tree-switcher {
  align-self: center !important;
}

.ant-tree-node-content-wrapper {
  width: calc(100% - 24px);
  overflow: hidden;

  .ant-tree-title {
    height: 100%;
    // 自定义
    .custom-tree-node {
      height: 38px;
      display: flex;
      align-items: center;

      .custom-tree-node-title {
        flex: 1;
        overflow: hidden;
      }
    }
  }
}

.custom-tree-node {
  .custom-tree-node-actions {
    display: none;
  }

  &:hover .custom-tree-node-actions {
    display: block;
  }
}
</style>