import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        token:'',
        store:''
    },
    mutations:{
        authUser(state,data){
            state.token=data.token,
            state.store=data.store
        },
        clearAuth(state){
            state.token=null
            state.store=null
        }
    },
    getters:{
        test: state  => {
            return {state}
        }
    },
    actions:{
        login({commit,dispatch},authData){
            // axios.post('http://localhost:5000/store/login',{
            //     email:authData.email,
            //     password:authData.password
            // })
            // .then((response)=>{ 
            //     console.log(response)
            // })
            // .catch((e)=>{
            //     console.log(e)
            // })
            // window.location.reload()
            // console.log(authData)

            localStorage.setItem('token', authData.response.data.token)
            localStorage.setItem('store',authData.response.data.store)

            commit('authUser',{
                token:authData.response.data.token,
                store:authData.response.data.store
            })
        },
        signout({commit}){
            commit('clearAuth')
        },
        tryAutoLogin({commit}){
            const token = localStorage.getItem('token')
            const store = localStorage.getItem('store')
            if(!token){
                return
            }
            commit('authUser',{
                token,store
            })

        }
    }
})