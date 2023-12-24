import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import VueCookies from 'vue-cookies'
import {getRouter} from "./configs/router";
import {getI18n} from "./configs/i18n";
import loadSite from "./configs/loadSite";
import {autoAnimatePlugin} from '@formkit/auto-animate/vue';

loadSite("test", () => {
    const i18n = getI18n(window.site)
    const router = getRouter(window.site)
    const app = createApp(App);
    app.use(autoAnimatePlugin);
    app.use(router);
    app.use(VueCookies);
    app.use(i18n);
    app.mount('#app');
})

