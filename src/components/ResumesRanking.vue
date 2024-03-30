<template>
  <div>
    <div style="padding-bottom: 10px;padding-top: 10px;">
      <span class="rankTitle">简历投递数企业排行榜</span>
    </div>
    <el-scrollbar height="140px" ref="ranks">
      <div ref="maxHeight">
        <div v-for="(item,index) in rankList" :key="item">
        <el-row>
          <el-col :span="6">
            <span class="rankText">{{ index + 1 }}</span>
          </el-col>
          <el-col :span="12">
            <span class="rankText">{{ item.groupTag }}</span>
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
      rankList: [],
      listCon: -200,
      max: 0
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
        this.rankList = numList
        this.getMaxHeight()
        setInterval(this.addNum, 50)
      })
    },
    addNum () {
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
    }
  }
}
</script>

<style>
.rankText{
  color: #ffdd93;
}
.rankTitle{
  color: #ffdd93;
  font-weight: bold;
}
</style>
