<template>
    <div id="lm">
<div class="container">
  <form >
    <div class="row">
      <div class="col">
        <input type="text" class="form-control" id="location" placeholder="Location" name="location" 
        v-model="location.region"
        >
      </div>
      <div class="col">
        <input type="category" class="form-control" placeholder="category" name="category" 
        v-model="location.category"
        >
      </div>
      <div class="col">
        <input type="text" class="form-control" id="city" placeholder="City" name="city-id">
      </div>
      <div class="col">
        <input  class="form-control" placeholder="Area" name="Area">
      </div>
      <div class="col">
        <input  class="form-control" placeholder="Area ID" name="Area-id">
      </div>
    </div>
  </form>
  <button type="submit" 
  @click='addToApi(location)'
  class="btn btn-primary mt-3">Create Location</button>
  <!-- {{location.result}} -->
  <!-- {{temp1}} -->
  <!-- {{temp2}} -->
</div>
<GoogleMap></GoogleMap>
    </div>
</template>

<script>
import axios from 'axios'
import GoogleMap from './googleMaps'
export default {
    data(){
        return{
          // temp1:'',
          // temp2:'',
          location :{
            region:'',
            category:''
          }

        }
    },
    methods:{
      addToApi(location){
        
        axios.post('http://thejasshop.com:5000/location_management',location)
        .then((res)=>{
          console.log(res)
        })
        .catch((e)=>{
          console.log(e)
        })
      },
      
      addToArray(){
      const first = this.temp1
        const second = this.temp2
        const larray = this.location
        larray.push({first:second})
        console.log(larray)
      }
    },
    components:{
      GoogleMap
    }
}
</script>

<style scoped>
#lm{
    margin-top : 6%
}

</style>>

