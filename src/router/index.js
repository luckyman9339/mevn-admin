import Vue from 'vue'
import Router from 'vue-router'
import bannerU from './../components/bannerUpload.vue'
import storesList from './../components/stores.vue'
import storeAdd  from './../components/addStore.vue'
import globalProducts from './../components/globalProducts.vue'
import productAdd  from './../components/addProduct.vue'
import globalcatalogue from './../components/globalCatalogue.vue'
import locationManagement from './../components/locationManagement.vue'
import login  from './../components/login.vue'
import pageNotFound from './../components/404.vue'
import home from './../components/home.vue'
import onlineStores from './../components/onlineStores.vue'
import onlineproducts from './../components/onlineProducts.vue'
import store from './../vuexStore/vuex'


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/adminpanel/dashboard',component:home},
    {path:'/adminpanel/bannerupload',component:bannerU},
    {path:'/adminpanel/list_stores',component:storesList},
    {path:'/adminpanel/addstore',component:storeAdd},
    {path:'/adminpanel/location_management',component:locationManagement},
    {path:'/adminpanel/addproduct',component:productAdd, 
    beforeEnter:(to,from,next)=>{
      if(!localStorage.getItem('token')){
        next('/store/login')
      }else{
        next()
      }
    }
  },
    {path:'/adminpanel/product_catalogue',component:globalProducts},
    {path:'/adminpanel/globalcatalogue',component:globalcatalogue},
    {path:'/adminpanel/store/login',component:login,beforeLeave:(to,from,next)=>{
      if(store.state.token){
        next('/adminpanel/addproduct')
      }else{
        next()
      }
    }},
    {path:"/adminpanel/add_online_vendor",component:onlineStores},
    {path:"/adminpanel/add_online_product",component:onlineproducts},
    {path:'*',component:pageNotFound}
    
  ],
  mode:'history'
})
