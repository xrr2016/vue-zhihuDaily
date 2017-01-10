<template lang="html">
    <nav class="nav has-shadow">
      <div class="container">
        <div class="nav-left">
          <figure class="image is-145x50 logo">
            <img src="../assets/top_logo.png"alt="知乎日报">
          </figure>
          <div class="nav-item">
            <router-link class="title is-4" to="/">首页</router-link>
          </div>
          <div class="nav-item">
            <a class="title is-4" >刷新</a>
          </div>
        </div>
      </div>
    </nav>
</template>

<script>
export default {

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
