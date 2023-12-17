<template>
    <div id="queryPage" v-if="errCode !== 404">
        <left-chooser mode="bigData" :code="$route.params.code"></left-chooser>
        <big-data @notfound="errCode = 404"></big-data>
        <app-bar></app-bar>
        <page-footer style="margin-left: 10%"></page-footer>
    </div>
    <not-found v-else/>
</template>
<script>
import AppBar from "../components/AppBar.vue";
import LeftChooser from "../components/LeftChooser.vue";
import PageFooter from "../components/PageFooter.vue";
import BigData from "../components/bigData.vue";
import NotFound from "./NotFound.vue";

export default {
    name: "QueryPage",
    data(){
        return{
            errCode: 200
        }
    },
    components: {BigData, PageFooter, LeftChooser, AppBar, NotFound},
}
</script>
<style scoped>
#queryPage {
    /*height: calc(100% - 73px);*/
    height: 100%;
}
</style>