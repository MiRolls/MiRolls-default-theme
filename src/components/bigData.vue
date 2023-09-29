<template>
    <div id="bigdata">
        <div class="bigdata-box">
            <span class="title">{{ $t("bigDataOverview") }}</span>
            <span class="number-of-answer">{{ $t("bigDataAnswer") + data.answerOfNumber }}</span>
            <div ref="questionsBox">
                <div class="questions" v-for="(item,index) in data.questions" :key="item+index">
                    <span>{{ index + 1 + ". " + item.title }}</span>
                    <span style="color: red">{{ $t(typeToDataType(item.type)) }}</span>
                    <!--Data Boxes-->
                    <div class="chart"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {onMounted, reactive, ref} from "vue";
import * as echarts from "echarts/core"

const questionsBox = ref(null);

onMounted(() => {
    let optionArray = [];
    let domList = questionsBox.value.children;
    console.log(domList)
    //options in this var
    data.questions.forEach((item, index) => {
        //Loop the array
        let option; //new var. option
        if (item.type === "radio") {
            //Single choice
            option = {
                series: [
                    {
                        type: "pie", //pie
                        data: []
                    }
                ]
            }
            for (let i = 0; i < item.answer.length; i++) {
                option.series[index].data.push({
                    value: item.answer[i].numberOfSelect,
                    name: item.answer[i].option,
                });
            }
            // console.log(JSON.stringify(option))
        }
        console.log(domList[index].children[2])
        const chart = echarts.init(domList[index].children[2]);
        chart.setOption(option)
        optionArray.push(chart)
    })
})

const typeToDataType = (type) => {
    let dataType;
    if (type === "radio") dataType = "singleChoice"
    else if (type === "choice") dataType = "multipleChoice"
    else dataType = "fillInTheBlank"
    return dataType;
};

const data = reactive({
    title: "问卷的标题",
    answerOfNumber: 400, //有多少个人回答此问卷的。
    questions: [ //在这里记录这每一道题目
        //如果是填空题，应该返回选择数量
        {
            type: "radio",//类型
            title: "题目标题",
            answer: [
                {
                    option: "选项1",
                    numberOfSelect: 10//选择的人数
                },
                {
                    option: "选项2",
                    numberOfSelect: 80//选择的人数
                },
                //有几个选项就来几个对象。
                //有两种写法，一种是写对象进去
                //还有一种是写字符串
                //用哪种写法主要看题目类型
            ]//注意这里是数组
        },//这个例子就是一道多选，再来一个填空
        {
            type: "manyBlank",//类型
            title: "题目的标题",
            answer: [
                "我认为一加一等于二",
                "我认为一加一等于不了任何东西",
                // ...
                //有几个回答就写多少个答案
                //到时候前端直接.length
            ]//注意这里是数组
        },//这个例子就是一道填空
    ]
})
</script>

<style scoped>
#bigdata {
    margin-top: 60px;
    margin-left: 25%;
    min-height: calc(100vh - 229px);
//background: #cbcbcb;
}

.bigdata-box {
    padding: 20px 60px;
    margin-top: 90px;
    margin-bottom: calc(90px - 73px);

//position: absolute;
}

.title {
    font-size: 20px;
    font-weight: bold;
}

.number-of-answer {
    display: block;
    font-size: 16px;
    margin-top: 20px;
}

.questions {
    padding: 25px;
    margin: 20px 12px;
    border-radius: 12px;
    box-shadow: 1px 1px 6px rgb(128, 128, 128);
    width: 80%;
}

.chart{
    height: 100px;
    width: 100%;
}
</style>