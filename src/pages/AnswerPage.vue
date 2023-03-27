<template>
  <div id="answerPage">
    <message v-if="message" :message="message"/>
    <app-bar/>
    <page-footer/>
  </div>
</template>

<script>
import axios from "axios"
import Message from "../components/Message.vue";
import AppBar from "../components/AppBar.vue";
import PageFooter from "../components/PageFooter.vue";

export default {
  name: "AnswerPage",
  components: {PageFooter, AppBar, Message},
  data() {
    return {
      message: ""
    }
  },
  mounted() {
    axios.post("/get/roll", JSON.stringify({
      link: this.$route.params.link
    })).then(data => {
      if (data.data.message !== "error") {
        //success
        document.title = data.data.title
      }
    }).catch(err => {
      this.message = this.$t("answerError") + " " + err
    })
  }
}
</script>

<style scoped>
#answerPage {
  height: 100vh;
  width: 100%;
}
</style>