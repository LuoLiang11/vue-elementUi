import Vue from 'vue'
import Router from 'vue-router'
import accountOpen from './acco/accountOpen'
import accountModify from './acco/accountModify'
import fuhe from './acco/fuhe'
import trade from './trade'
import printing from './printing'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'open',
      component: () => import('@/components/home'),
      children: [
        accountOpen,
        accountModify,
        fuhe,
        trade,
        printing
      ]
    }
  ]
})
