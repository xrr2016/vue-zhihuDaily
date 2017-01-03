<template>
  <div id="app">
    <md-theme :md-name="playground.theme">
        <md-bottom-bar md-shift>
            <md-bottom-bar-item @click.native="setTheme('blue')" md-icon="ondemand_video">Movies</md-bottom-bar-item>
            <md-bottom-bar-item @click.native="setTheme('teal')" md-icon="music_note">Music</md-bottom-bar-item>
            <md-bottom-bar-item @click.native="setTheme('brown')" md-icon="books" md-active>Books</md-bottom-bar-item>
            <md-bottom-bar-item @click.native="setTheme('indigo')" md-icon="photo">Pictures</md-bottom-bar-item>
        </md-bottom-bar>
  </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {
            playground: {
                theme: 'brown'
            }
        };
    },
    methods: {
        setTheme(theme) {
            this.playground.theme = theme;
        }
    }
}
</script>

<style lang="scss" scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
