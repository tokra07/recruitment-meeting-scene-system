<template>
    <el-carousel height="230px" style="width: 230px;" :interval="10000" indicator-position="none" arrow="never">
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
      console.log('EnterpriseIndustryEcharts', res)
      const idustryList = [
        { value: 10, name: '金融服务' },
        { value: 15, name: '消费品' },
        { value: 20, name: '建筑工程' },
        { value: 25, name: '农业' },
        { value: 30, name: '服务业' }
      ]
      if (res.data.length > 0) {
        idustryList.splice(0)
        for (let i = 0; i < res.data.length; i++) {
          idustryList.push(
            { value: res.data[i].numbers, name: res.data[i].groupTag }
          )
        }
      }
      const chartDom = document.getElementById('EnterpriseIndustryEcharts')
      const myChart = echarts.init(chartDom, 'dark')
      const option = {
        backgroundColor: '',
        color: ['#00FF7F', '#00FFFF', '#98FB98', '#808000', '#E0FFFF', '#ADFF2F'],
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
        color: ['#00FF7F', '#00FFFF', '#98FB98', '#808000', '#E0FFFF', '#ADFF2F'],
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
      console.log('JobIndustryEcharts', res)
      const jobIdustryList = [
        { value: 10, name: '金融服务' },
        { value: 15, name: '消费品' },
        { value: 20, name: '建筑工程' },
        { value: 25, name: '农业' },
        { value: 30, name: '服务业' }
      ]
      if (res.data.length > 0) {
        jobIdustryList.splice(0)
        for (let i = 0; i < res.data.length; i++) {
          jobIdustryList.push(
            { value: res.data[i].numbers, name: res.data[i].groupTag }
          )
        }
      }
      const chartDom = document.getElementById('JobIndustryEcharts')
      const myChart = echarts.init(chartDom, 'dark')
      const option = {
        backgroundColor: '',
        color: ['#00FF7F', '#00FFFF', '#98FB98', '#808000', '#E0FFFF', '#ADFF2F'],
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
        color: ['#00FF7F', '#00FFFF', '#98FB98', '#808000', '#E0FFFF', '#ADFF2F'],
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
    width: 230px;
    height: 230px;
}
#JobIndustryEcharts{
    width: 230px;
    height: 230px;
}
#EnterpriseIndustryEcharts1{
    width: 230px;
    height: 230px;
}
#JobIndustryEcharts1{
    width: 230px;
    height: 230px;
}
</style>
