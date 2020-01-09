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
    {path:'/',component:home},
    {path:'/bannerupload',component:bannerU},
    {path:'/list_stores',component:storesList},
    {path:'/addstore',component:storeAdd},
    {path:'/location_management',component:locationManagement},
    {path:'/addproduct',component:productAdd, 
    beforeEnter:(to,from,next)=>{
      if(!localStorage.getItem('token')){
        next('/store/login')
      }else{
        next()
      }
    }
  },
    {path:'/product_catalogue',component:globalProducts},
    {path:'/globalcatalogue',component:globalcatalogue},
    {path:'/store/login',component:login,beforeLeave:(to,from,next)=>{
      if(store.state.token){
        next('/addproduct')
      }else{
        next()
      }
    }},
    {path:"/add_online_vendor",component:onlineStores},
    {path:"/add_online_product",component:onlineproducts},
    {path:'*',component:pageNotFound}
    
  ],
  mode:'history'
})
