<template>
  <div id="app">
    <Title />
    <div class="router-view">
      <router-view />
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title.vue";
export default {
  components: {
    Title,
  },
};
</script>

<style lang="scss">
#app {
  background-color: #fff;
  font-family: Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.router-view {
  -webkit-box-shadow: 10px 10px 46px -17px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 46px -17px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 46px -17px rgba(0, 0, 0, 0.75);
  padding: 1%;
  margin: 1%;
  border-radius: 12px;
}
</style>
