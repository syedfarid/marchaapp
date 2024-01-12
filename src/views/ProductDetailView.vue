<template>
  <MarchaHeader/>
  <AdBanner/>
  <ProductBreadCrumb/>
  <ProductDetail/>
  <ProductSimilar/>
  <MarchaFooter/>
</template>

<script>

import MarchaHeader from '@/components/includeComponents/MarchaHeader.vue'
import AdBanner from '@/components/AdComponents/AdBanner.vue'
import ProductBreadCrumb from '@/components/ProductDetailComponents/ProductBreadCrumb.vue'
import ProductDetail from '@/components/ProductDetailComponents/ProductDetail.vue'
import ProductSimilar from '@/components/ProductDetailComponents/ProductSimilar.vue'
import MarchaFooter from '@/components/includeComponents/MarchaFooter.vue'

export default {
    name: 'ProductDetailView',
    components: {
        MarchaHeader,
        AdBanner,
        ProductBreadCrumb,
        ProductDetail,
        ProductSimilar,
        MarchaFooter
    }
}
</script>

<style>

</style>