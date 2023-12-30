<template>
    <div id="notFound">
        <app-bar class="animate__animated animate__fadeOutUp" v-if="appBar"></app-bar>
        <img :src="logo" alt="" id="notFoundLogo" class="animate__animated animate__fadeInDown"/>
        <h1 class="animate__animated animate__fadeInUp">404 Not Found</h1>
    </div>
</template>

<script>
import "animate.css"
import AppBar from "../components/AppBar.vue";

export default {
    components: {AppBar},
    data() {
        return {
            logo: window.site.logo
        }
    },
    props: {
        appBar: false
    },
    name: "NotFound"
}
</script>

<style scoped>
#notFoundLogo {
    height: 40vh;
    width: 40vh;
}

#notFound {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

h1 {
    font-size: 5vh;
}
</style>