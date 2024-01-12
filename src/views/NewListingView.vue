<template>
  <MarchaHeader/>
  <AdBanner/>
  <PostAd/>
  <MarchaFooter/>
</template>

<script>
import MarchaHeader from '@/components/includeComponents/MarchaHeader.vue'
import AdBanner from '@/components/AdComponents/AdBanner.vue'
import PostAd from '@/components/NewListingComponents/PostAd.vue'
import MarchaFooter from '@/components/includeComponents/MarchaFooter.vue'
export default {
    name: 'NewListingView',
    components: {
        MarchaHeader,
        AdBanner,
        PostAd,
        MarchaFooter
    }
}
</script>

<style>

</style>