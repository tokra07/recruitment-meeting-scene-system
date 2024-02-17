<template>
  <div id="EnterpriseSalaryEcharts"></div>
</template>

<script>
import { getEnterpriseSalary } from '@/api/api'
import * as echarts from 'echarts'
export default {
  name: 'EnterpriseSalary',
  mounted () {
    this.init()
  },
  methods: {
    init () {
      getEnterpriseSalary().then((res) => {
        console.log('EnterpriseSalaryEcharts', res)
        const salarList = [
          { value: 10, name: '2k-4k' },
          { value: 15, name: '4k-6k' },
          { value: 20, name: '8k-10k' },
          { value: 25, name: '其他' }
        ]
        if (res.data.length > 0) {
          salarList.splice(0)
          for (let i = 0; i < res.data.length; i++) {
            salarList.push(
              { value: res.data[i].numbers, name: res.data[i].groupTag }
            )
          }
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
      }).catch(err => {
        console.log(err)
        const salarList = [
          { value: 10, name: '2k-4k' },
          { value: 15, name: '4k-6k' },
          { value: 20, name: '8k-10k' },
          { value: 25, name: '其他' }
        ]
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
        setTimeout(this.init, 6000)
      })
    }
  }
}
</script>

<style>
#EnterpriseSalaryEcharts{
  width: 225px;
  height: 225px;
}
</style>
