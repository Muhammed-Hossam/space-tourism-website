<template>
  <router-link
    to="/destination"
    class="absolute inline-block bg-white w-48 h-48 mt-12 font-thin text-center uppercase rounded-full"
    >Explore</router-link
  >
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@keyframes pulse {
  from {
    box-shadow: 0 0 0 0 #AAAAAA;
  }
}

a {
  bottom: 8%;
  right: 14%;
  font-size: 2rem;
  line-height: 200px;

  &:hover {
    box-shadow: 0 0 0 3rem transparent;
    animation: pulse 1.2s infinite;
  }
}

@media (max-width: 1023px) {
  a {
    left: 50% !important;
    transform: translateX(-50%);
  }
}

// Start from tablet media query
</style>
