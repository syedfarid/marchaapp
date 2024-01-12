<template>
    
  <MarchaHeader/>
  <AdBanner/>
  <CareerBreadCrumb/>
  <CareerJobs/>
  <MarchaFooter/>

</template>

<script>

import MarchaHeader from '@/components/includeComponents/MarchaHeader.vue'
import AdBanner from '@/components/AdComponents/AdBanner.vue'
import CareerBreadCrumb from '@/components/CareerComponents/CareerBreadCrumb.vue'
import CareerJobs from '@/components/CareerComponents/CareerJobs.vue'
import MarchaFooter from '@/components/includeComponents/MarchaFooter.vue'

export default {
  name: 'CareerView',
  components: {
    MarchaHeader,
    AdBanner,
    CareerBreadCrumb,
    CareerJobs,
    MarchaFooter
  }
}
</script>

<style>

</style>