<template>
    <Transition :duration="550" name="nested">
      <div style="width: 350px;height: 200px;margin-left: 20px;" v-if="show">
      <div class="card-header">
        <span class="card-header-text">
            {{ Headers }}
        </span>
      </div>
      <el-scrollbar height="120px" ref="ranks8" style="height: 120px;">
        <div ref="maxHeight8">
          <div v-for="item in jobLists" :key="item" class="card-body-text">
          {{ item.position }}:{{ item.summary }}
        </div>
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
      listCon8: -20,
      max8: 0
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
    addNum8 () {
      if (this.listCon8 < this.max8) {
        this.listCon8++
        this.scrolls()
      } else {
        this.listCon8 = -20
        this.scrolls()
      }
    },
    async scrolls () {
      await this.$nextTick()
      this.$refs.ranks8.setScrollTop(this.listCon8)
    },
    async getMaxHeight () {
      await this.$nextTick()
      console.log('高度计算', this.$refs.maxHeight8.offsetHeight)
      this.max8 = this.$refs.maxHeight8.offsetHeight
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
