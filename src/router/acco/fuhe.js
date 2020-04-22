const fuhe =
  {
    path: '/',
    type: 'acco',
    hidInMenu: true,
    component: () => import('@/components/acco/acco'),
    children: [{
      path: '/fuhe',
      type: 'acco',
      component: () => import('@/components/acco/fuhe'),
      mate: {icon: 'el-icon-circle-check', title: '账户类复核'}
    },
    {
      path: '/RejectModify',
      type: 'acco',
      component: () => import('@/components/acco/RejectModify'),
      mate: {icon: 'el-icon-circle-close', title: '账户类驳回修改'}
    }
    ]
  }
export default fuhe
