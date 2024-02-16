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
      const education = [
        { value: 10, name: '小学' },
        { value: 15, name: '初中' },
        { value: 20, name: '高中' },
        { value: 25, name: '大学' },
        { value: 30, name: '其他' }
      ]
      if (res.data.length > 0) {
        console.log('EnterpriseEducationEcharts', res)
        education.splice(0)
        for (let i = 0; i < res.data.length; i++) {
          education.push(
            { value: res.data[i].numbers, name: res.data[i].groupTag }
          )
        }
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
    width: 230px;
    height: 230px;
}
</style>
