<template>
    <div id="TalentEducationEcharts"></div>
</template>

<script>
import { getTalentEducation } from '@/api/api'
import * as echarts from 'echarts'
export default {
  name: 'TalentEducation',
  mounted () {
    this.getEcharts()
  },
  methods: {
    getEcharts () {
      getTalentEducation().then((res) => {
        console.log(res)
        const chartDom = document.getElementById('TalentEducationEcharts')
        const myChart = echarts.init(chartDom, 'dark')
        const option = {
          backgroundColor: '',
          color: ['#00FF7F', '#00FFFF', '#98FB98', '#808000', '#E0FFFF', '#ADFF2F'],
          title: {
            text: '人才学历分布',
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
#TalentEducationEcharts{
    width: 355px;
    height: 355px;
}
</style>
