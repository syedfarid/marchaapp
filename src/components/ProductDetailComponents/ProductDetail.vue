<template>
    <div class="product-detail">
        <div class="container">
            <div class="row">
                <div class="col-12 col-lg-8 py-6">
                    <div class="product-header d-flex justify-content-between border rounded-top border-3 p-3">
                        <div class="product-title d-flex align-items-center">
                            <h3>IPhone 7s plus For Sale</h3>
                        </div>
                        <div class="productIcons d-flex align-items-center">
                            <i class="fa-solid fa-share-nodes p-3"></i>
                            <i class="fa-solid fa-heart p-3"></i>
                        </div>
                    </div>
                    <div class="swiper-slider">
                        <swiper :navigation="true" :modules="modules" class="mySwiper">
                            <swiper-slide><img src="../../assets/img/ProductDemo1.png" class="product-slider"
                                    alt=""></swiper-slide>
                            <swiper-slide><img src="../../assets/img/ProductDemo2.png" class="product-slider"
                                    alt=""></swiper-slide>
                            <swiper-slide><img src="../../assets/img/ProductDemo3.png" class="product-slider"
                                    alt=""></swiper-slide>
                            <swiper-slide><img src="../../assets/img/ProductDemo4.png" class="product-slider"
                                    alt=""></swiper-slide>
                        </swiper>
                    </div>
                    <div class="product-details my-6 rounded p-6 col-12">
                        <div class="col-12">
                            <h2>Details</h2>
                            <!-- Table -->
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Company</th>
                                        <td scope="col">Apple</td>
                                        <th scope="col">Color</th>
                                        <td scope="col">Red</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">Price</th>
                                        <td>15000 - PKR</td>
                                        <td>Condition</td>
                                        <td>Used</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Assembly</th>
                                        <td>UK</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Rom</th>
                                        <td>128 GB</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Ram</th>
                                        <td>4 GB</td>
                                    </tr>
                                </tbody>
                            </table>
                            <!-- End Table -->
                        </div>
                    </div>
                    <div class="product-description rounded p-6 my-6">
                        <h2 class="product-title pb-3">Description</h2>
                        <p class="pb-3">Brand new Used phone.<br>Comes with a charger and box.</p>
                        <p class="py-3">Always mention MarchaPK for best deals.</p>
                    </div>
                </div>
                <div class="col-12 col-lg-4 my-6">
                    <div class="seller-contact rounded p-8 d-flex flex-column align-items-center justify-contet">
                        <h3 class="text-primary">15000-PKR</h3>
                        <!-- This is Button -->
                        <button class="btn btn-primary p-1 m-2">
                            <i class="fa-solid fa-phone p-3 phone-icon"></i>
                            0333 xxxxxxx <br>
                            Show Phone Number
                        </button>
                        <!-- This is Button -->
                        <button class="btn btn-success p-1 m-2">
                            <i class="fa-solid fa-envelope message-icon"></i>
                            SEND MESSAGE
                        </button>
                    </div>

                    <div class="seller-contact2 my-6 p-5 rounded">
                        <h4 class="text-center">Dealer <span class="text-primary">Information</span></h4>
                        <span class="divider-start bg-primary"></span>
                        <div class="seller-profile d-flex align-items-center">
                            <img src="../../assets/img/seller-profile.png" class="p-3" alt="">
                            <h5>Asif Shahzad</h5>
                        </div>
                        <div class="seller-location p-3 border border-danger rounded">
                            <h4>Location</h4>
                            <p class="location-text"><i class="fa-solid fa-xl fa-location-dot"></i>&nbsp; G14 Near Metro
                                Station, Islamabad, Pakistan</p>
                        </div>
                    </div>

                    <SideAdBanner />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import SideAdBanner from '@/components/AdComponents/SideAdBanner.vue'

import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export default {
    name: 'ProductDetail',
    components: {
        Swiper,
        SwiperSlide,
        SideAdBanner
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },
};
</script>

<style scoped>
.product-slider {
    width: 100%;
    height: 700px;
    object-fit: cover;
}

.productIcons {
    font-size: 38px;
    color: #6a374b;
}

.seller-contact,
.seller-contact2 {
    background-color: #eeeeee;
}

/* .phone-icon, .message-icon {
    font-size: 34px;
} */
.seller-contact button {
    min-width: 310px;
}

.location-text {
    text-align: center;
}

.product-details {
    background-color: #eeeeee;
}

.product-description {
    background-color: #eeeeee;
}
</style>