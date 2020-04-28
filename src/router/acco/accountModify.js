
const modify = {
  path: '/modify',
  meta: {type: 'acco', icon: 'el-icon-edit-outline', title: '资料修改', role: ['edit']},
  component: () => import('@/components/menu'),
  children: [
    {
      path: '/ModifyConsumer',
      name: 'ModifyConsumer',
      meta: {type: 'acco', title: '个人'},
      component: () => import('@/components/acco/ModifyConsumer')
    },
    {
      path: '/ModifyOrg',
      name: 'ModifyOrg',
      meta: {type: 'acco', title: '机构'},
      component: () => import('@/components/acco/ModifyOrg')
    }
  ]
}

export default modify
