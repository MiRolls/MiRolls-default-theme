import {createApp} from 'vue'
import App from './App.vue'
import './index.css'
import VueCookies from 'vue-cookies'
import {getRouter} from "./configs/router";
import {getI18n} from "./configs/i18n";
import modes from "./configs/mode";

request(modes.test, () => {
    const i18n = getI18n(window.site)
    const router = getRouter(window.site)

    const app = createApp(App);
    app.use(router);
    app.use(VueCookies);
    app.use(i18n)
    app.mount('#app');
})

function request(mode, callback) {
    window.runmod = mode
    if (mode === modes.test) {
        let site = {
            message: "success",
            name: "米卷",
            link: "https://localhost:3000/",
            logo: "/favicon.png",
            mainColor: "rgb(21, 127, 248)",
            icp: "A nice questionnaire system",
            lang: "zh",
            needIcp: 0
        }
        // site = {}
        setTimeout(() => {
            siteChanger(site)
        }, 500)
        //simulation ping value
    } else {
        fetch("/get/site", {
            method: "POST"
        }).then(res => res.json()).then(site => {
            siteChanger(site)
        })
    }

    function siteChanger(site) {
        document.getElementById("favicon").href = site.logo;
        document.documentElement.lang = site.lang;
        window.site = site;
        document.getElementById("titleForIndex").innerHTML = site.name;
        callback()
    }
}