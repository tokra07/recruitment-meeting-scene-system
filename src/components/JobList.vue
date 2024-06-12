<template>
    <Transition :duration="550" name="nested">
      <div style="width: 350px;height: 200px;margin-left: 20px;" v-if="show">
      <div class="card-header">
        <span class="card-header-text">
            {{ Headers }}
        </span>
      </div>
      <div class="scroll-container" :style="{ height: containerHeight + 'px' }">
        <div class="scroll-content" :style="{ animationDuration: animationDuration + 's' }" ref="content">
          <div v-for="item in jobLists" :key="item" class="card-body-text">
          {{ item.position }}:{{ item.summary }}
        </div>
        </div>
      </div>
      <div style="border-top: 1px gray solid">
        <el-row style="padding-top: 10px;">
          <el-col :span="4">
            <span class="card-body-text">
              联系人
            </span>
          </el-col>
          <el-col :span="7">
            <span class="card-body-text">
              {{ name }}
            </span>
          </el-col>
          <el-col :span="4">
            <span class="card-body-text">
              电话
            </span>
          </el-col>
          <el-col :span="9">
            <span class="card-body-text">
              {{ phone }}
            </span>
          </el-col>
        </el-row>

      </div>
    </div>
    </Transition>
</template>
<script>
import { getJobList } from '@/api/api.js'
export default {
  name: 'JobList',
  data () {
    return {
      Headers: '',
      phone: '',
      name: '',
      nv: 0,
      companyList: [],
      jobList: [],
      jobLists: [],
      comList: [],
      show: true,
      containerHeight: 120, // Adjust container height as needed
      animationDuration: 10 // Adjust animation duration as needed
    }
  },
  mounted () {
    getJobList().then((res) => {
      console.log('公司列表', res)
      this.companyList = Object.keys(res.data)
      const joblists = Object.values(res.data)
      console.log('公司列表2', joblists[0])
      for (let i = 0; i < joblists.length; i++) {
        this.jobList.push(joblists[i].listrecruit)
        this.comList.push(joblists[i].listcompany)
      }
      this.loop()
      setInterval(this.loop, 20000)
      // setInterval(this.addNum8, 50)
    }).catch(err => {
      console.log(err)
      this.companyList = ['赤峰', '赤峰']
      this.jobList = [['测试员'], ['测试员']]
      setTimeout(this.getJobList, 20000)
    })
  },
  watch: {
    jobList () {
      this.restartScroll()
    }
  },
  methods: {
    loop () {
      const _this = this
      this.Headers = this.companyList[this.nv]
      this.jobLists = this.jobList[this.nv]
      this.phone = this.comList[this.nv].cellphone
      this.name = this.comList[this.nv].contactUser
      this.nv++
      _this.show = false
      setTimeout(() => {
        _this.show = true
      }, 500)
    },
    restartScroll () {
      this.$refs.content.style.animation = 'none'
      this.$nextTick(() => {
        this.$refs.content.style.animation = `scroll linear infinite ${this.animationDuration}s`
      })
    }
  }
}
</script>

<style>
  .box-card {
    width: 200px;
    height: 125px;
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
  .nested-enter-active, .nested-leave-active {
    transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0.001;
}

.scroll-container {
  overflow: hidden;
}

.scroll-content {
  animation: scroll linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
</style>
