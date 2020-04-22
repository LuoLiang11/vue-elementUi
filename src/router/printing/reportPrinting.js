
const reportPrinting = {
  path: '/printing',
  type: 'printing',
  mate: {icon: 'el-icon-printer', title: '报表打印'},
  component: () => import('@/components/menu'),
  children: [
    {
      path: '/AccoPrint',
      type: 'printing',
      component: () => import('@/components/printing/AccoPrint'),
      mate: {title: '账户'}
    },
    {
      path: '/TradePrint',
      type: 'printing',
      component: () => import('@/components/printing/TradePrint'),
      mate: {title: '交易'}
    }
  ]
}

export default reportPrinting
