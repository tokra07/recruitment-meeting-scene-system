<template>
  <div id="webgl"></div>
</template>

<script>
import { scene, camera, renderer } from '@/model/index'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { getDetails } from '@/api/api'
export default {
  name: 'ModelView',
  mounted () {
    this.init()
  },
  data () {
    return {
    }
  },
  methods: {
    init () {
      const geometry = new THREE.BoxGeometry(80, 1, 80)
      const material = new THREE.MeshLambertMaterial({
        color: 0xffffff// 0xff0000设置材质颜色为红色
      })
      const mesh = new THREE.Mesh(geometry, material)
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
      camera.position.set(100, 100, 100)
      camera.lookAt(0, 0, 0)
      const ambient = new THREE.AmbientLight(0xffffff, 1)
      ambient.castShadow = true
      scene.add(ambient)
      const controls = new OrbitControls(camera, renderer.domElement)
      // 如果OrbitControls改变了相机参数，重新调用渲染器渲染三维场景
      controls.addEventListener('change', function () {
        renderer.render(scene, camera) // 执行渲染操作
      })
      // 监听鼠标、键盘事件
      window.addEventListener('click', this.onMouseClick, false)
      document.body.appendChild(renderer.domElement)
      document.getElementById('webgl').appendChild(renderer.domElement)
      this.render()
    },
    render () {
      renderer.render(scene, camera)
      requestAnimationFrame(this.render)
      // console.log('x', camera.position.x)
      // console.log('y', camera.position.y)
      // console.log('z', camera.position.z)
    },
    onMouseClick (event) {
      const raycaster = new THREE.Raycaster()
      const ndcX = (event.clientX / window.innerWidth) * 2 - 1
      const ndcY = -(event.clientY / window.innerHeight) * 2 + 1
      raycaster.setFromCamera(new THREE.Vector2(ndcX, ndcY), camera)
      const intersects = raycaster.intersectObjects(scene.children)
      console.log(intersects)
      if (intersects.length > 0) {
        console.log(intersects[0].object.parent.parent.name)
        const setName = intersects[0].object.parent.parent.name
        getDetails(setName).then((res) => {
          console.log(res)
          this.$msgbox({
            title: res.data.companyName,
            message: res.data.company.brief
          })
        })
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
</style>
