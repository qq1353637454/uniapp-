import Vue from 'vue'

Vue.filter('s_toQty',(val) => {
	if(!val) return ''
	return val.toFixed(2)
})

//yyyy-MM-dd HH:mm:ss
Vue.filter('s_toDate',(val) =>{
	if(!val) return
	val = val.split('T').join(' ')
	val = val.split('-').join('/')
	return val.split('/').join('-')
})
//yyyy-MM-dd HH:mm
Vue.filter('ymdhm',(val)=>{
	if(!val) return
	val = val.split('T').join(' ')
	return val.substr(0,val.length - 3)
})
//yyyy-MM-dd
Vue.filter('ymd',(val)=>{
	if(!val) return
	return val.split('T')[0]
})