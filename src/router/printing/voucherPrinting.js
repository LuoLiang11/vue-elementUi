
const voucherPrinting = {
  path: '/voucherPrinting',
  meta: {type: 'printing', icon: 'el-icon-printer', title: '确认单打印'},
  component: () => import('@/components/menu'),
  children: [
    {
      path: '/AccoVoucher',
      component: () => import('@/components/printing/AccoVoucher'),
      meta: {type: 'printing', title: '账户'}
    },
    {
      path: '/TradeVoucher',
      component: () => import('@/components/printing/TradeVoucher'),
      meta: {type: 'printing', title: '交易'}
    }
  ]
}

export default voucherPrinting
