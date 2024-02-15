import * as THREE from 'three'
import { scene } from '@/model/index'
export function lightControls (lightName) {
  const spotLight001 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight001.name = 'spotLight001'
  spotLight001.position.set(-27, 2, -19)
  spotLight001.target.position.set(-27, 0, -19)
  spotLight001.intensity = 5000.0
  spotLight001.decay = 0.0
  spotLight001.angle = Math.PI / 5
  const spotLight002 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight002.name = 'spotLight002'
  spotLight002.position.set(-23.3, 2, -19)
  spotLight002.target.position.set(-23.3, 0, -19)
  spotLight002.intensity = 5000.0
  spotLight002.decay = 0.0
  spotLight002.angle = Math.PI / 5
  const spotLight003 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight003.name = 'spotLight003'
  spotLight003.position.set(-20.8, 2, -19)
  spotLight003.target.position.set(-20.8, 0, -19)
  spotLight003.intensity = 5000.0
  spotLight003.decay = 0.0
  spotLight003.angle = Math.PI / 5
  const spotLight004 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight004.name = 'spotLight004'
  spotLight004.position.set(-17.8, 2, -19)
  spotLight004.target.position.set(-17.8, 0, -19)
  spotLight004.intensity = 5000.0
  spotLight004.decay = 0.0
  spotLight004.angle = Math.PI / 5
  const spotLight005 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight005.name = 'spotLight005'
  spotLight005.position.set(-14, 2, -22)
  spotLight005.target.position.set(-14, 0, -22)
  spotLight005.intensity = 5000.0
  spotLight005.decay = 0.0
  spotLight005.angle = Math.PI / 5
  const spotLight006 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight006.name = 'spotLight006'
  spotLight006.position.set(-11, 2, -22)
  spotLight006.target.position.set(-11, 0, -22)
  spotLight006.intensity = 5000.0
  spotLight006.decay = 0.0
  spotLight006.angle = Math.PI / 5
  const spotLight007 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight007.name = 'spotLight007'
  spotLight007.position.set(-6.3, 2, -22)
  spotLight007.target.position.set(-6.3, 0, -22)
  spotLight007.intensity = 5000.0
  spotLight007.decay = 0.0
  spotLight007.angle = Math.PI / 5
  const spotLight008 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight008.name = 'spotLight008'
  spotLight008.position.set(-3.3, 2, -22)
  spotLight008.target.position.set(-3.3, 0, -22)
  spotLight008.intensity = 5000.0
  spotLight008.decay = 0.0
  spotLight008.angle = Math.PI / 5
  const spotLight009 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight009.name = 'spotLight009'
  spotLight009.position.set(-1, 2, -22)
  spotLight009.target.position.set(-1, 0, -22)
  spotLight009.intensity = 5000.0
  spotLight009.decay = 0.0
  spotLight009.angle = Math.PI / 5
  const spotLight010 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight010.name = 'spotLight010'
  spotLight010.position.set(2, 2, -22)
  spotLight010.target.position.set(2, 0, -22)
  spotLight010.intensity = 5000.0
  spotLight010.decay = 0.0
  spotLight010.angle = Math.PI / 5
  const spotLight011 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight011.name = 'spotLight011'
  spotLight011.position.set(4.7, 2, -22)
  spotLight011.target.position.set(4.7, 0, -22)
  spotLight011.intensity = 5000.0
  spotLight011.decay = 0.0
  spotLight011.angle = Math.PI / 5
  const spotLight012 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight012.name = 'spotLight012'
  spotLight012.position.set(9, 2, -22)
  spotLight012.target.position.set(9, 0, -22)
  spotLight012.intensity = 5000.0
  spotLight012.decay = 0.0
  spotLight012.angle = Math.PI / 5
  const spotLight013 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight013.name = 'spotLight013'
  spotLight013.position.set(12, 2, -22)
  spotLight013.target.position.set(12, 0, -22)
  spotLight013.intensity = 5000.0
  spotLight013.decay = 0.0
  spotLight013.angle = Math.PI / 5
  const spotLight014 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight014.name = 'spotLight014'
  spotLight014.position.set(17, 2, -19)
  spotLight014.target.position.set(17, 0, -19)
  spotLight014.intensity = 5000.0
  spotLight014.decay = 0.0
  spotLight014.angle = Math.PI / 5
  const spotLight015 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight015.name = 'spotLight015'
  spotLight015.position.set(20, 2, -19)
  spotLight015.target.position.set(20, 0, -19)
  spotLight015.intensity = 5000.0
  spotLight015.decay = 0.0
  spotLight015.angle = Math.PI / 5
  const spotLight016 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight016.name = 'spotLight016'
  spotLight016.position.set(23, 2, -19)
  spotLight016.target.position.set(23, 0, -19)
  spotLight016.intensity = 5000.0
  spotLight016.decay = 0.0
  spotLight016.angle = Math.PI / 5
  const spotLight017 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight017.name = 'spotLight017'
  spotLight017.position.set(-20.8, 2, -14)
  spotLight017.target.position.set(-20.8, 0, -14)
  spotLight017.intensity = 5000.0
  spotLight017.decay = 0.0
  spotLight017.angle = Math.PI / 5
  const spotLight018 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight018.name = 'spotLight018'
  spotLight018.position.set(-18.1, 2, -14)
  spotLight018.target.position.set(-18.1, 0, -14)
  spotLight018.intensity = 5000.0
  spotLight018.decay = 0.0
  spotLight018.angle = Math.PI / 5
  const spotLight019 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight019.name = 'spotLight019'
  spotLight019.position.set(-15.5, 2, -14)
  spotLight019.target.position.set(-15.5, 0, -14)
  spotLight019.intensity = 5000.0
  spotLight019.decay = 0.0
  spotLight019.angle = Math.PI / 5
  const spotLight020 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight020.name = 'spotLight020'
  spotLight020.position.set(-12.8, 2, -14)
  spotLight020.target.position.set(-12.8, 0, -14)
  spotLight020.intensity = 5000.0
  spotLight020.decay = 0.0
  spotLight020.angle = Math.PI / 5
  const spotLight021 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight021.name = 'spotLight021'
  spotLight021.position.set(-10.1, 2, -14)
  spotLight021.target.position.set(-10.1, 0, -14)
  spotLight021.intensity = 5000.0
  spotLight021.decay = 0.0
  spotLight021.angle = Math.PI / 5
  const spotLight022 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight022.name = 'spotLight022'
  spotLight022.position.set(-7.4, 2, -14)
  spotLight022.target.position.set(-7.4, 0, -14)
  spotLight022.intensity = 5000.0
  spotLight022.decay = 0.0
  spotLight022.angle = Math.PI / 5
  const spotLight023 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight023.name = 'spotLight023'
  spotLight023.position.set(-4.7, 2, -14)
  spotLight023.target.position.set(-4.7, 0, -14)
  spotLight023.intensity = 5000.0
  spotLight023.decay = 0.0
  spotLight023.angle = Math.PI / 5
  const spotLight024 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight024.name = 'spotLight024'
  spotLight024.position.set(-2.3, 2, -14)
  spotLight024.target.position.set(-2.3, 0, -14)
  spotLight024.intensity = 5000.0
  spotLight024.decay = 0.0
  spotLight024.angle = Math.PI / 5
  const spotLight025 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight025.name = 'spotLight025'
  spotLight025.position.set(0.3, 2, -14)
  spotLight025.target.position.set(0.3, 0, -14)
  spotLight025.intensity = 5000.0
  spotLight025.decay = 0.0
  spotLight025.angle = Math.PI / 5
  const spotLight026 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight026.name = 'spotLight026'
  spotLight026.position.set(2.9, 2, -14)
  spotLight026.target.position.set(2.9, 0, -14)
  spotLight026.intensity = 5000.0
  spotLight026.decay = 0.0
  spotLight026.angle = Math.PI / 5
  const spotLight027 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight027.name = 'spotLight027'
  spotLight027.position.set(5.5, 2, -14)
  spotLight027.target.position.set(5.5, 0, -14)
  spotLight027.intensity = 5000.0
  spotLight027.decay = 0.0
  spotLight027.angle = Math.PI / 5
  const spotLight028 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight028.name = 'spotLight028'
  spotLight028.position.set(8.1, 2, -14)
  spotLight028.target.position.set(8.1, 0, -14)
  spotLight028.intensity = 5000.0
  spotLight028.decay = 0.0
  spotLight028.angle = Math.PI / 5
  const spotLight029 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight029.name = 'spotLight029'
  spotLight029.position.set(10.8, 2, -14)
  spotLight029.target.position.set(10.8, 0, -14)
  spotLight029.intensity = 5000.0
  spotLight029.decay = 0.0
  spotLight029.angle = Math.PI / 5
  const spotLight030 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight030.name = 'spotLight030'
  spotLight030.position.set(13.4, 2, -14)
  spotLight030.target.position.set(13.4, 0, -14)
  spotLight030.intensity = 5000.0
  spotLight030.decay = 0.0
  spotLight030.angle = Math.PI / 5
  const spotLight031 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight031.name = 'spotLight031'
  spotLight031.position.set(16, 2, -14)
  spotLight031.target.position.set(16, 0, -14)
  spotLight031.intensity = 5000.0
  spotLight031.decay = 0.0
  spotLight031.angle = Math.PI / 5
  const spotLight032 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight032.name = 'spotLight032'
  spotLight032.position.set(-20.8, 2, -11)
  spotLight032.target.position.set(-20.8, 0, -11)
  spotLight032.intensity = 5000.0
  spotLight032.decay = 0.0
  spotLight032.angle = Math.PI / 5
  const spotLight033 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight033.name = 'spotLight033'
  spotLight033.position.set(-18.1, 2, -11)
  spotLight033.target.position.set(-18.1, 0, -11)
  spotLight033.intensity = 5000.0
  spotLight033.decay = 0.0
  spotLight033.angle = Math.PI / 5
  const spotLight034 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight034.name = 'spotLight034'
  spotLight034.position.set(-15.5, 2, -11)
  spotLight034.target.position.set(-15.5, 0, -11)
  spotLight034.intensity = 5000.0
  spotLight034.decay = 0.0
  spotLight034.angle = Math.PI / 5
  const spotLight035 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight035.name = 'spotLight35'
  spotLight035.position.set(-12.8, 2, -11)
  spotLight035.target.position.set(-12.8, 0, -11)
  spotLight035.intensity = 5000.0
  spotLight035.decay = 0.0
  spotLight035.angle = Math.PI / 5
  const spotLight036 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight036.name = 'spotLight036'
  spotLight036.position.set(-10.1, 2, -11)
  spotLight036.target.position.set(-10.1, 0, -11)
  spotLight036.intensity = 5000.0
  spotLight036.decay = 0.0
  spotLight036.angle = Math.PI / 5
  const spotLight037 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight037.name = 'spotLight037'
  spotLight037.position.set(-7.4, 2, -11)
  spotLight037.target.position.set(-7.4, 0, -11)
  spotLight037.intensity = 5000.0
  spotLight037.decay = 0.0
  spotLight037.angle = Math.PI / 5
  const spotLight038 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight038.name = 'spotLight038'
  spotLight038.position.set(-4.7, 2, -11)
  spotLight038.target.position.set(-4.7, 0, -11)
  spotLight038.intensity = 5000.0
  spotLight038.decay = 0.0
  spotLight038.angle = Math.PI / 5
  const spotLight039 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight039.name = 'spotLight039'
  spotLight039.position.set(-2.3, 2, -11)
  spotLight039.target.position.set(-2.3, 0, -11)
  spotLight039.intensity = 5000.0
  spotLight039.decay = 0.0
  spotLight039.angle = Math.PI / 5
  const spotLight040 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight040.name = 'spotLight040'
  spotLight040.position.set(0.3, 2, -11)
  spotLight040.target.position.set(0.3, 0, -11)
  spotLight040.intensity = 5000.0
  spotLight040.decay = 0.0
  spotLight040.angle = Math.PI / 5
  const spotLight041 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight041.name = 'spotLight041'
  spotLight041.position.set(2.9, 2, -11)
  spotLight041.target.position.set(2.9, 0, -11)
  spotLight041.intensity = 5000.0
  spotLight041.decay = 0.0
  spotLight041.angle = Math.PI / 5
  const spotLight042 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight042.name = 'spotLight042'
  spotLight042.position.set(5.5, 2, -11)
  spotLight042.target.position.set(5.5, 0, -11)
  spotLight042.intensity = 5000.0
  spotLight042.decay = 0.0
  spotLight042.angle = Math.PI / 5
  const spotLight043 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight043.name = 'spotLight043'
  spotLight043.position.set(8.1, 2, -11)
  spotLight043.target.position.set(8.1, 0, -11)
  spotLight043.intensity = 5000.0
  spotLight043.decay = 0.0
  spotLight043.angle = Math.PI / 5
  const spotLight044 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight044.name = 'spotLight044'
  spotLight044.position.set(10.8, 2, -11)
  spotLight044.target.position.set(10.8, 0, -11)
  spotLight044.intensity = 5000.0
  spotLight044.decay = 0.0
  spotLight044.angle = Math.PI / 5
  const spotLight045 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight045.name = 'spotLight045'
  spotLight045.position.set(13.4, 2, -11)
  spotLight045.target.position.set(13.4, 0, -11)
  spotLight045.intensity = 5000.0
  spotLight045.decay = 0.0
  spotLight045.angle = Math.PI / 5
  const spotLight046 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight046.name = 'spotLight046'
  spotLight046.position.set(16, 2, -11)
  spotLight046.target.position.set(16, 0, -11)
  spotLight046.intensity = 5000.0
  spotLight046.decay = 0.0
  spotLight046.angle = Math.PI / 5
  const spotLight047 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight047.name = 'spotLight047'
  spotLight047.position.set(-11, 2, -5.5)
  spotLight047.target.position.set(-11, 0, -5.5)
  spotLight047.intensity = 5000.0
  spotLight047.decay = 0.0
  spotLight047.angle = Math.PI / 5
  const spotLight048 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight048.name = 'spotLight048'
  spotLight048.position.set(-6, 2, -5.5)
  spotLight048.target.position.set(-6, 0, -5.5)
  spotLight048.intensity = 5000.0
  spotLight048.decay = 0.0
  spotLight048.angle = Math.PI / 5
  const spotLight049 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight049.name = 'spotLight049'
  spotLight049.position.set(-3.2, 2, -5.5)
  spotLight049.target.position.set(-3.2, 0, -5.5)
  spotLight049.intensity = 5000.0
  spotLight049.decay = 0.0
  spotLight049.angle = Math.PI / 5
  const spotLight050 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight050.name = 'spotLight050'
  spotLight050.position.set(-0.3, 2, -5.5)
  spotLight050.target.position.set(-0.3, 0, -5.5)
  spotLight050.intensity = 5000.0
  spotLight050.decay = 0.0
  spotLight050.angle = Math.PI / 5
  const spotLight051 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight051.name = 'spotLight051'
  spotLight051.position.set(2.4, 2, -5.5)
  spotLight051.target.position.set(2.4, 0, -5.5)
  spotLight051.intensity = 5000.0
  spotLight051.decay = 0.0
  spotLight051.angle = Math.PI / 5
  const spotLight052 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight052.name = 'spotLight052'
  spotLight052.position.set(5.2, 2, -5.5)
  spotLight052.target.position.set(5.2, 0, -5.5)
  spotLight052.intensity = 5000.0
  spotLight052.decay = 0.0
  spotLight052.angle = Math.PI / 5
  const spotLight053 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight053.name = 'spotLight053'
  spotLight053.position.set(10, 2, -5.5)
  spotLight053.target.position.set(10, 0, -5.5)
  spotLight053.intensity = 5000.0
  spotLight053.decay = 0.0
  spotLight053.angle = Math.PI / 5
  const spotLight054 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight054.name = 'spotLight054'
  spotLight054.position.set(12.8, 2, -5.5)
  spotLight054.target.position.set(12.8, 0, -5.5)
  spotLight054.intensity = 5000.0
  spotLight054.decay = 0.0
  spotLight054.angle = Math.PI / 5
  const spotLight055 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight055.name = 'spotLight055'
  spotLight055.position.set(-11, 2, -2.5)
  spotLight055.target.position.set(-11, 0, -2.5)
  spotLight055.intensity = 5000.0
  spotLight055.decay = 0.0
  spotLight055.angle = Math.PI / 5
  const spotLight056 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight056.name = 'spotLight056'
  spotLight056.position.set(-6, 2, -2.5)
  spotLight056.target.position.set(-6, 0, -2.5)
  spotLight056.intensity = 5000.0
  spotLight056.decay = 0.0
  spotLight056.angle = Math.PI / 5
  const spotLight057 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight057.name = 'spotLight057'
  spotLight057.position.set(-3.2, 2, -2.5)
  spotLight057.target.position.set(-3.2, 0, -2.5)
  spotLight057.intensity = 5000.0
  spotLight057.decay = 0.0
  spotLight057.angle = Math.PI / 5
  const spotLight058 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight058.name = 'spotLight058'
  spotLight058.position.set(-0.3, 2, -2.5)
  spotLight058.target.position.set(-0.3, 0, -2.5)
  spotLight058.intensity = 5000.0
  spotLight058.decay = 0.0
  spotLight058.angle = Math.PI / 5
  const spotLight059 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight059.name = 'spotLight059'
  spotLight059.position.set(2.4, 2, -2.5)
  spotLight059.target.position.set(2.4, 0, -2.5)
  spotLight059.intensity = 5000.0
  spotLight059.decay = 0.0
  spotLight059.angle = Math.PI / 5
  const spotLight060 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight060.name = 'spotLight060'
  spotLight060.position.set(5.2, 2, -2.5)
  spotLight060.target.position.set(5.2, 0, -2.5)
  spotLight060.intensity = 5000.0
  spotLight060.decay = 0.0
  spotLight060.angle = Math.PI / 5
  const spotLight061 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight061.name = 'spotLight061'
  spotLight061.position.set(10, 2, -2.5)
  spotLight061.target.position.set(10, 0, -2.5)
  spotLight061.intensity = 5000.0
  spotLight061.decay = 0.0
  spotLight061.angle = Math.PI / 5
  const spotLight062 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight062.name = 'spotLight062'
  spotLight062.position.set(12.8, 2, -2.5)
  spotLight062.target.position.set(12.8, 0, -2.5)
  spotLight062.intensity = 5000.0
  spotLight062.decay = 0.0
  spotLight062.angle = Math.PI / 5
  const spotLight063 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight063.name = 'spotLight063'
  spotLight063.position.set(-10, 2, 4)
  spotLight063.target.position.set(-10, 0, 4)
  spotLight063.intensity = 5000.0
  spotLight063.decay = 0.0
  spotLight063.angle = Math.PI / 5
  const spotLight064 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight064.name = 'spotLight064'
  spotLight064.position.set(-7.5, 2, 4)
  spotLight064.target.position.set(-7.5, 0, 4)
  spotLight064.intensity = 5000.0
  spotLight064.decay = 0.0
  spotLight064.angle = Math.PI / 5
  const spotLight065 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight065.name = 'spotLight065'
  spotLight065.position.set(-4.8, 2, 4)
  spotLight065.target.position.set(-4.8, 0, 4)
  spotLight065.intensity = 5000.0
  spotLight065.decay = 0.0
  spotLight065.angle = Math.PI / 5
  const spotLight066 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight066.name = 'spotLight066'
  spotLight066.position.set(-2.1, 2, 4)
  spotLight066.target.position.set(-2.1, 0, 4)
  spotLight066.intensity = 5000.0
  spotLight066.decay = 0.0
  spotLight066.angle = Math.PI / 5
  const spotLight067 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight067.name = 'spotLight067'
  spotLight067.position.set(0.1, 2, 4)
  spotLight067.target.position.set(0.1, 0, 4)
  spotLight067.intensity = 5000.0
  spotLight067.decay = 0.0
  spotLight067.angle = Math.PI / 5
  const spotLight068 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight068.name = 'spotLight068'
  spotLight068.position.set(2.7, 2, 4)
  spotLight068.target.position.set(2.7, 0, 4)
  spotLight068.intensity = 5000.0
  spotLight068.decay = 0.0
  spotLight068.angle = Math.PI / 5
  const spotLight069 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight069.name = 'spotLight069'
  spotLight069.position.set(5.2, 2, 4)
  spotLight069.target.position.set(5.2, 0, 4)
  spotLight069.intensity = 5000.0
  spotLight069.decay = 0.0
  spotLight069.angle = Math.PI / 5
  const spotLight070 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight070.name = 'spotLight070'
  spotLight070.position.set(7.6, 2, 4)
  spotLight070.target.position.set(7.6, 0, 4)
  spotLight070.intensity = 5000.0
  spotLight070.decay = 0.0
  spotLight070.angle = Math.PI / 5
  const spotLight071 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight071.name = 'spotLight071'
  spotLight071.position.set(10.2, 2, 4)
  spotLight071.target.position.set(10.2, 0, 4)
  spotLight071.intensity = 5000.0
  spotLight071.decay = 0.0
  spotLight071.angle = Math.PI / 5
  const spotLight072 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight072.name = 'spotLight072'
  spotLight072.position.set(12.8, 2, 4)
  spotLight072.target.position.set(12.8, 0, 4)
  spotLight072.intensity = 5000.0
  spotLight072.decay = 0.0
  spotLight072.angle = Math.PI / 5
  const spotLight073 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight073.name = 'spotLight073'
  spotLight073.position.set(-10, 2, 6)
  spotLight073.target.position.set(-10, 0, 6)
  spotLight073.intensity = 5000.0
  spotLight073.decay = 0.0
  spotLight073.angle = Math.PI / 5
  const spotLight074 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight074.name = 'spotLight074'
  spotLight074.position.set(-7.5, 2, 6)
  spotLight074.target.position.set(-7.5, 0, 6)
  spotLight074.intensity = 5000.0
  spotLight074.decay = 0.0
  spotLight074.angle = Math.PI / 5
  const spotLight075 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight075.name = 'spotLight075'
  spotLight075.position.set(-4.8, 2, 6)
  spotLight075.target.position.set(-4.8, 0, 6)
  spotLight075.intensity = 5000.0
  spotLight075.decay = 0.0
  spotLight075.angle = Math.PI / 5
  const spotLight076 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight076.name = 'spotLight076'
  spotLight076.position.set(-2.1, 2, 6)
  spotLight076.target.position.set(-2.1, 0, 6)
  spotLight076.intensity = 5000.0
  spotLight076.decay = 0.0
  spotLight076.angle = Math.PI / 5
  const spotLight077 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight077.name = 'spotLight077'
  spotLight077.position.set(0.1, 2, 6)
  spotLight077.target.position.set(0.1, 0, 6)
  spotLight077.intensity = 5000.0
  spotLight077.decay = 0.0
  spotLight077.angle = Math.PI / 5
  const spotLight078 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight078.name = 'spotLight078'
  spotLight078.position.set(2.7, 2, 6)
  spotLight078.target.position.set(2.7, 0, 6)
  spotLight078.intensity = 5000.0
  spotLight078.decay = 0.0
  spotLight078.angle = Math.PI / 5
  const spotLight079 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight079.name = 'spotLight079'
  spotLight079.position.set(5.2, 2, 6)
  spotLight079.target.position.set(5.2, 0, 6)
  spotLight079.intensity = 5000.0
  spotLight079.decay = 0.0
  spotLight079.angle = Math.PI / 5
  const spotLight080 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight080.name = 'spotLight080'
  spotLight080.position.set(7.6, 0, 6)
  spotLight080.target.position.set(7.6, 0, 6)
  spotLight080.intensity = 5000.0
  spotLight080.decay = 0.0
  spotLight080.angle = Math.PI / 5
  const spotLight081 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight081.name = 'spotLight081'
  spotLight081.position.set(10.2, 0, 6)
  spotLight081.target.position.set(10.2, 0, 6)
  spotLight081.intensity = 5000.0
  spotLight081.decay = 0.0
  spotLight081.angle = Math.PI / 5
  const spotLight082 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight082.name = 'spotLight082'
  spotLight082.position.set(12.8, 2, 6)
  spotLight082.target.position.set(12.8, 0, 6)
  spotLight082.intensity = 5000.0
  spotLight082.decay = 0.0
  spotLight082.angle = Math.PI / 5
  const spotLight083 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight083.name = 'spotLight083'
  spotLight083.position.set(-13.8, 2, 12)
  spotLight083.target.position.set(-13.8, 0, 12)
  spotLight083.intensity = 5000.0
  spotLight083.decay = 0.0
  spotLight083.angle = Math.PI / 5
  const spotLight084 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight084.name = 'spotLight084'
  spotLight084.position.set(-11, 2, 12)
  spotLight084.target.position.set(-11, 0, 12)
  spotLight084.intensity = 5000.0
  spotLight084.decay = 0.0
  spotLight084.angle = Math.PI / 5
  const spotLight085 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight085.name = 'spotLight085'
  spotLight085.position.set(-6, 2, 12)
  spotLight085.target.position.set(-6, 0, 12)
  spotLight085.intensity = 5000.0
  spotLight085.decay = 0.0
  spotLight085.angle = Math.PI / 5
  const spotLight086 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight086.name = 'spotLight086'
  spotLight086.position.set(-3.2, 2, 12)
  spotLight086.target.position.set(-3.2, 0, 12)
  spotLight086.intensity = 5000.0
  spotLight086.decay = 0.0
  spotLight086.angle = Math.PI / 5
  const spotLight087 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight087.name = 'spotLight087'
  spotLight087.position.set(-0.3, 2, 12)
  spotLight087.target.position.set(-0.3, 0, 12)
  spotLight087.intensity = 5000.0
  spotLight087.decay = 0.0
  spotLight087.angle = Math.PI / 5
  const spotLight088 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight088.name = 'spotLight088'
  spotLight088.position.set(2.4, 2, 12)
  spotLight088.target.position.set(2.4, 0, 12)
  spotLight088.intensity = 5000.0
  spotLight088.decay = 0.0
  spotLight088.angle = Math.PI / 5
  const spotLight089 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight089.name = 'spotLight089'
  spotLight089.position.set(5.2, 2, 12)
  spotLight089.target.position.set(5.2, 0, 12)
  spotLight089.intensity = 5000.0
  spotLight089.decay = 0.0
  spotLight089.angle = Math.PI / 5
  const spotLight090 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight090.name = 'spotLight090'
  spotLight090.position.set(10, 2, 12)
  spotLight090.target.position.set(10, 0, 12)
  spotLight090.intensity = 5000.0
  spotLight090.decay = 0.0
  spotLight090.angle = Math.PI / 5
  const spotLight091 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight091.name = 'spotLight091'
  spotLight091.position.set(12.8, 2, 12)
  spotLight091.target.position.set(12.8, 0, 12)
  spotLight091.intensity = 5000.0
  spotLight091.decay = 0.0
  spotLight091.angle = Math.PI / 5
  const spotLight092 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight092.name = 'spotLight092'
  spotLight092.position.set(-13.8, 2, 15)
  spotLight092.target.position.set(-13.8, 0, 15)
  spotLight092.intensity = 5000.0
  spotLight092.decay = 0.0
  spotLight092.angle = Math.PI / 5
  const spotLight093 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight093.name = 'spotLight093'
  spotLight093.position.set(-11, 2, 15)
  spotLight093.target.position.set(-11, 0, 15)
  spotLight093.intensity = 5000.0
  spotLight093.decay = 0.0
  spotLight093.angle = Math.PI / 5
  const spotLight094 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight094.name = 'spotLight094'
  spotLight094.position.set(-6, 2, 15)
  spotLight094.target.position.set(-6, 0, 15)
  spotLight094.intensity = 5000.0
  spotLight094.decay = 0.0
  spotLight094.angle = Math.PI / 5
  const spotLight095 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight095.name = 'spotLight095'
  spotLight095.position.set(-3.2, 2, 15)
  spotLight095.target.position.set(-3.2, 0, 15)
  spotLight095.intensity = 5000.0
  spotLight095.decay = 0.0
  spotLight095.angle = Math.PI / 5
  const spotLight096 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight096.name = 'spotLight096'
  spotLight096.position.set(-0.3, 2, 15)
  spotLight096.target.position.set(-0.3, 0, 15)
  spotLight096.intensity = 5000.0
  spotLight096.decay = 0.0
  spotLight096.angle = Math.PI / 5
  const spotLight097 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight097.name = 'spotLight097'
  spotLight097.position.set(2.4, 2, 15)
  spotLight097.target.position.set(2.4, 0, 15)
  spotLight097.intensity = 5000.0
  spotLight097.decay = 0.0
  spotLight097.angle = Math.PI / 5
  const spotLight098 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight098.name = 'spotLight098'
  spotLight098.position.set(5.2, 2, 15)
  spotLight098.target.position.set(5.2, 0, 15)
  spotLight098.intensity = 5000.0
  spotLight098.decay = 0.0
  spotLight098.angle = Math.PI / 5
  const spotLight099 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight099.name = 'spotLight099'
  spotLight099.position.set(10, 2, 15)
  spotLight099.target.position.set(10, 0, 15)
  spotLight099.intensity = 5000.0
  spotLight099.decay = 0.0
  spotLight099.angle = Math.PI / 5
  const spotLight100 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight100.name = 'spotLight100'
  spotLight100.position.set(12.8, 2, 15)
  spotLight100.target.position.set(12.8, 0, 15)
  spotLight100.intensity = 5000.0
  spotLight100.decay = 0.0
  spotLight100.angle = Math.PI / 5
  const spotLight101 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight101.name = 'spotLight101'
  spotLight101.position.set(-31, 2, 15)
  spotLight101.target.position.set(-31, 0, 15)
  spotLight101.intensity = 5000.0
  spotLight101.decay = 0.0
  spotLight101.angle = Math.PI / 5
  const spotLight102 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight102.name = 'spotLight102'
  spotLight102.position.set(-28, 2, 15)
  spotLight102.target.position.set(-28, 0, 15)
  spotLight102.intensity = 5000.0
  spotLight102.decay = 0.0
  spotLight102.angle = Math.PI / 5
  const spotLight103 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight103.name = 'spotLight103'
  spotLight103.position.set(-28, 2, 15)
  spotLight103.target.position.set(-28, 0, 15)
  spotLight103.intensity = 5000.0
  spotLight103.decay = 0.0
  spotLight103.angle = Math.PI / 5
  const spotLight104 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight104.name = 'spotLight104'
  spotLight104.position.set(-25, 2, 15)
  spotLight104.target.position.set(-25, 0, 15)
  spotLight104.intensity = 5000.0
  spotLight104.decay = 0.0
  spotLight104.angle = Math.PI / 5
  const spotLight105 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight105.name = 'spotLight105'
  spotLight105.position.set(-22, 2, 15)
  spotLight105.target.position.set(-22, 0, 15)
  spotLight105.intensity = 5000.0
  spotLight105.decay = 0.0
  spotLight105.angle = Math.PI / 5
  const spotLight106 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight106.name = 'spotLight106'
  spotLight106.position.set(-34, 2, 21)
  spotLight106.target.position.set(-34, 0, 21)
  spotLight106.intensity = 5000.0
  spotLight106.decay = 0.0
  spotLight106.angle = Math.PI / 5
  const spotLight107 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight107.name = 'spotLight107'
  spotLight107.position.set(-31, 2, 22)
  spotLight107.target.position.set(-31, 0, 22)
  spotLight107.intensity = 5000.0
  spotLight107.decay = 0.0
  spotLight107.angle = Math.PI / 5
  const spotLight108 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight108.name = 'spotLight108'
  spotLight108.position.set(-28, 2, 22)
  spotLight108.target.position.set(-28, 0, 22)
  spotLight108.intensity = 5000.0
  spotLight108.decay = 0.0
  spotLight108.angle = Math.PI / 5
  const spotLight109 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight109.name = 'spotLight109'
  spotLight109.position.set(-25, 2, 22)
  spotLight109.target.position.set(-25, 0, 22)
  spotLight109.intensity = 5000.0
  spotLight109.decay = 0.0
  spotLight109.angle = Math.PI / 5
  const spotLight110 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight110.name = 'spotLight110'
  spotLight110.position.set(-22, 2, 22)
  spotLight110.target.position.set(-22, 0, 22)
  spotLight110.intensity = 5000.0
  spotLight110.decay = 0.0
  spotLight110.angle = Math.PI / 5
  const spotLight111 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight111.name = 'spotLight111'
  spotLight111.position.set(-15, 2, 22)
  spotLight111.target.position.set(-15, 0, 22)
  spotLight111.intensity = 5000.0
  spotLight111.decay = 0.0
  spotLight111.angle = Math.PI / 5
  const spotLight112 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight112.name = 'spotLight112'
  spotLight112.position.set(-12.3, 2, 22)
  spotLight112.target.position.set(-12.3, 0, 22)
  spotLight112.intensity = 5000.0
  spotLight112.decay = 0.0
  spotLight112.angle = Math.PI / 5
  const spotLight113 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight113.name = 'spotLight113'
  spotLight113.position.set(-9.5, 2, 22)
  spotLight113.target.position.set(-9.5, 0, 22)
  spotLight113.intensity = 5000.0
  spotLight113.decay = 0.0
  spotLight113.angle = Math.PI / 5
  const spotLight114 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight114.name = 'spotLight114'
  spotLight114.position.set(-2, 2, 22)
  spotLight114.target.position.set(-2, 0, 22)
  spotLight114.intensity = 5000.0
  spotLight114.decay = 0.0
  spotLight114.angle = Math.PI / 5
  const spotLight115 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight115.name = 'spotLight115'
  spotLight115.position.set(0.2, 2, 22)
  spotLight115.target.position.set(0.2, 0, 22)
  spotLight115.intensity = 5000.0
  spotLight115.decay = 0.0
  spotLight115.angle = Math.PI / 5
  const spotLight116 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight116.name = 'spotLight116'
  spotLight116.position.set(2.9, 2, 22)
  spotLight116.target.position.set(2.9, 0, 22)
  spotLight116.intensity = 5000.0
  spotLight116.decay = 0.0
  spotLight116.angle = Math.PI / 5
  const spotLight117 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight117.name = 'spotLight117'
  spotLight117.position.set(5.5, 2, 22)
  spotLight117.target.position.set(5.5, 0, 22)
  spotLight117.intensity = 5000.0
  spotLight117.decay = 0.0
  spotLight117.angle = Math.PI / 5
  const spotLight118 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight118.name = 'spotLight118'
  spotLight118.position.set(8.4, 2, 22)
  spotLight118.target.position.set(8.4, 0, 22)
  spotLight118.intensity = 5000.0
  spotLight118.decay = 0.0
  spotLight118.angle = Math.PI / 5
  const spotLight119 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight119.name = 'spotLight119'
  spotLight119.position.set(11.4, 2, 22)
  spotLight119.target.position.set(11.4, 0, 22)
  spotLight119.intensity = 5000.0
  spotLight119.decay = 0.0
  spotLight119.angle = Math.PI / 5
  const spotLight120 = new THREE.SpotLight(0xBB0000, 1.0)
  spotLight120.name = 'spotLight120'
  spotLight120.position.set(14.4, 2, 22)
  spotLight120.target.position.set(14.4, 0, 22)
  spotLight120.intensity = 5000.0
  spotLight120.decay = 0.0
  spotLight120.angle = Math.PI / 5
  switch (lightName) {
    case 'spotLight001':
      scene.add(spotLight001)
      scene.add(spotLight001.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight001'))
      }, 1000)
      break
    case 'spotLight002':
      console.log('spotLight002')
      scene.add(spotLight002)
      scene.add(spotLight002.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight002'))
      }, 1000)
      break
    case 'spotLight003':
      console.log('spotLight003')
      scene.add(spotLight003)
      scene.add(spotLight003.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight003'))
      }, 1000)
      break
    case 'spotLight004':
      console.log('spotLight004')
      scene.add(spotLight004)
      scene.add(spotLight004.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight004'))
      }, 1000)
      break
    case 'spotLight005':
      console.log('spotLight005')
      scene.add(spotLight005)
      scene.add(spotLight005.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight005'))
      }, 1000)
      break
    case 'spotLight006':
      console.log('spotLight006')
      scene.add(spotLight006)
      scene.add(spotLight006.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight006'))
      }, 1000)
      break
    case 'spotLight007':
      console.log('spotLight007')
      scene.add(spotLight007)
      scene.add(spotLight007.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight007'))
      }, 1000)
      break
    case 'spotLight008':
      console.log('spotLight008')
      scene.add(spotLight008)
      scene.add(spotLight008.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight008'))
      }, 1000)
      break
    case 'spotLight009':
      console.log('spotLight009')
      scene.add(spotLight009)
      scene.add(spotLight009.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight009'))
      }, 1000)
      break
    case 'spotLight010':
      console.log('spotLight010')
      scene.add(spotLight010)
      scene.add(spotLight010.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight010'))
      }, 1000)
      break
    case 'spotLight011':
      console.log('spotLight011')
      scene.add(spotLight011)
      scene.add(spotLight011.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight011'))
      }, 1000)
      break
    case 'spotLight012':
      console.log('spotLight012')
      scene.add(spotLight012)
      scene.add(spotLight012.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight012'))
      }, 1000)
      break
    case 'spotLight013':
      console.log('spotLight013')
      scene.add(spotLight013)
      scene.add(spotLight013.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight013'))
      }, 1000)
      break
    case 'spotLight014':
      console.log('spotLight014')
      scene.add(spotLight014)
      scene.add(spotLight014.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight014'))
      }, 1000)
      break
    case 'spotLight015':
      console.log('spotLight015')
      scene.add(spotLight015)
      scene.add(spotLight015.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight015'))
      }, 1000)
      break
    case 'spotLight016':
      console.log('spotLight016')
      scene.add(spotLight016)
      scene.add(spotLight016.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight016'))
      }, 1000)
      break
    case 'spotLight017':
      console.log('spotLight017')
      scene.add(spotLight017)
      scene.add(spotLight017.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight017'))
      }, 1000)
      break
    case 'spotLight018':
      console.log('spotLight018')
      scene.add(spotLight018)
      scene.add(spotLight018.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight018'))
      }, 1000)
      break
    case 'spotLight019':
      console.log('spotLight019')
      scene.add(spotLight019)
      scene.add(spotLight019.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight019'))
      }, 1000)
      break
    case 'spotLight020':
      console.log('spotLight020')
      scene.add(spotLight020)
      scene.add(spotLight020.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight020'))
      }, 1000)
      break
    case 'spotLight021':
      console.log('spotLight021')
      scene.add(spotLight021)
      scene.add(spotLight021.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight021'))
      }, 1000)
      break
    case 'spotLight022':
      console.log('spotLight022')
      scene.add(spotLight022)
      scene.add(spotLight022.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight022'))
      }, 1000)
      break
    case 'spotLight023':
      console.log('spotLight023')
      scene.add(spotLight023)
      scene.add(spotLight023.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight023'))
      }, 1000)
      break
    case 'spotLight024':
      console.log('spotLight024')
      scene.add(spotLight024)
      scene.add(spotLight024.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight024'))
      }, 1000)
      break
    case 'spotLight025':
      console.log('spotLight025')
      scene.add(spotLight025)
      scene.add(spotLight025.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight025'))
      }, 1000)
      break
    case 'spotLight026':
      console.log('spotLight026')
      scene.add(spotLight026)
      scene.add(spotLight026.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight026'))
      }, 1000)
      break
    case 'spotLight027':
      console.log('spotLight027')
      scene.add(spotLight027)
      scene.add(spotLight027.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight027'))
      }, 1000)
      break
    case 'spotLight028':
      console.log('spotLight028')
      scene.add(spotLight028)
      scene.add(spotLight028.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight028'))
      }, 1000)
      break
    case 'spotLight029':
      console.log('spotLight029')
      scene.add(spotLight029)
      scene.add(spotLight029.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight029'))
      }, 1000)
      break
    case 'spotLight030':
      console.log('spotLight030')
      scene.add(spotLight030)
      scene.add(spotLight030.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight030'))
      }, 1000)
      break
    case 'spotLight031':
      console.log('spotLight031')
      scene.add(spotLight031)
      scene.add(spotLight031.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight031'))
      }, 1000)
      break
    case 'spotLight032':
      console.log('spotLight032')
      scene.add(spotLight032)
      scene.add(spotLight032.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight032'))
      }, 1000)
      break
    case 'spotLight033':
      console.log('spotLight033')
      scene.add(spotLight033)
      scene.add(spotLight033.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight033'))
      }, 1000)
      break
    case 'spotLight034':
      console.log('spotLight034')
      scene.add(spotLight034)
      scene.add(spotLight034.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight034'))
      }, 1000)
      break
    case 'spotLight035':
      console.log('spotLight035')
      scene.add(spotLight035)
      scene.add(spotLight035.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight035'))
      }, 1000)
      break
    case 'spotLight036':
      console.log('spotLight036')
      scene.add(spotLight036)
      scene.add(spotLight036.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight036'))
      }, 1000)
      break
    case 'spotLight037':
      console.log('spotLight037')
      scene.add(spotLight037)
      scene.add(spotLight037.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight037'))
      }, 1000)
      break
    case 'spotLight038':
      console.log('spotLight038')
      scene.add(spotLight038)
      scene.add(spotLight038.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight038'))
      }, 1000)
      break
    case 'spotLight039':
      console.log('spotLight039')
      scene.add(spotLight039)
      scene.add(spotLight039.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight039'))
      }, 1000)
      break
    case 'spotLight040':
      console.log('spotLight040')
      scene.add(spotLight040)
      scene.add(spotLight040.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight040'))
      }, 1000)
      break
    case 'spotLight041':
      console.log('spotLight041')
      scene.add(spotLight041)
      scene.add(spotLight041.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight041'))
      }, 1000)
      break
    case 'spotLight042':
      console.log('spotLight042')
      scene.add(spotLight042)
      scene.add(spotLight042.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight042'))
      }, 1000)
      break
    case 'spotLight043':
      console.log('spotLight043')
      scene.add(spotLight043)
      scene.add(spotLight043.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight043'))
      }, 1000)
      break
    case 'spotLight044':
      console.log('spotLight044')
      scene.add(spotLight044)
      scene.add(spotLight044.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight044'))
      }, 1000)
      break
    case 'spotLight045':
      console.log('spotLight045')
      scene.add(spotLight045)
      scene.add(spotLight045.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight045'))
      }, 1000)
      break
    case 'spotLight046':
      console.log('spotLight046')
      scene.add(spotLight046)
      scene.add(spotLight046.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight046'))
      }, 1000)
      break
    case 'spotLight047':
      console.log('spotLight047')
      scene.add(spotLight047)
      scene.add(spotLight047.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight047'))
      }, 1000)
      break
    case 'spotLight048':
      console.log('spotLight048')
      scene.add(spotLight048)
      scene.add(spotLight048.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight048'))
      }, 1000)
      break
    case 'spotLight049':
      console.log('spotLight049')
      scene.add(spotLight049)
      scene.add(spotLight049.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight049'))
      }, 1000)
      break
    case 'spotLight050':
      console.log('spotLight050')
      scene.add(spotLight050)
      scene.add(spotLight050.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight050'))
      }, 1000)
      break
    case 'spotLight051':
      console.log('spotLight051')
      scene.add(spotLight051)
      scene.add(spotLight051.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight051'))
      }, 1000)
      break
    case 'spotLight052':
      console.log('spotLight052')
      scene.add(spotLight052)
      scene.add(spotLight052.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight052'))
      }, 1000)
      break
    case 'spotLight053':
      console.log('spotLight053')
      scene.add(spotLight053)
      scene.add(spotLight053.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight053'))
      }, 1000)
      break
    case 'spotLight054':
      console.log('spotLight054')
      scene.add(spotLight054)
      scene.add(spotLight054.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight054'))
      }, 1000)
      break
    case 'spotLight055':
      console.log('spotLight055')
      scene.add(spotLight055)
      scene.add(spotLight055.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight055'))
      }, 1000)
      break
    case 'spotLight056':
      console.log('spotLight056')
      scene.add(spotLight056)
      scene.add(spotLight056.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight056'))
      }, 1000)
      break
    case 'spotLight057':
      console.log('spotLight057')
      scene.add(spotLight057)
      scene.add(spotLight057.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight057'))
      }, 1000)
      break
    case 'spotLight058':
      console.log('spotLight058')
      scene.add(spotLight058)
      scene.add(spotLight058.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight058'))
      }, 1000)
      break
    case 'spotLight059':
      console.log('spotLight059')
      scene.add(spotLight059)
      scene.add(spotLight059.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight059'))
      }, 1000)
      break
    case 'spotLight060':
      console.log('spotLight060')
      scene.add(spotLight060)
      scene.add(spotLight060.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight060'))
      }, 1000)
      break
    case 'spotLight061':
      console.log('spotLight061')
      scene.add(spotLight061)
      scene.add(spotLight061.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight061'))
      }, 1000)
      break
    case 'spotLight062':
      console.log('spotLight062')
      scene.add(spotLight062)
      scene.add(spotLight062.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight062'))
      }, 1000)
      break
    case 'spotLight063':
      console.log('spotLight063')
      scene.add(spotLight063)
      scene.add(spotLight063.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight063'))
      }, 1000)
      break
    case 'spotLight064':
      console.log('spotLight064')
      scene.add(spotLight064)
      scene.add(spotLight064.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight064'))
      }, 1000)
      break
    case 'spotLight065':
      console.log('spotLight065')
      scene.add(spotLight065)
      scene.add(spotLight065.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight065'))
      }, 1000)
      break
    case 'spotLight066':
      console.log('spotLight066')
      scene.add(spotLight066)
      scene.add(spotLight066.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight066'))
      }, 1000)
      break
    case 'spotLight067':
      console.log('spotLight067')
      scene.add(spotLight067)
      scene.add(spotLight067.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight067'))
      }, 1000)
      break
    case 'spotLight068':
      console.log('spotLight068')
      scene.add(spotLight068)
      scene.add(spotLight068.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight068'))
      }, 1000)
      break
    case 'spotLight069':
      console.log('spotLight069')
      scene.add(spotLight069)
      scene.add(spotLight069.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight069'))
      }, 1000)
      break
    case 'spotLight070':
      console.log('spotLight070')
      scene.add(spotLight069)
      scene.add(spotLight069.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight069'))
      }, 1000)
      break
    case 'spotLight071':
      console.log('spotLight071')
      scene.add(spotLight071)
      scene.add(spotLight071.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight071'))
      }, 1000)
      break
    case 'spotLight072':
      console.log('spotLight072')
      scene.add(spotLight072)
      scene.add(spotLight072.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight072'))
      }, 1000)
      break
    case 'spotLight073':
      console.log('spotLight073')
      scene.add(spotLight073)
      scene.add(spotLight073.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight073'))
      }, 1000)
      break
    case 'spotLight074':
      console.log('spotLight074')
      scene.add(spotLight074)
      scene.add(spotLight074.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight074'))
      }, 1000)
      break
    case 'spotLight075':
      console.log('spotLight075')
      scene.add(spotLight075)
      scene.add(spotLight075.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight075'))
      }, 1000)
      break
    case 'spotLight076':
      console.log('spotLight076')
      scene.add(spotLight076)
      scene.add(spotLight076.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight076'))
      }, 1000)
      break
    case 'spotLight077':
      console.log('spotLight077')
      scene.add(spotLight077)
      scene.add(spotLight077.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight077'))
      }, 1000)
      break
    case 'spotLight078':
      console.log('spotLight078')
      scene.add(spotLight078)
      scene.add(spotLight078.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight078'))
      }, 1000)
      break
    case 'spotLight079':
      console.log('spotLight079')
      scene.add(spotLight079)
      scene.add(spotLight079.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight079'))
      }, 1000)
      break
    case 'spotLight080':
      console.log('spotLight080')
      scene.add(spotLight080)
      scene.add(spotLight080.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight080'))
      }, 1000)
      break
    case 'spotLight081':
      console.log('spotLight081')
      scene.add(spotLight081)
      scene.add(spotLight081.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight081'))
      }, 1000)
      break
    case 'spotLight082':
      console.log('spotLight082')
      scene.add(spotLight082)
      scene.add(spotLight082.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight082'))
      }, 1000)
      break
    case 'spotLight083':
      console.log('spotLight083')
      scene.add(spotLight083)
      scene.add(spotLight083.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight083'))
      }, 1000)
      break
    case 'spotLight084':
      console.log('spotLight084')
      scene.add(spotLight084)
      scene.add(spotLight084.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight084'))
      }, 1000)
      break
    case 'spotLight085':
      console.log('spotLight085')
      scene.add(spotLight085)
      scene.add(spotLight085.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight085'))
      }, 1000)
      break
    case 'spotLight086':
      console.log('spotLight086')
      scene.add(spotLight086)
      scene.add(spotLight086.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight086'))
      }, 1000)
      break
    case 'spotLight087':
      console.log('spotLight087')
      scene.add(spotLight087)
      scene.add(spotLight087.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight087'))
      }, 1000)
      break
    case 'spotLight088':
      console.log('spotLight088')
      scene.add(spotLight088)
      scene.add(spotLight088.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight088'))
      }, 1000)
      break
    case 'spotLight089':
      console.log('spotLight089')
      scene.add(spotLight089)
      scene.add(spotLight089.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight089'))
      }, 1000)
      break
    case 'spotLight090':
      console.log('spotLight090')
      scene.add(spotLight090)
      scene.add(spotLight090.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight090'))
      }, 1000)
      break
    case 'spotLight091':
      console.log('spotLight091')
      scene.add(spotLight091)
      scene.add(spotLight091.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight091'))
      }, 1000)
      break
    case 'spotLight092':
      console.log('spotLight092')
      scene.add(spotLight092)
      scene.add(spotLight092.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight092'))
      }, 1000)
      break
    case 'spotLight093':
      console.log('spotLight093')
      scene.add(spotLight093)
      scene.add(spotLight093.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight093'))
      }, 1000)
      break
    case 'spotLight094':
      console.log('spotLight094')
      scene.add(spotLight094)
      scene.add(spotLight094.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight094'))
      }, 1000)
      break
    case 'spotLight095':
      console.log('spotLight095')
      scene.add(spotLight095)
      scene.add(spotLight095.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight095'))
      }, 1000)
      break
    case 'spotLight096':
      console.log('spotLight096')
      scene.add(spotLight096)
      scene.add(spotLight096.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight096'))
      }, 1000)
      break
    case 'spotLight097':
      console.log('spotLight097')
      scene.add(spotLight097)
      scene.add(spotLight097.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight097'))
      }, 1000)
      break
    case 'spotLight098':
      console.log('spotLight098')
      scene.add(spotLight098)
      scene.add(spotLight098.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight098'))
      }, 1000)
      break
    case 'spotLight099':
      console.log('spotLight099')
      scene.add(spotLight099)
      scene.add(spotLight099.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight099'))
      }, 1000)
      break
    case 'spotLight100':
      console.log('spotLight100')
      scene.add(spotLight100)
      scene.add(spotLight100.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight100'))
      }, 1000)
      break
    case 'spotLight101':
      console.log('spotLight101')
      scene.add(spotLight101)
      scene.add(spotLight101.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight101'))
      }, 1000)
      break
    case 'spotLight102':
      console.log('spotLight102')
      scene.add(spotLight102)
      scene.add(spotLight102.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight102'))
      }, 1000)
      break
    case 'spotLight103':
      console.log('spotLight103')
      scene.add(spotLight103)
      scene.add(spotLight103.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight103'))
      }, 1000)
      break
    case 'spotLight104':
      console.log('spotLight104')
      scene.add(spotLight104)
      scene.add(spotLight104.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight104'))
      }, 1000)
      break
    case 'spotLight105':
      console.log('spotLight105')
      scene.add(spotLight105)
      scene.add(spotLight105.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight105'))
      }, 1000)
      break
    case 'spotLight106':
      console.log('spotLight106')
      scene.add(spotLight106)
      scene.add(spotLight106.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight106'))
      }, 1000)
      break
    case 'spotLight107':
      console.log('spotLight107')
      scene.add(spotLight107)
      scene.add(spotLight107.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight107'))
      }, 1000)
      break
    case 'spotLight108':
      console.log('spotLight108')
      scene.add(spotLight108)
      scene.add(spotLight108.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight108'))
      }, 1000)
      break
    case 'spotLight109':
      console.log('spotLight109')
      scene.add(spotLight109)
      scene.add(spotLight109.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight109'))
      }, 1000)
      break
    case 'spotLight110':
      console.log('spotLight110')
      scene.add(spotLight110)
      scene.add(spotLight110.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight110'))
      }, 1000)
      break
    case 'spotLight111':
      console.log('spotLight111')
      scene.add(spotLight111)
      scene.add(spotLight111.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight111'))
      }, 1000)
      break
    case 'spotLight112':
      console.log('spotLight112')
      scene.add(spotLight112)
      scene.add(spotLight112.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight112'))
      }, 1000)
      break
    case 'spotLight113':
      console.log('spotLight113')
      scene.add(spotLight113)
      scene.add(spotLight113.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight113'))
      }, 1000)
      break
    case 'spotLight114':
      console.log('spotLight114')
      scene.add(spotLight114)
      scene.add(spotLight114.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight114'))
      }, 1000)
      break
    case 'spotLight115':
      console.log('spotLight115')
      scene.add(spotLight115)
      scene.add(spotLight115.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight115'))
      }, 1000)
      break
    case 'spotLight116':
      console.log('spotLight116')
      scene.add(spotLight116)
      scene.add(spotLight116.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight116'))
      }, 1000)
      break
    case 'spotLight117':
      console.log('spotLight117')
      scene.add(spotLight117)
      scene.add(spotLight117.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight117'))
      }, 1000)
      break
    case 'spotLight118':
      console.log('spotLight118')
      scene.add(spotLight118)
      scene.add(spotLight118.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight118'))
      }, 1000)
      break
    case 'spotLight119':
      console.log('spotLight119')
      scene.add(spotLight119)
      scene.add(spotLight119.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight119'))
      }, 1000)
      break
    case 'spotLight120':
      console.log('spotLight120')
      scene.add(spotLight120)
      scene.add(spotLight120.target)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('spotLight120'))
      }, 1000)
      break
  }
  console.log('灯选择', lightName)
}
