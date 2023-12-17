<template>
    <div id="notFound">
        <img :src="logo" alt="" id="notFoundLogo" class="animate__animated animate__headShake"/>
        <h1 class="animate__animated animate__backInUp">404 Not Found</h1>
    </div>
</template>

<script>
import "animate.css"

export default {
    data() {
        return {
            logo: window.site.logo
        }
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