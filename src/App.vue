<template>
  <div id="app">
    <router-view></router-view>
    <!-- <bottom-nav></bottom-nav> -->
  </div>
</template>

<script>
// import BottomNav from "./pages/BottomNav";
export default {
  name: "App",
  components: {
    // BottomNav,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>
