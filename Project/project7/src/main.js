import Vue from 'vue'
import App from './App.vue'

Vue.filter('toLowercase', (value) => {
  return value.toString().toLowerCase();
});

Vue.mixin({
  created() {
    console.log("Wow What a Global Mixin Created!");
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
