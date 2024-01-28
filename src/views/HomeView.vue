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
    <el-col :span="5">
      <TalentSalary/>
    </el-col>
  </el-row>
  <el-row>
    <el-col>
      <div class="message-out">
        <div class="messages">
          <span>{{ messageText }}</span>
        </div>
      </div>
    </el-col>
  </el-row>

</template>

<script>
import JobList from '@/components/JobList.vue'
import EnterpriseSalary from '@/components/EnterpriseSalary.vue'
import EnterpriseIndustry from '@/components/EnterpriseIndustry.vue'
import EnterpriseEducation from '@/components/EnterpriseEducation.vue'
import TalentSalary from '@/components/TalentSalary.vue'
import { getInfo } from '@/api/api'
export default {
  name: 'HomeView',
  components: {
    JobList,
    EnterpriseSalary,
    EnterpriseIndustry,
    EnterpriseEducation,
    TalentSalary
  },
  data () {
    return {
      messageText: ''
    }
  },
  mounted () {
    getInfo().then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        this.messageText += res.data[i].title + '    '
      }
    })
  }
}
</script>

<style>
.message-out{
  width: 90%;
  height: 2.5rem;
  line-height: 2.5rem;
  margin-top: 20px;
  margin-left: 5%;
  margin-right: 5%;
  overflow: hidden;
}
.messages{
  font-size: 2rem;
  white-space: normal;
  width: max-content;
  animation: marquee 20s infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  10% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-20%);
  }
  30% {
    transform: translateX(-20%);
  }
  40% {
    transform: translateX(-40%);
  }
  50% {
    transform: translateX(-40%);
  }
  60% {
    transform: translateX(-60%);
  }
  70% {
    transform: translateX(-60%);
  }
  80% {
    transform: translateX(-80%);
  }
  90% {
    transform: translateX(-80%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
