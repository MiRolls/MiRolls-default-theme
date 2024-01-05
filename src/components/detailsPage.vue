<template>
    <div id="details">
        <div class="answers"><span>1.问卷回答</span></div>
    </div>
</template>

<script>
export default {
    name: "detailsPage"
}
</script>

<style scoped>

#details {
    margin-top: calc(73px + 70px);
    margin-left: calc(15% + 65px);
    min-height: calc(100vh - 229px);
    width: calc(85% - 120px);
    border-radius: 12px;
    box-shadow: rgba(27, 31, 35, 0.34) 2px 1px 12px;
    margin-bottom: 70px;
}

.answers {
    width: calc(100% * 0.85);
    height: 40px;
    padding: 10px 30px;
    border-bottom: #b7b7b7 solid 1px;
}
</style>