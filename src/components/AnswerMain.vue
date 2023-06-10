<template>
    <!--  <div style="width: 100%;height: 100vh;" id="background"> -->
    <dialog-box :show="show" :bg-color="dialogBg">{{ getDialogShowText() }}</dialog-box>
    <div style="width: 100%;" id="background">
        <div id="mainAnswer">
            <h1>{{ roll.title }}</h1>
            <answer-questions v-for="(quest,index) in roll.quest" :quest="quest" :indexFor="index"
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
            dialogBg: "#f62727",
            show: "",
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
            if (this.getTheAnswers(true)) {
                axios.post("/answer", {link: this.link, answer: this.answer}).then(res => {
                    if (res.data.message === "error") {
                        this.show = this.show + "hhh";
                        this.NC = "serverError"
                    } else {
                        // submit success
                        this.dialogBg = "rgb(38,157,106)"
                        this.show = this.show + "hhh";
                        this.NC = "submitSuccess"
                        setTimeout(() => {
                            this.$router.push("/")
                        }, 3500)
                    }
                }).catch(() => {
                    this.show = this.show + "hhh";
                    this.NC = "serverError"
                })
            }
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
                    return false;
                }
            }
            return true
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