<template>
    <div id="PostAd">
        <div class="container-md">
            <div class="PostAdHeading text-center p-7">
                <p>get the best value in return</p>
                <h3>Post an Ad</h3>
            </div>
            <div class="PostAdMain p-8 rounded">
                <div class="row">
                <div class="col-0 col-md-2"></div>
                <div class="col-12 col-md-8">
                    <form action="" method="post">
                        <div class="mb-4">
                            <label for="AddPhotos" class="form-label"><i class="fa-solid fa-image"></i> &nbsp;Add Photos</label>
                            <input class="form-control" type="file" id="AddPhotos">
                        </div>

                        <div class="mb-4">
                            <label class="form-label" for="ProductTitle"><i class="fa-solid fa-pencil"></i> &nbsp; Product Title</label>
                            <input type="text" class="form-control form-control-lg" name="ProductTitle" id="ProductTitle"
                                placeholder="iPhone etc..">
                        </div>

                        <div class="mb-3">
                            <label class="form-label" for="exampleFormControlSelect1"><i class="fa-solid fa-table-cells-large"></i> &nbsp; Category</label>
                            <select id="exampleFormControlSelect1" class="form-control">
                                <option>Select Category</option>
                                <option>1</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>

                        <div class="mb-4">
                            <label class="form-label" for="ProductDescription"><i class="fa-regular fa-file-lines"></i> &nbsp; Product Description</label>
                            <input type="text" class="form-control form-control-lg" name="ProductDescription" id="ProductDescription"
                                placeholder="Description">
                        </div>

                        <div class="row">
                        <div class="col-4">
                            <div class="mb-3">
                            <label class="form-label" for="exampleFormControlSelect1"><i class="fa-solid fa-wallet"></i> &nbsp; Price</label>
                            <select id="exampleFormControlSelect1" class="form-control">
                                <option>Select Price Unit</option>
                                <option>GDP</option>
                                <option>USD</option>
                                <option>PKR</option>
                            </select>
                        </div>
                        </div>
                        <div class="col-8">
                            <div class="mb-4">
                            <label class="form-label" for="ProductPrice">Add Your Price Here</label>
                            <input type="text" class="form-control form-control-lg" name="ProductPrice" id="ProductPrice"
                                placeholder="Product Price">
                        </div>
                        </div>
                    </div>

                    <div class="mb-4">
                            <label class="form-label" for="ProductLocation"><i class="fa-solid fa-location-dot"></i> &nbsp; Location</label>
                            <input type="text" class="form-control form-control-lg" name="ProductLocation" id="ProductLoaction"
                                placeholder="Address">
                        </div>

                    <button class="btn btn-primary m-auto">Submit</button>
                    </form>
                </div>
                <div class="col-0 col-md-2"></div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PostAd'
}
</script>

<style>
.PostAdHeading::after {
    content: "";
    display: inline-block;
    height: 5px;
    width: 5%;
    background-color: #4D4D4D;
    border-radius: 10px;
}
label {
    color: black;
}
</style>