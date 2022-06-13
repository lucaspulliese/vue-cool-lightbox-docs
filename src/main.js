import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/main.scss'

// vue prism
import VuePrism from 'vue-prism'
Vue.use(VuePrism)

// vue cool lightbox
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
Vue.use(CoolLightBox)

// vue sticky
import Affix from 'vue-affix';
Vue.use(Affix);

import 'prismjs/themes/prism.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
}).$mount('#app')
