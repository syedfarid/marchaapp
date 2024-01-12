<template>
    <MarchaHeader/>
    <HeroBanner/>
    <HomeSlider/>
    <HomeAppSection/>
    <HomeCategories/>
    <HomeInfoSection/>
    <HomeTestimonials/>
    <MarchaFooter/>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import MarchaHeader from '@/components/includeComponents/MarchaHeader.vue'
import HeroBanner from '@/components/HomeComponents/HeroBanner.vue'
import HomeSlider from '@/components/HomeComponents/HomeSlider.vue'
import HomeAppSection from '@/components/HomeComponents/HomeAppSection.vue'
import HomeCategories from '@/components/HomeComponents/HomeCategories.vue'
import HomeInfoSection from '@/components/HomeComponents/HomeInfoSection.vue'
import HomeTestimonials from '@/components/HomeComponents/HomeTestimonials.vue'
import MarchaFooter from '@/components/includeComponents/MarchaFooter.vue'

export default {
  name: 'HomeView',
  components: {
    MarchaHeader,
    HeroBanner,
    HomeSlider,
    HomeAppSection,
    HomeCategories,
    HomeInfoSection,
    HomeTestimonials,
    MarchaFooter
  }
}
</script>