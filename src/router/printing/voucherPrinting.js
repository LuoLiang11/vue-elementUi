
const voucherPrinting = {
  path: '/voucherPrinting',
  type: 'printing',
  mate: {icon: 'el-icon-printer', title: '确认单打印'},
  component: () => import('@/components/menu'),
  children: [
    {
      path: '/AccoVoucher',
      type: 'printing',
      component: () => import('@/components/printing/AccoVoucher'),
      mate: {title: '账户'}
    },
    {
      path: '/TradeVoucher',
      type: 'printing',
      component: () => import('@/components/printing/TradeVoucher'),
      mate: {title: '交易'}
    }
  ]
}

export default voucherPrinting
