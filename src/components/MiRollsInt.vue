<template>
    <div :class="animation ? 'IntOfPage animate__fadeInLeft animate__animated' : 'IntOfPage'">
        <div class="markdown">
            <!--        <h1 class="IntOfTitle">{{ name }}</h1>-->
            <!--        <img :src="logo" :alt="name" class="IntOfImage">-->
            <v-md-editor mode="preview" :model-value="markdown"></v-md-editor>
        </div>
    </div>
</template>
<script>
import VMdEditor from "@kangc/v-md-editor";

export default {
    name: "MiRollsInt",
    props: {
        animation: false,
    },
    created() {
        this.logo = window.site.logo;
        this.name = window.site.name;
        this.markdown = window.site.introduce;
    },
    data() {
        return {
            logo: "",
            name: "",
            markdown: "",
        }
    },
    components: {
        VMdEditor
    }
}
</script>
<style>
.IntOfPage {
    animation-duration: 2s;
    display: flex;
    justify-content: center;
}

/* .IntOfTitle {
    margin-top: 3em;
}*/

/*image {
    max-width: 60%;
    height: 300px;
    margin-bottom: 3em;
}*/
.github-markdown-body img {
    max-width: 80%;
    max-height: 300px;
    margin-bottom: 3em;
    text-align: center;
}
.v-md-editor-preview img {
    display: block;
    margin: auto;
}
.github-markdown-body h1 {
    text-align: center;
}
.markdown{
    width: 60%;
}
</style>