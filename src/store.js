import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import axios from 'axios'


let cart = window.localStorage.getItem('cart');


export default new Vuex.Store({

    state: {
        status: '' ,
        token: localStorage.getItem('token') || '',
        user : {}
      },
      actions: {
        get_all_products({commit}, user){
          return new Promise((resolve, reject) => {
            commit('auth_request')
            axios({url: 'https://rocky-cliffs-25615.herokuapp.com/api/pendingSparePart', data: user, method: 'GET' })
            .then(resp => {
              const token = resp.data.token
              const user = resp.data.user
              localStorage.getItem('token', token)
              axios.defaults.headers.common['Authorization'] = token
              commit('auth_success', token, user)
              resolve(resp)
            })
            .catch(err => {
              commit('auth_error')
              localStorage.removeItem('token')
              reject(err)
            })
          })
      },
        userLogin({commit}, user){
          return new Promise((resolve, reject) => {
            commit('auth_request')
            axios({url: 'https://rocky-cliffs-25615.herokuapp.com/api/login', data: user, method: 'POST' })
            .then(resp => {
              const token = resp.data.token
              const user = resp.data.user
              localStorage.setItem('token', token)
              axios.defaults.headers.common['Authorization'] = token
              commit('auth_success', token, user)
              resolve(resp)
            })
            .catch(err => {
              commit('auth_error')
              localStorage.removeItem('token')
              reject(err)
            })
          })
      },
      },
      getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,
        totalPrice: state => {
          let total = 0;
          state.cart.filter((item) => {
              total += (item.productPrice * item.productQuantity);
          });
  
          return total;
        }
      },


    mutations:{
        auth_request(state){
          state.status = 'loading'
        },
        auth_success(state, token, user){
          state.status = 'success'
          state.token = token
          state.user = user
        },
        auth_error(state){
          state.status = 'error'
        },
        addToCart(state, item){

            let found = state.cart.find(product => product.productId == item.productId );
    
            if(found){
              found.productQuantity++;
            }else{
              state.cart.push(item);
    
            }
    
            this.commit('saveData');
    
          },
    
          saveData(state){
            window.localStorage.setItem('cart', JSON.stringify(state.cart));
          },
    
          removeFromCart(state, item){
    
              let index = state.cart.indexOf(item);
              state.cart.splice(index,1);
    
            this.commit('saveData');
    
          },
    }  
  })