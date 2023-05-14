<template>
    <div class="answerBar" :style="indexFor === 0 ? {borderTop:'#171b21 solid 1px'} : {}" >
        <span class="questionTitle">{{ indexFor + 1 }}. {{ quest.title }}</span>
        <span class="questionType">{{ getType() }}</span>
        <!--        <div v-if="quest.type !== 'blank' || quest.type !== 'manyBlank'">-->
        <div v-if="quest.type === 'radio' || quest.type === 'multipleChoice'">
            <div class="options" v-for="(title,index) of quest.options" :key="index + title" @click="select(index)">
                <div :class="'changeCircle'" :style="answer[index] ? this.beChoose : {}"/>
                <span>{{ title }}</span>
            </div>
        </div>
        <div v-if="quest.type === 'blank'">
            <input type="text" :placeholder="quest.placeholder" @change="onInput">
        </div>
        <div v-if="quest.type === 'manyBlank'">
            <!--        <div v-if="quest.type === 'blank'">-->
            <textarea class="manyBlank" :placeholder="quest.placeholder"
                      @change="onInput"/>
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
            answer: [],
            mainColor: window.site.mainColor,
            beChoose: {
                backgroundColor: window.site.mainColor,
                border: `solid ${window.site.mainColor} 1px`,
            }
        }
    },
    mounted() {
    },
    methods: {
        getAnswer() {
            return this.answer
        },
        onInput(event) {
            this.answer[0] = event.target.value
        },
        select(index) {
            this.answer.length = this.quest.options.length;
            //分为两种情况
            if (this.quest.type === "radio") {//单选题情况
                this.answer.fill(false);
                this.answer[index] = true
            } else {//多选题情况
                this.answer[index] = this.answer[index] !== true;
            }
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
//border-top: #171b21 solid 1px; padding: 15px 20px; width: 100%;
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
    width: 8px;
    height: 8px;
    padding: 2px;
    float: left;
    margin-top: 4px;
    margin-right: 6px;
//background-color: #b60000;
}

.changeCircle::after {
    border: white solid;
    border-radius: 100em;
    width: 7px;
    height: 7px;
    content: "";
    margin-top: -1px;
    margin-left: -1px;
    display: block;
}

.manyBlank {
    font-size: 16px;
    outline: none;
    width: 80%;
    height: 100px;
    border-radius: 10px;
    border: #dddddd solid;
    resize: none;
    padding: 0.5em;
    margin-left: 10px;
}

input[type=text] {
    border: none;
    font-size: 16px;
    width: 50%;
    margin-top: 5px;
    border-bottom: black solid;
    padding: 4px 4px 0;
    outline: none;
    height: 20px;
    margin-left: 10px;
}
</style>