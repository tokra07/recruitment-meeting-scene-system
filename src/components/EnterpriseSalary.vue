<template>
  <div id="EnterpriseSalaryEcharts"></div>
</template>

<script>
import { getEnterpriseSalary } from '@/api/api'
import * as echarts from 'echarts'
export default {
  name: 'EnterpriseSalary',
  mounted () {
    getEnterpriseSalary().then((res) => {
      console.log('EnterpriseSalaryEcharts', res)
      const salarList = []
      for (let i = 0; i < res.data.length; i++) {
        salarList.push(
          { value: res.data[i].numbers, name: res.data[i].groupTag }
        )
      }
      const chartDom = document.getElementById('EnterpriseSalaryEcharts')
      const myChart = echarts.init(chartDom, 'dark')
      const option = {
        backgroundColor: '',
        color: ['#00FF7F', '#00FFFF', '#98FB98', '#808000', '#E0FFFF', '#ADFF2F'],
        title: {
          text: '企业薪资分布',
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
            data: salarList
          }
        ]
      }
      myChart.setOption(option)
    })
  }
}
</script>

<style>
#EnterpriseSalaryEcharts{
  width: 230px;
  height: 230px;
}
</style>
