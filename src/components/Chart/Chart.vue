<template>
  <div id="chart" :style="{ height: height, width: width }">
    <div z-999 :id="chartId" :style="{ height: '100%', width: '100%' }"/>
  </div>
</template>

<script setup name="ZysChart" lang="ts">
import {useRoute, useRouter} from 'vue-router'
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口
import * as echarts from 'echarts/core'
// 引入柱状图图表，图表后缀都为 Chart
import {
  BarChart,
  PieChart
} from 'echarts/charts'
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent
} from 'echarts/components'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import {
  CanvasRenderer
} from 'echarts/renderers'

// 注册必须的组件
echarts.use(
    [TitleComponent, TooltipComponent, GridComponent, CanvasRenderer, BarChart, PieChart]
)

/**
 * echarts组件
 *
 * author zys
 * date 2024/1/9 14:10
 */
const router = useRouter()
const route = useRoute()

const props = defineProps({
  chartId: {
    type: String,
    required: true
  },
  width: {
    type: String,
    default: '100%'
  },
  height: {
    type: String,
    default: '300px'
  },
  autoResize: {
    type: Boolean,
    default: true
  },
  // chartOption: {
  //     type: Object,
  //     required: true
  // },
  type: {
    type: String,
    default: 'canvas'
  },
  playHighlight: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['clickChart'])

const chartOption = ref(null)
const chartInit = reactive({
  chart: null,
  // 动画定时器
  actionTimer: '',
  currentIndex: -1,
})

watch(chartOption, (newValue) => {
  chartInit.chart ? setOptions() : initChart();
  if (props.autoResize) window.addEventListener('resize', resizeHandler);
})

onMounted(() => {
})

onBeforeMount(() => {
  if (!chartInit.chart) return
  if (props.autoResize) {
    window.removeEventListener('resize', resizeHandler)
  }
  chartInit.chart.dispose()
  chartInit.chart = null

  clearInterval(chartInit.actionTimer)
  chartInit.actionTimer = null
})

const initChart = () => {
  if (!chartOption?.value) return

  chartInit.chart = markRaw(echarts.init(document.getElementById(props.chartId), '', {renderer: props.type}))
  chartInit.chart.setOption(chartOption.value)
  chartInit.chart.on('click', handleClick)

  // if (props.playHighlight) {
  //   playHighlightAction()
  // }
}

const handleClick = (params) => {
  emit('clickChart', params)
}

const setOptions = () => {
  clearChart()
  resizeHandler()
  if (chartInit.chart) {
    chartInit.chart.setOption(chartOption.value)
  }
}

const clearChart = () => {
  chartInit.chart && chartInit.chart.clear()
}

const resizeHandler = () => {
  chartInit.chart && chartInit.chart.resize()
}

const refresh = () => {
  setOptions(chartOption.value)
}

const playHighlightAction = () => {
  chartInit.actionTimer = setInterval(() => {
    const dataLen = chartOption.value.series[0].data.length
    // 取消之前高亮的图形
    chartInit.chart.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex: chartInit.currentIndex
    })
    chartInit.currentIndex = (chartInit.currentIndex + 1) % dataLen
    // 高亮当前图形
    chartInit.chart.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex: chartInit.currentIndex
    })
    // 显示tooltip
    chartInit.chart.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex: chartInit.currentIndex
    })
  }, 1000)
}


defineExpose({
  chartOption,
});

</script>

<style scoped lang="less">
#chart {
  width: 100%;
  height: 100%;
}
</style>