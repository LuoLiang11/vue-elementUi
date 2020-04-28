
const reportPrinting = {
  path: '/printing',
  meta: {type: 'printing', icon: 'el-icon-printer', title: '报表打印'},
  component: () => import('@/components/menu'),
  children: [
    {
      path: '/AccoPrint',
      component: () => import('@/components/printing/AccoPrint'),
      meta: {type: 'printing', title: '账户'}
    },
    {
      path: '/TradePrint',
      component: () => import('@/components/printing/TradePrint'),
      meta: {type: 'printing', title: '交易'}
    }
  ]
}

export default reportPrinting
