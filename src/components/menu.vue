<template>
  <el-container>
  <el-aside width="200px">
      <el-menu class="el-menu-vertical-demo"
        background-color="#545c64" :router="true"
        text-color="#fff" active-text-color="#ffd04b"
        :default-active="$route.path">
        <menu-item v-for="(item,i) in menuData" :key="i" :item="item"></menu-item>
      </el-menu>
  </el-aside>
  <el-container>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import MenuItem from './MenuItem'
export default {
  name: 'acco',
  components: {MenuItem},
  props: ['type'],
  data () {
    return {
      menuData: []
    }
  },
  methods: {
    getMenu () {
      this.menuData = []
      const menuData = []
      const routes = this.$store.state.routers
      console.log(routes)
      routes.forEach(route => {
        if (route.children) {
          route.children.forEach(item => {
            if (item.type === this.type && item.hidInMenu) {
              item.children.forEach(item => {
                menuData.push(item)
              })
            }
            if (item.type === this.type && !item.hidInMenu) {
              menuData.push(item)
            }
          })
        }
      })
      this.menuData = menuData
    }
  },
  mounted () {
    this.getMenu()
  },
  watch: {
    type (newName, oldName) {
      this.getMenu()
    }
  }
}
</script>

<style scoped>

</style>
