import {createRouter, createWebHistory} from "vue-router";

const MakePage = () => import("../../pages/MakePage.vue")
const IndexPage = () => import("../../pages/IndexPage.vue")
const SearchPage = () => import("../../pages/SearchPage.vue")
const QueryPage = () => import("../../pages/QueryBigData.vue")
const QueryDetails = () => import("../../pages/QueryDetails.vue")
const NotFound = () => import("../../pages/NotFound.vue")
const langList = () => import("../../../langList")

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
        }, {
            path: "/search",
            component: SearchPage,
            meta: {
                title: site.name + " | " + getI18n(site.lang, "pageSearchTitle")
            },
        }, {
            path: "/queryBigData",
            component: QueryPage,
            meta: {
                title: site.name + " | " + getI18n(site.lang, "pageQueryBigData")
            },
        }, {
            path: "/queryDetails",
            component: QueryDetails,
            meta: {
                title: site.name + " | " + getI18n(site.lang, "pageQueryDetails")
            },
        }, {
            path: "/:any",
            component: NotFound,
            meta: {
                title: site.name + " | " + getI18n(site.lang, "pageNotFoundTitle")
            },
        }, {
            path: "/answer/:link"
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