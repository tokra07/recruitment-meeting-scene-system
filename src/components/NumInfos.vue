<template>
  <div style="margin-top: 12%;"><span class="main-info">当前企业数：</span><Flipper style="margin-top: 1px;" :val=epNum suffix="家"></Flipper></div>
  <div><span class="main-info">当前岗位数：</span><Flipper :val=posNum suffix="个"></Flipper></div>
  <div><span class="main-info">招聘人数需求：</span><Flipper :val=recruitNum suffix="人"></Flipper></div>
</template>

<script>
import { getBoothList, getJobIndustry, getRecruitNumbers } from '@/api/api'
import Flipper from '@/components/FlipperView.vue'
export default {
  name: 'NumInfos',
  components: {
    Flipper
  },
  data () {
    return {
      epNum: 0,
      posNum: 0,
      resumeSocket: '',
      peopleSocket: '',
      recruitNum: 0
    }
  },
  mounted () {
    getBoothList().then((res) => {
      this.epNum = res.data.length
    })
    getJobIndustry().then((res) => {
      console.log('获取岗位数', res)
      for (let i = 0; i < res.data.length; i++) {
        this.posNum += res.data[i].numbers
      }
    })
    getRecruitNumbers().then((res) => {
      console.log('获取招聘人数', res)
      this.recruitNum = res.data[0].numbers
    })
  },
  methods: {

  }
}
</script>
<style>
.main-info{
  font-size: 15px;
  font-weight: bold;
  line-height: 20px;
  color: #4f6beb;
}
.info-text{
line-height: 15px;
  color: #4f6beb;
}
</style>
