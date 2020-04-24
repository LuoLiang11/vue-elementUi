
const open =
  {
    path: '/acco',
    type: 'acco',
    component: () => import('@/components/menu'),
    meta: {icon: 'el-icon-edit', title: '账户开户'}, // 菜单栏展示的图标和栏目文字
    children: [
      {
        path: '/OpenConsumer',
        name: 'OpenConsumer',
        meta: {title: '个人', role: ['open']},
        component: () => import('@/components/acco/OpenConsumer')
      },
      {
        path: '/OpenOrg',
        name: 'OpenOrg',
        meta: {title: '机构'},
        component: () => import('@/components/acco/OpenOrg')
      },
      {
        path: '/OpenPro',
        name: 'OpenPro',
        meta: {title: '产品'},
        component: () => import('@/components/acco/OpenPro')
      },
      {
        path: '/NewOpen',
        name: 'NewOpen',
        meta: {title: '新开'},
        component: () => import('@/components/acco/NewOpen')
      },
      {
        path: '/FundRegister',
        name: 'FundRegister',
        meta: {title: '登记'},
        component: () => import('@/components/acco/FundRegister')
      }
    ]
  }

export default open
