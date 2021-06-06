import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

//导入element-ui
import ElementUI from 'element-ui'
//导入element-ui样式
import 'element-ui/lib/theme-chalk/index.css' 
// 导入全局初始化样式
import './assets/index.css'
//use element-ui
Vue.use(ElementUI)
//4.挂载到vue实例上
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
