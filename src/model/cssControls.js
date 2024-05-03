import { CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js'
import { scene } from '@/model/index.js'
export function addTag (cssNum) {
  const para = document.createElement('div')
  const node = document.createTextNode('收到一份简历')
  para.style.fontSize = '5px'
  para.style.color = 'white'
  para.style.backgroundColor = 'rgba(0,0,0,0.5)'
  para.style.padding = '4px'
  para.style.borderRadius = '15px'
  para.appendChild(node)
  const tag001 = new CSS2DObject(para)
  tag001.position.set(-24, 3, -19)
  tag001.name = 'tag001'
  const tag002 = tag001.clone()
  tag002.position.set(-24, 3, -19)
  tag002.name = 'tag002'
  const tag003 = tag001.clone()
  tag003.position.set(-21, 3, -19)
  tag003.name = 'tag003'
  const tag004 = tag001.clone()
  tag004.position.set(-18, 3, -19)
  tag004.name = 'tag004'
  const tag005 = tag001.clone()
  tag005.position.set(-15, 3, -22)
  tag005.name = 'tag005'
  const tag006 = tag001.clone()
  tag006.position.set(-12, 3, -22)
  tag006.name = 'tag006'
  const tag007 = tag001.clone()
  tag007.position.set(-7, 3, -22)
  tag007.name = 'tag007'
  const tag008 = tag001.clone()
  tag008.position.set(-2, 3, -22)
  tag008.name = 'tag008'
  const tag009 = tag001.clone()
  tag009.position.set(1, 3, -22)
  tag009.name = 'tag009'
  const tag010 = tag001.clone()
  tag010.position.set(3, 3, -22)
  tag010.name = 'tag010'
  const tag011 = tag001.clone()
  tag011.position.set(8, 3, -22)
  tag011.name = 'tag011'
  const tag012 = tag001.clone()
  tag012.position.set(11, 3, -22)
  tag012.name = 'tag012'
  const tag013 = tag001.clone()
  tag013.position.set(16, 3, -19)
  tag013.name = 'tag013'
  const tag014 = tag001.clone()
  tag014.position.set(19, 3, -19)
  tag014.name = 'tag014'
  const tag015 = tag001.clone()
  tag015.position.set(-19, 3, -14)
  tag015.name = 'tag015'
  const tag016 = tag001.clone()
  tag016.position.set(22, 3, -19)
  tag016.name = 'tag016'
  const tag017 = tag001.clone()
  tag017.position.set(-21, 3, -14)
  tag017.name = 'tag017'
  const tag018 = tag001.clone()
  tag018.position.set(-19, 3, -14)
  tag018.name = 'tag018'
  const tag019 = tag001.clone()
  tag019.position.set(-16, 3, -14)
  tag019.name = 'tag019'
  const tag020 = tag001.clone()
  tag020.position.set(-13, 3, -14)
  tag020.name = 'tag020'
  const tag021 = tag001.clone()
  tag021.position.set(-11, 3, -14)
  tag021.name = 'tag021'
  const tag022 = tag001.clone()
  tag022.position.set(-8, 3, -14)
  tag022.name = 'tag022'
  const tag023 = tag001.clone()
  tag023.position.set(-5, 3, -14)
  tag023.name = 'tag023'
  const tag024 = tag001.clone()
  tag024.position.set(-3, 3, -14)
  tag024.name = 'tag024'
  const tag025 = tag001.clone()
  tag025.position.set(-0.3, 3, -14)
  tag025.name = 'tag025'
  const tag026 = tag001.clone()
  tag026.position.set(1, 3, -14)
  tag026.name = 'tag026'
  const tag027 = tag001.clone()
  tag027.position.set(4, 3, -14)
  tag027.name = 'tag027'
  const tag028 = tag001.clone()
  tag028.position.set(7, 3, -14)
  tag028.name = 'tag028'
  const tag029 = tag001.clone()
  tag029.position.set(9, 3, -14)
  tag029.name = 'tag029'
  const tag030 = tag001.clone()
  tag030.position.set(12, 3, -14)
  tag030.name = 'tag030'
  const tag031 = tag001.clone()
  tag031.position.set(15, 3, -14)
  tag031.name = 'tag031'
  const tag032 = tag001.clone()
  tag032.position.set(-21, 3, -11)
  tag032.name = 'tag032'
  const tag033 = tag001.clone()
  tag033.position.set(-19, 3, -11)
  tag033.name = 'tag033'
  const tag034 = tag001.clone()
  tag034.position.set(-16, 3, -11)
  tag034.name = 'tag034'
  const tag035 = tag001.clone()
  tag035.position.set(-13, 3, -11)
  tag035.name = 'tag035'
  const tag036 = tag001.clone()
  tag036.position.set(-11, 3, -11)
  tag036.name = 'tag036'
  const tag037 = tag001.clone()
  tag037.position.set(-8, 3, -11)
  tag037.name = 'tag037'
  const tag038 = tag001.clone()
  tag038.position.set(-5, 3, -11)
  tag038.name = 'tag038'
  const tag039 = tag001.clone()
  tag039.position.set(-3, 3, -11)
  tag039.name = 'tag039'
  const tag040 = tag001.clone()
  tag040.position.set(-1, 3, -11)
  tag040.name = 'tag040'
  const tag041 = tag001.clone()
  tag041.position.set(1, 3, -11)
  tag041.name = 'tag041'
  const tag042 = tag001.clone()
  tag042.position.set(4, 3, -11)
  tag042.name = 'tag042'
  const tag043 = tag001.clone()
  tag043.position.set(7, 3, -11)
  tag043.name = 'tag043'
  const tag044 = tag001.clone()
  tag044.position.set(9, 3, -11)
  tag044.name = 'tag044'
  const tag045 = tag001.clone()
  tag045.position.set(12, 3, -11)
  tag045.name = 'tag045'
  const tag046 = tag001.clone()
  tag046.position.set(15, 3, -11)
  tag046.name = 'tag046'
  const tag047 = tag001.clone()
  tag047.position.set(-12, 3, -5.5)
  tag047.name = 'tag047'
  const tag048 = tag001.clone()
  tag048.position.set(-7, 3, -5.5)
  tag048.name = 'tag048'
  const tag049 = tag001.clone()
  tag049.position.set(-4, 3, -5.5)
  tag049.name = 'tag049'
  const tag050 = tag001.clone()
  tag050.position.set(-1, 3, -5.5)
  tag050.name = 'tag050'
  const tag051 = tag001.clone()
  tag051.position.set(1, 3, -5.5)
  tag051.name = 'tag051'
  const tag052 = tag001.clone()
  tag052.position.set(4, 3, -5.5)
  tag052.name = 'tag052'
  const tag053 = tag001.clone()
  tag053.position.set(9, 3, -5.5)
  tag053.name = 'tag053'
  const tag054 = tag001.clone()
  tag054.position.set(11, 3, -5.5)
  tag054.name = 'tag054'
  const tag055 = tag001.clone()
  tag055.position.set(-12, 3, -2.5)
  tag055.name = 'tag055'
  const tag056 = tag001.clone()
  tag056.position.set(-7, 3, -2.5)
  tag056.name = 'tag056'
  const tag057 = tag001.clone()
  tag057.position.set(-4, 3, -2.5)
  tag057.name = 'tag057'
  const tag058 = tag001.clone()
  tag058.position.set(-1, 3, -2.5)
  tag058.name = 'tag058'
  const tag059 = tag001.clone()
  tag059.position.set(1, 3, -2.5)
  tag059.name = 'tag059'
  const tag060 = tag001.clone()
  tag060.position.set(4, 3, -2.5)
  tag060.name = 'tag060'
  const tag061 = tag001.clone()
  tag061.position.set(9, 3, -2.5)
  tag061.name = 'tag061'
  const tag062 = tag001.clone()
  tag062.position.set(11, 3, -2.5)
  tag062.name = 'tag062'
  const tag063 = tag001.clone()
  tag063.position.set(-11, 3, 4)
  tag063.name = 'tag063'
  const tag064 = tag001.clone()
  tag064.position.set(-8, 3, 4)
  tag064.name = 'tag064'
  const tag065 = tag001.clone()
  tag065.position.set(-5, 3, 4)
  tag065.name = 'tag065'
  const tag066 = tag001.clone()
  tag066.position.set(-3, 3, 4)
  tag066.name = 'tag066'
  const tag067 = tag001.clone()
  tag067.position.set(-1, 3, 4)
  tag067.name = 'tag067'
  const tag068 = tag001.clone()
  tag068.position.set(1, 3, 4)
  tag068.name = 'tag068'
  const tag069 = tag001.clone()
  tag069.position.set(4, 3, 4)
  tag069.name = 'tag069'
  const tag070 = tag001.clone()
  tag070.position.set(6, 3, 4)
  tag070.name = 'tag070'
  const tag071 = tag001.clone()
  tag071.position.set(9, 3, 4)
  tag071.name = 'tag071'
  const tag072 = tag001.clone()
  tag072.position.set(11, 3, 4)
  tag072.name = 'tag072'
  const tag073 = tag001.clone()
  tag073.position.set(-11, 3, 6)
  tag073.name = 'tag073'
  const tag074 = tag001.clone()
  tag074.position.set(-8, 3, 6)
  tag074.name = 'tag074'
  const tag075 = tag001.clone()
  tag075.position.set(-5, 3, 6)
  tag075.name = 'tag075'
  const tag076 = tag001.clone()
  tag076.position.set(-3, 3, 6)
  tag076.name = 'tag076'
  const tag077 = tag001.clone()
  tag077.position.set(-1, 3, 6)
  tag077.name = 'tag077'
  const tag078 = tag001.clone()
  tag078.position.set(1, 3, 6)
  tag078.name = 'tag078'
  const tag079 = tag001.clone()
  tag079.position.set(4, 3, 6)
  tag079.name = 'tag079'
  const tag080 = tag001.clone()
  tag080.position.set(6, 3, 6)
  tag080.name = 'tag080'
  const tag081 = tag001.clone()
  tag081.position.set(9, 3, 6)
  tag081.name = 'tag081'
  const tag082 = tag001.clone()
  tag082.position.set(11, 3, 6)
  tag082.name = 'tag082'
  const tag083 = tag001.clone()
  tag083.position.set(-14, 3, 12)
  tag083.name = 'tag083'
  const tag084 = tag001.clone()
  tag084.position.set(-12, 3, 12)
  tag084.name = 'tag084'
  const tag085 = tag001.clone()
  tag085.position.set(-7, 3, 12)
  tag085.name = 'tag085'
  const tag086 = tag001.clone()
  tag086.position.set(-4, 3, 12)
  tag086.name = 'tag086'
  const tag087 = tag001.clone()
  tag087.position.set(-1, 3, 12)
  tag087.name = 'tag087'
  const tag088 = tag001.clone()
  tag088.position.set(1, 3, 12)
  tag088.name = 'tag088'
  const tag089 = tag001.clone()
  tag089.position.set(4, 3, 12)
  tag089.name = 'tag089'
  const tag090 = tag001.clone()
  tag090.position.set(9, 3, 12)
  tag090.name = 'tag090'
  const tag091 = tag001.clone()
  tag091.position.set(11, 3, 12)
  tag091.name = 'tag091'
  const tag092 = tag001.clone()
  tag092.position.set(-14, 3, 15)
  tag092.name = 'tag092'
  const tag093 = tag001.clone()
  tag093.position.set(-12, 3, 15)
  tag093.name = 'tag093'
  const tag094 = tag001.clone()
  tag094.position.set(-7, 3, 15)
  tag094.name = 'tag094'
  const tag095 = tag001.clone()
  tag095.position.set(-4, 3, 15)
  tag095.name = 'tag095'
  const tag096 = tag001.clone()
  tag096.position.set(-1, 3, 15)
  tag096.name = 'tag096'
  const tag097 = tag001.clone()
  tag097.position.set(1, 3, 15)
  tag097.name = 'tag097'
  const tag098 = tag001.clone()
  tag098.position.set(4, 3, 15)
  tag098.name = 'tag098'
  const tag099 = tag001.clone()
  tag099.position.set(9, 3, 15)
  tag099.name = 'tag099'
  const tag100 = tag001.clone()
  tag100.position.set(11, 3, 15)
  tag100.name = 'tag100'
  const tag101 = tag001.clone()
  tag101.position.set(-32, 3, 15)
  tag101.name = 'tag101'
  const tag102 = tag001.clone()
  tag102.position.set(-29, 3, 15)
  tag102.name = 'tag102'
  const tag103 = tag001.clone()
  tag103.position.set(-29, 3, 15)
  tag103.name = 'tag103'
  const tag104 = tag001.clone()
  tag104.position.set(-26, 3, 15)
  tag104.name = 'tag104'
  const tag105 = tag001.clone()
  tag105.position.set(-23, 3, 15)
  tag105.name = 'tag105'
  const tag106 = tag001.clone()
  tag106.position.set(-35, 3, 21)
  tag106.name = 'tag106'
  const tag107 = tag001.clone()
  tag107.position.set(-32, 3, 22)
  tag107.name = 'tag107'
  const tag108 = tag001.clone()
  tag108.position.set(-29, 3, 22)
  tag108.name = 'tag108'
  const tag109 = tag001.clone()
  tag109.position.set(-26, 3, 22)
  tag109.name = 'tag109'
  const tag110 = tag001.clone()
  tag110.position.set(-23, 3, 22)
  tag110.name = 'tag110'
  const tag111 = tag001.clone()
  tag111.position.set(-16, 3, 22)
  tag111.name = 'tag111'
  const tag112 = tag001.clone()
  tag112.position.set(-13, 3, 22)
  tag112.name = 'tag112'
  const tag113 = tag001.clone()
  tag113.position.set(-10, 3, 22)
  tag113.name = 'tag113'
  const tag114 = tag001.clone()
  tag114.position.set(-3, 3, 22)
  tag114.name = 'tag114'
  const tag115 = tag001.clone()
  tag115.position.set(-1, 3, 22)
  tag115.name = 'tag115'
  const tag116 = tag001.clone()
  tag116.position.set(1, 3, 22)
  tag116.name = 'tag116'
  const tag117 = tag001.clone()
  tag117.position.set(4, 3, 22)
  tag117.name = 'tag117'
  const tag118 = tag001.clone()
  tag118.position.set(7, 3, 22)
  tag118.name = 'tag118'
  const tag119 = tag001.clone()
  tag119.position.set(10, 3, 22)
  tag119.name = 'tag119'
  const tag120 = tag001.clone()
  tag120.position.set(13, 3, 22)
  tag120.name = 'tag120'
  switch (cssNum) {
    case 'tag001':
      scene.add(tag001)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag001'))
      }, 3000)
      break
    case 'tag002':
      scene.add(tag002)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag002'))
      }, 3000)
      break
    case 'tag003':
      scene.add(tag003)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag003'))
      }, 3000)
      break
    case 'tag004':
      scene.add(tag004)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag004'))
      }, 3000)
      break
    case 'tag005':
      scene.add(tag005)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag005'))
      }, 3000)
      break
    case 'tag006':
      scene.add(tag006)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag006'))
      }, 3000)
      break
    case 'tag007':
      scene.add(tag007)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag007'))
      }, 3000)
      break
    case 'tag008':
      scene.add(tag008)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag008'))
      }, 3000)
      break
    case 'tag009':
      scene.add(tag009)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag009'))
      }, 3000)
      break
    case 'tag010':
      scene.add(tag010)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag010'))
      }, 3000)
      break
    case 'tag011':
      scene.add(tag011)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag011'))
      }, 3000)
      break
    case 'tag012':
      scene.add(tag012)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag012'))
      }, 3000)
      break
    case 'tag013':
      scene.add(tag013)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag013'))
      }, 3000)
      break
    case 'tag014':
      scene.add(tag014)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag014'))
      }, 3000)
      break
    case 'tag015':
      scene.add(tag015)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag015'))
      }, 3000)
      break
    case 'tag016':
      scene.add(tag016)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag016'))
      }, 3000)
      break
    case 'tag017':
      scene.add(tag017)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag017'))
      }, 3000)
      break
    case 'tag018':
      scene.add(tag018)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag018'))
      }, 3000)
      break
    case 'tag019':
      scene.add(tag019)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag019'))
      }, 3000)
      break
    case 'tag020':
      scene.add(tag020)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag020'))
      }, 3000)
      break
    case 'tag021':
      scene.add(tag021)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag021'))
      }, 3000)
      break
    case 'tag022':
      scene.add(tag022)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag022'))
      }, 3000)
      break
    case 'tag023':
      scene.add(tag023)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag023'))
      }, 3000)
      break
    case 'tag024':
      scene.add(tag024)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag024'))
      }, 3000)
      break
    case 'tag025':
      scene.add(tag025)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag025'))
      }, 3000)
      break
    case 'tag026':
      scene.add(tag026)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag026'))
      }, 3000)
      break
    case 'tag027':
      scene.add(tag027)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag027'))
      }, 3000)
      break
    case 'tag028':
      scene.add(tag028)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag028'))
      }, 3000)
      break
    case 'tag029':
      scene.add(tag029)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag029'))
      }, 3000)
      break
    case 'tag030':
      scene.add(tag030)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag030'))
      }, 3000)
      break
    case 'tag031':
      scene.add(tag031)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag031'))
      }, 3000)
      break
    case 'tag032':
      scene.add(tag032)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag032'))
      }, 3000)
      break
    case 'tag033':
      scene.add(tag033)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag033'))
      }, 3000)
      break
    case 'tag034':
      scene.add(tag034)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag034'))
      }, 3000)
      break
    case 'tag035':
      scene.add(tag035)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag035'))
      }, 3000)
      break
    case 'tag036':
      scene.add(tag036)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag036'))
      }, 3000)
      break
    case 'tag037':
      scene.add(tag037)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag037'))
      }, 3000)
      break
    case 'tag038':
      scene.add(tag038)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag038'))
      }, 3000)
      break
    case 'tag039':
      scene.add(tag039)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag039'))
      }, 3000)
      break
    case 'tag040':
      scene.add(tag040)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag040'))
      }, 3000)
      break
    case 'tag041':
      scene.add(tag041)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag041'))
      }, 3000)
      break
    case 'tag042':
      scene.add(tag042)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag042'))
      }, 3000)
      break
    case 'tag043':
      scene.add(tag043)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag043'))
      }, 3000)
      break
    case 'tag044':
      scene.add(tag044)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag044'))
      }, 3000)
      break
    case 'tag045':
      scene.add(tag045)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag045'))
      }, 3000)
      break
    case 'tag046':
      scene.add(tag046)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag046'))
      }, 3000)
      break
    case 'tag047':
      scene.add(tag047)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag047'))
      }, 3000)
      break
    case 'tag048':
      scene.add(tag048)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag048'))
      }, 3000)
      break
    case 'tag049':
      scene.add(tag049)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag049'))
      }, 3000)
      break
    case 'tag050':
      scene.add(tag050)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag050'))
      }, 3000)
      break
    case 'tag051':
      scene.add(tag051)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag051'))
      }, 3000)
      break
    case 'tag052':
      scene.add(tag052)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag052'))
      }, 3000)
      break
    case 'tag053':
      scene.add(tag053)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag053'))
      }, 3000)
      break
    case 'tag054':
      scene.add(tag054)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag054'))
      }, 3000)
      break
    case 'tag055':
      scene.add(tag055)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag055'))
      }, 3000)
      break
    case 'tag056':
      scene.add(tag056)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag056'))
      }, 3000)
      break
    case 'tag057':
      scene.add(tag057)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag057'))
      }, 3000)
      break
    case 'tag058':
      scene.add(tag058)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag058'))
      }, 3000)
      break
    case 'tag059':
      scene.add(tag059)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag059'))
      }, 3000)
      break
    case 'tag060':
      scene.add(tag060)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag060'))
      }, 3000)
      break
    case 'tag061':
      scene.add(tag061)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag061'))
      }, 3000)
      break
    case 'tag062':
      scene.add(tag062)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag062'))
      }, 3000)
      break
    case 'tag063':
      scene.add(tag063)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag063'))
      }, 3000)
      break
    case 'tag064':
      scene.add(tag064)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag064'))
      }, 3000)
      break
    case 'tag065':
      scene.add(tag065)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag065'))
      }, 3000)
      break
    case 'tag066':
      scene.add(tag066)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag066'))
      }, 3000)
      break
    case 'tag067':
      scene.add(tag067)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag067'))
      }, 3000)
      break
    case 'tag068':
      scene.add(tag068)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag068'))
      }, 3000)
      break
    case 'tag069':
      scene.add(tag069)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag069'))
      }, 3000)
      break
    case 'tag070':
      scene.add(tag070)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag070'))
      }, 3000)
      break
    case 'tag071':
      scene.add(tag071)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag071'))
      }, 3000)
      break
    case 'tag072':
      scene.add(tag072)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag072'))
      }, 3000)
      break
    case 'tag073':
      scene.add(tag073)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag073'))
      }, 3000)
      break
    case 'tag074':
      scene.add(tag074)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag074'))
      }, 3000)
      break
    case 'tag075':
      scene.add(tag075)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag075'))
      }, 3000)
      break
    case 'tag076':
      scene.add(tag076)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag076'))
      }, 3000)
      break
    case 'tag078':
      scene.add(tag078)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag078'))
      }, 3000)
      break
    case 'tag079':
      scene.add(tag079)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag079'))
      }, 3000)
      break
    case 'tag080':
      scene.add(tag080)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag080'))
      }, 3000)
      break
    case 'tag081':
      scene.add(tag081)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag081'))
      }, 3000)
      break
    case 'tag082':
      scene.add(tag082)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag082'))
      }, 3000)
      break
    case 'tag083':
      scene.add(tag083)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag083'))
      }, 3000)
      break
    case 'tag084':
      scene.add(tag084)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag084'))
      }, 3000)
      break
    case 'tag085':
      scene.add(tag085)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag085'))
      }, 3000)
      break
    case 'tag086':
      scene.add(tag086)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag086'))
      }, 3000)
      break
    case 'tag087':
      scene.add(tag087)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag087'))
      }, 3000)
      break
    case 'tag088':
      scene.add(tag088)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag088'))
      }, 3000)
      break
    case 'tag089':
      scene.add(tag089)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag089'))
      }, 3000)
      break
    case 'tag090':
      scene.add(tag090)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag090'))
      }, 3000)
      break
    case 'tag091':
      scene.add(tag091)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag091'))
      }, 3000)
      break
    case 'tag092':
      scene.add(tag092)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag092'))
      }, 3000)
      break
    case 'tag093':
      scene.add(tag093)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag093'))
      }, 3000)
      break
    case 'tag094':
      scene.add(tag094)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag094'))
      }, 3000)
      break
    case 'tag095':
      scene.add(tag095)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag095'))
      }, 3000)
      break
    case 'tag096':
      scene.add(tag096)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag096'))
      }, 3000)
      break
    case 'tag097':
      scene.add(tag097)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag097'))
      }, 3000)
      break
    case 'tag098':
      scene.add(tag098)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag098'))
      }, 3000)
      break
    case 'tag099':
      scene.add(tag099)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag099'))
      }, 3000)
      break
    case 'tag100':
      scene.add(tag100)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag100'))
      }, 3000)
      break
    case 'tag101':
      scene.add(tag101)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag101'))
      }, 3000)
      break
    case 'tag102':
      scene.add(tag102)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag102'))
      }, 3000)
      break
    case 'tag103':
      scene.add(tag103)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag103'))
      }, 3000)
      break
    case 'tag104':
      scene.add(tag104)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag104'))
      }, 3000)
      break
    case 'tag105':
      scene.add(tag105)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag105'))
      }, 3000)
      break
    case 'tag106':
      scene.add(tag106)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag106'))
      }, 3000)
      break
    case 'tag107':
      scene.add(tag107)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag107'))
      }, 3000)
      break
    case 'tag108':
      scene.add(tag108)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag108'))
      }, 3000)
      break
    case 'tag109':
      scene.add(tag109)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag109'))
      }, 3000)
      break
    case 'tag110':
      scene.add(tag110)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag110'))
      }, 3000)
      break
    case 'tag111':
      scene.add(tag111)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag111'))
      }, 3000)
      break
    case 'tag112':
      scene.add(tag112)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag112'))
      }, 3000)
      break
    case 'tag113':
      scene.add(tag113)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag113'))
      }, 3000)
      break
    case 'tag114':
      scene.add(tag114)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag114'))
      }, 3000)
      break
    case 'tag115':
      scene.add(tag115)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag115'))
      }, 3000)
      break
    case 'tag116':
      scene.add(tag116)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag116'))
      }, 3000)
      break
    case 'tag117':
      scene.add(tag117)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag117'))
      }, 3000)
      break
    case 'tag118':
      scene.add(tag118)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag118'))
      }, 3000)
      break
    case 'tag119':
      scene.add(tag119)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag119'))
      }, 3000)
      break
    case 'tag120':
      scene.add(tag120)
      setTimeout(() => {
        scene.remove(scene.getObjectByName('tag120'))
      }, 3000)
      break
  }
}
