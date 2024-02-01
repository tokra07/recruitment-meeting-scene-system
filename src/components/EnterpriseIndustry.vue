<template>
    <el-carousel height="300px" style="width: 300px;" :interval="10000" indicator-position="none" arrow="never">
        <el-carousel-item>
            <div id="EnterpriseIndustryEcharts"></div>
        </el-carousel-item>
        <el-carousel-item>
            <div id="JobIndustryEcharts"></div>
        </el-carousel-item>
        <el-carousel-item>
            <div id="EnterpriseIndustryEcharts1"></div>
        </el-carousel-item>
        <el-carousel-item>
            <div id="JobIndustryEcharts1"></div>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
import { getEnterpriseIndustry, getJobIndustry } from '@/api/api'
import * as echarts from 'echarts'
export default {
  name: 'EnterpriseIndustry',
  mounted () {
    getEnterpriseIndustry().then((res) => {
      const idustryList = []
      for (let i = 0; i < res.data.length; i++) {
        idustryList.push(
          { value: res.data[i].numbers, name: res.data[i].groupTag }
        )
      }
      const chartDom = document.getElementById('EnterpriseIndustryEcharts')
      const myChart = echarts.init(chartDom, 'dark')
      const option = {
        backgroundColor: '',
        color: ['#cccc00', '#cc0000', '#66cc00', '#cc0066', '#cc6600', '#00cc66'],
        title: {
          text: '各个行业的企业数',
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
            data: idustryList
          }
        ]
      }
      myChart.setOption(option)
      const chartDom1 = document.getElementById('EnterpriseIndustryEcharts1')
      const myChart1 = echarts.init(chartDom1, 'dark')
      const option1 = {
        backgroundColor: '',
        color: ['#cccc00', '#cc0000', '#66cc00', '#cc0066', '#cc6600', '#00cc66'],
        title: {
          text: '各个行业的企业数',
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
            data: idustryList
          }
        ]
      }
      myChart1.setOption(option1)
    })
    getJobIndustry().then((res) => {
      const jobIdustryList = []
      for (let i = 0; i < res.data.length; i++) {
        jobIdustryList.push(
          { value: res.data[i].numbers, name: res.data[i].groupTag }
        )
      }
      const chartDom = document.getElementById('JobIndustryEcharts')
      const myChart = echarts.init(chartDom, 'dark')
      const option = {
        backgroundColor: '',
        color: ['#cccc00', '#cc0000', '#66cc00', '#cc0066', '#cc6600', '#00cc66'],
        title: {
          text: '各个行业的岗位数',
          subtext: '每日',
          left: 'center'
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
            radius: [0, 75],
            center: ['50%', '50%'],
            data: jobIdustryList
          }
        ]
      }
      myChart.setOption(option)
      const chartDom1 = document.getElementById('JobIndustryEcharts1')
      const myChart1 = echarts.init(chartDom1, 'dark')
      const option1 = {
        backgroundColor: '',
        color: ['#cccc00', '#cc0000', '#66cc00', '#cc0066', '#cc6600', '#00cc66'],
        title: {
          text: '各个行业的岗位数',
          subtext: '每日',
          left: 'center'
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
            radius: [0, 75],
            center: ['50%', '50%'],
            data: jobIdustryList
          }
        ]
      }
      myChart1.setOption(option1)
    })
  }
}
</script>

<style>
#EnterpriseIndustryEcharts{
    width: 250px;
    height: 250px;
}
#JobIndustryEcharts{
    width: 250px;
    height: 250px;
}
#EnterpriseIndustryEcharts1{
    width: 250px;
    height: 250px;
}
#JobIndustryEcharts1{
    width: 250px;
    height: 250px;
}
</style>
