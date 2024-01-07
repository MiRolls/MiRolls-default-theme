import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import VueCookies from 'vue-cookies'
import {getRouter} from "./configs/router";
import {getI18n} from "./configs/i18n";
import loadSite from "./configs/loadSite";
import {autoAnimatePlugin} from '@formkit/auto-animate/vue';

import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/style/preview.css';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import VMdEditor from '@kangc/v-md-editor';
import mode from "./configs/mode";


loadSite(mode.release, () => {
    VMdEditor.use(githubTheme);
    const i18n = getI18n(window.site)
    const router = getRouter(window.site)
    const app = createApp(App);
    app.use(autoAnimatePlugin);
    app.use(router);
    app.use(VueCookies);
    app.use(i18n);
    app.use(VMdEditor);
    app.mount('#app');
})

