import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import Particles from '@tsparticles/vue3'
import { loadSlim } from '@tsparticles/slim'

createApp(App).use(store).use(router).use(ElementUI).use(Particles, {
  init: async engine => {
    await loadSlim(engine)
  }
}).mount('#app')
