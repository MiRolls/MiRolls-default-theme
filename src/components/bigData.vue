<template>
    <div id="bigdata">
        <div class="bigdata-box">
            <span class="title">{{ $t("bigDataOverview") }}</span>
            <span class="number-of-answer">{{ $t("bigDataAnswer") + data.answerOfNumber }}</span>
            <div>
                <div v-for="(item,index) in data.questions" :key="item+index">
                    <div class="question">
                        <span>{{ index + 1 + ". " + item.title }}</span>
                        <span style="color: red">{{ $t(typeToDataType(item.type)) }}</span>
                        <!--Data Boxes-->
                        <!--                    <div class="chart"></div>-->
                        <v-chart :option="optionArray[index]" class="chart"></v-chart>
                    </div>
                    <div class="append-box">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import "echarts";
import VChart from "vue-echarts";
import {onMounted, reactive, ref} from "vue";
import langList from "../../langList";

// const questionsBox = ref(null);
let optionArray = ref([]);

onMounted(() => {
    // let domList = questionsBox.value.children;
    // console.log(domList)
    //options in this var
    data.questions.forEach((item) => {
        //Loop the array
        let option; //new var. option
        if (item.type === "radio") {
            //Single choice
            option = {
                tooltip: {
                    formatter: '{b} : {c} ({d}%)',
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                },
                series: [
                    {
                        type: "pie", //pie
                        data: [],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)',
                            },
                        },
                    }
                ],

            }
            for (let i = 0; i < item.answer.length; i++) {
                option.series[0].data.push({
                    value: item.answer[i].numberOfSelect,
                    name: item.answer[i].option,
                });
            }
        } else if (item.type === "choice") {
            //Multiple choice
            option = {
                tooltip: {
                    // formatter: '{b} : {c}' + t("peopleChoose"),
                    formatter: '{b} : {c}' + langList[window.site.lang].peopleChoose,
                },
                xAxis: {
                    data: []
                },
                yAxis: {},
                series: [
                    {
                        type: 'bar',
                        data: [],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)',
                            },
                        },
                    },
                ]
            };
            for (let i = 0; i < item.answer.length; i++) {
                option.series[0].data.push(item.answer[i].numberOfSelect)
                option.xAxis.data.push(item.answer[i].option)
            }
        } else {
            // fill in the blank
            //
        }

        optionArray.value.push(option)
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
            type: "choice",//类型
            title: "题目标题",
            answer: [
                {
                    option: "选项1",
                    numberOfSelect: 10//选择的人数
                },
                {
                    option: "选项2",
                    numberOfSelect: 80.5//选择的人数
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

.question {
    padding: 25px;
    margin: 20px 12px 0;
    border-radius: 12px 12px 0 0;
    box-shadow: 1px 1px 6px rgb(128, 128, 128);
    width: 80%;
}

.append-box{
    height: 29px;
    border-radius: 0 0 12px 12px;
    box-shadow: 1px 1px 6px rgb(128, 128, 128);
    background: #bdbdbd;
    margin-bottom: 20px;
    margin-left: 12px;
    margin-right: 12px;
    width: calc(80% + 50px)
}

.chart {
    height: 370px;
    width: 100%;
//font-size: 16px;
}
</style>