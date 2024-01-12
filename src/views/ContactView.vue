<template>
  <MarchaHeader/>
  <AdBanner/>
  <ContactWithUs/>
  <MarchaFooter/>
</template>


<script>

import MarchaHeader from '@/components/includeComponents/MarchaHeader.vue'
import AdBanner from '@/components/AdComponents/AdBanner.vue'
import ContactWithUs from '@/components/ContactComponents/ContactWithUs.vue'
import MarchaFooter from '@/components/includeComponents/MarchaFooter.vue'

export default {
    name: 'ContactView',
    components: {
        MarchaHeader,
        AdBanner,
        ContactWithUs,
        MarchaFooter
    }
}
</script>

<style>

</style>