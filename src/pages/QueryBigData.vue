<template>
    <div id="queryPage">
        <left-chooser mode="bigData"></left-chooser>
        <big-data></big-data>
        <app-bar></app-bar>
        <page-footer style="margin-left: 20%"></page-footer>
    </div>

</template>
<script>
import AppBar from "../components/AppBar.vue";
import LeftChooser from "../components/LeftChooser.vue";
import PageFooter from "../components/PageFooter.vue";
import BigData from "../components/bigData.vue";

export default {
    name: "QueryPage",
    components: {BigData, PageFooter, LeftChooser, AppBar},
}
</script>
<style scoped>
#queryPage {
    /*height: calc(100% - 73px);*/
    height: 100%;
}
</style>