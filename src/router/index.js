import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Layout from '../views/layout/Layout.vue'

/**
 * 路由meta配置规则
 * isHeader: 按顺序依次为header的样式（颜色）、功能（是否包含搜索）用空格隔开，不需要头部->写"noheader";不需要尾部->在最后写"nofooter"
 */


export const routerMap = [
//{ path: '/login', component: resolve => require(['@/views/login/index'], resolve),name:'login'},
  { path: '/404', component: resolve => require(['@/views/404'], resolve),name:404},
  {
    path: '/',
    component: Layout,
    name: 'layout',
    redirect: '/index',
    children: [{
      name: 'index',
      path: 'index',
      component: resolve => require(['@/views/index/index'], resolve),
      meta: {
        isHeader: 'white'
      }
    },
    { path: '/liveqq', component: resolve => require(['@/views/courseAction/live.vue'], resolve),name:'liveqq'},
    { path: '/videoqq', component: resolve => require(['@/views/courseAction/video.vue'], resolve),name:'videoqq'},
    { path: '/submitGif', component: resolve => require(['@/views/courseAction/submitGif.vue'], resolve),name:'submitGif'},
    { path: '/circleProgress', component: resolve => require(['@/views/courseAction/circleProgress.vue'], resolve),name:'circleProgress'},
    { path: '/transRem', component: resolve => require(['@/views/courseAction/transRem.vue'], resolve),name:'transRem'},
    { path: '/transHtml', component: resolve => require(['@/views/courseAction/transHtml.vue'], resolve),name:'transHtml'},
    { path: '/audio', component: resolve => require(['@/views/courseAction/audio.vue'], resolve),name:'audio'},
    { path: '/maoxian', component: resolve => require(['@/views/courseAction/maoxian.vue'], resolve),name:'maoxian'},
    { path: '/maoxian2', component: resolve => require(['@/views/courseAction/maoxian2.vue'], resolve),name:'maoxian'}]
  },
  { path: '*', redirect: '/404' ,showHeader:false,showFooter:false}
]
export default new Router({
  // mode: 'history',  //可以去掉url中的#。但是打包后需要后台配置，否则会404
  routes: routerMap
})

//全局路由守卫
//	router.beforeEach((to,from,next)=>{
//		if(to.path!="/"){
//			axios.defaults.headers.common['Authorization'] = Cookie.get("access_token")||"abc";
//			axios.get("/api/auth/me").then((res)=>{
//				console.log(res.data.err_code);
//				if(res.data.err_code==405){
//					router.push({path:"/"})
//				}
//			})
//		}
//		next();
//	})