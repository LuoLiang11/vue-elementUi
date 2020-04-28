<template>
  <el-container>
    <el-header>
      <el-menu
        class="el-menu-demo" mode="horizontal"
        background-color="#545c64" text-color="#fff" @select="handleSelect"
        active-text-color="#ffd04b" :router=true :default-active="type">
        <el-menu-item index="acco">账户</el-menu-item>
        <el-menu-item index="trade">交易</el-menu-item>
        <el-menu-item index="printing">打印</el-menu-item>
        <el-menu-item disabled index=""></el-menu-item>
        <el-menu-item disabled index=""></el-menu-item>
        <el-menu-item divided @click.native="logout">
          <span style="display:block;">Log Out</span>
        </el-menu-item>
      </el-menu>
    </el-header>
    <router-view :type="type"/>
  </el-container>
</template>

<script>
import {resetRouter} from '../router'
export default {
  name: 'home',
  data: function () {
    return {
      type: 'acco'
    }
  },
  methods: {
    logout () {
      sessionStorage.setItem('token', '')
      this.$router.push('/login')
      resetRouter()
      this.$store.dispatch('Recovery')
    },
    handleSelect (key) {
      this.type = key
      console.log('checked head menu ' + key)
    }
  },
  mounted () {
    if (this.$route.meta.type) {
      this.type = this.$route.meta.type
    }
  }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 600px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
