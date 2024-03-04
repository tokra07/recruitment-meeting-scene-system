<template>
    <el-carousel height="225px" style="width: 400px;" :interval="10000" indicator-position="none" arrow="never">
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
    this.init()
  },
  methods: {
    init () {
      getEnterpriseIndustry().then((res) => {
        console.log('EnterpriseIndustryEcharts', res)
        let xlist = [10, 15, 20, 15]
        let maxNum = Math.max(...xlist) * 1.2
        let ylist = [
          { name: '金融服务', max: maxNum },
          { name: '消费品', max: maxNum },
          { name: '建筑工程', max: maxNum },
          { name: '服务业', max: maxNum }
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
        const chartDom = document.getElementById('EnterpriseIndustryEcharts')
        const myChart = echarts.init(chartDom, 'dark')
        const option = {
          backgroundColor: '',
          color: '#00FFFF',
          title: {
            text: '各\n个\n行\n业\n的\n企\n业\n数'
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
        const chartDom1 = document.getElementById('EnterpriseIndustryEcharts1')
        const myChart1 = echarts.init(chartDom1, 'dark')
        const option1 = {
          backgroundColor: '',
          color: '#00FFFF',
          title: {
            text: '各\n个\n行\n业\n的\n企\n业\n数'
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
        myChart1.setOption(option1)
      }).catch(err => {
        console.log(err)
        const xlist = [10, 15, 20, 15]
        const maxNum = Math.max(...xlist) * 1.2
        const ylist = [
          { name: '金融服务', max: maxNum },
          { name: '消费品', max: maxNum },
          { name: '建筑工程', max: maxNum },
          { name: '服务业', max: maxNum }
        ]
        const chartDom = document.getElementById('EnterpriseIndustryEcharts')
        const myChart = echarts.init(chartDom, 'dark')
        const option = {
          backgroundColor: '',
          color: '#00FFFF',
          title: {
            text: '各\n个\n行\n业\n的\n企\n业\n数'
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
        const chartDom1 = document.getElementById('EnterpriseIndustryEcharts1')
        const myChart1 = echarts.init(chartDom1, 'dark')
        const option1 = {
          backgroundColor: '',
          color: '#00FFFF',
          title: {
            text: '各\n个\n行\n业\n的\n企\n业\n数'
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
        myChart1.setOption(option1)
        this.init()
      })
      getJobIndustry().then((res) => {
        console.log('JobIndustryEcharts', res)
        let xlist = [10, 15, 20, 15]
        let maxNum = Math.max(...xlist) * 1.2
        let ylist = [
          { name: '金融服务', max: maxNum },
          { name: '消费品', max: maxNum },
          { name: '建筑工程', max: maxNum },
          { name: '服务业', max: maxNum }
        ]
        if (res.data.length > 0) {
          console.log('有数据')
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
        console.log(ylist)
        const chartDom = document.getElementById('JobIndustryEcharts')
        const myChart = echarts.init(chartDom, 'dark')
        const option = {
          backgroundColor: '',
          color: '#00FFFF',
          title: {
            text: '各\n个\n行\n业\n的\n岗\n位\n数'
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
        const chartDom1 = document.getElementById('JobIndustryEcharts1')
        const myChart1 = echarts.init(chartDom1, 'dark')
        const option1 = {
          backgroundColor: '',
          color: '#00FFFF',
          title: {
            text: '各\n个\n行\n业\n的\n岗\n位\n数'
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
        myChart1.setOption(option1)
      }).catch(err => {
        console.log(err)
        const xlist = [10, 15, 20, 15]
        const maxNum = Math.max(...xlist) * 1.2
        const ylist = [
          { name: '金融服务', max: maxNum },
          { name: '消费品', max: maxNum },
          { name: '建筑工程', max: maxNum },
          { name: '服务业', max: maxNum }
        ]
        const chartDom = document.getElementById('JobIndustryEcharts')
        const myChart = echarts.init(chartDom, 'dark')
        const option = {
          backgroundColor: '',
          color: '#00FFFF',
          title: {
            text: '各\n个\n行\n业\n的\n岗\n位\n数'
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
        const chartDom1 = document.getElementById('JobIndustryEcharts1')
        const myChart1 = echarts.init(chartDom1, 'dark')
        const option1 = {
          backgroundColor: '',
          color: '#00FFFF',
          title: {
            text: '各\n个\n行\n业\n的\n岗\n位\n数'
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
        myChart1.setOption(option1)
        setTimeout(this.init, 6000)
      })
    }
  }
}
</script>

<style>
#EnterpriseIndustryEcharts{
    width: 400px;
    height: 225px;
}
#JobIndustryEcharts{
    width: 400px;
    height: 225px;
}
#EnterpriseIndustryEcharts1{
    width: 400px;
    height: 225px;
}
#JobIndustryEcharts1{
    width: 400px;
    height: 225px;
}
</style>
