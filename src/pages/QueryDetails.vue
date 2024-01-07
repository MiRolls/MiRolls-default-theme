<template>
    <div id="queryPage" v-if="errCode === 201">
        <app-bar></app-bar>
        <details-page :title="title" :data="data"></details-page>
        <left-chooser mode="details" :code="$route.params.code"></left-chooser>
        <page-footer style="margin-left: 10%"></page-footer>
    </div>
    <not-found v-if="errCode === 404" :app-bar="true"/>
</template>
<script>
import AppBar from "../components/AppBar.vue";
import LeftChooser from "../components/LeftChooser.vue";
import PageFooter from "../components/PageFooter.vue";
import DetailsPage from "../components/detailsPage.vue";
import axios from "axios";
import NotFound from "./NotFound.vue";

export default {
    name: "QueryPage",
    components: {NotFound, DetailsPage, PageFooter, LeftChooser, AppBar},
    data() {
        return {
            errCode: 201,
            data: [],
            title: ""
        }
    },
    mounted() {
        if (window.runmod === "test") {
            this.title = "Test"
            this.data = [
                {
                    link: "aaaa",
                    answer:[
                        {
                            title:"问题题目",
                            type:"radio",
                            answer:[
                                true,
                                false,
                                true,
                            ]
                        },
                        {
                            title:"问题题目",
                            answer:["yep"],
                            type:"blank"
                        }
                    ]
                },
                {
                    link: "aaaa",
                    answer:[
                        {
                            title:"问题题目",
                            type:"radio",
                            answer:[
                                true,
                                true,
                                false,
                            ]
                        },
                        {
                            title:"问题题目",
                            answer:["none"],
                            type:"blank"
                        }
                    ]
                }
            ]
        } else {
            axios.post("/get/answers", {code: this.$route.params.code})
                .then(response => {
                    this.data = response.data.answers;
                    axios.post("/get/roll", {link: this.data[0].link})
                        .then(res => {
                            this.title = res.data.title
                        })
                })
                .catch(_ => {
                    this.errCode = 404
                })
        }
    }
}
</script>
<style scoped>
#queryPage {
    /*height: calc(100% - 73px);*/
    height: 100%;
}
</style>