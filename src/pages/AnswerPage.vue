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
                console.log("request success")
                //success
                this.roll = JSON.parse(data.data.roll);
                document.title = data.data.title
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
                        title: "问卷标题",
                        quest: [
                            // ...一些题目
                            //选择题
                            {
                                type: "radio",
                                optionsNumber: 3, //选择题特有的选项
                                title: "问题题目",
                                options: [
                                    // 一个数组。应该遵循与optionsNumber
                                    "选项1",
                                    "选项2",
                                    "选项3"
                                ]
                            },
                            //填空题
                            {
                                type: "blank",
                                placeholder: "题目的提示",
                                title: "问题的题目"
                            }
                            // 类型：multipleChoice 为多选，
                            // blank 单行填空，
                            // manyBlank 多行填空
                        ],
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