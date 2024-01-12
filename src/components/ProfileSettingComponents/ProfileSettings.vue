<template>
    <div id="ProfileSettings pb-10">
        <br>
        <br>
        <br>
        <br>
        <br>
        <div class="container border rounded border-secondary col-12 my-10">
            <h4 class="p-3">My ads settings</h4>
            <hr class="m-0">
            <div class="showPhoneNumber d-flex justify-content-between align-items-center px-3 my-3">
                <h6>Show my phone number in ads</h6>
                <div class="form-check form-switch mb-4">
                    <input type="checkbox" class="form-check-input" id="formSwitch1">
                </div>
            </div>
            <hr class="m-0">
            <div class="createPassword px-3 my-3    ">
                <h4>Create Password</h4>
                <form action="">
                    <div class="mb-3">
                        <input type="text" id="exampleFormControlInput1" class="form-control my-4" placeholder="New Password">
                        <input type="text" id="exampleFormControlInput1" class="form-control my-4" placeholder="Confirm New Password">
                        <button class="btn btn-primary" disabled type="submit">Create Password</button>
                    </div>  
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProfileSettings',
}
</script>

<style scoped></style>