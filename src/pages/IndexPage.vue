<template>
    <div id="Index">
        <AppBar></AppBar>
        <MainPage></MainPage>
        <MiRollsInt :animation="animation"></MiRollsInt>
        <PageFooter></PageFooter>
    </div>
</template>
<script>

import AppBar from "../components/AppBar.vue";
import MainPage from "../components/MainPage.vue";
import MiRollsInt from "../components/MiRollsInt.vue";
import PageFooter from "../components/PageFooter.vue";

export default {
    name: "IndexPage",
    components: {PageFooter, MiRollsInt, MainPage, AppBar},
    data() {
        return {
            animation: false
        }
    },
    mounted() {
        window.addEventListener('scroll', () => {
            setTimeout(()=>{
                this.animation = true
            })
        });
    },
    unmounted() {
        window.removeEventListener('scroll', () => {
            setTimeout(()=>{
                this.animation = true
            })
        })
    }
}
</script>
<style>
#Index {
    height: 100%;
}
</style>