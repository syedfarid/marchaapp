<template>
  <div class="d-flex bg-img-center mt-8" :style="{'background-image': 'url(' + require('../../assets/img/appBanner.png') + ')'}">
      <div class="container d-flex justify-content-center align-items-center min-vh-lg-100 content-space-1 content-space-lg-b-3">
        <div class="w-lg-50">
          <h1 class="display-6 text-dark text-center">SWAP YOUR STUFF & BAG A BARGAIN.</h1>
          <p class="lead text-dark text-center fs-2">and get the best value in return</p>
          <div class="app-download d-flex flex-lg-row justify-content-around mt-8">
          <a href=""><img src="../../assets/img/playstoredownload.png" alt=""></a>
          <a href=""><img src="../../assets/img/applestoredownload.png" alt=""></a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'HomeAppSection',
}
</script>

<style>

</style>