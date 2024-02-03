<template>
    <div id="EnterpriseEducationEcharts"></div>
</template>

<script>
import { getEnterpriseEducation } from '@/api/api'
import * as echarts from 'echarts'
export default {
  name: 'EnterpriseEducation',
  mounted () {
    getEnterpriseEducation().then((res) => {
      const education = []
      for (let i = 0; i < res.data.length; i++) {
        education.push(
          { value: res.data[i].numbers, name: res.data[i].groupTag }
        )
      }
      const chartDom = document.getElementById('EnterpriseEducationEcharts')
      const myChart = echarts.init(chartDom, 'dark')
      const option = {
        backgroundColor: '',
        color: ['#00FF7F', '#00FFFF', '#98FB98', '#808000', '#E0FFFF', '#ADFF2F'],
        title: {
          text: '各个行业的学历要求',
          subtext: '每日',
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
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [10, 75],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: education
          }
        ]
      }
      myChart.setOption(option)
    })
  }
}
</script>

<style>
#EnterpriseEducationEcharts{
    width: 280px;
    height: 280px;
}
</style>
