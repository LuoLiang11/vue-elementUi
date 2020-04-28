
const open =
  {
    path: '/acco',
    component: () => import('@/components/menu'),
    meta: {type: 'acco', icon: 'el-icon-edit', title: '账户开户'}, // 菜单栏展示的图标和栏目文字
    children: [
      {
        path: '/OpenConsumer',
        name: 'OpenConsumer',
        meta: {type: 'acco', title: '个人', role: ['open']},
        component: () => import('@/components/acco/OpenConsumer')
      },
      {
        path: '/OpenOrg',
        name: 'OpenOrg',
        meta: {type: 'acco', title: '机构'},
        component: () => import('@/components/acco/OpenOrg')
      },
      {
        path: '/OpenPro',
        name: 'OpenPro',
        meta: {type: 'acco', title: '产品'},
        component: () => import('@/components/acco/OpenPro')
      },
      {
        path: '/NewOpen',
        name: 'NewOpen',
        meta: {type: 'acco', title: '新开'},
        component: () => import('@/components/acco/NewOpen')
      },
      {
        path: '/FundRegister',
        name: 'FundRegister',
        meta: {type: 'acco', title: '登记'},
        component: () => import('@/components/acco/FundRegister')
      }
    ]
  }

export default open
