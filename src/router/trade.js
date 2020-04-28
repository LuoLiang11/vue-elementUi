
const trade = {
  path: '/trade',
  hidInMenu: true,
  component: () => import('@/components/menu'),
  meta: {type: 'trade'},
  children: [
    {
      path: '/purchase',
      component: () => import('@/components/trade/Purchase'),
      meta: {type: 'trade', icon: 'el-icon-circle-check', title: '申购'}
    },
    {
      path: '/subscribe',
      component: () => import('@/components/trade/Subscribe'),
      meta: {type: 'trade', icon: 'el-icon-circle-close', title: '认购'}
    },
    {
      path: '/Redeem',
      component: () => import('@/components/trade/Redeem'),
      meta: {type: 'trade', icon: 'el-icon-sell', title: '赎回'}
    }
  ]
}

export default trade
