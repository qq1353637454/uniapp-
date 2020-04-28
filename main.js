import Vue from 'vue'
import App from './App'

//全局引入头部
import cuCustom from './common/colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

//引入vuex状态库
import store from './store'
Vue.prototype.$store = store;

//全局提示
Vue.prototype.$alert = function(msg){
	if(!msg)return
	uni.showToast({
		title:msg,
		icon:'none'
	})
}


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
