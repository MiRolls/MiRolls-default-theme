<template>
    <div id="homeMain" :style="style">
        <div id="mainText">
            <h1 class="titleOfMain animate__backInDown animate__animated">{{ $t('titleOne') }}</h1>
            <h1 class="titleOfMain animate__backInUp animate__animated">{{ $t("titleTwo") }}|{{ $t("titleTwo2") }}</h1>
            <span id="spanTitle" :class="canRender ? 'animate__fadeIn animate__animated' : 'zero-opacity'">{{ $t("titleThere") }}</span><br/>
            <button id="btnMakePage" :class="canRender ? 'animate__fadeIn animate__animated' : 'zero-opacity'" @click="goMake">{{ $t("titleBtn") }}</button>
        </div>
    </div>
</template>
<script>
export default {
    name: "MainPage",
    data() {
        return {
            style: {
                backgroundColor: "",
            },
            canRender: false,
        }
    },
    created() {
        this.style.backgroundColor = window.site.mainColor;
    },
    mounted() {
        setTimeout(()=>{
            this.canRender = true
        },1000)
    },
    methods: {
        goMake() {
            // window.location.href = "/#/make"
            this.$router.push("/make")
        }
    }
}
</script>
<style>
#homeMain {
    height: 80%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.titleOfMain {
    font-size: 3em;
    line-height: 1em;
}

#mainText {
    text-align: center;
    color: white;
}

#btnMakePage {
    margin-top: 1em;
    display: block;
    height: 35px;
    width: 100%;
    font-size: 16px;
    border: none;
    background-color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.1s;
}

#btnMakePage:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.498);
}

.zero-opacity{
    opacity: 0;
}
</style>