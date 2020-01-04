import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import store from './store/index';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';


Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/oauth2/callback', component: AuthHandler },
        { path: '/', component: ImageList },
        { path: '/upload', component: UploadForm }
    ]
})

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router
});