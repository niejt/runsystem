<template>
    <el-container class="layout-container">
        <!-- 左侧 -->
        <el-aside
          class="aside"
          width="240px"
        >
           <el-menu
              router
              :default-active="activePath"
              background-color="#323745"
              unique-opened
              text-color="#fff"
              :collapse="false"
              active-text-color="#ffd04b"
              :collapse-transition="false"
             >
              <el-submenu :index="item.id+''" v-for="item in menuList" :key="item.id">
                <!-- 一级菜单 -->
                <template slot="title">
                  <!-- 图标 -->
                  <i class="el-icon-location"></i>
                  <span>系统功能</span>
                </template>
                  <!-- 二级菜单 -->
                <el-menu-item index="2" v-for="subItem in item.children" :key ="subItem.id">
                  <i class="el-icon-menu"></i>
                  <span slot="title">heihei</span>
                </el-menu-item>

              </el-submenu>

            </el-menu>
        </el-aside>
      <!-- 右侧 -->
      <el-container>
        <el-header class="header">Header</el-header>
        <el-main class="main">
          <!-- 子路由出口 -->
          <router-view />
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      menuList: [],
      // 被激活的地址
      activePath: ''
    }
  },
  created () {
    this.getlist()
  },
  methods: {
    async  getlist () {
      const res = await this.$http.get('/api/data/')
      console.log(res.data.data)
      this.menuList = res.data.data
    }
  }

}
</script>

<style lang="scss" scoped>
div {
    font-size: 50px;
}
.el-menu {
  height: 100vh;
  border: 0;
}
</style>
