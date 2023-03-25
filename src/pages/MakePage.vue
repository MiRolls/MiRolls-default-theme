<template>
  <div style="height: 100%;">
    <Message v-if="message" :message="message"></Message>
    <AppBar></AppBar>
    <MakePageLeftControl @add="addQuest" @submit="submitRoll" @title-change="changeTitle" @save-roll="saveRoll"/>
    <RollsPage ref="rollsPage" :title="rollsTitle"/>
    <PageFooter style="margin-left: 30%"/>
  </div>
</template>
<script>
import AppBar from "../components/AppBar.vue";
import MakePageLeftControl from "../components/MakePageLeftControl.vue";
import PageFooter from "../components/PageFooter.vue";
import RollsPage from "../components/RollsPage.vue";
import Message from "../components/Message.vue";
export default {
  name:"MakePage",
  methods: {
    changeTitle(value) {
      this.rollsTitle = value;
    },
    addQuest(questSetting) {
      this.$refs.rollsPage.addQuestValue(questSetting.type, questSetting.optionsNumber)
    },
    saveRoll() {
      if(this.$refs.rollsPage.saveQuest()){
        this.message = this.$t("messageCookiesSuccess")
      }else{
        this.message = this.$t("messageCookiesError")
      }
    },
    submitRoll() {
      this.message = this.$t('messageLoading')
      fetch("/roll/create",{
        method:"post",
        body:this.$refs.rollsPage.getRoll()
      }).then(res=>res.json()).then(data=>{
        if(data.message === "success"){
          // if success
          console.log("success",data)
          // noinspection JSUnresolvedVariable
          this.message = this.$t('messageUpdateSuccess') + `${data.rollCode}, ${this.$t("messageUpdateSuccess2")} ${this.siteLink}${data.rollLink} ${this.$t("messageUpdateSuccess3")}`
        }else {
          // if error
          // noinspection JSUnresolvedVariable
          this.message = this.$t('messageDatabaseError') + ` Error:${data.error}, ErrorType:${data.errorType}`
        }
      }).catch(()=>{
        this.message = this.$t('messageDatabaseError')
      })
    }
  },
  data(){
    return{
      rollsTitle:this.$t("makeTitleNormal"),
      message: "",
      siteLink:"data"
    }
  },
  components: {RollsPage, PageFooter, MakePageLeftControl, AppBar,Message},
  mounted() {
    // axios.post("/get/site").then(data=>{
    //   this.siteLink = data.data.link
    // })
    this.siteLink = window.site.link
  }
}
</script>