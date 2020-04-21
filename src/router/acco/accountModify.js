
const modify = {
  path: '/',
  name: 'modify',
  mate: {icon: 'el-icon-edit-outline', title: '资料修改'},
  component: () => import('@/components/acco/acco'),
  children: [
    {
      path: '/ModifyConsumer',
      name: 'ModifyConsumer',
      mate: {title: '个人'},
      component: () => import('@/components/acco/ModifyConsumer')
    },
    {
      path: '/ModifyOrg',
      name: 'ModifyOrg',
      mate: {title: '机构'},
      component: () => import('@/components/acco/ModifyOrg')
    }
  ]
}

export default modify
