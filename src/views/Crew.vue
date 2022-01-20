<template>
    <div class="crew relative h-screen bg-cover bg-no-repeat z-0">
      <page-heading num="02" heading="Meet Your Crew"></page-heading>
    </div>
</template>


<script>
import PageHeading from '../components/PageHeading.vue';
export default {
  name: "Crew",
  components: {
    PageHeading
  }
}
</script>


<style scoped>
.crew {
  background-image: url('../assets/crew/background-crew-desktop.jpg');
}
</style>