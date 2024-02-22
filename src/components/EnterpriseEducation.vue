<template>
    <div id="EnterpriseEducationEcharts"></div>
</template>

<script>
import { getEnterpriseEducation } from '@/api/api'
import * as echarts from 'echarts'
export default {
  name: 'EnterpriseEducation',
  mounted () {
    this.init()
  },
  methods: {
    init () {
      getEnterpriseEducation().then((res) => {
        let xlist = ['小学', '初中', '高中', '大学', '其他']
        let ylist = [10, 15, 20, 15, 5]
        let maxNum = Math.max(...ylist) * 1.2
        if (res.data.length > 0) {
          console.log('EnterpriseEducationEcharts', res)
          xlist = []
          ylist = []
          for (let i = 0; i < res.data.length; i++) {
            xlist.push(res.data[i].groupTag)
            ylist.push(res.data[i].numbers)
          }
          maxNum = Math.max(...ylist) * 1.2
        }
        const chartDom = document.getElementById('EnterpriseEducationEcharts')
        const myChart = echarts.init(chartDom, 'dark')
        const option = {
          backgroundColor: '',
          title: {
            text: '学\n历\n需\n求'
          },
          color: '#00FFFF',
          polar: {
            radius: [20, '80%']
          },
          legend: {
            top: 'bottom'
          },
          radiusAxis: {
            max: maxNum
          },
          toolbox: {
            show: true,
            feature: {
              mark: { show: true }
            }
          },
          angleAxis: {
            type: 'category',
            data: xlist,
            startAngle: 75
          },
          tooltip: {},
          series: {
            type: 'bar',
            data: ylist,
            coordinateSystem: 'polar'
          },
          animation: false
        }
        myChart.setOption(option)
      }).catch(err => {
        console.log(err)
        const xlist = ['小学', '初中', '高中', '大学', '其他']
        const ylist = [10, 15, 20, 15, 5]
        const maxNum = Math.max(...ylist) * 1.2
        const chartDom = document.getElementById('EnterpriseEducationEcharts')
        const myChart = echarts.init(chartDom, 'dark')
        const option = {
          backgroundColor: '',
          title: {
            text: '学\n历\n需\n求'
          },
          polar: {
            radius: [20, '80%']
          },
          legend: {
            top: 'bottom'
          },
          radiusAxis: {
            max: maxNum
          },
          toolbox: {
            show: true,
            feature: {
              mark: { show: true }
            }
          },
          angleAxis: {
            type: 'category',
            data: xlist,
            startAngle: 75
          },
          tooltip: {},
          series: {
            type: 'bar',
            data: ylist,
            coordinateSystem: 'polar'
          },
          animation: false
        }
        myChart.setOption(option)
        setTimeout(this.init, 6000)
      })
    }
  }
}
</script>

<style>
#EnterpriseEducationEcharts{
    width: 400px;
    height: 225px;
}
</style>
