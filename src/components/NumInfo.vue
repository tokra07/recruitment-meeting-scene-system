<template>
    <div style="margin-top: 12%;"><span class="main-info">当前企业数：</span><Flipper style="margin-top: 1px;" :val=epNum suffix="家"></Flipper></div>
    <div><span class="main-info">当前展厅人数：</span><Flipper :val=personMum suffix="人次"></Flipper></div>
    <div><span class="main-info">当前投递简历数：</span><Flipper :val=resumeNum suffix="份"></Flipper></div>
</template>

<script>
import { getBoothList } from '@/api/api'
import { lightControls } from '@/model/lightControls'
import Flipper from '@/components/FlipperView.vue'
export default {
  name: 'NumInfo',
  components: {
    Flipper
  },
  data () {
    return {
      epNum: 0,
      resumeNum: 0,
      personMum: 0,
      resumeSocket: '',
      peopleSocket: ''
    }
  },
  created () {
    this.resume()
    this.people()
  },
  unmounted () {
    this.resumeSocket.close()
    this.peopleSocket.close()
  },
  mounted () {
    getBoothList().then((res) => {
      this.epNum = res.data.length
    })
  },
  methods: {
    resume () {
      const _this = this
      _this.resumeSocket = new WebSocket('ws://jy.chifengrencai.com//ledapi/getDeliveriesNumber')
      const comList = {}
      getBoothList().then((res) => {
        console.log('公司数据', res.data)
        for (let i = 0; i < res.data.length; i++) {
          comList[res.data[i].boothNo] = res.data[i].companyName
        }
        console.log('comList', comList)
        _this.resumeSocket.addEventListener('message', function (event) {
          console.log('getDeliveriesNumber', event)
          if (event.data === '连接成功') {
            _this.resumeSocket.send(1)
          }
          const deliverNum = JSON.parse(event.data)
          const deliverKeys = Object.keys(deliverNum)
          console.log('返回的值', comList[deliverKeys])
          const boothNum = 'spotLight' + deliverKeys
          lightControls(boothNum)
          _this.resumeNum++
          _this.$message({
            message: '恭喜' + comList[deliverKeys] + '收到一份简历',
            type: 'success'
          })
        })
      })
    },
    people () {
      const _this = this
      _this.peopleSocket = new WebSocket('ws://jy.chifengrencai.com//ledapi/getCurrentPersonage')
      _this.peopleSocket.addEventListener('message', function (event) {
        console.log('getCurrentPersonage', event)
        if (event.data === '连接成功') {
          _this.peopleSocket.send(1)
        } else {
          _this.personMum++
        }
      })
    }
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
