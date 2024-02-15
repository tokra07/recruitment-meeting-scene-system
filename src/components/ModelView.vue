<template>
  <div id="webgl" @mousemove="handleMouseMove"></div>
</template>

<script>
import { scene, camera, renderer, controls } from '@/model/index'
import * as THREE from 'three'
import { getDetails } from '@/api/api'
export default {
  name: 'ModelView',
  mounted () {
    this.init()
  },
  data () {
    return {
      maxTime: 100
    }
  },
  methods: {
    init () {
      const geometry = new THREE.BoxGeometry(80, 1, 80)
      const material = new THREE.MeshLambertMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.2
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
      camera.position.set(85, 85, 85)
      camera.lookAt(0, 0, 0)
      const ambient = new THREE.AmbientLight(0xffffff, 1)
      ambient.castShadow = true
      scene.add(ambient)
      controls.addEventListener('change', function () {
        renderer.render(scene, camera)
      })
      controls.enableDamping = false
      controls.autoRotate = false
      controls.autoRotateSpeed = 0
      window.addEventListener('click', this.onMouseClick, false)
      document.body.appendChild(renderer.domElement)
      document.getElementById('webgl').appendChild(renderer.domElement)
      this.render()
      this.cameraMove()
    },
    handleMouseMove () {
      this.maxTime = 100
      controls.enableDamping = false
      controls.autoRotate = false
      controls.autoRotateSpeed = 0
    },
    cameraMove () {
      setInterval(this.decreaseTime, 1000)
    },
    decreaseTime () {
      this.maxTime--
      if (this.maxTime === 0) {
        console.log(0)
        controls.enableDamping = true
        controls.autoRotate = true
        controls.autoRotateSpeed = 3
        this.maxTime = 100
      }
    },
    render () {
      renderer.render(scene, camera)
      requestAnimationFrame(this.render)
      controls.update()
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
