<template>
    <div id="bar" :style="style">
        <span id="title">{{ site.name }}</span>
        <span id="secTitle">{{ site.link }}</span>
        <titleBtn :innerHtml="$t('appBarHome')" @click="goHome" />
        <titleBtn :innerHtml="$t('appBarSearch')" @click="resSearch" />
        <titleBtn :innerHtml="$t('appBarMake')" @click="makeQtn" />
        <!-- <LoginOrRegister loginStates="true"></LoginOrRegister> -->
        <LoginOrRegister loginStates :userHeadImg="site.logo"></LoginOrRegister>
    </div>
</template>
<script>
  import titleBtn from "./titleBtn.vue";
  import LoginOrRegister from "./LoginOrRegister.vue"
  import {useRouter} from "vue-router";
  export default {
    name: 'AppBar',
      methods: {
      goHome() {
        // window.location.href = "/#/";
        // this.$router.push({path: "/"})
        this.$router.push("/")
      },
      resSearch() {
        this.$router.push("/search")
      },
      makeQtn() {
        this.$router.push("/make")
      }
    },
    components: {titleBtn, LoginOrRegister},
    data(){
      return{
        site:{
          name:"",
          link:"",
          logo:""
        },
        style:{
          backgroundColor: "rgb(21, 127, 248)"
        }
      }
    },
    created(){
      // fetch("/get/site",{
      //   method:"post",
      // }).then(res=>res.json()).then(data=>{
      //   console.log(data)
      //   this.site = data;
        // this.style.backgroundColor = data.mainColor;
      // })
      this.site = window.site
      this.style.backgroundColor = window.site.mainColor
    },
  }
</script>
<style>
    #bar {
        width: 100%;
        height: 33px;
        padding-top: 20px;
        padding-bottom: 20px;
        box-shadow: 0 0 12px rgba(0, 0, 0, 0.581);
        color: white;
        position: fixed;
        top: 0;
        margin-top: 0;
        z-index: 999;
    }

    #title {
        margin-left: 100px;
        margin-right: 5%;
        line-height: 28px;
        font-size: 28px;
        font-weight: 400;
    }

    #secTitle {
        position: absolute;
        top: 48px;
        left: 100px;
        font-size: 5px;
        margin-left: 3px;
    }
</style>