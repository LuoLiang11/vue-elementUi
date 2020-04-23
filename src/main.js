// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(elementUi)

router.beforeEach((to, from, next) => {
  /**
   * 客户端登录成功 服务端返回token
   * 客户端将token存储在本地session或cookie中
   * 在路由守卫中判断本地是否有token
   * 没有则登录
   * 有则 判断store中是否有数据（store中的数据在页面刷新时会清空）
   * 若没有则通过token获取角色信息
   * 通过角色匹配对应的可访问的路由
   * 将路由动态加载到router中
   * 然后 next(...to)
   */
  console.log(store.state.addRouters)
  if (store.state.addRouters.length === 0) {
    store.dispatch('GenerateRoutes', ['admin']).then(() => {
      router.addRoutes(store.state.addRouters)
      next(...to)
    })
  } else {
    next()
  }
})

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
