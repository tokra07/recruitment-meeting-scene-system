<template>
  <div id="main"></div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'HelloWorld',
  mounted () {
    const chartDom = document.getElementById('main')
    const myChart = echarts.init(chartDom)
    const option = {
      title: {
        text: '企业薪资分布',
        subtext: '',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: '2k以下' },
            { value: 735, name: '2k-4k' },
            { value: 580, name: '4k-6k' },
            { value: 484, name: '6k-8k' },
            { value: 300, name: '8k-10K' },
            { value: 300, name: '10K以上' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    }
    myChart.setOption(option)
  }
}
</script>

<style>
#main{
  width: 500px;
  height: 500px;
}
</style>
