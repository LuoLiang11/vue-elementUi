
const reportPrinting = {
  path: '/printing',
  type: 'printing',
  meta: {icon: 'el-icon-printer', title: '报表打印'},
  component: () => import('@/components/menu'),
  children: [
    {
      path: '/AccoPrint',
      type: 'printing',
      component: () => import('@/components/printing/AccoPrint'),
      meta: {title: '账户'}
    },
    {
      path: '/TradePrint',
      type: 'printing',
      component: () => import('@/components/printing/TradePrint'),
      meta: {title: '交易'}
    }
  ]
}

export default reportPrinting
