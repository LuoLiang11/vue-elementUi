<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        default-active="1-1" class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff" active-text-color="#ffd04b">
        <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span>确认单打印 </span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">账户</el-menu-item>
          <el-menu-item index="1-2">交易</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-edit"></i>
            <span>明细报表打印</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">账户</el-menu-item>
            <el-menu-item index="2-2">交易</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main>printing</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'printing'
}
</script>

<style scoped>

</style>
