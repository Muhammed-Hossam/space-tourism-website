<template>
  <transition>
    <div class="destination relative h-screen bg-cover bg-no-repeat z-0"></div>
  </transition>
</template>

<script>
export default {
  name: "Destination",
};
</script>

<style scoped>
.destination {
  background-image: url("../assets/destination/background-destination-desktop.jpg");
}


</style>
