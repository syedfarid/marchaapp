<template>
    <div class="container">
        <h3 class="pb-5">Similar <span class="text-primary">Products</span></h3>
        <div class="row">
            <div class="col-12 col-lg-4 py-5">
                <!-- Card -->
                <div class="card">
                    <img class="card-img card-img-top" src="../../assets/img/ProductDemo2.png" alt="Card image cap">
                    <div class="card-img-overlay d-flex flex-column justify-content-between">
                        <div class="card-fav d-flex justify-content-end">
                            <i class="fa-regular fa-heart position-aboslute top-3"></i>
                        </div>
                        <div class="card-text-overlay d-flex justify-content-between">
                            <p class="card-text text-white fs-3">PS4 Controller</p>
                            <p class="card-text text-white fs-3">3000-PKR</p>
                        </div>
                    </div>
                </div>
                <!-- End Card -->
            </div>
            <div class="col-12 col-lg-4 py-5">
                <!-- Card -->
                <div class="card">
                    <img class="card-img card-img-top" src="../../assets/img/ProductDemo2.png" alt="Card image cap">
                    <div class="card-img-overlay d-flex flex-column justify-content-between">
                        <div class="card-fav d-flex justify-content-end">
                            <i class="fa-regular fa-heart position-aboslute top-3"></i>
                        </div>
                        <div class="card-text-overlay d-flex justify-content-between">
                            <p class="card-text text-white fs-3">PS4 Controller</p>
                            <p class="card-text text-white fs-3">3000-PKR</p>
                        </div>
                    </div>
                </div>
                <!-- End Card -->
            </div>
            <div class="col-12 col-lg-4 py-5">
                <!-- Card -->
                <div class="card">
                    <img class="card-img card-img-top" src="../../assets/img/ProductDemo2.png" alt="Card image cap">
                    <div class="card-img-overlay d-flex flex-column justify-content-between">
                        <div class="card-fav d-flex justify-content-end">
                            <i class="fa-regular fa-heart position-aboslute top-3"></i>
                        </div>
                        <div class="card-text-overlay d-flex justify-content-between">
                            <p class="card-text text-white fs-3">PS4 Controller</p>
                            <p class="card-text text-white fs-3">3000-PKR</p>
                        </div>
                    </div>
                </div>
                <!-- End Card -->
            </div>
        </div> <!-- Row Ends Here -->
        <div class="d-flex justify-content-center">
        <button class="btn btn-primary mt-10 text-center shadow-sm">Load More</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductSimilar'
}
</script>

<style scoped>
.card p {
    margin: 0 !important;
}

.card img {
    height: 600px !important;
    object-fit: cover;
}
.card-fav i {
    color: #fff;
    font-size: 28px;
}
</style>