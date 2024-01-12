<template>
  <div class="col-12 p-5 pt-10 parentCategoryDiv" :style="{'background-image': 'url(' + require('../../assets/img/banner_design_element2.png') + ')'}">
    <div class="container">
    <h2>Discover Yourself Some <span class="text-primary">Treasures</span></h2>
    <p>Listed Categories with over 11 Million Products to Swap near you.</p>
    <div class="row">
    <div class="col-6 col-md-4 col-lg-2 p-3"><a href=""><img class="categories-images" src="../../assets/img/Categoriesimages15.png"></a></div>
    <div class="col-6 col-md-4 col-lg-2 p-3"><a href=""><img class="categories-images" src="../../assets/img/Categoriesimages14.png"></a></div>
    <div class="col-6 col-md-4 col-lg-2 p-3"><a href=""><img class="categories-images" src="../../assets/img/Categoriesimages13.png"></a></div>
    <div class="col-6 col-md-4 col-lg-2 p-3"><a href=""><img class="categories-images" src="../../assets/img/Categoriesimages12.png"></a></div>
    <div class="col-6 col-md-4 col-lg-2 p-3"><a href=""><img class="categories-images" src="../../assets/img/Categoriesimages11.png"></a></div>
    <div class="col-6 col-md-4 col-lg-2 p-3"><a href=""><img class="categories-images" src="../../assets/img/Categoriesimages10.png"></a></div>
    <div class="col-6 col-md-4 col-lg-2 p-3"><a href=""><img class="categories-images" src="../../assets/img/Categoriesimages9.png"></a></div>
    <div class="col-6 col-md-4 col-lg-2 p-3"><a href=""><img class="categories-images" src="../../assets/img/Categoriesimages8.png"></a></div>
    <div class="col-6 col-md-4 col-lg-2 p-3"><a href=""><img class="categories-images" src="../../assets/img/Categoriesimages7.png"></a></div>
    <div class="col-6 col-md-4 col-lg-2 p-3"><a href=""><img class="categories-images" src="../../assets/img/Categoriesimages6.png"></a></div>
    <div class="col-6 col-md-4 col-lg-2 p-3"><a href=""><img class="categories-images" src="../../assets/img/Categoriesimages5.png"></a></div>
    <div class="col-6 col-md-4 col-lg-2 p-3"><a href=""><img class="categories-images" src="../../assets/img/Categoriesimages4.png"></a></div>
    <div class="col-6 col-md-4 col-lg-2 p-3"><a href=""><img class="categories-images" src="../../assets/img/Categoriesimages3.png"></a></div>
    <div class="col-6 col-md-4 col-lg-2 p-3"><a href=""><img class="categories-images" src="../../assets/img/Categoriesimages2.png"></a></div>
    <div class="col-6 col-md-4 col-lg-2 p-3"><a href=""><img class="categories-images" src="../../assets/img/Categoriesimages1.png"></a></div>
    </div>
    <div class="d-flex justify-content-center my-10">
    <button class="btn btn-primary">View All Categories</button>
    </div>
</div>
  </div>
</template>

<script>
export default {
    name: 'HomeCategories'
}
</script>

<style scoped>
.parentCategoryDiv {
    background-color: #EEEEEE;
    background-position: bottom right;
    background-repeat: no-repeat;
}
.categories-images {
  width: 130px;

}
</style>