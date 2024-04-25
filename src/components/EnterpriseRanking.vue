<template>
    <el-row>
        <el-col :span="12">
            <div style="padding-left: 20px;padding-top: 20px;">
              <div style="padding-bottom: 10px;padding-top: 10px;">
                <span class="rankTitle">薪资需求排行榜</span>
              </div>
              <el-scrollbar height="70px" ref="ranks">
                <div ref="maxHeight">
                  <div v-for="(item,index) in rankList" :key="item">
                  <el-row>
                    <el-col :span="6">
                      <span class="rankText" style="color: gold;" v-if="index===0">{{ index + 1 }}</span>
                      <span class="rankText" style="color: #C0C0C0;" v-if="index===1">{{ index + 1 }}</span>
                      <span class="rankText" style="color: #B87333;" v-if="index===2">{{ index + 1 }}</span>
                      <span class="rankText" style="color: beige;" v-if="index>=3">{{ index + 1 }}</span>
                    </el-col>
                    <el-col :span="12">
                      <span class="rankText" style="color: gold;" v-if="index===0">{{ item.groupTag }}</span>
                      <span class="rankText" style="color: #C0C0C0;" v-if="index===1">{{ item.groupTag }}</span>
                      <span class="rankText" style="color: #B87333;" v-if="index===2">{{ item.groupTag }}</span>
                      <span class="rankText" style="color: beige;" v-if="index>=3">{{ item.groupTag }}</span>
                    </el-col>
                  </el-row>
                </div>
                </div>
              </el-scrollbar>
            </div>
        </el-col>
        <el-col :span="12">
            <div style="padding-left: 20px;padding-top: 20px;">
              <div style="padding-bottom: 10px;padding-top: 10px;">
                <span class="rankTitle">学历需求排行榜</span>
              </div>
              <el-scrollbar height="70px" ref="educationranks">
                <div ref="educationmaxHeight">
                  <div v-for="(item,index) in educationRankList" :key="item">
                  <el-row>
                    <el-col :span="6">
                      <span class="rankText" style="color: gold;" v-if="index===0">{{ index + 1 }}</span>
                      <span class="rankText" style="color: #C0C0C0;" v-if="index===1">{{ index + 1 }}</span>
                      <span class="rankText" style="color: #B87333;" v-if="index===2">{{ index + 1 }}</span>
                      <span class="rankText" style="color: beige;" v-if="index>=3">{{ index + 1 }}</span>
                    </el-col>
                    <el-col :span="12">
                      <span class="rankText" style="color: gold;" v-if="index===0">{{ item.groupTag }}</span>
                      <span class="rankText" style="color: #C0C0C0;" v-if="index===1">{{ item.groupTag }}</span>
                      <span class="rankText" style="color: #B87333;" v-if="index===2">{{ item.groupTag }}</span>
                      <span class="rankText" style="color: beige;" v-if="index>=3">{{ item.groupTag }}</span>
                    </el-col>
                  </el-row>
                </div>
                </div>
              </el-scrollbar>
            </div>
        </el-col>
    </el-row>
  </template>

<script>
import { getEnterpriseSalary, getEnterpriseEducation } from '@/api/api'

export default {
  name: 'EnterpriseRanking',
  data () {
    return {
      rankList: [],
      listCon: -200,
      max: 0,
      educationRankList: [],
      educationlistCon: -200,
      educationmax: 0
    }
  },
  mounted () {
    this.getEnterpriseSalarys()
    this.getEnterpriseEducations()
  },
  methods: {
    getEnterpriseSalarys () {
      getEnterpriseSalary().then(res => {
        console.log('薪资排行榜准备的数据', res)
        let numList = []
        if (res.data.length > 0) {
          numList = res.data
        } else {
          numList = [
            { numbers: 34, groupTag: '金融服务' },
            { numbers: 13, groupTag: '制造业' },
            { numbers: 66, groupTag: '消费品' },
            { numbers: 70, groupTag: '服务业' }
          ]
        }
        numList.sort(
          (a, b) => a.numbers < b.numbers ? 1 : a.numbers > b.numbers ? -1 : 0
        )
        this.rankList = numList
        this.getMaxHeight()
        setInterval(this.addNum1, 50)
      })
    },
    addNum1 () {
      if (this.listCon < this.max) {
        this.listCon++
        this.scrolls()
      } else {
        this.listCon = -200
        this.scrolls()
      }
    },
    async scrolls () {
      await this.$nextTick()
      this.$refs.ranks.setScrollTop(this.listCon)
    },
    async getMaxHeight () {
      await this.$nextTick()
      this.max = this.$refs.maxHeight.offsetHeight
    },
    getEnterpriseEducations () {
      getEnterpriseEducation().then(res => {
        console.log('薪资排行榜准备的数据', res)
        let numList = []
        if (res.data.length > 0) {
          numList = res.data
        } else {
          numList = [
            { numbers: 34, groupTag: '大专' },
            { numbers: 13, groupTag: '本科' },
            { numbers: 66, groupTag: '硕士' },
            { numbers: 70, groupTag: '研究生' }
          ]
        }
        numList.sort(
          (a, b) => a.numbers < b.numbers ? 1 : a.numbers > b.numbers ? -1 : 0
        )
        this.educationRankList = numList
        this.educationGetMaxHeight()
        setInterval(this.educationAddNum, 50)
      })
    },
    educationAddNum () {
      if (this.educationlistCon < this.educationmax) {
        this.educationlistCon++
        this.educationScrolls()
      } else {
        this.educationlistCon = -200
        this.educationScrolls()
      }
    },
    async educationScrolls () {
      await this.$nextTick()
      this.$refs.educationranks.setScrollTop(this.listCon)
    },
    async educationGetMaxHeight () {
      await this.$nextTick()
      this.educationmax = this.$refs.educationmaxHeight.offsetHeight
    }
  }
}
</script>

<style>
.rankText{
    text-align: center;
}
.rankTitle{
  color: #ffdd93;
  font-weight: bold;
}
</style>
