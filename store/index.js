import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		IsLogin:false,//用户是否登陆
		userInfo:{
			userName:'刘先生'
		}
	},
	mutations:{
		
	}
})

export default store