<template>
    <div style="margin-top: 12%;"><span class="main-info">当前企业数：</span><Flipper style="margin-top: 1px;" :val=epNum suffix="家"></Flipper></div>
    <div><span class="main-info">当前展厅人数：</span><Flipper :val=personMum suffix="人次"></Flipper></div>
    <div><span class="main-info">当前投递简历数：</span><Flipper :val=resumeNum suffix="份"></Flipper></div>
</template>

<script>
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

  },
  unmounted () {

  },
  mounted () {

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
