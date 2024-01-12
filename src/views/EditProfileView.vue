<template>
    <MarchaHeader/>
    <EditProfileComponent/>
    <DeleteAccountComponent/>
    <MarchaFooter/>
</template>

<script>

import MarchaHeader from '@/components/includeComponents/MarchaHeader.vue'
import EditProfileComponent from '@/components/EditProfileComponents/EditProfileComponent.vue'
import DeleteAccountComponent from '@/components/EditProfileComponents/DeleteAccountComponent.vue'
import MarchaFooter from '@/components/includeComponents/MarchaFooter.vue'

export default {
    name: 'EditProfile',
    components: {
        MarchaHeader,
        EditProfileComponent,
        DeleteAccountComponent,
        MarchaFooter
    }
}
</script>

<style scoped>

</style>