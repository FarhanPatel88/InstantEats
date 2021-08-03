import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/pages/HomePage.vue';
import MenuPage from './components/pages/MenuPage.vue';
import FoodItem from './components/pages/FoodItem.vue';
import SignupPage from './components/pages/SignupPage.vue';
import LoginPage from './components/pages/LoginPage.vue';
import AboutUs from './components/pages/AboutUs.vue';
import ContactUs from './components/pages/ContactUs.vue';
import MyCart from './components/pages/MyCart.vue';
import MyOrders from './components/pages/MyOrders.vue';
import CheckOut from './components/pages/CheckOut.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage,
        },
        {
            path: '/menu',
            name: 'MenuPage',
            component: MenuPage,
            // props: true,
            children: [
                {
                    path: ':id',
                    component: FoodItem,
                    props: true,
                },
            ],
        },
        {
            path: '/signup',
            component: SignupPage,
        },
        {
            path: '/login',
            component: LoginPage,
        },
        {
            path: '/aboutus',
            component: AboutUs,
        },
        {
            path: '/contactus',
            component: ContactUs,
        },
        {
            path: '/cart',
            component: MyCart,
        },
        {
            path: '/orders',
            component: MyOrders,
        },
        {
            path: '/checkout',
            component: CheckOut,
        },
    ],
});

export default router;
