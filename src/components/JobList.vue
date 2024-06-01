<template>
    <Transition :duration="550" name="nested">
      <div style="width: 350px;height: 200px;margin-left: 20px;" v-if="show">
      <div class="card-header">
        <span class="card-header-text">
            {{ Headers }}
        </span>
      </div>
      <el-scrollbar height="120px" ref="ranks" style="height: 120px;">
        <div v-for="item in jobLists" :key="item" class="card-body-text">
        {{ item }}:这里是岗位描述
      </div>
      </el-scrollbar>
      <div style="border-top: 1px gray solid">
        <el-row style="padding-top: 10px;">
          <el-col :span="4">
            <span class="card-body-text">
              联系人
            </span>
          </el-col>
          <el-col :span="7">
            <span class="card-body-text">
              东方信息
            </span>
          </el-col>
          <el-col :span="4">
            <span class="card-body-text">
              电话
            </span>
          </el-col>
          <el-col :span="9">
            <span class="card-body-text">
              13700000000
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
      nv: 0,
      companyList: [],
      jobList: [],
      jobLists: [],
      show: true,
      listCon8: -200,
      max8: 0
    }
  },
  mounted () {
    getJobList().then((res) => {
      console.log('公司列表', res)
      this.companyList = Object.keys(res.data)
      this.jobList = Object.values(res.data)
      this.loop()
      setInterval(this.loop, 20000)
    }).catch(err => {
      console.log(err)
      this.companyList = ['赤峰', '赤峰']
      this.jobList = [['测试员'], ['测试员']]
      setTimeout(this.getJobList, 20000)
    })
  },
  methods: {
    loop () {
      const _this = this
      this.Headers = this.companyList[this.nv]
      this.jobLists = this.jobList[this.nv]
      this.nv++
      _this.show = false
      setTimeout(() => {
        _this.show = true
      }, 500)
    },
    addNum8 () {
      if (this.listCon8 < this.max8) {
        this.listCon8++
        this.scrolls()
      } else {
        this.listCon8 = -200
        this.scrolls()
      }
    },
    async scrolls () {
      await this.$nextTick()
      this.$refs.ranks.setScrollTop(this.listCon8)
    },
    async getMaxHeight () {
      await this.$nextTick()
      this.max8 = this.$refs.maxHeight.offsetHeight
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
</style>
