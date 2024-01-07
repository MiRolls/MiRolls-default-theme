<template>
    <div id="details">
        <h1 class="title">{{ title }}</h1>
        <!--<div class="answers" v-for="(item,index) in data" @mouseover="()=>showItem = index" @onmouseleave="_=>setTimeout(_=>{showItem = -1},200)">-->
        <div class="answers" v-for="(item,index) in data"
             @mouseover="()=> showItem = index"
             @mouseleave="() => showItem = -1">
            <span>{{ index + 1 }}.{{ $t("questionnaireAnswer") }}</span> <br>
            <span style="color: gray">{{ $t("hoverThis") }}</span>
            <div class="hoverBox" v-show="showItem === index">
                {{ item.answer }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "detailsPage",
    props: {
        title: "", // questionnaire title
        data: Array, // answerList

    },
    data: () => {
        return {
            showItem: -1, //show which item?
        }
    }
}
</script>

<style scoped>
.title {
    margin-bottom: 40px;
}

#details {
    margin-top: calc(73px + 70px);
    margin-left: calc(15% + 65px);
    min-height: calc(100vh - 229px);
    width: calc(85% - 120px * 2);
    border-radius: 12px;
    box-shadow: rgba(27, 31, 35, 0.34) 2px 1px 12px;
    margin-bottom: 70px;
    padding: 60px;
}

.answers {
    width: calc(100% * 0.85);
    height: 40px;
    padding: 10px 30px;
    border-bottom: #b7b7b7 solid 1px;
    cursor: default;
}

.hoverBox {
    background: white;
    width: 250px;
    min-height: 100px;
    position: absolute;
    z-index: 100;
    padding: 40px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.38);
    border-radius: 10px;
    margin-top: -10px;
}
</style>