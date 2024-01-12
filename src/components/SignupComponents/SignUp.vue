<template>
  <div class="d-flex align-items-center min-h-100 bg-dark">
    <main id="content" role="main" class="flex-grow-1 overflow-hidden">
    <!-- Content -->
    <div class="container content-space-t-1 content-space-b-2">
      <div class="mx-lg-auto" style="max-width: 55rem;">
        <div class="d-flex justify-content-center align-items-center flex-column min-vh-lg-100">
          <!-- ========== HEADER ========== -->
          <header id="header" class="navbar navbar-height navbar-light mb-3">
            <div class="container">
              <a class="navbar-brand mx-auto" href="./index.html" aria-label="Unify">
                <img class="navbar-brand-logo" src="../../assets/img/logo.png" alt="Image Description">
              </a>
            </div>
          </header>
          <!-- ========== END HEADER ========== -->

          <div class="position-relative">
            <!-- Card -->
            <div class="card card-shadow card-login">
              <div class="row">
                <div class="col-md-8">
                  <div class="card-body">
                    <!-- Form -->
                    <form class="js-validate needs-validation" novalidate="">
                      <div class="text-center">
                        <div class="mb-5">
                          <h3 class="card-title">Create your account</h3>
                        </div>

                        <a class="btn btn-white btn-lg d-grid mb-4" href="#">
                          <span class="d-flex justify-content-center align-items-center">
                            <img class="avatar avatar-xss me-2" src="../../assets/img/google-icon.svg" alt="Image Description">
                            Sign up with Google
                          </span>
                        </a>

                        <span class="divider-center text-muted mb-4">OR</span>
                      </div>

                      <label class="form-label" for="fullNameSrEmail">Full name</label>

                      <!-- Form -->
                      <div class="row">
                        <div class="col-sm-6">
                          <!-- Form -->
                          <div class="mb-4">
                            <input type="text" class="form-control form-control-lg" name="fullName" id="fullNameSrEmail" placeholder="Mark" aria-label="Mark" required="">
                            <span class="invalid-feedback">Please enter your first name.</span>
                          </div>
                          <!-- End Form -->
                        </div>

                        <div class="col-sm-6">
                          <!-- Form -->
                          <div class="mb-4">
                            <input type="text" class="form-control form-control-lg" placeholder="Williams" aria-label="Williams" required="">
                            <span class="invalid-feedback">Please enter your last name.</span>
                          </div>
                          <!-- End Form -->
                        </div>
                      </div>
                      <!-- End Form -->

                      <!-- Form -->
                      <div class="mb-4">
                        <label class="form-label" for="signupSrEmail">Your email</label>
                        <input type="email" class="form-control form-control-lg" name="email" id="signupSrEmail" placeholder="Markwilliams@site.com" aria-label="Markwilliams@site.com" required="">
                        <span class="invalid-feedback">Please enter a valid email address.</span>
                      </div>
                      <!-- End Form -->

                      <!-- Form -->
                      <div class="mb-4">
                        <label class="form-label" for="signupSrPassword">Password</label>

                        <div class="input-group-merge">
                          <input type="password" class="js-toggle-password form-control form-control-lg" name="password" id="signupSrPassword" placeholder="8+ characters required" aria-label="8+ characters required" required="" minlength="8" data-hs-toggle-password-options="{
                                   &quot;target&quot;: [&quot;.js-toggle-password-target-1&quot;, &quot;.js-toggle-password-target-2&quot;],
                                   &quot;defaultClass&quot;: &quot;bi-eye-slash&quot;,
                                   &quot;showClass&quot;: &quot;bi-eye&quot;,
                                   &quot;classChangeTarget&quot;: &quot;.js-toggle-password-show-icon-1&quot;
                                 }">
                          <a class="js-toggle-password-target-1 input-group-append input-group-text" href="javascript:;">
                            <i class="js-toggle-password-show-icon-1 bi-eye-slash"></i>
                          </a>

                          <span class="invalid-feedback">Your password is invalid. Please try again.</span>
                        </div>
                      </div>
                      <!-- End Form -->

                      <!-- Form -->
                      <div class="mb-4">
                        <label class="form-label" for="signupSrConfirmPassword">Confirm password</label>

                        <div class="input-group-merge">
                          <input type="password" class="js-toggle-password form-control form-control-lg" name="confirmPassword" id="signupSrConfirmPassword" placeholder="8+ characters required" aria-label="8+ characters required" required="" minlength="8" data-hs-toggle-password-options="{
                                   &quot;target&quot;: [&quot;.js-toggle-password-target-1&quot;, &quot;.js-toggle-password-target-2&quot;],
                                   &quot;defaultClass&quot;: &quot;bi-eye-slash&quot;,
                                   &quot;showClass&quot;: &quot;bi-eye&quot;,
                                   &quot;classChangeTarget&quot;: &quot;.js-toggle-password-show-icon-2&quot;
                                 }">
                          <a class="js-toggle-password-target-2 input-group-append input-group-text" href="javascript:;">
                            <i class="js-toggle-password-show-icon-2 bi-eye-slash"></i>
                          </a>

                          <span class="invalid-feedback">Password does not match the confirm password.</span>
                        </div>
                      </div>
                      <!-- End Form -->

                      <!-- Form Check -->
                      <div class="form-check mb-4">
                        <input class="form-check-input" type="checkbox" value="" id="termsCheckbox" required="">
                        <label class="form-check-label" for="termsCheckbox">I accept the <a href="#">Terms and Conditions</a></label>
                        <span class="invalid-feedback">Please accept our Terms and Conditions.</span>
                      </div>
                      <!-- End Form Check -->

                      <div class="d-grid gap-4">
                        <button type="submit" class="btn btn-primary btn-lg">Create an account</button>
                        <p class="card-text text-muted">Remember your password? <router-link class="link" to="/logIn">Log in</router-link></p>
                      </div>
                    </form>
                    <!-- End Form -->
                  </div>
                </div>
                <!-- End Col -->

                <div class="col-md-4 d-md-flex justify-content-center flex-column bg-soft-primary p-8 p-md-5" style="background-image: url(./assets/svg/components/wave-pattern.svg);">
                  <h5 class="mb-4">Build digital products with:</h5>

                  <!-- List Checked -->
                  <ul class="list-checked list-checked-primary list-py-2">
                    <li class="list-checked-item">All-in-one tool</li>
                    <li class="list-checked-item">Easily add &amp; manage your services</li>
                  </ul>
                  <!-- End List Checked -->

                  <span class="d-block">
                    <a class="link link-pointer" href="#">Learn more</a>
                  </span>
                </div>
                <!-- End Col -->
              </div>
              <!-- End Row -->
            </div>
            <!-- End Card -->

            <!-- SVG Shape -->
            <figure class="position-absolute top-0 end-0 zi-n1 d-none d-sm-block mt-n7 me-n10" style="width: 4rem;">
              <img class="img-fluid" src="../../assets/img/pointer-up.svg" alt="Image Description">
            </figure>
            <!-- End SVG Shape -->

            <!-- SVG Shape -->
            <figure class="position-absolute bottom-0 start-0 d-none d-sm-block ms-n10 mb-n10" style="width: 15rem;">
              <img class="img-fluid" src="../../assets/img/curved-shape.svg" alt="Image Description">
            </figure>
            <!-- End SVG Shape -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Content -->
  </main>
  </div>
</template>

<script>
export default {
    name: 'SignUp'
}
</script>

<style>

</style>