<template>
  <div id="main"></div>
</template>

<script>
import { getEnterpriseSalary } from '@/api/api'
import * as echarts from 'echarts'
export default {
  name: 'EnterpriseSalary',
  mounted () {
    getEnterpriseSalary().then((res) => {
      console.log(res)
      const salarList = []
      for (let i = 0; i < res.data.length; i++) {
        salarList.push(
          { value: res.data[i].numbers, name: res.data[i].groupTag }
        )
      }
      console.log(salarList)
      const chartDom = document.getElementById('main')
      const myChart = echarts.init(chartDom)
      const option = {
        title: {
          text: '企业薪资分布图',
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
#main{
  width: 300px;
  height: 300px;
}
</style>
