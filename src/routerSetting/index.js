import {createRouter, createWebHistory} from "vue-router";
import MakePage from "../pages/MakePage.vue";
import IndexPage from "../pages/IndexPage.vue";
import SearchPage from "../pages/SearchPage.vue";
import QueryPage from "../pages/QueryBigData.vue";
import QueryDetails from "../pages/QueryDetails.vue";

const router = createRouter({
    // history:createWebHashHistory(),
    history:createWebHistory(),
    routes:[{
        path:"/make",
        component: MakePage
    },{
        path:"",
        component: IndexPage
    },{
        path:"/search",
        component: SearchPage,
    },{
        path:"/queryBigData",
        component: QueryPage,
    },{
        path:"/queryDetails",
        component:QueryDetails
    }]
});

export default router