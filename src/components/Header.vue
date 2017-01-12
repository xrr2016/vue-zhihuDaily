<template lang="html">
    <div class="">
      <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="1">处理中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
      </el-menu>
    </div>
</template>

<script>
export default {
    methods: {
        refresh() {
            console.log('!!!')
        }
    }
}
</script>

<style lang="scss">
.logo {
    display: block;
    padding-top: 12px;
    padding-bottom: 12px;
    min-height: 50px;
}
</style>
