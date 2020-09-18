import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import { MainPage, SetTemperature, SetHumidity, SetLEDTime, SetLEDControl } from './pages';

Vue.config.productionTip = false

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    component: MainPage
  }
  , {
    path: '/Temperature',
    component: SetTemperature
  }
  , {
    path: '/Humidity',
    component: SetHumidity
  }
  , {
    path: '/SetLEDTime',
    component: SetLEDTime
  }
  , {
    path: '/SetLEDControl',
    component: SetLEDControl
  }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
