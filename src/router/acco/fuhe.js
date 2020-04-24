const fuhe =
  {
    path: '/',
    type: 'acco',
    hidInMenu: true, // 在菜单栏不展示此项
    component: () => import('@/components/menu'),
    children: [{
      path: '/fuhe',
      type: 'acco',
      component: () => import('@/components/acco/fuhe'),
      meta: {icon: 'el-icon-circle-check', title: '账户类复核', role: ['fuhe']}
    },
    {
      path: '/RejectModify',
      type: 'acco',
      component: () => import('@/components/acco/RejectModify'),
      meta: {icon: 'el-icon-circle-close', title: '账户类驳回修改'}
    }
    ]
  }
export default fuhe
