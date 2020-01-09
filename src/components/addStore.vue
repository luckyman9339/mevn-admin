<template>
    <div id="storesform">
        <form >
  <div class="form-row">
    <div class="form-group col-md-6">
    <div class="mx-auto" style="width:85%;">
      <label for="inputFirstName"></label>
      <input type="text" class="form-control" id="inputFirstName" placeholder="Business Name" v-model="store.businessName">
    </div>
    </div>
    <div class="form-group col-md-6">
      <label for="inputLastName"></label>
      <div class="mx-auto" style="width:85%">
      <input type="text" class="form-control" id="inputLastname" placeholder="GSTIN" v-model="store.GSTIN">
    </div>
    </div>
  </div>
       
  <div class="form-row">
    <div class="form-group col-md-4">
    <div class="mx-auto" style="width:85%">
      <label for="inputEmail4"></label>
      <input type="email" autocomplete="username" class="form-control" id="inputEmail4" placeholder="Email" v-model="store.email">
    </div>
    </div>
        <div class="form-group col-md-4">
    <div class="mx-auto" style="width:85%">
      <label for="inputurl4"></label>
      <input type="text"  class="form-control" id="inputurl" placeholder="Custom URL" v-model="store.url">
    </div>
    </div>
    <div class="form-group col-md-4">
    <div class="mx-auto" style="width:85%">
      <label for="inputMobileNumber"></label>
      <input type="number" class="form-control" id="inputMobileNumber" placeholder="Mobile Number" v-model="store.mobileNo">
    </div>
    </div>    
  </div>
       
  <div class="form-row">
    <div class="form-group col-md-6">
    <div class="mx-auto" style="width:85%">
      <label for="inputPassword4"></label>
      <input type="password" autocomplete="new-password" class="form-control" id="inputPassword4" placeholder="Password" v-model="store.password">
    </div>
    </div>    
    <div class="form-group col-md-6">
    <div class="mx-auto" style="width:85%">    
      <label for="inputConfirmPassword4"></label>
      <input type="password" autocomplete="new-password" class="form-control" id="inputConfirmPassword4" placeholder="Confirm Password" v-model="store.confirmPassword">
    </div>
    </div>    
  </div>
 
  <div class="form-group">
  <div class="mx-auto" style="width:93%">      
    <label for="inputAddress2"></label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Address Line 1" v-model="store.aLine1">
  </div>
  </div>      
    <div class="form-group">
    <div class="mx-auto" style="width:93%">    
    <label for="inputAddress2"></label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Address Line 2" v-model="store.aLine2">
  </div>
  </div>
         <div class="form-row">
        <div class="form-group col-md-6">
    <div class="mx-auto" style="width:86%">
      <label for="inputCity"></label>
      <input type="text" class="form-control" id="inputCircle" placeholder="Shop Circle" v-model="store.shopCircle">
    </div>
    </div>
    <div class="form-group col-md-3">
    <div class="mx-auto" style="width:86%">
      <label for="inputCity"></label>
      <input type="text" class="form-control" id="inputlat" placeholder="Latitude" v-model="store.lat">
    </div>
    </div>
    <div class="form-group col-md-3">
    <div class="mx-auto" style="width:86%">
      <label for="inputCity"></label>
      <input type="text" class="form-control" id="inputlong" placeholder="Longitude" v-model="store.long">
    </div>
    </div>
       </div>
       
  <div class="form-row">
    <div class="form-group col-md-6">
    <div class="mx-auto" style="width:86%">
      <label for="inputCity"></label>
      <input type="text" class="form-control" id="inputCity" placeholder="City" v-model="store.city">
    </div>
    </div>    
    <div class="form-group col-md-4">
    <div class="mx-auto" style="width:75%">
      <label for="inputState"></label>
      <select id="inputState" class="form-control" placeholder="State" v-model="store.state">
        <option selected>Choose State</option>
        <option>Tamilnadu</option>
      </select>
    </div>
    </div>    
    <div class="form-group col-md-2">
    <div class="mx-auto" style="width:60%">    
      <label for="inputZip"></label>
      <input type="text" class="form-control" id="inputZip" placeholder="Pincode" v-model="store.pincode">
    </div>
   </div>        
  </div>
   
  <div class="form-group">
  <div class="mx-auto" style="width:10%">
   <button 
    type="button" 
    value="submit" 
    formmethod="POST"
    class="btn btn-primary btn-md btn-block"
   @click="addToApi(store)">SUBMIT</button>      
</div>
</div>      
</form>      
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            store:{
                businessName:'',
                GSTIN:'',
                email:'',
                url:'',
                mobileNo:'',
                password:'',
                confirmPassword:'',
                aLine1:'',
                aLine2:'',
                shopCircle:'',
                lat:'',
                long:'',
                city:'',
                state:'',
                pincode:''
            },
            tableData:''
        }
    },
      methods:{
        addToApi(store){
            axios.post('http://thejasshop.com:5000/stores',store)
            .then((response)=>{
                console.log(response);
            })
            .catch((e)=>{
                console.log(e)
            })
            window.location.reload()
     }
 }
    }
</script>
<style scoped>
#storesform {
    margin-top:3%
}
</style>