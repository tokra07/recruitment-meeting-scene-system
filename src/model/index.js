
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
const windowWidth = window.innerWidth
const windowHeight = window.innerHeight
export const scene = new THREE.Scene()
export const camera = new THREE.PerspectiveCamera(30, windowWidth / windowHeight, 1, 3000)
export const renderer = new THREE.WebGLRenderer()
renderer.setSize(windowWidth, windowHeight)
renderer.shadowMap.enabled = true
renderer.setClearColor(0x131D3C, 1.0)
const loader = new GLTFLoader()
loader.load('glb/ground.glb', (gltf) => {
  console.log(gltf)
  const groundGlb = gltf.scene
  groundGlb.traverse(function (obj) {
    obj.receiveShadow = true
    obj.castShadow = true
    if (obj.isMesh) {
      // console.log(obj)
      const map = obj.material.map
      if (map !== null) {
        map.magFilter = THREE.LinearFilter
        map.minFilter = THREE.LinearMipMapLinearFilter
      }
    }
  })
  groundGlb.position.set(0, 0, 0)
  groundGlb.scale.set(2, 2, 2)
  groundGlb.castShadow = true
  groundGlb.receiveShadow = true
  scene.add(groundGlb)
})
loader.load('glb/booth.glb', (gltf) => {
  console.log(gltf)
  const boothGlb001 = gltf.scene
  boothGlb001.castShadow = true
  boothGlb001.receiveShadow = true
  boothGlb001.traverse(function (obj) {
    obj.receiveShadow = true
    obj.castShadow = true
    if (obj.isMesh) {
      // console.log(obj)
      const map = obj.material.map
      if (map !== null) {
        map.magFilter = THREE.LinearFilter
        map.minFilter = THREE.LinearMipMapLinearFilter
      }
    }
  })
  boothGlb001.position.set(-26.3, 0, -19)
  boothGlb001.name = 'booth001'
  const boothGlb002 = boothGlb001.clone()
  boothGlb002.position.set(-23.3, 0, -19)
  boothGlb002.name = 'booth002'
  const boothGlb003 = boothGlb001.clone()
  boothGlb003.position.set(-20.8, 0, -19)
  boothGlb003.name = 'booth003'
  const boothGlb004 = boothGlb001.clone()
  boothGlb004.position.set(-17.8, 0, -19)
  boothGlb004.name = 'booth004'
  const boothGlb005 = boothGlb001.clone()
  boothGlb005.position.set(-14, 0, -22)
  boothGlb005.name = 'booth005'
  const boothGlb006 = boothGlb001.clone()
  boothGlb006.position.set(-11, 0, -22)
  boothGlb006.name = 'booth006'
  const boothGlb007 = boothGlb001.clone()
  boothGlb007.position.set(-6.3, 0, -22)
  boothGlb007.name = 'booth007'
  const boothGlb008 = boothGlb001.clone()
  boothGlb008.position.set(-3.3, 0, -22)
  boothGlb008.name = 'booth008'
  const boothGlb009 = boothGlb001.clone()
  boothGlb009.position.set(-1, 0, -22)
  boothGlb009.name = 'booth009'
  const boothGlb010 = boothGlb001.clone()
  boothGlb010.position.set(2, 0, -22)
  boothGlb010.name = 'booth010'
  const boothGlb011 = boothGlb001.clone()
  boothGlb011.position.set(4.7, 0, -22)
  boothGlb011.name = 'booth011'
  const boothGlb012 = boothGlb001.clone()
  boothGlb012.position.set(9, 0, -22)
  boothGlb012.name = 'booth012'
  const boothGlb013 = boothGlb001.clone()
  boothGlb013.position.set(12, 0, -22)
  boothGlb013.name = 'booth013'
  const boothGlb014 = boothGlb001.clone()
  boothGlb014.position.set(17, 0, -19)
  boothGlb014.name = 'booth014'
  const boothGlb015 = boothGlb001.clone()
  boothGlb015.position.set(20, 0, -19)
  boothGlb015.name = 'booth015'
  const boothGlb016 = boothGlb001.clone()
  boothGlb016.position.set(23, 0, -19)
  boothGlb016.name = 'booth016'
  const boothGlb017 = boothGlb001.clone()
  boothGlb017.position.set(-20.8, 0, -14)
  boothGlb017.name = 'booth017'
  const boothGlb018 = boothGlb001.clone()
  boothGlb018.position.set(-18.1, 0, -14)
  boothGlb018.name = 'booth018'
  const boothGlb019 = boothGlb001.clone()
  boothGlb019.position.set(-15.5, 0, -14)
  boothGlb019.name = 'booth019'
  const boothGlb020 = boothGlb001.clone()
  boothGlb020.position.set(-12.8, 0, -14)
  boothGlb020.name = 'booth020'
  const boothGlb021 = boothGlb001.clone()
  boothGlb021.position.set(-10.1, 0, -14)
  boothGlb021.name = 'booth021'
  const boothGlb022 = boothGlb001.clone()
  boothGlb022.position.set(-7.4, 0, -14)
  boothGlb022.name = 'booth022'
  const boothGlb023 = boothGlb001.clone()
  boothGlb023.position.set(-4.7, 0, -14)
  boothGlb023.name = 'booth023'
  const boothGlb024 = boothGlb001.clone()
  boothGlb024.position.set(-2.3, 0, -14)
  boothGlb024.name = 'booth024'
  const boothGlb025 = boothGlb001.clone()
  boothGlb025.position.set(0.3, 0, -14)
  boothGlb025.name = 'booth025'
  const boothGlb026 = boothGlb001.clone()
  boothGlb026.position.set(2.9, 0, -14)
  boothGlb026.name = 'booth026'
  const boothGlb027 = boothGlb001.clone()
  boothGlb027.position.set(5.5, 0, -14)
  boothGlb027.name = 'booth027'
  const boothGlb028 = boothGlb001.clone()
  boothGlb028.position.set(8.1, 0, -14)
  boothGlb028.name = 'booth028'
  const boothGlb029 = boothGlb001.clone()
  boothGlb029.position.set(10.8, 0, -14)
  boothGlb029.name = 'booth029'
  const boothGlb030 = boothGlb001.clone()
  boothGlb030.position.set(13.4, 0, -14)
  boothGlb030.name = 'booth030'
  const boothGlb031 = boothGlb001.clone()
  boothGlb031.position.set(16, 0, -14)
  boothGlb031.name = 'booth031'
  const boothGlb032 = boothGlb001.clone()
  boothGlb032.position.set(-20.8, 0, -11)
  boothGlb032.name = 'booth032'
  const boothGlb033 = boothGlb001.clone()
  boothGlb033.position.set(-18.1, 0, -11)
  boothGlb033.name = 'booth033'
  const boothGlb034 = boothGlb001.clone()
  boothGlb034.position.set(-15.5, 0, -11)
  boothGlb034.name = 'booth034'
  const boothGlb035 = boothGlb001.clone()
  boothGlb035.position.set(-12.8, 0, -11)
  boothGlb035.name = 'booth035'
  const boothGlb036 = boothGlb001.clone()
  boothGlb036.position.set(-10.1, 0, -11)
  boothGlb036.name = 'booth036'
  const boothGlb037 = boothGlb001.clone()
  boothGlb037.position.set(-7.4, 0, -11)
  boothGlb037.name = 'booth037'
  const boothGlb038 = boothGlb001.clone()
  boothGlb038.position.set(-4.7, 0, -11)
  boothGlb038.name = 'booth038'
  const boothGlb039 = boothGlb001.clone()
  boothGlb039.position.set(-2.3, 0, -11)
  boothGlb039.name = 'booth039'
  const boothGlb040 = boothGlb001.clone()
  boothGlb040.position.set(0.3, 0, -11)
  boothGlb040.name = 'booth040'
  const boothGlb041 = boothGlb001.clone()
  boothGlb041.position.set(2.9, 0, -11)
  boothGlb041.name = 'booth041'
  const boothGlb042 = boothGlb001.clone()
  boothGlb042.position.set(5.5, 0, -11)
  boothGlb042.name = 'booth042'
  const boothGlb043 = boothGlb001.clone()
  boothGlb043.position.set(8.1, 0, -11)
  boothGlb043.name = 'booth043'
  const boothGlb044 = boothGlb001.clone()
  boothGlb044.position.set(10.8, 0, -11)
  boothGlb044.name = 'booth044'
  const boothGlb045 = boothGlb001.clone()
  boothGlb045.position.set(13.4, 0, -11)
  boothGlb045.name = 'booth045'
  const boothGlb046 = boothGlb001.clone()
  boothGlb046.position.set(16, 0, -11)
  boothGlb046.name = 'booth046'
  const boothGlb047 = boothGlb001.clone()
  boothGlb047.position.set(-11, 0, -5.5)
  boothGlb047.name = 'booth047'
  const boothGlb048 = boothGlb001.clone()
  boothGlb048.position.set(-6, 0, -5.5)
  boothGlb048.name = 'booth002'
  const boothGlb049 = boothGlb001.clone()
  boothGlb049.position.set(-3.2, 0, -5.5)
  boothGlb049.name = 'booth002'
  const boothGlb050 = boothGlb001.clone()
  boothGlb050.position.set(-0.3, 0, -5.5)
  boothGlb050.name = 'booth002'
  const boothGlb051 = boothGlb001.clone()
  boothGlb051.position.set(2.4, 0, -5.5)
  boothGlb051.name = 'booth002'
  const boothGlb052 = boothGlb001.clone()
  boothGlb052.position.set(5.2, 0, -5.5)
  boothGlb052.name = 'booth002'
  const boothGlb053 = boothGlb001.clone()
  boothGlb053.position.set(10, 0, -5.5)
  boothGlb053.name = 'booth053'
  const boothGlb054 = boothGlb001.clone()
  boothGlb054.position.set(12.8, 0, -5.5)
  boothGlb054.name = 'booth054'
  const boothGlb055 = boothGlb001.clone()
  boothGlb055.position.set(-11, 0, -2.5)
  boothGlb055.name = 'booth055'
  const boothGlb056 = boothGlb001.clone()
  boothGlb056.position.set(-6, 0, -2.5)
  boothGlb056.name = 'booth056'
  const boothGlb057 = boothGlb001.clone()
  boothGlb057.position.set(-3.2, 0, -2.5)
  boothGlb057.name = 'booth057'
  const boothGlb058 = boothGlb001.clone()
  boothGlb058.position.set(-0.3, 0, -2.5)
  boothGlb058.name = 'booth058'
  const boothGlb059 = boothGlb001.clone()
  boothGlb059.position.set(2.4, 0, -2.5)
  boothGlb059.name = 'booth059'
  const boothGlb060 = boothGlb001.clone()
  boothGlb060.position.set(5.2, 0, -2.5)
  boothGlb060.name = 'booth060'
  const boothGlb061 = boothGlb001.clone()
  boothGlb061.position.set(10, 0, -2.5)
  boothGlb061.name = 'booth061'
  const boothGlb062 = boothGlb001.clone()
  boothGlb062.position.set(12.8, 0, -2.5)
  boothGlb062.name = 'booth062'
  const boothGlb063 = boothGlb001.clone()
  boothGlb063.position.set(-10, 0, 4)
  boothGlb063.name = 'booth063'
  const boothGlb064 = boothGlb001.clone()
  boothGlb064.position.set(-7.5, 0, 4)
  boothGlb064.name = 'booth064'
  const boothGlb065 = boothGlb001.clone()
  boothGlb065.position.set(-4.8, 0, 4)
  boothGlb065.name = 'booth065'
  const boothGlb066 = boothGlb001.clone()
  boothGlb066.position.set(-2.1, 0, 4)
  boothGlb066.name = 'booth066'
  const boothGlb067 = boothGlb001.clone()
  boothGlb067.position.set(0.1, 0, 4)
  boothGlb067.name = 'booth067'
  const boothGlb068 = boothGlb001.clone()
  boothGlb068.position.set(2.7, 0, 4)
  boothGlb068.name = 'booth068'
  const boothGlb069 = boothGlb001.clone()
  boothGlb069.position.set(5.2, 0, 4)
  boothGlb069.name = 'booth069'
  const boothGlb070 = boothGlb001.clone()
  boothGlb070.position.set(7.6, 0, 4)
  boothGlb070.name = 'booth070'
  const boothGlb071 = boothGlb001.clone()
  boothGlb071.position.set(10.2, 0, 4)
  boothGlb071.name = 'booth071'
  const boothGlb072 = boothGlb001.clone()
  boothGlb072.position.set(12.8, 0, 4)
  boothGlb072.name = 'booth072'
  const boothGlb073 = boothGlb001.clone()
  boothGlb073.position.set(-10, 0, 6)
  boothGlb073.name = 'booth073'
  const boothGlb074 = boothGlb001.clone()
  boothGlb074.position.set(-7.5, 0, 6)
  boothGlb074.name = 'booth074'
  const boothGlb075 = boothGlb001.clone()
  boothGlb075.position.set(-4.8, 0, 6)
  boothGlb075.name = 'booth075'
  const boothGlb076 = boothGlb001.clone()
  boothGlb076.position.set(-2.1, 0, 6)
  boothGlb076.name = 'booth076'
  const boothGlb077 = boothGlb001.clone()
  boothGlb077.position.set(0.1, 0, 6)
  boothGlb077.name = 'booth077'
  const boothGlb078 = boothGlb001.clone()
  boothGlb078.position.set(2.7, 0, 6)
  boothGlb078.name = 'booth078'
  const boothGlb079 = boothGlb001.clone()
  boothGlb079.position.set(5.2, 0, 6)
  boothGlb079.name = 'booth079'
  const boothGlb080 = boothGlb001.clone()
  boothGlb080.position.set(7.6, 0, 6)
  boothGlb080.name = 'booth080'
  const boothGlb081 = boothGlb001.clone()
  boothGlb081.position.set(10.2, 0, 6)
  boothGlb081.name = 'booth081'
  const boothGlb082 = boothGlb001.clone()
  boothGlb082.position.set(12.8, 0, 6)
  boothGlb082.name = 'booth082'
  const boothGlb083 = boothGlb001.clone()
  boothGlb083.position.set(-13.8, 0, 12)
  boothGlb083.name = 'booth083'
  const boothGlb084 = boothGlb001.clone()
  boothGlb084.position.set(-11, 0, 12)
  boothGlb084.name = 'booth084'
  const boothGlb085 = boothGlb001.clone()
  boothGlb085.position.set(-6, 0, 12)
  boothGlb085.name = 'booth085'
  const boothGlb086 = boothGlb001.clone()
  boothGlb086.position.set(-3.2, 0, 12)
  boothGlb086.name = 'booth086'
  const boothGlb087 = boothGlb001.clone()
  boothGlb087.position.set(-0.3, 0, 12)
  boothGlb087.name = 'booth087'
  const boothGlb088 = boothGlb001.clone()
  boothGlb088.position.set(2.4, 0, 12)
  boothGlb088.name = 'booth088'
  const boothGlb089 = boothGlb001.clone()
  boothGlb089.position.set(5.2, 0, 12)
  boothGlb089.name = 'booth089'
  const boothGlb090 = boothGlb001.clone()
  boothGlb090.position.set(10, 0, 12)
  boothGlb090.name = 'booth090'
  const boothGlb091 = boothGlb001.clone()
  boothGlb091.position.set(12.8, 0, 12)
  boothGlb091.name = 'booth091'
  const boothGlb092 = boothGlb001.clone()
  boothGlb092.position.set(-13.8, 0, 15)
  boothGlb092.name = 'booth092'
  const boothGlb093 = boothGlb001.clone()
  boothGlb093.position.set(-11, 0, 15)
  boothGlb093.name = 'booth002'
  const boothGlb094 = boothGlb001.clone()
  boothGlb094.position.set(-6, 0, 15)
  boothGlb094.name = 'booth002'
  const boothGlb095 = boothGlb001.clone()
  boothGlb095.position.set(-3.2, 0, 15)
  boothGlb095.name = 'booth002'
  const boothGlb096 = boothGlb001.clone()
  boothGlb096.position.set(-0.3, 0, 15)
  boothGlb096.name = 'booth002'
  const boothGlb097 = boothGlb001.clone()
  boothGlb097.position.set(2.4, 0, 15)
  boothGlb097.name = 'booth002'
  const boothGlb098 = boothGlb001.clone()
  boothGlb098.position.set(5.2, 0, 15)
  boothGlb098.name = 'booth002'
  const boothGlb099 = boothGlb001.clone()
  boothGlb099.position.set(10, 0, 15)
  boothGlb099.name = 'booth002'
  const boothGlb100 = boothGlb001.clone()
  boothGlb100.position.set(12.8, 0, 15)
  boothGlb100.name = 'booth002'
  const boothGlb101 = boothGlb001.clone()
  boothGlb101.position.set(-34, 0, 15)
  boothGlb101.name = 'booth101'
  const boothGlb102 = boothGlb001.clone()
  boothGlb102.position.set(-31, 0, 15)
  boothGlb102.name = 'booth102'
  const boothGlb103 = boothGlb001.clone()
  boothGlb103.position.set(-28, 0, 15)
  boothGlb103.name = 'booth103'
  const boothGlb104 = boothGlb001.clone()
  boothGlb104.position.set(-25, 0, 15)
  boothGlb104.name = 'booth104'
  const boothGlb105 = boothGlb001.clone()
  boothGlb105.position.set(-22, 0, 15)
  boothGlb105.name = 'booth105'
  const boothGlb106 = boothGlb001.clone()
  boothGlb106.position.set(-34, 0, 21)
  boothGlb106.name = 'booth106'
  const boothGlb107 = boothGlb001.clone()
  boothGlb107.position.set(-31, 0, 22)
  boothGlb107.name = 'booth107'
  const boothGlb108 = boothGlb001.clone()
  boothGlb108.position.set(-28, 0, 22)
  boothGlb108.name = 'booth108'
  const boothGlb109 = boothGlb001.clone()
  boothGlb109.position.set(-25, 0, 22)
  boothGlb109.name = 'booth109'
  const boothGlb110 = boothGlb001.clone()
  boothGlb110.position.set(-22, 0, 22)
  boothGlb110.name = 'booth110'
  const boothGlb111 = boothGlb001.clone()
  boothGlb111.position.set(-15, 0, 22)
  boothGlb111.name = 'booth111'
  const boothGlb112 = boothGlb001.clone()
  boothGlb112.position.set(-12.3, 0, 22)
  boothGlb112.name = 'booth112'
  const boothGlb113 = boothGlb001.clone()
  boothGlb113.position.set(-9.5, 0, 22)
  boothGlb113.name = 'booth113'
  const boothGlb114 = boothGlb001.clone()
  boothGlb114.position.set(-2, 0, 22)
  boothGlb114.name = 'booth114'
  const boothGlb115 = boothGlb001.clone()
  boothGlb115.position.set(0.2, 0, 22)
  boothGlb115.name = 'booth115'
  const boothGlb116 = boothGlb001.clone()
  boothGlb116.position.set(2.9, 0, 22)
  boothGlb116.name = 'booth116'
  const boothGlb117 = boothGlb001.clone()
  boothGlb117.position.set(5.5, 0, 22)
  boothGlb117.name = 'booth117'
  const boothGlb118 = boothGlb001.clone()
  boothGlb118.position.set(8.4, 0, 22)
  boothGlb118.name = 'booth118'
  const boothGlb119 = boothGlb001.clone()
  boothGlb119.position.set(11.4, 0, 22)
  boothGlb119.name = 'booth119'
  const boothGlb120 = boothGlb001.clone()
  boothGlb120.position.set(14.4, 0, 22)
  boothGlb120.name = 'booth120'
  scene.add(boothGlb001)
  scene.add(boothGlb002)
  scene.add(boothGlb003)
  scene.add(boothGlb004)
  scene.add(boothGlb005)
  scene.add(boothGlb006)
  scene.add(boothGlb007)
  scene.add(boothGlb008)
  scene.add(boothGlb009)
  scene.add(boothGlb010)
  scene.add(boothGlb011)
  scene.add(boothGlb012)
  scene.add(boothGlb013)
  scene.add(boothGlb014)
  scene.add(boothGlb015)
  scene.add(boothGlb016)
  scene.add(boothGlb017)
  scene.add(boothGlb018)
  scene.add(boothGlb019)
  scene.add(boothGlb020)
  scene.add(boothGlb021)
  scene.add(boothGlb022)
  scene.add(boothGlb023)
  scene.add(boothGlb024)
  scene.add(boothGlb025)
  scene.add(boothGlb026)
  scene.add(boothGlb027)
  scene.add(boothGlb028)
  scene.add(boothGlb029)
  scene.add(boothGlb030)
  scene.add(boothGlb031)
  scene.add(boothGlb032)
  scene.add(boothGlb033)
  scene.add(boothGlb034)
  scene.add(boothGlb035)
  scene.add(boothGlb036)
  scene.add(boothGlb037)
  scene.add(boothGlb038)
  scene.add(boothGlb039)
  scene.add(boothGlb040)
  scene.add(boothGlb041)
  scene.add(boothGlb042)
  scene.add(boothGlb043)
  scene.add(boothGlb044)
  scene.add(boothGlb045)
  scene.add(boothGlb046)
  scene.add(boothGlb047)
  scene.add(boothGlb048)
  scene.add(boothGlb049)
  scene.add(boothGlb050)
  scene.add(boothGlb051)
  scene.add(boothGlb052)
  scene.add(boothGlb053)
  scene.add(boothGlb054)
  scene.add(boothGlb055)
  scene.add(boothGlb056)
  scene.add(boothGlb057)
  scene.add(boothGlb058)
  scene.add(boothGlb059)
  scene.add(boothGlb060)
  scene.add(boothGlb061)
  scene.add(boothGlb062)
  scene.add(boothGlb063)
  scene.add(boothGlb064)
  scene.add(boothGlb065)
  scene.add(boothGlb066)
  scene.add(boothGlb067)
  scene.add(boothGlb068)
  scene.add(boothGlb069)
  scene.add(boothGlb070)
  scene.add(boothGlb071)
  scene.add(boothGlb072)
  scene.add(boothGlb073)
  scene.add(boothGlb074)
  scene.add(boothGlb075)
  scene.add(boothGlb076)
  scene.add(boothGlb077)
  scene.add(boothGlb078)
  scene.add(boothGlb079)
  scene.add(boothGlb080)
  scene.add(boothGlb081)
  scene.add(boothGlb082)
  scene.add(boothGlb083)
  scene.add(boothGlb084)
  scene.add(boothGlb085)
  scene.add(boothGlb086)
  scene.add(boothGlb087)
  scene.add(boothGlb088)
  scene.add(boothGlb089)
  scene.add(boothGlb090)
  scene.add(boothGlb091)
  scene.add(boothGlb092)
  scene.add(boothGlb093)
  scene.add(boothGlb094)
  scene.add(boothGlb095)
  scene.add(boothGlb096)
  scene.add(boothGlb097)
  scene.add(boothGlb098)
  scene.add(boothGlb099)
  scene.add(boothGlb100)
  scene.add(boothGlb101)
  scene.add(boothGlb102)
  scene.add(boothGlb103)
  scene.add(boothGlb104)
  scene.add(boothGlb105)
  scene.add(boothGlb106)
  scene.add(boothGlb107)
  scene.add(boothGlb108)
  scene.add(boothGlb109)
  scene.add(boothGlb110)
  scene.add(boothGlb111)
  scene.add(boothGlb112)
  scene.add(boothGlb113)
  scene.add(boothGlb114)
  scene.add(boothGlb115)
  scene.add(boothGlb116)
  scene.add(boothGlb117)
  scene.add(boothGlb118)
  scene.add(boothGlb119)
  scene.add(boothGlb120)
})
