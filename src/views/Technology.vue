<template>
  <div class="tech relative h-screen bg-cover bg-no-repeat z-0">
    <page-heading num="03" heading="Space Launch 101"></page-heading>
  </div>
</template>


<script>
import PageHeading from '../components/PageHeading.vue';

export default {
  name: "Technology",
  components: {
    PageHeading
  }
}
</script>

<style scoped>
.tech {
  background-image: url('../assets/technology/background-technology-desktop.jpg');
}
</style>