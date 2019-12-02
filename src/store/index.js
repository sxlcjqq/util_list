import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
  },
  state:{
      courseAlertShow:false,//课程about页面的弹出框是否显示
  			myIndex:1,//我的页面菜单高亮显示
  			myCourseIndex:1,//我的课程内的tab切换的高亮显示
  			myDiscussIndex:1,//我的讨论内的tab切换的高亮显示
  			product_id:0,//产品id
  			sku_id:0,//课程id
  			updateServiceShow:false,//我的课程升级服务弹出框是否显示
  			loading:false,//loading是否显示
  			loginShow:false,//登录的弹出框是否显示
  			phoneAlertShow:false,//个人资料块更改手机号弹出框是否显示
  			emailAlertShow:false,//个人资料块更改邮箱弹出框是否显示
  			passwordAlertShow:false,//个人资料块更改密码弹出框是否显示
  			
  },
  mutations:{
  		changeCourseAlertShow(state,payload){
			state.courseAlertShow=payload;
		},
		changeMyIndex(state,payload){
			state.myIndex=payload;
		},
		changeMyCourseIndex(state,payload){
			state.myCourseIndex=payload;
		},
		changeMyDiscussIndex(state,payload){
			state.myDiscussIndex=payload;
		},
		changeProductId(state,payload){
			state.product_id=payload;
		},
		changeSkuId(state,payload){
			state.sku_id=payload;
		},
		changeUpdateServiceShow(state,payload){
			state.updateServiceShow=payload;
		},
		changeLoading(state,payload){
			state.loading=payload;
		},
		changeLoginShow(state,payload){
			state.loginShow=payload;
		},
		changePhoneAlertShow(state,payload){
			state.phoneAlertShow=payload;
		},
		changeEmailAlertShow(state,payload){
			state.emailAlertShow=payload;
		},
		changePasswordAlertShow(state,payload){
			state.passwordAlertShow=payload;
		}
  },
  getters
})

export default store
