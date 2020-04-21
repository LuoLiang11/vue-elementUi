<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        default-active="1" class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1">
          <i class="el-icon-finished"></i>
          <span slot="title">申购</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">认购</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-upload2"></i>
          <span slot="title">赎回</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-refresh"></i>
          <span slot="title">转换</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main>trade</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'trade'
}
</script>

<style scoped>

</style>
