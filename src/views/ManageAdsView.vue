<template>
  <MarchaHeader/>
  <ManageAdsComponent/>
</template>

<script>

import MarchaHeader from '@/components/includeComponents/MarchaHeader.vue'
import ManageAdsComponent from '@/components/ManageAdsComponents/ManageAdsComponent.vue'

export default {
    name: 'ManageAdsView',
    components: {
        MarchaHeader,
        ManageAdsComponent
    }
}
</script>

<style>

</style>