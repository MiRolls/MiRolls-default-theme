import {createRouter, createWebHistory} from "vue-router";
import MakePage from "../pages/MakePage.vue";
import IndexPage from "../pages/IndexPage.vue";
import SearchPage from "../pages/SearchPage.vue";
import QueryPage from "../pages/QueryBigData.vue";
import QueryDetails from "../pages/QueryDetails.vue";
import NotFound from "../pages/NotFound.vue";
import langList from "../../langList";

function getI18n(title) {
    return langList[window.site.lang][title]
}

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
        meta: {
            title: window.site.name + " | " + getI18n("pageMainTitle")
        },
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
    if (to.meta.title) {//判断是否有标题
        document.title = to.meta.title
    }
    next()
})

export default router