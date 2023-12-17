<template>
    <div id="queryPage" v-show="errCode === 200">
        <left-chooser mode="bigData" :code="$route.params.code"></left-chooser>
        <big-data @notfound="errCode = 404" @success="errCode = 200"></big-data>
        <app-bar></app-bar>
        <page-footer style="margin-left: 10%"></page-footer>
    </div>
    <not-found v-if="errCode === 404"/>
    <loading-page v-else/>
</template>
<script>
import AppBar from "../components/AppBar.vue";
import LeftChooser from "../components/LeftChooser.vue";
import PageFooter from "../components/PageFooter.vue";
import BigData from "../components/bigData.vue";
import NotFound from "./NotFound.vue";
import LoadingPage from "../components/LoadingPage.vue";

export default {
    name: "QueryPage",
    data() {
        return {
            errCode: 201
        }
    },
    components: {LoadingPage, BigData, PageFooter, LeftChooser, AppBar, NotFound},
}
</script>
<style scoped>
#queryPage {
    /*height: calc(100% - 73px);*/
    height: 100%;
}
</style>