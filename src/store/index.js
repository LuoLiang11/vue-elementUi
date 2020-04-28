import Vue from 'vue'
import Vuex from 'vuex'
import { contenRouter, powerRouter } from '../router'

Vue.use(Vuex)

function hasPermission (roles, route) {
  if (route.meta && route.meta.role) {
    return roles.some(role => route.meta.role.includes(role))
  } else {
    return true
  }
}

const store = new Vuex.Store({
  state: {
    routers: contenRouter,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = contenRouter.concat(routers)
    }
  },
  actions: {
    GenerateRoutes ({ commit }, roles) {
      return new Promise(resolve => { // 异步处理
        var accessedRouters
        if (roles === 'admin') {
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
      this.state.routers = contenRouter
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

export default store
