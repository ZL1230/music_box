import Vue from 'vue'
//1.导入
import VueRouter from 'vue-router'

//导入路由组件  懒加载
const Discovery=()=>import('../views/Discovery.vue')
const PlayList=()=>import('../views/PlayList.vue')
const Songs=()=>import('../views/Songs.vue')
const Mvs=()=>import('../views/Mvs.vue')
const Result=()=>import('../views/Result.vue')
const ListDetail=()=>import('../views/ListDetail.vue')
const MvsDetail=()=>import('../views/MvsDetail.vue')



//2.use
Vue.use(VueRouter)
const routes=[
  {
    path:'/discovery',
    component:Discovery
  },
  {
    path:'',
    component:Discovery
  },
  {
      path:'/playlist',
      component:PlayList
  },
  {
      path:'/songs',
      component:Songs
  },
  {
      path:'/mvs',
      component:Mvs
  },
  {
      path:'/result',
      component:Result
  },
  {
    path:'/listdetail',
    component:ListDetail
  },
  {
    path:'/mvsdetail',
    component:MvsDetail
  }
]

//3.创建路由
let router =new VueRouter({
  routes,
  mode:'history'
})
export default router