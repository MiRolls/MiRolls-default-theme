import {createRouter, createWebHistory} from "vue-router";

const MakePage = () => import("../../pages/MakePage.vue")
const IndexPage = () => import("../../pages/IndexPage.vue")
const SearchPage = () => import("../../pages/SearchPage.vue")
const QueryPage = () => import("../../pages/QueryBigData.vue")
const QueryDetails = () => import("../../pages/QueryDetails.vue")
const NotFound = () => import("../../pages/NotFound.vue")
import langList from "../../../langList";
import AnswerPage from "../../pages/AnswerPage.vue";

export const getRouter = (site) => {
    const router = createRouter({
        // history:createWebHashHistory(),
        history: createWebHistory(),
        routes: [{
            path: "/make",
            component: MakePage,
            meta: {
                title: site.name + " | " + getI18n(site.lang, "pageMakeTitle")
            },
        }, {
            path: "/",
            component: IndexPage,
            meta: {
                title: site.name + " | " + getI18n(site.lang, "pageHome")
            },
        }, {
            path: "/search",
            component: SearchPage,
            meta: {
                title: site.name + " | " + getI18n(site.lang, "pageSearchTitle")
            },
        }, {
            path: "/queryBigData/:code",
            component: QueryPage,
            meta: {
                title: site.name + " | " + getI18n(site.lang, "pageQueryBigData")
            },
        }, {
            path: "/queryDetails/:code",
            component: QueryDetails,
            meta: {
                title: site.name + " | " + getI18n(site.lang, "pageQueryDetails")
            },
        }, {
            path: "/:pathMatch(.*)*",
            component: NotFound,
            meta: {
                title: site.name + " | " + getI18n(site.lang, "pageNotFoundTitle")
            },
        }, {
            path: "/answer/:link",
            component:AnswerPage,
            meta:{}
        }]
    });
    router.beforeEach((to, from, next) => {//beforeEach是router的钩子函数，在进入路由前执行
        if (to.meta.title) {
            document.title = to.meta.title
        }
        next()
    });
    return router;
}

function getI18n(lang, title) {
    return langList[lang][title]
}