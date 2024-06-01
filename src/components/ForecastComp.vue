<template>
  <div id="JobIndustryTrend"></div>
</template>

<script>
import { getJobIndustryTrend } from '@/api/api'
import * as echarts from 'echarts'
export default {
  name: 'ForecastComp',
  data () {
    return {
    }
  },
  mounted () {
    this.getJobIndustryTrendData()
  },
  methods: {
    getJobIndustryTrendData () {
      getJobIndustryTrend().then(res => {
        const JobData = res.data
        console.log('getJobIndustryTrend', JobData)
        const xList = []
        const yList = []
        for (let i = 0; i < JobData.length; i++) {
          xList.push(JobData[i].groupTag)
          yList.push(JobData[i].numbers)
        }
        console.log('JobData', this.JobData, this.TalentData)
        const chartDom = document.getElementById('JobIndustryTrend')
        const myChart = echarts.init(chartDom, 'dark')
        const option = {
          backgroundColor: '',
          title: {
            text: '行业岗位趋势分析'
          },
          xAxis: {
            type: 'category',
            data: xList
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: yList,
              type: 'line',
              smooth: true
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
#JobIndustryTrend{
  width: 550px;
  height: 240px;
  margin-top: 13px;
  margin-left: 5px;
}
</style>
