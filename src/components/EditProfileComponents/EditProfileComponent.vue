<template>
  <div id="EditProfile">
    <br>
    <br>
    <div class="container border border-2 rounded my-10 p-4">
      <h4>Edit Profile</h4>
      <hr class="my-4">
      <h6>Profile Photo</h6>
      <div class="editProfilePicture row">
        <div class="col-3 col-md-1">
          <img class="img-fluid rounded-circle" src="../../assets/img/profilephoto.png" alt="Completely round image" />
        </div>
        <div class="col-9 col-md-11">
          <label for="UploadPhoto" class="btn btn-primary">
            <input type="file" class="btn btn-primary" id="UploadPhoto">
            Upload Photo
          </label>
          <p class="fs-6 my-2">Upload Your Profile Picture Here</p>
        </div>
      </div>
      <hr class="my-4">
      <div class="row col-12">
        <div class="mb-3 col-12">
          <label class="form-label" for="exampleFormControlInput1">Name</label>
          <input type="text" id="exampleFormControlInput1" class="form-control" placeholder="John Doe">
        </div>
        <div class="mb-3 col-12">
          <label class="form-label" for="exampleFormControlInput2">Date of Birth</label>
          <input type="date" id="exampleFormControlInput2" class="form-control">
        </div>
      </div>
      <div class="row col-12">
        <div class="mb-3 col-12">
          <label class="form-label" for="exampleFormControlInput3">Gender</label>
          <select class="form-select" id="exampleFormControlSelect1">
            <option selected>Choose...</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div class="mb-3 col-12">
          <label class="form-label" for="exampleFormControlTextarea1">About Me</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </div>
      <hr class="my-4">
      <div class="row col-12">
        <h6>Contact information</h6>
        <div class="mb-3 col-12">
          <label class="form-label" for="exampleFormControlInput4">Email address</label>
          <input type="email" id="exampleFormControlInput4" class="form-control" placeholder="johndoe@example.com">
        </div>

        <div class="mb-3 col-12">
          <label class="form-label" for="exampleFormControlInput5">Phone Number</label>
          <input type="tel" id="exampleFormControlInput5" class="form-control" placeholder="+1-555-555-5555">
        </div>
        <div class="col-12 text-nowrap">
        <button type="submit" class="btn btn-primary">Save Changes</button>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EditProfileComponent',

}



</script>

<style scoped>
#UploadPhoto {
  visibility: hidden;
  position: absolute;
}

.form-control,.form-select {
  border-color: black;
}
</style>