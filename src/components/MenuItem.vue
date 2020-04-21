<template>
  <div>
    <el-submenu :index="item.name" v-if="item.children">
      <template slot="title">
        <i :class="item.mate.icon"></i>
        <span>{{item.mate.title}}</span>
      </template>
      <el-menu-item :index="childrenItem.path" v-for="(childrenItem,j) in item.children" :key="j" v-if="item.children">
        {{childrenItem.mate.title}}
      </el-menu-item>
    </el-submenu>
    <el-menu-item :index="item.path" v-if="!item.children">
      <i :class="item.mate.icon"></i>
      <span slot="title">{{item.mate.title}}</span>
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
