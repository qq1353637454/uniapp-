import Vue from 'vue'
import Vuex from 'vuex'

Vue.set(Vuex)

const store = new Vuex.Store({
	state:{
		IsLogin:false,//用户是否登陆
		userInfo:{
			userName:'刘先生'
		}
	}, 
	mutations:{
		login(state,provider){
			state.IsLogin = true;
			state.userInfo = provider;
			uni.setStorage({
				key:'userInfo',
				data:provider
			})
		},
		logout(state){
			state.IsLogin = false;
			state.userInfo = {};
			uni.removeStorage({
				key:'userInfo'
			})
		}
		
	}
})

export default store