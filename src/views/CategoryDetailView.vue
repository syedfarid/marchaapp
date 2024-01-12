<template>
  <MarchaHeader/>
  <AdBanner/>
  <CategoryDetailsTags/>
  <CategoryDetailsCategories/>
  <CategoryDetailsItems/>
  <MarchaFooter/>
</template>

<script>
import MarchaHeader from '@/components/includeComponents/MarchaHeader.vue'
import AdBanner from '@/components/AdComponents/AdBanner.vue'
import CategoryDetailsTags from '@/components/CategoryDetailComponents/CategoryDetailsTags.vue'
import CategoryDetailsCategories from '@/components/CategoryDetailComponents/CategoryDetailsCategories.vue'
import CategoryDetailsItems from '@/components/CategoryDetailComponents/CategoryDetailsItems.vue'
import MarchaFooter from '@/components/includeComponents/MarchaFooter.vue'

export default {
    name: 'SignupView',
    components: {
        MarchaHeader,
        AdBanner,
        CategoryDetailsTags,
        CategoryDetailsCategories,
        CategoryDetailsItems,
        MarchaFooter
    }
}
</script>

<style>

</style>