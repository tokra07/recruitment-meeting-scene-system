<template>
  <div class="showInfo" v-show="dialogVisible">
    <div class="infos">
      <div style="text-align: center;line-height: 50px;border-bottom: 1px rgba(197, 197, 197,0.3) solid;">
        <span style="font-size: 25px;">{{ companyName }}</span>
      </div>
      <div style="padding-left: 25px;height: 100px;">
        <p>企业简介：</p>
        <span>{{ summary }}</span>
      </div>
      <div>
        <p style="margin-left: 25px;">岗位信息：</p>
        <el-carousel :interval="5000"  style="height: 400px;">
          <el-carousel-item v-for="item in jobList" :key="item">
            <table  style="width: 80%;padding-left: 10%;">
              <tr>
                <td class="tableHeader"><span>岗位</span></td>
                <td class="tablebody1"><span>{{ item.position }}</span></td>
                <td class="tableHeader"><span>联系人</span></td>
                <td class="tablebody1"><span>{{ item.contactUser }}</span></td>
                <!-- <td class="tableHeader"><span>联系方式</span></td>
                <td class="tablebody1"><span>{{ item.contactCellphone }}</span></td> -->
              </tr>
            </table>
            <table style="width: 80%;padding-left: 10%;">
              <tr>
                <td class="tableHeader"><span>联系方式</span></td>
                <td class="tablebody1"><span>{{ item.contactCellphone }}</span></td>
                <td class="tableHeader"><span>学历要求</span></td>
                <td class="tablebody1"><span>{{ item.grade }}</span></td>
                <!-- <td class="tableHeader"><span>公司特点</span></td>
                <td class="tablebody1">{{ item.tags }}</td> -->
                <!-- <td class="tableHeader"><span>联系地址</span></td>
                <td class="tablebody1"><span>{{ item.address }}</span></td> -->
              </tr>
            </table>
            <table style="width: 80%;padding-left: 10%;">
              <tr>
                <!-- <td class="tableHeader"><span>联系方式</span></td>
                <td class="tablebody1"><span>{{ item.contactCellphone }}</span></td> -->
                <!-- <td class="tableHeader"><span>学历要求</span></td>
                <td class="tablebody1"><span>{{ item.grade }}</span></td> -->
                <td style="width: 100px;"><span>公司特点</span></td>
                <td style="text-align: start;">{{ item.tags }}</td>
                <!-- <td class="tableHeader"><span>联系地址</span></td>
                <td class="tablebody1"><span>{{ item.address }}</span></td> -->
              </tr>
            </table>
            <table  style="width: 80%;padding-left: 10%;">
              <tr>
                <!-- <td class="tableHeader"><span>学历要求</span></td>
                <td class="tablebody1"><span>{{ item.grade }}</span></td>
                <td class="tableHeader"><span>公司特点</span></td>
                <td class="tablebody1">{{ item.tags }}</td> -->
                <td><span>联系地址</span></td>
                <td style="text-align: start;"><span>{{ item.address }}</span></td>
              </tr>
            </table>
            <div style="margin-left: 50px;padding-right: 50px;">
              <p>岗位描述：</p>
              <span style="margin-left: 40px;margin-right: 50px;">{{ item.summary }}</span>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div style="text-align: center;margin-top: 25px;">
      <el-button type="primary" plain round @click='closeInfo'>确&nbsp;&nbsp;定</el-button>
    </div>
    </div>
  </div>
  <div id="webgl" @mousemove="handleMouseMove"></div>
  <div id="csswebgl" @mousemove="handleMouseMove" style="position: absolute;top: 0px;left: 0px;"></div>
</template>

<script>
import { scene, camera, renderer, controls, css2Renderer } from '@/model/index'
import * as THREE from 'three'
import { getDetails } from '@/api/api'
import { chooseControls } from '@/model/directiveControls'
export default {
  name: 'ModelView',
  mounted () {
    this.init()
  },
  data () {
    return {
      maxTime: 20,
      dialogVisible: false,
      companyName: '',
      summary: '',
      jobList: [],
      chonse: null
    }
  },
  methods: {
    closeInfo () {
      this.dialogVisible = false
    },
    init () {
      const geometry = new THREE.BoxGeometry(80, 1, 80)
      const material = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.2
      })
      const mesh = new THREE.Mesh(geometry, material)
      mesh.name = 'road'
      mesh.position.set(0, -0.5, 0)
      mesh.castShadow = true
      mesh.receiveShadow = true
      scene.add(mesh)
      const spotLight = new THREE.SpotLight(0xffffff, 1.0)
      spotLight.shadow.camera.near = 0.1
      spotLight.shadow.camera.far = 1150
      spotLight.shadow.camera.top = 300
      spotLight.shadow.camera.bottom = -300
      spotLight.shadow.camera.left = -1000
      spotLight.shadow.camera.right = 1000
      spotLight.intensity = 1.0
      spotLight.angle = Math.PI / 6
      spotLight.decay = 0.0
      spotLight.position.set(0, 100, 0)
      spotLight.castShadow = true
      scene.add(spotLight)
      camera.position.set(85, 85, 85)
      camera.lookAt(0, 0, 0)
      const ambient = new THREE.AmbientLight(0xffffff, 1)
      ambient.castShadow = true
      scene.add(ambient)
      controls.enableDamping = false
      controls.autoRotate = false
      controls.autoRotateSpeed = 0
      window.addEventListener('click', this.onMouseClick, false)
      document.body.appendChild(renderer.domElement)
      document.getElementById('webgl').appendChild(renderer.domElement)
      document.getElementById('csswebgl').appendChild(css2Renderer.domElement)
      this.render()
      this.cameraMove()
    },
    handleMouseMove () {
      this.maxTime = 20
      controls.enableDamping = false
      controls.autoRotate = false
      controls.autoRotateSpeed = 0
      // clearInterval(this.chonse)
    },
    cameraMove () {
      setInterval(this.decreaseTime, 1000)
    },
    decreaseTime () {
      this.maxTime--
      if (this.maxTime === 0) {
        this.ismove = true
        console.log(0)

        this.chose()
        controls.enableDamping = true
        controls.autoRotate = true
        controls.autoRotateSpeed = 3
        this.maxTime = 20
      }
    },
    chose () {
      const min = 1
      const max = 120
      const mun = Math.floor(Math.random() * (max - min + 1)) + min
      chooseControls(mun)
      this.conns(mun)
    },
    conns (mun) {
      setTimeout(() => {
        this.jobList = []
        this.dialogVisible = false
      }, 10000)
      if (mun < 10) {
        mun = '00' + mun
      } else if (mun > 10 < 100) {
        mun = '0' + mun
      }
      const data = { boothNo: mun }
      getDetails(data).then((res) => {
        this.jobList = []
        console.log(res)
        this.companyName = res.data.companyName
        this.summary = res.data.summary
        const lists = res.data.params.职位列表
        console.log('数据门', lists)
        for (let i = 0; i < lists.length; i++) {
          console.log('数据门', lists[i])
          this.jobList.push({
            address: lists[i].address,
            contactUser: lists[i].contactUser,
            contactCellphone: lists[i].contactCellphone,
            position: lists[i].position,
            tags: lists[i].tags,
            grade: lists[i].grade,
            summary: lists[i].summary
          })
        }
        setTimeout(() => {
          this.dialogVisible = true
        }, 3000)
      })
    },
    render () {
      renderer.render(scene, camera)
      css2Renderer.render(scene, camera)
      requestAnimationFrame(this.render)
      controls.update()
      // console.log('x', camera.position.x)
      // console.log('y', camera.position.y)
      // console.log('z', camera.position.z)
    },
    onMouseClick (event) {
      this.jobList = []
      const _this = this
      const raycaster = new THREE.Raycaster()
      const ndcX = (event.clientX / window.innerWidth) * 2 - 1
      const ndcY = -(event.clientY / window.innerHeight) * 2 + 1
      raycaster.setFromCamera(new THREE.Vector2(ndcX, ndcY), camera)
      const intersects = raycaster.intersectObjects(scene.children)
      console.log(intersects)
      if (intersects.length > 0) {
        const models = intersects[0].object
        if (models.name !== 'road') {
          if (models.name.includes('booth')) {
            console.log(models.name)
            const setName = models.name.slice(5, 8)
            const data = { boothNo: setName }
            console.log(data)
            getDetails(data).then((res) => {
              _this.dialogVisible = true
              console.log(res)
              _this.companyName = res.data.companyName
              _this.summary = res.data.summary
              const lists = res.data.params.职位列表
              console.log('数据门', lists)
              for (let i = 0; i < lists.length; i++) {
                console.log('数据门', lists[i])
                _this.jobList.push({
                  address: lists[i].address,
                  contactUser: lists[i].contactUser,
                  contactCellphone: lists[i].contactCellphone,
                  position: lists[i].position,
                  tags: lists[i].tags,
                  grade: lists[i].grade,
                  summary: lists[i].summary
                })
              }
            })
          } else {
            console.log(models.parent.parent.name)
            const setName = models.parent.parent.name.slice(5, 8)
            const data = { boothNo: setName }
            console.log(data)
            getDetails(data).then((res) => {
              console.log(res)
            })
          }
        }
      }
    }
  }
}
</script>

<style>
#three{
 width: 500px;
 height: 800px;
}
.showInfo{
  color: #5BA7EF;
  position: absolute;
  z-index: 1000;
  width: 1920px;
  height: 1080px;
  background-color: rgba(255,255,255,0.2);
}
.infos {
  position: relative;
  width: 30%;
  height: 65%;
  margin: auto;
  top: 150px;
  background-color: rgba(22, 29, 60, 0.8);
  border-radius: 25px;
}
.tableHeader{
  width: 15%;
  text-align: left
}
.tablebody1{
  width: 25%;
}
</style>
