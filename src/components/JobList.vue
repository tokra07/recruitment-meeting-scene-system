<template>
  <el-carousel height="300px" direction="vertical" :interval="5000" indicator-position="none" style="width: 250px;">
    <el-carousel-item v-for="(item, i) in companyList" :key="item">
      <el-card class="box-card">
        <div class="card-header">
          <span class="card-header-text">
            {{ item }}
          </span>
        </div>
        <div v-for="(it) in jobList[i]" :key="it">
          {{ it }}
        </div>
      </el-card>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { getJobList } from '@/api/api.js'
export default {
  name: 'JobList',
  data () {
    return {
      companyList: [],
      jobList: []
    }
  },
  mounted () {
    getJobList().then((res) => {
      this.jobList = Object.values(res.data)
      this.companyList = Object.keys(res.data)
    })
  },
  methods: {

  }
}
</script>

<style>
  .box-card {
    width: 250px;
    height: 290px;
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
