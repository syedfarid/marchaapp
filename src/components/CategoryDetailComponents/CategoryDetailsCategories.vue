<template>
  <div class="all-categories">
    <div class="container py-7">
        <div class="d-flex category-images">
        <a href="" class="me-3 pb-2"><img src="../../assets/img/Categoriesimages1.png" alt=""></a>
        <a href="" class="me-3 pb-2"><img src="../../assets/img/Categoriesimages2.png" alt=""></a>
        <a href="" class="me-3 pb-2"><img src="../../assets/img/Categoriesimages3.png" alt=""></a>
        <a href="" class="me-3 pb-2"><img src="../../assets/img/Categoriesimages4.png" alt=""></a>
        <a href="" class="me-3 pb-2"><img src="../../assets/img/Categoriesimages5.png" alt=""></a>
        <a href="" class="me-3 pb-2"><img src="../../assets/img/Categoriesimages6.png" alt=""></a>
        <a href="" class="me-3 pb-2"><img src="../../assets/img/Categoriesimages7.png" alt=""></a>
        <a href="" class="me-3 pb-2"><img src="../../assets/img/Categoriesimages8.png" alt=""></a>
        <a href="" class="me-3 pb-2"><img src="../../assets/img/Categoriesimages9.png" alt=""></a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CategoryDetailsCategories'
}
</script>

<style scoped>
.category-images {
    overflow-x: scroll;
}
.category-images::-webkit-scrollbar {
    height: 5px;
}
.category-images::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px #bcacac;
}
.category-images::-webkit-scrollbar-thumb {
    background-color: darkgrey;
}
</style>