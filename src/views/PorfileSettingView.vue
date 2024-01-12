<template>
  <MarchaHeader/>
  <ProfileSettings/>
  <MarchaFooter/>
</template>

<script>

import MarchaHeader from '@/components/includeComponents/MarchaHeader.vue'
import ProfileSettings from '@/components/ProfileSettingComponents/ProfileSettings.vue'
import MarchaFooter from '@/components/includeComponents/MarchaFooter.vue'

export default {
    name: 'ProfileSettingView',
    components: {
        MarchaHeader,
        ProfileSettings,
        MarchaFooter
    }
}
</script>

<style>

</style>