<template>
  <div>
    <div style="padding-bottom: 10px;padding-top: 10px;">
      <span class="rankTitle">简历投递数企业排行榜</span>
    </div>
    <el-scrollbar height="150px" ref="ranks">
      <div ref="maxHeight">
        <div v-for="(item,index) in rankList2" :key="item">
        <el-row style="margin-bottom: 10px;">
          <el-col :span="6">
            <div class="rankBorder" style="background-color: gold" v-if="index===0">
              <span class="rankText" style="color: red;">{{ index + 1 }}</span>
            </div>
            <div class="rankBorder" style="background-color: #C0C0C0" v-if="index===1">
              <span class="rankText" style="color: red;">{{ index + 1 }}</span>
            </div>
            <div class="rankBorder" style="background-color: #B87333" v-if="index===2">
              <span class="rankText" style="color: red;">{{ index + 1 }}</span>
            </div>
            <div class="rankBorder" v-if="index>=3">
              <span class="rankText" style="color: #ffdd93;">{{ index + 1 }}</span>
            </div>
          </el-col>
          <el-col :span="3"></el-col>
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
</template>

<script>
import { getEnterpriseEducation } from '@/api/api'
export default {
  name: 'ResumesRanking',
  data () {
    return {
      rankList2: [],
      listCon2: -200,
      max2: 0
    }
  },
  mounted () {
    this.getEnterpriseEducations()
    setInterval(this.getEnterpriseEducations, 100000)
  },
  methods: {
    getEnterpriseEducations () {
      getEnterpriseEducation().then(res => {
        const numList = res.data
        numList.sort(
          (a, b) => a.numbers < b.numbers ? 1 : a.numbers > b.numbers ? -1 : 0
        )
        this.rankList2 = numList
        this.getMaxHeight()
        setInterval(this.addNum2, 50)
      })
    },
    addNum2 () {
      if (this.listCon2 < this.max2) {
        this.listCon2++
        this.scrolls()
      } else {
        this.listCon2 = -200
        this.scrolls()
      }
    },
    async scrolls () {
      await this.$nextTick()
      this.$refs.ranks.setScrollTop(this.listCon2)
    },
    async getMaxHeight () {
      await this.$nextTick()
      this.max2 = this.$refs.maxHeight.offsetHeight
    }
  }
}
</script>

<style>
.rankText{
  line-height: 40px;
}
.rankTitle{
  color: #ffdd93;
  font-weight: bold;
}
.rankBorder{
  line-height: 40px;
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border:gray 1px solid;
}
</style>
