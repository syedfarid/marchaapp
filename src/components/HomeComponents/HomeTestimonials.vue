<template>
      <div class="col-12 p-5 pt-10 HomeTestimonials">
    <div class="container">
    <h2>Discover Yourself Some <span class="text-primary">Treasures</span></h2>
    <p>Listed Categories with over 11 Million Products to Swap near you.</p>

    <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="d-flex flex-column align-items-center text-center p-5">
        <div class="col-10">
        <img src="../../assets/img/hero-banner-profile1.png" class="home-testimonial-slider mb-5" />
        <p>What a brilliant concept! This website has made swapping items a breeze. The interface is user-friendly, and the variety of items available for exchange is amazing. I've not only decluttered my space but also found unique items that I wouldn't have discovered otherwise. Highly recommend!</p>
        <h5>Sarah K.</h5>
          </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="d-flex flex-column align-items-center text-center p-5">
        <div class="col-10">
        <img src="../../assets/img/hero-banner-profile2.jpeg" class="home-testimonial-slider mb-5" />
        <p>I stumbled upon this fantastic item-swapping platform and it has completely transformed the way I acquire new things. The community is friendly, and the swapping process is seamless. I've swapped everything from books to gadgets, and every exchange has been a win-win!</p>
        <h5>John D.</h5>
          </div>
      </div>
    </swiper-slide>
  </swiper>
    </div>
    </div>
  </template>
  
  <script>
    import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
  
export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };

  </script>
  
  <style scoped>
    .HomeTestimonials {
      background-color: #EEEEEE;
    }
    .home-testimonial-slider {
      height: 100px;
      width: 100px;
      object-fit: cover;
      border-radius: 50%;
    }
  </style>