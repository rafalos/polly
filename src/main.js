import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false
let config = {
  apiKey: "AIzaSyBiXvtR4vGJBzWg2pq5cTeak9toAZs75Zo",
  authDomain: "polly-fafb7.firebaseapp.com",
  databaseURL: "https://polly-fafb7.firebaseio.com",
  projectId: "polly-fafb7",
  storageBucket: "polly-fafb7.appspot.com",
};
firebase.initializeApp(config);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
