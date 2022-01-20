<template>
  <div>
    <TheHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "../src/components/TheHeader.vue";
// import "./assets/styles/main.css"
export default {
  components: {
    TheHeader,
  },


};
</script>



<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}


</style>

