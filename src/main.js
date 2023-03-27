import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import VueCookies from 'vue-cookies'
import {createI18n} from "vue-i18n";
import langList from "../langList";
import {getRouter} from "./routerSetting";

window.iForReq = false
window.req("test")

let inv = setInterval(() => {
    if (window.iForReq) {
        clearInterval(inv)
        const i18n = new createI18n({
            locale: window.site.lang,
            messages: langList
        })

        const router = getRouter(window.site)

        router.beforeEach((to, from, next) => {//beforeEach是router的钩子函数，在进入路由前执行
            if (to.meta.title) {
                document.title = to.meta.title
            }
            next()
        })
        const app = createApp(App);
        app.use(router);
        app.use(VueCookies);
        app.use(i18n)
        app.mount('#app');
    }
}, 100)
