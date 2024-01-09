<template>
  <div id="chart">
    <ZysChart ref="chart1Ref"
              :chartId="chartInit.chartId1"
              :play-highlight="true"
              :height="'30%'"
              @clickChart="clickChart"></ZysChart>

    <!--    <ZysChart ref="chart2Ref"-->
    <!--              :chartId="chartInit.chartId2"-->
    <!--              :play-highlight="true"-->
    <!--              :height="'30%'"-->
    <!--              @clickChart="clickChart"></ZysChart>-->

    <!--    <ZysChart ref="chart3Ref"-->
    <!--              :chartId="chartInit.chartId3"-->
    <!--              :play-highlight="true"-->
    <!--              :height="'30%'"-->
    <!--              @clickChart="clickChart"></ZysChart>-->
  </div>
</template>

<script setup name="Chart" lang="ts">
import {useRoute, useRouter} from 'vue-router'

/**
 * 使用echarts页面
 *
 * author zys
 * date 2024/1/9 14:43
 */
const router = useRouter()
const route = useRoute()

const props = defineProps({})
const emit = defineEmits([])

const chartInit = reactive({
  chartId1: 'chart1',
  chartId2: 'chart2',
  chartId3: 'chart3',
})

const chart1Ref = ref(null)
const chart2Ref = ref(null)
const chart3Ref = ref(null)
const instance = getCurrentInstance();
const {proxy} = getCurrentInstance();
onMounted(() => {
  instance.refs.chart1Ref.chartOption = proxy.$echartsFn.testBar();
  // instance.refs.chart2Ref.chartOption = proxy.$echartsFn.testBar2();
  // instance.refs.chart3Ref.chartOption = proxy.$echartsFn
  //     .getPieChart([100, 23, 43, 65], ['#36CBCB', '#FAD337', '#F2637B', '#975FE4'])
})

const clickChart = (params) => {
  console.log(params, 3344);
}

</script>

<style scoped lang="less">
#chart {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>