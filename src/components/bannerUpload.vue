<template>
<div>
  <div class="container" id="uploadselect">
        <div class="row">
            <div class="col-md-6 m-auto">
                    <h1 class="text-center display-4 my-4">Banner Uploads</h1>
                    <form action="http://thejasshop.com:5000/bannerupload" method="POST" enctype="multipart/form-data">
                    <div class="custom-file">
                        <input type="file" name="file" id="customFile" class="custom-file-input">
                        <label for="customFile" class="custom-file-label">Select Image</label>
                    </div>
                    <input type="submit" value="submit" @click="prevention()" class="btn btn-primary btn-block">
                    </form>
                </div>
        </div>
    </div>
                     <!-- <hr>
                    {{files}}
                    <hr> -->
                    
    <div class="container-fluid">
        <div class="d-flex flex-sm-row">
            <div class="col-md-1 col-sm-1 col-lg-1" v-for="file in files" v-bind:key="file._id"  >
                <img class="img-fluid" :src="'http://localhost:5000/bannerupload/'+file._id" style="width:100%" > 
                <button class="btn btn-danger" @click="deleteImage(file._id)">Delete</button>
            </div>
        </div>
    </div>
</div>
                   
                   
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            files:''
        }
        
    },
    created () {
    axios.get('http://localhost:5000/bannerupload')
      .then(res => {
        const data = res.data
        this.files=data
      })
  },
  methods:{
      deleteImage(filename){
          axios.delete('http://localhost:5000/bannerupload/delete/'+filename)
          window.location.reload()
  
      },
      prevention(){
          windod.location.reload()
      }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#banners{
    height:300px;
    /* background-color: #050513; */
    margin-top:1%;
    padding:5% 0%;
    position: absolute;;
    width:100%;
}
#banner{
    /* height:0px; */
    color:aliceblue
    /* width:0px; */
    /* padding:0 0; */
    /* margin:1px 2px;   */
}
#uploadselect{
    margin-top: 3%;
    padding:2% 2%
}
#deletebtn{
    padding:5px 5px;
}
</style>
