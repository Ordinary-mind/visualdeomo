import Vue from 'vue'
import App from './App.vue'
import router from './router'
import AppHeader from './components/AppHeader'
import './plugins/element.js'
import ECharts from 'vue-echarts'

Vue.config.productionTip = false
Vue.component("app-header",AppHeader)
Vue.component('v-chart', ECharts)
new Vue({
  render: h => h(App),
  router:router,
}).$mount('#app')
