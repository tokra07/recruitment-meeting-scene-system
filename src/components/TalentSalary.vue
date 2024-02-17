<template>
    <div id="TalentSalaryEcharts"></div>
</template>

<script>
import { getTalentSalary } from '@/api/api'
import * as echarts from 'echarts'
export default {
  name: 'TalentSalary',
  data () {
    return {
      xLists: [],
      yLists: [],
      yList: []
    }
  },
  mounted () {
    this.getData()
    setTimeout(this.getEcharts, 1000)
    setInterval(this.getEcharts, 60000)
    setInterval(this.getData, 60000)
  },
  methods: {
    getData () {
      getTalentSalary().then((res) => {
        const xlist = ['2k-4k', '4k-6k', '6k-8k', '8k-10k', '其他']
        const ylist = [10, 15, 20, 25, 30]
        if (res.data.length > 0) {
          xlist.splice(0)
          ylist.splice(0)
          for (let i = 0; i < res.data.length; i++) {
            xlist.push(res.data[i].groupTag)
            ylist.push(res.data[i].numbers)
          }
        }
        this.yList = this.yLists
        this.xLists = xlist
        this.yLists = ylist
      }).catch(err => {
        console.log(err)
        const xlist = ['2k-4k', '4k-6k', '6k-8k', '8k-10k', '其他']
        const ylist = [10, 15, 20, 25, 30]
        this.yList = this.yLists
        this.xLists = xlist
        this.yLists = ylist
      })
    },
    getEcharts () {
      const chartDom = document.getElementById('TalentSalaryEcharts')
      const myChart = echarts.init(chartDom, 'dark')
      const option = {
        backgroundColor: '',
        color: ['#00FF7F', '#00FFFF', '#98FB98', '#808000', '#E0FFFF', '#ADFF2F'],
        title: {
          text: '人才薪资分布',
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
          data: this.xLists,
          axisLabel: {
            interval: 0,
            rotate: -45
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '本分钟',
            data: this.yLists,
            type: 'bar',
            label: {
              show: true,
              position: 'inside'
            }
          },
          {
            name: '上分钟',
            data: this.yList,
            type: 'line',
            label: {
              show: true,
              position: 'inside'
            }
          }
        ]
      }
      myChart.setOption(option)
    }
  }
}
</script>

<style>
#TalentSalaryEcharts{
    width: 295px;
    height: 295px;
}
</style>
