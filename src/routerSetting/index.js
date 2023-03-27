import {createRouter, createWebHistory} from "vue-router";
import MakePage from "../pages/MakePage.vue";
import IndexPage from "../pages/IndexPage.vue";
import SearchPage from "../pages/SearchPage.vue";
import QueryPage from "../pages/QueryBigData.vue";
import QueryDetails from "../pages/QueryDetails.vue";
import NotFound from "../pages/NotFound.vue";
import langList from "../../langList";

export const getRouter = (site)=>{
    return createRouter({
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
        }]
    })
}

function getI18n(lang,title) {
    return langList[lang][title]
}