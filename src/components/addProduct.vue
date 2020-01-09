<template>
<div id="addproduct">
 <!-- {{$route.params.store_name}}  -->
 <!-- <form action="http://localhost:5000/pImageupload" method="POST" enctype="multipart/form-data">
  <div class="form-row">
    <div class="form-group col-md-6">
    <div class="mx-auto" style="width:85%;">
      <label for="inputFirstName"></label>
      <input type="email" class="form-control" id="inputFirstName" placeholder="Product Title" v-model="product.productTitle">
    </div>
    </div>
    <div class="form-group col-md-2">
      <label for="inputLastName"></label>
      <div class="mx-auto" style="width:65%">
      <select id="inputState" class="form-control" v-model="product.category">
        <option selected>Category</option>
        <option></option>
      </select>
    </div>
    </div>
       <div class="form-group col-md-2">
      <label for="inputLastName"></label>
      <div class="mx-auto" style="width:65%">
      <select id="inputState" class="form-control" v-model="product.sub1">
        <option selected>Sub-Category 1</option>
        <option></option>
      </select>
    </div>
    </div>
       <div class="form-group col-md-2">
      <label for="inputLastName"></label>
      <div class="mx-auto" style="width:60%">
      <select id="inputState" class="form-control" v-model="product.sub2">
        <option selected>Sub-Category 2</option>
        <option></option>
      </select>
    </div>
    </div>
  </div>
       
  <div class="form-row">
    <div class="form-group col-md-6">
    <div class="mx-auto" style="width:85%">
      <label for="inputEmail4"></label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="SKU" v-model="product.sku">
    </div>
    </div>
    <div class="form-group col-md-6">
    <div class="mx-auto" style="width:85%">
      <label for="inputMobileNumber"></label>
      <input type="text" class="form-control" id="inputMobileNumber" placeholder="ASIN" v-model="product.asin">
    </div>
    </div>    
  </div>
       
  <div class="form-row">
    <div class="form-group col-md-6">
    <div class="mx-auto" style="width:85%">
      <label for="inputPassword4"></label>
      <input type="text" class="form-control" id="inputPassword4" placeholder="Default Quantity" v-model="product.defaultQuantity">
    </div>
    </div>    
    <div class="form-group col-md-6">
    <div class="mx-auto" style="width:85%">    
      <label for="inputConfirmPassword4"></label>
      <input type="text" class="form-control" id="inputConfirmPassword4" placeholder="Search Keywords" v-model="product.searchKeywords">
    </div>
    </div>    
  </div>
 
  <div class="form-group">
  <div class="mx-auto" style="width:93%">      
    <label for="inputAddress2"></label>
      <textarea type="text" class="form-control" id="inputAddress" placeholder="Short Description" v-model="product.sdes"></textarea>
  </div>
  </div>      
    <div class="form-group">
    <div class="mx-auto" style="width:93%">    
    <label for="inputAddress2"></label>
    <textarea type="text" class="form-control" id="inputAddress" placeholder="Detailed Description" v-model="product.ldes"></textarea>
  </div>
  </div>
       
    <div class="form-row">
    <div class="form-group col-md-3" style="margin-left: 50px">
    <div class="" style="width:75%">
      <label for="inputEmail4"></label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="Variation Name" v-model="product.variationName">
    </div>
    </div>
    <div class="form-group col-md-2" style="margin-left:80px">
    <div class="" style="width:75%">
      <label for="inputMobileNumber"></label>
      <input type="text" class="form-control" id="inputMobileNumber" placeholder="Unit" v-model="product.unit">
    </div>
    </div>  
    <div class="form-group col-md-2" style="margin-left:10px">
    <div class="mx-auto" style="width:75%">
      <label for="inputMobileNumber"></label>
      <input type="text" class="form-control" id="inputMobileNumber" placeholder="Variation Value" v-model="product.variationValue">
    </div>
    </div>
    <div class="form-group col-md-3" style="margin-left:100px">
     <div class="mx-auto" style="width:75%">
      <label for="inputEmail4"></label>
      <input type="text" class="form-control" id="inputEmail4" placeholder="Admin Price" v-model="product.adminPrice">
    </div>
    </div>  
    </div>       

     <div class="form-row">
    <div class="form-group col-md-6">
    <div class="mx-auto" style="width:85%">
      <label for="inputProductImageUrl"></label>
      <input type="text" class="form-control" id="inputProductImageUrl" placeholder="Product Image URL" v-model="product.productImage">
    </div>
    </div>
    </div>    
   
  <div class="form-group">
  <div class="mx-auto" style="width:10%">
   <button 
   type="button" 
   class="btn btn-primary btn-md btn-block" 
   @click="addToApi(product)">SUBMIT</button>  

</div>
</div>      
</form>  -->

<div class="container" id="uploadxlsx">
        <div class="row">
            <div class="col-md-6 m-auto">
                    <h1 class="text-center display-4 my-4">Add Products</h1>
                    <form   @submit.prevent>
                    <div class="custom-file">
                        <input type="file" name="file" id="customFile" class="custom-file-input" ref="file" @change="handleFileUpload()">
                        <label for="customFile" class="custom-file-label">Upload csv</label>
                    </div>
                    <input type="submit" value="submit" @click="addToApi()" class="btn btn-primary btn-block">
                    </form>
                </div>
        </div>
    </div>


</div>  
</template>

<script>
import axios from 'axios'
var image
export default {
    data(){
        return{
            product:{
                storeName:'',
                productTitle:'',
                category:'',
                sub1:'',
                sub2:'',
                sku:'',
                asin:'',
                defaultQuantity:'',
                searchKeywords:'',
                sdes:'',
                ldes:'',
                variationName:'',
                unit:'',
                variationValue:'',
                productImage:''
            },
            file:'',
          
          
        }
    },

    // created(){
    //   this.$data.product.storeName= this.$route.params.store_name
    //   console.log(this.$data.product.storeName)
    // },
      methods:{
        handleFileUpload(){
          this.file = this.$refs.file.files[0]
          // console.log(this.file)
        },
        addToApi(){
        let formData = new FormData()
        formData.append('file',this.file)  
        
     
          const axiosInstance = axios.create({
          baseURL: 'http://thejasshop.com:5000/',
          
         
        });
        axiosInstance({method:"POST",
        url:'product',
        data:formData,
         headers: { Authorization: `Bearer ${this.$store.state.token}`,
         'Content-Type': 'multipart/form-data'
          }})
        .then((res)=>{
          console.log(res)
        })    

    // axios.post('http://localhost:5000/product',formData,
    // {
    //   headers:{ Authorization: `Bearer ${this.$store.state.token}`,
    //       'Content-Type': 'multipart/form-data'}
    // }).then((res)=>{
    //   console.log(res)
    // })

     }
      }
    }
</script>

<style scoped>
#addproduct{
    margin-top:3%
}
</style>