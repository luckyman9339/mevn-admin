<template>
<div id="loginpage">
    
    <div class="container">
  
  <form  @submit.prevent="login">
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email" autocomplete="username" v-model="email">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pswd" autocomplete="current-password" v-model="password">
    </div>
    <div class="form-group form-check">
      <label class="form-check-label">
        <input class="form-check-input" type="checkbox" name="remember"> Remember me
      </label>
    </div>
    <button 
    type="submit"
    class="btn btn-primary"
    >Submit</button>
   
  </form>
</div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        login(){
          const userDetails = {
            email:this.email,
            password:this.password
          }
            axios.post('http://localhost:5000/store/login',{email:userDetails.email,password:userDetails.password})
            .then((response)=>{
                this.$store.dispatch('login',{response})
                this.$router.push('/addproduct')
            })
            .catch((e)=>{ 
                console.log(e)
            })
            // window.location.reload()
            
            console.log(this.$store.getters.test)
            // console.log(userDetails.email)
        }
    }
}
</script>

<style scoped>

#loginpage{
    margin-top: 6%
}
</style>