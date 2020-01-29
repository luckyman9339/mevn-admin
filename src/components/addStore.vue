<template>
    <div id="storesform">
        <form >
           <div class="form-row">
         <div class="form-group col-md-3">
    <div class="mx-auto" style="width:75%">
      <label for="inputshopCategory"></label>
      <select id="inputshopCategory" class="form-control" name="Shop Category" 
      v-model="store.shopCategory"
      @change="storeCategory(store.shopCategory)"
      >
        <option value="">--Choose Category--</option>
        <option value="Super Market">Super Market</option>
        <option value="Fashion">Fashion</option>
        <option value="Pharmacy">Pharmacy</option>
        <option value="Hardware">Hardware</option>
      </select>
    </div>
    </div>    
    <div class="form-group col-md-3">
    <div class="mx-auto" style="width:86%">
      <label for="inputCity"></label>
      <input type="text" class="form-control" id="inputlat" placeholder="Latitude" v-model="store.location.coordinates[1]">
    </div>
    </div>
    <div class="form-group col-md-3">
    <div class="mx-auto" style="width:86%">
      <label for="inputCity"></label>
      <input type="text" class="form-control" id="inputlong" placeholder="Longitude" v-model="store.location.coordinates[0]">
    </div>
    </div>
     <div class="form-group col-md-1">
    <div class="mx-auto" style="width:86%">
      <label for="inputradius"></label>
      <input type="text" class="form-control" id="inputlong" placeholder="Radius" v-model="radius">
    </div>
    </div>
    <div class="form-group col-md-2" style="margin-top:2%">
    <div class="mx-auto" style="width:50%">
    <button class="btn btn-primary btn-md btn-block " type="button" @click="validate">validate</button>
    </div>
    </div>
       </div>
       <div class="form-group col-md-3" style="margin-left:2%" v-show="isValidated">
         <div class="mx-auto" style="width:86%">
         <h5 style="color:red">Categroy already exists in the given {{radius}}km radius ! </h5>
         <!-- <div class="form-group col-md-3" > -->
        <!-- <div class="mx-auto" style="width:100%"> -->
        <!-- <button class="btn btn-primary btn-md btn-block " type="button" >close</button> -->
        <!-- </div> -->
        <!-- </div> -->
        </div>
       </div>
       <div style="margin-left:2%" v-show="success">
         <h6 style="color:green">Categroy can be added in the given 1km radius </h6>
       </div>
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
                shopCategory:'',
                location:{
                  type:"Point",
                  coordinates:[],
                },
                city:'',
                state:'',
                pincode:''
            },
            tableData:[],
            isValidated:false,
            success:false,
            stores:'',
            radius:''
            
        }
    },
      methods:{
        addToApi(store){
            axios.post('http://localhost:5000/stores',store)
            .then((response)=>{
                console.log(response);
            })
            .catch((e)=>{
                console.log(e)
            })
            // window.location.reload()
           
     },
     getStores(){
        axios.get('http://localhost:5000/stores')
      .then(res => {
        const data = res.data
        this.stores=data  
        // console.log(this.stores)
        })
     },
     validate(){
       const centre = {}
       const check = new Object
       const table = []
      //  const n = false
       this.stores.forEach((store)=>{
         check.lat=store.location.coordinates[1]
         check.lng = store.location.coordinates[0]
         centre.lat =this.store.location.coordinates[1]
         centre.lng =this.store.location.coordinates[0]
         
        const n = this.inCircle(check,centre,this.radius)
         table.push(n)
         
         if(n){
           this.isValidated=true
           this.success = false
         }else{
           this.isValidated=false
           
         }
        
       })
       console.log(table)
       if(!table.includes(true)){
         this.success = true
         this.isValidated= false
       }
     },

     inCircle(checkPoint,centerPoint,km){
          const ky = 40000 / 360;
          const kx = Math.cos(Math.PI * centerPoint.lat / 180.0) * ky;
          const dx = Math.abs(centerPoint.lng - checkPoint.lng) * kx;
          const dy = Math.abs(centerPoint.lat - checkPoint.lat) * ky;
          return Math.sqrt(dx * dx + dy * dy) <= km;
        },

      storeCategory(category){
        axios.get('http://localhost:5000/stores/'+ category)
        .then((res)=>{
          this.stores = res.data
          console.log(this.stores)
        })
      }
 },
 mounted(){
   this.getStores()
 }
 
    }
</script>
<style scoped>
#storesform {
    margin-top:5%
}
</style>