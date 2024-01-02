<template>
  <section class="full-loading"
           :class="{ absolute }"
           v-show="loading"
           :style="[background ? `background-color: ${background}` : '']">
    <Spin v-bind="$attrs" :tip="tip" :size="size" :spinning="loading"/>
  </section>
</template>

<script setup name="ZysLoading" lang="ts">
import {useRoute, useRouter} from 'vue-router'
import {Spin} from 'ant-design-vue';
import {PropType} from "vue";
import {SizeEnum} from "@/enums/sizeEnum";

/**
 * loading组件
 *
 * author zys
 * date 2023/12/15 16:44
 */
// const router = useRouter()
// const route = useRoute()

const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  absolute: {
    type: Boolean,
    default: false,
  },
  tip: {
    type: String,
    default: '',
  },
  size: {
    type: String as PropType<SizeEnum>,
    default: SizeEnum.LARGE,
    validator: (v) => {
      return [SizeEnum.DEFAULT, SizeEnum.SMALL, SizeEnum.LARGE].includes(v);
    },
  },
  background: {
    type: String
  }
})
const emit = defineEmits([])

onMounted(() => {

})

</script>

<style scoped lang="less">
.full-loading {
  display: flex;
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgb(240 242 245 / 40%);

  &.absolute {
    position: absolute;
    z-index: 300;
    top: 0;
    left: 0;
  }
}
</style>