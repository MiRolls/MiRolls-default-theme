<template>
  <div class="footer" :style="{marginTop:margin}">
    <h1>{{name}}</h1>
    <p class="footerButton">{{ $t("footerInt") }}</p>
    <p class="footerButton" :style="icpStyle" @click="goIcp">{{ icp }}</p>
  </div>
</template>
<script>
  export default{
    name:"PageFooter",
    methods:{
      goIcp(){
        if(this.icpBoolean){
          window.location.href="https://beian.miit.gov.cn/";
        }
      }
    },
    props:{
      margin:"margin-top: 50px;"
    },
    data(){
      return {
        name:"米卷",
        icp: "鲁ICP备2022023454号-25",
        icpBoolean:false,
        icpStyle:{}
      }
    },
    created(){
      fetch("/get/site",{
        method:"post",
      }).then(res=>res.json()).then(data=>{
        this.icp = data.icp;
        this.name = data.name;
        this.icpBoolean = data.needIcp;
        this.icpStyle = (this.icpBoolean) ? {cursor:"pointer"} : {}
      })
    },
  }
</script>
<style>
.footer{
  padding: 50px 0 50px 0;
  background-color: rgb(23,27,33);
  text-align: center;
  color: white;
}
.footerButton{
  font-size: 17px;
}
</style>