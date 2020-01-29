<template>
    <div>
    <div class="container" id="uploadxlsx">
        <div class="row">
            <div class="col-md-6 m-auto">
                    <h1 class="text-center display-4 my-4">upload online products</h1>
                    <form action="http://localhost:5000/online_product" method="POST" enctype="multipart/form-data">
                    <div class="custom-file">
                        <input type="file" name="file" id="customFile" class="custom-file-input">
                        <label for="customFile" class="custom-file-label">Upload csv</label>
                    </div>
                    <input type="submit" value="submit" class="btn btn-primary btn-block">
                    </form>
                </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped>
#uploadxlsx{
    margin-top:5%
}
</style>