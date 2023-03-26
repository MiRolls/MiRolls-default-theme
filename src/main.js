import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import VueCookies from 'vue-cookies'
import {createI18n} from "vue-i18n";
import langList from "../langList";
import {createRouter, createWebHistory} from "vue-router";
import MakePage from "./pages/MakePage.vue";
import IndexPage from "./pages/IndexPage.vue";
import SearchPage from "./pages/SearchPage.vue";
import QueryPage from "./pages/QueryBigData.vue";
import QueryDetails from "./pages/QueryDetails.vue";
import NotFound from "./pages/NotFound.vue";

window.request("test")
window.iForReq = false
window.req("test")

let inv = setInterval(() => {
    console.log("asd1")

    if (window.iForReq) {
        console.log("asd")
        clearInterval(inv)
        const i18n = new createI18n({
            locale: window.site.lang,
            messages: langList
        })

        const router = createRouter({
            // history:createWebHashHistory(),
            history: createWebHistory(),
            routes: [{
                path: "/make",
                component: MakePage,
                meta: {
                    title: window.site.name + " | " + getI18n("pageMakeTitle")
                },
            }, {
                path: "/",
                component: IndexPage,
            }, {
                path: "/search",
                component: SearchPage,
                meta: {
                    title: window.site.name + " | " + getI18n("pageSearchTitle")
                },
            }, {
                path: "/queryBigData",
                component: QueryPage,
                meta: {
                    title: window.site.name + " | " + getI18n("pageQueryBigData")
                },
            }, {
                path: "/queryDetails",
                component: QueryDetails,
                meta: {
                    title: window.site.name + " | " + getI18n("pageQueryDetails")
                },
            }, {
                path: "/:any",
                component: NotFound,
                meta: {
                    title: window.site.name + " | " + getI18n("pageNotFoundTitle")
                },
            }]
        });

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


function getI18n(title) {
    return langList[window.site.lang][title]
}