import Vue from 'vue'
import App from './App.vue'
import  vueSelectTu  from "./lib/index.js"

Vue.use(vueSelectTu)

new Vue({
  el: '#app',
  render: h => h(App)
})
