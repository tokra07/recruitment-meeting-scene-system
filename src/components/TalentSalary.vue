<template>
    <div id="TalentSalaryEcharts"></div>
</template>

<script>
import { getTalentSalary } from '@/api/api'
import * as echarts from 'echarts'
export default {
  name: 'TalentSalary',
  mounted () {
    this.getEcharts()
  },
  methods: {
    getEcharts () {
      getTalentSalary().then((res) => {
        console.log(res)
        const chartDom = document.getElementById('TalentSalaryEcharts')
        const myChart = echarts.init(chartDom, 'dark')
        const option = {
          backgroundColor: '',
          color: ['#00FF7F', '#00FFFF', '#98FB98', '#808000', '#E0FFFF', '#ADFF2F'],
          title: {
            text: '人才薪资期望',
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
#TalentSalaryEcharts{
    width: 355px;
    height: 355px;
}
</style>
