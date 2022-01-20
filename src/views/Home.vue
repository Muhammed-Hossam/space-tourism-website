<template>
  <div class="home relative h-screen bg-cover bg-no-repeat z-0">
    <div class="container absolute top-36 w-10/12 text-center" style="left: 8.5%">
    <div class="content absolute p-3">
        <h5 class="z-50 text-xl uppercase" style="color: #D0D6F9; letter-spacing: 4.75px">So, You Want to Travel to</h5>
        <h1 class="text-white uppercase" style="font-size: 9.37500rem">Space</h1>
        <p style="color: #D0D6F9">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </p>
    </div>
    </div>
    <ExploreButton />
  </div>
</template>

<script>
import ExploreButton from '../components/ExploreButton.vue';

export default {
  name: "Home",
  components: {
    ExploreButton
  }
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap');

// font Family
h5 {
  font-family: 'Barlow Condensed', sans-serif;
}

h1 {
  font-family: 'Bellefair', serif;
}

// Desktop media query.
@media (min-width: 1024px) {
  .home {
    background-image: url("../assets/home/background-home-desktop.jpg");
  }

  .container {
    top: 30%;
  }

  .content {
    left: 0;
  }

  h5 {
    font-size: 27px;
    text-align: left;
  }

  p {
    width: 400px;
    text-align: left;
  }


}

// Tablet media query.
@media (min-width: 640px) and (max-width: 1023px) {
  .home {
    background-image: url("../assets/home/background-home-tablet.jpg");
  }

  .content {
    margin-top: 3rem;
  }

  p {
    padding: 0 6rem
  }

}

// Mobile media query.
    @media (max-width: 640px) {
      .home {
        background-image: url("../assets/home/background-home-mobile.jpg");
      }

      h1 {
        font-size: 6rem !important;
      }

      p {
        line-height: 28px;
        margin-top: 2rem;
      }

      a {
        bottom: 2%
      }
    
    }


@media (min-width:320px) and (max-width: 400px) {

  h1 {
    font-size: 100px !important;
  }
}

@media (max-width: 320px) {
  h5 {
    letter-spacing: 3.5px !important;
  }
  h1 {
    font-size: 85px !important;
  }
}

@media (max-width: 280px) {

  h5 {
    letter-spacing: 2.8px !important;
  }
  h1 {
    font-size: 75px !important;
  }

  p {
    margin-top: 1rem;
  }

}
</style>
