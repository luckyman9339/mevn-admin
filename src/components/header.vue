<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark nav-fill" id="header" >
  <router-link to="/"  active-class="active" exact>
      <a class="navbar-brand">
        <img src="./../assets/logo2.png" > </a>
        </router-link>
       
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">

        <router-link to="/adminpanel/dashboard" tag="li" active-class="active" exact><a class="nav-link" >Dashboard</a></router-link>
      
      <router-link to="/adminpanel/bannerupload" tag="li" active-class="active"><a class="nav-link" >Banners</a></router-link>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Stores
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
         <router-link to="/adminpanel/list_stores" tag="li" active-class="active"><a class="dropdown-item" >List</a></router-link>

          <router-link to="/adminpanel/addstore" tag="li" active-class="active"><a class="dropdown-item" >Add Store</a></router-link>
          
        </div>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Product
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
         <router-link to="/adminpanel/product_catalogue" tag="li" active-class="active"><a class="dropdown-item" >Product Catalogue</a></router-link>

          <router-link to="/adminpanel/addproduct" tag="li" active-class="active"><a class="dropdown-item" >Add product</a></router-link>
          
        </div>
      </li>

      <router-link to="/adminpanel/globalcatalogue" tag="li" active-class="active" exact><a class="nav-link">Global Catalogue</a></router-link>

      <router-link to="/adminpanel/location_management" tag="li" active-class="active"><a class="nav-link" >Location Management</a></router-link>

      <router-link to="/adminpanel/orders" tag="li" active-class="active"><a class="nav-link" >Orders</a></router-link>

      <!-- <router-link to="/online_seller" tag="li" active-class="active"><a class="nav-link" >Online products</a></router-link> -->

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Online Products
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
         <router-link to="/adminpanel/add_online_vendor" tag="li" active-class="active"><a class="dropdown-item" >Add online vendors</a></router-link>

          <router-link to="/adminpanel/add_online_product" tag="li" active-class="active"><a class="dropdown-item" >Add Online product</a></router-link>
          
        </div>
      </li>

      <router-link to="/adminpanel/customers" tag="li" active-class="active"><a class="nav-link" >Customers</a></router-link>
      
      <router-link to="/adminpanel/delivery_partner" tag="li" active-class="active"><a class="nav-link" >Delivery Partner</a></router-link>

      <router-link to="/adminpanel/cms" tag="li" active-class="active"><a class="nav-link" >CMS</a></router-link>

      

      <router-link to="/adminpanel/coupons" tag="li"  active-class="active"><a class="nav-link" >Coupons</a></router-link>

      

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Account
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <router-link to="/adminpanel/store/login" tag="li" active-class="active"><a class="dropdown-item" >Log In</a></router-link>

          <a class="dropdown-item" href="#" role="button" @click='signout'>Sign Out</a>
          
        </div>
      </li>
    </ul>
  </div>
</nav>
  
</template>

<script>
import axios from 'axios'
export default {
    methods:{
      signout(){
        const axiosInstance = axios.create({
          baseURL: 'http://localhost:5000/',
         
        });
        axiosInstance({method:"POST",url:'/store/logout_all', headers: { Authorization: `Bearer ${this.$store.state.token}` }})
  this.$store.dispatch('signout')
  window.location.reload()
      }
    }
}
</script>

<style scoped>
#header{
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    align-content: center
}

</style>