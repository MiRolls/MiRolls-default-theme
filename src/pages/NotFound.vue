<template>
  <div id="notFound">
    <img :src="logo" alt="" id="notFoundLogo"/>
    <h1>404 Not Found</h1>
  </div>
</template>

<script>
export default {
  data(){
    return{
      logo: window.site.logo
    }
  },
  name: "NotFound"
}
</script>

<style scoped>
#notFoundLogo{
  height: 40vh;
  width: 40vh;
}
#notFound{
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
h1{
  font-size: 5vh;
}
</style>