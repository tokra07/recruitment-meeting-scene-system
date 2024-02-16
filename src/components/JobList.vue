<template>
  <div style="width: 200px;height: 200px;">
    <div class="card-header">
      <span class="card-header-text">
          {{ Headers }}
      </span>
    </div>
    <div v-for="item in jobLists" :key="item" class="card-body-text">
      {{ item }}
    </div>
  </div>
</template>

<script>
import { getJobList } from '@/api/api.js'
export default {
  name: 'JobList',
  data () {
    return {
      Headers: '',
      nv: 0,
      companyList: [],
      jobList: [],
      jobLists: []
    }
  },
  mounted () {
    getJobList().then((res) => {
      console.log('公司列表', res)
      this.companyList = Object.keys(res.data)
      this.jobList = Object.values(res.data)
      this.loop()
      setInterval(this.loop, 15000)
    })
  },
  methods: {
    loop () {
      this.Headers = this.companyList[this.nv]
      this.jobLists = this.jobList[this.nv]
      this.nv++
    }
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
    color: #ffdd93;
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
  .card-body-text{
    color: #ffdd93;
  }
</style>
