import Vue from 'vue'
import Vuex from 'vuex'
import { powerRouter } from '../router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
    }
  },
  actions: {
    GenerateRoutes ({ commit }, roles) {
      return new Promise(resolve => { // 异步处理
        var accessedRouters
        if (roles.some(role => 'admin'.includes(role))) {
          accessedRouters = powerRouter
        } else {
          accessedRouters = filterAsyncRoutes(powerRouter, roles)
        }
        commit('SET_ROUTERS', accessedRouters)
        resolve()// 异步处理完成
      })
    },
    Recovery ({ commit }) {
      this.state.addRouters = []
    }
  }
})

function filterAsyncRoutes (routes, roles) {
  const res = []

  routes.forEach(route => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res
}

function hasPermission (roles, route) {
  if (route.meta && route.meta.role) {
    return roles.some(role => route.meta.role.includes(role))
  } else {
    return true
  }
}
export default store
