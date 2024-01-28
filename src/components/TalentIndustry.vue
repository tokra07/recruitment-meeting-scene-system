<template>
    <div id="TalentIndustryEcharts"></div>
</template>

<script>
import { getTalentIndustry } from '@/api/api'
import * as echarts from 'echarts'
export default {
  name: 'TalentIndustry',
  mounted () {
    this.getEcharts()
  },
  methods: {
    getEcharts () {
      getTalentIndustry().then((res) => {
        console.log(res)
        const chartDom = document.getElementById('TalentIndustryEcharts')
        const myChart = echarts.init(chartDom)
        const option = {
          title: {
            text: '人才行业分布',
            subtext: '每分钟',
            left: 'center'
          },
          legend: {
            top: 'bottom'
          },
          toolbox: {
            show: true,
            feature: {
              mark: { show: true }
            }
          },
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name: '本分钟',
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar',
              label: {
                show: true,
                position: 'inside'
              }
            },
            {
              name: '上分钟',
              data: [130, 230, 224, 218, 135, 147, 260],
              type: 'line',
              label: {
                show: true,
                position: 'inside'
              }
            }
          ]
        }
        myChart.setOption(option)
      })
    }
  }
}
</script>

<style>
#TalentIndustryEcharts{
    width: 400px;
    height: 400px;
}
</style>
