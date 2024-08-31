import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { scene } from '@/model/index'
export function bulbControls (bulbName) {
  const loader = new GLTFLoader()
  loader.load('glb/bulb.glb', (gltf) => {
    console.log(gltf)
    const bulb001 = gltf.scene
    bulb001.scale.set(4, 4, 4)
    bulb001.traverse(function (obj) {
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
    bulb001.position.set(22, 1, -19)
    bulb001.castShadow = true
    bulb001.receiveShadow = true
    bulb001.name = 'bulb001'
    const bulb002 = bulb001.clone()
    bulb002.position.set(19, 1, -19)
    bulb002.name = 'bulb002'
    const bulb003 = bulb001.clone()
    bulb003.position.set(16, 1, -19)
    bulb003.name = 'bulb003'
    const bulb004 = bulb001.clone()
    bulb004.position.set(11, 1, -22)
    bulb004.name = 'bulb004'
    const bulb005 = bulb001.clone()
    bulb005.position.set(8, 1, -22)
    bulb005.name = 'bulb005'
    const bulb006 = bulb001.clone()
    bulb006.position.set(4, 1, -22)
    bulb006.name = 'bulb006'
    const bulb007 = bulb001.clone()
    bulb007.position.set(2, 1, -22)
    bulb007.name = 'bulb007'
    const bulb008 = bulb001.clone()
    bulb008.position.set(-2, 1, -22)
    bulb008.name = 'bulb008'
    const bulb009 = bulb001.clone()
    bulb009.position.set(-4, 1, -22)
    bulb009.name = 'bulb009'
    //
    const bulb015 = bulb001.clone()
    bulb015.position.set(-24, 1, -19)
    bulb015.name = 'bulb15'
    const bulb014 = bulb001.clone()
    bulb014.position.set(-21, 1, -19)
    bulb014.name = 'bulb014'
    const bulb013 = bulb001.clone()
    bulb013.position.set(-18, 1, -19)
    bulb013.name = 'bulb013'
    const bulb012 = bulb001.clone()
    bulb012.position.set(-15, 1, -22)
    bulb012.name = 'bulb012'
    const bulb011 = bulb001.clone()
    bulb011.position.set(-12, 1, -22)
    bulb011.name = 'bulb011'
    const bulb010 = bulb001.clone()
    bulb010.position.set(-7, 1, -22)
    bulb010.name = 'bulb010'

    const bulb016 = bulb001.clone()
    bulb016.position.set(-27, 1, -19)
    bulb016.name = 'bulb016'
    const bulb017 = bulb001.clone()
    bulb017.position.set(-21, 1, -14)
    bulb017.name = 'bulb017'
    const bulb018 = bulb001.clone()
    bulb018.position.set(-19, 1, -14)
    bulb018.name = 'bulb018'
    const bulb019 = bulb001.clone()
    bulb019.position.set(-16, 1, -14)
    bulb019.name = 'bulb019'
    const bulb020 = bulb001.clone()
    bulb020.position.set(-13, 1, -14)
    bulb020.name = 'bulb020'
    const bulb021 = bulb001.clone()
    bulb021.position.set(-11, 1, -14)
    bulb021.name = 'bulb021'
    const bulb022 = bulb001.clone()
    bulb022.position.set(-8, 1, -14)
    bulb022.name = 'bulb022'
    const bulb023 = bulb001.clone()
    bulb023.position.set(-5, 1, -14)
    bulb023.name = 'bulb023'
    const bulb024 = bulb001.clone()
    bulb024.position.set(-3, 1, -14)
    bulb024.name = 'bulb024'
    const bulb025 = bulb001.clone()
    bulb025.position.set(-0.3, 1, -14)
    bulb025.name = 'bulb025'
    const bulb026 = bulb001.clone()
    bulb026.position.set(1, 1, -14)
    bulb026.name = 'bulb026'
    const bulb027 = bulb001.clone()
    bulb027.position.set(4, 1, -14)
    bulb027.name = 'bulb027'
    const bulb028 = bulb001.clone()
    bulb028.position.set(7, 1, -14)
    bulb028.name = 'bulb028'
    const bulb029 = bulb001.clone()
    bulb029.position.set(9, 1, -14)
    bulb029.name = 'bulb029'
    const bulb030 = bulb001.clone()
    bulb030.position.set(12, 1, -14)
    bulb030.name = 'bulb030'
    const bulb031 = bulb001.clone()
    bulb031.position.set(15, 1, -14)
    bulb031.name = 'bulb031'
    //
    const bulb046 = bulb001.clone()
    bulb046.position.set(-21, 1, -11)
    bulb046.name = 'bulb046'
    const bulb045 = bulb001.clone()
    bulb045.position.set(-19, 1, -11)
    bulb045.name = 'bulb045'
    const bulb044 = bulb001.clone()
    bulb044.position.set(-16, 1, -11)
    bulb044.name = 'bulb044'
    const bulb043 = bulb001.clone()
    bulb043.position.set(-13, 1, -11)
    bulb043.name = 'bulb043'
    const bulb042 = bulb001.clone()
    bulb042.position.set(-11, 1, -11)
    bulb042.name = 'bulb042'
    const bulb041 = bulb001.clone()
    bulb041.position.set(-8, 1, -11)
    bulb041.name = 'bulb041'
    const bulb040 = bulb001.clone()
    bulb040.position.set(-5, 1, -11)
    bulb040.name = 'bulb039'
    const bulb039 = bulb001.clone()
    bulb039.position.set(-3, 1, -11)
    bulb039.name = 'bulb039'
    const bulb038 = bulb001.clone()
    bulb038.position.set(-1, 1, -11)
    bulb038.name = 'bulb038'
    const bulb037 = bulb001.clone()
    bulb037.position.set(1, 1, -11)
    bulb037.name = 'bulb037'
    const bulb036 = bulb001.clone()
    bulb036.position.set(4, 1, -11)
    bulb036.name = 'bulb036'
    const bulb035 = bulb001.clone()
    bulb035.position.set(7, 1, -11)
    bulb035.name = 'bulb043'
    const bulb034 = bulb001.clone()
    bulb034.position.set(9, 1, -11)
    bulb034.name = 'bulb034'
    const bulb033 = bulb001.clone()
    bulb033.position.set(12, 1, -11)
    bulb033.name = 'bulb033'
    const bulb032 = bulb001.clone()
    bulb032.position.set(15, 1, -11)
    bulb032.name = 'bulb032'
    //
    const bulb047 = bulb001.clone()
    bulb047.position.set(-12, 1, -5.5)
    bulb047.name = 'bulb047'
    const bulb048 = bulb001.clone()
    bulb048.position.set(-7, 1, -5.5)
    bulb048.name = 'bulb048'
    const bulb049 = bulb001.clone()
    bulb049.position.set(-4, 1, -5.5)
    bulb049.name = 'bulb049'
    const bulb050 = bulb001.clone()
    bulb050.position.set(-1, 1, -5.5)
    bulb050.name = 'bulb050'
    const bulb051 = bulb001.clone()
    bulb051.position.set(1, 1, -5.5)
    bulb051.name = 'bulb051'
    const bulb052 = bulb001.clone()
    bulb052.position.set(4, 1, -5.5)
    bulb052.name = 'bulb052'
    const bulb053 = bulb001.clone()
    bulb053.position.set(9, 1, -5.5)
    bulb053.name = 'bulb053'
    const bulb054 = bulb001.clone()
    bulb054.position.set(11, 1, -5.5)
    bulb054.name = 'bulb054'
    //
    const bulb062 = bulb001.clone()
    bulb062.position.set(-12, 1, -2.5)
    bulb062.name = 'bulb062'
    const bulb061 = bulb001.clone()
    bulb061.position.set(-7, 1, -2.5)
    bulb061.name = 'bulb061'
    const bulb060 = bulb001.clone()
    bulb060.position.set(-4, 1, -2.5)
    bulb060.name = 'bulb060'
    const bulb059 = bulb001.clone()
    bulb059.position.set(-1, 1, -2.5)
    bulb059.name = 'bulb059'
    const bulb058 = bulb001.clone()
    bulb058.position.set(1, 1, -2.5)
    bulb058.name = 'bulb058'
    const bulb057 = bulb001.clone()
    bulb057.position.set(4, 1, -2.5)
    bulb057.name = 'bulb057'
    const bulb056 = bulb001.clone()
    bulb056.position.set(9, 1, -2.5)
    bulb056.name = 'bulb056'
    const bulb055 = bulb001.clone()
    bulb055.position.set(11, 1, -2.5)
    bulb055.name = 'bulb055'
    //
    const bulb063 = bulb001.clone()
    bulb063.position.set(-11, 1, 4)
    bulb063.name = 'bulb063'
    const bulb064 = bulb001.clone()
    bulb064.position.set(-8, 1, 4)
    bulb064.name = 'bulb064'
    const bulb065 = bulb001.clone()
    bulb065.position.set(-5, 1, 4)
    bulb065.name = 'bulb065'
    const bulb066 = bulb001.clone()
    bulb066.position.set(-3, 1, 4)
    bulb066.name = 'bulb066'
    const bulb067 = bulb001.clone()
    bulb067.position.set(-1, 1, 4)
    bulb067.name = 'bulb067'
    const bulb068 = bulb001.clone()
    bulb068.position.set(1, 1, 4)
    bulb068.name = 'bulb068'
    const bulb069 = bulb001.clone()
    bulb069.position.set(4, 1, 4)
    bulb069.name = 'bulb069'
    const bulb070 = bulb001.clone()
    bulb070.position.set(6, 1, 4)
    bulb070.name = 'bulb070'
    const bulb071 = bulb001.clone()
    bulb071.position.set(9, 1, 4)
    bulb071.name = 'bulb071'
    const bulb072 = bulb001.clone()
    bulb072.position.set(11, 1, 4)
    bulb072.name = 'bulb072'
    //
    const bulb082 = bulb001.clone()
    bulb082.position.set(-11, 1, 6)
    bulb082.name = 'bulb082'
    const bulb081 = bulb001.clone()
    bulb081.position.set(-8, 1, 6)
    bulb081.name = 'bulb081'
    const bulb080 = bulb001.clone()
    bulb080.position.set(-5, 1, 6)
    bulb080.name = 'bulb080'
    const bulb079 = bulb001.clone()
    bulb079.position.set(-3, 1, 6)
    bulb079.name = 'bulb079'
    const bulb078 = bulb001.clone()
    bulb078.position.set(-1, 1, 6)
    bulb078.name = 'bulb078'
    const bulb077 = bulb001.clone()
    bulb077.position.set(1, 1, 6)
    bulb077.name = 'bulb077'
    const bulb076 = bulb001.clone()
    bulb076.position.set(4, 1, 6)
    bulb076.name = 'bulb076'
    const bulb075 = bulb001.clone()
    bulb075.position.set(6, 1, 6)
    bulb075.name = 'bulb075'
    const bulb074 = bulb001.clone()
    bulb074.position.set(9, 1, 6)
    bulb074.name = 'bulb074'
    const bulb073 = bulb001.clone()
    bulb073.position.set(11, 1, 6)
    bulb073.name = 'bulb073'
    //
    const bulb083 = bulb001.clone()
    bulb083.position.set(-14, 1, 12)
    bulb083.name = 'bulb083'
    const bulb084 = bulb001.clone()
    bulb084.position.set(-12, 1, 12)
    bulb084.name = 'bulb084'
    const bulb085 = bulb001.clone()
    bulb085.position.set(-7, 1, 12)
    bulb085.name = 'bulb085'
    const bulb086 = bulb001.clone()
    bulb086.position.set(-4, 1, 12)
    bulb086.name = 'bulb086'
    const bulb087 = bulb001.clone()
    bulb087.position.set(-1, 1, 12)
    bulb087.name = 'bulb087'
    const bulb088 = bulb001.clone()
    bulb088.position.set(1, 1, 12)
    bulb088.name = 'bulb088'
    const bulb089 = bulb001.clone()
    bulb089.position.set(4, 1, 12)
    bulb089.name = 'bulb089'
    const bulb090 = bulb001.clone()
    bulb090.position.set(9, 1, 12)
    bulb090.name = 'bulb090'
    const bulb091 = bulb001.clone()
    bulb091.position.set(11, 1, 12)
    bulb091.name = 'bulb091'
    //
    const bulb100 = bulb001.clone()
    bulb100.position.set(-14, 1, 15)
    bulb100.name = 'bulb100'
    const bulb099 = bulb001.clone()
    bulb099.position.set(-12, 1, 15)
    bulb099.name = 'bulb099'
    const bulb098 = bulb001.clone()
    bulb098.position.set(-7, 1, 15)
    bulb098.name = 'bulb098'
    const bulb097 = bulb001.clone()
    bulb097.position.set(-4, 1, 15)
    bulb097.name = 'bulb097'
    const bulb096 = bulb001.clone()
    bulb096.position.set(-1, 1, 15)
    bulb096.name = 'bulb096'
    const bulb095 = bulb001.clone()
    bulb095.position.set(1, 1, 15)
    bulb095.name = 'bulb095'
    const bulb094 = bulb001.clone()
    bulb094.position.set(4, 1, 15)
    bulb094.name = 'bulb094'
    const bulb093 = bulb001.clone()
    bulb093.position.set(9, 1, 15)
    bulb093.name = 'bulb093'
    const bulb092 = bulb001.clone()
    bulb092.position.set(11, 1, 15)
    bulb092.name = 'bulb092'
    //
    const bulb105 = bulb001.clone()
    bulb105.position.set(-35, 1, 15)
    bulb105.name = 'bulb105'
    const bulb104 = bulb001.clone()
    bulb104.position.set(-32, 1, 15)
    bulb104.name = 'bulb104'
    const bulb103 = bulb001.clone()
    bulb103.position.set(-29, 1, 15)
    bulb103.name = 'bulb103'
    const bulb102 = bulb001.clone()
    bulb102.position.set(-26, 1, 15)
    bulb102.name = 'bulb102'
    const bulb101 = bulb001.clone()
    bulb101.position.set(-23, 1, 15)
    bulb101.name = 'bulb101'
    //
    const bulb106 = bulb001.clone()
    bulb106.position.set(-35, 1, 21)
    bulb106.name = 'bulb106'
    const bulb107 = bulb001.clone()
    bulb107.position.set(-32, 1, 22)
    bulb107.name = 'bulb107'
    const bulb108 = bulb001.clone()
    bulb108.position.set(-29, 1, 22)
    bulb108.name = 'bulb108'
    const bulb109 = bulb001.clone()
    bulb109.position.set(-26, 1, 22)
    bulb109.name = 'bulb109'
    const bulb110 = bulb001.clone()
    bulb110.position.set(-23, 1, 22)
    bulb110.name = 'bulb110'
    const bulb111 = bulb001.clone()
    bulb111.position.set(-16, 1, 22)
    bulb111.name = 'bulb111'
    const bulb112 = bulb001.clone()
    bulb112.position.set(-13, 1, 22)
    bulb112.name = 'bulb112'
    const bulb113 = bulb001.clone()
    bulb113.position.set(-10, 1, 22)
    bulb113.name = 'bulb113'
    const bulb114 = bulb001.clone()
    bulb114.position.set(-3, 1, 22)
    bulb114.name = 'bulb114'
    const bulb115 = bulb001.clone()
    bulb115.position.set(-1, 1, 22)
    bulb115.name = 'bulb115'
    const bulb116 = bulb001.clone()
    bulb116.position.set(1, 1, 22)
    bulb116.name = 'bulb116'
    const bulb117 = bulb001.clone()
    bulb117.position.set(4, 1, 22)
    bulb117.name = 'bulb117'
    const bulb118 = bulb001.clone()
    bulb118.position.set(7, 1, 22)
    bulb118.name = 'bulb118'
    const bulb119 = bulb001.clone()
    bulb119.position.set(10, 1, 22)
    bulb119.name = 'bulb119'
    const bulb120 = bulb001.clone()
    bulb120.position.set(13, 1, 22)
    bulb120.name = 'bulb120'
    switch (bulbName) {
      case 'bulb001':
        scene.add(bulb001)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb001'))
        }, 1000)
        break
      case 'bulb002':
        scene.add(bulb002)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb002'))
        }, 1000)
        break
      case 'bulb003':
        scene.add(bulb003)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb003'))
        }, 1000)
        break
      case 'bulb004':
        scene.add(bulb004)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb004'))
        }, 1000)
        break
      case 'bulb005':
        scene.add(bulb005)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb005'))
        }, 1000)
        break
      case 'bulb006':
        scene.add(bulb006)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb006'))
        }, 1000)
        break
      case 'bulb007':
        scene.add(bulb007)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb007'))
        }, 1000)
        break
      case 'bulb008':
        scene.add(bulb008)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb008'))
        }, 1000)
        break
      case 'bulb009':
        scene.add(bulb009)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb009'))
        }, 1000)
        break
      case 'bulb010':
        scene.add(bulb010)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb010'))
        }, 1000)
        break
      case 'bulb011':
        scene.add(bulb011)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb011'))
        }, 1000)
        break
      case 'bulb012':
        scene.add(bulb012)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb012'))
        }, 1000)
        break
      case 'bulb013':
        scene.add(bulb013)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb013'))
        }, 1000)
        break
      case 'bulb014':
        scene.add(bulb014)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb014'))
        }, 1000)
        break
      case 'bulb015':
        scene.add(bulb015)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb015'))
        }, 1000)
        break
      case 'bulb016':
        scene.add(bulb016)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb016'))
        }, 1000)
        break
      case 'bulb017':
        scene.add(bulb017)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb017'))
        }, 1000)
        break
      case 'bulb018':
        scene.add(bulb018)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb018'))
        }, 1000)
        break
      case 'bulb019':
        scene.add(bulb019)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb019'))
        }, 1000)
        break
      case 'bulb020':
        scene.add(bulb020)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb020'))
        }, 1000)
        break
      case 'bulb021':
        scene.add(bulb021)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb021'))
        }, 1000)
        break
      case 'bulb022':
        scene.add(bulb022)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb022'))
        }, 1000)
        break
      case 'bulb023':
        scene.add(bulb023)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb023'))
        }, 1000)
        break
      case 'bulb024':
        scene.add(bulb024)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb024'))
        }, 1000)
        break
      case 'bulb025':
        scene.add(bulb025)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb025'))
        }, 1000)
        break
      case 'bulb026':
        scene.add(bulb026)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb026'))
        }, 1000)
        break
      case 'bulb027':
        scene.add(bulb027)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb027'))
        }, 1000)
        break
      case 'bulb028':
        scene.add(bulb028)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb028'))
        }, 1000)
        break
      case 'bulb029':
        scene.add(bulb029)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb029'))
        }, 1000)
        break
      case 'bulb030':
        scene.add(bulb030)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb030'))
        }, 1000)
        break
      case 'bulb031':
        scene.add(bulb031)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb031'))
        }, 1000)
        break
      case 'bulb032':
        scene.add(bulb032)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb032'))
        }, 1000)
        break
      case 'bulb033':
        scene.add(bulb033)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb033'))
        }, 1000)
        break
      case 'bulb034':
        scene.add(bulb034)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb034'))
        }, 1000)
        break
      case 'bulb035':
        scene.add(bulb035)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb035'))
        }, 1000)
        break
      case 'bulb036':
        scene.add(bulb036)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb036'))
        }, 1000)
        break
      case 'bulb037':
        scene.add(bulb037)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb037'))
        }, 1000)
        break
      case 'bulb038':
        scene.add(bulb038)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb038'))
        }, 1000)
        break
      case 'bulb039':
        scene.add(bulb039)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb039'))
        }, 1000)
        break
      case 'bulb040':
        scene.add(bulb040)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb040'))
        }, 1000)
        break
      case 'bulb041':
        scene.add(bulb041)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb041'))
        }, 1000)
        break
      case 'bulb042':
        scene.add(bulb042)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb042'))
        }, 1000)
        break
      case 'bulb043':
        scene.add(bulb043)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb043'))
        }, 1000)
        break
      case 'bulb044':
        scene.add(bulb044)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb044'))
        }, 1000)
        break
      case 'bulb045':
        scene.add(bulb045)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb045'))
        }, 1000)
        break
      case 'bulb046':
        scene.add(bulb046)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb046'))
        }, 1000)
        break
      case 'bulb047':
        scene.add(bulb047)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb047'))
        }, 1000)
        break
      case 'bulb048':
        scene.add(bulb048)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb048'))
        }, 1000)
        break
      case 'bulb049':
        scene.add(bulb049)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb049'))
        }, 1000)
        break
      case 'bulb050':
        scene.add(bulb050)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb050'))
        }, 1000)
        break
      case 'bulb051':
        scene.add(bulb051)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb051'))
        }, 1000)
        break
      case 'bulb052':
        scene.add(bulb052)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb052'))
        }, 1000)
        break
      case 'bulb053':
        scene.add(bulb053)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb053'))
        }, 1000)
        break
      case 'bulb054':
        scene.add(bulb054)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb054'))
        }, 1000)
        break
      case 'bulb055':
        scene.add(bulb055)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb055'))
        }, 1000)
        break
      case 'bulb056':
        scene.add(bulb056)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb056'))
        }, 1000)
        break
      case 'bulb057':
        scene.add(bulb057)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb057'))
        }, 1000)
        break
      case 'bulb058':
        scene.add(bulb058)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb058'))
        }, 1000)
        break
      case 'bulb059':
        scene.add(bulb059)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb059'))
        }, 1000)
        break
      case 'bulb060':
        scene.add(bulb060)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb060'))
        }, 1000)
        break
      case 'bulb061':
        scene.add(bulb061)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb061'))
        }, 1000)
        break
      case 'bulb062':
        scene.add(bulb062)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb062'))
        }, 1000)
        break
      case 'bulb063':
        scene.add(bulb063)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb063'))
        }, 1000)
        break
      case 'bulb064':
        scene.add(bulb064)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb064'))
        }, 1000)
        break
      case 'bulb065':
        scene.add(bulb065)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb065'))
        }, 1000)
        break
      case 'bulb066':
        scene.add(bulb066)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb066'))
        }, 1000)
        break
      case 'bulb067':
        scene.add(bulb067)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb067'))
        }, 1000)
        break
      case 'bulb068':
        scene.add(bulb068)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb068'))
        }, 1000)
        break
      case 'bulb069':
        scene.add(bulb069)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb069'))
        }, 1000)
        break
      case 'bulb070':
        scene.add(bulb070)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb070'))
        }, 1000)
        break
      case 'bulb071':
        scene.add(bulb071)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb071'))
        }, 1000)
        break
      case 'bulb072':
        scene.add(bulb072)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb072'))
        }, 1000)
        break
      case 'bulb073':
        scene.add(bulb073)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb073'))
        }, 1000)
        break
      case 'bulb074':
        scene.add(bulb074)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb074'))
        }, 1000)
        break
      case 'bulb075':
        scene.add(bulb075)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb075'))
        }, 1000)
        break
      case 'bulb076':
        scene.add(bulb076)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb076'))
        }, 1000)
        break
      case 'bulb077':
        scene.add(bulb077)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb077'))
        }, 1000)
        break
      case 'bulb078':
        scene.add(bulb078)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb078'))
        }, 1000)
        break
      case 'bulb079':
        scene.add(bulb079)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb079'))
        }, 1000)
        break
      case 'bulb080':
        scene.add(bulb080)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb080'))
        }, 1000)
        break
      case 'bulb081':
        scene.add(bulb081)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb081'))
        }, 1000)
        break
      case 'bulb082':
        scene.add(bulb082)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb082'))
        }, 1000)
        break
      case 'bulb083':
        scene.add(bulb083)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb083'))
        }, 1000)
        break
      case 'bulb084':
        scene.add(bulb084)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb084'))
        }, 1000)
        break
      case 'bulb085':
        scene.add(bulb085)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb085'))
        }, 1000)
        break
      case 'bulb086':
        scene.add(bulb086)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb086'))
        }, 1000)
        break
      case 'bulb087':
        scene.add(bulb087)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb087'))
        }, 1000)
        break
      case 'bulb088':
        scene.add(bulb088)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb088'))
        }, 1000)
        break
      case 'bulb089':
        scene.add(bulb089)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb089'))
        }, 1000)
        break
      case 'bulb090':
        scene.add(bulb090)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb090'))
        }, 1000)
        break
      case 'bulb091':
        scene.add(bulb091)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb091'))
        }, 1000)
        break
      case 'bulb092':
        scene.add(bulb092)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb092'))
        }, 1000)
        break
      case 'bulb093':
        scene.add(bulb093)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb093'))
        }, 1000)
        break
      case 'bulb094':
        scene.add(bulb094)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb094'))
        }, 1000)
        break
      case 'bulb095':
        scene.add(bulb095)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb095'))
        }, 1000)
        break
      case 'bulb096':
        scene.add(bulb096)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb096'))
        }, 1000)
        break
      case 'bulb097':
        scene.add(bulb097)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb097'))
        }, 1000)
        break
      case 'bulb098':
        scene.add(bulb098)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb098'))
        }, 1000)
        break
      case 'bulb099':
        scene.add(bulb099)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb099'))
        }, 1000)
        break
      case 'bulb100':
        scene.add(bulb100)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb100'))
        }, 1000)
        break
      case 'bulb101':
        scene.add(bulb101)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb101'))
        }, 1000)
        break
      case 'bulb102':
        scene.add(bulb102)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb102'))
        }, 1000)
        break
      case 'bulb103':
        scene.add(bulb103)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb103'))
        }, 1000)
        break
      case 'bulb104':
        scene.add(bulb104)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb104'))
        }, 1000)
        break
      case 'bulb105':
        scene.add(bulb105)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb105'))
        }, 1000)
        break
      case 'bulb106':
        scene.add(bulb106)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb106'))
        }, 1000)
        break
      case 'bulb107':
        scene.add(bulb107)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb107'))
        }, 1000)
        break
      case 'bulb108':
        scene.add(bulb108)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb108'))
        }, 1000)
        break
      case 'bulb109':
        scene.add(bulb109)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb109'))
        }, 1000)
        break
      case 'bulb110':
        scene.add(bulb110)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb110'))
        }, 1000)
        break
      case 'bulb111':
        scene.add(bulb111)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb111'))
        }, 1000)
        break
      case 'bulb112':
        scene.add(bulb112)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb112'))
        }, 1000)
        break
      case 'bulb113':
        scene.add(bulb113)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb113'))
        }, 1000)
        break
      case 'bulb114':
        scene.add(bulb114)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb114'))
        }, 1000)
        break
      case 'bulb115':
        scene.add(bulb115)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb115'))
        }, 1000)
        break
      case 'bulb116':
        scene.add(bulb116)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb116'))
        }, 1000)
        break
      case 'bulb117':
        scene.add(bulb117)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb117'))
        }, 1000)
        break
      case 'bulb118':
        scene.add(bulb118)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb118'))
        }, 1000)
        break
      case 'bulb119':
        scene.add(bulb119)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb119'))
        }, 1000)
        break
      case 'bulb120':
        scene.add(bulb120)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('bulb120'))
        }, 1000)
        break
    }
  })
}
