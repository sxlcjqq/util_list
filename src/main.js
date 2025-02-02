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
// import moment from 'moment';
import moment from  '@/components/moment/moment.js'
Vue.filter(	
	'dateformat',
	function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)
	}
)

console.log('moment()')

let result = {
  exam_time: '2023-04-20 06:30:00Z--2023-04-20 10:00:00Z'
}
let exam_time= result.exam_time.split('--')
let exam_time_start = moment(exam_time[0]).utcOffset(8).format('YYYY-MM-DD HH:mm:ss')
console.log('exam_time_start:'+exam_time_start)
let exam_time_end = moment(exam_time[1]).utcOffset(8).format('YYYY-MM-DD HH:mm:ss')
console.log('exam_time_end:'+exam_time_end)
let exam_day = moment(exam_time_start).utcOffset(8).format('YYYY-MM-DD')
console.log('exam_day:'+exam_day)
let exam_start_time = moment(exam_time_start).utcOffset(8).format('HH:mm:ss')
console.log('exam_start_time:'+exam_start_time)
let exam_end_time = moment(exam_time_end).utcOffset(8).format('HH:mm:ss')
console.log('exam_end_time:'+exam_end_time)
console.log(exam_day + '  '+ exam_start_time +'—'+exam_end_time)

console.log('2222222')
console.log(moment('2023-04-20 06:30:00Z').utcOffset(8).format('YYYY-MM-DD HH:mm:ss'))
console.log(moment(moment('2023-04-20 06:30:00Z').utcOffset(8).format('YYYY-MM-DD HH:mm:ss')).utcOffset(8).format('YYYY-MM-DD HH:mm:ss'))
console.log(moment(moment(moment('2023-04-20 06:30:00Z').utcOffset(8).format('YYYY-MM-DD HH:mm:ss')).utcOffset(8).format('YYYY-MM-DD HH:mm:ss')).utcOffset(8).format('YYYY-MM-DD HH:mm:ss'))



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');