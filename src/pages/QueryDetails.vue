<template>
    <div id="queryPage">
        <app-bar></app-bar>
        <details-page></details-page>
        <left-chooser mode="details" :code="$route.params.code"></left-chooser>
        <page-footer style="margin-left: 10%"></page-footer>
    </div>
</template>
<script>
import AppBar from "../components/AppBar.vue";
import LeftChooser from "../components/LeftChooser.vue";
import PageFooter from "../components/PageFooter.vue";
import DetailsPage from "../components/detailsPage.vue";

export default {
    name: "QueryPage",
    components: {DetailsPage, PageFooter, LeftChooser, AppBar},
}
</script>
<style scoped>
#queryPage {
    /*height: calc(100% - 73px);*/
    height: 100%;
}
</style>