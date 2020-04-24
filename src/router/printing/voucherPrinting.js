
const voucherPrinting = {
  path: '/voucherPrinting',
  type: 'printing',
  meta: {icon: 'el-icon-printer', title: '确认单打印'},
  component: () => import('@/components/menu'),
  children: [
    {
      path: '/AccoVoucher',
      type: 'printing',
      component: () => import('@/components/printing/AccoVoucher'),
      meta: {title: '账户'}
    },
    {
      path: '/TradeVoucher',
      type: 'printing',
      component: () => import('@/components/printing/TradeVoucher'),
      meta: {title: '交易'}
    }
  ]
}

export default voucherPrinting
