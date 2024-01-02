<template>
  <!--下拉框-->
  <a-select v-if="type==='select'"
            :value="selectValue"
            :options="options"
            :fieldNames="fieldNames"
            :loading="optLoading"
            :style="selectStyle"
            :showSearch="search"
            @change="handleChange"
            v-bind="$attrs">
  </a-select>
  <!--树下拉框-->
  <a-tree-select v-else-if="type==='treeSelect'"
                 :value="selectValue"
                 :treeData="options"
                 :fieldNames="fieldNames"
                 :loading="optLoading"
                 :style="selectStyle"
                 :showSearch="search"
                 tree-default-expand-all
                 popupClassName="my-tree-select-dropdown"
                 @change="handleChange"
                 v-bind="$attrs">
  </a-tree-select>
</template>

<script setup name="ZysSelect" lang="ts">
import {useRoute, useRouter} from 'vue-router'

/**
 * 下拉框组件
 *
 * date: 2023/12/4 14:09
 * author: zys
 */
const router = useRouter()
const route = useRoute()
defineOptions({
  inheritAttrs: false // 关闭自动透传
})
const props = defineProps({
  type: { // select | treeSelect
    type: String,
    default: 'select'
  },
  search: {
    type: Boolean,
    default: true
  },
  width: {
    type: [String, Number],
    default: '200px'
  },
  selectValue: {
    type: [String, Number]
  },
  options: {
    type: Array,
    default: () => []
  },
  fieldNames: {
    type: Object,
    default: () => {
      /** options-->select  children-->treeSelect */
      return {label: 'label', value: 'value', options: 'options', children: 'children'}
    }
  },
})
const emit = defineEmits(['update:selectValue', 'selectChange'])
// const emit = defineEmits<{
//   (e: 'update:selectValue', value: string | number): void
// }>()

const selectStyle = computed(() => {
  return {width: (typeof props.width) === 'number' ? `${props.width}px` : props.width}
})
const optLoading = ref(false);
const handleChange = (value: string | number) => {
  emit('update:selectValue', value)
  emit('selectChange')
}

</script>

<style lang="less">
.my-tree-select-dropdown {
  &.ant-select-dropdown {
    .ant-select-tree-treenode {
      width: 100%;

      .ant-select-tree-node-content-wrapper {
        overflow: hidden;
      }
    }
  }
}
</style>