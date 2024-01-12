<template>
<div class="home-main willhavebackground" :style="{'background-image': 'url(' + require('../../assets/img/banner_design_element.png') + ')'}">
<div class="container content-space-t-3">
    <div class="row justify-content-lg-between align-items-lg-center">
      <div class="col-lg-5 mb-5 mb-lg-0">
        <div class="mb-5">
          <img src="../../assets/img/swap_banner.png" class="position-absolute" alt="">
          <h1 class="display-4 text-dark mb-5"><span class="text-primary">Pakistan's </span>First Online Swap Platform.</h1>
          <p class="fs-3">Over 11 Million Products to Exchange with.
          </p>
        </div>

        <div class="d-grid d-sm-flex gap-3 mb-5">
          <a class="btn btn-primary" href="#">Explore Listing</a>
          <a class="btn btn-light btn-pointer" href="#">Get Featured</a>
        </div>
      </div>
      <!-- End Col -->

      <div class="col-lg-6">
        <div class="position-relative">
          <div class="position-relative">
            <img class="img-fluid" src="../../assets/img/banner.png" alt="Image Description">
          </div>

          <!-- Media -->
          <div class="d-inline-block position-absolute top-0 start-0 bg-white w-100 rounded-pill shadow-sm p-2 mt-5 ms-n5" style="max-width: 12rem;">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <span class="avatar avatar-sm avatar-circle">
                  <img class="avatar-img" src="../../assets/img/hero-banner-profile1.png" alt="Image Description">
                </span>
              </div>
              <div class="flex-grow-1 ms-2">
                <div class="fs-5 fw-bold mb-0">Julia</div>
                <span class="d-block fs-6">Fantastic theme!</span>
              </div>
            </div>
          </div>
          <!-- End Media -->

          <!-- Media -->
          <div class="d-inline-block position-absolute bottom-0 start-0 bg-warning w-100 rounded-pill shadow-sm p-2 mb-10 ms-n10" style="max-width: 16rem;">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <span class="avatar avatar-sm avatar-circle">
                  <img class="avatar-img" src="../../assets/img/hero-banner-profile2.jpeg" alt="Image Description">
                </span>
              </div>
              <div class="flex-grow-1 ms-2">
                <div class="fs-5 fw-bold text-dark mb-0">Michael</div>
                <span class="d-block fs-6 text-dark">Excellent documentation 🔥👋</span>
              </div>
            </div>
          </div>
          <!-- End Media -->
        </div>
      </div>
      <!-- End Col -->
    </div>
    <!-- End Row -->
  </div>
</div>
  </template>

<script>

export default{
    name:'HeroBanner'
}
</script>
<style scoped>
.willhavebackground{
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  margin-top: 80px;
}
</style>