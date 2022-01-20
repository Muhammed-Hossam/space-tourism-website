<template>
    <div class="destination relative h-screen bg-cover bg-no-repeat z-0">
      <page-heading num="01" heading="Pick Your Destination"></page-heading>
      <router-view  />
      <DestSlider />
    </div>
</template>

<script>
import PageHeading from '../components/PageHeading.vue';
import DestSlider from '../components/DestSlider.vue';
export default {
  name: "Destination",
  components: {
    PageHeading,
    DestSlider
  },


};
</script>

<style scoped>
.destination {
  background-image: url("../assets/destination/background-destination-desktop.jpg");
}
</style>