import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/OurServices.vue';
import About from '../components/AboutUs.vue';
import Works from '../components/ProductionPage.vue';
import Contact from '../components/WhyChooseUs.vue';

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/about', component: About, name: 'about' },
    { path: '/works', component: Works, name: 'works' },
    { path: '/contact', component: Contact, name: 'contact' }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        }
        return { top: 0, behavior: 'smooth' };
    }
});

export default router;
