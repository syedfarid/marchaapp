<template>
  <div class="content-space-t-3">
    <div class="row">

      <div class="col-12 col-lg-4 slider-small-col d-flex justify-content-center flex-column rounded-top p-8 mb-4 mb-lg-0">
        <h2 class="text-light">Best Deals to Swap</h2>
        <p class="fs-4 text-light">Get a swap deal and enjoy with Marcha.com</p>
        <a class="btn btn-light mt-3 explore-btn-home">Explore All Products</a>
      </div>

      <div class="col-lg-8">
        <!-- <swiper  class="swiper-slide" data-swiper-autoplay="2000" :slides-per-view="2" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange"> -->
        <swiper :navigation="true" :spaceBetween="30" :centeredSlides="false" :slides-per-view="3" :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }" :breakpoints="{
  '@0.00': {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  '@0.75': {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  '@1.00': {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  '@1.50': {
    slidesPerView: 3,
    spaceBetween: 10,
  },
}" :modules="modules" @autoplayTimeLeft="onAutoplayTimeLeft" class="swiper-slide">
          <swiper-slide>

            <div class="card bg-dark text-white">
              <img src="../../assets/img/slider-1.png" class="card-img" alt="...">
              <div class="card-img-overlay d-flex align-items-end justify-content-between">
                <p class="card-text text-white"><small>Ps4 Controller</small></p>
                <p class="card-text text-white"><small>3000-Pkr</small></p>
              </div>
            </div>

          </swiper-slide>

          <swiper-slide>

            <div class="card bg-dark text-white">
              <img src="../../assets/img/slider-2.png" class="card-img" alt="...">
              <div class="card-img-overlay d-flex align-items-end justify-content-between">
                <p class="card-text text-white"><small>Ps4 Controller</small></p>
                <p class="card-text text-white"><small>3000-Pkr</small></p>
              </div>
            </div>

          </swiper-slide>

          <swiper-slide>

            <div class="card bg-dark text-white">
              <img src="../../assets/img/slider-3.png" class="card-img" alt="...">
              <div class="card-img-overlay d-flex align-items-end justify-content-between">
                <p class="card-text text-white"><small>Ps4 Controller</small></p>
                <p class="card-text text-white"><small>3000-Pkr</small></p>
              </div>
            </div>

          </swiper-slide>

          <swiper-slide>

            <div class="card bg-dark text-white">
              <img src="../../assets/img/slider-4.png" class="card-img" alt="...">
              <div class="card-img-overlay d-flex align-items-end justify-content-between">
                <p class="card-text text-white"><small>Ps4 Controller</small></p>
                <p class="card-text text-white"><small>3000-Pkr</small></p>
              </div>
            </div>

          </swiper-slide>

        </swiper>
      </div>

    </div>
  </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'swiper/vue';

import { Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };

    return {
      onSwiper,
      onSlideChange,
      modules: [Autoplay, Navigation],
      autoplay: {
        delay: 400,
        disableOnInteraction: false
      },
    };
  },
};

</script>

<style scoped>
.slider-small-col {
  background-color: #09a247;
}

.slide-img {
  height: 500px;
  width: 300px;
  object-fit: cover;
}

.card,
.card img {
  height: 100%;
}

.card img {
  object-fit: cover;
}

.card-img-overlay {
  padding: 10px !important;
}

.card-text {
  margin: 0px !important;
}
.explore-btn-home {
  font-weight: 500;
}
</style>