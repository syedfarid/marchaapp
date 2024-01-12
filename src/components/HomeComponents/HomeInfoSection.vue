<template>
  <!-- Features -->
<div class="overflow-hidden">
  <div class="container content-space-1">
    <!-- Heading -->
    <div class="w-lg-65 text-center mx-lg-auto mb-5 mb-sm-7 mb-lg-10">
      <h2>Fast and easy</h2>
      <p>We enrich human lives through the thoughtful application of design and technology</p>
    </div>
    <!-- End Heading -->

    <div class="position-relative content-space-1">
      <div class="row justify-content-lg-between align-items-md-center">
        <div class="col-md-6 col-lg-5 order-md-2 mb-7 mb-md-0">
          <div class="mb-5">
            <h3>Fully customizable rules to match your unique needs</h3>
          </div>

          <!-- Nav Pills -->
          <ul class="nav nav-pills nav-pills-shadow flex-md-column gap-md-1" id="featuresTab" role="tablist">
            <li class="nav-item" role="presentation">
              <a class="nav-link active" href="#featuresThree" id="featuresOne-tab" data-bs-toggle="tab" data-bs-target="#featuresOne" role="tab" aria-controls="featuresOne" aria-selected="false">
                <!-- Media -->
                <div class="d-flex">
                  <i class="bi-app-indicator fs-2 text-success"></i>
                  <div class="flex-grow-1 ms-4">
                    <h6 class="text-success mb-1">Advanced tools</h6>
                    <p class="text-body mb-0">Use Unify thoroughly thought and automated libraries to manage your businesses.</p>
                  </div>
                </div>
                <!-- End Media -->
              </a>
            </li>

            <li class="nav-item" role="presentation">
              <a class="nav-link" href="#featuresTwo" id="featuresTwo-tab" data-bs-toggle="tab" data-bs-target="#featuresTwo" role="tab" aria-controls="featuresTwo" aria-selected="true">
                <!-- Media -->
                <div class="d-flex">
                  <i class="bi-graph-up fs-2 text-success"></i>
                  <div class="flex-grow-1 ms-4">
                    <h6 class="text-success mb-1">Smart dashboards</h6>
                    <p class="text-body mb-0">Quickly Unify sample components, copy-paste codes, and start right off.</p>
                  </div>
                </div>
                <!-- End Media -->
              </a>
            </li>

            <li class="nav-item" role="presentation">
              <a class="nav-link" href="#featuresThree" id="featuresThree-tab" data-bs-toggle="tab" data-bs-target="#featuresThree" role="tab" aria-controls="featuresThree" aria-selected="false">
                <!-- Media -->
                <div class="d-flex">
                  <i class="bi-lightning fs-2 text-success"></i>
                  <div class="flex-grow-1 ms-4">
                    <h6 class="text-success mb-1">Powerful features</h6>
                    <p class="text-body mb-0">Reduce time and effort on building modern look design with Unify only.</p>
                  </div>
                </div>
                <!-- End Media -->
              </a>
            </li>
          </ul>
          <!-- End Nav Pills -->
        </div>
        <!-- End Col -->

        <div class="col-md-6">
          <div class="position-relative">
            <!-- Tab Content -->
            <div class="tab-content" id="featuresTabContent">
              <div class="tab-pane fade show active" id="featuresOne" role="tabpanel" aria-labelledby="featuresOne-tab">
                <img class="img-fluid shadow rounded-3" src="../../assets/img/slider-1.png" alt="Image Description">
              </div>

              <div class="tab-pane fade" id="featuresTwo" role="tabpanel" aria-labelledby="featuresTwo-tab">
                <img class="img-fluid shadow rounded-3" src="../../assets/img/slider-1.png" alt="Image Description">
              </div>

              <div class="tab-pane fade" id="featuresThree" role="tabpanel" aria-labelledby="featuresThree-tab">
                <img class="img-fluid shadow rounded-3" src="../../assets/img/slider-1.png" alt="Image Description">
              </div>
            </div>
            <!-- End Tab Content -->

            <!-- SVG Shape -->
            <figure class="position-absolute top-0 end-0 mt-n5 me-n10" style="width: 4rem;">
              <img class="img-fluid" src="../../assets/img/pointer-up.svg" alt="Image Description">
            </figure>
            <!-- End SVG Shape -->
          </div>
        </div>
        <!-- End Col -->
      </div>
      <!-- End Row -->

      <div class="position-absolute top-0 end-0 w-100 w-lg-65 h-65 h-md-100 bg-soft-primary rounded-3 zi-n1 me-n5"></div>
    </div>
  </div>
</div>
<!-- End Features -->
</template>

<script>
export default {
    name: 'HomeInfoSection'
}
</script>

<style>

.infoCard {
    background-color: rgba(255, 255, 255, 0.7);
}

.infotabimage {
    width: 500px;
}
</style>