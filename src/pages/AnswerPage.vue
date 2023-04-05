<template>
    <div id="answerPage">
        <message v-if="roll.title" :message="roll.title" height="100px"/>
        <app-bar/>
        <answer-main :roll="roll" :link="$route.params.link" v-if="mode !== mode.test"/>
        <answer-main :link="$route.params.link" v-if="mode === mode.test"/>
        <page-footer/>
    </div>
</template>

<script>
import axios from "axios"
import Message from "../components/Message.vue";
import AppBar from "../components/AppBar.vue";
import PageFooter from "../components/PageFooter.vue";
import AnswerMain from "../components/AnswerMain.vue";
import mode from "../configs/mode";

export default {
    name: "AnswerPage",
    components: {AnswerMain, PageFooter, AppBar, Message},
    data() {
        return {
            roll: {},
            mode: window.runmod
        }
    },
    mounted() {
        axios.post("/get/roll", JSON.stringify({
            link: this.$route.params.link
        })).then(data => {
            if (data.data.message !== "error") {
                //success
                this.roll = data.data
                document.title = data.data.title
            }
        }).catch(err => {
            if (this.mode !== mode.test) {
                this.message = this.$t("answerError") + " " + err
            }
        })
    }
}
</script>

<style scoped>
#answerPage {
    height: 100vh;
    /*height: calc(100vh - 100px);*/
    width: 100%;
}
</style>