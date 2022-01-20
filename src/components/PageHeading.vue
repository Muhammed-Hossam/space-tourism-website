<template>
  <div class="heading-content absolute top-28 left-14">
    <span class="text-gray-500 font-semibold mr-2">{{ num }}</span>
    <h5 class="text-white inline-block tracking-widest font-thin uppercase">
      {{ heading }}
    </h5>
  </div>
</template>


<script>
export default {
  props: ['num', 'heading']
}
</script>


<style lang="scss" scoped>

@media (max-width: 639px) {
  .heading-content {
    left: 50%;
    transform: translateX(-50%);
  }
}

@media (max-width: 380px) {

.heading-content {
  
  h5 {
    letter-spacing: 0.16em;
    font-size: 14px;
  }
}
}

@media (min-width: 381px) and (max-width: 390px) {
  .heading-content {
    h5 {
      font-size: 16.1px;
    }
  }
}

@media (min-width: 390px) and (max-width: 420px) {
  .heading-content {
    h5 {
      font-size: 16.7px;
    }
    span {
      font-size: 17px;
      
    }
  }
}

@media (min-width: 420px) and (max-width: 480px) {
  .heading-content {
    h5 {
      font-size: 17.9px;
    }
    span {
      font-size: 18px;
    }
  }
}

@media (min-width: 480px) and (max-width: 580px) {
  .heading-content {
    h5 {
      font-size: 20px;
    }
    span {
      
      font-size: 20px;
    }
  }
}

@media (min-width: 580px) and (max-width: 639px) {
  .heading-content {
    h5 {
      font-size: 25px;
    }
    span {
      
      font-size: 24px;
    }
  }
}

h5 {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 20px;
}
</style>
