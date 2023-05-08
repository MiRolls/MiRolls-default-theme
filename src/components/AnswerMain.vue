<template>
  <!--  <div style="width: 100%;height: 100vh;" id="background"> -->
    <div style="width: 100%;" id="background">
        <div id="mainAnswer">
            <h1>{{ rollData.title }}</h1>
            <answer-questions v-for="(quest,index) in rollData.quest" :quest="quest" :indexFor="index"
                              :key="quest+index" :ref="el => answersRef.push(el)"/>
        </div>
    </div>
</template>

<script>
import AnswerQuestions from "./AnswerQuestions.vue";
// import mode from "../configs/mode";

export default {
    name: "AnswerMain",
    components: {AnswerQuestions},
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
            rollData: {
                title: this.$t("makeTitleNormal"),
                quest: [],
            },
            answersRef: [],
            answer: {
                link: this.link,
                answer: []
            }
        }
    },
    methods: {
        gettingAnswer() {
            this.answersRef.forEach(answer => {
                this.answer.answer.push(answer.getAnswer())
            })
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
</style>