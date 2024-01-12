<template>
    <div class="col-12 content-space-t-3 mt-5">



        <div class="footer-menu row align-items-end pb-8 rounded-top">
            <div class="container p-10 mb-6 d-none d-lg-block footer-container shadow-md">
            <div class="row">
                <div class="col-12 col-lg-9">
                    <h2>Couldn’t find what you’re <span class="text-primary">Looking for ?</span></h2>
                    <p>We are here to help, get in touch and find more opportunities to expand your career.</p>
                </div>
                <div class="col-12 col-lg-3 d-flex justify-content-center align-items-center">
                    <button class="btn btn-primary">Get Help</button>
                </div>
            </div>
        </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-12">
                        <img src="../../assets/img/footer-white-logo.png" alt="">
                        <div class="py-5 footer-social-icons">
                            <i class="fa-brands fa-square-facebook"></i>
                            <i class="fa-brands fa-square-instagram ms-6"></i>
                            <i class="fa-brands fa-linkedin ms-6"></i>
                            <i class="fa-brands fa-square-dribbble ms-6"></i>
                            <i class="fa-brands fa-square-twitter ms-6"></i>
                        </div>
                        <div class="footer-location d-flex align-items-center">
                            <i class="fa-solid fa-location-dot text-light"></i><p class="fs-4 text-light ms-3">Islamabad, Pakistan</p>
                        </div>
                        <div class="footer-contact d-flex align-items-center">
                            <i class="fa-solid fa-phone text-white"></i><p class="fs-4 text-light ms-3">+92 333 5714484</p>
                        </div>
                    </div>
                    <div class="col-lg-8 col-12 pt-5 row">
                        <div class="col-lg-3 col-6">
                            <h4 class="text-light mb-3">My Account</h4>
                            <p class="text-light fs-4">Sign In</p>
                            <p class="text-light fs-4">Register</p>
                            <p class="text-light fs-4">My Inventory</p>
                        </div>
                        <div class="col-lg-3 col-6">
                            <h4 class="text-light mb-3">Help</h4>
                            <p class="text-light fs-4">Shipping</p>
                            <p class="text-light fs-4">Returns</p>
                            <p class="text-light fs-4">Sizing</p>
                        </div>
                        <div class="col-lg-3 col-6">
                            <h4 class="text-light mb-3">Shop</h4>
                            <p class="text-light fs-4">All Products</p>
                            <p class="text-light fs-4">Sale Products</p>
                            <p class="text-light fs-4">Swap Products</p>
                        </div>
                        <div class="col-lg-3 col-6">
                            <h4 class="text-light mb-3">Legal</h4>
                            <p class="text-light fs-4">Delivery</p>
                            <p class="text-light fs-4">Terms & Conditions</p>
                            <p class="text-light fs-4">Privacy Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-copy py-2">
            <div class="container d-flex flex-column flex-lg-row justify-content-between">
            <p class="mt-3"><small>Copyright ©2024 Marcha.com . All Rights Reserved</small></p>
            <p class="fs-3 mt-3">Crafted by <b>Bingo.</b></p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'MarchaFooter.vue'
}
</script>

<style scoped>
.footer-container {
    background-color: #EEEEEE;
    margin-top: -120px;
    border-radius: 0px 50px 0px 0px;
    box-shadow: 0px 2px 3px  rgba(0,0,0,0.5);
    /* margin-bottom: -px; */
    /* position: relative;
    z-index: 1; */
}

.footer-menu {
    background-color: #4CAF4F;
    min-height: 60vh;
    position: relative;
    z-index: 0;
}

.footer-social-icons i {
    font-size: 28px;
    color: white;
}

.footer-location i {
    font-size: 24px;
}
.footer-copy {
    background-color: #EEEEEE;
    width: 100% !important;
}
</style>