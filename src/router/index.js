import { createRouter, createWebHistory } from "vue-router";

// PAGES
import HomePage from '../pages/HomePage.vue';
import GamesPage from '../pages/GamesPage.vue';
import ContactPage from '../pages/ContactPage.vue';

// ROUTES

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/games', name: 'games-page', component: GamesPage },
        { path: '/contact', name: 'contact-page', component: ContactPage },
    ]
});

export { router };