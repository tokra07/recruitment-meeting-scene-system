<template>
  <div style="position: absolute">
    <ModelVMiew/>
  </div>
  <div style="position: absolute;width: 100%;pointer-events: none">
    <Nav>
    <div class="nav-datas">
      <NumInfos/>
    </div>
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
        <BorderBox1 style="width: 420px;">
          <!-- <vue-particles
            style="position: fixed;width: 400px;height: 210px;"
            id="tsparticles"
            @particles-loaded="particlesLoaded"
            :options="particlesOptions"
          ></vue-particles> -->
          <div style="width: 100%;height: 10px;"></div>
          <div>
            <JobList style="padding-left: 20px;padding-right: 20px;"/>
          </div>
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
      <div style="height: 20px;width: 10px;"></div>
    </el-col>
    <el-col :span="15">
      <BorderBox1  style="width: 1100px;height: 220px;margin-left: 80px;">
        <el-row>
          <el-col :span="8">
            <EnterpriseRanking/>
          </el-col>
          <el-col :span="8">
            <TalentRanking/>
          </el-col>
          <el-col :span="8">
            <ResumesRanking style="padding-left: 20px;padding-right: 20px;"/>
          </el-col>
        </el-row>
      </BorderBox1>
      <BorderBox1  style="width: 1100px;height: 220px;margin-left: 80px;margin-top: 474px">
        <el-row>
          <el-col  :span="12">
            <ForecastComps style="margin-left: 20px;"/>
          </el-col>
          <el-col  :span="12">
            <ForecastComp/>
          </el-col>
        </el-row>
      </BorderBox1>
    </el-col>
    <el-col :span="4">
      <BorderBox1 style="height: 900px;">
        <div style="width: 100%;height: 10px;"></div>
        <TalentSalary style="padding-left: 20px;"/>
        <TalentIndustry style="padding-left: 20px;"/>
        <TalentEducation style="padding-left: 20px;"/>
      </BorderBox1>
    </el-col>
  </el-row>
  <el-row style="position: absolute;bottom: -15px;">
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
import NumInfos from '@/components/NumInfos.vue'
import JobList from '@/components/JobList.vue'
import EnterpriseSalary from '@/components/EnterpriseSalary.vue'
import EnterpriseIndustry from '@/components/EnterpriseIndustry.vue'
import EnterpriseEducation from '@/components/EnterpriseEducation.vue'
import TalentSalary from '@/components/TalentSalary.vue'
import TalentIndustry from '@/components/TalentIndustry.vue'
import TalentEducation from '@/components/TalentEducation.vue'
import ModelVMiew from '@/components/ModelView.vue'
import ResumesRanking from '@/components/ResumesRanking.vue'
import EnterpriseRanking from '@/components/EnterpriseRanking'
import TalentRanking from '@/components/TalentRanking'
import ForecastComp from '@/components/ForecastComp'
import ForecastComps from '@/components/ForecastComps'
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
    NumInfo,
    NumInfos,
    ResumesRanking,
    EnterpriseRanking,
    TalentRanking,
    ForecastComp,
    ForecastComps
  },
  data () {
    return {
      messageText: '',
      particlesOptions: {}
    }
  },
  created () {
    this.particlesOptions = {
      background: {
        opacity: 0
      },
      fpsLimit: 120,
      fullScreen: false,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: 'push'
          },
          onHover: {
            enable: false,
            mode: 'repulse'
          },
          resize: true
        },
        modes: {
          bubble: {
            distance: 800,
            duration: 2,
            opacity: 0.8,
            size: 40
          },
          push: {
            quantity: 4
          },
          repulse: {
            distance: 200,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: '#ffffff'
        },
        links: {
          color: '#ffffff',
          distance: 100,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: 'bounce',
          random: false,
          speed: 6,
          straight: false
        },
        number: {
          density: {
            enable: true
          },
          value: 200
        },
        opacity: {
          value: 0.5
        },
        shape: {
          type: 'circle'
        },
        size: {
          value: { min: 1, max: 5 }
        }
      },
      detectRetina: true
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
.nav-datas{
  margin-top: 10px;
  position: absolute;
  top: 0px;
  left: 90px;
  width: 300px;
  height: 130px;
}
.message-out{
  width: 100vw;
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
