
const trade = {
  path: '/trade',
  hidInMenu: true,
  type: 'trade',
  component: () => import('@/components/menu'),
  children: [
    {
      path: '/purchase',
      type: 'trade',
      component: () => import('@/components/trade/Purchase'),
      mate: {icon: 'el-icon-circle-check', title: '申购'}
    },
    {
      path: '/subscribe',
      type: 'trade',
      component: () => import('@/components/trade/Subscribe'),
      mate: {icon: 'el-icon-circle-close', title: '认购'}
    }
  ]
}

export default trade
