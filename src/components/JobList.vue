<template>
  <el-carousel height="200px" direction="vertical" :interval="5000" indicator-position="none" style="width: 200px;">
    <el-carousel-item v-for="item in FullList" :key="item" style="color: #cccc00;">
        <div class="card-header">
          <span class="card-header-text">
            {{ item.key }}
          </span>
        </div>
        <div v-for="it in item.value" :key="it">
          {{ it }}
        </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { getJobList } from '@/api/api.js'
export default {
  name: 'JobList',
  data () {
    return {
      FullList: []
    }
  },
  mounted () {
    getJobList().then((res) => {
      console.log('公司列表', res)
      const companyList = Object.keys(res.data)
      const jobList = Object.values(res.data)
      for (let i = 0; i < companyList.length; i++) {
        this.FullList.push(
          { key: companyList[i], value: jobList[i] }
        )
      }
    })
  },
  methods: {

  }
}
</script>

<style>
  .box-card {
    width: 200px;
    height: 200px;
  }
  .card-header{
    border-bottom: 1px solid gray;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
  }
  .card-header-text{
    font-weight: bold;
    line-height: 2.5rem;
    font-size: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:1;
  }
</style>
