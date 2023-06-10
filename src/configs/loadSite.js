import modes from "./mode";

function loadSite(mode, callback) {
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

export default loadSite