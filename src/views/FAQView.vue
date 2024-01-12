<template>
  <MarchaHeader/>
  <AdBanner/>
  <FAQSection/>
  <MarchaFooter/>
</template>

<script>

import MarchaHeader from '@/components/includeComponents/MarchaHeader.vue'
import AdBanner from '@/components/AdComponents/AdBanner.vue';
import FAQSection from '@/components/FAQComponents/FAQSection.vue'
import MarchaFooter from '@/components/includeComponents/MarchaFooter.vue'

export default {
    name: 'FAQView',
    components: {
        MarchaHeader,
        AdBanner,
        FAQSection,
        MarchaFooter
    }
}
</script>

<style>

</style>