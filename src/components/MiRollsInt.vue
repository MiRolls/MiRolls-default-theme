<template>
    <div class="IntOfPage">
        <!--        <h1 class="IntOfTitle">{{ name }}</h1>-->
        <!--        <img :src="logo" :alt="name" class="IntOfImage">-->
        <v-md-editor mode="preview" :model-value="markdown"></v-md-editor>
    </div>
</template>
<script>
import VMdEditor from "@kangc/v-md-editor";

export default {
    name: "MiRollsInt",
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
    text-align: center;
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
    max-width: 60%;
    height: 300px;
    margin-bottom: 3em;
}
</style>