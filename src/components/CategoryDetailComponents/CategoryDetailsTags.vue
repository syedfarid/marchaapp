<template>
    <div class="categories willhavebackground mt-10"
        :style="{ 'background-image': 'url(' + require('../../assets/img/banner_design_element2.png') + ')' }">
        <div class="container pt-10">
            <h2>Sell, Buy or Exchange <span class="text-primary">Easy & Fast</span></h2>
            <p>Check out our top selling items.</p>
            <div class="container">
                <div class="d-flex category-tag p-3">
            <a href="" class="btn btn-primary me-5 category-tags">Honda</a>
            <a href="" class="btn btn-primary me-5 category-tags">iPhone</a>
            <a href="" class="btn btn-primary me-5 category-tags">CD 125</a>
            <a href="" class="btn btn-primary me-5 category-tags">TV</a>
            <a href="" class="btn btn-primary me-5 category-tags">Apartment</a>
            <a href="" class="btn btn-primary me-5 category-tags">TV</a>
            <a href="" class="btn btn-primary me-5 category-tags">Apartment</a>
            <a href="" class="btn btn-primary me-5 category-tags">TV</a>
            <a href="" class="btn btn-primary me-5 category-tags">Apartment</a>
            <a href="" class="btn btn-primary me-5 category-tags">TV</a>
            <a href="" class="btn btn-primary me-5 category-tags">Apartment</a>
            </div>
            </div>    
        </div>
    </div>
</template>

<script>
export default {
    name: 'CategoryDetailsTags'
}
</script>

<style scoped>
.willhavebackground {
    background-size: contain;
    background-position: right;
    background-repeat: no-repeat;
}

.category-tags {
    border-radius: 10px 40px 10px 10px !important;
    background-color: #EEEEEE;
    border: none;
    color: #000;
    box-shadow: 0px 5px 5px #888888;;
    font-weight: 400;
    white-space: nowrap;
    font-size: 14px;
}
.category-tag {
    overflow-x: scroll;
}
.category-tag::-webkit-scrollbar {
    height: 5px;
}
.category-tag::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px #bcacac;
}
.category-tag::-webkit-scrollbar-thumb {
    background-color: darkgrey;
}
</style>