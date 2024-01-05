<template>
    <div style="height: 100vh;">
        <Message v-if="message" :message="message" :height="-100"></Message>
        <AppBar></AppBar>
        <MakePageLeftControl :title="rollsTitle" @add="addQuest" @submit="submitRoll" @title-change="changeTitle"
                             @save-roll="saveRoll"/>
        <RollsPage ref="rollsPage" :title="rollsTitle"/>
        <PageFooter style="margin-left: 24%"/>
    </div>
</template>
<script>
import AppBar from "../components/AppBar.vue";
import MakePageLeftControl from "../components/MakePageLeftControl.vue";
import PageFooter from "../components/PageFooter.vue";
import RollsPage from "../components/RollsPage.vue";
import Message from "../components/Message.vue";
import axios from "axios"
import make_roll_tutorial from "../configs/tutorial/make_roll";
import mode from "../configs/mode";

export default {
    name: "MakePage",
    methods: {
        changeTitle(value) {
            this.rollsTitle = value;
        },
        addQuest(questSetting) {
            this.$refs.rollsPage.addQuestValue(questSetting.type, questSetting.optionsNumber)
        },
        saveRoll() {
            if (this.$refs.rollsPage.saveQuest()) {
                this.message = this.$t("messageCookiesSuccess")
            } else {
                this.message = this.$t("messageCookiesError")
            }
        },
        submitRoll() {
            this.message = this.$t('messageLoading')
            axios.post("/roll/create", this.$refs.rollsPage.getRoll())
                .then(data => data.data)
                .then(data => {
                    if (data.message === "success") {
                        // if success
                        console.log("success", data)
                        // noinspection JSUnresolvedVariable
                        this.message = this.$t('messageUpdateSuccess') + `${data.rollCode}, ${this.$t("messageUpdateSuccess2")} ${this.siteLink}answer/${data.rollLink} ${this.$t("messageUpdateSuccess3")}`
                    } else {
                        // if error
                        // noinspection JSUnresolvedVariable
                        this.message = this.$t('messageDatabaseError') + ` Error:${data.error}`
                    }
                }).catch(err => {
                this.message = this.$t('messageDatabaseError') + " " + err
            })
        }
    },
    data() {
        return {
            rollsTitle: this.$t("makeTitleNormal"),
            message: "",
            siteLink: ""
        }
    },
    components: {RollsPage, PageFooter, MakePageLeftControl, AppBar, Message},
    mounted() {
        // axios.post("/get/site").then(data=>{
        //   this.siteLink = data.data.link
        // })
        this.$cookies.config('99999d')
        if (!this.$cookies.isKey("MakePageTutorial")) {// it's boolean
            this.$cookies.set("MakePageTutorial")
            make_roll_tutorial()
        }
        if (window.runmod === mode.test) {
            this.$cookies.remove("MakePageTutorial")
        }
        this.siteLink = window.site.link
    }
}
</script>