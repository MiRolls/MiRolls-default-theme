<template>
    <span>
        <img v-if="loginStates" :src="userHeadImg" alt="Img" id="head">
        <button v-else id="loginOrRegister">{{$t("loginOrRegister")}}</button>
    </span>
</template>
<script>
    export default {
        name: "LoginOrRegister",
        props: {
            loginStates: Boolean,
            userHeadImg: String,
        }
    }
</script>
<style>
    #loginOrRegister {
        background-color: rgb(255, 225, 0);
        border: none;
        border-radius: 200em;
        height: 33px;
        padding: 0 16px 0 16px;
        font-size: 16px;
        right: 100px;
        position: absolute;
    }

    #head {
        max-width: 33px;
        max-height: 33px;
        right: 100px;
        position: absolute;
        border-radius: 2em;
        border: 1px black solid;
    }
</style>