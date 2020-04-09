import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.options.root = 'https://vue-course-7056e.firebaseio.com/data.json';
Vue.http.interceptors.push((req, next) => {
    console.log(req);
    if (req.method == 'POST') {
        req.method = 'PUT';
    }
    next((resp) => {
        resp.json = () => {
            return {
                messages: resp.body
            }
        };
    });
});

new Vue({
    el: '#app',
    render: h => h(App)
})
