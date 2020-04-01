import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "./components/Home";
import ArticleDetails from "./components/ArticleDetails";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/details/:title',
            name: 'details',
            component: ArticleDetails
        }
    ]
});