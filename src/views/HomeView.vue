<template>
  <div style="position: absolute">
    <ModelVMiew/>
  </div>
  <div style="position: absolute;width: 100%;pointer-events: none">
    <Nav>
    <img src="../image/head-title.png" style="position: absolute;height: 130px;width: 1920px;user-select: none;" />
    <div style="width: 100%;text-align: center;height: 130px;position: absolute;user-select: none;">
      <span class="main-nav-text">赤峰市公共就业数字孪生招聘会</span>
    </div>
    <div class="nav-data">
      <NumInfo/>
    </div>
  </Nav>
  <el-row style="margin-top: 130px;">
    <el-col :span="5">
      <div style="background:linear-gradient(to right,rgba(0,0,0,0.5),rgba(0,0,0,0));width: 550px;height: 100%;position: absolute"></div>
      <div style="background:linear-gradient(to right,rgba(0,0,0,0),rgba(0,0,0,0.5));width: 550px;height: 100%;position: absolute;right: 0px;"></div>
      <div style="margin-left: 50px;">
        <BorderBox1 style="width: 260px;">
          <div style="width: 100%;height: 10px;"></div>
          <JobList  style="padding-left: 20px;padding-right: 20px;"/>
          <div style="width: 100%;height: 10px;"></div>
        </BorderBox1>
        <BorderBox1  style="width: 420px;">
          <div style="width: 100%;height: 10px;"></div>
          <EnterpriseSalary style="padding-left: 20px;padding-right: 20px;"/>
          <EnterpriseIndustry style="padding-left: 20px;padding-right: 20px;"/>
          <EnterpriseEducation style="padding-left: 20px;padding-right: 20px;"/>
          <div style="width: 100%;height: 10px;"></div>
        </BorderBox1>
      </div>
    </el-col>
    <el-col :span="15">
    </el-col>
    <el-col :span="4">
      <BorderBox1>
        <div style="width: 100%;height: 10px;"></div>
        <TalentSalary style="padding-left: 20px;"/>
        <TalentIndustry style="padding-left: 20px;"/>
        <TalentEducation style="padding-left: 20px;"/>
      </BorderBox1>
    </el-col>
  </el-row>
  <el-row style="position: absolute;bottom: -35px;">
    <el-col>
      <div class="message-out">
        <div class="messages">
          <span>{{ messageText }}</span>
        </div>
      </div>
    </el-col>
  </el-row>
  </div>
</template>
<script setup>
import { BorderBox1 } from '@dataview/datav-vue3'
</script>
<script>
import NumInfo from '@/components/NumInfo.vue'
import JobList from '@/components/JobList.vue'
import EnterpriseSalary from '@/components/EnterpriseSalary.vue'
import EnterpriseIndustry from '@/components/EnterpriseIndustry.vue'
import EnterpriseEducation from '@/components/EnterpriseEducation.vue'
import TalentSalary from '@/components/TalentSalary.vue'
import TalentIndustry from '@/components/TalentIndustry.vue'
import TalentEducation from '@/components/TalentEducation.vue'
import ModelVMiew from '@/components/ModelView.vue'
import { getInfo } from '@/api/api'
export default {
  name: 'HomeView',
  components: {
    JobList,
    EnterpriseSalary,
    EnterpriseIndustry,
    EnterpriseEducation,
    TalentSalary,
    TalentIndustry,
    TalentEducation,
    ModelVMiew,
    NumInfo
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
.main-nav-text{
  color: #5BA7EF;
  text-shadow: 0 0 5px #5BA7EF,0 0 5px #5BA7EF,0 0 10px #5BA7EF,0 0 15px #5BA7EF,0 0 20px #5BA7EF;
  font-size: 45px;
  line-height: 130px;
  user-select: none;
}
.nav-data{
  margin-top: 10px;
  position: absolute;
  top: 0px;
  right: 0px;
  width: 300px;
  height: 130px;
}
.message-out{
  height: 2.5rem;
  line-height: 2.5rem;
  margin-top: 20px;
  overflow: hidden;
}
.messages{
  font-size: 2rem;
  white-space: normal;
  width: max-content;
  animation: marquee 20s infinite;
  color: #cc0000;
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
