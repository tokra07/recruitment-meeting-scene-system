<template>
  <el-carousel height="350px" direction="vertical" :interval="5000" indicator-position="none" style="width: 320px;">
    <el-carousel-item v-for="item in FullList" :key="item">
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
    width: 300px;
    height: 350px;
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
