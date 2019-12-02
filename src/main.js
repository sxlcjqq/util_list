// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "babel-polyfill";
import ElementUI from 'element-ui';
import store from './store'
import '@/styles/App.scss';
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI, { size: 'medium' });
//全局引入js-cookie,并注册为全局方法
import Cookie from "js-cookie";
Vue.prototype.$Cookie=Cookie;
//引入时间格式化插件
import moment from 'moment';
Vue.filter(	
	'dateformat',
	function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)
	}
)





Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');