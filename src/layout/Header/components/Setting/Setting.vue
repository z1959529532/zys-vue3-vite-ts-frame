<template>
  <SettingOutlined />
</template>

<script setup name="Setting" lang="ts">
import {useRoute, useRouter} from 'vue-router'
import { SettingOutlined } from '@ant-design/icons-vue';

/**
 * 设置页面
 *
 * author zys
 * date 2023/12/26 17:27
 */
const router = useRouter()
const route = useRoute()

const props = defineProps({})
const emit = defineEmits([])

onMounted(() => {
})

</script>

<style scoped lang="less">
#setting {
}
</style>