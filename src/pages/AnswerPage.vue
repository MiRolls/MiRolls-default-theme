<template>
    <div id="answerPage" v-if="find === 1">
        <!--        <message v-if="roll.title" :message="roll.title" height="100px"/>-->
        <app-bar/>
        <!--        <answer-main :roll="roll" :link="$route.params.link"/>-->
        <answer-main :link="$route.params.link" :roll="roll"/>
        <page-footer/>
    </div>
    <not-found v-if="find === 3"/>
</template>

<script>
import axios from "axios"
import Message from "../components/Message.vue";
import AppBar from "../components/AppBar.vue";
import PageFooter from "../components/PageFooter.vue";
import AnswerMain from "../components/AnswerMain.vue";
import NotFound from "./NotFound.vue";
import mode from "../configs/mode";

export default {
    name: "AnswerPage",
    components: {AnswerMain, PageFooter, AppBar, Message, NotFound},
    data() {
        return {
            roll: {},
            mode: "release",
            // mode: "test",
            find: 0,
        }
    },
    created() {
        axios.post("/get/roll", JSON.stringify({
            link: this.$route.params.link
        })).then(data => {
            if (data.data.message !== "error") {
                //success
                this.roll = JSON.parse(data.data.roll);
                document.title = this.roll.title
                this.find = 1
            } else {
                this.find = 3
            }
        }).catch(err => {
            if (this.mode !== mode.test) {
                this.find = 3
                this.message = this.$t("answerError") + " " + err
            } else {
                setTimeout(() => {
                    this.find = 1;
                    this.roll = {
                        "title": "这是一张新的问卷",
                        "quest": [
                            {
                                "type": "choice",
                                "optionsNumber": 3,
                                "title": "多选题测试",
                                "options": [
                                    "选项 1",
                                    "选项 2",
                                    "选项 3"
                                ]
                            },
                            {
                                "type": "choice",
                                "optionsNumber": 3,
                                "title": "多选题测试",
                                "options": [
                                    "选项 1",
                                    "选项 2",
                                    "选项 3"
                                ]
                            },
                            {
                                "type": "manyBlank",
                                "title": "多行填空测试",
                                "placeholder": ""
                            },
                            {
                                "type": "blank",
                                "title": "单行填空测试",
                                "placeholder": ""
                            },
                            {
                                "type": "choice",
                                "optionsNumber": 2,
                                "title": "测试选项数量单选",
                                "options": [
                                    "选项 1",
                                    "选项 2"
                                ]
                            },
                            {
                                "type": "manyBlank",
                                "title": "多行的提示测试",
                                "placeholder": "其他测试"
                            },
                            {
                                "type": "blank",
                                "title": "单行的提示测试",
                                "placeholder": "1"
                            },
                            {
                                "type": "choice",
                                "optionsNumber": 2,
                                "title": "选项数量多选",
                                "options": [
                                    "选项 3",
                                    "选项 1"
                                ]
                            }
                        ]
                    };
                }, 500)
            } //if not test mode
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