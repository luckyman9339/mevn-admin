// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Router from 'vue-router'
import store from './vuexStore/vuex'
import Vuex from 'vuex'
import bootstrapvue from 'bootstrap-vue'
import vuetify from 'vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'
import "vuetify/dist/vuetify.min.css"
// import axios from 'axios';

Vue.use(bootstrapvue)
Vue.use(Router)
Vue.use(Vuex)
Vue.use(vuetify)
export default new vuetify({ })
Vue.use(VueGoogleMaps,{
  load:{
    key:'AIzaSyC6Iv_6H0K5_2QqS25o6hD3EiHcgwxF6gc',
    libraries: "places"
  },
  installComponents: true
})
Vue.config.productionTip = false




// export default axiosInstance;

/* eslint-disable no-new */ 
new Vue({
  el: '#app',
  router,
  store,
  vuetify : new vuetify(),
  components: { App },
  template: '<App/>'
})
