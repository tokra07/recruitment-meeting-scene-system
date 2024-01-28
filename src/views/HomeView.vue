<template>
  <el-row>
    <el-col :span="5">
      <div style="margin-left: 10%;">
        <JobList/>
        <EnterpriseSalary/>
        <EnterpriseIndustry/>
        <EnterpriseEducation/>
      </div>
    </el-col>
    <el-col :span="14"></el-col>
    <el-col :span="5"></el-col>
  </el-row>
  <el-row>
    <el-col>
      <div style="margin-top: 25px;margin-left: 5%;margin-right: 5%;">
        {{ messageText }}
      </div>
    </el-col>
  </el-row>

</template>

<script>
import JobList from '@/components/JobList.vue'
import EnterpriseSalary from '@/components/EnterpriseSalary.vue'
import EnterpriseIndustry from '@/components/EnterpriseIndustry.vue'
import EnterpriseEducation from '@/components/EnterpriseEducation.vue'
import { getInfo } from '@/api/api'
export default {
  name: 'HomeView',
  components: {
    JobList,
    EnterpriseSalary,
    EnterpriseIndustry,
    EnterpriseEducation
  },
  data () {
    return {
      messageText: ''
    }
  },
  mounted () {
    getInfo().then((res) => {
      console.log(res)
    })
  }
}
</script>
