<template>
  <div id="TalentIndustryTrend"></div>
</template>

<script>
import { getTalentIndustryTrend } from '@/api/api'
import * as echarts from 'echarts'
export default {
  name: 'ForecastComps',
  data () {
    return {
    }
  },
  mounted () {
    this.getJobIndustryTrendData()
  },
  methods: {
    getJobIndustryTrendData () {
      getTalentIndustryTrend().then(res => {
        const JobData = res.data
        console.log('TalentIndustryTrend', JobData)
        const xList = []
        const yList = []
        for (let i = 0; i < JobData.length; i++) {
          xList.push(JobData[i].groupTag)
          yList.push(JobData[i].numbers)
        }
        console.log('JobData', this.JobData, this.TalentData)
        const chartDom = document.getElementById('TalentIndustryTrend')
        const myChart = echarts.init(chartDom, 'dark')
        const option = {
          backgroundColor: '',
          title: {
            text: '行业人才趋势分析'
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
#TalentIndustryTrend{
  width: 380px;
  height: 240px;
  padding-top: 20px;
  margin-left: 5px;
}
</style>
