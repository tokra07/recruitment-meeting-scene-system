<template>
    <div id="TalentIndustryEcharts"></div>
</template>

<script>
import { getTalentIndustry } from '@/api/api'
import * as echarts from 'echarts'
export default {
  name: 'TalentIndustry',
  data () {
    return {
      xLists: [],
      yLists: []
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
      getTalentIndustry().then((res) => {
        const xlist = ['金融服务', '制造业', '消费品', '建筑工程', '服务业']
        const ylist = [10, 15, 20, 25, 30]
        if (res.data.length > 0) {
          xlist.splice(0)
          ylist.splice(0)
          for (let i = 0; i < res.data.length; i++) {
            xlist.push(res.data[i].groupTag)
            ylist.push(res.data[i].numbers)
          }
        }
        this.xLists = xlist
        this.yLists = ylist
      }).catch(err => {
        console.log(err)
        const xlist = ['金融服务', '制造业', '消费品', '建筑工程', '服务业']
        const ylist = [10, 15, 20, 25, 30]
        this.xLists = xlist
        this.yLists = ylist
      })
    },
    getEcharts () {
      const chartDom = document.getElementById('TalentIndustryEcharts')
      const myChart = echarts.init(chartDom, 'dark')
      const option = {
        backgroundColor: '',
        color: '#00FFFF',
        title: {
          text: '人才行业分布',
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
            data: this.yLists,
            type: 'bar',
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
#TalentIndustryEcharts{
    width: 295px;
    height: 295px;
}
</style>
