<template>
  <header id="header" class="navbar navbar-expand-lg navbar-end navbar-light navbar-absolute-top navbar-show-hide"
    data-hs-header-options='{
            "fixMoment": 0,
            "fixEffect": "slide"
          }'>
    <div class="container">
      <nav class="js-mega-menu navbar-nav-wrap">
        <!-- Default Logo -->
        <a class="navbar-brand" href="./index.html">
          <img class="navbar-brand-logo marcha-header-logo" src="../../assets/img/logo.png" alt="Image Description">
        </a>
        <!-- End Default Logo -->

        <!-- Toggler -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-default">
            <i class="bi-list"></i>
          </span>
          <span class="navbar-toggler-toggled">
            <i class="bi-x"></i>
          </span>
        </button>
        <!-- End Toggler -->

        <!-- Collapse -->
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <div class="navbar-absolute-top-scroller">
            <ul class="navbar-nav nav-pills">

              <!-- Menu Items -->
              <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
              </li>

              <li class="nav-item">
                <router-link class="nav-link" to="/Products">Products</router-link>
              </li>

              <li class="nav-item">
                <router-link class="nav-link" to="/Career">Careers</router-link>
              </li>

              <li class="nav-item">
                <router-link class="nav-add-listing" to="/NewListing"><i class="fa-solid fa-plus"></i>&nbsp;Add New Listing</router-link>
              </li>

              <li class="nav-item mx-4">
                <router-link class="btn btn-primary" to="/login">Login</router-link>
              </li>
              <!-- End Menu Items -->

            </ul>
          </div>
        </div>
        <!-- End Collapse -->
      </nav>
    </div>
  </header>
</template>

<script>
export default {
    name: 'MarchaHeader'
}
</script>

<style scoped>
.marcha-header-logo  {
  width: 150px !important;
  max-width: 150px;
}
</style>