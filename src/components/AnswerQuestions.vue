<template>
    <div class="answerBar">
        <span class="questionTitle">{{ indexFor + 1 }}. {{ quest.title }}</span>
        <span class="questionType">{{ getType() }}</span>
        <div>
            <div class="options" v-for="(title,index) of quest.options" :key="index + title">
                <div class="changeCircle"/><span>{{ title }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AnswerQuestions",
    props: {
        indexFor: Number,
        quest: {},
    },
    data() {
        return {
            answer: []
        }
    },
    methods: {
        getAnswer() {
            return this.answer
        },
        getType() {
            if (this.quest.type === "radio") {
                return this.$t("singleChoice")
            } else if (this.quest.type === "multipleChoice") {
                return this.$t("multipleChoice")
            } else {
                return this.$t("fillInTheBlank")
            }
        }
    }
}
</script>

<style scoped>
.answerBar {
    border-bottom: #171b21 solid 1px;
    border-top: #171b21 solid 1px;
    padding: 15px 20px;
    width: 100%;
}

.questionType {
    color: #b60000;
}

span {
    font-size: 16px;
}

.options {
    margin-left: 10px;
    font-size: 16px;
    user-select: none;
}

.changeCircle {
    border: solid black 1px;
    border-radius: 2em;
    width: 12px;
    height: 12px;
    float: left;
    margin-top: 4px;
    margin-right: 6px;
}
</style>