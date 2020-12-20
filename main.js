import Vue from 'vue'
import App from './App'
import { $http } from '@escook/request-miniprogram'
uni.$http = $http
$http.baseUrl = 'https://www.uinav.com'  // 配置请求根路径
$http.beforeRequest = function(options){  // 在请求开始之前做一些事情
	uni.showLoading({
		title:'数据加载中...'
	})
}
$http.afterRequest = function(){   // 请求结束之后做一些事情
	uni.hideLoading()
}
// 封装的展示消息提示的方法
uni.$showMsg = function (title = '数据加载失败！', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon: 'none',
  })
}
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
