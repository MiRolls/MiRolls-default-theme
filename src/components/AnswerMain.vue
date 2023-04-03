<template>
  <!--  <div style="width: 100%;height: 100vh;" id="background"> -->
    <div style="width: 100%;" id="background">
        <div id="mainAnswer">
            <h1>{{ rollData.title }}</h1>
            <answer-questions v-for="(index,quest) in rollData" :quest="quest" :indexFor="index"/>
        </div>
    </div>
</template>

<script>
import AnswerQuestions from "./AnswerQuestions.vue";

export default {
    name: "AnswerMain",
    components: {AnswerQuestions},
    props: {
        roll: {},
    },
    mounted() {
        if (this.roll !== undefined && this.roll !== null) {
            this.rollData = this.roll
        }
    },
    data() {
        return {
            rollData: {
                title: this.$t("makeTitleNormal"),
                quest: [
                    {
                        type: "radio",//或者multipleChoice(多选) / blank(单行填空) manyBlank(多行填空)
                        //如果是radio，或者choice，要填写选项数量
                        optionsNumber: 3,//选项数量，如果是blank就不用加
                        // placeholder: 就是选项相关的提示(placeholder) 如果是选择题就不用加
                        title: this.$t("makeQuestTitleNormal"),//题目的标题
                        options: [ // 填空题不用加
                            this.$t("makeOptions") + "1",
                            this.$t("makeOptions") + "2",
                            this.$t("makeOptions") + "3"
                        ]
                    }
                ],
            },
            answer:{

            }
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
    margin: 100px auto 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.24);
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    font-size: 1.7em;
}
</style>