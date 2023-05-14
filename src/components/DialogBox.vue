<template>
    <div class="dialogBackground" :style="showBg ? {display: 'flex'}:{display:'none'}">
        <div class="tips" :style="style">
            <svg class="img" role="img" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"
                 viewBox="0 0 24 24"
                 aria-labelledby="infoIconTitle" stroke="white" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round" fill="none" color="#2329D6"><title id="infoIconTitle">Information</title>
                <path d="M12,12 L12,15"/>
                <line x1="12" y1="9" x2="12" y2="9"/>
                <circle cx="12" cy="12" r="10"/>
            </svg>
            <span class="content"><slot/></span>
        </div>
    </div>
</template>

<script>
export default {
    name: "DialogBox",
    props: {
        show: "",
    },
    data() {
        return {
            style: {opacity: 0},
            showBg: false,
        }
    },
    watch: {
        show() {
            this.style.opacity = 1
            this.hide()
        }
    },
    methods: {
        hide() {
            setTimeout(() => {
                this.style.opacity = 0;
                setTimeout(() => {
                    this.showBg = false
                }, 500)
            }, 1500)
        }
    }
}
</script>

<style scoped>
.tips {
    min-height: 50px;
    background: rgba(182, 0, 0, 0.8);
    border: #e01c1c solid 3px;
    width: 330px;
    padding: 0 20px;
    position: fixed;
    display: flex;
    font-size: 16px;
    margin-top: 10px;
    border-radius: 15px;
    color: white;
    flex-direction: row;
    align-items: center;
    transition: 0.5s;
}


.dialogBackground {
    display: flex;
    height: 100vh;
    position: fixed;
    width: 100%;
    z-index: 2;
    margin-top: -27px;
    flex-direction: column;
    align-items: center;
}

.content {
    margin-left: 5px;
}
</style>