<template>
    <!--  <div style="width: 100%;height: 100vh;" id="background"> -->
    <dialog-box :show="show">{{ getDialogShowText() }}</dialog-box>
    <div style="width: 100%;" id="background">
        <div id="mainAnswer">
            <h1>{{ rollData.title }}</h1>
            <answer-questions v-for="(quest,index) in rollData.quest" :quest="quest" :indexFor="index"
                              :key="quest+index" :ref="el => answersRef.push(el)"/>
            <button class="submitButton" :style="getMainColor()" @click="submit">{{ $t("submit") }}</button>

        </div>
    </div>
</template>

<script>
import AnswerQuestions from "./AnswerQuestions.vue";
import DialogBox from "./DialogBox.vue";
import axios from "axios";
// import mode from "../configs/mode";

export default {
    name: "AnswerMain",
    components: {DialogBox, AnswerQuestions},
    props: {
        roll: {},
        link: String
    },
    mounted() {
        if (this.roll !== undefined && this.roll !== null) {
            this.rollData = this.roll
        }
        // this.transformAnswer()
    },
    data() {
        return {
            show: "",
            rollData: {
                title: this.$t("makeTitleNormal"),
                quest: [{
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
                ]
            },
            answersRef: [],
            answer: {
                link: this.link,
                answer: []
            },
            NC: "noComplete"
        }
    },
    methods: {
        getDialogShowText() {
            return this.$t(this.NC)
        },
        getMainColor() {
            return {backgroundColor: window.site.mainColor}
        },
        submit() {
            this.getTheAnswers(true);
            axios.post("/answer", this.answer).then(res => {
                if (res.data.message === "error"){
                    this.show = this.show + "hhh";
                    this.NC = "serverError"
                }
            }).catch(() => {
                this.show = this.show + "hhh";
                this.NC = "serverError"
            })
        },
        getTheAnswers(check) {
            this.answer.answer = [];
            this.answersRef.forEach(answer => {
                // console.log(answer)
                this.answer.answer.push(answer.getAnswer())
            });
            let checkRes = this.doCheck()
            if (check) {
                if (!checkRes) {
                    this.show = this.show + "hhh"
                }
            }
        },
        doCheck() {
            let returnValue = true
            this.answer.answer.forEach(array => {
                if (array.length === 0) {
                    returnValue = false;
                }
            })
            return returnValue
        }
    }
}
</script>

<style scoped>
#mainAnswer {
    min-height: calc(100vh - 130px - 100px - 100px);
    width: 85%;
    border-radius: 20px;
    padding: 30px;
    margin: 100px auto 41px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.24);
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    font-size: 1.7em;
}

.submitButton {
    height: 32px;
    background: none;
    border: none;
    border-radius: 8px;
    color: white;
    margin-top: 20px;
    font-size: 16px;
    width: 40%;
}
</style>