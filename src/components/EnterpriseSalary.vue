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
        let xlist = [10, 15, 20, 15]
        let maxNum = Math.max(...xlist) * 1.2
        let ylist = [
          { name: '2k-4k', max: maxNum },
          { name: '4k-6k', max: maxNum },
          { name: '8k-10k', max: maxNum },
          { name: '其他', max: maxNum }
        ]
        if (res.data.length > 0) {
          xlist = []
          ylist = []
          for (let i = 0; i < res.data.length; i++) {
            xlist.push(res.data[i].numbers)
          }
          maxNum = Math.max(...xlist) * 1.2
          xlist = []
          for (let i = 0; i < res.data.length; i++) {
            xlist.push(res.data[i].numbers)
            ylist.push(
              { name: res.data[i].groupTag, max: maxNum }
            )
          }
        }
        const chartDom = document.getElementById('EnterpriseSalaryEcharts')
        const myChart = echarts.init(chartDom, 'dark')
        const option = {
          backgroundColor: '',
          color: ['#00FF7F', '#00FFFF', '#98FB98', '#808000', '#E0FFFF', '#ADFF2F'],
          title: {
            text: '企\n业\n薪\n资\n分\n布'
          },
          radar: {
            // shape: 'circle',
            indicator: ylist
          },
          series: [
            {
              name: 'Budget vs spending',
              type: 'radar',
              data: [
                {
                  value: xlist
                }
              ]
            }
          ]
        }
        myChart.setOption(option)
      }).catch(err => {
        console.log(err)
        setTimeout(this.init, 6000)
      })
    }
  }
}
</script>

<style>
#EnterpriseSalaryEcharts{
  width: 400px;
  height: 225px;
}
</style>
