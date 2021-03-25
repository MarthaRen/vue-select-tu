import vueSelectTu from './vue-select-tu.vue'
const selectTu = {
  install(Vue, options) {
    Vue.component(vueSelectTu.name, vueSelectTu) //selectTu.name 组件的name属性,也就是后面使用的组件名字
    // 类似通过  this.$xxx方式调用插件，其实只是挂载到原型上而已
    //Vue.prototype.$xxx //最终可以在任何地方通过 this.$XXX调用
  }
}
//global情况下自动安装
if (typeof  window !== 'undefined' && window.Vue) {
  window.Vue.use(selectTu)
}

export default selectTu