import Vue from 'vue'
import Router from 'vue-router'
import accountOpen from './acco/accountOpen'
import accountModify from './acco/accountModify'
import accountfuhe from './acco/fuhe'
import trade from './trade'
import voucherPrinting from './printing/voucherPrinting'
import reportPrinting from './printing/reportPrinting'

Vue.use(Router)

export const powerRouter = [
  {
    path: '/open',
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
  }, { path: '*', component: () => import('@/components/404') }]

export const contenRouter = [
  {
    path: '/',
    redirect: 'login'
  }, {
    path: '/login',
    component: () => import('@/components/login')
  }
]

export const createRouter = () =>
  new Router({
    mode: 'history',
    routes: contenRouter
  })

export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
const router = createRouter()
export default router
