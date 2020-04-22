import Vue from 'vue'
import Router from 'vue-router'
import accountOpen from './acco/accountOpen'
import accountModify from './acco/accountModify'
import accountfuhe from './acco/fuhe'
import trade from './trade'
import voucherPrinting from './printing/voucherPrinting'
import reportPrinting from './printing/reportPrinting'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'open',
      component: () => import('@/components/home'),
      children: [
        accountOpen,
        accountModify,
        accountfuhe,
        trade,
        voucherPrinting,
        reportPrinting
      ]
    },
    {
      path: '/login',
      component: () => import('@/components/login')
    },
    {
      path: '*',
      component: () => import('@/components/404')
    }
  ]
})

export default router
