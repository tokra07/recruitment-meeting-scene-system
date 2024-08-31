import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { scene } from '@/model/index'
export function chooseControls (chooseName) {
  const loader = new GLTFLoader()
  loader.load('glb/choose.glb', (gltf) => {
    console.log(gltf)
    const choose001 = gltf.scene
    choose001.scale.set(4, 4, 4)
    choose001.traverse(function (obj) {
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
    choose001.position.set(22, 1, -19)
    choose001.castShadow = true
    choose001.receiveShadow = true
    choose001.name = 'choose001'
    const choose002 = choose001.clone()
    choose002.position.set(19, 1, -19)
    choose002.name = 'choose002'
    const choose003 = choose001.clone()
    choose003.position.set(16, 1, -19)
    choose003.name = 'choose003'
    const choose004 = choose001.clone()
    choose004.position.set(11, 1, -22)
    choose004.name = 'choose004'
    const choose005 = choose001.clone()
    choose005.position.set(8, 1, -22)
    choose005.name = 'choose005'
    const choose006 = choose001.clone()
    choose006.position.set(4, 1, -22)
    choose006.name = 'choose006'
    const choose007 = choose001.clone()
    choose007.position.set(2, 1, -22)
    choose007.name = 'choose007'
    const choose008 = choose001.clone()
    choose008.position.set(-2, 1, -22)
    choose008.name = 'choose008'
    const choose009 = choose001.clone()
    choose009.position.set(-4, 1, -22)
    choose009.name = 'choose009'
    const choose015 = choose001.clone()
    choose015.position.set(-24, 1, -19)
    choose015.name = 'choose015'
    const choose014 = choose001.clone()
    choose014.position.set(-21, 1, -19)
    choose014.name = 'choose014'
    const choose013 = choose001.clone()
    choose013.position.set(-18, 1, -19)
    choose013.name = 'choose013'
    const choose012 = choose001.clone()
    choose012.position.set(-15, 1, -22)
    choose012.name = 'choose012'
    const choose011 = choose001.clone()
    choose011.position.set(-12, 1, -22)
    choose011.name = 'choose011'
    const choose010 = choose001.clone()
    choose010.position.set(-7, 1, -22)
    choose010.name = 'choose010'
    const choose016 = choose001.clone()
    choose016.position.set(-27, 1, -19)
    choose016.name = 'choose016'
    const choose017 = choose001.clone()
    choose017.position.set(-21, 1, -14)
    choose017.name = 'choose017'
    const choose018 = choose001.clone()
    choose018.position.set(-19, 1, -14)
    choose018.name = 'choose018'
    const choose019 = choose001.clone()
    choose019.position.set(-16, 1, -14)
    choose019.name = 'choose019'
    const choose020 = choose001.clone()
    choose020.position.set(-13, 1, -14)
    choose020.name = 'choose020'
    const choose021 = choose001.clone()
    choose021.position.set(-11, 1, -14)
    choose021.name = 'choose021'
    const choose022 = choose001.clone()
    choose022.position.set(-8, 1, -14)
    choose022.name = 'choose022'
    const choose023 = choose001.clone()
    choose023.position.set(-5, 1, -14)
    choose023.name = 'choose023'
    const choose024 = choose001.clone()
    choose024.position.set(-3, 1, -14)
    choose024.name = 'choose024'
    const choose025 = choose001.clone()
    choose025.position.set(-0.3, 1, -14)
    choose025.name = 'choose025'
    const choose026 = choose001.clone()
    choose026.position.set(1, 1, -14)
    choose026.name = 'choose026'
    const choose027 = choose001.clone()
    choose027.position.set(4, 1, -14)
    choose027.name = 'choose027'
    const choose028 = choose001.clone()
    choose028.position.set(7, 1, -14)
    choose028.name = 'choose028'
    const choose029 = choose001.clone()
    choose029.position.set(9, 1, -14)
    choose029.name = 'choose029'
    const choose030 = choose001.clone()
    choose030.position.set(12, 1, -14)
    choose030.name = 'choose030'
    const choose031 = choose001.clone()
    choose031.position.set(15, 1, -14)
    choose031.name = 'choose031'
    //
    const choose046 = choose001.clone()
    choose046.position.set(-21, 1, -11)
    choose046.name = 'choose046'
    const choose045 = choose001.clone()
    choose045.position.set(-19, 1, -11)
    choose045.name = 'choose045'
    const choose044 = choose001.clone()
    choose044.position.set(-16, 1, -11)
    choose044.name = 'choose044'
    const choose043 = choose001.clone()
    choose043.position.set(-13, 1, -11)
    choose043.name = 'choose043'
    const choose042 = choose001.clone()
    choose042.position.set(-11, 1, -11)
    choose042.name = 'choose042'
    const choose041 = choose001.clone()
    choose041.position.set(-8, 1, -11)
    choose041.name = 'choose041'
    const choose040 = choose001.clone()
    choose040.position.set(-5, 1, -11)
    choose040.name = 'choose040'
    const choose039 = choose001.clone()
    choose039.position.set(-3, 1, -11)
    choose039.name = 'choose039'
    const choose038 = choose001.clone()
    choose038.position.set(-1, 1, -11)
    choose038.name = 'choose038'
    const choose037 = choose001.clone()
    choose037.position.set(1, 1, -11)
    choose037.name = 'choose037'
    const choose036 = choose001.clone()
    choose036.position.set(4, 1, -11)
    choose036.name = 'choose036'
    const choose035 = choose001.clone()
    choose035.position.set(7, 1, -11)
    choose035.name = 'choose035'
    const choose034 = choose001.clone()
    choose034.position.set(9, 1, -11)
    choose034.name = 'choose034'
    const choose033 = choose001.clone()
    choose033.position.set(12, 1, -11)
    choose033.name = 'choose033'
    const choose032 = choose001.clone()
    choose032.position.set(15, 1, -11)
    choose032.name = 'choose032'
    //
    const choose047 = choose001.clone()
    choose047.position.set(-12, 1, -5.5)
    choose047.name = 'choose047'
    const choose048 = choose001.clone()
    choose048.position.set(-7, 1, -5.5)
    choose048.name = 'choose048'
    const choose049 = choose001.clone()
    choose049.position.set(-4, 1, -5.5)
    choose049.name = 'choose049'
    const choose050 = choose001.clone()
    choose050.position.set(-1, 1, -5.5)
    choose050.name = 'choose050'
    const choose051 = choose001.clone()
    choose051.position.set(1, 1, -5.5)
    choose051.name = 'choose051'
    const choose052 = choose001.clone()
    choose052.position.set(4, 1, -5.5)
    choose052.name = 'choose052'
    const choose053 = choose001.clone()
    choose053.position.set(9, 1, -5.5)
    choose053.name = 'choose053'
    const choose054 = choose001.clone()
    choose054.position.set(11, 1, -5.5)
    choose054.name = 'choose054'
    //
    const choose062 = choose001.clone()
    choose062.position.set(-12, 1, -2.5)
    choose062.name = 'choose062'
    const choose061 = choose001.clone()
    choose061.position.set(-7, 1, -2.5)
    choose061.name = 'choose061'
    const choose060 = choose001.clone()
    choose060.position.set(-4, 1, -2.5)
    choose060.name = 'choose060'
    const choose059 = choose001.clone()
    choose059.position.set(-1, 1, -2.5)
    choose059.name = 'choose059'
    const choose058 = choose001.clone()
    choose058.position.set(1, 1, -2.5)
    choose058.name = 'choose058'
    const choose057 = choose001.clone()
    choose057.position.set(4, 1, -2.5)
    choose057.name = 'choose057'
    const choose056 = choose001.clone()
    choose056.position.set(9, 1, -2.5)
    choose056.name = 'choose056'
    const choose055 = choose001.clone()
    choose055.position.set(11, 1, -2.5)
    choose055.name = 'choose055'
    //
    const choose063 = choose001.clone()
    choose063.position.set(-11, 1, 4)
    choose063.name = 'choose063'
    const choose064 = choose001.clone()
    choose064.position.set(-8, 1, 4)
    choose064.name = 'choose064'
    const choose065 = choose001.clone()
    choose065.position.set(-5, 1, 4)
    choose065.name = 'choose065'
    const choose066 = choose001.clone()
    choose066.position.set(-3, 1, 4)
    choose066.name = 'choose066'
    const choose067 = choose001.clone()
    choose067.position.set(-1, 1, 4)
    choose067.name = 'choose067'
    const choose068 = choose001.clone()
    choose068.position.set(1, 1, 4)
    choose068.name = 'choose068'
    const choose069 = choose001.clone()
    choose069.position.set(4, 1, 4)
    choose069.name = 'choose069'
    const choose070 = choose001.clone()
    choose070.position.set(6, 1, 4)
    choose070.name = 'choose070'
    const choose071 = choose001.clone()
    choose071.position.set(9, 1, 4)
    choose071.name = 'choose071'
    const choose072 = choose001.clone()
    choose072.position.set(11, 1, 4)
    choose072.name = 'choose072'
    //
    const choose082 = choose001.clone()
    choose082.position.set(-11, 1, 6)
    choose082.name = 'choose082'
    const choose081 = choose001.clone()
    choose081.position.set(-8, 1, 6)
    choose081.name = 'choose081'
    const choose080 = choose001.clone()
    choose080.position.set(-5, 1, 6)
    choose080.name = 'choose080'
    const choose079 = choose001.clone()
    choose079.position.set(-3, 1, 6)
    choose079.name = 'choose079'
    const choose078 = choose001.clone()
    choose078.position.set(-1, 1, 6)
    choose078.name = 'choose078'
    const choose077 = choose001.clone()
    choose077.position.set(1, 1, 6)
    choose077.name = 'choose077'
    const choose076 = choose001.clone()
    choose076.position.set(4, 1, 6)
    choose076.name = 'choose076'
    const choose075 = choose001.clone()
    choose075.position.set(6, 1, 6)
    choose075.name = 'choose075'
    const choose074 = choose001.clone()
    choose074.position.set(9, 1, 6)
    choose074.name = 'choose074'
    const choose073 = choose001.clone()
    choose073.position.set(11, 1, 6)
    choose073.name = 'choose073'
    //
    const choose083 = choose001.clone()
    choose083.position.set(-14, 1, 12)
    choose083.name = 'choose083'
    const choose084 = choose001.clone()
    choose084.position.set(-12, 1, 12)
    choose084.name = 'choose084'
    const choose085 = choose001.clone()
    choose085.position.set(-7, 1, 12)
    choose085.name = 'choose085'
    const choose086 = choose001.clone()
    choose086.position.set(-4, 1, 12)
    choose086.name = 'choose086'
    const choose087 = choose001.clone()
    choose087.position.set(-1, 1, 12)
    choose087.name = 'choose087'
    const choose088 = choose001.clone()
    choose088.position.set(1, 1, 12)
    choose088.name = 'choose088'
    const choose089 = choose001.clone()
    choose089.position.set(4, 1, 12)
    choose089.name = 'choose089'
    const choose090 = choose001.clone()
    choose090.position.set(9, 1, 12)
    choose090.name = 'choose090'
    const choose091 = choose001.clone()
    choose091.position.set(11, 1, 12)
    choose091.name = 'choose091'
    //
    const choose100 = choose001.clone()
    choose100.position.set(-14, 1, 15)
    choose100.name = 'choose100'
    const choose099 = choose001.clone()
    choose099.position.set(-12, 1, 15)
    choose099.name = 'choose099'
    const choose098 = choose001.clone()
    choose098.position.set(-7, 1, 15)
    choose098.name = 'choose098'
    const choose097 = choose001.clone()
    choose097.position.set(-4, 1, 15)
    choose097.name = 'choose097'
    const choose096 = choose001.clone()
    choose096.position.set(-1, 1, 15)
    choose096.name = 'choose096'
    const choose095 = choose001.clone()
    choose095.position.set(1, 1, 15)
    choose095.name = 'choose095'
    const choose094 = choose001.clone()
    choose094.position.set(4, 1, 15)
    choose094.name = 'choose094'
    const choose093 = choose001.clone()
    choose093.position.set(9, 1, 15)
    choose093.name = 'choose093'
    const choose092 = choose001.clone()
    choose092.position.set(11, 1, 15)
    choose092.name = 'choose092'
    //
    const choose105 = choose001.clone()
    choose105.position.set(-35, 1, 15)
    choose105.name = 'choose105'
    const choose104 = choose001.clone()
    choose104.position.set(-32, 1, 15)
    choose104.name = 'choose104'
    const choose103 = choose001.clone()
    choose103.position.set(-29, 1, 15)
    choose103.name = 'choose103'
    const choose102 = choose001.clone()
    choose102.position.set(-26, 1, 15)
    choose102.name = 'choose102'
    const choose101 = choose001.clone()
    choose101.position.set(-23, 1, 15)
    choose101.name = 'choose101'
    //
    const choose106 = choose001.clone()
    choose106.position.set(-35, 1, 21)
    choose106.name = 'choose106'
    const choose107 = choose001.clone()
    choose107.position.set(-32, 1, 22)
    choose107.name = 'choose107'
    const choose108 = choose001.clone()
    choose108.position.set(-29, 1, 22)
    choose108.name = 'choose108'
    const choose109 = choose001.clone()
    choose109.position.set(-26, 1, 22)
    choose109.name = 'choose109'
    const choose110 = choose001.clone()
    choose110.position.set(-23, 1, 22)
    choose110.name = 'choose110'
    const choose111 = choose001.clone()
    choose111.position.set(-16, 1, 22)
    choose111.name = 'choose111'
    const choose112 = choose001.clone()
    choose112.position.set(-13, 1, 22)
    choose112.name = 'choose112'
    const choose113 = choose001.clone()
    choose113.position.set(-10, 1, 22)
    choose113.name = 'choose113'
    const choose114 = choose001.clone()
    choose114.position.set(-3, 1, 22)
    choose114.name = 'choose114'
    const choose115 = choose001.clone()
    choose115.position.set(-1, 1, 22)
    choose115.name = 'choose115'
    const choose116 = choose001.clone()
    choose116.position.set(1, 1, 22)
    choose116.name = 'choose116'
    const choose117 = choose001.clone()
    choose117.position.set(4, 1, 22)
    choose117.name = 'choose117'
    const choose118 = choose001.clone()
    choose118.position.set(7, 1, 22)
    choose118.name = 'choose118'
    const choose119 = choose001.clone()
    choose119.position.set(10, 1, 22)
    choose119.name = 'choose119'
    const choose120 = choose001.clone()
    choose120.position.set(13, 1, 22)
    choose120.name = 'choose120'
    switch (chooseName) {
      case 1:
        scene.add(choose001)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose001'))
        }, 5000)
        break
      case 2:
        scene.add(choose002)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose002'))
        }, 5000)
        break
      case 3:
        scene.add(choose003)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose003'))
        }, 5000)
        break
      case 4:
        scene.add(choose004)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose004'))
        }, 5000)
        break
      case 5:
        scene.add(choose005)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose005'))
        }, 5000)
        break
      case 6:
        scene.add(choose006)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose006'))
        }, 5000)
        break
      case 7:
        scene.add(choose007)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose007'))
        }, 5000)
        break
      case 8:
        scene.add(choose008)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose008'))
        }, 5000)
        break
      case 9:
        scene.add(choose009)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose009'))
        }, 5000)
        break
      case 10:
        scene.add(choose010)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose010'))
        }, 5000)
        break
      case 11:
        scene.add(choose011)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose011'))
        }, 5000)
        break
      case 12:
        scene.add(choose012)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose012'))
        }, 5000)
        break
      case 13:
        scene.add(choose013)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose013'))
        }, 5000)
        break
      case 14:
        scene.add(choose014)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose014'))
        }, 5000)
        break
      case 15:
        scene.add(choose015)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose015'))
        }, 5000)
        break
      case 16:
        scene.add(choose016)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose016'))
        }, 5000)
        break
      case 17:
        scene.add(choose017)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose017'))
        }, 5000)
        break
      case 18:
        scene.add(choose018)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose018'))
        }, 5000)
        break
      case 19:
        scene.add(choose019)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose019'))
        }, 5000)
        break
      case 20:
        scene.add(choose020)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose020'))
        }, 5000)
        break
      case 21:
        scene.add(choose021)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose021'))
        }, 5000)
        break
      case 22:
        scene.add(choose022)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose022'))
        }, 5000)
        break
      case 23:
        scene.add(choose023)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose023'))
        }, 5000)
        break
      case 24:
        scene.add(choose024)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose024'))
        }, 5000)
        break
      case 25:
        scene.add(choose025)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose025'))
        }, 5000)
        break
      case 26:
        scene.add(choose026)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose026'))
        }, 5000)
        break
      case 27:
        scene.add(choose027)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose027'))
        }, 5000)
        break
      case 28:
        scene.add(choose028)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose028'))
        }, 5000)
        break
      case 29:
        scene.add(choose029)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose029'))
        }, 5000)
        break
      case 30:
        scene.add(choose030)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose030'))
        }, 5000)
        break
      case 31:
        scene.add(choose031)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose031'))
        }, 5000)
        break
      case 32:
        scene.add(choose032)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose032'))
        }, 5000)
        break
      case 33:
        scene.add(choose033)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose033'))
        }, 5000)
        break
      case 34:
        scene.add(choose034)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose034'))
        }, 5000)
        break
      case 35:
        scene.add(choose035)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose035'))
        }, 5000)
        break
      case 36:
        scene.add(choose036)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose036'))
        }, 5000)
        break
      case 37:
        scene.add(choose037)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose037'))
        }, 5000)
        break
      case 38:
        scene.add(choose038)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose038'))
        }, 5000)
        break
      case 39:
        scene.add(choose039)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose039'))
        }, 5000)
        break
      case 40:
        scene.add(choose040)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose040'))
        }, 5000)
        break
      case 41:
        scene.add(choose041)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose041'))
        }, 5000)
        break
      case 42:
        scene.add(choose042)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose042'))
        }, 5000)
        break
      case 43:
        scene.add(choose043)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose043'))
        }, 5000)
        break
      case 44:
        scene.add(choose044)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose044'))
        }, 5000)
        break
      case 45:
        scene.add(choose045)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose045'))
        }, 5000)
        break
      case 46:
        scene.add(choose046)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose046'))
        }, 5000)
        break
      case 47:
        scene.add(choose047)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose047'))
        }, 5000)
        break
      case 48:
        scene.add(choose048)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose048'))
        }, 5000)
        break
      case 49:
        scene.add(choose049)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose049'))
        }, 5000)
        break
      case 50:
        scene.add(choose050)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose050'))
        }, 5000)
        break
      case 51:
        scene.add(choose051)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose051'))
        }, 5000)
        break
      case 52:
        scene.add(choose052)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose052'))
        }, 5000)
        break
      case 53:
        scene.add(choose053)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose053'))
        }, 5000)
        break
      case 54:
        scene.add(choose054)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose054'))
        }, 5000)
        break
      case 55:
        scene.add(choose055)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose055'))
        }, 5000)
        break
      case 56:
        scene.add(choose056)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose056'))
        }, 5000)
        break
      case 57:
        scene.add(choose057)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose057'))
        }, 5000)
        break
      case 58:
        scene.add(choose058)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose058'))
        }, 5000)
        break
      case 59:
        scene.add(choose059)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose059'))
        }, 5000)
        break
      case 60:
        scene.add(choose060)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose060'))
        }, 5000)
        break
      case 61:
        scene.add(choose061)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose061'))
        }, 5000)
        break
      case 62:
        scene.add(choose062)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose062'))
        }, 5000)
        break
      case 63:
        scene.add(choose063)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose063'))
        }, 5000)
        break
      case 64:
        scene.add(choose064)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose064'))
        }, 5000)
        break
      case 65:
        scene.add(choose065)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose065'))
        }, 5000)
        break
      case 66:
        scene.add(choose066)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose066'))
        }, 5000)
        break
      case 67:
        scene.add(choose067)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose067'))
        }, 5000)
        break
      case 68:
        scene.add(choose068)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose068'))
        }, 5000)
        break
      case 69:
        scene.add(choose069)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose069'))
        }, 5000)
        break
      case 70:
        scene.add(choose070)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose070'))
        }, 5000)
        break
      case 71:
        scene.add(choose071)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose071'))
        }, 5000)
        break
      case 72:
        scene.add(choose072)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose072'))
        }, 5000)
        break
      case 73:
        scene.add(choose073)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose073'))
        }, 5000)
        break
      case 74:
        scene.add(choose074)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose074'))
        }, 5000)
        break
      case 75:
        scene.add(choose075)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose075'))
        }, 5000)
        break
      case 76:
        scene.add(choose076)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose076'))
        }, 5000)
        break
      case 77:
        scene.add(choose077)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose077'))
        }, 5000)
        break
      case 78:
        scene.add(choose078)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose078'))
        }, 5000)
        break
      case 79:
        scene.add(choose079)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose079'))
        }, 5000)
        break
      case 80:
        scene.add(choose080)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose080'))
        }, 5000)
        break
      case 81:
        scene.add(choose081)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose081'))
        }, 5000)
        break
      case 82:
        scene.add(choose082)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose082'))
        }, 5000)
        break
      case 83:
        scene.add(choose083)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose083'))
        }, 5000)
        break
      case 84:
        scene.add(choose084)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose084'))
        }, 5000)
        break
      case 85:
        scene.add(choose085)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose085'))
        }, 5000)
        break
      case 86:
        scene.add(choose086)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose086'))
        }, 5000)
        break
      case 87:
        scene.add(choose087)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose087'))
        }, 5000)
        break
      case 88:
        scene.add(choose088)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose088'))
        }, 5000)
        break
      case 89:
        scene.add(choose089)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose089'))
        }, 5000)
        break
      case 90:
        scene.add(choose090)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose090'))
        }, 5000)
        break
      case 91:
        scene.add(choose091)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose091'))
        }, 5000)
        break
      case 92:
        scene.add(choose092)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose092'))
        }, 5000)
        break
      case 93:
        scene.add(choose093)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose093'))
        }, 5000)
        break
      case 94:
        scene.add(choose094)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose094'))
        }, 5000)
        break
      case 95:
        scene.add(choose095)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose095'))
        }, 5000)
        break
      case 96:
        scene.add(choose096)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose096'))
        }, 5000)
        break
      case 97:
        scene.add(choose097)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose097'))
        }, 5000)
        break
      case 98:
        scene.add(choose098)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose098'))
        }, 5000)
        break
      case 99:
        scene.add(choose099)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose099'))
        }, 5000)
        break
      case 100:
        scene.add(choose100)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose100'))
        }, 5000)
        break
      case 101:
        scene.add(choose101)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose101'))
        }, 5000)
        break
      case 102:
        scene.add(choose102)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose102'))
        }, 5000)
        break
      case 103:
        scene.add(choose103)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose103'))
        }, 5000)
        break
      case 104:
        scene.add(choose104)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose104'))
        }, 5000)
        break
      case 105:
        scene.add(choose105)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose105'))
        }, 5000)
        break
      case 106:
        scene.add(choose106)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose106'))
        }, 5000)
        break
      case 107:
        scene.add(choose107)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose107'))
        }, 5000)
        break
      case 108:
        scene.add(choose108)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose108'))
        }, 5000)
        break
      case 109:
        scene.add(choose109)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose109'))
        }, 5000)
        break
      case 110:
        scene.add(choose110)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose110'))
        }, 5000)
        break
      case 111:
        scene.add(choose111)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose111'))
        }, 5000)
        break
      case 112:
        scene.add(choose112)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose112'))
        }, 5000)
        break
      case 113:
        scene.add(choose113)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose113'))
        }, 5000)
        break
      case 114:
        scene.add(choose114)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose114'))
        }, 5000)
        break
      case 115:
        scene.add(choose115)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose115'))
        }, 5000)
        break
      case 116:
        scene.add(choose116)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose116'))
        }, 5000)
        break
      case 117:
        scene.add(choose117)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose117'))
        }, 5000)
        break
      case 118:
        scene.add(choose118)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose118'))
        }, 5000)
        break
      case 119:
        scene.add(choose119)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose119'))
        }, 5000)
        break
      case 120:
        scene.add(choose120)
        setTimeout(() => {
          scene.remove(scene.getObjectByName('choose120'))
        }, 5000)
        break
    }
  })
}
