
const acc = {
  path: '/open',
  name: 'open',
  mate: {icon: 'el-icon-edit', title: '账户开户'},
  component: () => import('@/components/acco/acco'),
  children: [
    {
      path: '/OpenConsumer',
      name: 'OpenConsumer',
      mate: {title: '个人'},
      component: () => import('@/components/acco/OpenConsumer')
    },
    {
      path: '/OpenOrg',
      name: 'OpenOrg',
      mate: {title: '机构'},
      component: () => import('@/components/acco/OpenOrg')
    },
    {
      path: '/OpenPro',
      name: 'OpenPro',
      mate: {title: '产品'},
      component: () => import('@/components/acco/OpenPro')
    },
    {
      path: '/NewOpen',
      name: 'NewOpen',
      mate: {title: '新开'},
      component: () => import('@/components/acco/NewOpen')
    },
    {
      path: '/FundRegister',
      name: 'FundRegister',
      mate: {title: '登记'},
      component: () => import('@/components/acco/FundRegister')
    }
  ]
}

export default acc
