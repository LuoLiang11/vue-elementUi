const fuhe =
  {
    path: '/acco',
    hidInMenu: true, // 在菜单栏不展示此项
    component: () => import('@/components/menu'),
    meta: {type: 'acco'},
    children: [{
      path: '/fuhe',
      component: () => import('@/components/acco/fuhe'),
      meta: {type: 'acco', icon: 'el-icon-circle-check', title: '账户类复核', role: ['fuhe']}
    },
    {
      path: '/RejectModify',
      component: () => import('@/components/acco/RejectModify'),
      meta: {type: 'acco', icon: 'el-icon-circle-close', title: '账户类驳回修改'}
    }
    ]
  }
export default fuhe
