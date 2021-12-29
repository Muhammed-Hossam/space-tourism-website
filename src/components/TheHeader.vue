<template>
  <img src="../assets/shared/icon-hamburger.svg" v-if="!clicked" @click="iconClicked" alt="hamburger-icon" class="sm:hidden block absolute z-50 right-8 top-8 cursor-pointer">
  <img src="../assets/shared/icon-close.svg" v-else @click="iconClicked" alt="close-icon" class="sm:hidden block absolute z-50 right-8 top-8 cursor-pointer">
  <header class="absolute z-40 right-0 lg:mt-7  sm:block md:mt-0" :class="headerClasses">
    <nav class="px-10">
      <ul
        class="flex flex-col sm:flex-row justify-end text-white space-x-10 lg:pl-28 lg:pr-40"
        :class="listClasses"
        
      >
        <li class="flex flex-row sm:flex-col">
          <router-link to="/home" class="py-9 peer" :class="routerClass"
            ><span class="lg:inline md:hidden">00</span> Home</router-link
          >
          <span
            class="block w-auto h-1 peer-hover:bg-gray-400 peer-hover:transition-all ease-in-out duration-500 delay-150"
          ></span>
        </li>
        <li class="flex flex-row sm:flex-col">
          <router-link to="/destination" class="py-9 peer" :class="routerClass"
            ><span class="lg:inline md:hidden">01</span> Destination</router-link
          >
          <span
            class="block w-auto h-1 peer-hover:bg-gray-400 peer-hover:transition-all ease-in-out duration-500 delay-150"
          ></span>
        </li>
        <li class="flex flex-row sm:flex-col">
          <router-link to="/crew" class="py-9 peer" :class="routerClass"
            ><span class="lg:inline md:hidden">02</span> Crew</router-link
          >
          <span
            class="block w-auto h-1 peer-hover:bg-gray-400 peer-hover:transition-all ease-in-out duration-500 delay-150"
          ></span>
        </li>
        <li class="flex flex-row sm:flex-col">
          <router-link to="/technology" class="py-9 peer" :class="routerClass">
            <span class="lg:inline md:hidden">03</span> Technology
          </router-link>
          <span class="block w-auto h-1 peer-hover:bg-gray-400 peer-hover:transition-all ease-in-out duration-500 delay-150"></span>
        </li>
      </ul>
    </nav>
  </header>
  <img src="../assets/shared/logo.svg" alt="logo" class="absolute top-6 sm:top-8 lg:top-14 left-8 text-white z-50" />
</template>

<script>
export default {
  data() {
    return {
      clicked: false
    }
  },
  methods: {
    iconClicked() {
      this.clicked = !this.clicked;
    }
  },
  computed: {
    headerClasses() {
      return {
        block: this.clicked,
        "h-screen": this.clicked,
        hidden: !this.clicked
      }
    },
    listClasses() {
      return {
        "space-x-0": this.clicked,
        "mt-28": this.clicked,
        "mr-8": this.clicked
      }
    },
    routerClass() {
      return {
        "pb-0": this.clicked,
      }
    }
  },
  watch: {
    clicked(newValue, oldValue) {
      if (newValue != oldValue) {
        console.log('Clicked....');
        console.log('New Value ', newValue);
        console.log('Old Value ', oldValue);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap");

a:active ~ span,
a.router-link-active ~ span {
  background-color: white !important;
}

header {
  font-family: "Barlow Condensed", sans-serif;
  background-color: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.55px);

  &::after {
    content: "";
    position: absolute;
    height: 1px;
    width: 27rem;
    background-color: gray;
    left: -23.75rem;
    top: 3.125rem;
  }

  a {
    letter-spacing: 2.7px;
  }
}



@media (max-width: 1300px) {
  header::after {
    width: 17rem;
    background-color: gray;
    left: -14.75rem;
    top: 3.125rem;
  }
}

@media (max-width: 1160px) {
  header::after {
    display: none;
  }
}
</style>
