import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import Vuex from 'vuex'



Vue.use(Vuex)
Vue.config.productionTip = false

const store=new Vuex.Store({
  state:{
    count:100,
    message:1
  },
  mutations:{
    increment(state,n){
           
           if(state.count>0){
            
             state.count-=n;
           }
           
    },
    increment2(state){
      state.count-=2;
   }
  },
  // actions:{
  //   increment2(action){
  //      setTimeout(()=>{
  //        action.commit('increment')
  //      },2000);
  //   }
  // },
  getters:{
    doubleCount(state){
      return state.count*2
    }
  }
})




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
