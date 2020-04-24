<template>
  <div>
    <el-submenu :index="item.path" v-if="item.children">
      <template slot="title">
        <i :class="item.meta.icon"></i>
        <span>{{item.meta.title}}</span>
      </template>
      <el-menu-item :index="childrenItem.path" v-for="(childrenItem,j) in item.children" :key="j" v-if="item.children">
        {{childrenItem.meta.title}}
      </el-menu-item>
    </el-submenu>
    <el-menu-item :index="item.path" v-if="!item.children">
      <i :class="item.meta.icon"></i>
      <span slot="title">{{item.meta.title}}</span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: ['item']
}
</script>

<style scoped>

</style>
