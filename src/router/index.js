import Vue from 'vue'
import Router from 'vue-router'
import accountOpen from './acco/accountOpen'
import accountModify from './acco/accountModify'
import trade from './trade'
import printing from './printing'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'acco',
      component: () => import('@/components/home'),
      children: [
        {
          path: '/acco',
          name: 'acco',
          component: () => import('@/components/acco/acco'),
          children: [accountOpen, accountModify,
            {
              path: '/fuhe',
              name: 'fuhe',
              mate: {icon: 'el-icon-edit', title: '复核'},
              component: () => import('@/components/acco/fuhe')
            }]
        },
        trade,
        printing
      ]
    }
  ]
})
