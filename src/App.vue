<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
          <!-- 侧边栏拆开成组件来做 -->
           <Navbar></Navbar>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <!-- 是一个路由出口 -->
          <router-view></router-view>   
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: "App",
  components:{
    Navbar,
  }
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
html,body,#app,.el-container{
  width: 100%;
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  height: 100%;
}

.el-button--primary{
  margin: 10px 0px;
}
</style>
