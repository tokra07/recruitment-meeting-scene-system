<template>
    <div style="margin-top: 12%;"><span class="main-info">当前企业数：</span><span class="info-text">{{ epNum }}家</span></div>
    <div><span class="main-info">当前展厅人数：</span></div>
    <div><span class="main-info">当前投递简历数：</span></div>
</template>

<script>
import { getBoothList } from '@/api/api'
export default {
  name: 'NumInfo',
  data () {
    return {
      epNum: 0
    }
  },
  created () {
    // this.initWebSocket()
  },
  mounted () {
    getBoothList().then((res) => {
      this.epNum = res.data.length
    })
  },
  methods: {
    currentTime () {
      setInterval(this.formatDate, 500)
    },
    initWebSocket () {
      const wsuri = 'wss://cfjy2.0476soft.net:38080/ledapi/getCurrentPersonage'
      this.websock = new WebSocket(wsuri)
      this.websock.onmessage = this.websocketonmessage
      this.websock.onopen = this.websocketonopen
      this.websock.onerror = this.websocketonerror
      this.websock.onclose = this.websocketclose
    },
    // 连接建立时触发
    websocketonopen () {
      // 开启心跳
      this.start()
      // 连接建立之后执行send方法发送数据
      // let actions = {"room":"007854ce7b93476487c7ca8826d17eba","info":"1121212"};
      // this.websocketsend(JSON.stringify(actions));
    },
    // 通信发生错误时触发
    websocketonerror () {
      console.log('出现错误')
      this.reconnect()
    },
    // 客户端接收服务端数据时触发
    websocketonmessage (e) {
      console.log(e.data)
      // 收到服务器信息，心跳重置
      this.reset()
    },
    websocketsend (Data) {
      // 数据发送
      this.websock.send(Data)
    },
    // 连接关闭时触发
    websocketclose (e) {
      // 关闭
      console.log('断开连接', e)
      // 重连
      this.reconnect()
    },
    reconnect () {
      // 重新连接
      const that = this
      if (that.lockReconnect) {
        return
      }
      that.lockReconnect = true
      // 没连接上会一直重连，设置延迟避免请求过多
      that.timeoutnum && clearTimeout(that.timeoutnum)
      that.timeoutnum = setTimeout(function () {
        // 新连接
        that.initWebSocket()
        that.lockReconnect = false
      }, 5000)
    },
    reset () {
      // 重置心跳
      const that = this
      // 清除时间
      clearTimeout(that.timeoutObj)
      clearTimeout(that.serverTimeoutObj)
      // 重启心跳
      that.start()
    },
    start () {
      // 开启心跳
      console.log('开启心跳')
      const self = this
      self.timeoutObj && clearTimeout(self.timeoutObj)
      self.serverTimeoutObj && clearTimeout(self.serverTimeoutObj)
      self.timeoutObj = setTimeout(function () {
        // 这里发送一个心跳，后端收到后，返回一个心跳消息，
        if (self.ws.readyState === 1) {
          // 如果连接正常
          // self.ws.send("heartCheck"); //这里可以自己跟后端约定
        } else {
          // 否则重连
          self.reconnect()
        }
        self.serverTimeoutObj = setTimeout(function () {
          // 超时关闭
          self.ws.close()
        }, self.timeout)
      }, self.timeout)
    }
  }

}
</script>
<style>
.main-info{
    font-weight: bold;
    line-height: 1.5rem;
    color: #cc0066;
}
.info-text{
  line-height: 1.5rem;
    color: #cc0066;
}
</style>
